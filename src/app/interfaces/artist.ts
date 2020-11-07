import { ExternalUrls } from './external-urls';
import { Images } from './images';
import { Followers } from './followers';

export interface Artist {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Images[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}
