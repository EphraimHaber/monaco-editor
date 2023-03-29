import { Component } from '@angular/core';

@Component({
  selector: 'app-monaco-angular',
  templateUrl: './monaco-angular.component.html',
  styleUrls: ['./monaco-angular.component.css']
})
export class MonacoAngularComponent {
  code: any = '';
  codeEditorOptions = {theme: 'vs-dark',language: 'json'}

  constructor() { }



  setCode(newCode: any) {
    this.code = newCode;
    console.log(this.code);
  }

  
}
