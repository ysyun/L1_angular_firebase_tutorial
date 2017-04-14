import { Component, OnInit, Input } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
    selector: 'nav-component',
    templateUrl: 'nav.component.html'
})

export class NavComponent implements OnInit {

    @Input() title: string;

    constructor(private camera: Camera) { }

    ngOnInit() { }

    openCamera() {
        const options: CameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,      
            quality: 100,
            targetWidth: 1000,
            targetHeight: 1000,
            encodingType: this.camera.EncodingType.JPEG,      
            correctOrientation: true
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            let base64Image: any = 'data:image/jpeg;base64,' + imageData;
            console.log('capture image', base64Image);
        }, (err) => {
            // Handle error
            console.log('exception', err);
        });
    }
}