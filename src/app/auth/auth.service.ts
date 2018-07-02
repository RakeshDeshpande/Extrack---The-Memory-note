import * as firebase from 'firebase';

export class authService{

signup(email:string,password:string){
    firebase.auth().createUserWithEmailAndPassword(email,password).catch(

        (error) =>console.log(error)
    )
}

signinuser(email:string, password:string){

    firebase.auth().signInWithEmailAndPassword(email,password).catch(
        (error) => alert(error)
      ).then(
          response => console.log(response)
      )
      
}


}