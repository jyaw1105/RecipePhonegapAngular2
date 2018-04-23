import { Component, OnInit, OnDestroy } from '@angular/core';
import { Params, Router,ActivatedRoute,NavigationExtras } from "@angular/router";
import { RecipeService } from '../recipe.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  providers: [RecipeService],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  title = 'DETAIL';
  response:any;
  detailId:string = "";
  detailName:string = "";
  detailIngredient:string = "";
  detailStep:string = "";
  detailType:string = "";
  clickDelete = false;
  imgType = "";
  constructor(private router:Router, private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private location:Location){
    this.activatedRoute.queryParams.subscribe(params => {
      this.detailId = params["detailId"];
      this.detailName = params["detailName"];
      this.detailIngredient = params["detailIngredient"];
      this.detailStep = params["detailStep"];
      this.detailType = params["detailType"];
    });
  }

  ngOnInit(){
    switch(this.detailType){
      case "Vegetarian": this.imgType = "assets/ic_vegetarian.png"; break;
      case "Fast Food": this.imgType = "assets/ic_fastfood.png";break;
      case "Healthy": this.imgType = "assets/ic_healthy.png";break;
      case "No-Cook": this.imgType = "assets/ic_nocook.png";break;
      case "Make Ahead": this.imgType = "assets/ic_makeahead.png";break;
    }
  }

  delete = function(){
    this.response = this.recipeService.deleteRecipe(this.detailId).subscribe((res)=>{
      alert(res.message);
      if(res.status === 1){
        this.back();
      }
    });
  }

  clickEdit = function(){
      let navigationExtras: NavigationExtras = {
        queryParams:{
          "detailId":this.detailId,
          "detailName":this.detailName,
          "detailIngredient":this.detailIngredient,
          "detailStep":this.detailStep,
          "detailType":this.detailType
        }
      };
      this.router.navigate(['/edit'],navigationExtras);
  }

  back = function(){
    //this.location.back();
    this.router.navigate(['/home']);
  }

}
