import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private apiKey = 'kV0dDc8bzMhjG3jPzH3mfK71GNHOF4Zw';
  private baseUrl = 'https://api.giphy.com/v1/gifs'

  constructor(private http: HttpClient){}

  getTrending(limit: number = 25, offset: number = 0, rating: string = 'g') : Observable<any>{
    const params = new HttpParams().set('api_key', this.apiKey).set('limit', limit.toString()).set('offset', offset.toString()).set('rating', rating).set('bundle', 'massging_non_clips'); 
    return this.http.get(`${this.baseUrl}/trending`, { params });
  }  

  searchGifs(query: string, limit: number = 25, offset: number = 0, rating: string = 'g') : Observable<any>{
    const params = new HttpParams().set('api_key', this.apiKey).set('q', query).set('limit', limit.toString()).set('offset', offset.toString()).set('rating', rating).set('bundle', 'massging_non_clips'); 
    return this.http.get(`${this.baseUrl}/search`, { params });
  } 
}
