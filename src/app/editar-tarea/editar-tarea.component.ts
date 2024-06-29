import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-tarea',
  standalone: true,
  imports: [AgregarTareaComponent, CommonModule],
  templateUrl: './editar-tarea.component.html',
  styleUrl: './editar-tarea.component.css',
})
export class EditarTareaComponent {
  @Input() tareasRecibidas: any[] = [];
  @Input() recibirIndex: number = -1;
  @Output() enviarIndex = new EventEmitter<number>();
  @Output() enviarTareas = new EventEmitter<any[]>();

  //metodo para editar tareas
  editarTarea(index: number) {
    this.enviarIndex.emit(index);
  }
}
