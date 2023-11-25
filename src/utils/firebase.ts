import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import firebaseConfig from "../firebaseConfig";
import { UserData } from "../types/users";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const saveUserInDB = async (user: UserData) => {
    try {
        await addDoc(collection(db, "users"), user);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};



const getUsersFromDB = async (): Promise<UserData[]> => {

    const resp: UserData[] = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        resp.push({
            ...doc.data(),
        }as UserData)
    });
    return resp;
}

export default { saveUserInDB, getUsersFromDB };
