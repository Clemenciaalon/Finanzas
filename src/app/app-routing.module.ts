import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PantallaPrincipalComponent } from "./pantalla-principal/pantalla-principal.component";
const routes: Routes = [
  { path: "principal", component: PantallaPrincipalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
