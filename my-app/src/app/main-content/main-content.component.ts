import { Component } from '@angular/core';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})

export class MainContentComponent {
  news = {
    title: 'Cristiano Ronaldo consigue otro récord',
    imageUrl: 'https://cnnespanol.cnn.com/wp-content/uploads/2024/05/gettyimages-1610085914.jpg?quality=100&strip=info&w=780&h=438&crop=1',
    imageAlt: 'Cristiano Ronaldo',
    summary: 'Cristiano Ronaldo sigue rompiendo marcas a sus 39 años. El portugués hizo historia en la liga de Arabia Saudita.',
    detailLink: 'https://cnnespanol.cnn.com/video/cristiano-ronaldo-yo-no-persigo-records-los-records-me-persiguen-a-mi/',
    detailLinkText: 'Cristiano Ronaldo: Yo no persigo récords, los récords me persiguen a mí',

  };
  
}


