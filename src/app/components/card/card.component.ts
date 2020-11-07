import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() items: any[] = [];
  constructor(private router: Router) {}

  getArtist(item: any): void {
    let artistId: string;
    item.type.includes('artist')
      ? (artistId = item.id)
      : (artistId = item.artists[0].id);
    this.router.navigate(['/artist', artistId]);
  }
}
