import { FuncionarioService } from './../../services/funcionario.service';
import { Funcionario } from './../../models/Funcionarios';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  btnAcao = "Cadastrar"
  btnTitulo = "Cadastrar Funcionário"

  constructor(private funcionarioService : FuncionarioService, private router : Router) {

  }

  createFuncionario(funcionario : Funcionario){
    this.funcionarioService.CreateFuncionario(funcionario).subscribe((data) =>{
      this.router.navigate(['/'])
    })
  }

}
