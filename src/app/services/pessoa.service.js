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
var http_1 = require("@angular/http");
require("rxjs/Rx");
var PessoaService = (function () {
    function PessoaService(_http) {
        this._http = _http;
        this.url = 'http://localhost:3005/pessoas';
    }
    PessoaService.prototype.listar = function () {
        return this._http.get(this.url)
            .map(function (res) { return res.json(); });
    };
    PessoaService.prototype.carregar = function (id) {
        return this._http.get(this.url + "/" + id)
            .map(function (res) { return res.json(); });
    };
    PessoaService.prototype.inserir = function (pessoa) {
        console.log(pessoa);
        return this._http.post(this.url, JSON.stringify({
            nome: pessoa.nome,
            cpf: pessoa.cpf,
            email: pessoa.email,
            telefone: pessoa.telefone,
            descricao: pessoa.descricao
        }), new http_1.RequestOptions({
            headers: new http_1.Headers({
                'Content-Type': 'application/json'
            })
        })).map(function (res) { return res.json(); });
    };
    PessoaService.prototype.alterar = function (id, pessoa) {
        return this._http.put(this.url + "/" + id, JSON.stringify({
            nome: pessoa.nome,
            cpf: pessoa.cpf,
            email: pessoa.email,
            telefone: pessoa.telefone,
            descricao: pessoa.descricao
        }), new http_1.RequestOptions({
            headers: new http_1.Headers({
                'Content-Type': 'application/json'
            })
        })).map(function (res) { return res.json(); });
    };
    PessoaService.prototype.delete = function (id) {
        return this._http.delete(this.url + "/" + id)
            .map(function (success) { return success.status; });
    };
    return PessoaService;
}());
PessoaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PessoaService);
exports.PessoaService = PessoaService;
//# sourceMappingURL=pessoa.service.js.map