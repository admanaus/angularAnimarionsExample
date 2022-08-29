import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterStaggerComponent } from './filter-stagger/filter-stagger.component';
import { InsertRemoveComponent } from './insert-remove/insert-remove.component';
import { OpenCloseComponent } from './open-close/open-close.component';

const routes: Routes = [
  { path: 'open-close', component: OpenCloseComponent, data: { animation: 'OpenClose' } },
  { path: 'insert-remove', component: InsertRemoveComponent, data: { animation: 'InsertRemove' } },
  { path: 'filter-stagger', component: FilterStaggerComponent, data: { animation: 'FilterStagger' } },
  { path: '**', component: OpenCloseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
