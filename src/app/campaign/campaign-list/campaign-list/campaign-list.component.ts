import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseListComponent } from 'src/app/base/base-list/base-list.component';
import { CampaignService } from 'src/app/service/campaign.service';


@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent extends BaseListComponent implements OnInit {

  constructor(private campaignService:CampaignService, protected router: Router) {
    super();
  }

  override ngOnInit(): void {
    this.List();
  }
  List(){
    this.campaignService.List_Campaign().subscribe(result=>{
      this.list_data = result.data;
    })
  }
  Delete(id:number){
    this.campaignService.Delete_Campaing(id).subscribe(result=>{
      this.List();
    });
  }
  Add(){
    this.router.navigate([`${this.router.url}/0`])
  }
  Update(id:number){
    this.router.navigate([`${this.router.url}/${id}`])
  }


}
