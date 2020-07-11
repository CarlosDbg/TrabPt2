import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective, Validators, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { TemasService } from '../service/temas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tema } from '../Model/tema.model';

@Component({
  selector: 'app-cadastro-tema',
  templateUrl: './cadastro-tema.component.html',
  styleUrls: ['./cadastro-tema.component.scss']
})
export class CadastroTemaComponent implements OnInit {

  formulario = this.formBuilder.group({
    tema: ['', Validators.required]
  });

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    private temaService: TemasService,
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

    const novoTema = this.formulario.value as Tema;
    

    const tema = await this.temaService.add(novoTema);

    console.log('Um novo tema foi salvo ----------------------');
    console.log(tema);

    this.formulario.enable();
    this.formGroupDirective.resetForm();

    this.snackBar.open('Novo tema cadastrado com sucesso!');

  }

  voltar() {
    this.location.back();
  }


}

