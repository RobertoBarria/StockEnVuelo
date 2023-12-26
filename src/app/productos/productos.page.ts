import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productos: any [];


  

  
  constructor() { 

    this.productos = 
    [
      {
      id:"1",
      titulo:"Coca cola",
      url: "https://unimarc.vtexassets.com/arquivos/ids/235136/000000000000175605-DIS-01.jpg?v=638271105217300000",
      precio : "3.500",
      descripcion : "Muy Rico"
    },
    {
      id:"2",
      titulo:"Galleta",
      url: "https://santaisabel.vtexassets.com/arquivos/ids/304516-450-450?width=450&height=450&aspect=true",
      precio : "2.500",
      descripcion : "Muy Rico"
    },
    {
      id:"3",
      titulo:"Agua Mineral Con Gas",
      url: "https://jumbo.vtexassets.com/arquivos/ids/655883/Agua-mineral-con-gas-16-L.jpg?v=638194412125130000",
      precio : "1.800",
      descripcion : "Muy Rico"
    },
    {
      id:"4",
      titulo:"Agua Mineral Sin Gas",
      url: "https://santaisabel.vtexassets.com/arquivos/ids/175921-450-450?width=450&height=450&aspect=true",
      precio : "1.800",
      descripcion : "Muy Rico"
    }
  
    ]

  }

  ngOnInit() { console.log (this.productos) }

}
