import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableofcontentsComponent } from './tableofcontents.component';

describe('TableofcontentsComponent', () => {
    let component: TableofcontentsComponent;
    let fixture: ComponentFixture<TableofcontentsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TableofcontentsComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TableofcontentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
