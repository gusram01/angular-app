import { Paging } from './paging';
export interface SuccessResponseAlbum extends Response {
  albums: Paging;
}
