import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { InventoryService } from '../Inventory.service';
import { Inventory } from '../Inventory';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-building-edit',
  templateUrl: './building-edit.component.html',
  styleUrls: ['./building-edit.component.scss']
})
export class BuildingEditComponent implements OnInit {
  facKey$: Object;
  build: Inventory[];


  constructor(private route: ActivatedRoute, private inventoryService: InventoryService) {
    this.route.params.subscribe(params => this.facKey$ = params.Facility_Key);
  }

 

  ngOnInit() {
    
    this.inventoryService.EditFacility(this.facKey$).subscribe((data: Inventory[]) => {
      this.build = data;
      debugger;
    });
  }
  }


