import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from '../Model/usuario.model';
import { UsuarioService } from '../service/usuario.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Router } from '@angular/router';


export class NovoUsuario{
    email: string;
    nome: string;
    senha: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;

  usuarioJaCadastrado: boolean;

    formulario = this.formBuilder.group({
        nome: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', Validators.required]
      });


  constructor(
    private formBuilder: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router,
    private usuariosService: UsuarioService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }
  async submit() {

    if (!this.formulario.valid) {
  
        return;
    }

    this.formulario.disable();

    const novoUsuario = this.formulario.value as NovoUsuario;

    try {

        const userCredential = await this.auth.createUserWithEmailAndPassword(novoUsuario.email, novoUsuario.senha);
        const uid = userCredential.user.uid;

        let usuario = {
            email: novoUsuario.email,
            nome: novoUsuario.nome
        } as Usuario;

        usuario = await this.usuariosService.add(uid, usuario);

        this.router.navigate(['home']);

    } catch (error) {

        console.log(error);
        alert("Usuario já cadastrado!")
        this.usuarioJaCadastrado = true;

        this.formulario.enable();

    }
 }

}

