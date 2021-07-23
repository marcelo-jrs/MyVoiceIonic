import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: string="";
  senha: string="";
  logado="";

  private api="http://localhost/api/";

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  logar(){
    this.http.get<any[]>(this.api+"logar.php?login="+this.login+"&senha="+this.senha).subscribe(dados=> {
      if(this.login != "" && this.senha !=""){
        if(dados.length>0){
          this.logado=dados[0].nome;
          this.router.navigate(['/featured']);
        }
          console.log(dados); 
      }
    })
  }

}