import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Condidat } from "../models/candidat.model";

export class CondidatService {
  constructor(private client: HttpClient) {}

  // host = 'http://localhost:3000/api/users'
  host = "http://localhost:3000/condidats"; // json server

  public getCandidat(): Observable<Condidat[]> {
    return this.client.get<Condidat[]>(this.host);
  }

  public getCandidatsByKeyword(keyword: any): Observable<Condidat[]> {
    if (keyword !== "") {
      return this.client.get<Condidat[]>(
        `${this.host}?fullname_like=${keyword}`
      );
    }
    return this.client.get<Condidat[]>(this.host);
  }

  public getCandidatById(id: any): Observable<Condidat> {
    return this.client.get<Condidat>(`${this.host}/${id}`);
  }

  public addCandidat(candidat: Condidat): Observable<void> {
    return this.client.post<void>(this.host, candidat);
  }

  public deleteCandidat(id: any): Observable<void> {
    return this.client.delete<void>(`${this.host}/${id}`);
  }

  public updateCandidat(id: any, candidat: Condidat): Observable<void> {
    return this.client.put<void>(`${this.host}/${id}`, candidat);
  }
}
