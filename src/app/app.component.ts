import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'to-do-angular';


  propuesta = [
    {
      name: 'Página web',
      description: 'Desarrollo de la página teniendo en cuenta el diseño corporativo (Paleta de colores, identidad de la marca, entre otros), aplicando un diseño responsivo para su uso en multiples dispositivos (Ejemplo: movil)',
      price: 700000,
      activo: false,
      realizable: 'Si',
    },
    {
      name: 'Redes Sociales',
      description: 'Construir una comunidad sólida en redes sociales para promover los servicios de la empresa, a través de contenido relevante, atractivo y de calidad. ',
      price: 300000,
      activo: false,
      realizable: 'Si',
    },
    {
      name: 'Diseño corporativo',
      description: 'lorem acamcnaciai',
      price: 10000,
      activo: false
    }
  ];

  total = 0;




  ngOnInit() {
    this.actualizarPrecio();
  }

  actualizarPrecio() {
    this.total = 0;
    this.propuesta.forEach((propuesta) => {
      if (propuesta.activo) {
        this.total += propuesta.price;
      }
    });
  }
  toggleActivo(propuesta: any) {
    propuesta.activo = !propuesta.activo;
    this.actualizarPrecio();
  }






}


