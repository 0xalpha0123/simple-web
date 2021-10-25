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
        $(".page").css('height', 'unset')
        $(".page").css('width', 'unset')
    }

    public fit() {
        $(".page").css('height', '')
        $(".page").css('width', '')
    }
    
    public previous() {
        if (this.currentpage > 0) {
            if (this.currentpage == 1) {
                this.currentpage = this.totalPages;
            } else {
                this.currentpage--;
            }
        }
    }
     
    public next() {
        if (this.totalPages > this.currentpage) {
            this.currentpage = this.currentpage + 1 ;
        } else {
            this.currentpage = 1;
        }
    }

    public crop() {
        html2canvas(document.querySelector("canvas") as HTMLElement).then((canvas: any) => {

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
        })
      }
     
      public download() {
        var link = document.createElement('a');
        link.download = "my-image.png";
        link.href = this.imageBase64;
        console.log('link', link)
        link.click();
      }

      public reset() {
        this.isCropImage = false;
        this.cropper.clear();
        this.cropper.destroy();
      }

}
