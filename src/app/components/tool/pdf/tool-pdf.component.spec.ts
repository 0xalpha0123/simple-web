import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolPdfComponent } from './tool-pdf.component';

describe('ToolPdfComponent', () => {
    let component: ToolPdfComponent;
    let fixture: ComponentFixture<ToolPdfComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ ToolPdfComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ToolPdfComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
