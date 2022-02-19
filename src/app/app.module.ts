import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutes } from "./app.routing";

import { AppComponent } from "./app.component";
import { AdminComponent } from "./layout/admin/admin.component";
import { ClickOutsideModule } from "ng-click-outside";
import { SharedModule } from "./shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BreadcrumbsComponent } from "./layout/admin/breadcrumbs/breadcrumbs.component";
import { TitleComponent } from "./layout/admin/title/title.component";
import { AuthComponent } from "./layout/auth/auth.component";
import { AddUserComponent } from "./components/users/add-user/add-user.component";
import { EditUserComponent } from "./components/users/edit-user/edit-user.component";
import { ViewUserComponent } from "./components/users/view-user/view-user.component";
import { AddRoleComponent } from "./components/roles/add-role/add-role.component";
import { ViewRoleComponent } from "./components/roles/view-role/view-role.component";
import { EditRoleComponent } from "./components/roles/edit-role/edit-role.component";
import { AddCategoryComponent } from "./components/categories/add-category/add-category.component";
import { ViewCategoriesComponent } from "./components/categories/view-categories/view-categories.component";
import { EditCategoryComponent } from "./components/categories/edit-category/edit-category.component";
import { AddCondidatComponent } from "./components/condidat/add-condidat/add-condidat.component";
import { ViewCondidatComponent } from "./components/condidat/view-condidat/view-condidat.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddPermissionComponent } from "./components/permission/add-permission/add-permission.component";
import { ViewPermissionComponent } from "./components/permission/view-permission/view-permission.component";
import { UiSwitchModule } from "ng2-ui-switch/dist";
import { EditCondidatComponent } from "./components/condidat/edit-condidat/edit-condidat.component";
import { AddVehiculeComponent } from "./components/vehicule/add-vehicule/add-vehicule.component";
import { EditVehiculeComponent } from "./components/vehicule/edit-vehicule/edit-vehicule.component";
import { ViewVehiculeComponent } from "./components/vehicule/view-vehicule/view-vehicule.component";
import { CondidatDetailsComponent } from "./components/condidat/condidat-details/condidat-details.component";
import { AddEmployéComponent } from "./components/employé/add-employé/add-employé.component";
import { EditEmploieComponent } from "./components/employé/edit-emploie/edit-emploie.component";
import { ViewEmployéComponent } from "./components/employé/view-employé/view-employé.component";
import { AddContratComponent } from "./components/contrat/add-contrat/add-contrat.component";
import { ViewContratComponent } from "./components/contrat/view-contrat/view-contrat.component";
import { EditContratComponent } from "./components/contrat/edit-contrat/edit-contrat.component";
import { ViewRendezVousComponent } from "./components/rendez-vous/view-rendez-vous/view-rendez-vous.component";
import { AddRendezVousComponent } from "./components/rendez-vous/add-rendez-vous/add-rendez-vous.component";

// // import ngx-translate and the http loader
// import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
// import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BreadcrumbsComponent,
    TitleComponent,
    AuthComponent,
    AddUserComponent,
    EditUserComponent,
    ViewUserComponent,
    AddRoleComponent,
    ViewRoleComponent,
    EditRoleComponent,
    AddCategoryComponent,
    ViewCategoriesComponent,
    EditCategoryComponent,
    AddCondidatComponent,
    ViewCondidatComponent,
    AddPermissionComponent,
    ViewPermissionComponent,
    EditCondidatComponent,
    AddVehiculeComponent,
    EditVehiculeComponent,
    ViewVehiculeComponent,
    CondidatDetailsComponent,
    AddEmployéComponent,
    EditEmploieComponent,
    ViewEmployéComponent,
    AddContratComponent,
    ViewContratComponent,
    EditContratComponent,
    AddRendezVousComponent,
    ViewRendezVousComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    ClickOutsideModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    UiSwitchModule,
    //  // ngx-translate and the loader module
    // TranslateModule.forRoot({
    //      loader: {
    //          provide: TranslateLoader,
    //          useFactory: HttpLoaderFactory,
    //          deps: [HttpClient]
    //      }
    //  })
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
