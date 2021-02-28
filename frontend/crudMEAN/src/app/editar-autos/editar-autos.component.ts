import { Component, OnInit } from '@angular/core';
import { AutosService } from '../autos.service';
import { Router, ActivatedRoute   } from '@angular/router';

@Component({
  selector: 'app-editar-autos',
  templateUrl: './editar-autos.component.html',
  styleUrls: ['./editar-autos.component.css']
})
export class EditarAutosComponent implements OnInit {
  constructor(private router: Router, private auto: AutosService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.consultarAuto();
  }

  editauto: any = {
    marca: "",
    modelo: 0,
    color: "",
    precio: 0
  }

  consultarAuto(){
    let id = this.route.snapshot.params.id;
    this.auto.get(id).subscribe(
      (res) => {
        console.log(res);
        this.editauto = res;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  actualizarAuto(){
    console.log(this.editauto);
    this.auto.editarAuto(this.editauto).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/listar']);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
