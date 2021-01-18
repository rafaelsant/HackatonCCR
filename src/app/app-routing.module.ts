import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FeedComponent } from './components/feed/feed.component';
import { IndexComponent } from './components/index/index.component';
import { FeedContentComponent } from './components/reusables/feed-content/feed-content.component';
import { PostComponent } from './components/reusables/post/post.component';
import { UserDashboardComponent } from './components/reusables/user-dashboard/user-dashboard.component';
import { TelaLoginComponent} from './components/tela-login/tela-login.component'

const routes: Routes = [
  {path:'', component:TelaLoginComponent},
  {path:'index', component:IndexComponent, children:[
    {
      path:'empresa', component:CadastroComponent
    },
    {
      path:'cadastro',component:CadastroUsuarioComponent
    },
    {
      path:'feed',component:FeedComponent
    },
    {
      path:'dashboard',component:UserDashboardComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
