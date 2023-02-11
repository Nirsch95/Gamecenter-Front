import { EditProdComponent } from './pages/edit-prod/edit-prod.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagmentcenterRoutingModule } from './managmentcenter-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';
import { CrudComponent } from './components/crud/crud.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    CrudComponent,
    EditProdComponent
  ],
  imports: [
    CommonModule,
    ManagmentcenterRoutingModule,
    FormsModule
  ]
})
export class ManagmentcenterModule { }
