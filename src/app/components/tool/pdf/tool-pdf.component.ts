import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-pdf',
  templateUrl: './tool-pdf.component.html',
  styleUrls: ['./tool-pdf.component.scss']
})
export class ToolPdfComponent implements OnInit {

  public isPdfUploaded: Boolean = false;
  public pdfSrc: any;

  constructor() { }

  ngOnInit(): void {
  }

  public uploadFile(event:any) {
    let $img: any = document.querySelector('#upload-doc');
    if(event.target.files[0].type == 'application/pdf'){
      if (typeof (FileReader) !== 'undefined') {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.pdfSrc = e.target.result;
        };
        this.isPdfUploaded = true;
        reader.readAsArrayBuffer($img.files[0]);
      }
    } else{
      alert('Please upload pdf file')
    }
  }

}
