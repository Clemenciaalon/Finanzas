import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PantallaPrincipalComponent } from "./pantalla-principal/pantalla-principal.component";
import { MenuDiamanteComponent } from "./menu-diamante/menu-diamante.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "principal", component: PantallaPrincipalComponent },
  { path: "diamante", component: MenuDiamanteComponent },
  { path: "login", component: LoginComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
