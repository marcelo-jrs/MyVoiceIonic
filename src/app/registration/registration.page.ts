import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  login:String="";
  senha:String="";
  nome:String="";
  
  
  constructor(private http:HttpClient, public toastController: ToastController, public router: Router) { 
    }

  ngOnInit() {
  }

  public async add() {
    this.http.get<any[]>("http://localhost/api/incluir.php?login="+this.login+"&senha="+this.senha+"&nome="+this.nome)
              .subscribe( dados => {
                this.presentToast("Conta Criada!");
                this.router.navigate(['/login']);
              })
  } 
  
  async presentToast(mens) {
    const toast = await this.toastController.create({
      message: mens,
      duration: 2000
    });
    toast.present();
  }
 
}