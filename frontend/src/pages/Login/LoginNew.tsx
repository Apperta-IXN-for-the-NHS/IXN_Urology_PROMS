import React, { useState, useContext, useCallback } from "react";
import UserContext, { storeCreds, attachToken } from "../../utils/store";
import { Plugins } from "@capacitor/core";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonInput,
  IonText,
  IonItem,
  IonButton,
  NavContext,
} from "@ionic/react";
import logo from "../../assets/images/percuroLogo.png";
import "./Login.css";
import axios from "../../axios";

const Login: React.FC = () => {
  const { Storage } = Plugins;
  const [userInfo, setUserInfo] = useContext(UserContext as any);
  const [email, setEmail] = useState("elon@gmail.com");
  const [password, setPassword] = useState("elon");
  const [loginError, setLoginError] = useState("");
  const buttonStyle = {
    fontSize: "large",
    borderRadius: 0,
  };
  const { navigate } = useContext(NavContext);
  const redirect = useCallback(() => navigate("/tab2", "root"), [navigate]);
  const login = async () => {
    try {
      const response = await axios.post("/auth/login", {
        email: email,
        password: password,
      });
      storeCreds(response.data.data);
      attachToken(response.data.data.token);
      setLoginError("");
      setUserInfo({ ...response.data.data, loggedIn: true });
      console.log(await Storage.keys())
      redirect();
    } catch (err) {
      const response = err.response.data;
      setLoginError(response.message);
    }
  };

  return (
    <IonPage>
      <IonHeader class="ion-no-border"></IonHeader>
      <IonContent className="ion-padding login background">
        <h1 className="ion-text-center">Percuro</h1>
        <img src={logo} width="100px" alt="" />
        <br />
        <h2 style={{ paddingLeft: "5px" }}>Welcome Back</h2>
        <br />
        <IonItem className="rounded" lines="none">
          <IonInput
            required
            type="text"
            placeholder="Email"
            onIonChange={(e) => setEmail(e.detail.value as string)}
            value={email}
          />
        </IonItem>
        <IonItem className="rounded" lines="none">
          <IonInput
            required
            type="password"
            placeholder="Password"
            onIonChange={(e) => setPassword(e.detail.value as string)}
            value={password}
          />
        </IonItem>
        <br />
        <IonButton
          type="submit"
          expand="full"
          color="tertiary"
          style={buttonStyle}
          onClick={() => login()}
          disabled={password === "" || email === ""}
        >
          Log in
        </IonButton>
        <br />
        {loginError ? (
          <div className="ion-text-center">
            <IonText color="danger">{loginError}</IonText>
          </div>
        ) : null}
        <div className="ion-text-center ion-padding">
          No Account? Register <a href="/register">here</a>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
