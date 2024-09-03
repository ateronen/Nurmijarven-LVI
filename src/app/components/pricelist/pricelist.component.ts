import { Component } from '@angular/core';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.scss'],
})
export class PricelistComponent {
  isVATprice = true;
  priceWithVAT: string = 'Näytä hinta ALV 0%';
  priceWithoutVAT: string = 'Näytä hinta ALV 25,5%';

  toggleVAT() {
    this.isVATprice = !this.isVATprice;
  }

  products = [
    {
      id: 1,
      productName: 'LVI-asennus/huoltotyöt',
      productPriceAlv: '66,20€/h',
      productPriceNoAlv: '53€/h',
    },
    {
      id: 2,
      productName: 'Kaasuhitsaus',
      productPriceAlv: '56,48€/kpl',
      productPriceNoAlv: '45€/kpl',
    },
    {
      id: 3,
      productName: 'Jäädytyskoneen käyttömaksu',
      productPriceAlv: '43,93€/kpl',
      productPriceNoAlv: '35€/kpl',
    },
    {
      id: 4,
      productName: 'Huoltoauto max. 20km',
      productPriceAlv: '27,61€/kpl',
      productPriceNoAlv: '22€/kpl',
    },
    {
      id: 5,
      productName: 'Huoltoauto max. 50km',
      productPriceAlv: '36,40€/kpl',
      productPriceNoAlv: '29€/kpl',
    },
    {
      id: 6,
      productName: 'Huoltoauto max. 120km',
      productPriceAlv: '58,99/kpl',
      productPriceNoAlv: '47€/kpl',
    },
    {
      id: 7,
      productName: 'Kilometriveloitus ylimenevältä matkalta',
      productPriceAlv: '0,88€/km',
      productPriceNoAlv: '0,70€/km',
    },
  ];
}
