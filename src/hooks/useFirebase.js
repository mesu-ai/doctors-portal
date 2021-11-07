import  { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged  } from "firebase/auth";
import firebaseInitialize from '../pages/login/Firebase/firebase.init';

firebaseInitialize();

const useFirebase = () => {
    const [user,setUser]=useState({});
    const [error,setError]=useState('');

    const [isLoading,setLoding]=useState(true);

    const auth = getAuth();

    const userRegistation=(email,password,history,location)=>{
        const redirect_uri=location?.state?.from || '/';

        setLoding(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {

         history.push(redirect_uri)
            
            setUser(result.user);
            

            
            
        })
        .catch((error) => {
            
            setError(error.message);
            
        }).finally(()=>setLoding(false));
    }

    const userLogin=(email,password,history,location)=>{
        const redirect_uri=location?.state?.from || '/';

        setLoding(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            history.push(redirect_uri);
            setUser(result.user);
           

            
        })
        .catch((error) => {
            setError(error.message);
            
        }).finally(()=>setLoding(false));

    }

    // observe user state
    useEffect(()=>{      
        const unsubscribed=onAuthStateChanged(auth, (user) =>{
              if (user) {         
                   setUser(user)
                   
                 } else {
                     setUser({})      
                 }
                 setLoding(false);
               });
               return ()=>unsubscribed;
 
     },[auth]);

    

    const logOut=()=>{
        setLoding(true);
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            setError(error.message);
          }).finally(()=>setLoding(false));
    }




    return {user,error,setError,isLoading,userRegistation,userLogin,logOut};
};

export default useFirebase;