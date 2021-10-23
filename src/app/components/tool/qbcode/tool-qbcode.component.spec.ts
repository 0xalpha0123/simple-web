import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolQbcodeComponent } from './tool-qbcode.component';

describe('ToolQbcodeComponent', () => {
    let component: ToolQbcodeComponent;
    let fixture: ComponentFixture<ToolQbcodeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ ToolQbcodeComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ToolQbcodeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
