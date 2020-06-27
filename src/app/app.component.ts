import {Component, OnInit , ViewChild , ElementRef, OnDestroy , ChangeDetectorRef} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  ngOnInit(){
    
  } 
  var video = document.getElementById("myVideo");
  var btn = document.getElementById("myBtn");
  
  function myFunction() {
    if (video.paused) {
      video.play();
      btn.innerHTML = "Pause";
    } else {
      video.pause();
      btn.innerHTML = "Play";
    }
  }


}


