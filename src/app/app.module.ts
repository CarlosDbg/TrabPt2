import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';



//Material
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';




import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';



import { MatIconModule } from '@angular/material/icon';
import { environment } from 'src/environments/environment';
import { CadastroFilmeComponent } from './cadastro-filme/cadastro-filme.component';
import { FilmesComponent } from './filmes/filmes.component';
import { CadastroTemaComponent } from './cadastro-tema/cadastro-tema.component';
import { CadastroAnoComponent } from './cadastro-ano/cadastro-ano.component';
import { EdicaoFilmeComponent } from './edicao-filme/edicao-filme.component';
import { EdicaoTemaComponent } from './edicao-tema/edicao-tema.component';
import { EdicaoAnoComponent } from './edicao-ano/edicao-ano.component';
import { EdicaoImagemFilmeComponent } from './edicao-imagem-filme/edicao-imagem-filme.component';
import { EdicaoListaImagensFilmeComponent } from './edicao-lista-imagens-filme/edicao-lista-imagens-filme.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CadastroFilmeComponent,
    FilmesComponent,
    CadastroTemaComponent,
    CadastroAnoComponent,
    EdicaoFilmeComponent,
    EdicaoTemaComponent,
    EdicaoAnoComponent,
    EdicaoImagemFilmeComponent,
    EdicaoListaImagensFilmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    MatToolbarModule,
    MatDialogModule,
    MatListModule,
    MatCheckboxModule,
    MatMenuModule,
    
    MatSnackBarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

    AngularFirestoreModule
    

  ],
  providers: [{provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
