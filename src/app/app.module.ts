import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './components/index/index.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ConfirmEqualsValidatorDirective } from './shared/confirm-equal-validator.directive';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { MaterialModule } from './shared/material-module';
import { NgpImagePickerModule } from 'ngp-image-picker';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { PostComponent } from './components/reusables/post/post.component';
import { UserDashboardComponent } from './components/reusables/user-dashboard/user-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { FeedComponent } from './components/feed/feed.component';
import { FeedContentComponent } from './components/reusables/feed-content/feed-content.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    IndexComponent,
    ConfirmEqualsValidatorDirective,
    CadastroUsuarioComponent,
    TelaLoginComponent,
    PostComponent,
    UserDashboardComponent,
    FeedComponent,
    FeedContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialModule, 
    NgpImagePickerModule,
    HttpClientModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
