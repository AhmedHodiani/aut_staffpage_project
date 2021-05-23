import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeEnComponent } from './components/en/home-en/home-en.component';
import { HomeArComponent } from './components/ar/home-ar/home-ar.component';

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

import { FeedbacksEnComponent } from './components/en/feedbacks/feedbacks-en/feedbacks-en.component';
import { FeedbacksArComponent } from './components/ar/feedbacks/feedbacks-ar/feedbacks-ar.component';

import { FormEnComponent } from './components/en/feedbacks/form-en/form-en.component';
import { FormArComponent } from './components/ar/feedbacks/form-ar/form-ar.component';

import { EthicsEnComponent } from './components/en/ethics-en/ethics-en.component';
import { EthicsArComponent } from './components/ar/ethics-ar/ethics-ar.component';

import { CouncilEnComponent } from './components/en/council-en/council-en.component';
import { CouncilArComponent } from './components/ar/council-ar/council-ar.component';

import { SustainEnComponent } from './components/en/sustain-en/sustain-en.component';
import { SustainArComponent } from './components/ar/sustain-ar/sustain-ar.component';

import { ZohairEnComponent } from './components/en/zohair-en/zohair-en.component';
import { ZohairArComponent } from './components/ar/zohair-ar/zohair-ar.component';

import { LoanEnComponent } from './components/en/zohair/loan-en/loan-en.component';
import { LoanArComponent } from './components/ar/zohair/loan-ar/loan-ar.component';

import { ScholarshipEnComponent } from './components/en/zohair/scholarship-en/scholarship-en.component';
import { ScholarshipArComponent } from './components/ar/zohair/scholarship-ar/scholarship-ar.component';


import { LoginComponent } from './components/staff/login/login.component';
import { MainpageComponent } from './components/staff/mainpage/mainpage.component';

import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';

import { StaffpageEnComponent } from './components/staff/staffpage-en/staffpage-en.component';
import { StaffpageArComponent } from './components/staff/staffpage-ar/staffpage-ar.component';



const routes: Routes = [
  { path: '', redirectTo: 'en', pathMatch: 'full' },

  { path: 'staffadmin', component: LoginComponent, canActivate: [LoginGuard]},
  { path: 'staffadmin/home', component: MainpageComponent, canActivate: [AuthGuard] },

  { path: 'en', component: HomeEnComponent },
  { path: 'ar', component: HomeArComponent },

  { path: 'en/staff/:url', component: StaffpageEnComponent },
  { path: 'ar/staff/:url', component: StaffpageArComponent },

  { path: 'en/about', component: AboutEnComponent },
  { path: 'ar/about', component: AboutArComponent },

  { path: 'en/zohair-sebai-program/loan', component: LoanEnComponent },
  { path: 'ar/zohair-sebai-program/loan', component: LoanArComponent },

  { path: 'en/zohair-sebai-program/scholarship', component: ScholarshipEnComponent },
  { path: 'ar/zohair-sebai-program/scholarship', component: ScholarshipArComponent },

  { path: 'en/alumni', component: AlumniEnComponent },
  { path: 'ar/alumni', component: AlumniArComponent },

  { path: 'en/ethics', component: EthicsEnComponent },
  { path: 'ar/ethics', component: EthicsArComponent },

  { path: 'en/zohair-sebai-program', component: ZohairEnComponent },
  { path: 'ar/zohair-sebai-program', component: ZohairArComponent },

  { path: 'en/sustain', component: SustainEnComponent },
  { path: 'ar/sustain', component: SustainArComponent },

  { path: 'en/feedback', component: FeedbacksEnComponent },
  { path: 'ar/feedback', component: FeedbacksArComponent },

  { path: 'en/councils/:council', component: CouncilEnComponent },
  { path: 'ar/councils/:council', component: CouncilArComponent },

  { path: 'en/feedback/:type', component: FormEnComponent },
  { path: 'ar/feedback/:type', component: FormArComponent },


  { path: 'en/admission/requirements', component: RequirementsEnComponent },
  { path: 'ar/admission/requirements', component: RequirementsArComponent },
  { path: 'en/admission/programs', component: ProgramsEnComponent },
  { path: 'ar/admission/programs', component: ProgramsArComponent },
  { path: 'en/admission/apply', component: ApplyEnComponent },
  { path: 'ar/admission/apply', component: ApplyArComponent },

  { path: 'en/colleges/:college', component: CollegesEnComponent },
  { path: 'ar/colleges/:college', component: CollegesArComponent },

  { path: 'en/centers/:center', component: CentersEnComponent },
  { path: 'ar/centers/:center', component: CentersArComponent },

  { path: 'en/news', component: NewsEnComponent },
  { path: 'ar/news', component: NewsArComponent },
  { path: 'en/news/:id', component: NewsDetailsEnComponent },
  { path: 'ar/news/:id', component: NewsDetailsArComponent },

  { path: 'en/students', component: StudentsEnComponent },
  { path: 'ar/students', component: StudentsArComponent },

  { path: 'en/scientific-research/dean', component: DeanEnComponent },
  { path: 'ar/scientific-research/dean', component: DeanArComponent },
  { path: 'en/scientific-research/published', component: PublishedEnComponent },
  { path: 'ar/scientific-research/published', component: PublishedArComponent },

  { path: 'en/gallary', component: GallaryEnComponent },
  { path: 'ar/gallary', component: GallaryArComponent },

  { path: 'en/presidency', component: PresidencyEnComponent },
  { path: 'ar/presidency', component: PresidencyArComponent },

  { path: 'en/about/honorary', component: HonoraryEnComponent },
  { path: 'ar/about/honorary', component: HonoraryArComponent },
  // { path: '**', component: PageNotFoundComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


