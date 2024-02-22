import { Component, OnInit, Output } from '@angular/core';
import { Funcionario } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit{
  


  btnAcao = "Editar"
  btnTitulo = "Editar Funcionário"
  funcionario! : Funcionario;

  constructor(private funcionarioService : FuncionarioService, private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.funcionarioService.GetFuncionarioById(id).subscribe((data) => {
      this.funcionario = data.dados;
    })
  }

  async editFuncionario(funcionario : Funcionario){
    this.funcionarioService.EditFuncionario(funcionario).subscribe((data) =>{
      this.router.navigate(['/'])
    })
  }
}
