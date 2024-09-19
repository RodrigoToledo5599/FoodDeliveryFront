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
    pratos = JSON.parse(localStorage.getItem(this.pedidokey)!) == null ? [] : JSON.parse(localStorage.getItem(this.pedidokey)!);
    console.log(pratos);
    pratos.push(item);
    localStorage.setItem(this.pedidokey, JSON.stringify(pratos));
    console.log("chegou aq");
  }

  // testando
  // Testing(): Prato[]{
  Testing(){
    let lista: Prato[] = [
      {id: "1", name: "Pizza", price: "6666", description: "jiaowdjioawjiojawd"},
      {id: "2", name: "x burguer", price: "55", description: "aiojawd"},
      {id: "3", name: "wjiaiwjiwij", price: "66", description: "23423ki32r2i2"},
      {id: "4", name: "oakwkod", price: "6", description: "44444444444wdjioawjiojawd"},
    ];
    this.AdicionarASacola(lista[1]);
    // this.AdicionarASacola(lista[2]);

    var result = this.getPedido();
    // var result = lista;
    return result;
  }

  getPedido(): Prato[] {
    const storedItems = localStorage.getItem(this.pedidokey);
    return JSON.parse(storedItems!) ;
  }



}
