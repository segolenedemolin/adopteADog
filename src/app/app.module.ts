import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddDogComponent } from './_components/add-dog/add-dog.component';
import { EditDogComponent } from './_components/edit-dog/edit-dog.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './_components/nav/nav.component';
import { NotFoundComponent } from './_components/not-found/not-found.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/data-memory.service';
import { DetailsDogComponent } from './_components/details-dog/details-dog.component';
import { AdoptionComponent } from './_components/adoption/adoption.component';
import { FooterComponent } from './_components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddDogComponent,
    EditDogComponent,
    NavComponent,
    NotFoundComponent,
    DetailsDogComponent,
    AdoptionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false})
  ],
  providers: [],
  bootstrap:[AppComponent]
})
export class AppModule { }
