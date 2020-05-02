import React, { useState, useContext } from "react";
import UserContext from "../utils/store";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonModal,
  IonButtons,
  IonButton,
  IonTitle,
  IonToolbar,
  IonText,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
} from "@ionic/react";
import doctorImg from "../assets/images/doctor.png";
import { PhotoViewer } from "@ionic-native/photo-viewer";
import { camera, trash, close, eye } from "ionicons/icons";
import { usePhotoGallery, Photo } from "../utils/usePhotoGallery";

// export class View extends Component{
//   constructor(private photoViewer: PhotoViewer) {
//     this.photoViewer.show(doctorImg)
//   }
// }

// const Tab2: React.FC = () => {
//   const { deletePhoto, photos, takePhoto } = usePhotoGallery();
//   const [photoToDelete, setPhotoToDelete] = useState<Photo>();
//   const [userInfo, setUserInfo] = useContext(UserContext as any);
//   const [modal, setModal] = useState(false);
//   // console.log("userInfo")
//   // console.log(userInfo)
//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>Photo Gallery</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent>
//         <IonHeader collapse="condense">
//           <IonToolbar>
//             <IonTitle size="large">Photo Gallery</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <IonGrid>
//           <IonRow>
//             {photos.map((photo, index) => (
//               <IonCol size="6" key={index}>
//                 <IonImg
//                   onClick={() => setPhotoToDelete(photo)}
//                   src={photo.base64 ?? photo.webviewPath}
//                 />
//               </IonCol>
//             ))}
//           </IonRow>
//         </IonGrid>

//         <IonFab vertical="bottom" horizontal="center" slot="fixed">
//           <IonFabButton onClick={() => takePhoto()}>
//             <IonIcon icon={camera}></IonIcon>
//           </IonFabButton>
//         </IonFab>
//         <IonModal isOpen={modal}>
//           <IonToolbar>
//             <IonButtons slot="start">
//               <IonButton onClick={() => setModal(false)}>close</IonButton>
//             </IonButtons>
//           </IonToolbar>
//           <IonContent>
//             <IonImg src={photoToDelete?.base64 ?? photoToDelete?.webviewPath} />
//           </IonContent>
//         </IonModal>

//         <IonActionSheet
//           isOpen={!!photoToDelete}
//           buttons={[
//             {
//               text: "Delete",
//               role: "destructive",
//               icon: trash,
//               handler: () => {
//                 if (photoToDelete) {
//                   deletePhoto(photoToDelete);
//                   setPhotoToDelete(undefined);
//                 }
//               },
//             },
//             {
//               text: "View",
//               icon: eye,
//               handler: () => {
//                 setModal(true);
//               },
//             },
//             {
//               text: "Cancel",
//               icon: close,
//               role: "cancel",
//             },
//           ]}
//           onDidDismiss={() => setPhotoToDelete(undefined)}
//         />
//       </IonContent>
//     </IonPage>
//   );
// };

// interface ImageViewProps {
//   imagePath: string;
// }

// export default Tab2;
