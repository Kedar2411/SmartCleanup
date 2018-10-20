import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SmartCleanup';

  constructor(db2: AngularFireDatabase) {
  var key =  db2.database.ref('smartcleanup-10687')

   console.log("###"+key.root);


 
    }
}
