import {Component, Inject, Input, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';

interface Link {
  /* id of the section*/
  id: string;

  /* header type h3/h4 */
  type: string;

  /* If the anchor is in view of the page */
  active: boolean;

  /* name of the anchor */
  name: string;

  /* top offset px of the anchor */
  top: number;
}

@Component({
    selector: 'app-tableofcontents',
    templateUrl: './tableofcontents.component.html',
    styleUrls: ['./tableofcontents.component.scss']
})
export class TableofcontentsComponent implements OnInit {
    @Input() links;
    @Input() container: string;
    @Input() headerSelectors = 'h3, h6#title';

    constructor(@Inject(DOCUMENT) private _document: Document) { }

    ngOnInit() {}



    private createLinks(): Link[] {
        const links = [];
        const headers = Array.from(this._document.querySelectorAll(this.headerSelectors)) as HTMLElement[];

        if (headers.length) {
            for (const header of headers) {
                console.log(header.textContent)
                const name = header.innerText.trim();
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

}
