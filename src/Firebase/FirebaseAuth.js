//#region  imports
import types from '../helpers/types';
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './config';
import toast from 'react-hot-toast';
import { useContext, useState } from 'react';
import { ContextUser } from '../Utils/context';
//#endregion
export const HandleLoginWithGoogle = ({ setUser, navigate }) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((res) => {
      const { displayName, uid, email } = res.user;

      setUser({
        name: displayName,
        email,
        uid,
        isLoggedIn: true,
      });
      navigate('/home');
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      const email = err.email;
      const credential = GoogleAuthProvider.credentialFromResult(error);
    });
  // };
};
export const HandleRegisterUser = ({evt,setUser,navigate}) => {
  evt.preventDefault();
  const name = evt.target.firstName.value;
  const lastName = evt.target.lastName.value;
  const email = evt.target.email.value;
  const password = evt.target.password.value;
  const confirmPassword = evt.target.confirmPassword.value;
  if (password !== confirmPassword) {
    console.log('Password does not match');
    return toast.error('Passwords do not match');
  }
  if (password.length < 6) {
    console.log('Password must be at least 6 characters');
    return toast.error('Password must be at least 6 characters');
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      const userData = {
        name,
        email,
        uid: user.uid,
        isLoggedIn: true,
      };
      setUser(userData);
      return navigate('/home');
    })
    .catch((err) => {
      const errorcode = err.code;
      const errormessage = err.message;
      return toast.error(errormessage);
    });
};

export const HandleAccesUser = ({ evt, setUser, navigate }) => {
  evt.preventDefault();
  const mail = evt.target.email.value;
  const password = evt.target.password.value;
  signInWithEmailAndPassword(auth, mail, password)
    .then(({ user }) => {
      const { uid } = user;
      const name = user.displayName || ' ';
      const email = user.email;
      console.log(user);
      setUser({
        name,
        email,
        uid,
        isLoggedIn: true,
      });
      return navigate('/home');
    })
    .catch((err) => {
      const errorcode = err.code;
      const errormessage = err.message;
      console.log(errormessage);
      return toast.error(err.message);
    });
};