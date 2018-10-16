import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { Store } from '../services'

const i18n = function(lang, str) {
  const translations = {
    en: require('../locales/en.json'),
    th: require('../locales/th.json')
  };

  if (!lang || typeof lang !== 'string') {
    return str;
  }else{
    if (lang.length > 2) {
      lang = lang.substring(0, 2);
    }
    return (translations[lang] && translations[lang][str])? translations[lang][str] : str;
  }
}

const Translate = function(props){
	return i18n(Store.app.locale,props.text);
}

export default Translate;