import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssortmentDetailedComponent } from './pages/assortment-detailed/assortment-detailed.component';
import { AssortmentComponent } from './pages/assortment/assortment.component';
import { MainComponent } from './pages/main/main.component';
import { NewsComponent } from './pages/news/news.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { StaffComponent } from './pages/staff/staff.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'staff', component:StaffComponent},
  {path:'assortment', component:AssortmentComponent},
  {path:'detailed', component:AssortmentDetailedComponent},
  {path:'news', component:NewsComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
