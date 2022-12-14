const firebaseConfig = {
    apiKey: "AIzaSyDcBn35Hdz-TIyQYpGKVAj5B_hPpFG8VKA",
    authDomain: "kwitter-966a5.firebaseapp.com",
    databaseURL: "https://kwitter-966a5-default-rtdb.firebaseio.com",
    projectId: "kwitter-966a5",
    storageBucket: "kwitter-966a5.appspot.com",
    messagingSenderId: "162538901876",
    appId: "1:162538901876:web:94da275b638dd2c1f21c21",
    measurementId: "G-DR9NDZB8Y9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser() {

  user_name = document.getElementById("Username").value;
  firebase.database().ref("/").child(user_name).update ({
    purpose : "addinguser" 
  })
  }
