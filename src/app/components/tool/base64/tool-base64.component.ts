import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-base64',
  templateUrl: './tool-base64.component.html',
  styleUrls: ['./tool-base64.component.scss']
})
export class ToolBase64Component implements OnInit {

  public text: string = '';
  public encodedText: string = '';
  public isEncode: any = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleChange(event: any) {
    this.text = event.target.value;
  }

  handleToggle() {
    this.isEncode = !this.isEncode;
    if (this.isEncode) {
      this.text = btoa(this.text);
    } else {
      this.text = atob(this.text);
    }
  }

}
