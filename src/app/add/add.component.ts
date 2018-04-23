import { Component } from '@angular/core';
import { Params, Router } from "@angular/router";
import { RecipeService } from '../recipe.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  providers: [RecipeService],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  title = 'ADD';
  typeList: string[] = ["Vegetarian", "Fast Food", "Healthy", "No-Cook", "Make Ahead"];
  responses:any;
  valid = true;
  error: string = "";
  inputName: string= "";
  inputIngredient: string= "";
  inputStep: string= "";
  inputType: string  = "";
  clickCancel = false;

  constructor(private router: Router, private recipeService: RecipeService, private location:Location) {
  }

  clickDone = function(){
    var info:string[] = [this.inputName, this.inputIngredient,this.inputStep,this.inputType];
    if(this.inputName === "" || this.inputIngredient === undefined){
      this.error += "<h2>Name cannot be empty.</h2>";
      this.valid = false;
    }
    if(this.inputIngredient === "" || this.inputIngredient === undefined){
      this.error += "<h2>Ingredient cannot be empty.</h2>";
      this.valid = false;
    }
    if(this.inputStep === "" || this.inputStep === undefined){
      this.error += "<h2>Step cannot be empty.</h2>";
      this.valid = false;
    }
    if(this.inputType === "" || this.inputType === undefined){
      this.error += "<h2>Please choose a type.</h2>";
      this.valid = false;
    }
    if(this.valid === true){
      this.addRecipe(info);
    }
  }

  cancel = function(){
    this.inputName = "";
    this.inputIngredient = "";
    this.inputStep = "";
    this.inputType = "";
    this.clickCancel = !this.clickCancel;
  }
  addRecipe(info){
      this.responses=this.recipeService.addRecipe(info).subscribe(res => {
        alert(res.message);
        if(res.success === 1){
          this.back();
        }
      });//subscribe(res => return res);

  }
  back = function(){
    this.location.back();
  }

}
