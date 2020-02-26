import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [{

  path:"view",component:ViewComponent
},
{

  path:"edit",component:EditComponent
},
{

  path:"",component:ViewComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
