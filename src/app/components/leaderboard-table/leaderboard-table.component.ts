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
  allrecords: any;
  listEmpty: boolean;
  details: boolean;
  user: any;
  tracks: any;
  usernames: any;
  selectedTrack: any;
  selectedUsername: String;
  private _hubConnection;
  private PORT = 50518;
  constructor(private service: DataServiceService) {}

  ngOnInit() {
    this.details = false;
    this.user = {};
    this.service.getAllScores().subscribe(results => {
      this.records = results;
      this.allrecords = results;
      this.listEmpty = false;
      this.getTracks();
      this.getUsernames();
      this.selectedUsername = "";
      this.selectedTrack = "";
    });
    this.setupHub();
  }

  setDetailsOff() {
    this.details = false;
  }

  filterTable(makeEmpty) {
    if (makeEmpty) {
      this.selectedTrack = "";
      this.selectedUsername = "";
    }
    this.records = this.allrecords;
    if (this.selectedUsername !== "") {
      this.records = this.records.filter(
        rec => rec.username == this.selectedUsername
      );
    }
    if (this.selectedTrack !== "") {
      this.records = this.records.filter(
        rec => rec.trackName == this.selectedTrack
      );
    }
    if (this.records.length == 0) {
      this.listEmpty = true;
    } else {
      this.listEmpty = false;
    }
  }

  searchTrackName(trackName) {}

  getTracks() {
    this.tracks = [
      { realName: "RaceScene01", displayName: "Robin Track" },
      { realName: "RaceScene02", displayName: "Night Track" }
    ];
  }

  getUsernames() {
    var unique = this.records
      .map(item => item.username)
      .filter((item, idx, arr) => arr.indexOf(item) == idx);
    this.usernames = unique;
  }

  loadDetailsUser(event, record) {
    this.user = {
      details: record,
      records: this.filterRecordsForUsername(record.username)
    };
    console.log(this.user);
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
    this.allrecords.push(score);
    this.allrecords.sort(this.sortRecords);
    this.filterTable(false);
  }

  private sortRecords(recordA, recordB) {
    const time1 = recordA.time;
    const time2 = recordB.time;

    if (time1 < time2) {
      return -1;
    }
    if (time1 > time2) {
      return 1;
    }
    return 0;
  }
}
