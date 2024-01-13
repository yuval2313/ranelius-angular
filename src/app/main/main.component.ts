import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../models/category.model';
import { Language } from '../../models/enums/language.enum';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  categories: Category[] = [];
  displayedColumns: string[] = ['name', 'wordCount', 'lastEditDate', 'actions'];

  constructor() {
    // Initialize the categories array with three sample items
    this.categories = [
      {
        name: 'Category 1',
        id: 1,
        updated_at: new Date(),
        originLang: Language['English'],
        destLang: Language['Hebrew'],
        words: new Map([
          ['word1', 'translation'],
          ['word2', 'translation'],
        ]),
      },
      {
        name: 'Category 2',
        id: 2,
        updated_at: new Date(),
        originLang: Language['Hebrew'],
        destLang: Language['English'],
        words: new Map([
          ['word1', 'translation'],
          ['word2', 'translation'],
          ['word3', 'translation'],
          ['word4', 'translation'],
          ['word5', 'translation'],
        ]),
      },
      {
        name: 'Category 3',
        id: 3,
        updated_at: new Date(),
        originLang: Language['English'],
        destLang: Language['Hebrew'],
        words: new Map([
          ['word1', 'translation'],
          ['word2', 'translation'],
          ['word3', 'translation'],
        ]),
      },
    ];
  }

  createNewCategory() {
    // Add logic for creating a new category
    console.log('Create New Category clicked');
  }

  editCategory(category: Category) {
    // Add logic for editing a category
    console.log('Edit Category clicked:', category);
  }

  deleteCategory(category: Category) {
    // Add logic for deleting a category
    console.log('Delete Category clicked:', category);
  }
}
