import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    ns: ['translate'],
    defaultNS: 'translate',
    debug: false,
    backend: {
      loadPath: 'http://127.0.0.1:31000/static/locales/{{lng}}/{{ns}}.json',
      allowMultiLoading: true,
    },
    react: {
      wait: true
    },
    withCredentials: true,
    ajax: function (url, options, callback, data) {},
  });
export default i18n;
