import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Role } from "../models/role.model";
export class RoleService {
  constructor(private client: HttpClient) {}

  // host = 'http://localhost:3000/api/users'
  host = "http://localhost:3000/roles"; // json server

  
  public getRoles(): Observable<Role[]> {
    return this.client.get<Role[]>(this.host);
  }

  public getRolesByKeyword(keyword: any): Observable<Role[]> {
    if (keyword !== "") {
      return this.client.get<Role[]>(`${this.host}?title_like=${keyword}`);
    }
  }

  public getRoleById(id: any): Observable<Role> {
    return this.client.get<Role>(`${this.host}/${id}`);
  }

  public addRole(role: Role): Observable<void> {
    return this.client.post<void>(this.host, role);
  }

  public deleteRole(id: any): Observable<void> {
    return this.client.delete<void>(`${this.host}/${id}`);
  }

  public updateRole(id: any, role: Role): Observable<void> {
    return this.client.put<void>(`${this.host}/${id}`, role);
  }
}
