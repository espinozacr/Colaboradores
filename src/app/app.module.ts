import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { CountColabsComponent } from './components/colaboradores/count-colabs/count-colabs.component';

@NgModule({
  declarations: [
    AppComponent,
    ColaboradoresComponent,
    CountColabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
