import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Details } from '../clientDetail';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  record!: Details[]
  constructor(
    private auth: ServiceService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.auth.client().subscribe(result=>{
      this.record = result.records;
    })
  }

  onClick(id: any,company: any){
    this.auth.id = id
    this.auth.companyname = company
    this.route.navigate(['/clientDetails'])
  }

}
