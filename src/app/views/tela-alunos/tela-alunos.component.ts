import { Component } from '@angular/core';
import { Alunos } from 'src/app/resources/domain/alunos';
import { AlunosService } from 'src/app/resources/services/alunosservice';
import { Router } from '@angular/router';
import { Student } from '../../resources/domain/student';

@Component({
  selector: 'app-tela-alunos',
  templateUrl: './tela-alunos.component.html',
  styleUrls: ['./tela-alunos.component.scss'],
})
export class TelaAlunosComponent {

  students!: Student[];
  selectedAluno!: Alunos;
  visible: boolean = false;
  value1: string | undefined;
  student!: Student;
  msgTranslated!: String;

  constructor(private service: AlunosService, private router: Router) {}
  ngOnInit() {
    this.service
      .getAllStudent()
      .subscribe((resposta) => (this.students = resposta));


  }

  abrirDetalheAluno(id: number) {
    this.router.navigate(['by-id', id]);
  }

  findById(id: number) {
    return this.service
      .findById(id)
      .subscribe((resposta) => (this.student = resposta));
  }


  public translatePaymentStatus(paymentStatus: string): string {
    let msgTranslated: string;

    if (paymentStatus === "IN_DAY") {
        msgTranslated = "EM DIA";
    } else if (paymentStatus === "LATE") {
        msgTranslated = "EM ATRASO";
    } else {
        msgTranslated = "A VENCER";
    }

    return msgTranslated;
}

}
