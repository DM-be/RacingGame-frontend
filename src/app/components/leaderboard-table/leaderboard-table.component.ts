import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "src/app/services/DataService.service";

@Component({
  selector: "app-leaderboard-table",
  templateUrl: "./leaderboard-table.component.html",
  styleUrls: ["./leaderboard-table.component.css"]
})
export class LeaderboardTableComponent implements OnInit {
  records: any;
  details: boolean;
  user: any;
  constructor(private service: DataServiceService) {}

  ngOnInit() {
    this.details = false;
    this.user = {};
    this.service.getAllScores().subscribe(results => {
      this.records = results;
    });
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
}
