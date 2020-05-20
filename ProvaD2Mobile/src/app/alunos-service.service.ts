import { Aluno } from './Aluno.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosServiceService {

  aluno: Aluno[] = [
    {nome: 'Samara', idade: 21, RA: 119213540},
  ];

  constructor() { }

  getAluno(){
    return this.aluno;
  }
}
