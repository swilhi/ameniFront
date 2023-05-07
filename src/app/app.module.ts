import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './backoffice/page1/page1.component';
import { Page2Component } from './backoffice/page2/page2.component';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationFormComponent } from './backoffice/accomodation-form/accomodation-form.component';
import { EventComponent } from './backoffice/event/event.component';
import { EventFormComponent } from './backoffice/event-form/event-form.component';
import { TransportComponent } from './backoffice/transport/transport.component';
import { TransportFormComponent } from './backoffice/transport-form/transport-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './backoffice/sidenav/sidenav.component';
import { RoomsComponent } from './backoffice/rooms/rooms.component';
import { AddRoomComponent } from './backoffice/add-room/add-room.component';
import { HomeComponent } from './backoffice/home/home.component';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './front/blog/blog.component';
import { IndexComponent } from './front/index/index.component';
import { BookComponent } from './front/book/book.component';
import { AccBookComponent } from './front/acc-book/acc-book.component';
import { HeaderComponent } from './front/header/header.component';
import { RoomdetailsComponent } from './front/roomdetails/roomdetails.component';
import { EventListComponent } from './front/event-list/event-list.component';
import { EventParticipateTransportComponent } from './front/event-participate-transport/event-participate-transport.component';


export const appRouteList: Routes = [
  {
    path: 'home',
    component: HomeComponent
},
{
  path: 'index',
  component: IndexComponent
},
  {
      path: 'page1',
      component: Page1Component
  },
  {
    path: 'header',
    component:HeaderComponent
},
{
  path: 'blog',
  component:BlogComponent
},
  {
      path: 'page2',
      component: Page2Component
  },
  {
    path:'Accomodation-form',
    component: AccomodationFormComponent
  },
  {
    path: 'rooms',
    component: RoomsComponent
  },
  {
    path: 'addroom',
    component: AddRoomComponent
  },
  {
    path: 'event',
    component: EventComponent
  },
  {
    path: 'eventForm',
    component: EventFormComponent
  },
  {
    path: 'transport',
    component: TransportComponent
  },
  {
    path: 'transportForm',
    component: TransportFormComponent
  },
  {
    path: 'eventList',
    component: EventListComponent
  },
  {
    path: 'participate',
    component: EventParticipateTransportComponent
  },
{
  path: 'book',
  component: BookComponent
},
{
  path: 'accbook',
  component: AccBookComponent
},
  {
      path: '**',
      redirectTo: 'AccBookComponent'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    AccomodationFormComponent,
    EventComponent,
    EventFormComponent,
    TransportComponent,
    TransportFormComponent,
    SidenavComponent,
    RoomsComponent,
    AddRoomComponent,
    HomeComponent,
    BlogComponent,
    IndexComponent,
    BookComponent,
    AccBookComponent,
    HeaderComponent,
    RoomdetailsComponent,
    EventListComponent,
    EventParticipateTransportComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRouteList),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
