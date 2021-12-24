import { InMemoryDbService} from "angular-in-memory-web-api";
import { DOGS } from "../models/Dogs";


export class InMemoryDataService implements InMemoryDbService{

  createDb(){
     let dogs= DOGS;
     return {dogs};
  }
}
