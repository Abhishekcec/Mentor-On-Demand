import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import {AddUserComponent} from './admin/add-user.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { IndexComponent } from './index/index.component';
import { ProfileComponent } from './profile/profile.component';
import { CompletedComponent } from './completed/completed.component';
import { CurrentComponent } from './current/current.component';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/admin.component';
import { PaymentComponent } from './payment/payment.component';
import { TrainerComponent } from './trainer/trainer.component';
import { MloginComponent } from './mlogin/mlogin.component';
import { Users1Component } from './users1/users1.component';
import { MsignupComponent } from './msignup/msignup.component';
import { MentorComponent } from './mentor/mentor.component';
import {AddMentorComponent} from './mentor/add-mentor.component';
import { SkillComponent } from './skill/skill.component';
import {AddSkillComponent} from './skill/add-skill.component';

import { TechnologyComponent } from './technology/technology.component';
import {AddTechnologyComponent} from './technology/add-technology.component';
import { TrainingComponent } from './training/training.component';
import { TrainingcComponent } from './trainingc/trainingc.component';
import {AddTrainingComponent} from './training/add-training.component';
import { Payment1Component } from './payment1/payment1.component';
import {AddPaymentComponent} from './payment/add-payment.component';
import { UsertrainingComponent } from './training/usertraining.component';
import { UserdetailsComponent } from './training/userdetails.component';
import { MentordetailsComponent } from './training/mentordetails.component';
import { MentorprofileComponent } from './trainer/mentorprofile.component';
import { UserprofileComponent } from './users1/userprofile.component';
import { PaymentlistComponent } from './admin/paymentlist.component';
import { CreatetrainingComponent } from './trainer/createtraining.component';
import { UserpaymentComponent } from './users1/userpayment.component';
import { UsercurrComponent } from './trainingc/usercurr.component';
import { MentorcurrComponent } from './completed/mentorcurr.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'msignup', component: MsignupComponent },
  { path: 'index', component: IndexComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'completed', component: CompletedComponent },
  { path: 'current', component: CurrentComponent },
  { path: 'main', component: MainComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'trainer', component: TrainerComponent },
  { path: 'mlogin', component: MloginComponent },
  { path: 'users1', component: Users1Component },
  { path: 'user', component: UserComponent },
  { path: 'mentor', component: MentorComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'addskill', component: AddSkillComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'addtechnology', component: AddTechnologyComponent },
  { path: 'addmentor', component: AddMentorComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'trainingc', component: TrainingcComponent },
  { path: 'addtraining', component: AddTrainingComponent },
  { path: 'payment1', component: Payment1Component },
  { path: 'addpayment', component: AddPaymentComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'usertraining', component: UsertrainingComponent },
  { path: 'userdetails', component: UserdetailsComponent },
  { path: 'mentordetails', component: MentordetailsComponent },
  { path: 'mentorprofile', component: MentorprofileComponent },
  { path: 'userprofile', component: UserprofileComponent },
  { path: 'paymentlist', component: PaymentlistComponent },
  { path: 'createtraining', component: CreatetrainingComponent },
  { path: 'userpayment', component: UserpaymentComponent },
  { path: 'usercurr', component: UsercurrComponent },
  { path: 'mentorcurr', component: MentorcurrComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
