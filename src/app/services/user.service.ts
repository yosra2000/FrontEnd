import { User } from "../models/user.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

export class UserService {
  constructor(private client: HttpClient) {}

  // host = 'http://localhost:3000/api/users'
  host = "http://localhost:3000/users"; // json server

  public getUsers(): Observable<User[]> {
    return this.client.get<User[]>(this.host);
  }

  public getUsersByKeyword(keyword: any): Observable<User[]> {
    if (keyword !== "") {
      return this.client.get<User[]>(`${this.host}?fullname_like=${keyword}`);
    }
    return this.client.get<User[]>(this.host);
  }

  public getUserById(id: any): Observable<User> {
    return this.client.get<User>(`${this.host}/${id}`);
  }

  public addUser(user: User): Observable<void> {
    return this.client.post<void>(this.host, user);
  }

  public deleteUser(id: any): Observable<void> {
    return this.client.delete<void>(`${this.host}/${id}`);
  }

  public updateUser(id: any, user: User): Observable<void> {
    return this.client.put<void>(`${this.host}/${id}`, user);
  }
}
