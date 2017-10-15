import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoistingComponent } from './hoisting/hoisting.component';
import { ArrayComponent } from './array/array.component';

const routes: Routes = [
    { path: 'hoisting', component: HoistingComponent },
    { path: 'array', component: ArrayComponent }
]


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports : [
        RouterModule
    ]
})
export class AppRouteModule {}