import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { QpeditorComponent } from './qpeditor/qpeditor.component';
import { ReviewerComponent } from './reviewer/reviewer.component';
import { EtaComponent } from './eta/eta.component';
import { CreateNewQpComponent } from './create-new-qp/create-new-qp.component';
import { QpEditorChoiceComponent } from './qp-editor-choice/qp-editor-choice.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//add the route object inside the below variables
export const routes: Routes = [
  
//   {path:"login",
//   component:LoginComponent
// },
// {path:"option",
//   component:OptionComponent
// },{
//   path:"about",
//   component:AboutUsComponent
// }
{
  path:"home",
  component:AboutUsComponent
},
{path:"login",
  component:LoginComponent
},
{
  path:"reviewer",
  // canActivate:[AuthGuard],
  component:ReviewerComponent
},
{
  path:"qpeditor",
  // canActivate:[AuthGuard],
  component:QpeditorComponent
},
{
  path:"eta",
  component:EtaComponent
},
{
  path:'',
  redirectTo:'/home',
  pathMatch:'full'
},
{
  path:'newqp',
  // canActivate:[AuthGuard],
  component:CreateNewQpComponent
},{
  path:'choice',
  // canActivate:[AuthGuard],
  component:QpEditorChoiceComponent
},{
  path:'contact',
  component:ContactComponent

},{path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
