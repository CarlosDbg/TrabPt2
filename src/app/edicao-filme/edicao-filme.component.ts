import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TemasService } from '../service/temas.service';
import { FilmesService } from '../service/filmes.service';
import { Location } from '@angular/common';

import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Filme } from '../Model/filme.model';
import { Observable } from 'rxjs';
import { Tema } from '../Model/tema.model';

@Component({
  selector: 'app-edicao-filme',
  templateUrl: './edicao-filme.component.html',
  styleUrls: ['./edicao-filme.component.scss']
})
export class EdicaoFilmeComponent implements OnInit {

  idFilme: string;
  filme: Filme;

  temas: Observable<Tema[]>;
  

  formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      valor: ['', [Validators.required]],
      idTema: ['', Validators.required]
  
  });


  constructor(
      private formBuilder: FormBuilder,
      private temasService: TemasService,
      private filmeService: FilmesService,
      private snackBar: MatSnackBar,
      private location: Location,
      private activedRoute: ActivatedRoute,
  ) { }

  async ngOnInit() {

      this.formulario.disable();

      this.temas = this.temasService.getObservable();
      

      this.idFilme = this.activedRoute.snapshot.paramMap.get('id');
      this.filme = await this.filmeService.get(this.idFilme);

      console.log(this.filme);

      this.formulario.patchValue(this.filme);

      this.formulario.enable();
  }

  async submit() {

      if (!this.formulario.valid) {
          return;
      }

      this.formulario.disable();

      const filmeEditado = this.formulario.value as Filme;
     

      const arte = await this.filmeService.update(this.idFilme, filmeEditado);

      console.log('Um arte foi editada -------------------------');
      console.log('Arte:');
      console.log(this.filme);
      console.log('Campos atualizados:');
      console.log(filmeEditado);

      Object.assign(this.filme, filmeEditado);

      this.formulario.enable();

      this.snackBar.open('Arte atualizada com sucesso!');

  }

  voltar() {
      this.location.back();
  }

}

