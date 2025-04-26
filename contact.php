<?php

session_start();



?>



<!doctype html>

<html>

<head>

<meta charset="UTF-8">

<meta http-equiv="X-UA-Compatible" content="IE=edge">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<meta name="description" content="Portfolio of Etienne Julien, a final-year engineering student at INSA Hauts-de-France, specializing in Audiovisual and Multimedia. This portfolio contains detailed information about me, along with a variety of projects and productions I have completed during my studies in DUT MMI and engineering school. The site includes sections on my background, skills, education, and creations. You can also contact me by filling out the form on the contact page. This portfolio has been online since November 2021, built using HTML5, CSS3, JavaScript, jQuery, and PHP, and is updated regularly.">

<meta name="keywords" content="Etienne Julien, Etienne, Julien, Portfolio, INSA, National Institute of Applied Sciences, Audiovisual, Mmi, multimedia and internet professions, DUT, diplôme universitaire technologique, University of Rouen, engineering, software engineering, audiovisual system, web development, graphic design, graphic artist, audiovisual, project management, 3d, modeling">

<meta http-equiv="content-language" content="fr">

<title>Etienne JULIEN - Contact</title>

<link href="bootstrap-4.6.0-dist/css/bootstrap.css" rel="stylesheet">

<link rel="stylesheet" href="style contact.css" type="text/css" media="all">

<link rel="shortcut icon" type="image/png" href="img/icon.png">




    <!-- pour les icons (vu sur w3school)-->



    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">





</head>





<body>



    <header>



        <nav>





            <a id="maison" href="index.html">

            <div>

            <span class="material-icons">

                home

            </span>  

            </div>



            </a>

            

            <div>

                <img src="img/logo typo épuré blanc.png"></p>



            </div>





             <div id="contenumenu">



                <a href="index.html">

                    <li>

                        HOME

                    </li>

                   </a>



                 <a href="projects.html">

                    <li>

                        PROJECTS

                    </li>

                   </a>

    

            </div>

    

        </nav>



    <section>

    <h1>



        Contact : 



    </h1>




    </section>

</header>





<main>

    <?php

if (isset($_SESSION['verif'])) {
    
    if(isset($_SESSION['marchepas'])){

        echo("
        
        <div>
        
        <h2> A problem has occurred while sending your message! </h2>

        <p > Please try again or contact me via the information below. </p>
        
        </div>
        ");

        session_destroy();


    }
    else{

        echo("
        
        <div>
        
        <h2> Your message has been sent! </h2>

        <p> Thanks ".$_SESSION['prenom']." ".$_SESSION['nom'].". I'll get back to you as soon as possible. </p>
        
        </div>
        
        ");

        session_destroy();

    }



}


    ?>





    <section>



        <article id="formulaire">





            <form method="POST" action="formulaire.php">

                <input type="text" placeholder="Name"  id="nom" autofocus="autofocus" maxlength="20" name="nom" required="required">



                <input type="text" placeholder="Surname"  id="prenom" autofocus="autofocus" maxlength="20" name="prenom" required="required">

                

                <input type="email" placeholder="E-mail" id="mail" autofocus="autofocus" maxlength="32" name="mail" required="required">



                <input type="text" placeholder="Name of your company (not required)"  id="entreprise" autofocus="autofocus" maxlength="30" name="entreprise">



                <textarea placeholder="Message..." id="message" autofocus="autofocus" cols="30" rows="10" name="message" required="required"></textarea>

                <button type="submit" name="submit" id="submit" autofocus="autofocus">SUBMIT</button>

            </form>



        </article>







        <article>

            



            <h2>Informations :</h2>

            <p>Mail : etienne.julien@uphf.fr</p>

            <p>Phone number : +33 7 80 55 61 55</p>

            <p>LinkedIn : <a href="https://www.linkedin.com/in/etiennejulien" target="_blank"> www.linkedin.com/in/etiennejulien </a></p>



            

        </article>









    </section>

















</main>





<!-- FOOTER -->
<footer>

    <ul>

        <li>

            <a href="https://www.instagram.com/etiennejulienphotography/?hl=fr" target="_blank"> <img src="img/FOOTER/instagram1.png" title="instagram" alt="instagram e.t jul"> </img>

            </a>

        </li>

        <li>

            <a href="https://www.linkedin.com/in/etienne-julien-728a951bb/" target="_blank"> <img src="img/FOOTER/linkedin.png" title="linkedin" alt="linkedin etienne julien portfolio"> </img>

            </a>

        </li>

        <li>

            <a href="mailto:etienne.etiennejulien@gmail.com" target="_blank"> <img src="img/FOOTER/mail1.png" title="mail" alt="mail etienne.etiennejulien@gmail.com"> </img>

            </a>

        </li>



    </ul>



        <p> © Copyright 2021-2024 <span id='·'>·</span> <span>Étienne Julien</span> </p>

</footer>






<script

			  src="https://code.jquery.com/jquery-3.6.0.js"

			  integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="

			  crossorigin="anonymous"></script>



              <script

			  src="https://code.jquery.com/ui/1.13.0/jquery-ui.js"

			  integrity="sha256-xH4q8N0pEzrZMaRmd7gQVcTZiFei+HfRTBPJ1OGXC0k="

			  crossorigin="anonymous"></script>   



<script src="contact.js">









</script>













</body>