import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImagePickerConf } from 'ngp-image-picker';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Cadastro } from 'src/app/shared/cadastro';


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit{
  addressForm:FormGroup;
  imagePickerConf: ImagePickerConf = {
    borderRadius: "4px",
    language: "en",
    width: "320px",
    height: "240px",
  };
  private criarForm(cadastro:Cadastro):void{
    this.addressForm = this.fb.group({
      nome: [cadastro.nome,[Validators.required]],
      password: [cadastro.password,[Validators.required]],
      confirmPassword:[cadastro.confirmPassword,[Validators.required]],
      email:[cadastro.email,[Validators.required]],
      cpf:[cadastro.cpf],
      rg:[cadastro.rg,[ Validators.required]],
      genero:[cadastro.genero,[Validators.required]],
      nascimento:[cadastro.nascimento,[Validators.required]],
      celular:[cadastro.celular],
      fixo:[cadastro.fixo],
      address: [cadastro.adress,[ Validators.required]],
      cep: [cadastro.cep],
      cidade: [cadastro.cidade,[ Validators.required]],
      state: [cadastro.state,[ Validators.required]],
    });
  }
  private criarFormBranco():Cadastro{
    return{
      id:null,
      tipo:null,
      nome:null,
      password:null,
      confirmPassword:null,
      email:null,
      cpf:null,
      rg:null,
      genero:null,
      nascimento:null,
      celular:null,
      fixo:null,
      adress:null,
      numero:null,
      cep:null,
      cidade:null,
      state:null,
      imagem:null,
      competencias:null,
      cursos:null
    } as Cadastro
  }
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
    private service:UserServiceService
    ) {}
  ngOnInit(): void {
    this.criarForm(this.criarFormBranco())
  }
  onImageChange(){}
  onSubmit():void{
    console.log(this.addressForm.invalid)
    this.addressForm.markAllAsTouched();
    if(this.addressForm.invalid){
      return;
    }
    const user = this.addressForm.getRawValue() as Cadastro;
    console.log(user)
    this.salvar(user);
  }
  reiniciarForm():void{
    this.addressForm.reset;
  }
  private salvar(user:Cadastro):void{
    console.log(user)
    this.service.salvar(user).subscribe(()=>{
      alert("Cadastro Salvo com Sucesso!")
    })
  }

}
