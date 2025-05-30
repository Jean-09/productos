import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor(private api:ApiService, private route: Router) {}
  ngOnInit() {
    
    this.getProdu();
  }

  skip:number=0
  products: any[]=[];
  calificacion: any[]=[];

  getProdu(event?:any){
    
    this.api.getPoducts(this.skip).then((res)=>{
      console.log(res)
      this.products.push(...res)
      this.calificacion.push(...res.rating)
      this.skip+=30;
      if(event) event.target.complete()
    }).catch((error)=>{
      console.log(error)
      if(event) event.target.complete()
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

  verDetalles(id: number){
    this.route.navigateByUrl('/productosdetalles/' + id)
  }
}
