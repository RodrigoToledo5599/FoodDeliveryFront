import { Component } from '@angular/core';
import { LocalStorageService } from '../../local-storage.service';

@Component({
  selector: 'app-confirmar-pedido',
  templateUrl: './confirmar-pedido.component.html',
  styleUrl: './confirmar-pedido.component.css'
})
export class ConfirmarPedidoComponent {

  constructor(
    LSS : LocalStorageService,
  )
  {}

  
}
