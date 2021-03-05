import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-colabs',
  templateUrl: './count-colabs.component.html',
  styleUrls: ['./count-colabs.component.css']
})
export class CountColabsComponent implements OnInit {
  @Input() todos: number;
  @Input() masculino: number;
  @Input() femenino: number;
  @Output() changeRadio = new EventEmitter<string>();

  buttonSelect = 'Todos';
  constructor() { 
    this.todos = 0;
    this.masculino = 0;
    this.femenino = 0;
  }

  ngOnInit(): void {
  }

  radioChange(): void {
    this.changeRadio.emit(this.buttonSelect);
  }

}
