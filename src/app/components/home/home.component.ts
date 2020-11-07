import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Album } from '../../interfaces/albums';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  newSongs: Album[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;
  token: string;

  constructor(private spoty: SpotifyService) {
    this.error = false;
    this.loading = true;
    this.spoty.getNewReleases().subscribe(
      (data: Album[]) => {
        this.newSongs = data;
        this.loading = false;
      },
      (err) => {
        this.error = true;
        this.errorMessage = err.error.error.message;
      }
    );
  }
}
