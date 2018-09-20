import React from 'react';
import PropTypes from 'prop-types';

import { inject, observer } from 'mobx-react';

import i18n from './i18n';

@inject('store') @observer
class Translate extends React.Component {
	render() {
		const { text, store } = this.props
		return i18n(store.app.locale,text);
	}
}
export default Translate;