import { Component, OnInit } from '@angular/core';
import { Dog } from '../models/dog';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dogs:Dog[]=[]
  constructor(private dogService:DataServiceService) { }

  ngOnInit(): void {

    this.dogService.getDogs().subscribe(result=>{this.dogs=result});
  }

}
