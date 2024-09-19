import { Injectable } from '@angular/core';
import { Prato } from './interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  public pedidokey: string = "pedido";

  constructor() { }

  AdicionarASacola(item: Prato): void {
    let pratos: Prato[] = [];
    pratos = JSON.parse(localStorage.getItem(this.pedidokey)!);
    pratos.push(item);
    localStorage.setItem(this.pedidokey, JSON.stringify(pratos));
  }

  getPedido(): Prato[] {
    const storedItems = localStorage.getItem(this.pedidokey);
    return storedItems ? JSON.parse(storedItems) : [];
  }

  

}
