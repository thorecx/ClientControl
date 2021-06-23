import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  readonly API = 'https://localhost:44387/api/Clientes';

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get<Client[]>(this.API);
  }

  createClient(client: Client){
    // const fd = new FormData();
    // fd.append('nombre', nombre.toString());
    // fd.append('apellido', apellido.toString());
    // fd.append('cedula', cedula.toString());
    // fd.append('telefono', telefono.toString());
    // fd.append('direccion', null);

    return this.http.post(`${this.API}`, client);
  }

  getClient(_id: number){
    return this.http.get(`${this.API}/${_id}`)
  }

  updateClients(_id:number, client: Client){
    return this.http.put(`${this.API}/${_id}`, client);
  }

  deleteClient(_id:number){
    return this.http.delete(`${this.API}/${_id}`);
  }
}
