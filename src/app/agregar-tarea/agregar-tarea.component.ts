import { CommonModule, DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  Input,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditarTareaComponent } from '../editar-tarea/editar-tarea.component';

@Component({
  selector: 'app-agregar-tarea',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './agregar-tarea.component.html',
  styleUrl: './agregar-tarea.component.css',
})
export class AgregarTareaComponent {
  @Input() agregartareasRecibidas: any[] = [];
  @Input() tareasRecibidas: any[] = [];
  @Input() indexRecibido: number = -1;
  id = this.indexRecibido;
  listaTareas: any[] = [];
  btn: boolean = true;

  //metodo para agregar tareas
  nuevaTarea =
    this.indexRecibido == -1
      ? 'Tarjeta de tareas'
      : this.agregartareasRecibidas[this.indexRecibido!].tarea;

  agregarTarea() {
    if (this.btn === true) {
      if (this.nuevaTarea.trim() !== '') {
        this.agregartareasRecibidas.push({
          id: this.agregartareasRecibidas.length + 1,
          tarea: this.nuevaTarea,
          completada: false,
        });
        this.nuevaTarea = '';
        localStorage.setItem(
          'tareas',
          JSON.stringify(this.agregartareasRecibidas)
        );
      }
    } else if (this.btn === false) {
      this.agregartareasRecibidas[this.indexRecibido].tarea = this.nuevaTarea;
      localStorage.setItem(
        'tareas',
        JSON.stringify(this.agregartareasRecibidas)
      );
      this.btn = true;
    }
  }
  recibirIndex(index: number, tareas: any[]) {
    this.listaTareas = tareas;
    this.agregartareasRecibidas = tareas;
    //this.nuevaTarea = this.agregartareasRecibidas[index].tarea;
    if (this.indexRecibido != -1) {
    }
  }
}
