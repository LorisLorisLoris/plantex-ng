import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../face-snap/models/face-snap.model';
import { faceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})

export class FaceSnapListComponent implements OnInit {
  faceSnaps! : FaceSnap[];


  //Pour injecter un service dans un component:
  // ajouter un argument au constructor du component qui a le type du service, 
  // par exemple private userService: UserService
  constructor(private faceSnapsService: faceSnapsService){}

  ngOnInit() {
    this.faceSnaps = this.faceSnapsService.faceSnaps;
  }
}
