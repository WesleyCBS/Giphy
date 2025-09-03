import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GiphyService } from '../giphy-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage implements OnInit {
  gifs: any[] = [];
  offset: number = 0;
  filteredGifs: any[] = [];
  searchQuery: string = '';
 

  constructor(private giphyService: GiphyService, private router: Router) {}

  ngOnInit(): void {
    this.loadGifs();
  }

  loadGifs(){
    this.giphyService.getTrending(25, this.offset).subscribe((res: any) => {
      this.gifs = res.data;
      this.filteredGifs = this.gifs;
      console.log(this.gifs);
    })
  }

  onSearch(){
    if(this.searchQuery.trim() === ''){
      this.filteredGifs = this.gifs;
    }else{
      this.giphyService.searchGifs(this.searchQuery, 25, 0 , 'g').subscribe((res: any) => {
         this.filteredGifs = res.data;})
    }
  }

  loadMoreGifs(){
    this.offset += 25;
    this.giphyService.getTrending(25, this.offset).subscribe((res: any) => {
      this.gifs.push (...res.data);
      this.filteredGifs = this.gifs
    })
  }

  gotToGifDetail(gif: any){
    this.router.navigate(['/giphy-details'], {state: {gif: gif}});
  }
}
