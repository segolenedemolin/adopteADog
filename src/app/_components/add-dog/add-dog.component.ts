import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Dog } from 'src/app/models/dog';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.css']
})
export class AddDogComponent implements OnInit {

  @Input() dog:Dog=new Dog()
  constructor(private router:Router,private dogService:DataServiceService) { }

  ngOnInit(): void {

  }


  onSubmit(f:NgForm){
    this.dogService.addDog(this.dog).subscribe(result=>{this.dog=result;
    })
    this.router.navigate(['/details',this.dog.id]);
  }
}
