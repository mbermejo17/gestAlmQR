import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  registros: Registro[] = [];

  constructor(private storage: Storage) {
    this.storage.get('registros')
      .then(registros => {
        this.registros = registros || [];
      });
  }

  guardarRegistro(format: string, text: string) {
    const nuevoRegistro = new Registro(format, text);
    this.registros.unshift(nuevoRegistro);
    this.storage.set('registros', this.registros);
  }
  borrarRegistro() {
    this.registros = [];
    this.storage.clear();
  }

}
