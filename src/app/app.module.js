"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var menu_component_1 = require("./menu/menu.component");
var pessoa_component_1 = require("./pessoa/pessoa.component");
var pessoa_persist_component_1 = require("./pessoa/persist/pessoa.persist.component");
var pessoa_list_component_1 = require("./pessoa/list/pessoa.list.component");
var pessoa_service_1 = require("./services/pessoa.service");
var notfound_component_1 = require("./errors/notfound.component");
var nome_filter_1 = require("./filters/pessoa/nome.filter");
var pessoa_detalhe_component_1 = require("./pessoa/detalhe/pessoa.detalhe.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(app_routes_1.ROUTES), forms_1.FormsModule, http_1.HttpModule],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            menu_component_1.MenuComponent,
            pessoa_component_1.PessoaComponent,
            pessoa_persist_component_1.PessoaPersistComponent,
            pessoa_list_component_1.PessoaListComponent,
            pessoa_detalhe_component_1.PessoaDetalheComponent,
            notfound_component_1.NotFoundComponent,
            nome_filter_1.FilterPessoaNome
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [pessoa_service_1.PessoaService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map