import { Component, OnInit } from '@angular/core';
import { Good } from '../models/good';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-work-with-http-client',
  templateUrl: './work-with-http-client.component.html',
  styleUrls: ['./work-with-http-client.component.css'],
  providers: [HttpService]
})
export class WorkWithHttpClientComponent implements OnInit {

  goods: Good[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getGoodsDada().subscribe( (goodsData: Good[]) => {
      this.goods = goodsData["goods"];
    });
  }

}
