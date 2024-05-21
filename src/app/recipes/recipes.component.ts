import {Component, OnInit} from '@angular/core';

import { Recipe } from "./recipe-list/recipe.model";
import { RecipeService } from "./recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipeItem: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipeItem = recipe;
        }
      )
  }

  getRecipeSelected(recipeItem: Recipe) {
    this.selectedRecipeItem = recipeItem;
  }
}
