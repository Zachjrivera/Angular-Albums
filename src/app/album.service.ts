import { Injectable } from '@angular/core';
import { Album} from './album';
import {ALBUMS} from './mock-albums';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class AlbumService {

  constructor() { }


getAlbums(): Observable<Album[]>{

  return of(ALBUMS);

}

}
