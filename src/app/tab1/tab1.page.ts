import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listItems: any;

  constructor() {
    this.listItems = [
      "1. Aylin Roberts",
      "2. Autumn Kuhic",
      "3. Tiffany Windler",
      "4. Sheila Bauch",
      "5. Diana Gerhold",
      "6. Arielle Kuhn"
    ];
  }

  onRenderItems(event) {
    console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
     let draggedItem = this.listItems.splice(event.detail.from,1)[0];
     this.listItems.splice(event.detail.to,0,draggedItem)
    //this.listItems = reorderArray(this.listItems, event.detail.from, event.detail.to);
    event.detail.complete();
  }

  getList() {
    console.table(this.listItems);
  }
}
