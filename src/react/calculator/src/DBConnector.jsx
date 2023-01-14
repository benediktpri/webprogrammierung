// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {getStorage} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";
import {
    getFirestore,
    doc,
    setDoc,
    getDocs,
    deleteDoc,
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
const db = getFirestore(app);
const storage = getStorage(app);

async function pushReport(name, location, description, timestamp) {
    // Add a new document in collection "cities"
    await setDoc(doc(db, "report", uuidv4()), {
        name: name,
        location: location,
        description: description,
        timestamp: timestamp
    });
    console.log(`pushed ${name} at ${location} with ${description} at ${timestamp} to database.`)
}

async function getReports() {
    const querySnapshot = await getDocs(collection(db, "report"));
    const data = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        data.push(doc.data());
    });
    return data
}

async function getReportsDoc() {
    const querySnapshot = await getDocs(collection(db, "report"));
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push(doc);
    });
    return data
}

async function deleteReport(report) {

    const docs = await getReportsDoc();

    for (let i = 0; i < docs.length; i++) {
        if (docs[i].data().description === report.description &&
            docs[i].data().name === report.name &&
            docs[i].data().location === report.location &&
            docs[i].data().timestamp === report.timestamp) {

            console.log(`Found reports with the description have been deleted.`);
            console.log(docs[i]);
            await deleteDoc(doc(db, "report", docs[i].id));
        }
    }
}



export { pushReport, getReports, deleteReport };
export default storage;