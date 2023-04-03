import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/entity/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent {
  @Input() products:Product[] = [{ title:'Assasin\'s Creed Bloodhood', description:'Card description',price:56.90, discount:10, images:[],
                                    type:{id:1,description:'',title:'book'},category:[]},
                                    { title:'Produtividade para quem quer tempo!', description:'Card description',price:25.90, discount:5, images:[],
                                    type:{id:1,description:'',title:'book'},category:[]},
                                    { title:'Mindfullness', description:'Card description',price:100, discount:0, images:[],
                                    type:{id:1,description:'',title:'book'},category:[]},
                                    { title:'Card Title', description:'Card description',price:56.90, discount:0, images:[],
                                    type:{id:1,description:'',title:'book'},category:[]},
                                    { title:'Card Title', description:'Card description',price:56.90, discount:0, images:[],
                                    type:{id:1,description:'',title:'book'},category:[]}
                                  ];
}
