

const container = document.getElementById('container');
const overlayCon = document.getElementById('overlayCon');
const overlayBtn = document.getElementById('overlayBtn');

overlayBtn.addEventListener('click', ()=>{
    container.classList.toggle('right-panel-active');

    overlayBtn.classList.remove('btnScaled');
    window.requestAnimationFrame( ()=>{
        overlayBtn.classList.add('btnScaled');
    })
})

// Firebase

const firebaseConfig = {
    apiKey: "AIzaSyDbzXqSLZL458JEJedQZS9rSfjolMYkxnc",
    authDomain: "linen-arch-406416.firebaseapp.com",
    projectId: "linen-arch-406416",
    storageBucket: "linen-arch-406416.appspot.com",
    messagingSenderId: "325078163942",
    appId: "1:325078163942:web:c8c7a51475cdcdfdf4f627"
};    

function cadastrar() {
firebase.auth().createUserWithEmailAndPassword(document.getElementById("emaill").value, document.getElementById("pass").value)
.then(function() {
alert("Cadastro realizado com sucesso!");
})
.catch(function(error) {
console.error("Falha ao cadastrar: ", error);
alert("Falha ao cadastrar: " + error.message);
});
}



