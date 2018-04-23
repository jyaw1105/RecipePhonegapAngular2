import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {
  recipes=[];
  constructor(private _http:Http) { }
  list:any;
  public recipe:string[];

  getAllRecipes(){
    return this._http.get("https://apppppp.000webhostapp.com/Angular/selectall_recipe.php")
      .map((res) => (res.json().recipe));
  }
  filterRecipe(type){
    var headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
    const body = 'type='+ type;
    return this._http.post("https://apppppp.000webhostapp.com/Phonegap/select_recipe_by_type.php",body,{headers:headers})
      .map((res) => (res.json().recipe));
  }

  addRecipe(info){
    var headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
    const body = 'name='+ info[0]+ '&ingredient='+info[1]+'&step='+info[2]+'&type='+info[3];
    return this._http.post("https://apppppp.000webhostapp.com/Phonegap/insert_recipe.php",body,{headers:headers})
      .map((res:any)=>(res.json()));
  }
  getRecipe(id){
    var headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
    const body = 'id='+ id;
    return this._http.post("https://apppppp.000webhostapp.com/Angular/select_recipe_by_id.php",body,{headers:headers})
      .map((res:any)=>res.json().recipe);
  }
  searchRecipe(ingredient){
    var headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
    const body = 'ingredient='+ ingredient;
    return this._http.post("https://apppppp.000webhostapp.com/Angular/search_recipe.php",body,{headers:headers})
      .map(res=>res.json().recipe);
  }
  deleteRecipe(id){
    var headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
    const body = 'id='+ id;
    return this._http.post("https://apppppp.000webhostapp.com/Phonegap/delete_recipe.php",body,{headers:headers})
      .map((res:any)=>(res.json()));
  }
  updateRecipe(info){
    var headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
    const body = 'id='+ info[0]+'&name='+ info[1]+ '&ingredient='+info[2]+'&step='+info[3]+'&type='+info[4];
    return this._http.post("https://apppppp.000webhostapp.com/Phonegap/edit_recipe.php", body,{headers:headers})
      .map((res:any)=>(res.json()));
  }
}
