import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is a simply a test', 
    'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Another test Recipe 2', 'This is a simply a test', 
    'https://get.pxhere.com/photo/dish-meal-food-meat-cuisine-asian-food-die-freshwater-fish-thai-food-chinese-food-yakiniku-southeast-asian-food-samgyeopsal-hot-pot-unadon-dory-bang-bang-1114738.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }
  
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
    }
}
