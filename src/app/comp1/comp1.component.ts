import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private service:MusicService) { }
  musicList = [];
  ngOnInit() {
    this.service.getMusic().subscribe((data: any) => {
        this.musicList = data.tracks.track;
        console.log(this.musicList)
    })
  }

}
