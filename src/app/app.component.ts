import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { RestService } from './rest.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'post';
  posts: Object;
  name = ['Ajay', 'Bunty', 'Chintan', 'Darshan', 'Rakesh', 'Mayank', 'Ramesh', 'Suresh', 'Jay', 'Prem']
  constructor(private rest: RestService) { }

  ngOnInit() {
    AOS.init();
    try {
      var datas = this.rest.get('https://jsonplaceholder.typicode.com/posts').then(data => {
        console.log(data);
        this.posts = data;
      })

    } catch (err) { }

  }

}
