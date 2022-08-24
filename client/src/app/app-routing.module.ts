import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layouts/auth-admin-layout/auth-admin-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { GuardsadminGuard } from './views/guards/guardsadmin.guard';

const routes: Routes = [
  {path:'',component:FrontLayoutComponent,children:[{
    path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'loginuser',loadChildren:()=>import('./views/front/loginuser/loginuser.module').then(m=>m.LoginuserModule)},
    {path:'apropos',loadChildren:()=>import('./views/front/about/about.module').then(m=>m.AboutModule)},
    {path:'nosformations',loadChildren:()=>import('./views/front/courses/courses.module').then(m=>m.CoursesModule)},
    {path:'blog',loadChildren:()=>import('./views/front/blog/blog.module').then(m=>m.BlogModule)},
    {path:'contact',loadChildren:()=>import('./views/front/contact/contact.module').then(m=>m.ContactModule)},
    {path:'evenements',loadChildren:()=>import('./views/front/evenement/evenement.module').then(m=>m.EvenementModule)},
    {path:'formateurs',loadChildren:()=>import('./views/front/formateur/formateur.module').then(m=>m.FormateurModule)},
    {path:'inscription',loadChildren:()=>import('./views/front/inscription/inscription.module').then(m=>m.InscriptionModule)},
    {path:'detail-blog',loadChildren:()=>import('./views/front/detail-blog/detail-blog.module').then(m=>m.DetailBlogModule)},
    {path:'detail-formation',loadChildren:()=>import('./views/front/formationdetail/formationdetail.module').then(m=>m.FormationdetailModule)},
    {path:'summer-academy',loadChildren:()=>import('./views/front/academieete/academieete.module').then(m=>m.AcademieeteModule)},
    {path:'night-courses',loadChildren:()=>import('./views/front/courssoir/courssoir.module').then(m=>m.CourssoirModule)},
    {path:'part-time-courses',loadChildren:()=>import('./views/front/part-time-courses/part-time-courses.module').then(m=>m.PartTimeCoursesModule)},

  ]},
  {path:'admin',component:AdminLayoutComponent,canActivate:[GuardsadminGuard],children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'gestionuser',loadChildren:()=>import('./views/admin/gestion-users/gestion-users.module').then(m=>m.GestionUsersModule)},
    {path:'addusers',loadChildren:()=>import('./views/admin/addusers/addusers.module').then(m=>m.AddusersModule)},
    {path:'gestionblogs',loadChildren:()=>import('./views/admin/gestion-blogs/gestion-blogs.module').then(m=>m.GestionBlogsModule)},
    {path:'gestioncategories',loadChildren:()=>import('./views/admin/gestion-categories/gestion-categories.module').then(m=>m.GestionCategoriesModule)},
    {path:'Addcategories',loadChildren:()=>import('./views/admin/addcategories/addcategories.module').then(m=>m.AddcategoriesModule)},
    {path:'gestionformations',loadChildren:()=>import('./views/admin/gestion-formations/gestion-formations.module').then(m=>m.GestionFormationsModule)},
    {path:'gestionevenements',loadChildren:()=>import('./views/admin/gestion-evenements/gestion-evenements.module').then(m=>m.GestionEvenementsModule)},
    {path:'gestionformateurs',loadChildren:()=>import('./views/admin/gestion-formateurs/gestion-formateurs.module').then(m=>m.GestionFormateursModule)},
    {path:'gestioninscription',loadChildren:()=>import('./views/admin/gestion-inscriptions/gestion-inscriptions.module').then(m=>m.GestionInscriptionsModule)}
  ]},
  {path:'admin/login',component:AuthAdminLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
