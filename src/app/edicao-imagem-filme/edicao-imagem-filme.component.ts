import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Imagem } from '../edicao-lista-imagens-filme/edicao-lista-imagens-filme.component';

@Component({
  selector: 'app-edicao-imagem-filme',
  templateUrl: './edicao-imagem-filme.component.html',
  styleUrls: ['./edicao-imagem-filme.component.scss']
})
export class EdicaoImagemFilmeComponent implements OnInit {

  @Input() imagem: Imagem;
  @Input() idFilme: string;

  @Output() fileUploded: EventEmitter<Imagem> = new EventEmitter();
  @Output() fileDeleted: EventEmitter<Imagem> = new EventEmitter();

  enviando: boolean;
  carregando: boolean;
  progressoEnvio: number;

  private fileReference: AngularFireStorageReference;
  private uploadTask: AngularFireUploadTask;

  private percentageChangesSubscription: Subscription;
  private snapshotChangesSubscription: Subscription;

  constructor(private fireStorage: AngularFireStorage) { }

  ngOnInit(): void {

      if (this.imagem.url) {

          this.carregando = true;

      } else {

          if (!this.imagem.arquivo) {
              return;
          }

          this.enviando = true;

          const nome = `${this.idFilme}_${new Date().getTime()}_${this.imagem.arquivo.name}`;

          this.fileReference = this.fireStorage.ref(nome);
          this.uploadTask = this.fireStorage.upload(nome, this.imagem.arquivo);

          this.percentageChangesSubscription = this.uploadTask.percentageChanges()
              .subscribe(x => {
                  this.progressoEnvio = x;
              });

          this.snapshotChangesSubscription = this.uploadTask.snapshotChanges()
              .pipe(finalize(() => this.uploadFinalizado()))
              .subscribe();

      }

  }

  ngOnDestroy(): void {

      if (this.uploadTask) {
          this.uploadTask.cancel();
      }

      if (this.percentageChangesSubscription) {
          this.percentageChangesSubscription.unsubscribe();
      }

      if (this.snapshotChangesSubscription) {
          this.percentageChangesSubscription.unsubscribe();
      }

  }

  private async uploadFinalizado() {

      this.enviando = false;
      this.carregando = true;

      const url = await this.fileReference.getDownloadURL().toPromise();

      this.imagem.url = url;

      this.fileUploded.emit(this.imagem);

  }

  imagemCarregada() {
      this.carregando = false;
  }

  async excluirImagem() {

      const fileRef = this.fireStorage.storage.refFromURL(this.imagem.url);
      await fileRef.delete();

      this.imagem.url = null;

      this.fileDeleted.emit(this.imagem);

  }
}

