import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './Components/index/index.component';
import { PricingComponent } from './Components/pricing/pricing.component';
import { BlogComponent } from './Components/blog/blog.component';
import { LoginComponent } from './Components/login/login.component';
import { BlogSingleComponent } from './Components/blog-single/blog-single.component';
import { RecordVideoComponent } from './Components/record-video/record-video.component';
import { RegisterComponent } from './Components/register/register.component';
import { KonsultProfileComponent } from './Components/konsult-profile/konsult-profile.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PricingComponent,
    BlogComponent,
    LoginComponent,
    BlogSingleComponent,
    RecordVideoComponent,
    RegisterComponent,
    KonsultProfileComponent,
    ResetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
