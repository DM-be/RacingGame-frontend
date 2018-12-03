import { MaterialModule } from "./material";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LeaderboardTableComponent } from "./components/leaderboard-table/leaderboard-table.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [AppComponent, LeaderboardTableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
