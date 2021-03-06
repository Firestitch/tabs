import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';
import { FsTabsModule } from '@firestitch/tabs';
import { FsLabelModule } from '@firestitch/label';
import { ToastrModule } from 'ngx-toastr';

import { AppMaterialModule } from './material.module';
import {
  KitchenSinkComponent,
  ExamplesComponent
} from './components';
import { AppComponent } from './app.component';
import { KitchenSinkConfigureComponent } from './components/kitchen-sink-configure';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabAComponent, TabBComponent, TabCComponent, TabDComponent } from './components/tabs';
import { FsDialogModule } from '@firestitch/dialog';
import { DialogComponent } from './components/tabs/tab-a/dialog/dialog.component';
import { VerticalTabsComponent } from './components/vertical-tabs/vertical-tabs.component';


const routes: Routes = [
  {
    path: '',
    component: KitchenSinkComponent,
  },
  { path: 'tabs',
    component: TabsComponent,
    children: [
      { path: '', redirectTo: 'a', pathMatch: 'full'},
      { path: 'a', component: TabAComponent },
      { path: 'b', component: TabBComponent },
      { path: 'c', component: TabCComponent },
      { path: 'd', component: TabDComponent },
    ]
  },
];

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsTabsModule.forRoot(),
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsLabelModule,
    FsExampleModule.forRoot(),
    FsMessageModule.forRoot(),
    ToastrModule.forRoot({ preventDuplicates: true }),
    RouterModule.forRoot(routes),
    FsDialogModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    ExamplesComponent,
    KitchenSinkComponent,
    KitchenSinkConfigureComponent,
    TabAComponent,
    TabBComponent,
    TabCComponent,
    TabDComponent,
    TabsComponent,
    DialogComponent,
    VerticalTabsComponent,
  ],
})
export class PlaygroundModule {
}
