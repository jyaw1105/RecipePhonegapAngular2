import { Component,OnInit } from '@angular/core';
import { Params, Router,NavigationExtras } from "@angular/router";
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-root',
  providers: [RecipeService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  title = 'RecipeApp';
  public imgType = "assets/ic_filter.png";
  recipes:any;
  typeList: string[] = ["All","Vegetarian", "Fast Food", "Healthy", "No-Cook", "Make Ahead"];
  public filterType: string = "All";
  clickFilter = false;
  showType = true;
  inputSearch = "";

  constructor(private router: Router, private recipeService: RecipeService) {
  }
  ngOnInit(){
    this.getRecipes();
  }
  getRecipes(){
    this.recipes=this.recipeService.getAllRecipes()
    .subscribe(res=>this.recipes = res,
    err => console.error(err));
    this.recipes = Array.of(this.recipes);
    this.showType = true;
    this.changeImageType("All");
  }

  getRecipesByType(type){
    this.recipes=this.recipeService.filterRecipe(type)
    .subscribe(res=>this.recipes = res,
    err => console.error(err));
    this.recipes = Array.of(this.recipes);
    this.showType = false;
    this.changeImageType(type);
  }
  changeImageType(type){
    switch(type){
      case "Vegetarian": this.imgType = "assets/ic_vegetarian.png"; break;
      case "Fast Food": this.imgType = "assets/ic_fastfood.png";break;
      case "Healthy": this.imgType = "assets/ic_healthy.png";break;
      case "No-Cook": this.imgType = "assets/ic_nocook.png";break;
      case "Make Ahead": this.imgType = "assets/ic_makeahead.png";break;
      case "All": this.imgType = "assets/ic_filter.png";break;
    }
  }
  clickAdd = function(){
    this.router.navigate(['/add']);
  }
  clickDetail(recipe){
    let navigationExtras: NavigationExtras = {
      queryParams:{
        "detailId":recipe.id,
        "detailName":recipe.name,
        "detailIngredient":recipe.ingredient,
        "detailStep":recipe.step,
        "detailType":recipe.type
      }
    };
    this.router.navigate(['/detail'],navigationExtras);
  }
  getSelectedType(type){
    this.filterType = type;
    this.clickFilter = !this.clickFilter;
    if(this.filterType === "All"){
      this.getRecipes();
    }else{
      this.getRecipesByType(type);
    }
  }

  search(inputSearch){
    this.recipes=this.recipeService.searchRecipe(inputSearch)
    .subscribe(res=>this.recipes = res,
    err => console.error(err));
    this.recipes = Array.of(this.recipes);
    this.showType = true;
    this.imgType = "assets/ic_filter.png";
  }
}
