import { Component, input } from '@angular/core';

@Component({
  selector: 'app-java-script',
  imports: [],
  templateUrl: './java-script.component.html',
  styleUrls: ['./java-script.component.scss','./../../code-samples.scss'],
})
export class JavaScriptComponent {
  concept = input<string>('');
}
