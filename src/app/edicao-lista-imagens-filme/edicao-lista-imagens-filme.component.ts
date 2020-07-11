import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from '../service/filmes.service';
import { Filme } from '../Model/filme.model';

export class Imagem {
  url: string;
  arquivo: File;
}

@Component({
  selector: 'app-edicao-lista-imagens-filme',
  templateUrl: './edicao-lista-imagens-filme.component.html',
  styleUrls: ['./edicao-lista-imagens-filme.component.scss']
})
export class EdicaoListaImagensFilmeComponent implements OnInit {

    carregando: boolean;
    idFilme: string;
    descricaoFilme: string;
    imagens: Imagem[] = [];

    constructor(
        private actvitedRoute: ActivatedRoute,
        private filmeService: FilmesService
    ) { }

    async ngOnInit() {

        this.carregando = true;

        this.idFilme = this.actvitedRoute.snapshot.paramMap.get('id');

        const filme = await this.filmeService.get(this.idFilme);

        this.descricaoFilme = `${filme.nome} - ${filme.descricao}`;

        if (filme.imagens) {

            console.log(filme.imagens);

            this.imagens = filme.imagens.map<Imagem>(urlImagem => {
                return { url: urlImagem, arquivo: null };
            });

        }

        this.carregando = false;

    }

    adicionarImagens(event: any) {

        const arquivos = event.target.files as FileList;

        for (let index = 0; index < arquivos.length; index++) {

            const arquivo = arquivos[index];

            this.imagens.push({ url: null, arquivo: arquivo });

        }

    }

    imagemEnviada() {
        this.atualizarImagens();
    }

    excluirImagem(imagem: Imagem) {

        const indice = this.imagens.indexOf(imagem);
        this.imagens.splice(indice, 1);

        this.atualizarImagens();

    }

    async atualizarImagens() {

        const imagensFilme = this.imagens.filter(x => x.url).map(x => x.url);

        console.log(imagensFilme);

        const filme = { imagens: imagensFilme } as Filme;

        await this.filmeService.update(this.idFilme, filme);

    }



}
