import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import Cropper from 'cropperjs';
import * as $ from 'jquery';

@Component({
    selector: 'app-tool-pdf',
    templateUrl: './tool-pdf.component.html',
    styleUrls: ['./tool-pdf.component.scss']
})
export class ToolPdfComponent implements OnInit {

    public isPdfUploaded: Boolean = false;
    public pdfSrc: any;
    public currentpage: number = 1;
    public totalPages: number = 0;
    public isCropImage: Boolean = false;
    public cropper: any = null;
    public imageBase64: string = '';

    constructor() { }

    ngOnInit(): void {
    }

    public uploadFile(event:any) {
        this.currentpage = 1;
        this.totalPages = 0;
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

    public afterLoadComplete(pdf: any) {
        this.totalPages = pdf.numPages;
    }
     
    public async download() {
        // await this.processPdf();
        while(this.currentpage <= this.totalPages) {
            // console.log(this.currentpage)
            this.currentpage = this.currentpage + 1;
            await this.processPdf();
        }
    }

    public async processPdf() {
        await html2canvas(document.querySelector("canvas") as HTMLElement).then((canvas: any) => {
            console.log(this.currentpage)
            let ctx = canvas.getContext('2d');
            ctx.scale(3, 3);
            let image = canvas.toDataURL("image/png").replace("image/png", "image/png");
            this.imageBase64 = image;
            $("#cropper-img").attr('src', image);
            $('#cropper-img').addClass('ready');
            this.isCropImage = true
            let cropImg: any = document.getElementById('cropper-img');
            this.cropper = new Cropper(cropImg, {
                ready: (e) => {
                    let cropper = this.cropper;
                },
                crop: (e) => {
                }
            });
            var link = document.createElement('a');
            link.download = "my-image.png";
            link.href = this.imageBase64;
            link.click();
        })
      }
}
