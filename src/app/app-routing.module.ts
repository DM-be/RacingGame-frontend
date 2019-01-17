import { LeaderboardTableComponent } from "./components/leaderboard-table/leaderboard-table.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LeaderboardPageComponent } from "./components/leaderboard-page/leaderboard-page.component";

const routes: Routes = [
  { path: "", component: LeaderboardPageComponent },
  { path: "leaderboard", component: LeaderboardTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
