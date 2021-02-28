import { Component, OnInit } from '@angular/core';
import { AutosService } from '../autos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-autos',
  templateUrl: './listar-autos.component.html',
  styleUrls: ['./listar-autos.component.css']
})
export class ListarAutosComponent implements OnInit {

  constructor( private router: Router, private auto: AutosService ) { }

  listaIni:any = []
  lista:any = []
  autoMarca:any = ''
  
  ngOnInit(): void {
    this.auto.listarAutos(this.lista).subscribe(
      (res) => {
        this.lista = res
        this.listaIni = res
      },
      (err) => {
        console.log(err);
      }
    )
  }

  eliminar(autoSelect:any){
    this.auto.eliminarAutos(autoSelect).subscribe(
      (res) => {
        const index = this.lista.indexOf(autoSelect)
        if (index > -1) {
          this.lista.splice(index, 1);
        }
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  filtrar(){

    if(!this.autoMarca.length){

      this.lista = this.listaIni

    }

    else{

      this.lista = this.listaIni.filter((list: { marca: string | any[]; }) => list.marca.includes(this.autoMarca))

    }

  }


}
