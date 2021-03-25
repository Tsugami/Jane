import firebase from '@react-native-firebase/app';

// Your secondary Firebase project credentials...
const credentials = {
  clientId: 'jane-8c505',
  appId: '10213231138911021323113891',
  apiKey: 'AIzaSyBB7CLQncBP9gkYYPfzchc7nqWP52uHhSs',
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
