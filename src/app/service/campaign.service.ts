import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  apiUrl: string='https://localhost:7189/api/v1'

  constructor(private http: HttpClient) { }
  List_Campaign(){
    let listApiUrl =`${this.apiUrl}/campaign/List_Campaign`;
    return this.http.get<any>(listApiUrl);
  }

  Delete_Campaing(id:number){
    let deleteApiUrl= `${this.apiUrl}/campaign/Delete_Campaign`;
    return this.http.delete<any>(deleteApiUrl+'/'+id)
  }
  Find_Campaign(id:number){
    let findApiUrl = `${this.apiUrl}/campaign/Find_Campaign`;
    return this.http.get<any>(findApiUrl + '/' + id);
  }
  Save_Campaign(postData:any){
    let saveapiUrl= `${this.apiUrl}/campaign/Save_Campaign`;
    return this.http.post<any>(saveapiUrl,postData);
  }
  Update_Campaign(id:number,postData:any){
    let updateapiUrl= `${this.apiUrl}/campaign/Update_campaign`;
    return this.http.put<any>(updateapiUrl + '/' + id,postData);
  }

}
