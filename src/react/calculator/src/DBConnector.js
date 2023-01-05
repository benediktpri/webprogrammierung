// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
    getFirestore,
    doc,
    setDoc,
    getDocs,
    collection,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { v4 as uuidv4 } from 'uuid';

const firebaseConfig = {
    apiKey: "AIzaSyAWuKY2-ncw7770rmqrcdCFOLdcPXyBKVo",
    authDomain: "wankywombatdb.firebaseapp.com",
    projectId: "wankywombatdb",
    storageBucket: "wankywombatdb.appspot.com",
    messagingSenderId: "694336092160",
    appId: "1:694336092160:web:1ba8a6fc25126320a280e5",
    measurementId: "G-2N20PWN9Y6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

async function pushReport(name, location, description) {
    // Add a new document in collection "cities"
    await setDoc(doc(db, "report", uuidv4()), {
        name: name,
        location: location,
        description: description
    });
    console.log(`pushed ${name} at ${location} with ${description} to database.`)

}

async function getReports() {
    const querySnapshot = await getDocs(collection(db, "report"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        return doc;
    });

}

async function getReport(attribute, comparator, state) {
    const q = query(collection(db, "report"), where(attribute, comparator, state));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
    return 
}
export { pushReport, getReports }