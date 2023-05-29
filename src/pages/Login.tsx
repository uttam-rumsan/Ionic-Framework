import React, { useState, useEffect } from "react";
import {
  IonCard,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonCardContent,
  IonButton,
  IonIcon,
  IonImg,
} from "@ionic/react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import Logo from "../../public/assets/fcc.svg";
import Intro from "../components/intro";
import { Preferences } from "@capacitor/preferences";

const INTRO_KEY = "intro-seen";

type FormDataType = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [introSeen, setIntroSeen] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("====================================");
    console.log("Login operation here");
    console.log(formData);
    console.log("====================================");
  };

  const handleFinish = () => {
    setIntroSeen(true);
    Preferences.set({ key: INTRO_KEY, value: "true" });
  };

  useEffect(() => {
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTRO_KEY });
      setIntroSeen(seen.value === "true");
    };
    checkStorage();
  }, []);

  return (
    <>
      {!introSeen ? (
        <Intro onFinish={handleFinish} />
      ) : (
        <IonPage>
          <IonHeader>
            <IonToolbar color="primary">
              <IonTitle>Nepali Song chords</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <div className="ion-text-center ion-padding">
              <IonImg src={Logo} />
            </div>
            <IonCard>
              <IonCardContent>
                <form onSubmit={handleFormSubmit}>
                  <IonInput
                    mode="md"
                    name="email"
                    fill="outline"
                    labelPlacement="floating"
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onIonChange={handleInputChange}
                  />
                  <IonInput
                    className="ion-margin-top"
                    mode="md"
                    name="password"
                    fill="outline"
                    labelPlacement="floating"
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onIonChange={handleInputChange}
                  />
                  <IonButton
                    expand="block"
                    className="ion-margin-top"
                    type="submit"
                  >
                    Login <IonIcon icon={logInOutline} slot="end" />
                  </IonButton>
                  <IonButton
                    expand="block"
                    className="ion-margin-top"
                    color="secondary"
                    routerLink="/register"
                  >
                    Register <IonIcon icon={personCircleOutline} slot="end" />
                  </IonButton>
                </form>
              </IonCardContent>
            </IonCard>
          </IonContent>
        </IonPage>
      )}
    </>
  );
};

export default Login;
