import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { CommonModule, DOCUMENT } from '@angular/common';
import { EliminarTareaComponent } from '../eliminar-tarea/eliminar-tarea.component';
import { EditarTareaComponent } from '../editar-tarea/editar-tarea.component';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [
    AgregarTareaComponent,
    EliminarTareaComponent,
    CommonModule,
    EditarTareaComponent,
  ],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css',
})
export class ListaTareasComponent {
  @Output() enIndex = new EventEmitter<number>();
  index: number = -1;
  tareas: any[] = [];
  constructor(@Inject(DOCUMENT) private document: Document) {
    const localStorageTareas = document.defaultView?.localStorage;
    this.tareas = [];
    let datos = localStorageTareas?.getItem('tareas');
    if (datos != null) {
      let arreglo = JSON.parse(datos);
      if (arreglo != null) {
        for (let tarea of arreglo) {
          this.tareas.push(tarea);
        }
      }
    }
  }
  cambiarEstado(index: number) {
    this.tareas[index].completada = !this.tareas[index].completada;
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }
  //Contador para las tareas
  contador: number = 1;

  recibirIndex(index: number) {
    this.index = index;
    //alert('Recibido: ' + this.index);
  }
  enviar() {
    this.enIndex.emit(this.index);
  }
}
