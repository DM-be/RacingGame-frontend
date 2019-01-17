import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "src/app/services/DataService.service";
import * as signalR from "@aspnet/signalr";

@Component({
  selector: "app-leaderboard-table",
  templateUrl: "./leaderboard-table.component.html",
  styleUrls: ["./leaderboard-table.component.css"]
})
export class LeaderboardTableComponent implements OnInit {
  records: any;
  details: boolean;
  user: any;
  private _hubConnection;
  private PORT = 50518;
  constructor(private service: DataServiceService) {}

  ngOnInit() {
    this.details = false;
    this.user = {};
    this.service.getAllScores().subscribe(results => {
      this.records = results;
    });
    this.setupHub();
  }

  loadDetailsUser(event, record) {
    this.user = {
      details: record,
      records: this.filterRecordsForUsername(record.username)
    };
    this.details = true;
  }
  filterRecordsForUsername(username) {
    return this.records.filter(rec => rec.username == username).slice(0, 5);
  }

  async setupHub() {
    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`http://localhost:${this.PORT}/scores`)
      .build();
    try {
      await this._hubConnection.start();
      console.log("Connection started");
    } catch (error) {
      console.log("error");
    }

    this._hubConnection.on("scoresUpdate", newScore => {
      this.updateRecords(newScore);
    });
  }

  private updateRecords(score: any) {
    this.records.push(score);
    this.records.sort(this.sortRecords);
  }

  private sortRecords(recordA, recordB) {
    return recordA.time > recordB.time;
  }
}
