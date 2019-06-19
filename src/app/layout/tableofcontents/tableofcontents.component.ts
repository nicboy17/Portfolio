/* tslint:disable:max-line-length */
import {Component, ElementRef, HostListener, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {debounceTime, takeUntil, window} from 'rxjs/operators';
import {fromEvent, Subject} from 'rxjs';

interface Link {
  id: string;
  type: string;
  active: boolean;
  name: string;
  top: number;
}

@Component({
    selector: 'app-tableofcontents',
    templateUrl: './tableofcontents.component.html',
    styleUrls: ['./tableofcontents.component.scss']
})
export class TableofcontentsComponent implements OnInit, OnDestroy {
    @Input() links;
    @Input() container: string;
    @Input() headerSelectors = '';

    private _scrollContainer: any;
    private _destroyed = new Subject();

    constructor(private _element: ElementRef, @Inject(DOCUMENT) private _document: Document) { }

    ngOnInit() {
        this._document.querySelector('.content-area').scrollTop = 0;

        Promise.resolve().then(() => {
            this._scrollContainer = this.container ? this._document.querySelectorAll(this.container)[0] : window;

            if (this._scrollContainer) {
                this.links = this.createLinks();
                fromEvent(this._document.querySelectorAll('div.content-area')[0], 'scroll')
                    .pipe(takeUntil(this._destroyed), debounceTime(10))
                    .subscribe(() => this.onScroll());
            }
        });
    }

    private onScroll(): void {
        for (let i = 0; i < this.links.length; i++) {
            this.links[i].active = this.isLinkActive(this.links[i], this.links[i + 1]);
        }
    }

    goToLink(index: number) {
        this._document.querySelector('.content-area').scrollTop = this.links[index].top - this._element.nativeElement.getBoundingClientRect().top + 1;
    }

    private isLinkActive(currentLink: Link, nextLink: Link): boolean {
        // A link is considered active if the page is scrolled passed the anchor without also
        // being scrolled passed the next link
        const scrollOffset = this.getScrollOffset();
        return scrollOffset >= currentLink.top && !(nextLink && nextLink.top < scrollOffset);
    }


    private createLinks(): Link[] {
        const links = [];
        const headers = Array.from(this._document.querySelectorAll(this.headerSelectors)) as HTMLElement[];

        if (headers.length) {
            for (const header of headers) {
                const name = header.innerText.split('-')[0].trim();
                const {top} = header.getBoundingClientRect();
                links.push({
                    name,
                    type: header.tagName.toLowerCase(),
                    top: top,
                    id: header.id,
                    active: false
                });
            }
        }

        return links;
    }

    private getScrollOffset(): number {
        const {top} = this._element.nativeElement.getBoundingClientRect();

        if (typeof this._document.querySelectorAll('div.content-area')[0].scrollTop !== 'undefined') {
          return this._document.querySelectorAll('div.content-area')[0].scrollTop + top;
        } else if (typeof this._scrollContainer.pageYOffset !== 'undefined') {
          return this._scrollContainer.pageYOffset + top;
        }
    }

    ngOnDestroy(): void {
        this._destroyed.next();
    }
}
