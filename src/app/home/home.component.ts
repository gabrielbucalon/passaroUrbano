import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../../shared/oferta.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {
  constructor(private ofertasService: OfertasService) {}

  public ofertas: Oferta[];

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    this.ofertas = this.ofertasService.getOfertas();
  }
}
