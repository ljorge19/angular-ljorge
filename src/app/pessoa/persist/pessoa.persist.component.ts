import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { Pessoa } from '../../models/pessoa.model'
import { PessoaService } from '../../services/pessoa.service'

@Component({
  selector: 'mt-pessoa-persist',
  templateUrl: './pessoa.persist.component.html'
})
export class PessoaPersistComponent implements OnInit {

  public pessoa: Pessoa = <Pessoa>{};

  constructor(private pessoaService: PessoaService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.pessoa.id = this.route.snapshot.params['id'];

    if(this.pessoa.id != undefined){
      this.pessoaService.carregar(this.pessoa.id).subscribe(
        res => this.pessoa = res,
        error => alert("Registro não encontrado")
      );
    }
  }

  public persist() {

    if(this.pessoa.email == undefined) {
      alert("Email não informado");
      return;
    }

    if(this.pessoa.nome == undefined) {
      alert("Nome não informado");
      return;
    }

    if(this.pessoa.telefone == undefined) {
      alert("Telefone não informado");
      return;
    }

    if(this.pessoa.cpf == undefined) {
      alert("CPF não informado");
      return;
    }

    if(this.pessoa.id == undefined){
      this.insert();
    }else{
      this.update();
    }
  }

  private insert() {
    this.pessoaService.inserir(this.pessoa).subscribe(
      res => this.pessoa = res,
      error => console.log(error),
      () => { alert("Registro inserido com sucesso"); this.router.navigate(['/pessoa/list']); }
    );
  }

  private update() {
    this.pessoaService.alterar(this.pessoa.id, this.pessoa).subscribe(
      res => this.pessoa = res,
      error => console.log(error),
      () => { alert("Registro alterado com sucesso"); this.router.navigate(['/pessoa/list']); }
    );
  }

}
