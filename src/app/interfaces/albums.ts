import { Artist } from './artist';
import { ExternalIds } from './external-ids';
import { ExternalUrls } from './external-urls';
import { Images } from './images';
import { Countries } from './countries';
import { Copyright } from './copyright';
import { Tracks } from './tracks';
import { Restriction } from './restriction';

export interface Album {
  album_group: string;
  album_type: string;
  artists: Artist[];
  available_markets: Countries[];
  copyrights?: Copyright[];
  external_ids?: ExternalIds;
  external_urls: ExternalUrls;
  genres?: string[];
  href: string;
  id: string;
  images: Images[];
  label?: string;
  name: string;
  popularity?: number;
  release_date: string;
  release_date_precision: string;
  restrictions?: Restriction;
  tracks?: Tracks[];
  type: string;
  uri: string;
}
