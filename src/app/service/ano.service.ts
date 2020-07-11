import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Ano } from '../Model/ano.model';

@Injectable({
  providedIn: 'root'
})
export class AnoService {
  constructor(private firestore: AngularFirestore) { }

  getObservable(): Observable<Ano[]> {
      return this.firestore.collection<Ano>('anos').valueChanges({ idField: 'id' });
  }

  private convertToTamanho(document: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>): Ano {

      const dados = document.data();

      const ano = {
          id: document.id,
          ...dados
      } as Ano;

      if (dados.dataEdicao) {
          ano.dataEdicao = dados.dataEdicao.toDate();
      }

      if (dados.dataCadastro) {
          ano.dataCadastro = dados.dataCadastro.toDate();
      }

      return ano;

  }

  async add(ano: Ano): Promise<Ano> {

      const documentRef = await this.firestore.collection<Ano>('anos').add(ano);
      const document = await documentRef.get();

      return this.convertToTamanho(document);

  }

  async get(id: string): Promise<Ano> {

      const document = await this.firestore.collection<Ano>('anos').doc(id).get().toPromise();

      return this.convertToTamanho(document);

  }

  async update(id: string, ano: Ano): Promise<void> {

      await this.firestore.collection<Ano>('anos').doc(id).update(ano);

  }

}
