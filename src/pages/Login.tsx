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
  IonRow,
  IonImg,
  useIonRouter,
  useIonLoading,
  IonGrid,
  IonCol,
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
  const router = useIonRouter();

  const [introSeen, setIntroSeen] = useState<boolean>(false);

  const [present, dismiss] = useIonLoading();

  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("====================================");
    console.log("Login operation here");
    console.log(formData);
    console.log("====================================");
    await present("Loggin you in...");
    setTimeout(() => {
      dismiss();
      router.push("/app", "root");
    }, 2000);
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
            <IonGrid fixed>
              <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                  <div className="ion-text-center ion-padding">
                    <IonImg src={Logo} />
                  </div>
                </IonCol>
              </IonRow>
              <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
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
                          Register{" "}
                          <IonIcon icon={personCircleOutline} slot="end" />
                        </IonButton>
                      </form>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
      )}
    </>
  );
};

export default Login;
