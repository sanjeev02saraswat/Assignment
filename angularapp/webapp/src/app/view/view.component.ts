import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { IApiResponse } from '../models/Idate.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  response: IApiResponse;
  constructor(private apiService: ApiService) { }
  data: Date[];
  ngOnInit() {
    this.apiService.get().subscribe((data: any) => {
      if (null != data) {
        this.response = data as IApiResponse;
      }
      debugger;
      console.log(data)
    })
  }

}
