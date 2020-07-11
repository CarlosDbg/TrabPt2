import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemasService } from '../service/temas.service';
import { UsuarioService } from '../service/usuario.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { FilmesService } from '../service/filmes.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Tema } from '../Model/tema.model';
import { Filme } from '../Model/filme.model';
import { Usuario } from '../Model/usuario.model';
import { AnoService } from '../service/ano.service';
import { Ano } from '../Model/ano.model';


@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {

  temas: Observable<Tema[]>;
  anos: Observable<Ano[]>;
  filmes: Observable<Filme[]>;
  usuario: Usuario;

  constructor(private router: Router,
    private temasService: TemasService,
    private usuarioService: UsuarioService,
    private anoService: AnoService,
    private filmeService: FilmesService,
    private storage: AngularFireStorage) { }

  async ngOnInit(): Promise <void> {
    this.usuario = await this.usuarioService.getUsuarioLogado();
    this.temas = this.temasService.getObservable();
    this.anos = this.anoService.getObservable();
    this.filmes = this.filmeService.getObservable();


  }

  usuarioAdmin(): boolean {

    if (this.usuario && this.usuario.permissao === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  editarTema(tema: Tema) {
    this.router.navigate([`/home/estilos/${tema.id}/edicao`]);
  }

}


