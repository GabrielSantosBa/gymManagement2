import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { Professores } from 'src/app/resources/domain/professores';
import { AddProfessor } from 'src/app/resources/models/AddProfessor';
import { ProfessoresService } from 'src/app/resources/services/professores.service';
@Component({
  selector: 'app-prof-card',
  templateUrl: './prof-card.component.html',
  styleUrls: ['./prof-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfCardComponent implements OnInit {
  professores!: Professores [];
  selectedProfessor!: Professores;
  public addProfessor: AddProfessor | undefined;

  constructor(
    private professoresService: ProfessoresService,

    ) {}
  ngOnInit(): void {
     this.addProfessor = new AddProfessor();
     //this.professores = this.professoresService.getProfessoresData();
      
     };
    
}

