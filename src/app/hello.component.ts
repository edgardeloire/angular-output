import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {

  champ="split";

  champChange(champPassed){
    this.champ=champPassed;
    console.log(this.champ);
  }
}
