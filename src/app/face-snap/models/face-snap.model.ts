// export class FaceSnap {
//     //en ajoutant "public" devant chaque propriete on peut se passer des proprietes de classe et du constructeur
//     constructor(
//         public title: string,
//         public description: string,
//         public createdDate: string,
//         public likes: number,
//         public imageUrl: string,
//         public location?: string){
//     }
// }

export class FaceSnap {
    type!: string;
    title!: string;
    description!: string;
    createdDate!: string;
    likes!: number;
    imageUrl!: string;
    location?: string;
  }

