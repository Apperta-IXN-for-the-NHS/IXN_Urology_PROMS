import React, {
  Component,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import UserContext, { getCreds, attachToken } from "../../utils/store";
import { IonContent, IonHeader, IonPage, NavContext } from "@ionic/react";

const Auth: React.FC = () => {
  const [userInfo, setUserInfo] = useContext(UserContext as any);
  //   const [credsExist, setCredsExist] = useState(false);
  const { navigate } = useContext(NavContext);
  const toLogin = useCallback(() => navigate("/login", "root"), [navigate]);
  const toHome = useCallback(() => navigate("/tab2", "root"), [navigate]);
  useEffect(() => {
    const checkCreds = async () => {
      const creds = await getCreds();
      if (creds) {
        // user is loggedin as creds exist in local storage
        const { token } = creds;
        attachToken(token);
        setUserInfo({ ...creds, loggedIn: true });
        toHome();
      } else {
        toLogin();
      }
    };
    checkCreds();
  });
  return (
    <IonPage>
      <IonContent />
    </IonPage>
  );
};

export default Auth;
