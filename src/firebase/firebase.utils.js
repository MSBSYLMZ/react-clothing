import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAgsztbIg01DpTIaDjDBxhrSDj6YYRcank",
  authDomain: "crwn-db-22d2a.firebaseapp.com",
  projectId: "crwn-db-22d2a",
  storageBucket: "crwn-db-22d2a.appspot.com",
  messagingSenderId: "88598635658",
  appId: "1:88598635658:web:88bdd671e583bae4da7973",
  measurementId: "G-WHZ1D34460"
};

export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const {displayName, email} =userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user' , error.message);
    }

  }
  return userRef
}

export const addCollectionAndDocuments= async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  })

  return await batch.commit()
}

export const convertCollectionsSnapshotToMap= collectionsSnapshot =>{
  const transformedCollection = collectionsSnapshot.docs.map(doc => {
    const { title, items } =doc.data();
    return {
      routeName: encodeURI(title),
      id:doc.id,
      title,
      items
    }
  })

   return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  },{})
}

firebase.initializeApp(config);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
}

export const auth=firebase.auth();
export const firestore =firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = ()=> auth.signInWithPopup(googleProvider);

export default firebase;


