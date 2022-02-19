import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Permis } from "../models/permis.model";
export class PermisService {
  constructor(private client: HttpClient) {}

  // host = 'http://localhost:3000/api/users'
  host = "http://localhost:3000/permis"; // json server

  public getPermis(): Observable<Permis[]> {
    return this.client.get<Permis[]>(this.host);
  }

  public getPermisByKeyword(keyword: any): Observable<Permis[]> {
    if (keyword !== "") {
      return this.client.get<Permis[]>(`${this.host}?title_like=${keyword}`);
    }
  }

  public getPermisById(id: any): Observable<Permis> {
    return this.client.get<Permis>(`${this.host}/${id}`);
  }

  public addPermis(permis: Permis): Observable<void> {
    return this.client.post<void>(this.host, permis);
  }

  public deletePermis(id: any): Observable<void> {
    return this.client.delete<void>(`${this.host}/${id}`);
  }

  public updatePermis(id: any, permis: Permis): Observable<void> {
    return this.client.put<void>(`${this.host}/${id}`, permis);
  }
}
