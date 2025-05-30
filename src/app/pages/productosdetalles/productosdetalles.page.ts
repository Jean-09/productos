import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/service/api.service';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';


@Component({
  selector: 'app-productosdetalles',
  templateUrl: './productosdetalles.page.html',
  styleUrls: ['./productosdetalles.page.scss'],
  standalone: false,
})
export class ProductosdetallesPage implements OnInit {

  id: string = '';
  
  constructor(private act: ActivatedRoute, private api: ApiService, private navCtrl: NavController) { 
    this.id = this.act.snapshot.paramMap.get('id') as string;
  }

   goBack() {
    this.navCtrl.pop();
  }

  ngOnInit() {
    this.getProductsById();
  }

  product: any;
  calificacion: any[]=[];

  getProductsById(){
    console.log(this.id)
    this.api.getProductsId(this.id)
      .then((res) => {
        console.log(res);
        this.product = res;
        this.calificacion =res.rating;
      }).catch((error) => {
        console.log(error);
      })
  }

  getStarIcons(calificacion: number): string[] {
    const maxStars = 5; // Máximo de estrellas
    const fullStars = Math.floor(calificacion); // Estrellas completas
    const halfStars = calificacion % 1 !== 0 ? 1 : 0; // Una media estrella
    const emptyStars = maxStars - fullStars - halfStars; // Estrellas vacías

    return [
      ...Array(fullStars).fill('star'), // Iconos de estrellas completas
      ...Array(halfStars).fill('star-half'), // Iconos de media estrella
      ...Array(emptyStars).fill('star-outline'), // Iconos de estrellas vacías
    ];
  }
}
