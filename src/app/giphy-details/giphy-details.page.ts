import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-giphy-details',
  templateUrl: './giphy-details.page.html',
  styleUrls: ['./giphy-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class GiphyDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
