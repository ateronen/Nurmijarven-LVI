import { Component } from '@angular/core';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.scss']
})
export class PricelistComponent {

  isVATprice = true;
  priceWithVAT: string = "Näytä hinta ALV 0%";
  priceWithoutVAT: string = "Näytä hinta ALV 24%";

  toggleVAT() {
    this.isVATprice = !this.isVATprice;
  }

  products = [
    {
    "id": 1,
    "productName": "LVI-asennus/huoltotyöt",
    "productPriceAlv": "63,24€/h",
    "productPriceNoAlv": "51€/h"
    },
    {
    "id": 2,
    "productName": "Kaasuhitsaus",
    "productPriceAlv": "55,8€/kpl",
    "productPriceNoAlv": "45€/kpl"
    },
    {
    "id": 3,
    "productName": "Jäädytyskoneen käyttömaksu",
    "productPriceAlv": "43,4€/kpl",
    "productPriceNoAlv": "35€/kpl"
    },
    {
    "id": 4,
    "productName": "Huoltoauto max. 20km",
    "productPriceAlv": "27,28€/kpl",
    "productPriceNoAlv": "22€/kpl"
    },
    {
    "id": 5,
    "productName": "Huoltoauto max. 50km",
    "productPriceAlv": "35,96€/kpl",
    "productPriceNoAlv": "29€/kpl"
    },
    {
    "id": 6,
    "productName": "Huoltoauto max. 120km",
    "productPriceAlv": "58,28/kpl",
    "productPriceNoAlv": "47€/kpl"
    },
    {
    "id": 7,
    "productName": "Kilometriveloitus ylimenevältä matkalta",
    "productPriceAlv": "0,87€/km",
    "productPriceNoAlv": "0,70€/km"
    },
];

}
