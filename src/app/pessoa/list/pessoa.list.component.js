"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var pessoa_service_1 = require("../../services/pessoa.service");
var PessoaListComponent = (function () {
    function PessoaListComponent(pessoaService) {
        this.pessoaService = pessoaService;
        this.pessoas = [];
    }
    PessoaListComponent.prototype.ngOnInit = function () {
        this.list();
    };
    PessoaListComponent.prototype.list = function () {
        var _this = this;
        this.pessoaService.listar().subscribe(function (res) { return _this.pessoas = res; }, function (error) { return alert("Falha ao carregar pessoas"); });
    };
    PessoaListComponent.prototype.delete = function (id) {
        var _this = this;
        this.pessoaService.delete(id).subscribe(function (res) { return _this.list(); }, function (error) { return alert("Falha ao remover registro"); }, function () { alert("Registro removido com sucesso"); });
    };
    return PessoaListComponent;
}());
PessoaListComponent = __decorate([
    core_1.Component({
        selector: 'mt-pessoa-list',
        templateUrl: './pessoa.list.component.html'
    }),
    __metadata("design:paramtypes", [pessoa_service_1.PessoaService])
], PessoaListComponent);
exports.PessoaListComponent = PessoaListComponent;
//# sourceMappingURL=pessoa.list.component.js.map