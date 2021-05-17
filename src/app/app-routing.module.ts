import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogSingleComponent } from './Components/blog-single/blog-single.component';
import { BlogComponent } from './Components/blog/blog.component';
import { IndexComponent } from './Components/index/index.component';
import { KonsultProfileComponent } from './Components/konsult-profile/konsult-profile.component';
import { LoginComponent } from './Components/login/login.component';
import { PricingComponent } from './Components/pricing/pricing.component';
import { RecordVideoComponent } from './Components/record-video/record-video.component';
import { RegisterComponent } from './Components/register/register.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';

const routes: Routes = [
  { path : "", component : IndexComponent },
  { path : "pricing", component : PricingComponent },
  { path : "blog", component : BlogComponent },
  { path : "login", component : LoginComponent },
  { path : "blog-single", component : BlogSingleComponent },
  { path : "record-video", component : RecordVideoComponent },
  { path : "register", component : RegisterComponent },
  { path : "konsult-profile", component : KonsultProfileComponent },
  { path : "resetpassword", component : ResetpasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
