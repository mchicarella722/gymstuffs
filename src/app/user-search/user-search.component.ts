import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  typeAheadQuery: String;
  usernames = new Array();
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }
  typeAhead(){
    var query = this.typeAheadQuery;
    this.searchService.userSearch(query).subscribe(data => {
      console.log(data);
    })

  }

}
