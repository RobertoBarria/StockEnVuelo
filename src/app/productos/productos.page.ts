import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  public productos = 
  [{
    id:'1',
    titulo:'casuela',
    url: "https://unimarc.vtexassets.com/arquivos/ids/235136/000000000000175605-DIS-01.jpg?v=638271105217300000",
    precio : '8.000',
    descripcion : 'Muy Rico'
  }
  {
    id:'2',
    titulo:'casuela',
    url: "https://unimarc.vtexassets.com/arquivos/ids/235136/000000000000175605-DIS-01.jpg?v=638271105217300000",
    precio : '9.000',
    descripcion : 'Rico'
  }

  ]
  
  
  constructor() { }

  ngOnInit() { console.log (this.productos) }
  
}
