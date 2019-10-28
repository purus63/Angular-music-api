import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// Application name	some_application
// API key	228d814b90f7e8b0470a2babd754640f
// Shared secret	3e84c6bb6986aa761b660a638775d732
// Registered to	purus63

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private _:HttpClient) { }

  getMusic() {
    return this._.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=228d814b90f7e8b0470a2babd754640f&format=json')
  }
}
