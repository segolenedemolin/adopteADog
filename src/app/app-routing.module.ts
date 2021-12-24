import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddDogComponent } from './_components/add-dog/add-dog.component';
import { AdoptionComponent } from './_components/adoption/adoption.component';
import { DetailsDogComponent } from './_components/details-dog/details-dog.component';
import { EditDogComponent } from './_components/edit-dog/edit-dog.component';
import { NotFoundComponent } from './_components/not-found/not-found.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"add",component:AddDogComponent},
  {path:"adopt/:id",component:AdoptionComponent},
  {path:"details/:id",component:DetailsDogComponent},
  {path:"edit/:id", component:EditDogComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
