import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore";
import { firestore } from "../firebase.config";
import { FirebaseError } from "firebase/app";

//save new item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};

//get all food items

export const getAllFoodItems = async (data) => {
        const items = await getDocs(
            query(collection(Firebase, "foodItems"), orderBy("id", "desc"))
        );

        return items.docs.map((doc) => doc.data());
  };


