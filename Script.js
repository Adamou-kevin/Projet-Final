document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var password = document.getElementById("password").value;
    
    if (nom === "" || prenom === "" || password === "") {
      displayAlert("Veuillez remplir tous les champs.", "alert");
      return;
    }
    
    // Validation réussie
    displayAlert("Connexion réussie pour " + prenom + " " + nom + " !", "success");
    
    // Réinitialiser le formulaire
    document.getElementById("login-form").reset();
  });
  
  document.getElementById("forgot-password").addEventListener("click", function(event) {
    event.preventDefault();
    displayAlert("Veuillez contacter l'administrateur pour réinitialiser votre mot de passe.", "alert");
  });
  
  function displayAlert(message, className) {
    var alertDiv = document.createElement("div");
    alertDiv.className = "alert " + className;
    alertDiv.appendChild(document.createTextNode(message));
    
    var container = document.querySelector(".containersss");
    var form = document.querySelector("form");
    container.insertBefore(alertDiv, form);
    
    setTimeout(function() {
      alertDiv.remove();
    }, 3000);
  }
  document.getElementById("forgot-password").addEventListener("click", function(event) {
    event.preventDefault();
    
    // Afficher une boîte de dialogue de confirmation
    var confirmation = confirm("Êtes-vous sûr de vouloir réinitialiser votre mot de passe ?");
    
    if (confirmation) {
      displayAlert("Un e-mail de réinitialisation du mot de passe a été envoyé.", "success");
    }
  });
  