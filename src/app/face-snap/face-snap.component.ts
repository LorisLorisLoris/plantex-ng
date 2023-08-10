import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';
import { faceSnapsService } from '../services/face-snaps.service';

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

  constructor(private faceSnapsService: faceSnapsService){};

  ngOnInit() {
    this.buttonText = "Like 👍"
  }

  onLike(){
    if (this.buttonText === "Like 👍") {
      this.faceSnapsService.likeFaceSnapById(this.faceSnap.id, 'like');
      this.buttonText = "Nope 💔";
    } else {
      this.faceSnapsService.likeFaceSnapById(this.faceSnap.id, 'unlike');
      this.buttonText = "Like 👍";
    }
  }

  // onCardClick() {
  //   this.isSelected = !this.isSelected;
  // }
}

