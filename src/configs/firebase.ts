import firebase from '@react-native-firebase/app';

// Your secondary Firebase project credentials...
const credentials = {
  clientId: '',
  appId: '',
  apiKey: '',
  databaseURL: '',
  storageBucket: '',
  messagingSenderId: '',
  projectId: '',
};

const config = {
  name: 'SECONDARY_APP',
};

export const initializeApp = async () => {
  if (!firebase.apps.length) {
    await firebase
      .initializeApp(credentials, config)
      .then(console.log)
      .catch(console.log);
  }
};
