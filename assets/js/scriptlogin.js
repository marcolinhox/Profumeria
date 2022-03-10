function checkdati(){                                                                      //funzione checkdati scatenata dopo il click//
    let username = document.getElementById("username").value;                                 
    let password = document.getElementById("password").value;
    
    
    if ( password == "" || username == ""){                                                       //se password e username sono vuoti allora stampa nell'html un errore //
        document.getElementById("error").innerHTML = "Devi inserire entrambe le credenziali";
        return false;                                                                                      
      }
      
    
      if ( username != "" && password != ""){                                                          
    alert ("Accesso in corso");                                                                                      //allert di accesso in corso dopo il login con operatore and//
    window.location = "contact.html";                                                          //ti riporta alla finestra della dei contatti//
    return false;                                                                                               //l'esecuzione viene interrotta//
    
    }
    }
    

    
   
   
   
   
    