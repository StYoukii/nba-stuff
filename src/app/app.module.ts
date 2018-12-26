import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Globals } from './core/globals';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DailySchedulesComponent } from './components/daily-schedules/daily-schedules.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { GameComponent } from './components/game/game.component';
import { LastFiveGamesComponent } from './components/last-five-games/last-five-games.component';
import { CommonTeamRosterComponent } from './components/common-team-roster/common-team-roster.component';

const appRoutes: Routes = [
  { path: 'game/:homeTeamId/:visitorTeamId', component: GameComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DailySchedulesComponent,
    TopBarComponent,
    GameComponent,
    LastFiveGamesComponent,
    CommonTeamRosterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}),
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatTableModule
  ],
  providers: [
    Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
