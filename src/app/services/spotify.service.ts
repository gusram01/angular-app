import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SuccessResponseAlbum } from '../interfaces/succesAlbum';
import { SuccessResponseArtist } from '../interfaces/succesArtist';
import { Artist } from '../interfaces/artist';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  private getQuery(query: string): Observable<any> {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer BQBhU21m5a7gKipbHq3YyUM_8cLPE54H0kG9x6DDbcC_N1xoauaAoNxn30yKlkxC-rO1MAaFucq_ErmDEl4`,
    });
    return this.http.get(url, { headers });
  }

  getNewReleases(): Observable<any> {
    return this.getQuery('browse/new-releases').pipe(
      map((data: SuccessResponseAlbum) => data.albums.items)
    );
  }

  getArtists(str: string): Observable<any> {
    return this.getQuery(`search?q=${str}&type=artist&limit=15`).pipe(
      map((data: SuccessResponseArtist) => data.artists.items)
    );
  }

  getArtist(id: string): Observable<Artist> {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string): Observable<any> {
    return this.getQuery(`artists/${id}/top-tracks?country=MX`).pipe(
      map((data) => data.tracks)
    );
  }
}
