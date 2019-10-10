import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app.routing.module';
import {UserService} from './user/user.service';
import {HttpClientModule} from "@angular/common/http";
import {AddUserComponent} from './admin/add-user.component';
import { SigninComponent } from './signin/signin.component';
import {SigninService} from './signin/signin.service';
import { MsignupComponent } from './msignup/msignup.component';
import {MsignupService} from './msignup/msignup.service';
import { SignupComponent } from './signup/signup.component';
import {SignupService} from './signup/signup.service';
import { IndexComponent } from './index/index.component';
import {IndexService} from './index/index.service';
import { ProfileComponent } from './profile/profile.component';
import {ProfileService} from './profile/profile.service';
import { CompletedComponent } from './completed/completed.component';
import {CompletedService} from './completed/completed.service';
import { CurrentComponent } from './current/current.component';
import {CurrentService} from './current/current.service';
import { MainComponent } from './main/main.component';
import {MainService} from './main/main.service';
import { AdminComponent } from './admin/admin.component';
import {AdminService} from './admin/admin.service';
import { PaymentComponent } from './payment/payment.component';
import {PaymentService} from './payment/payment.service';
import { TrainerComponent } from './trainer/trainer.component';
import {TrainerService} from './trainer/trainer.service';
import { MloginComponent } from './mlogin/mlogin.component';
import {MloginService} from './mlogin/mlogin.service';
import { Users1Component } from './users1/users1.component';
import { Users1Service } from './users1/users1.service';
import { MentorComponent } from './mentor/mentor.component';
import {AddMentorComponent} from './mentor/add-mentor.component';
import { MentorService } from './mentor/mentor.service';
import { SkillComponent } from './skill/skill.component';
import {SkillService} from './skill/skill.service';
import {AddSkillComponent} from './skill/add-skill.component';
import { TechnologyComponent } from './technology/technology.component';
import {TechnologyService} from './technology/technology.service';
import {AddTechnologyComponent} from './technology/add-technology.component';
import { TrainingComponent } from './training/training.component';
import {TrainingService} from './training/training.service';
import {AddTrainingComponent} from './training/add-training.component';
import { Payment1Component } from './payment1/payment1.component';
import {Payment1Service} from './payment1/payment1.service';
import {AddPaymentComponent} from './payment/add-payment.component';
import { TrainingcComponent } from './trainingc/trainingc.component';
import {TrainingcService} from './trainingc/trainingc.service';
import { UsertrainingComponent } from './training/usertraining.component';
import {UsertrainingService} from './usertraining/usertraining.service';
import {UserdetailsComponent} from './training/userdetails.component';
import {MentordetailsComponent} from './training/mentordetails.component';
import {MentorprofileComponent} from './trainer/mentorprofile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserprofileComponent } from './users1/userprofile.component';
import { PaymentlistComponent } from './admin/paymentlist.component';
import { CreatetrainingComponent } from './trainer/createtraining.component';
import { UserpaymentComponent } from './users1/userpayment.component';
import { UsercurrComponent } from './trainingc/usercurr.component';
import { MentorcurrComponent } from './completed/mentorcurr.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    SigninComponent,
    SignupComponent,
    MsignupComponent,
    IndexComponent,
    ProfileComponent,
    CompletedComponent,
    CurrentComponent,
    MainComponent,
    AdminComponent,
    PaymentComponent,
    TrainerComponent,
    MloginComponent,                                                                                                                                                              
    Users1Component,
    SkillComponent,
    AddSkillComponent,
    TechnologyComponent,
    AddTechnologyComponent,
    TrainingComponent,
    TrainingcComponent,
    AddTrainingComponent,
    AddMentorComponent,
    Payment1Component,
    AddPaymentComponent,
    MentorComponent,
    UsertrainingComponent,
    MentordetailsComponent,
    UserdetailsComponent,
    MentorprofileComponent,
    UserprofileComponent,
    PaymentlistComponent,
    CreatetrainingComponent,
    UserpaymentComponent,
    UsercurrComponent,
    MentorcurrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule, 
     NgCircleProgressModule.forRoot({
      
      radius: 25,
      outerStrokeWidth: 8,
      innerStrokeWidth: 0,
      outerStrokeColor: "cyan",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [UserService, SigninService, SignupService, IndexService, ProfileService, Payment1Service, CompletedService, CurrentService, MainService, AdminService, PaymentService, TrainerService, MloginService, Users1Service, MsignupService, MentorService,  SkillService, TechnologyService, TrainingService,TrainingcService, UsertrainingService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
