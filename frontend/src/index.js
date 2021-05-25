import 'bulma/css/bulma.css'
import './static/styles.css'
import * as Sentry from '@sentry/browser'
import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import App from './Router'
import 'moment/locale/ru'
import './static/fontawesome-free-5.15.1-web/css/all.min.css'

moment.locale('ru')

Sentry.init({ dsn: process.env.REACT_APP_SENTRY_TOKEN })

ReactDOM.render(<App />, document.getElementById('root'))
