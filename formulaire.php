<?php

session_start();

    //On récupère les informations inscrit dans le formulaire de contact.html

    	$prenom=htmlspecialchars($_POST["prenom"]);;

        $nom=htmlspecialchars($_POST["nom"]);;

        $mail=htmlspecialchars($_POST["mail"]);;

        $message=htmlspecialchars($_POST["message"]);

        $entreprise=htmlspecialchars($_POST["entreprise"]);





        $_SESSION['mail']=$mail;

        $_SESSION['nom']=$nom;

        $_SESSION['prenom']=$prenom;

        $_SESSION['entreprise']=$entreprise;

        $_SESSION['verif']=1;





    //pour les informations du mail



        $headers = 'From: '.$mail.'' . "\r\n" .

        'Reply-To: '.$mail."'" . "\r\n" .

        'X-Mailer: PHP/' . phpversion();



        // echo("Merci ".$prenom." ".$nom. "Ton adresse e mail est : ".$mail);



    

    // On envoit ces informations dans mon adresse mail personnel



        // Dans le cas où les lignes comportent plus de 70 caractères, je les coupes en utilisant wordwrap

        $message = wordwrap($message, 70, "\r\n");



        // Envoi du mail : mail('mon mail','Mon sujet','Le message') (l'utilisateur est forcément renvoyé sur la page : contact.html)



        if(mail('etienne.julien@uphf.fr', 'Portfolio formulaire : '.$prenom." ".$nom." ".$entreprise." ".$mail, $message,$headers)){

            header("LOCATION:contact.php");

        }

        else{

            $_SESSION['marchepas']=1;

            header("LOCATION:contact.php");

        }

    ?>