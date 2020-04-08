import React from "react";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonItem,
  IonRadioGroup,
  IonRadio,
  IonListHeader,
  IonList,
  IonLabel,
  IonIcon,
  IonContent,
  IonCardTitle,
  IonSlides,
  IonSlide,
  IonInput
} from "@ionic/react";

import { arrowForwardCircleSharp } from "ionicons/icons";
import { Cards } from "./QuestionnaireInfo";
import { ReactComponent } from "*.svg";

interface TitleCardProps {
  title: string;
  desc: string;
  link: string;
  link2: string;
  history: any;
}

const TitleCard: React.FC<TitleCardProps> = ({
  title,
  desc,
  link,
  link2,
  history
}) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle color="nhsblue">{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <h2>{desc}</h2>
        <br></br>

        <IonButton
          size="small"
          fill="outline"
          onClick={e => {
            e.preventDefault();
            history.push(link);
          }}
        >
          Take Questionaire
          {/* <IonIcon icon={arrowForwardCircleSharp}></IonIcon> */}
        </IonButton>
        

        {title === "App Feedback" ? (
        <IonButton
          size="small"
          fill="outline"
          onClick={e => {
            e.preventDefault();
            history.push(link2);
          }}
        >
          Text Feedback
        </IonButton>
        ) : null}


      </IonCardContent>
    </IonCard>
  );
};

interface Content {
  title: string;
  questions: string[];
  answers: string[][];
}

interface QuestionnairePageProps {
  contentArray: Content[];
}

export const QuestionairePage: React.FC<QuestionnairePageProps> = ({
  contentArray
}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Questionaires</IonTitle>
        </IonToolbar>
      </IonHeader>
      {contentArray.map((info, index) => (
        <IonContent>
          <h2 className="ion-text-center">{info.title}</h2>
          <IonSlides pager={false}>
            {info.questions.map((question, index) => (
              <IonSlide>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle color="nhsblue">{question}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonRadioGroup>
                      {info.answers[index].map((ans, index) => (
                        <IonItem>
                          <IonLabel>{ans}</IonLabel>
                          <IonRadio value={ans} />
                        </IonItem>
                      ))}
                    </IonRadioGroup>
                  </IonCardContent>
                </IonCard>
              </IonSlide>
            ))}
            {/* <IonButton onClick={(r) => {r.slideNext}}></IonButton>  */}
          </IonSlides>
        </IonContent>
      ))}
    </IonPage>
  );
};

// Creating feedback text field
// interface FeedbackProps{
// }

// export const FeedbackText: React.FC<FeedbackProps> = () =>{
  
//   return(
//     <IonCard className="login">
//         <IonList lines="full" class="ion-no-margin ion-no-padding">
//       <IonItem>
//         <IonLabel position="floating">Email</IonLabel>
//         <IonInput required type="text"></IonInput>
//       </IonItem>

//       <IonItem lines="none">
//           <IonLabel position="stacked">No Account? Register <a href="/register">here</a></IonLabel>
//       </IonItem>
//       </IonList>
//       </IonCard>
//   );
// }



interface QuestionaireProps {
  history: any;
}

const Questionaire: React.FC<QuestionaireProps> = ({ history }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Questionaires</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {Cards.map((cardInfo, index) => (
          <TitleCard
            history={history}
            title={cardInfo.cardTitle}
            desc={cardInfo.cardDesc}
            link={cardInfo.link}
            link2={cardInfo.link2}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Questionaire;
