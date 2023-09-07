import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BaseEditComponent } from 'src/app/base/base-edit/base-edit.component';
import { CampaignService } from 'src/app/service/campaign.service';

@Component({
  selector: 'app-campaign-edit',
  templateUrl: './campaign-edit.component.html',
  styleUrls: ['./campaign-edit.component.css']
})
export class CampaignEditComponent extends BaseEditComponent implements OnInit {

// FORM CONTROLS
cCampaignName: FormControl=new FormControl('',[Validators.required])
cCampaignCode : FormControl=new FormControl('',[Validators.required])
cCampaignDiscountRate : FormControl=new FormControl('',[Validators.required])
cStartDate:FormControl=new FormControl('',[Validators.required])
cEndDate:FormControl=new FormControl('',[Validators.required])


  constructor(protected activatedRoute: ActivatedRoute,private campaignService: CampaignService) {
    super();
    this.mainForm.addControl("CampaignName",this.cCampaignName);
    this.mainForm.addControl("CampaignCode",this.cCampaignCode);
    this.mainForm.addControl("CampaignDiscountRate",this.cCampaignDiscountRate);
    this.mainForm.addControl("StartDate",this.cStartDate);
    this.mainForm.addControl("EndDate",this.cEndDate);
    this.mainForm.reset();
  }

  override ngOnInit(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id');
    this.dataId = (id) ? Number(id) : 0;
    this.LoadData();

  }
  LoadData(){

    if(this.dataId && this.dataId != 0){
      this.campaignService.Find_Campaign(this.dataId).subscribe(result => {
        if(result.status == 1){
          this.formData = result.data;
          this.cCampaignName.setValue(this.formData?.campaignName);
          this.cCampaignCode.setValue(this.formData?.campaignCode);
          this.cCampaignDiscountRate.setValue(this.formData?.campaignDiscountRate);
          this.cStartDate.setValue(this.formData?.startDate);
          this.cEndDate.setValue(this.formData?.endDate);
        }
        else{

        }
      })
    }
    else{
      this.mainForm.reset();
    }

  }
  SaveOrUpdate(){
    let postData = this.mainForm.value;
    if(this.dataId == 0){
      this.campaignService.Save_Campaign(postData).subscribe(response=> {
        console.log(response.data);
      })
    }
    else{
      this.campaignService.Update_Campaign(this.dataId,postData).subscribe(response =>{
        console.log(response.data);
      })
    }

  }


}
