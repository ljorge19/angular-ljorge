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
var router_1 = require("@angular/router");
var pessoa_service_1 = require("../../services/pessoa.service");
var PessoaDetalheComponent = (function () {
    function PessoaDetalheComponent(pessoaService, route, router) {
        this.pessoaService = pessoaService;
        this.route = route;
        this.router = router;
        this.pessoa = {};
    }
    PessoaDetalheComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pessoa.id = this.route.snapshot.params['id'];
        if (this.pessoa.id != undefined) {
            this.pessoaService.carregar(this.pessoa.id).subscribe(function (res) { return _this.pessoa = res; }, function (error) { return alert("Registro não encontrado"); });
        }
    };
    PessoaDetalheComponent.prototype.persist = function () {
        if (this.pessoa.email == undefined) {
            alert("Email não informado");
            return;
        }
        if (this.pessoa.nome == undefined) {
            alert("Nome não informado");
            return;
        }
        if (this.pessoa.telefone == undefined) {
            alert("Telefone não informado");
            return;
        }
        if (this.pessoa.cpf == undefined) {
            alert("CPF não informado");
            return;
        }
        if (this.pessoa.id == undefined) {
            this.insert();
        }
        else {
            this.update();
        }
    };
    PessoaDetalheComponent.prototype.insert = function () {
        var _this = this;
        this.pessoaService.inserir(this.pessoa).subscribe(function (res) { return _this.pessoa = res; }, function (error) { return console.log(error); }, function () { alert("Registro inserido com sucesso"); _this.router.navigate(['/pessoa/list']); });
    };
    PessoaDetalheComponent.prototype.update = function () {
        var _this = this;
        this.pessoaService.alterar(this.pessoa.id, this.pessoa).subscribe(function (res) { return _this.pessoa = res; }, function (error) { return console.log(error); }, function () { alert("Registro alterado com sucesso"); _this.router.navigate(['/pessoa/list']); });
    };
    return PessoaDetalheComponent;
}());
PessoaDetalheComponent = __decorate([
    core_1.Component({
        selector: 'mt-pessoa-detalhe',
        templateUrl: './pessoa.detalhe.component.html'
    }),
    __metadata("design:paramtypes", [pessoa_service_1.PessoaService,
        router_1.ActivatedRoute,
        router_1.Router])
], PessoaDetalheComponent);
exports.PessoaDetalheComponent = PessoaDetalheComponent;
//# sourceMappingURL=pessoa.detalhe.component.js.map