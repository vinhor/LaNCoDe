import { Component, input } from '@angular/core';

@Component({
  selector: 'app-camel-case',
  imports: [],
  templateUrl: './camel-case.component.html',
  styleUrls: ['./camel-case.component.scss', './../../code-samples.scss'],
})
export class CamelCaseComponent {
  concept = input<string>('');
}
