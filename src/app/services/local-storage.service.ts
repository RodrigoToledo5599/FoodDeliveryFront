import { Injectable } from '@angular/core';
import { Prato } from './../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  private pedidokey: string = "pedido";
  private precopedidokey: string = "precopedido";
  private pedidofeitokey: string = "pedidofeito"; // true/false ou 1/0
  

  constructor() { }

  SetPedidoFeito(feito : boolean){ // Usar quando o pedido feito ou concluido
    if(feito == true){
      localStorage.setItem(this.pedidofeitokey, "1")
    }
    else if(feito == false){
      localStorage.setItem(this.pedidofeitokey, "0")
    }
  }

  CheckPedidoFeito() : boolean{
    return localStorage.getItem(this.pedidofeitokey)  == "1" ? true : false;
  }

  AdicionarASacola(item: Prato): void {
    let pratos: Prato[] = [];
    pratos = JSON.parse(localStorage.getItem(this.pedidokey)!) == null ? [] : JSON.parse(localStorage.getItem(this.pedidokey)!);
    console.log(pratos);
    pratos.push(item);
    localStorage.setItem(this.pedidokey, JSON.stringify(pratos));
    console.log("prato adicionado");
  }

  getPedido(): Prato[] {
    const storedItems = localStorage.getItem(this.pedidokey);
    return JSON.parse(storedItems!);
  }
  
  StorePrecoPedido(preco : string){
    localStorage.setItem(this.precopedidokey,preco);
  }

  PedidoConfirmado(){
    // ainda estou pensando
  }

  PedidoEntregue(){

  }

  PedidoCancelado(){

  }

  removeAll() {
    return localStorage.clear();
  }


  


  Testing(){
    this.removeAll();
    let lista: Prato[] = [
      {id: "0", name: "Pizza", price: "6666", description: "jiaowdjioawjiojawd"},
      {id: "1", name: "xburguer", price: "55", description: "aiojawd"},
      {id: "2", name: "wjiaiwjiwij", price: "66", description: "23423ki32r2i2"},
      {id: "3", name: "oakwkod", price: "6", description: "44444444444wdjioawjiojawd"},
      {id: "4", name: "3m131213", price: "6", description: "44444444444wdjioawjiojawd"},
      {id: "5", name: "1ok2123o13", price: "6", description: "44444444444wdjioawjiojawd"},
      {id: "6", name: "kodsfop2323", price: "6", description: "44444444444wdjioawjiojawd"},
      {id: "7", name: "21okdfsoposdfpp", price: "6", description: "44444444444wdjioawjiojawd"},
      
      
    ];
    lista.forEach(element => {
      this.AdicionarASacola(element);
    });
    

    var result = this.getPedido();
    return result;
  }

}
