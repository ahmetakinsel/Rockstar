import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: true,
  lng: Localization.locale,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        "Hey Yo Im at home": "Hey Yo Im at home",
        "Hey Yo Im inside Room": "Hey Yo Im inside Room",
        "Profile page welcome": "Hello Welcome to the Profile Page",
        "Click me": "please click",
      },
    },
    es: {
      translation: {
        "Hey Yo Im at home": "Hey yo estoy en casa",
        "Hey Yo Im inside Room": "Hola, yo estoy dentro de la habitación",
        "Profile page welcome": "Hola Bienvenido a la página de perfil",
        "Click me": "klick es",
      },
    },
    de: {
      translation: {
        "Hey Yo Im at home": "Hey Yo Ich bin zu Hause",
        "Hey Yo Im inside Room": "Hey Yo Ich bin im Zimmer",
        "Profile page welcome": "Hallo Willkommen auf der Profilseite",
        "Click me": "klick de",
      },
    },
  },
});

export default i18n;
