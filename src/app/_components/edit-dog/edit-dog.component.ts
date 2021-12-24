import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { Dog } from 'src/app/models/dog';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-edit-dog',
  templateUrl: './edit-dog.component.html',
  styleUrls: ['./edit-dog.component.css']
})
export class EditDogComponent implements OnInit {

  @Input() dog:Dog=new Dog()
  constructor(private router:Router,private dogService:DataServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dogService.getDog(id).subscribe(result=>{this.dog=result})
  }


  onSubmit(f:NgForm){
    this.dogService.updateDog(this.dog).subscribe(result=>{this.dog=result;
    })
    this.router.navigate(['/details',this.dog.id]);
  }
}
