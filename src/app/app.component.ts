import { identifierModuleUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'algo';// title = 'Edad 1';
  suma=0;
  prom=0;
  myUsuario:Usuario;
  
  constructor() {
   this.myUsuario=new Usuario(); 
  }

  sumar()
  {
    this.suma= this.myUsuario.edad1 + this.myUsuario.edad2;
    //console.log(this.suma);
    this.promedio();
    return this.suma 
  };

  promedio()
  {
    this.prom=(this.myUsuario.edad1+this.myUsuario.edad2)/2;
    return this.prom;
  }

  limpiarcuadro()
  {
    this.myUsuario.edad1=0;
    this.myUsuario.edad2=0;
    this.prom=0;
    this.suma=0;
  }
  
}


