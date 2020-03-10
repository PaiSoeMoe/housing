import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ListingComponent } from './listing/listing.component';
import { ViewHouseComponent } from './view-house/view-house.component';



const routes: Routes = [
  { path: "haha", component: ViewHouseComponent },
  { path: "listing", component: ListingComponent },
  { path: "", component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
