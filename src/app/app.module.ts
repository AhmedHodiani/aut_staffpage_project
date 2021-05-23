import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecaptchaModule } from 'ng-recaptcha';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { HomeEnComponent } from './components/en/home-en/home-en.component';
import { HomeArComponent } from './components/ar/home-ar/home-ar.component';

import { NavbarEnComponent } from './components/en/shared/navbar-en/navbar-en.component';
import { NavbarArComponent } from './components/ar/shared/navbar-ar/navbar-ar.component';

import { FooterEnComponent } from './components/en/shared/footer-en/footer-en.component';
import { FooterArComponent } from './components/ar/shared/footer-ar/footer-ar.component';

import { AboutEnComponent } from './components/en/about-en/about-en.component';
import { AboutArComponent } from './components/ar/about-ar/about-ar.component';

import { CollegesEnComponent } from './components/en/colleges-en/colleges-en.component';
import { CollegesArComponent } from './components/ar/colleges-ar/colleges-ar.component';

import { CentersEnComponent } from './components/en/centers-en/centers-en.component';
import { CentersArComponent } from './components/ar/centers-ar/centers-ar.component';

import { RequirementsEnComponent } from './components/en/admission/requirements-en/requirements-en.component';
import { RequirementsArComponent } from './components/ar/admission/requirements-ar/requirements-ar.component';

import { ProgramsEnComponent } from './components/en/admission/programs-en/programs-en.component';
import { ProgramsArComponent } from './components/ar/admission/programs-ar/programs-ar.component';

import { ApplyEnComponent } from './components/en/admission/apply-en/apply-en.component';
import { ApplyArComponent } from './components/ar/admission/apply-ar/apply-ar.component';

import { NewsEnComponent } from './components/en/news-en/news-en.component';
import { NewsArComponent } from './components/ar/news-ar/news-ar.component';

import { NewsDetailsEnComponent } from './components/en/news-en/news-details-en/news-details-en.component';
import { NewsDetailsArComponent } from './components/ar/news-ar/news-details-ar/news-details-ar.component';

import { StudentsEnComponent } from './components/en/students-en/students-en.component';
import { StudentsArComponent } from './components/ar/students-ar/students-ar.component';

import { DeanEnComponent } from './components/en/research/dean-en/dean-en.component';
import { DeanArComponent } from './components/ar/research/dean-ar/dean-ar.component';

import { PublishedEnComponent } from './components/en/research/published-en/published-en.component';
import { PublishedArComponent } from './components/ar/research/published-ar/published-ar.component';

import { GallaryEnComponent } from './components/en/gallary-en/gallary-en.component';
import { GallaryArComponent } from './components/ar/gallary-ar/gallary-ar.component';

import { PresidencyEnComponent } from './components/en/presidency-en/presidency-en.component';
import { PresidencyArComponent } from './components/ar/presidency-ar/presidency-ar.component';

import { HonoraryEnComponent } from './components/en/honorary-en/honorary-en.component';
import { HonoraryArComponent } from './components/ar/honorary-ar/honorary-ar.component';

import { AlumniEnComponent } from './components/en/alumni-en/alumni-en.component';
import { AlumniArComponent } from './components/ar/alumni-ar/alumni-ar.component';


import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import { FeedbacksEnComponent } from './components/en/feedbacks/feedbacks-en/feedbacks-en.component';
import { FormEnComponent } from './components/en/feedbacks/form-en/form-en.component';

import { FeedbacksArComponent } from './components/ar/feedbacks/feedbacks-ar/feedbacks-ar.component';
import { FormArComponent } from './components/ar/feedbacks/form-ar/form-ar.component';

import { ToastrModule } from 'ngx-toastr';

import { EthicsEnComponent } from './components/en/ethics-en/ethics-en.component';
import { EthicsArComponent } from './components/ar/ethics-ar/ethics-ar.component';
import { CouncilEnComponent } from './components/en/council-en/council-en.component';
import { CouncilArComponent } from './components/ar/council-ar/council-ar.component';

import { SustainEnComponent } from './components/en/sustain-en/sustain-en.component';
import { SustainArComponent } from './components/ar/sustain-ar/sustain-ar.component';
import { DatePipe } from '@angular/common';

import { ZohairEnComponent } from './components/en/zohair-en/zohair-en.component';
import { ZohairArComponent } from './components/ar/zohair-ar/zohair-ar.component';

import { LoanEnComponent } from './components/en/zohair/loan-en/loan-en.component';
import { ScholarshipEnComponent } from './components/en/zohair/scholarship-en/scholarship-en.component';
import { LoanArComponent } from './components/ar/zohair/loan-ar/loan-ar.component';
import { ScholarshipArComponent } from './components/ar/zohair/scholarship-ar/scholarship-ar.component';

import { LoginComponent } from './components/staff/login/login.component';
import { MainpageComponent } from './components/staff/mainpage/mainpage.component';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './services/auth.interceptor';


import { StaffpageEnComponent } from './components/staff/staffpage-en/staffpage-en.component';
import { StaffpageArComponent } from './components/staff/staffpage-ar/staffpage-ar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeEnComponent,
    HomeArComponent,
    NavbarEnComponent,
    NavbarArComponent,
    FooterEnComponent,
    FooterArComponent,
    AboutEnComponent,
    AboutArComponent,
    CollegesEnComponent,
    CollegesArComponent,
    TruncatePipe,
    // DatePipe,
    CentersEnComponent,
    CentersArComponent,
    RequirementsEnComponent,
    ProgramsEnComponent,
    ApplyEnComponent,
    NewsEnComponent,
    NewsArComponent,
    RequirementsArComponent,
    ProgramsArComponent,
    ApplyArComponent,
    NewsDetailsEnComponent,
    NewsDetailsArComponent,
    StudentsEnComponent,
    StudentsArComponent,
    DeanEnComponent,
    PublishedEnComponent,
    PublishedArComponent,
    DeanArComponent,
    GallaryEnComponent,
    GallaryArComponent,
    PresidencyEnComponent,
    PresidencyArComponent,
    HonoraryEnComponent,
    HonoraryArComponent,
    AlumniEnComponent,
    AlumniArComponent,
    FeedbacksEnComponent,
    FormEnComponent,
    FeedbacksArComponent,
    FormArComponent,
    EthicsEnComponent,
    EthicsArComponent,
    CouncilEnComponent,
    CouncilArComponent,
    SustainEnComponent,
    SustainArComponent,
    ZohairEnComponent,
    ZohairArComponent,
    LoanEnComponent,
    ScholarshipEnComponent,
    LoanArComponent,
    ScholarshipArComponent,
    LoginComponent,
    MainpageComponent,
    StaffpageEnComponent,
    StaffpageArComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CKEditorModule,
    RecaptchaModule,
    NgApexchartsModule,
    NgxYoutubePlayerModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-left'
    }),
  ],
  providers: [ApiService, AuthService, CollegesArComponent, CollegesEnComponent, CentersEnComponent, CentersArComponent, 
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
