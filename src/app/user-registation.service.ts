import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  constructor(private http:HttpClient) { }


  public doRegistration(user){

    return this.http.post("http://172.16.1.76:9090/register",user,{responseType:'text' as 'json'});

  }

  public getUsers(){
   
    return this.http.get("http://172.16.1.76:9090/getAllUsers");
  }

  public getUserByEmail(email){

    return this.http.get("http://172.16.1.76:9090/findUser/"+email);
  }

  public deleteUser(id){

    return this.http.delete("http://172.16.1.76:9090/cancel/"+id);
  }
}
