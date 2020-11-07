import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../interfaces/artist';
import { Tracks } from '../../interfaces/tracks';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
})
export class ArtistComponent {
  artist: Artist;
  tracks: Tracks[];
  loading: boolean;

  constructor(
    private activeRoute: ActivatedRoute,
    private spoty: SpotifyService
  ) {
    this.activeRoute.params.subscribe((params) => {
      this.getArtist(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtist(id: string): void {
    this.loading = true;
    this.spoty.getArtist(id).subscribe((artist) => {
      this.loading = false;
      this.artist = artist;
    });
  }

  getTopTracks(id: string): void {
    this.spoty.getTopTracks(id).subscribe((tracks) => {
      this.tracks = tracks;
    });
  }
}
