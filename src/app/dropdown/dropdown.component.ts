import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  searchText:string;
  items:Object [] = [];
  constructor(private http: HttpClient) {
    this.searchText = "";

      let url = "https://www.boredapi.com/api/activity";

      for (var i=0;i<10; i++) {
        this.http.get(url).subscribe(data=>{
          
          this.items.push(Object.values(data)[0])
          console.log(Object.values(data)[0]);
          // console.log(data);
        })
        console.log(this.items)
      }
    
}

  ngOnInit(): void {}
}
