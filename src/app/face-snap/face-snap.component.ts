import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  // isSelected: boolean = false;
  isHovered : boolean = false;

  ngOnInit() {
    this.buttonText = "Like 👍"
  }

  onLike(){
    if (this.buttonText === "Like 👍") {
      this.faceSnap.likes++;
      this.buttonText = "Nope 💔";
    } else {
      this.faceSnap.likes--;
      this.buttonText = "Like 👍";
    }
  }

  // onCardClick() {
  //   this.isSelected = !this.isSelected;
  // }
}

