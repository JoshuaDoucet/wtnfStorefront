import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  name: string = "";
  price: number = 0;
  cost: number | undefined;
  boh: number = 0;
  for_sale: boolean = false;
  category: string | undefined;
  description: string | undefined;
  measurments: string | undefined;
  owner: string | undefined;
  sku: string | undefined;
  size_family: string | undefined;
  size: string | undefined;
  brand: string | undefined;
  condition: string | undefined;
  instructions: string | undefined;
  country_origin: string | undefined;
  rn_num: string | undefined;
  weight_grams: number | undefined;
  tags: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(): void {

  }

}
