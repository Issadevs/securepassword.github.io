console.log("Je suis la console !");

function bienvenu() {
    alert("Bienvenue ! Vous avez cliqué sur le bouton Ajouter.");
    setTimeout(function() {
        alert("Fenêtre pop-up 1 seconde après la fermeture");
    }, 100);
    
    setInterval(function() {
        alert("Fenêtre pop-up toutes les 5 secondes");
    }, 5000);
}

function verifierMotDePasse(chaine, utiliserChiffre, utiliserMajuscule, utiliserMinuscule, utiliserCaractereSpecial) {
    if (utiliserChiffre) {
      var chiffreTrouve = false;
      for (let i = 0; i < chaine.length; i++) {
        if (chaine[i] >= '0' && chaine[i] <= '9') {
          chiffreTrouve = true;
          break;
        }
      }
      if (!chiffreTrouve) {
        return false;
      }
    }
  
    if (utiliserMajuscule) {
      var majusculeTrouvee = false;
      for (let i = 0; i < chaine.length; i++) {
        if (chaine[i] >= 'A' && chaine[i] <= 'Z') {
          majusculeTrouvee = true;
          break;
        }
      }
      if (!majusculeTrouvee) {
        return false;
      }
    }
  
    if (utiliserMinuscule) {
      var minusculeTrouvee = false;
      for (let i = 0; i < chaine.length; i++) {
        if (chaine[i] >= 'a' && chaine[i] <= 'z') {
          minusculeTrouvee = true;
          break;
        }
      }
      if (!minusculeTrouvee) {
        return false;
      }
    }
  
    if (utiliserCaractereSpecial) {
      var caractereSpecialTrouve = false;
      const caracteresSpeciaux = "%!&*^()#$:";
      for (let i = 0; i < chaine.length; i++) {
        if (caracteresSpeciaux.includes(chaine[i])) {
          caractereSpecialTrouve = true;
          break;
        }
      }
      if (!caractereSpecialTrouve) {
        return false;
      }
    }
  
    return true;
  }

function generer() {
    var minuscule = "abcdefghijklmnopqrstuvwxyz";
    var majuscule = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var chiffre = "0123456789";
    var carspecial = "%!&*^()#$:";
    var monformulaire = document.forms.ajoutPWD;
    var nombrecar = monformulaire.nombrecar.value;
    var password = "";
    var listecar = "";
    var utiliserChiffre = false;
    var utiliserMajuscule = false;
    var utiliserMinuscule = false;
    var utiliserCaractereSpecial = false;
    
    if ((monformulaire.minuscule.checked || monformulaire.majuscule.checked || monformulaire.chiffre.checked || monformulaire.symbole.checked)&& (monformulaire.date.value != "" && monformulaire.categorie.value != "" && monformulaire.site.value != "")) {
        if(monformulaire.elements['minuscule'].checked){
            listecar+=minuscule;
            utiliserMinuscule = true;
        }
        if(monformulaire.elements["majuscule"].checked){
            listecar+=majuscule;
            utiliserMajuscule = true;
        }
        if(monformulaire.elements["chiffre"].checked){
            listecar+=chiffre;
            utiliserChiffre = true;
        }
        if(monformulaire.elements["symbole"].checked){
            listecar+=carspecial;
            utiliserCaractereSpecial = true;
        }
        
        for(var i = 1; i <= monformulaire.elements["nombrecar"].value; i++) {
            var randomNumber = Math.floor(Math.random() * listecar.length);
            password += listecar.substring(randomNumber, randomNumber + 1);
        }
        console.log(password);
        if(verifierMotDePasse(password, utiliserChiffre, utiliserMajuscule, utiliserMinuscule, utiliserCaractereSpecial))
        {
            var newLine = document.createElement("tr");
    
            var col1 = document.createElement("td");
            col1.textContent = nombrecar;
            newLine.appendChild(col1);
        
            var col2 = document.createElement("td");
            col2.textContent = monformulaire.date.value;
            newLine.appendChild(col2);
        
            var col3 = document.createElement("td");
            col3.textContent = monformulaire.categorie.value;
            newLine.appendChild(col3);
        
            var col4 = document.createElement("td");
            col4.textContent = monformulaire.site.value;
            newLine.appendChild(col4);
        
            var col5 = document.createElement("td");
            col5.textContent = password;
            newLine.appendChild(col5);
        
            var tableau = document.getElementById("tableau");
            tableau.appendChild(newLine);
        }
        else{
            generer();
        }
       
    }

    
}