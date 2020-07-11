import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

class Autenticacao {
  email: string;
  senha: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  erro: boolean;


  formulario = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]],
});

constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AngularFireAuth,
) { }

ngOnInit(): void {
}

async submit() {

    this.erro = false;

    if (!this.formulario.valid) {
        return;
    }

    this.formulario.disable();

    const autenticacao = this.formulario.value as Autenticacao;

    try {

        const userCredential = await this.auth.signInWithEmailAndPassword(autenticacao.email, autenticacao.senha);

        console.log("funfando")
        this.router.navigate(['home']);

    } catch (error) {

        this.erro = true;
        this.formulario.enable();

          
        }

    }
    
}



