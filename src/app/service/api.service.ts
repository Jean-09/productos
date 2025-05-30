import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = environment.urlapi

  constructor() { }

  async getPoducts(skip:any) {
    const res = await axios.get(this.url+"?skip="+skip)
    return res.data.products
  }

  async getProductsId(id:string){
      const res = await axios.get(this.url+'/'+id)
      return res.data;
  }
}
