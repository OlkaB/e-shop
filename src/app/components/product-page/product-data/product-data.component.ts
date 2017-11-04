import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.css']
})
export class ProductDataComponent implements OnInit {
  activeTab = "Description";

  constructor() { }

  ngOnInit() {
  }

  activateTab(activateTab) {
    this.activeTab = activateTab;
  }

}
