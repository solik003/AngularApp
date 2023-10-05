import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PersonModel } from "src/app/model/person.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class PersonService {
  constructor(private http: HttpClient) {}

  post(model: PersonModel): Observable<PersonModel> {
    return this.http.post<PersonModel>(environment.baseUrl + "/person", model);
  }
}
