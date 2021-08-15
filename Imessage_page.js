var firebaseConfig = {
    apiKey: "AIzaSyBxfKRAD7AddKNoPAppl9-VgnSbH8_z5A0",
    authDomain: "mafia-twiter.firebaseapp.com",
    databaseURL: "https://mafia-twiter-default-rtdb.firebaseio.com",
    projectId: "mafia-twiter",
    storageBucket: "mafia-twiter.appspot.com",
    messagingSenderId: "386072534286",
    appId: "1:386072534286:web:c69460a3ce971a3b364b5f"
  };
  firebase.initializeApp(firebaseConfig);

function send()
{
    msg = document.getElementById("msg").value;
    firsebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
}