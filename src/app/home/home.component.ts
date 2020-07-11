import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nomeUsuario: string;

    constructor(public auth: AngularFireAuth) { }

    async ngOnInit(): Promise<void> {

        const usuario = await this.auth.user.toPromise();

        if (usuario) {
            this.nomeUsuario = usuario.email;
        }
    }

    async sair() {
        await this.auth.signOut();
    }


}
