import { Component } from '@angular/core';


@Component({
  selector: 'app-monaco-angular',
  templateUrl: './monaco-angular.component.html',
  styleUrls: ['./monaco-angular.component.css']
})
export class MonacoAngularComponent {
  schema: any = '';
  codeEditorOptions = {theme: 'vs-dark',language: 'json'}

  constructor() { }

  checkSchema(newSchema: any) {
    // this function should be async and the errorMsgs should be await to get the errors from the thingy
    this.schema = newSchema;

    //this should be of type dError interface once we have the final version of the thingy
    const errorMsgs = [
      {errMsg: 'err msg of type err', severity: 'ERROR', lineStart: 1, lineEnd: 3, posStart: 1, posEnd: 7},
      {errMsg: 'err msg of type warn', severity: 'WARN', lineStart: 5, lineEnd: 5, posStart: 1, posEnd: 7},
    ]
    this.applyErrorDecoration(errorMsgs);
    console.log(this.schema);
    //this console.log can be later replaced with saving to a file/editing an existing one. 
  }


  readSchemaFromFile(fileList: any): void {
    fileList = fileList.files;
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    fileReader.onloadend = () => this.schema = fileReader.result;
    fileReader.readAsText(file);
  }


  applyErrorDecoration(errorMsgs: any[]) {
    const editor = monaco.editor.getModels()[0];
  
    errorMsgs.forEach(error => {
      const range = new monaco.Range(error.lineStart, error.posStart, error.lineEnd, error.posEnd);
      const decoration = { 
        isWholeLine: false, 
        style: 'color: blue',
        inlineClassName: `error-decoration-${error.severity.toLowerCase()}`, 
        hoverMessage: { value: error.errMsg } 
      };
      editor.deltaDecorations([], [{ range, options: decoration }]);
      
    });
  }
  



  
}
