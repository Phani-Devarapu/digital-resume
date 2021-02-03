import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-lander',
  templateUrl: './lander.component.html',
  styleUrls: ['./lander.component.css']
})
export class LanderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var options = {
      //strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
      strings: ['','Java', 'Angular','Wen'],
      typeSpeed: 120,
      backSpeed: 100,
      loop: true
     
    };
    
    var typed = new Typed('.typo-animate', options);
  }

 

  
}


