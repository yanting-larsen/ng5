import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  fileData: string;

  constructor() { }

  ngOnInit() {
  }

  public handleFile($event) {
    this.readFile($event.target);
  }

  public readFile(inputValue: any) {
    const file: File = inputValue.files[0];
    const reader: FileReader = new FileReader();

    reader.onloadend = (e) => {
      this.fileData = btoa(reader.result);
    };

    reader.readAsBinaryString(file);
  }

  public submitFile(): void {
    console.log(this.fileData);
  }
}
