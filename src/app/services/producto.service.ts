import { Producto } from './../interfaces/Producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  API_URL: string = 'http://localhost:8080/producto/';

  listarProductos(){
    return this.http.get(`${this.API_URL}listar`);
  }

  insertarProducto(producto: Producto){
    return this.http.post(`${this.API_URL}insertar`, producto);
  }

  actualizarProducto(producto: Producto){
    return this.http.put(`${this.API_URL}actualizar`, producto);
  }

  eliminarProducto(id: number){
    return this.http.delete(`${this.API_URL}eliminar/${id}`);
  }

  findByNombre(nombre: string){
    return this.http.get(`${this.API_URL}findByNombre/${nombre}`);
  }
}
