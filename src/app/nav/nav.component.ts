import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { CampaignService } from '../service/campaign.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  //categories : any ;
  //campaigns : any;
  constructor( ) { }



  ngOnInit(): void {
    //this.categoryService.List_Category().subscribe(result=>{
     // this.categories = result.data;
   // })
   // this.campaignService.List_Campaign().subscribe(result=>{
      //this.campaigns = result.data;
    //})

  }

}
