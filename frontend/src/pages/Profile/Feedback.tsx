import React, { useState, useContext, useCallback } from "react";
import UserContext from "../../utils/store";
import axios from "../../axios";

import {
  IonPage,
  IonContent,
  IonCard,
  IonItem,
  IonCardHeader,
  IonCardContent,
  IonButton,
  IonToolbar,
  IonCardTitle,
  IonHeader,
  IonBackButton,
  IonTitle,
  IonTextarea,
  IonButtons,
  IonToast,
  NavContext
} from "@ionic/react";

const Feedback: React.FC = () => {
  const [userInfo, setUserInfo] = useState(UserContext as any);
  const [feedbackText, setFeedbackText] = useState("");
  const [showToast, setToast] = useState(false);
  const { navigate } = useContext(NavContext);
  const redirect = useCallback(() => navigate("/tab4", "back"), [navigate]);
  const submitFeedback = async () => {
    await axios.post("/api/feedback", { feedback: feedbackText });
    setToast(true);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton />
          </IonButtons>
          <IonTitle>Feedback</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard color="primary">
          <IonCardHeader>
            <IonCardTitle>
              <h2>Give us Feedback!</h2>
            </IonCardTitle>
            <p>
              What do you like about percuro?
              <br />
              What don't you like?
              <br />
              What could be improved?
              <br />
              Are there any features you would like to see added in the future?
              <br />
              <br />
              Tell us down below!
            </p>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonTextarea
                value={feedbackText}
                onIonChange={(e) => setFeedbackText(e.detail.value as string)}
              ></IonTextarea>
            </IonItem>
          </IonCardContent>
        </IonCard>
        <IonButton
          expand="full"
          color="tertiary"
          onClick={() => submitFeedback()}
          style={{ paddingLeft: "14px", paddingRight: "14px" }}
          disabled={feedbackText === ""}
        >
          Submit
        </IonButton>
        <IonToast
            isOpen={showToast}
            onDidDismiss={() => redirect()}
            color="medium"
            position="middle"
            message="Feedback Received Successfully, Thank you!"
            duration={500}
          />
      </IonContent>
    </IonPage>
  );
};

export default Feedback;
