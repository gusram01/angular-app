import { Artist } from './artist';
import { Countries } from './countries';
import { ExternalUrls } from './external-urls';
import { TrackLink } from './track-link';
import { Restriction } from './restriction';
import { Album } from './albums';
import { ExternalIds } from './external-ids';

export interface Tracks {
  album: Album;
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  linked_from?: TrackLink;
  restrictions?: Restriction;
}
