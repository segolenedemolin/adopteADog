export class Dog {

  id:number;
  name:string;
  race:string;
  age:number;
  isAdopted:boolean;
  picture:string;

  constructor(id:number=0,name:string="",race:string="",age:number=0,isAdopted:boolean=false,picture:string=""){
    this.id=id;
    this.name=name;
    this.race=race;
    this.age=age;
    this.isAdopted=isAdopted;
    this.picture=picture;
  }

}
