import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute,NavigationExtras } from "@angular/router";
import { RecipeService } from '../recipe.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  providers: [RecipeService],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  title = 'EDIT';
  typeList: string[] = ["Vegetarian", "Fast Food", "Healthy", "No-Cook", "Make Ahead"];
  responses:any;
  valid = true;
  detailId:string = "";
  detailName:string = "";
  detailIngredient:string = "";
  detailStep:string = "";
  detailType:string = "";
  error: string = "";
  inputName: string;
  inputIngredient: string;
  inputStep: string;
  inputType: string;
  clickReset = true;
  recipe:string[];
  constructor(private router: Router, private recipeService: RecipeService, private location:Location, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.detailId = params["detailId"];
      this.detailName = params["detailName"];
      this.detailIngredient = params["detailIngredient"];
      this.detailStep = params["detailStep"];
      this.detailType = params["detailType"];
    });
  }

  ngOnInit(){
    this.reset();
  }
  clickDone = function(){
    var info:string[] = [this.detailId,this.inputName, this.inputIngredient,this.inputStep,this.inputType];
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
      this.editRecipe(info);
    }
  }

  reset = function(){
    this.inputName = this.detailName;
    this.inputIngredient = this.detailIngredient;
    this.inputStep = this.detailStep;
    this.inputType = this.detailType;
    this.clickReset = !this.clickReset;
  }
  editRecipe(info){
      this.responses=this.recipeService.updateRecipe(info).subscribe(res => {
        alert(res.message);
        if(res.status === 1){
          this.back();
        }
      });

  }
  back = function(){
    //this.location.back();
    let navigationExtras: NavigationExtras = {
      queryParams:{
        "detailId":this.detailId,
        "detailName":this.inputName,
        "detailIngredient":this.inputIngredient,
        "detailStep":this.inputStep,
        "detailType":this.inputType
      }
    };
    this.router.navigate(['/detail'],navigationExtras);
  }

}
