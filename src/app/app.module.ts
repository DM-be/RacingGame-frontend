import { LeaderboardPageComponent } from "./components/leaderboard-page/leaderboard-page.component";
import { MaterialModule } from "./material";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LeaderboardTableComponent } from "./components/leaderboard-table/leaderboard-table.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DataServiceService } from "./services/DataService.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardTableComponent,
    LeaderboardPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
