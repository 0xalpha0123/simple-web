import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BarcodeFormat } from '@zxing/library';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-tool-qbcode',
    templateUrl: './tool-qbcode.component.html',
    styleUrls: ['./tool-qbcode.component.scss']
})
export class ToolQbcodeComponent implements OnInit {

    public qrcode: string = 'Hello World';
    public barcode: string = 'Hello World';
    public version: number = 2;
    public scanEnable: Boolean = false;

    availableDevices: any = [];
    public deviceCurrent: any;
    deviceSelected: string = '';
  
    formatsEnabled: BarcodeFormat[] = [
        BarcodeFormat.CODE_128,
        BarcodeFormat.DATA_MATRIX,
        BarcodeFormat.EAN_13,
        BarcodeFormat.QR_CODE,
    ];
  
    hasDevices: boolean = false;
    hasPermission: boolean = false;
  
    qrResultString: string = '';
  
    torchEnabled = false;
    torchAvailable$ = new BehaviorSubject<boolean>(false);
    tryHarder = false;
    isQRCode = true;

    constructor(private readonly _dialog: MatDialog) { }

    ngOnInit(): void {
    }

    qrcodeHandler(event: any) {
        this.qrcode = event.target.value;
    }

    barcodeHandler(event: any) {
        this.barcode = event.target.value;
    }

    handleScanner() {
        this.scanEnable = !this.scanEnable;
    }
  
    onCamerasFound(devices: MediaDeviceInfo[]): void {
        this.availableDevices = devices;
        this.hasDevices = Boolean(devices && devices.length);
    }
  
    onCodeResult(resultString: string) {
        this.qrResultString = resultString;
    }
  
    onDeviceSelectChange(selected: string) {
        const selectedStr = selected || '';
        if (this.deviceSelected === selectedStr) { return; }
        this.deviceSelected = selectedStr;
        const device = this.availableDevices.find((x: { deviceId: string; }) => x.deviceId === selected);
        this.deviceCurrent = device || undefined;
        this.qrResultString = '';
    }
  
    onDeviceChange(device: MediaDeviceInfo) {
        const selectedStr = device?.deviceId || '';
        if (this.deviceSelected === selectedStr) { return; }
        this.deviceSelected = selectedStr;
        this.deviceCurrent = device || undefined;
    }
  
    onHasPermission(has: boolean) {
        this.hasPermission = has;
    }
  
    onTorchCompatible(isCompatible: boolean): void {
        this.torchAvailable$.next(isCompatible || false);
    }

    handleToggle() {
        this.isQRCode = !this.isQRCode;
    }
}
