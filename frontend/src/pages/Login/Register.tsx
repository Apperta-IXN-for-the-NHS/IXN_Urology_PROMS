import React, { useState, useContext, useCallback } from "react";
import UserContext, { storeCreds } from "../../utils/store";
import Joi from "@hapi/joi";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonLabel,
  IonText,
  IonItem,
  IonInput,
  IonButtons,
  IonBackButton,
  IonButton,
  IonListHeader,
  NavContext,
} from "@ionic/react";
import axios from "../../axios";

interface RegisterItemProps {
  title: string;
  required: boolean;
  inputType: any;
  inputValue: any;
  setFunc: any;
}

const RegisterItem: React.FC<RegisterItemProps> = ({
  title,
  required,
  inputType,
  inputValue,
  setFunc,
}) => {
  return (
    <IonItem>
      <IonInput
        required={required}
        type={inputType}
        value={inputValue}
        placeholder={title + " *"}
        onIonChange={(e) => setFunc(e.detail.value as any)}
      />
    </IonItem>
  );
};

export const Register: React.FC = () => {
  const buttonStyle = {
    fontSize: "large",
    borderRadius: 0,
  };
  // all states
  const [userInfo, setUserInfo] = useContext(UserContext as any);
  const [loginError, setLoginError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [hospital, setHospital] = useState("");
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [city, setCity] = useState("");
  const [county, setCounty] = useState("");
  const [postcode, setPostCode] = useState("");

  // helper functions
  const { navigate } = useContext(NavContext);
  const redirect = useCallback(() => navigate("/tab2", "root"), [navigate]);
  const attachToken = (token: string) => {
    // add the user's newly created jwt token to all future axios request
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  const validationSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().min(6).required(),
    phone: Joi.string().required(),
    addressOne: Joi.string().required(),
    addressTwo: Joi.string().allow("").optional(),
    city: Joi.string().required(),
    county: Joi.string().required(),
    postcode: Joi.string().required(),
    hospital: Joi.string().allow("").optional(),
  });

  const register = async () => {
    const details = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phoneNumber,
      address: {
        addressOne: addressOne,
        addressTwo: addressTwo,
        city: city,
        county: county,
        postcode: postcode,
      },
      kind: "patient",
      hospital: hospital,
    };
    const formDetails = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phoneNumber,
      addressOne: addressOne,
      addressTwo: addressTwo,
      city: city,
      county: county,
      postcode: postcode,
      hospital: hospital,
    };
    try {
      const validation = await validationSchema.validateAsync(formDetails);
      await axios.post("/auth/register", details);
      const loginResponse = await axios.post("/auth/login", {
        email: email,
        password: password,
      });
      storeCreds(loginResponse.data.data);
      attachToken(loginResponse.data.data.token);
      setLoginError("");
      setUserInfo({ ...loginResponse.data.data, loggedIn: true });
      redirect();
    } catch (err) {
      if (err.response) {
        const response = err.response.data;
        setLoginError(response.message);
      } else if (err.request) {
        setLoginError("Please make sure you are connected to Wifi");
      } else {
        setLoginError(err.message);
      }
    }
  };
  const registerDetails = [
    {
      title: "First Name",
      required: true,
      inputType: "text",
      inputValue: firstName,
      setFunc: setFirstName,
    },
    {
      title: "Last Name",
      required: true,
      inputType: "text",
      inputValue: lastName,
      setFunc: setLastName,
    },
    {
      title: "Email",
      required: true,
      inputType: "text",
      inputValue: email,
      setFunc: setEmail,
    },
    {
      title: "Password",
      required: true,
      inputType: "password",
      inputValue: password,
      setFunc: setPassword,
    },
    {
      title: "Phone Number",
      required: true,
      inputType: "tel",
      inputValue: phoneNumber,
      setFunc: setPhoneNumber,
    },
    {
      title: "Hospital",
      required: false,
      inputType: "text",
      inputValue: hospital,
      setFunc: setHospital,
    },
  ];
  const addressDetails = [
    {
      title: "Address Line One",
      required: true,
      inputType: "text",
      inputValue: addressOne,
      setFunc: setAddressOne,
    },
    {
      title: "Address Line Two",
      required: true,
      inputType: "text",
      inputValue: addressTwo,
      setFunc: setAddressTwo,
    },
    {
      title: "City",
      required: true,
      inputType: "text",
      inputValue: city,
      setFunc: setCity,
    },
    {
      title: "County",
      required: true,
      inputType: "text",
      inputValue: county,
      setFunc: setCounty,
    },
    {
      title: "Postcode",
      required: true,
      inputType: "text",
      inputValue: postcode,
      setFunc: setPostCode,
    },
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader className="reg">Your Details</IonListHeader>
          <br />
          {registerDetails.map((details, index) => (
            <RegisterItem
              key={index}
              title={details.title}
              required={details.required}
              inputType={details.inputType}
              inputValue={details.inputValue}
              setFunc={details.setFunc}
            />
          ))}
          <IonItem>
            <IonLabel position="stacked">
              Address <IonText color="danger">*</IonText>
            </IonLabel>
            {addressDetails.map((details, index) => (
              <IonInput
                key={index}
                placeholder={details.title}
                required={details.required}
                type={details.inputType as any}
                value={details.inputValue}
                onIonChange={(e) => details.setFunc(e.detail.value as any)}
              />
            ))}
          </IonItem>
        </IonList>
        <br></br>
        {loginError ? (
          <div className="ion-text-center">
            <IonText color="danger">{loginError}</IonText>
          </div>
        ) : null}
        <IonButton
          style={buttonStyle}
          expand="full"
          type="submit"
          color="tertiary"
          onClick={() => register()}
        >
          Create account
        </IonButton>
        <br />
      </IonContent>
    </IonPage>
  );
};

export default Register;
