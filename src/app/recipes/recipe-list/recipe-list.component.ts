import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allrecipes.com%2Frecipe%2F212721%2Findian-chicken-curry-murgh-kari%2F&psig=AOvVaw3ckmcspcwWpKVkpT5x7BzW&ust=1654425861512000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLDeqOLOk_gCFQAAAAAdAAAAABAF'),
    new Recipe('A Test Recipe', 'This is a simple test', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allrecipes.com%2Frecipe%2F212721%2Findian-chicken-curry-murgh-kari%2F&psig=AOvVaw3ckmcspcwWpKVkpT5x7BzW&ust=1654425861512000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLDeqOLOk_gCFQAAAAAdAAAAABAF')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
