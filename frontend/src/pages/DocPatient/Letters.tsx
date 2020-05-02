import React, { useState, useContext } from "react";
import UserContext from "../../utils/store";
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
  IonBackButton,
} from "@ionic/react";
import { camera, trash, close, eye } from "ionicons/icons";
import { usePhotoGallery, Photo } from "../../utils/usePhotoGallery";

const Letters: React.FC = () => {
  const [photoToDelete, setPhotoToDelete] = useState<Photo>();
  const [userInfo, setUserInfo] = useContext(UserContext as any);
  const storageKey = `photos ${userInfo._id}`;
  const { deletePhoto, photos, takePhoto } = usePhotoGallery(storageKey);
  const [modal, setModal] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton />
          </IonButtons>
          <IonTitle>Letters</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg
                  onClick={() => setPhotoToDelete(photo)}
                  src={photo.base64 ?? photo.webviewPath}
                />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
        <IonModal isOpen={modal}>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => setModal(false)}>close</IonButton>
            </IonButtons>
          </IonToolbar>
          <IonContent>
            <IonImg src={photoToDelete?.base64 ?? photoToDelete?.webviewPath} />
          </IonContent>
        </IonModal>

        <IonActionSheet
          isOpen={!!photoToDelete}
          buttons={[
            {
              text: "Delete",
              role: "destructive",
              icon: trash,
              handler: () => {
                if (photoToDelete) {
                  deletePhoto(photoToDelete);
                  setPhotoToDelete(undefined);
                }
              },
            },
            {
              text: "View",
              icon: eye,
              handler: () => {
                setModal(true);
              },
            },
            {
              text: "Cancel",
              icon: close,
              role: "cancel",
            },
          ]}
          onDidDismiss={() => setPhotoToDelete(undefined)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Letters;
