import { CrudComponent } from './components/crud/crud.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'crud',
    pathMatch: 'full'
  },
  {
    path: 'crud',
    component: CrudComponent,
    children: [
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'edit',
        component: EditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagmentcenterRoutingModule { }
