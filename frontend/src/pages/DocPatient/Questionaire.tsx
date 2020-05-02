import React, { useState, useContext, useCallback } from "react";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToast,
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
  IonCardSubtitle,
  IonText,
  IonFooter,
  NavContext,
} from "@ionic/react";
import { arrowForwardCircleSharp } from "ionicons/icons";
import { Cards } from "./QuestionnaireInfo";
import { ReactComponent } from "*.svg";
import { Redirect } from "react-router";
import axios from "../../axios";

interface TitleCardProps {
  title: string;
  desc: string;
  link: string;
  // link2: string;
  history: any;
}

const TitleCard: React.FC<TitleCardProps> = ({
  title,
  desc,
  link,
  history,
}) => {
  const style = {
    borderRadius: 0,
  };
  return (
    <IonCard color="primary" style={style}>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        <br />
      </IonCardHeader>
      <IonCardContent>
        <h2>{desc}</h2>
        <br></br>

        <IonButton
          size="small"
          fill="outline"
          color="secondary"
          onClick={(e) => {
            e.preventDefault();
            history.push(link);
          }}
        >
          Take Questionaire
        </IonButton>

        {/* {title === "App Feedback" ? (
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
        ) : null} */}
      </IonCardContent>
    </IonCard>
  );
};

interface Content {
  title: string;
  questions: { heading: string; question: string }[];
  answers: string[][];
}

interface QuestionnairePageProps {
  contentArray: Content[];
}

interface QuestionProps {
  info: Content;
  question: { heading: string; question: string };
  index: number;
  answers: number[];
  setAnswers(answers: number[]): void;
}

const Question: React.FC<QuestionProps> = ({
  info,
  question,
  index,
  answers,
  setAnswers,
}) => {
  const numQuestions = info.questions.length;
  const [selected, setSelected] = useState<number>();
  const updateScore = (index: number, detailValue: number) => {
    console.log(detailValue);
    answers[index] = detailValue;
    setSelected(detailValue);
    setAnswers(answers);
  };
  return (
    <React.Fragment>
      <IonSlide>
        <IonCard color="primary">
          <IonCardHeader>
            <IonCardTitle>{question.heading}</IonCardTitle>
            <IonCardTitle>{<h3>{question.question}</h3>}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonRadioGroup
              value={selected}
              onIonChange={(e) => updateScore(index, e.detail.value)}
            >
              {info.answers[index].map((ans, index) => (
                <IonItem lines="full">
                  <IonLabel>{ans}</IonLabel>
                  <IonRadio value={index} />
                </IonItem>
              ))}
            </IonRadioGroup>
          </IonCardContent>
        </IonCard>
        {/* {/* {`Selected: ${selected}`} */}
        <br />
        {/* {`Current Index ${index}`} */}
        {/* {`Current answers ${answers}`} */}
      </IonSlide>
      {/* {index === numQuestions - 1 ? "final question" : "still got left"} */}
    </React.Fragment>
  );
};

export const QuestionairePage: React.FC<QuestionnairePageProps> = ({
  contentArray,
}) => {
  const buttonStyle = {
    fontSize: "large",
    paddingLeft: "14px",
    paddingRight: "14px",
  };
  const initialAnswers = contentArray[0].questions.map(() => 0);
  const [score, setScore] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>(initialAnswers);
  const [responseMessage, setResponseMessage] = useState("");
  const [final, setFinal] = useState(false);
  const [showToast, setToast] = useState(false);
  const { navigate } = useContext(NavContext);
  const redirect = useCallback(() => navigate("/quest", "back"), [navigate]);

  const saveQuest = async () => {
    const title = contentArray[0].title;
    const questions = contentArray[0].questions.map((q) => q.question);
    const potentialAnswers = contentArray[0].answers;
    const responses = [];
    const finalScore = answers.reduce((a, b) => a + b, 0);
    for (let i = 0; i < answers.length; i++) {
      const answerIndex = answers[i];
      responses.push({
        question: questions[i],
        answer: potentialAnswers[i][answerIndex],
        answerScore: answerIndex,
      });
    }
    const questParams = { title: title, responses: responses };
    const resultsParams = { name: title.toUpperCase(), score: finalScore };
    try {
      await axios.post("/api/questionnaires", questParams);
      await axios.post(`/api/results/${title.toUpperCase()}`, resultsParams);
      setResponseMessage("Questionnaire Completed Successfully");
    } catch (err) {
      if (err.response) {
        setResponseMessage(err.response.data.message);
      } else if (err.request) {
        setResponseMessage(
          "No network connection, please make sure you are connected to wifi."
        );
      }
    } finally {
      setToast(true);
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Questionnaires</IonTitle>
        </IonToolbar>
      </IonHeader>
      {contentArray.map((info, index) => (
        <IonContent>
          <h2 className="ion-text-center">{info.title}</h2>
          <IonSlides
            pager={false}
            onIonSlideReachEnd={() => setFinal(true)}
            onClick={() => console.log(answers)}
          >
            {info.questions.map((question, index) => (
              <React.Fragment>
                <Question
                  question={question}
                  info={info}
                  index={index}
                  setAnswers={setAnswers}
                  answers={answers}
                />
              </React.Fragment>
            ))}
          </IonSlides>
          <IonButton
            style={buttonStyle}
            color="tertiary"
            onClick={() => saveQuest()}
            expand="full"
            disabled={!final}
          >
            Submit
          </IonButton>
          <IonToast
            isOpen={showToast}
            onDidDismiss={() => redirect()}
            color="medium"
            position="middle"
            message={responseMessage}
            duration={700}
          />
        </IonContent>
      ))}
      {/* {console.log(answers)} */}
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
            // link2={cardInfo.link2}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Questionaire;
