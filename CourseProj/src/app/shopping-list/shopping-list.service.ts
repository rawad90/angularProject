import { Ingrediant } from '../shared/ingrediant.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
     ingredientAdded = new EventEmitter<Ingrediant>();
    
     private ingrediants: Ingrediant []=[
        new Ingrediant('apples', 5),
        new Ingrediant('perple', 7),
      ];

      getIngredient(){
          return this.ingrediants.slice();
      }
      addIngrediant(ingrediant: Ingrediant){
        this.ingrediants.push(ingrediant);
      }
}