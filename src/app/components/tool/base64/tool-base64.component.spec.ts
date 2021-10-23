import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBase64Component } from './tool-base64.component';

describe('ToolBase64Component', () => {
  let component: ToolBase64Component;
  let fixture: ComponentFixture<ToolBase64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolBase64Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBase64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
