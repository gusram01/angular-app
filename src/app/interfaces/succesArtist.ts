import { Paging } from './paging';
export interface SuccessResponseArtist extends Response {
  artists: Paging;
}
