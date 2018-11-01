import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Pessoa } from '../../models/pessoa.model'
import { PessoaService } from '../../services/pessoa.service'

@Component({
  selector: 'mt-pessoa-list',
  templateUrl: './pessoa.list.component.html'
})
export class PessoaListComponent implements OnInit {

  public pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.list()
  }

  public list(): void {
    this.pessoaService.listar().subscribe(
      res => this.pessoas = res,
      error => alert("Falha ao carregar pessoas")
    );
  }

  public delete(id: number) {
    this.pessoaService.delete(id).subscribe(
      res => this.list(),
      error => alert("Falha ao remover registro"),
      () => { alert("Registro removido com sucesso"); }
    );
  }


}
