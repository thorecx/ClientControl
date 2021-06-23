import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  conversion:any;
  res:[];
  readonly API = 'https://localhost:44314/api/Clientes';


  constructor(public client:ClientService, private router: Router) { }

  ngOnInit(): void {
    this.client.getClients()
    .subscribe(data=>{
      this.conversion=data;
      this.res=this.conversion;

      console.log('prueba', data)
    })
  }

  preview(idCliente: string) {
    this.router.navigate([`/edit/${idCliente}`]);
  }

}
