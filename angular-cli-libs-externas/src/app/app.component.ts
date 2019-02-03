import { Component } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cli-libs-externas works!';

  list = _.map([1,2,3], (n)=> `# ${n}`);
}
