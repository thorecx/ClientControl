import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private clientService: ClientService, router: Router) { }

  ngOnInit(): void {
  }

  addClient(form: NgForm) {
    console.log(form.value.nombre);
    this.clientService.createClient(form.value)
      .subscribe(res => {
        console.log(res);
        // this.resetForm(form);
        // M.toast({ html: 'Save Successfully' });
        // this.getEmployees();
      });
}

}
