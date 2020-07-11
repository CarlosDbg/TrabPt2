import { Injectable } from '@angular/core';
import { Tema } from '../Model/tema.model';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TemasService {
  constructor(private firestore: AngularFirestore) { }

    getObservable(): Observable<Tema[]> {
        return this.firestore.collection<Tema>('temas').valueChanges({ idField: 'id' });
    }

    private convertToTema(document: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>): Tema {

        const dados = document.data();

        const tema = {
            id: document.id,
            ...dados
        } as Tema;
    
        if (dados.dataEdicao) {
            tema.dataEdicao = dados.dataEdicao.toDate();
        }

        if (dados.dataCadastro) {
            tema.dataCadastro = dados.dataCadastro.toDate();
        }

        return tema;

    }

    async add(tema: Tema): Promise<Tema> {

        const documentRef = await this.firestore.collection<Tema>('temas').add(tema);
        const document = await documentRef.get();

        return this.convertToTema(document);

    }

    async get(id: string): Promise<Tema> {

        const document = await this.firestore.collection<Tema>('temas').doc(id).get().toPromise();

        return this.convertToTema(document);

    }

    async update(id: string, tema: Tema): Promise<void> {

        await this.firestore.collection<Tema>('temas').doc(id).update(tema);

    }

}
