import { Component, inject } from '@angular/core';
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
  selectedLanguage!: string;
  mainForm = this.formBuilder.group({
    language: ['' as Languages],
    concept: [''],
  });

  handleLanguageChange() {
    this.mainForm.patchValue({ concept: '' });
  }
}

type Languages = 'js' | 'html';
