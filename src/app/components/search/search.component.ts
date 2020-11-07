import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../interfaces/artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  artists: any[] = [];
  loading: boolean;

  constructor(private spoty: SpotifyService) {}

  search(str: string): void {
    if (str.length > 2) {
      this.loading = true;
      this.spoty.getArtists(str).subscribe((data: Artist[]) => {
        this.loading = false;
        this.artists = data;
      });
    }
  }
}
