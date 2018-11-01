import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import {ROUTES} from './app.routes'

import { AppComponent }  from './app.component';
import { HomeComponent }  from './home/home.component';
import { MenuComponent }  from './menu/menu.component';
import { PessoaComponent }  from './pessoa/pessoa.component';
import { PessoaPersistComponent }  from './pessoa/persist/pessoa.persist.component';
import { PessoaListComponent }  from './pessoa/list/pessoa.list.component';

import { PessoaService }  from './services/pessoa.service';

import { NotFoundComponent } from './errors/notfound.component';

import { FilterPessoaNome } from './filters/pessoa/nome.filter';
import { PessoaDetalheComponent } from './pessoa/detalhe/pessoa.detalhe.component';

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(ROUTES), FormsModule, HttpModule ],
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PessoaComponent,
    PessoaPersistComponent,
    PessoaListComponent,
    PessoaDetalheComponent,
    NotFoundComponent,

    FilterPessoaNome
  ],
  bootstrap:    [ AppComponent ],
  providers:    [ PessoaService]
})
export class AppModule { }
