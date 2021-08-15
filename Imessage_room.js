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



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names)
     row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+ Room_name + "</div><hr>";
     document.getElementById("output").innerHTMl += row;
    room_name = document.getElementById("room_name").value;

    });});}
getData();

function redirect()
{
  console.log(name);
  localStorage.setItem("room_name", name)
  window.location="Imessage_page.html";
}
function addRoom()
{
     room_name = document.getElementById("room_name").value;

     firebase.database().ref("/").child(room_name).value;({
           purpose : "adding room name"
     });

     localStorage.setItem("room_name", room_name);

     window.location = "Imessage_page.html";
}

function redirectToRoomName(name)
{
     console.log(name);
     localStorage.setItem("room_name", name);

     window.location = "Imessage_page.html";
}

function logout()
       {
             localStorage.removeItem("user_name");
             localStorage.removeItem("room_name");

             window.location = "index.html";
       }