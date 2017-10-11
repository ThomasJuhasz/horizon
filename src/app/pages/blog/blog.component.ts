import { Component, OnInit } from '@angular/core';
import { ValueService } from "../../services/value/value.service";
import { Configuration } from "../../../../configuration";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less'],
  providers: [ValueService]
})
export class BlogComponent implements OnInit {
  values: any;
  url: string;

  constructor(private valueService: ValueService) { }

  ngOnInit() {
    this.values = this.valueService.get();
    this.url = Configuration.apiBaseUrl + "/values";
  }

}
