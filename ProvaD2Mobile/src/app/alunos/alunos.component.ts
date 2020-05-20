import { AlunosServiceService } from './../alunos-service.service';
import { Aluno } from './../Aluno.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  alunoArray: Aluno[] = [];

  constructor(private aluno: AlunosServiceService) { }

  ngOnInit(): void {
    this.alunoArray = this.aluno.getAluno();
  }

}
