import { Component, input } from '@angular/core';

@Component({
  selector: 'app-html',
  imports: [],
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss', './../../code-samples.scss'],
})
export class HtmlComponent {
  concept = input<string>('');
}
