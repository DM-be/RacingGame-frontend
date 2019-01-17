import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class DataServiceService {
  private PORT = 50518;
  constructor(private http: HttpClient) {
  }

  getAllScores() {
    return this.http.get(`http://localhost:${this.PORT}/api/scores`);
  }
}
