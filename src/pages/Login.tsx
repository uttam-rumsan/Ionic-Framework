import React, { ChangeEvent, useState } from "react";
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
} from "@ionic/react";

type FormDataType = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    console.log(e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("====================================");
    console.log("Login operation here");
    console.log(formData);
    console.log("====================================");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Nepali Song chords</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
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
              <IonButton expand="block" className="ion-margin-top" type="submit">
                Login
              </IonButton>
              <IonButton expand="block" className="ion-margin-top" color="secondary">
                Register
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
