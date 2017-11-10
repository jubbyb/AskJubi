import * as  firebase from 'firebase';

const config = {
    // your config stuff
    apiKey: "AIzaSyABWGMkKEt_70Mg1Fl54jJ67eEV06Bw2NE",
    authDomain: "askjubi.firebaseapp.com",
    databaseURL: "https://askjubi.firebaseio.com",
    projectId: "askjubi",
    storageBucket: "askjubi.appspot.com",
    messagingSenderId: "1061847877083"
};
firebase.initializeApp(config);
{/*
class Database{
    static setUSerMobile (userId, mobile){
        
        this.itemsRef =  firebase.database().ref('askjubi');
        this.itemsRef.push({description: 'descript'});

    }

}*/}



export default firebase;