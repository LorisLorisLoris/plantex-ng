import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './face-snap/models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps! : FaceSnap[];

  ngOnInit() {
    //avec constructeur :
    // this.mySnap = new FaceSnap(
    //   'Mimosa Pudica',
    //   "Espèce modèle pour l'étude des mécanismes de perception chez les plantes",
    //   new Date().toLocaleString(),
    //   3,
    //   "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Mimosa_pudica_Feuille.jpg/1920px-Mimosa_pudica_Feuille.jpg"
    // );

    //sans contructeur :

    this.faceSnaps = [
      {
      type: "sensitive",
      title: 'Mimosa Pudica',
      description: "Espèce modèle pour l'étude des mécanismes de perception chez les plantes.",
      createdDate: new Date(),
      likes: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Mimosa_pudica_Feuille.jpg/1920px-Mimosa_pudica_Feuille.jpg",
      location: "Valdemossa"
    },
    {
      type: "sensitive",
      title: 'Codariocalyx motorius',
      description: "Fait « danser ses feuilles comme des serpents ».",
      createdDate: new Date(),
      likes: 0,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a4/%E0%B4%A4%E0%B5%8A%E0%B4%B4%E0%B5%81%E0%B4%95%E0%B4%A3%E0%B5%8D%E0%B4%A3%E0%B4%BF_1.JPG",
      location: "Kamikochi"
    },
    {
      type: "carnivore",
      title: 'Dionaea muscipula',
      description: "Plante carnivore, sans doute la plus connue et la plus emblématique.",
      createdDate: new Date(),
      likes: 6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Dionaea_muscipula_RHu_02.jpg/1280px-Dionaea_muscipula_RHu_02.jpg",
      location: "Cap Roig"
    },
    {
      type: "sensitive",
      title: 'Mimosa Pudica',
      description: "Espèce modèle pour l'étude des mécanismes de perception chez les plantes.",
      createdDate: new Date(),
      likes: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Mimosa_pudica_Feuille.jpg/1920px-Mimosa_pudica_Feuille.jpg",
      location: "Valdemossa"
    }
  ]   
  }

}
