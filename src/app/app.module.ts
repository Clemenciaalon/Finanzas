import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuDiamanteComponent } from "./menu-diamante/menu-diamante.component";
import { MenuEstaticoComponent } from "./menu-estatico/menu-estatico.component";
import { PantallaPrincipalComponent } from "./pantalla-principal/pantalla-principal.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuDiamanteComponent,
    MenuEstaticoComponent,
    PantallaPrincipalComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
