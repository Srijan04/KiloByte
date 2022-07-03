import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Details } from '../clientDetail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  record!: Details[]
companyName:string = '';
  fileUploads:any;
  file:any;
  fileName:any;
  previewObject = {
    show: false,
    file: "", 
  };
  constructor(
    private auth: ServiceService,
    private router: Router,
  ) {}

  ngOnInit(): void {
      this.auth.clientDetail().subscribe(result=>{
              this.fileUploads = result.records;
            })
            this.companyName = this.auth.companyname;
      }
  

  onFileSelected(event:any, id:any) {
    const file: File = event.target.files[0];
    if (file) {
      this.file = file;
      this.fileName = this.file.name;
      const reader = new FileReader();
      reader.onload = () => {
        this.previewObject.file = reader.result as string;
      };
      reader.readAsDataURL(file);
      this.previewObject.show = true;
      this.docSubmit(id)
    }
  }
  docSubmit(id:any) {
       this.auth.uploadFile(id).subscribe(res => {
          console.log(res);
        },err => {
          console.log(err);
        }
      );
    }
    bhag(){
      this.router.navigate(['/client']);
    }
}