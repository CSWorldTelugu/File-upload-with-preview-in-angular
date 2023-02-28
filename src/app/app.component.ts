import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {


  constructor() { }

  uploads = []

  saveImages(e: any) {

    let totalFiles = e.target.files;
    if (totalFiles.length > 0) {
      for (let i = 0; i < totalFiles.length; i++) {
        let file = totalFiles[i];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e: any) => {
          let url = e.target.result;
          this.uploads.push(url)

        }
      }

      e.target.value = ""


    }
  }

  deleteImage(i: any) {
    this.uploads.splice(i, 1)
  }



}




























