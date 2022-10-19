import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {

  constructor() { }

  recipename=""
  description=""
  category=""
   posteddate=""
   price=""
status:boolean=false

   readValues=()=>{
let data={
  "recipename":this.recipename,
  "description":this.description,
  "category":this.category,
   "posteddate":this.posteddate,
   "price":this.price
}
console.log(data)

  ngOnInit(): void {
  }

}
