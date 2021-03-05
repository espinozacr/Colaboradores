import { Component, OnInit } from '@angular/core';
import { colaborador } from 'src/app/models/colaborador';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {
  listcolabs: colaborador [] = [
    { legajo: 1, nombre: 'Karen', apellido: 'Martinez', sexo: 'Femenino', salario: 0 },
    { legajo: 2, nombre: 'Luis', apellido: 'Sanchez',   sexo: 'Masculino', salario: 0 },
    { legajo: 3, nombre: 'Heidy', apellido: 'Cartin',   sexo: 'Femenino', salario: 0 },
    { legajo: 4, nombre: 'David', apellido: 'Aguilar',  sexo: 'Masculino', salario: 0 },
    { legajo: 5, nombre: 'Maria', apellido: 'Juarez', sexo: 'Femenino', salario: 0 },
    { legajo: 6, nombre: 'Carlos', apellido: 'Alvarez', sexo: 'Masculino', salario: 0 },
    { legajo: 7, nombre: 'Alejandra', apellido: 'Rosales', sexo: 'Femenino', salario: 0 },
    { legajo: 8, nombre: 'Ivan', apellido: 'Campos', sexo: 'Masculino', salario: 0 },
    { legajo: 9, nombre: 'Fernanda', apellido: 'Jimenez', sexo: 'Femenino', salario: 0 }
  ]

  buttonSelect = 'Todos';

  constructor() { }

  ngOnInit(): void {
  }

  totalColaboradores(): number {
    return this.listcolabs.length;
  }

  totalMas(): number {
    return this.listcolabs.filter(list => list.sexo === 'Masculino').length;
  }

  totalFem(): number {
    return this.listcolabs.filter(list => list.sexo === 'Femenino').length;
  }

  colabRadioChange(radioSelect: string): void {
    this.buttonSelect = radioSelect;
  }

}
