import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumberPlateListComponent } from './number-plate-list/number-plate-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'plates', pathMatch: 'full' },
  { path: 'plates', component: NumberPlateListComponent },
  // incompleted routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
