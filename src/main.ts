import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/main.scss";

import { createI18n } from "vue-i18n";
import messages from "./i18n/messages";

const i18n = createI18n({
  legacy: false,
  locale: "es",
  fallbackLocale: "en",
  messages,
  numberFormats: {
    en: {
      currency: {
        style: "currency",
        currency: "USD",
        currencyDisplay: "symbol",
      },
    },
    es: {
      currency: {
        style: "currency",
        currency: "EUR",
        currencyDisplay: "symbol",
      },
    },
  },
});

const app = createApp(App);

app.use(i18n as unknown as { install: (app: any) => void });

app.mount("#app");
