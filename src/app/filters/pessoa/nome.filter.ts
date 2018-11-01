import { PipeTransform, Pipe } from "@angular/core";
import { Pessoa } from "../../models/pessoa.model";


@Pipe({
  name: 'filterPessoaNome'
})
export class FilterPessoaNome implements PipeTransform {

    transform(pessoas: Pessoa[], input: string): Pessoa[] {
      return pessoas.filter(
        pessoa => pessoa.nome.toLowerCase().includes(input.toLowerCase())
      );
    }

}
