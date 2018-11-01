import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {MenuComponent} from './menu/menu.component';
import {PessoaComponent} from './pessoa/pessoa.component';
import {PessoaPersistComponent} from './pessoa/persist/pessoa.persist.component';
import {PessoaListComponent} from './pessoa/list/pessoa.list.component';

import { NotFoundComponent } from './errors/notfound.component';
import { PessoaDetalheComponent } from './pessoa/detalhe/pessoa.detalhe.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'pessoa', component: PessoaComponent},
  {path: 'pessoa/list', component: PessoaListComponent},
  {path: 'pessoa/persist', component: PessoaPersistComponent},
  {path: 'pessoa/persist/:id', component: PessoaPersistComponent},
  {path: 'pessoa/detalhe/:id', component: PessoaDetalheComponent},
  {path: "**", component: NotFoundComponent}
]
