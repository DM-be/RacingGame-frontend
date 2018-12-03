import { LeaderboardTableComponent } from "./components/leaderboard-table/leaderboard-table.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [{ path: "", component: LeaderboardTableComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
