import { Component, ViewChild } from '@angular/core';
import { ProjetoService } from '../services/projeto.service';

import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-featured',
  templateUrl: 'featured.page.html',
  styleUrls: ['featured.page.scss'],
})
export class FeaturedPage {

  @ViewChild('input') meuInput;

  inputTexto:String = "";

  listaService:ProjetoService;

  constructor(private http:HttpClient,
              public toastController: ToastController) {
    this.listaService = new ProjetoService(http,toastController);
  }

  adiciona() {
    this.listaService.add(this.inputTexto);
    this.inputTexto="";
    this.meuInput.setFocus();
  }

  remover(indice) {
    this.listaService.remove(indice);
  }

 

}
