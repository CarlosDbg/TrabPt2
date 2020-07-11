import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective, Validators, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AnoService } from '../service/ano.service';
import { Ano } from '../Model/ano.model';

@Component({
  selector: 'app-cadastro-ano',
  templateUrl: './cadastro-ano.component.html',
  styleUrls: ['./cadastro-ano.component.scss']
})
export class CadastroAnoComponent implements OnInit {

  formulario = this.formBuilder.group({
    ano: ['', Validators.required]
  });

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    private anoService: AnoService,
    private snackBar: MatSnackBar,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  async submit() {

    if (!this.formulario.valid) {
      return;
    }

    this.formulario.disable();

    const novoAno = this.formulario.value as Ano;
    

    const ano = await this.anoService.add(novoAno);

    console.log('Um novo tema foi salvo ----------------------');
    console.log(ano);

    this.formulario.enable();
    this.formGroupDirective.resetForm();

    this.snackBar.open('Novo tema cadastrado com sucesso!');

  }

  voltar() {
    this.location.back();
  }


}


