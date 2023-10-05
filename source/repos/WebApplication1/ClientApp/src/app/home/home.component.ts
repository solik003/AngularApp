import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RecipeService } from "src/services/recipe.service";
import { Recipe } from "../model/recipe.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  srcIMG = "C:UsersAdminsource\reposWebApplication1images\banner.jpg";
  myRecipes: Recipe[];
  myRecipesCopy: Recipe[];
  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.recipeService.getAll().subscribe((res: Recipe[]) => {
      this.myRecipes = res;
      this.myRecipesCopy = res;
    });
  }

  filterByCategory(name: string) {
    this.myRecipes = this.myRecipes.filter((item) => 
      item.category === name
    );
  }

  clerFilter() {
    this.myRecipes = this.myRecipesCopy;
  }

  openRecipe(id: number) {
    this.router.navigate(["home",id]);
  }
}
