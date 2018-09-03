import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../Inventory.service';
import { Inventory } from '../Inventory';

@Component({
  selector: 'app-building-view',
  templateUrl: './building-view.component.html',
  styleUrls: ['./building-view.component.scss']
})
export class BuildingViewComponent implements OnInit {

  build: Inventory[];
  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.inventoryService
      .getBuildings()
      .subscribe((data: Inventory[]) => {
        this.build = data;
        
      });
  }

}
