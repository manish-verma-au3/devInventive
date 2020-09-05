import React,{useState, useEffect} from 'react';
import MyNavBar from './components/MyNav';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Login() {
    const [isSignedIn, setisSignedIn] = useState(false)

    const config = {
        apiKey: 'AIzaSyDOHrGy0U2hLPmmzL8YS1cSWPvs_tgD5Cg',
        authDomain: 'devinventive-761bf.firebaseapp.com',
        // ...
      };
     
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
     }

     useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user){
                // user hols the reference to currentUser variable.
                console.log('user', user)
                setisSignedIn(!!user)
        });
     }, [])
    
    // Configure FirebaseUI.
   const uiConfig = {
        signInFlow: 'popup',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false
        }
    };
    
    
    if (!isSignedIn) {
        return (
       <Container>
           <Row>
               <Col></Col>
               <Col md="auto">
                    <h1>Dev Inventive Solutions</h1>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
               </Col>
               <Col></Col>
           </Row>
       </Container>
        );
      }
      return (
        <Container>
            <Row>
                <Col>
                    <MyNavBar/>
                </Col>
            </Row>

            <Row>
                <Col></Col>
                <Col md="auto" style={{marginTop:'200px'}}>
                <h1>Welcome to React Routing</h1>
                <h3>User: {firebase.auth().currentUser.displayName}!</h3>
                <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
                </Col>
                <Col></Col>
            </Row>
        </Container>
      );
    }

export default Login
