import { async } from "@firebase/util";
import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";
import { db } from './FirebaseConfig';

// CREATE
export const createItem = async (obj) => {
    const colRef = collection(db, 'Peluches');
    const data = await addDoc(colRef, obj);
    return data.id;
}

// UPDATE
export const updateItem = async (id, obj) => {
    const colRef = collection(db, 'Peluches');
    await updateDoc(doc(colRef, id), obj)
}

// READ
export const getItems = async () => {
    const colRef = collection(db, 'Peluches');
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

// READ WITH WHERE
export const getItemsByCondition = async (itemId) => {
    const colRef = collection(db, 'Peluches');
    const result = await getDocs(query(colRef, where('', '==', itemId)));
    return getArrayFromCollection(result);
}

export const getCollection = async () => {
    const colRef = collection(db, 'Peluches')
    const result = await getDocs(query(colRef))
    return getArrayFromCollection(result)
}

export const getItemById = async (itemId) => {
    const colRef = collection(db, 'Peluches');
    const result = await getDoc(doc(colRef, itemId));
    return result.data();
}

// DELETE
export const deleteItem = async (id) => {
    const colRef = collection(db, 'Peluches');
    await deleteDoc(doc(colRef, id));
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}