import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private api: ServiceService,
     private router : Router
     ) { }

  ngOnInit(): void {
    this.credentails();
  }

  credentails(){
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  login(){
    if(this.formGroup.valid){
      this.api.loginData(this.formGroup.value)
      .subscribe(result=>{
        this.api.token = result.token;
        this.router.navigate(['/client']);
        console.log('qbjkhk')
      })
    }
  }
}
