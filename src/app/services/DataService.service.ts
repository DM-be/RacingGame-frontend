import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class DataServiceService {
  constructor(private http: HttpClient) {}

  getAllScores() {
    return this.http.get("http://localhost:50518/api/scores");
  }
}
