import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-details-dog',
  templateUrl: './details-dog.component.html',
  styleUrls: ['./details-dog.component.css']
})
export class DetailsDogComponent implements OnInit {

  dog:any;
  constructor( private dogService:DataServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dogService.getDog(id).subscribe(result=>{this.dog=result})
  }


  remove(){
    this.dogService.deleteDog(this.dog).subscribe(_=>this.router.navigate([""]));
  }

}
