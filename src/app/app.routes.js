"use strict";
var home_component_1 = require("./home/home.component");
var menu_component_1 = require("./menu/menu.component");
var pessoa_component_1 = require("./pessoa/pessoa.component");
var pessoa_persist_component_1 = require("./pessoa/persist/pessoa.persist.component");
var pessoa_list_component_1 = require("./pessoa/list/pessoa.list.component");
var notfound_component_1 = require("./errors/notfound.component");
var pessoa_detalhe_component_1 = require("./pessoa/detalhe/pessoa.detalhe.component");
exports.ROUTES = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'menu', component: menu_component_1.MenuComponent },
    { path: 'pessoa', component: pessoa_component_1.PessoaComponent },
    { path: 'pessoa/list', component: pessoa_list_component_1.PessoaListComponent },
    { path: 'pessoa/persist', component: pessoa_persist_component_1.PessoaPersistComponent },
    { path: 'pessoa/persist/:id', component: pessoa_persist_component_1.PessoaPersistComponent },
    { path: 'pessoa/detalhe/:id', component: pessoa_detalhe_component_1.PessoaDetalheComponent },
    { path: "**", component: notfound_component_1.NotFoundComponent }
];
//# sourceMappingURL=app.routes.js.map