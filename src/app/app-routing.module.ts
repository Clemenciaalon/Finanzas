import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PantallaPrincipalComponent } from "./pantalla-principal/pantalla-principal.component";
import { MenuDiamanteComponent } from "./menu-diamante/menu-diamante.component";
const routes: Routes = [
  { path: "principal", component: PantallaPrincipalComponent },
  { path: "diamante", component: MenuDiamanteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
