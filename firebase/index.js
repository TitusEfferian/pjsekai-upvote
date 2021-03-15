import firebase from 'firebase/app';

/**
 * this is a client key
 * yeah, can't hide because mandatory need on the client
 * security will be handle on the firebase dashboard
 */
const firebaseConfig = {
    apiKey: "AIzaSyDwFpK5NEHZ8n12wYpz_7IBxTuFJQRHmWw",
    authDomain: "project-sekai-upvote.firebaseapp.com",
    projectId: "project-sekai-upvote",
    storageBucket: "project-sekai-upvote.appspot.com",
    messagingSenderId: "551805727486",
    appId: "1:551805727486:web:5af2699843c3d4e9296baf",
    measurementId: "G-DJT3J9EDJN"
};

try {
    firebase.initializeApp(firebaseConfig);
} catch (err) {
    /**
     * skip this, because it's not an actual error
     * error only on dev env because of hot reloading features
     */
    console.log(err)
}

export default firebase;
