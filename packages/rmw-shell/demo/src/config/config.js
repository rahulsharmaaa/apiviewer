import React from 'react'
import Loadable from 'react-loadable'
import getMenuItems from './menuItems'
import LoadingComponent from 'rmw-shell/lib/components/LoadingComponent'
import grants from './grants'
import locales from './locales'
import routes from './routes'
import themes from './themes'

const Loading = () => <LoadingComponent />

const LPAsync = Loadable({
  loader: () => import('../../src/pages/LandingPage'),
  loading: Loading,
})

const config = {
  firebase_config: {
    apiKey: 'AIzaSyBctyptPHsSUTZV-ePCKhuf0g2FUOMUNi8',
    authDomain: 'apiviewer-e0749.firebaseapp.com',
    databaseURL: 'https://apiviewer-e0749.firebaseio.com',
    projectId: 'apiviewer-e0749',
    storageBucket: 'apiviewer-e0749.appspot.com',
    messagingSenderId: '707308024986',
    appId: '1:707308024986:web:d85db32cef9f53c4d29b23',
    measurementId: 'G-TM64QMR5V4',
  },
  firebase_config_dev: {
    apiKey: 'AIzaSyBctyptPHsSUTZV-ePCKhuf0g2FUOMUNi8',
    authDomain: 'apiviewer-e0749.firebaseapp.com',
    databaseURL: 'https://apiviewer-e0749.firebaseio.com',
    projectId: 'apiviewer-e0749',
    storageBucket: 'apiviewer-e0749.appspot.com',
    messagingSenderId: '707308024986',
    appId: '1:707308024986:web:d85db32cef9f53c4d29b23',
    measurementId: 'G-TM64QMR5V4',
  },
  firebase_providers: [
    'google.com',
    'facebook.com',
    'twitter.com',
    'github.com',
    'password',
    'phone',
  ],
  initial_state: {
    locale: 'en',
    themeSource: {
      isNightModeOn: false,
      source: 'default',
    },
  },
  drawer_width: 256,
  routes,
  getMenuItems,
  locales,
  themes,
  grants,
  firebaseLoad: () => import('./firebase'),
  landingPage: LPAsync,
}

export default config
