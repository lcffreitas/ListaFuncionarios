import { Router } from '@angular/router';
import { FuncionarioService } from './../../services/funcionario.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Funcionario } from '../../models/Funcionarios';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.css'
})
export class ExcluirComponent implements OnInit {

  inputdata: any;
  funcionario!: Funcionario

  constructor(
    private FuncionarioService : FuncionarioService,
    private router : Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<ExcluirComponent>
  ) { }

  ngOnInit(): void {
      this.inputdata = this.data;

      this.FuncionarioService.GetFuncionarioById(this.inputdata.id).subscribe((data) => {
        this.funcionario = data.dados;
      });
  }

  Excluir(){
    this.FuncionarioService.Excluirfuncionario(this.inputdata.id).subscribe((data) => {
      this.ref.close();
      window.location.reload();
    });

    
  }
  
  Cancelar(){
      this.ref.close();
    }
}
