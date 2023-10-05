import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipeService } from "src/services/recipe.service";
import { Recipe } from "../model/recipe.model";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["/recipe.component.css"],
})
export class RecipeComponent implements OnInit {
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  recipe: Recipe;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.recipeService.get(parseInt(id)).subscribe((res: Recipe) => {
      this.recipe = res;
    });
  }
}
