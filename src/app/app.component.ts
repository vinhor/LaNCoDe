import { Component, inject, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import * as mainJSON from './main.json';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, TitleCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  formBuilder = inject(FormBuilder);
  title = 'LaNCoDe';
  concepts = mainJSON.concepts;
  conventions: Conventions = {
    js: { ...mainJSON.js },
    html: { ...mainJSON.html },
  };
  selectedLanguage!: string;
  mainForm = this.formBuilder.group({
    language: ['' as Languages],
    concept: ['' as Concept],
  });

  handleLanguageChange() {
    this.mainForm.patchValue({ concept: '' });
  }

  ngOnInit() {
    console.log(this.conventions);
  }
}

type Languages = 'js' | 'html';
type Concept = 'variables' | '';
interface Conventions {
  [language: string]: {
    [concept: string]: string;
  };
}
