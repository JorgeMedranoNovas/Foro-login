import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './Components/App';
import reportWebVitals from './Tools/reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();




// Inicio de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAoKgBDoITayfhIY3aXbc7to-MXURNcPK4",
  authDomain: "proyecto-final-5980e.firebaseapp.com",
  projectId: "proyecto-final-5980e",
  storageBucket: "proyecto-final-5980e.appspot.com",
  messagingSenderId: "222554459538",
  appId: "1:222554459538:web:24799f57cc61eb6a01854b",
  measurementId: "G-0847KRTK6J"
};

firebase.initializeApp(firebaseConfig);
let SectionMessager = document.getElementById("Section-Messager");
let SectionMessagerbtn = document.getElementById("Section-Messager-btn");
let GetArea = document.getElementById("Get-Area");
let RegistreOK = document.getElementById("RegistreOK");
let RegistreEmail = document.getElementById("RegistreEmail");
let RegistreUser = document.getElementById("RegistreUser");
let RegistrePass = document.getElementById("RegistrePass");
let RegistreName = document.getElementById("RegistreName");
let RegistreLName = document.getElementById("RegistreLName");
let ErrSectionRegistre = document.getElementById("ErrSectionRegistre");
let RegistreArea = document.getElementById("RegistreArea");
let LoginOK = document.getElementById("LoginOK");
let ErrSectionLogin = document.getElementById("ErrSectionLogin");
let LoginEmail = document.getElementById("LoginEmail");
let LoginPass = document.getElementById("LoginPass");
let LoginArea = document.getElementById("LoginArea");
let UserName = document.getElementById("UserName");
let NameUser = document.getElementById("NameUser");
let PhoneAdd = document.getElementById("PhoneAdd");
let InitialsUserAdd = document.getElementById("InitialsUserAdd");
let SubContainerSectionApp = document.getElementById("Sub-Container-SectionApp");
let ContainerRegistre = document.getElementById("Container-Registre");
let ContainerLogin = document.getElementById("Container-Login");
let AccederOption = document.getElementById("AccederOption");
let ExitOption = document.getElementById("ExitOption");
let RegistrarseOption = document.getElementById("RegistrarseOption");
let IntroGetSection = document.getElementById("IntroGetSection");
let RegistreBack = document.getElementById("RegistreBack");
let LoginBack = document.getElementById("LoginBack");
let AddSectionblock = document.getElementById("AddSectionblock");
let alertUserCreated = document.getElementById("alertUserCreated");
let IntroView = true;
let AlertNewUser = false;
let GetMessenger = () =>{
  if(IntroView === false){ GetArea.innerHTML = "";}
  firebase.database().ref().child('Messengers').on("child_added", snap =>{
    let GetMessagerSection = document.createElement("div");
    GetMessagerSection.className = "Get-Messager-Section";
    let GetMessagerPhone = document.createElement("div");
    GetMessagerPhone.className = "Get-Messager-Phone";  
    let GetMessagerText = document.createElement("p");
    GetMessagerText.className = "Get-Messager-Text";
  
    let GetMessagerName = document.createElement("h3");
    GetMessagerName.className = "Get-Messager-Name";
    GetMessagerText.appendChild(GetMessagerName);
      GetMessagerName.innerHTML = snap.val().Usuario;
    GetMessagerText.innerHTML +=  snap.val().Mensaje;
    GetMessagerPhone.innerHTML = snap.val().Inicial;
    GetMessagerPhone.style.background = snap.val().Fondo;
    GetMessagerSection.appendChild(GetMessagerPhone);
    GetMessagerSection.appendChild(GetMessagerText);
    GetArea.appendChild(GetMessagerSection);
  IntroView = false;
})
}
let AddMessenger = () =>{
  let TextVerifique = SectionMessager.value.split(" ");
  if(SectionMessager.value === ""){return}
  if(TextVerifique.length === 1 &&  SectionMessager.value.length > 40){alert("Error: No escriba palabras mayores a 40 caracteres"); return}
  let GetDataUser = JSON.parse(localStorage.getItem("User-Data"));
  firebase.database().ref().child('Messengers').push().set({
    Usuario: GetDataUser.Usuario,
    Mensaje: SectionMessager.value,
    Fondo: GetDataUser.Fondo,
    Inicial: GetDataUser.Inicial
});
SectionMessager.value = "";
GetMessenger();
}
let Start = () =>{
  let ContainerSectionApp = document.getElementById("Container-SectionApp"); 
  ContainerSectionApp.style.height = window.innerHeight + "px";
  let SubContainerSectionApp = document.getElementById("Sub-Container-SectionApp"); 
  SubContainerSectionApp.style.height = window.innerHeight + "px";
  let ContainerRegistreApp = document.getElementById("Container-Registre"); 
  ContainerRegistreApp.style.height = window.innerHeight + "px";
  let ContainerLoginApp = document.getElementById("Container-Login"); 
  ContainerLoginApp.style.height = window.innerHeight + "px";
if(localStorage.getItem("User-Data")){
  IntroGetSection.style.display = "none";
  let GetDataUser = JSON.parse(localStorage.getItem("User-Data"));
  UserName.innerHTML = GetDataUser.Usuario;
  NameUser.innerHTML = GetDataUser.Nombre + " " +  GetDataUser.Apellido;
  PhoneAdd.style.background = GetDataUser.Fondo;
  InitialsUserAdd.innerHTML = GetDataUser.Inicial;
  AccederOption.style.display = "none";
  RegistrarseOption.style.display = "none";
  ExitOption.style.display = "flex";
  AddSectionblock.style.display = "none";
}
 else{
  AccederOption.style.display = "flex";
  RegistrarseOption.style.display = "flex";
  ExitOption.style.display = "none";
  AddSectionblock.style.display = "flex";
  UserName.innerHTML = "";
  NameUser.innerHTML = "";
  InitialsUserAdd.innerHTML = "";
 } 
  GetMessenger();
}
let CreateUser = () =>{
  let ArrayColor = ['red', 'blue', 'green', 'yellow', 'orange'];
  let rand = Math.floor(Math.random()*ArrayColor.length);
  let rValue = ArrayColor[rand];
    if(RegistreEmail.value !== "" && RegistreUser.value.length >= 4 && RegistrePass.value.length >= 6 && RegistreName.value.length >= 3 && RegistreLName.value.length >= 4 ){
      RegistreOK.type = "button"; 
      firebase.auth().createUserWithEmailAndPassword(RegistreEmail.value, RegistrePass.value).then(() =>{
        firebase.database().ref().child('Usuarios').push().set({
          Email: RegistreEmail.value,
          Usuario:RegistreUser.value,
          Nombre: RegistreName.value,
          Apellido: RegistreLName.value,
          Fondo: rValue,
          Inicial: RegistreName.value.charAt(0).toUpperCase() + RegistreLName.value.charAt(0).toUpperCase()
      });
          RegistreEmail.value = "";
          RegistreUser.value = "";
          RegistreName.value = "";
          RegistreLName.value = "";
          RegistrePass.value = "";
          ContainerRegistre.style.display = "none";
          SubContainerSectionApp.style.display = "none";
          if(AlertNewUser === false){
            alertUserCreated.style.animation = "AlertNewUser2 3s linear";  
            AlertNewUser = true;
          }
          else{
            alertUserCreated.style.animation = "AlertNewUser 3s linear";
            AlertNewUser = false;
          }
      }).catch(()=>{
        ErrSectionRegistre.style.display = "flex";
        RegistreArea.style.height = "85%";
        RegistreOK.type = "submit";
      })
    }
}
let LoginUser = () =>{
  if(LoginEmail.value !== "" && LoginPass.value !== ""){
    LoginOK.type = "button";
    firebase.auth().signInWithEmailAndPassword(LoginEmail.value,LoginPass.value).then( () => {
      firebase.database().ref().child("Usuarios").orderByChild("Email").equalTo(LoginEmail.value).on("child_added", User =>{   
       let UserData = {
        Usuario: User.val().Usuario,
        Nombre: User.val().Nombre,
        Apellido: User.val().Apellido,
        Fondo: User.val().Fondo,
        Inicial: User.val().Inicial
       }
       localStorage.setItem("User-Data", JSON.stringify(UserData));
       let GetDataUser = JSON.parse(localStorage.getItem("User-Data"));
       UserName.innerHTML = GetDataUser.Usuario;
       NameUser.innerHTML = GetDataUser.Nombre + " " +  GetDataUser.Apellido;
       PhoneAdd.style.background = GetDataUser.Fondo;
       InitialsUserAdd.innerHTML = GetDataUser.Inicial;
       SubContainerSectionApp.style.display = "none";
       ContainerLogin.style.display = "none";
       AccederOption.style.display = "none";
       RegistrarseOption.style.display = "none";
       LoginEmail.value = "";  
       LoginPass.value = "";
       ExitOption.style.display = "flex";
       AddSectionblock.style.display = "none";
})
    }).catch(() => {
      ErrSectionLogin.style.display = "flex";
      LoginArea.style.height = "52%";
      LoginOK.type = "submit";
    });}
}
Start();
SectionMessagerbtn.onclick = () =>{
  AddMessenger();
}
RegistreOK.onclick = () =>{
  CreateUser();
}
LoginOK.onclick = () =>{
  LoginUser();
}
AccederOption.onclick = () =>{
  SubContainerSectionApp.style.display = "flex";
  ContainerLogin.style.display = "flex";
  LoginArea.style.animation = "Transition 0.5s linear";
  LoginEmail.focus();
}
LoginBack.onclick = () =>{
  SubContainerSectionApp.style.display = "none";
  ContainerLogin.style.display = "none";
  LoginEmail.value = "";  
  LoginPass.value = "";
  ErrSectionLogin.style.display = "none";
  LoginArea.style.height = "47%";
}
RegistrarseOption.onclick = () =>{
  SubContainerSectionApp.style.display = "flex";
  ContainerRegistre.style.display = "flex";
  RegistreArea.style.animation = "Transition 0.6s linear";
 RegistreEmail.focus();
}
RegistreBack.onclick = () =>{
  SubContainerSectionApp.style.display = "none";
  ContainerRegistre.style.display = "none";
  RegistreEmail.value = "";
  RegistreUser.value = "";
  RegistreName.value = "";
  RegistreLName.value = "";
  RegistrePass.value = "";
  ErrSectionRegistre.style.display = "none";
  RegistreArea.style.height = "80%";
}
ExitOption.onclick = () =>{
  firebase.auth().signOut();
  AccederOption.style.display = "flex";
  RegistrarseOption.style.display = "flex";
  ExitOption.style.display = "none";
  AddSectionblock.style.display = "flex";
  localStorage.removeItem("User-Data");
  UserName.innerHTML = "";
  NameUser.innerHTML = "";
  PhoneAdd.style.background = "red";
  InitialsUserAdd.innerHTML = "";
  SectionMessager.value = "";
}
RegistreEmail.onfocus = () =>{
  ErrSectionRegistre.style.display = "none";
  RegistreArea.style.height = "80%";
}
LoginEmail.onfocus = () =>{
  ErrSectionLogin.style.display = "none";
  LoginArea.style.height = "47%";
}
LoginPass.onfocus = () =>{
  ErrSectionLogin.style.display = "none";
  LoginArea.style.height = "47%";
}
SectionMessager.onfocus = () =>{
  SectionMessager.style.border = "2px rgb(12, 12, 138) solid";
}
SectionMessager.onblur = () =>{
  SectionMessager.style.border = "2px #f2f2f2 solid";
}
setInterval(()=>{
  if(SectionMessager.value === ""){
    SectionMessagerbtn.style.opacity = "0.5";
    SectionMessagerbtn.style.cursor = "auto";
  }
  else{
    SectionMessagerbtn.style.opacity = "1";

    SectionMessagerbtn.style.cursor = "pointer";
  }
},100);



