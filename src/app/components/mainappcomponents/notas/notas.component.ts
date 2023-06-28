import { Component } from '@angular/core';
import { NoteService } from 'src/app/api/notes/note.service';
import { Notas } from 'src/app/models/notas.models';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent {

  ngOnInit(){     
  };

  constructor(){

  }
}
