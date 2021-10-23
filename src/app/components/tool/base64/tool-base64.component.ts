import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-base64',
  templateUrl: './tool-base64.component.html',
  styleUrls: ['./tool-base64.component.scss']
})
export class ToolBase64Component implements OnInit {

  public plainText: string = '';
  public encodedText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  plainTextHandler(event: any) {
    this.plainText = event.target.value;
    this.encodedText = btoa(this.plainText);
    console.log(this.encodedText)
  }

  encodedTextHandler(event: any) {
    this.encodedText = event.target.value;
    this.plainText = atob(this.encodedText);
  }

}
