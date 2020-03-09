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
  IonSlide
} from "@ionic/react";

import { arrowForwardCircleSharp } from "ionicons/icons";
import { Cards } from "./QuestionnaireInfo";
import { ReactComponent } from "*.svg";

interface TitleCardProps {
  title: string;
  desc: string;
  link: string;
  history: any;
}

const TitleCard: React.FC<TitleCardProps> = ({
  title,
  desc,
  link,
  history
}) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {desc}
        <br />
        <br />
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
                    <IonCardTitle>{question}</IonCardTitle>
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
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Questionaire;
