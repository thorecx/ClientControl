import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id;
  people: Client;

  constructor(private client: ClientService, private activedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {

      this.id = params['id'];
      this.client.getClient(this.id)
        .subscribe(res => {
          console.log(res);
          this.people = res as Client;
        });
      console.log(this.id);
    });
  }

  updateForm(form: NgForm) {
    console.log(form.value)
    this.client.updateClients(this.id, form.value)
      .subscribe(res => {
        console.log(form.value);
        this.router.navigate([`/clients`]);
      }, err => {
        console.log(err);
      });
  }

}
