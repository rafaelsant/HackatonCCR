import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Cadastro } from 'src/app/shared/cadastro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  addressForm = this.fb.group({
    tipo:"usuario",
    company: null,
    firstName: [null, Validators.required],
    password: [null,Validators.required],
    confirmPassword:[null,Validators.required],
    cpf:null,
    celular:null,
    fixo:null,
    email: [null, Validators.required],
    address: [null, Validators.required],
    numero: [null,Validators.required],
    cep: null,
    cidade: [null, Validators.required],
    state: [null, Validators.required],
    oportunidade: null,
    sobre: null
  });
  hide = true;
  hasUnitNumber = false;

  states = [
        {"nome": "Acre", "sigla": "AC"},
        {"nome": "Alagoas", "sigla": "AL"},
        {"nome": "Amapá", "sigla": "AP"},
        {"nome": "Amazonas", "sigla": "AM"},
        {"nome": "Bahia", "sigla": "BA"},
        {"nome": "Ceará", "sigla": "CE"},
        {"nome": "Distrito Federal", "sigla": "DF"},
        {"nome": "Espírito Santo", "sigla": "ES"},
        {"nome": "Goiás", "sigla": "GO"},
        {"nome": "Maranhão", "sigla": "MA"},
        {"nome": "Mato Grosso", "sigla": "MT"},
        {"nome": "Mato Grosso do Sul", "sigla": "MS"},
        {"nome": "Minas Gerais", "sigla": "MG"},
        {"nome": "Pará", "sigla": "PA"},
        {"nome": "Paraíba", "sigla": "PB"},
        {"nome": "Paraná", "sigla": "PR"},
        {"nome": "Pernambuco", "sigla": "PE"},
        {"nome": "Piauí", "sigla": "PI"},
        {"nome": "Rio de Janeiro", "sigla": "RJ"},
        {"nome": "Rio Grande do Norte", "sigla": "RN"},
        {"nome": "Rio Grande do Sul", "sigla": "RS"},
        {"nome": "Rondônia", "sigla": "RO"},
        {"nome": "Roraima", "sigla": "RR"},
        {"nome": "Santa Catarina", "sigla": "SC"},
        {"nome": "São Paulo", "sigla": "SP"},
        {"nome": "Sergipe", "sigla": "SE"},
        {"nome": "Tocantins", "sigla": "TO"}
  ];

  constructor(private fb: FormBuilder,
    private cadastro : UserServiceService
    ) {}

  onSubmit():void{
    this.addressForm.markAllAsTouched();
    if(this.addressForm.invalid){
      return;
    }
    const user = this.addressForm.getRawValue() as Cadastro;
    this.salvar(user);
  }
  reiniciarForm():void{
    this.addressForm.reset;
  }
  private salvar(user:Cadastro):void{
    console.log("enviado")
    this.cadastro.salvar(user).subscribe(()=>{
      alert("Cadastro Salvo com Sucesso!")
    })
  }
}
