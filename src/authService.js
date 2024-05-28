import firebaseApp from './firebase';

export const signIn = async (email, password) => {
  try {
    await firebaseApp.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    throw error;
  }
};

export const signUp = async (email, password) => {
  try {
    await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    await firebaseApp.auth().signOut();
  } catch (error) {
    throw error;
  }
};
