import { Component, Input, OnInit } from '@angular/core';

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
  // for dynamically adding additional colors, materials, and images
  colorNum: number = 2;
  materialNum: number = 2;
  imageNum: number = 2;

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(): void {

  }

  addColor(): void {
    // Find colorsDiv
    const colorsDiv = document.getElementById("colorsDiv");
    // create new color label
    let colorLabel = document.createElement("label");
    colorLabel.innerText = `Color ${this.colorNum}:`;
    // create new color input
    let colorInput = document.createElement("input");
    colorInput.type = "text";
    colorInput.name = `color${this.colorNum}`;
    colorInput.id = `color${this.colorNum}`;
    // increment color number
    this.colorNum += 1;
    // create line break
    const lineBreak = document.createElement('br');
    // append label and input to div
    colorsDiv?.appendChild(colorLabel);
    colorsDiv?.appendChild(colorInput);
    colorsDiv?.appendChild(lineBreak);
  }


  addMaterial(): void {
    // Find materialsDiv
    const materialsDiv = document.getElementById("materialsDiv");
    // create new material label
    let materialLabel = document.createElement("label");
    materialLabel.innerText = `Material ${this.materialNum}:`;
    // create new material input
    let materialInput = document.createElement("input");
    materialInput.type = "text";
    materialInput.name = `material${this.materialNum}`;
    materialInput.id = `material${this.materialNum}`;
    // increment material number
    this.materialNum += 1;
    // create line break
    const lineBreak = document.createElement('br');
    // append label and input to div
    materialsDiv?.appendChild(materialLabel);
    materialsDiv?.appendChild(materialInput);
    materialsDiv?.appendChild(lineBreak);
  }

  addImage(): void {
    // Find imagesDiv
    const imagesDiv = document.getElementById("imagesDiv");
    // create new image label
    let imageLabel = document.createElement("label");
    imageLabel.innerText = `Image ${this.imageNum}:`;
    // create new image file input
    let imageInput = document.createElement("input");
    imageInput.type = "file";
    imageInput.name = `img${this.imageNum}`;
    imageInput.id = `img${this.imageNum}`;
    // increment image number
    this.imageNum += 1;
    // create line break
    const lineBreak = document.createElement('br');
    // append label and input to div
    imagesDiv?.appendChild(imageLabel);
    imagesDiv?.appendChild(imageInput);
    imagesDiv?.appendChild(lineBreak);
  }

}
