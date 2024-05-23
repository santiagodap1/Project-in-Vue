import { collection, addDoc, doc, setDoc, getDocs, query, where } from 'firebase/firestore';
import {  updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import db from '../firebase/init.js'


export async function addPostId(email, postId) {
    const userDocRef = doc(db, 'favorites', email);

    try {
        await setDoc(userDocRef, { email: email, postIds: arrayUnion(postId) }, { merge: true });
        console.log('Post ID added successfully');
    } catch (error) {
        console.error('Error adding Post ID: ', error);
    }
}

export async function removePostId(email, postId) {
    const userDocRef = doc(db, 'favorites', email);

    try {
        await updateDoc(userDocRef, {
            postIds: arrayRemove(postId)
        });
        console.log('Post ID removed successfully');
    } catch (error) {
        console.error('Error removing Post ID: ', error);
    }
}


