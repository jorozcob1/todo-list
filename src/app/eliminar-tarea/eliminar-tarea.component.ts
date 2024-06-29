import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eliminar-tarea',
  standalone: true,
  imports: [],
  templateUrl: './eliminar-tarea.component.html',
  styleUrl: './eliminar-tarea.component.css',
})
export class EliminarTareaComponent {
  @Input() eliminarTareaRecibida: any[] = [];
  @Input() recibirIndex: number = -1;

  eliminarTarea(index: number) {
    this.eliminarTareaRecibida.splice(index, 1);
    localStorage.setItem('tareas', JSON.stringify(this.eliminarTareaRecibida));
  }
}
