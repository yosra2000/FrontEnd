import {Routes} from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';

import { AddCondidatComponent } from './components/condidat/add-condidat/add-condidat.component';
import { ViewCondidatComponent } from './components/condidat/view-condidat/view-condidat.component';
import { AddPermissionComponent } from './components/permission/add-permission/add-permission.component';
import { ViewPermissionComponent } from './components/permission/view-permission/view-permission.component';
import { ViewCategoriesComponent } from './components/categories/view-categories/view-categories.component';
import { EditCategoryComponent } from './components/categories/edit-category/edit-category.component';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { ViewRoleComponent } from './components/roles/view-role/view-role.component';
import { EditRoleComponent } from './components/roles/edit-role/edit-role.component';
import { AddRoleComponent } from './components/roles/add-role/add-role.component';
import { ViewUserComponent } from './components/users/view-user/view-user.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';


export const AppRoutes: Routes = [
 {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'users/add', component: AddUserComponent },
      { path: 'users/edit/:id', component: EditUserComponent },
      { path: 'users/view', component: ViewUserComponent },

      { path: 'roles/add', component:AddRoleComponent },
      { path: 'roles/edit/:id', component: EditRoleComponent },
      { path: 'roles/view', component: ViewRoleComponent },


      { path: 'categories/add', component:AddCategoryComponent },
      { path: 'categories/edit/:id', component: EditCategoryComponent },
      { path: 'categories/view', component: ViewCategoriesComponent },
  
      { path: 'condidat/add', component:AddCondidatComponent },
      { path: 'condidat/view', component: ViewCondidatComponent },


      { path: 'permission/add', component:AddPermissionComponent },
      { path: 'permission/view', component: ViewPermissionComponent},



      {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
      }, {
        path: 'widget',
        loadChildren: './pages/widget/widget.module#WidgetModule'
      }, {
        path: 'basic',
        loadChildren: './pages/ui-elements/basic/basic.module#BasicModule'
      }, {
        path: 'advance',
        loadChildren: './pages/ui-elements/advance/advance.module#AdvanceModule'
      }, {
        path: 'animations',
        loadChildren: './pages/animations/animations.module#AnimationsModule'
      }, {
        path: 'forms',
        loadChildren: './pages/ui-elements/forms/forms.module#FormsModule'
      }, {
        path: 'bootstrap-table',
        loadChildren: './pages/ui-elements/tables/bootstrap-table/bootstrap-table.module#BootstrapTableModule',
      }, {
        path: 'data-table',
        loadChildren: './pages/ui-elements/tables/data-table/data-table.module#DataTableModule',
      }, {
        path: 'charts',
        loadChildren: './pages/charts/charts.module#ChartsModule',
      }, {
        path: 'map',
        loadChildren: './pages/map/map.module#MapModule',
      }, {
        path: 'maintenance/error',
        loadChildren: './pages/maintenance/error/error.module#ErrorModule'
      }, {
        path: 'maintenance/coming-soon',
        loadChildren: './pages/maintenance/coming-soon/coming-soon.module#ComingSoonModule'
      }, {
        path: 'user',
        loadChildren: './pages/user/user.module#UserModule'
      }, {
        path: 'crm-contact',
        loadChildren: './pages/ui-elements/crm-contact/crm-contact.module#CrmContactModule'
      }, {
        path: 'task',
        loadChildren: './pages/task/task.module#TaskModule'
      }, {
        path: 'editor',
        loadChildren: './pages/ui-elements/editor/editor.module#EditorModule'
      }, {
        path: 'invoice',
        loadChildren: './pages/invoice/invoice.module#InvoiceModule'
      }, {
        path: 'file-upload',
        loadChildren: './pages/ui-elements/file-upload/file-upload.module#FileUploadUIModule'
      }, {
        path: 'change-log',
        loadChildren: './pages/change-log/change-log.module#ChangeLogModule'
      }, {
        path: 'simple-page',
        loadChildren: './pages/simple-page/simple-page.module#SimplePageModule'
      }
    ]
  }, {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: './pages/authentication/authentication.module#AuthenticationModule'
      }, {
        path: 'maintenance/offline-ui',
        loadChildren: './pages/maintenance/offline-ui/offline-ui.module#OfflineUiModule'
      }
    ]
  }
];
