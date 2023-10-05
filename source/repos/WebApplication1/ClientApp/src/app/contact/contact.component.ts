import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from 'src/services/recipe.service';
import { PersonModel } from '../model/person.model';
import { PersonService } from 'src/services/person.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit{
  public person: PersonModel;

  constructor( private personService: PersonService) {
    this.person = new PersonModel();
  }
  ngOnInit(): void {
    
  }

  onSubmit(){
    this.personService.post(this.person).subscribe((res: PersonModel) => {
      console.log(res);
    });
  }
  
}


