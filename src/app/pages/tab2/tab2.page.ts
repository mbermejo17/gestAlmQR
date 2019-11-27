import { Component } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public dataLocal: DataLocalService) { }
  enviar() {
    console.log("enviando");
    this.dataLocal.borrarRegistro();
  }
  abrirRegistro(registro){
    console.log( registro);
  }
}
