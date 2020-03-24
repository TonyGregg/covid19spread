import { Component, OnInit } from '@angular/core';
import { NewsHolder } from 'src/app/shared/model/news/news-holder';
import { NewsApiService } from 'src/app/shared/services/news-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsHolder: NewsHolder;
  country: String;
  constructor(private newsService: NewsApiService) { }

  ngOnInit(): void {
    this.country = 'us';
    this.newsService.getNewsHeadLineHolder(this.country).subscribe(returnedNewsHolder => {
      this.newsHolder = returnedNewsHolder;
      // console.log('Returned articles ' + JSON.stringify(this.newsHolder.articles));
      // console.log('# of articles ' + this.newsHolder.articles.length);
    });
  }

}
