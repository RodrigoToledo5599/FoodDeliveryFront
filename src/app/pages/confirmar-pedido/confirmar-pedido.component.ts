import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../local-storage.service';
import { Prato } from './../../interfaces/interfaces';

@Component({
  selector: 'app-confirmar-pedido',
  templateUrl: './confirmar-pedido.component.html',
  styleUrl: './confirmar-pedido.component.css'
})

export class ConfirmarPedidoComponent implements OnInit {
  
  teste : Prato[] = [];
  constructor(
    private LSS : LocalStorageService,
  )
  {
    
  }
  ngOnInit(){
    this.teste = this.LSS.Testing();
    
  }

}
