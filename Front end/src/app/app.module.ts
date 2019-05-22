import { BookFlightService } from './book-flight/book-flight.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { HttpModule } from "@angular/http";
import { SuccessMessagePipe } from "./book-flight/success-message.pipe";
import { LoginComponent } from './login/login.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { AllService } from './all.service';
import { QpeditorComponent } from './qpeditor/qpeditor.component';
import { ReviewerComponent } from './reviewer/reviewer.component';
import { EtaComponent } from './eta/eta.component';
import { CreateNewQpComponent } from './create-new-qp/create-new-qp.component';
import { QpEditorChoiceComponent } from './qp-editor-choice/qp-editor-choice.component';
import { AuthGuard } from './auth.guard';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BookFlightComponent,
    SuccessMessagePipe,
    LoginComponent,
 
    AboutUsComponent,
    QpeditorComponent,
    ReviewerComponent,
    EtaComponent,
    CreateNewQpComponent,
    QpEditorChoiceComponent,
    FooterComponent,
    ContactComponent,PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [AllService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
