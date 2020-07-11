import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CadastroAnoComponent } from './cadastro-ano/cadastro-ano.component';
import { CadastroFilmeComponent } from './cadastro-filme/cadastro-filme.component';
import { CadastroTemaComponent } from './cadastro-tema/cadastro-tema.component';
import { FilmesComponent } from './filmes/filmes.component';
import { EdicaoFilmeComponent } from './edicao-filme/edicao-filme.component';
import { EdicaoTemaComponent } from './edicao-tema/edicao-tema.component';
import { EdicaoListaImagensFilmeComponent } from './edicao-lista-imagens-filme/edicao-lista-imagens-filme.component';
import { EdicaoAnoComponent } from './edicao-ano/edicao-ano.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { 
    path: 'home', component: HomeComponent},
    //children: [
    
  
    
      { path: 'ano/cadastro', component: CadastroAnoComponent },
      { path: 'filme/cadastro', component: CadastroFilmeComponent },
      { path: 'tema/cadastro', component: CadastroTemaComponent },
      { path: 'filme', component: FilmesComponent },

      //caminho de edição de imagens//

      { path: 'filme/:id/edicao', component: EdicaoFilmeComponent },
      { path: 'ano/:id/edicao', component: EdicaoAnoComponent },
      { path: 'tema/:id/edicao', component: EdicaoTemaComponent },
      { path: 'filme/:id/edicao/imagens', component: EdicaoListaImagensFilmeComponent },
  ]
/*},



];*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
