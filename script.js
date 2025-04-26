$(document).ready(function(){

    var state=true;
    var counter = 0;
    var vraicounter = 0;
    var counterListener=1;

    // Tableau des sections avec leurs paramètres
    const sections = [
        { id: "mons", bg: "img/mons.jpg" },
        { id: "carimersive", bg: "img/cari.jpg" },
        { id: "windingpath", bg: "img/winding.png"},
        { id: "AI", bg: "img/ai.jpg"},
        { id: "vdi", bg: "img/tf1.jpg" },
        { id: "creathon", bg: "img/creathon.jpg" },
        { id: "other", bg: "projects/circuit.jpg" }
    ];



    function mobilecheck() {
        if( navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
            ){
               return true;
             }
            else {
               return false;
             }
    };

    $("#loader").delay(4500).animate({top:"-100vh"},1500,function(){



        $("*").css({overflow:"visible"});
    
        $('#loader').css('display','none');
    
    
    
    });

    document.addEventListener("wheel", function(event) {
        if (state == true) {
            clearInterval(autoNavigateInterval)
            if (event.deltaY > 0) {
                // Défilement vers le bas
                if (vraicounter < sections.length) {
                    const currentSection = sections[vraicounter];
                    const nextSection = sections[(vraicounter + 1) % sections.length];
    
                    // Animation de déploiement de la section
                    $("#" + currentSection.id).toggle("drop", { direction: "up", duration: 100 }, function () {
                        $("#" + nextSection.id).toggle("drop", { direction: "down", duration: 200 });
                        $("#" + currentSection.id).css('display', 'none');
                    });
    
                    // Mise à jour du fond d'écran
                    $("#background").fadeOut(0, function () {
                        $("#background").css("background-image", "url('" + nextSection.bg + "')");
                        $("#background").fadeIn(100);
                    });
    
                    // Mise à jour de l'état
                    state = false;
                    setTimeout(function () {
                        state = true;
                    }, 500);
    
                    // Incrémentation du compteur
                    counter++;
                    vraicounter = counter % sections.length;
                }
            } else if (event.deltaY < 0) {
                // Défilement vers le haut
                if (vraicounter >= 0) {
                    const currentSection = sections[vraicounter];
                    const prevSection = sections[(vraicounter - 1 + sections.length) % sections.length];
    
                    // Animation de déploiement de la section précédente
                    $("#" + currentSection.id).toggle("drop", { direction: "down", duration: 100 }, function () {
                        $("#" + prevSection.id).toggle("drop", { direction: "up", duration: 200 });
                        $("#" + currentSection.id).css('display', 'none');
                    });
    
                    // Mise à jour du fond d'écran
                    $("#background").fadeOut(0, function () {
                        $("#background").css("background-image", "url('" + prevSection.bg + "')");
                        $("#background").fadeIn(100);
                    });
    
                    // Mise à jour de l'état
                    state = false;
                    setTimeout(function () {
                        state = true;
                    }, 500);
    
                    // Décrémentation du compteur
                    counter--;
                    vraicounter = (counter + sections.length) % sections.length;
                }
            }
        }
    });

    // Lancer la navigation automatique toutes les 5 secondes
    if(state=true){
        autoNavigateInterval = setInterval(autoNavigate, 5000); 
    }
    

    

    $("#menu").on("click",function(){
        $('#deployedmenu').toggle("blind",{direction : "up"});
    })

    $("#deployedmenu span").on("click",function(){
        $('#deployedmenu').toggle("blind",{direction : "up"});
    });
        

    // // gestion de l'orientation
    // if(mobilecheck()==true){
    //     $("#background").on("click",function(){
    //         if(state==true){

               
    //             if(vraicounter==0 && state==true){
    //                 $("#AI").css("display","block");
    //                 $("#vdi").css("display","none");
    //             }
    //            if(vraicounter==1 && state==true){
    //                state = false;
    //                $("#other").toggle("drop",{direction : "up", duration : 100},function(){
    //                    $("#AI").toggle("drop",{direction : "down", duration : 200}, function(){
    //                    });
                       
    //                });
                   
    //                $("#background").fadeOut(100,function(){
    //                 $("#background").css("background-image","url('img/AI.jpg')");
    //                 $("#background").fadeIn(100);
    //             });
        
    //            };
                   
               
        
    //            if(vraicounter==2 && state==true){
    //                state = false;
    //                $("#AI").toggle("drop",{direction : "up", duration : 100},function(){
    //                    $("#vdi").toggle("drop",{direction : "down", duration : 200}, function(){
                           
    //                    });
                       
    //                });
                   
    //                $("#background").fadeOut(0,function(){
    //                     $("#background").css("background-image","url('img/tf1.jpg')");
    //                     $("#background").fadeIn(100);
    //                });
                   
    //            }
        
    //            if(vraicounter==3 && state==true){
    //             state = false;
    //             $("#vdi").toggle("drop",{direction : "up", duration : 100},function(){
    //                 $("#carimersive").toggle("drop",{direction : "down", duration : 200}, function(){
                        
    //                 });
                    
    //             });
        
    //             $("#background").fadeOut(0,function(){
    //                 $("#background").css("background-image","url('img/carimersive.png')");
    //                 $("#background").fadeIn(100);
    //            });
    //         }
        
    //            if(vraicounter==4 && state==true){
    //             state = false;
    //             $("#carimersive").toggle("drop",{direction : "up", duration : 100},function(){
    //                 $("#creathon").toggle("drop",{direction : "down", duration : 200}, function(){
                        
    //                 });
                    
    //             });
        
    //             $("#background").fadeOut(0,function(){
    //                 $("#background").css("background-image","url('img/creathon.jpg')");
    //                 $("#background").fadeIn(100);
    //            });
    //         }
        
    //            if(vraicounter==5 && state==true){
    //             state = false;
    //             $("#creathon").toggle("drop",{direction : "up", duration : 100},function(){
    //                 $("#other").toggle("drop",{direction : "down", duration : 200}, function(){
                        
    //                 });
                    
    //             });
        
    //             $("#background").fadeOut(0,function(){
    //                 $("#background").css("background-image","url('projects/circuit.jpg')");
    //                 $("#background").fadeIn(100);
    //            });
    //         }
                
    //             //console.log(counter);
    //             counter++;
    //             vraicounter = (counter%5)+1;
    //             console.log(state);
        
    //            setTimeout(function(){
    //             state=true;
    //            },500);
    //         };
        
            
    //     });
    //}

       // Fonction de navigation automatique
function autoNavigate() {

        const currentSection = sections[vraicounter];
        const nextSection = sections[(vraicounter + 1) % sections.length];

        // Animation de déploiement de la section
        $("#" + currentSection.id).toggle("drop", { direction: "up", duration: 100 }, function () {
            $("#" + nextSection.id).toggle("drop", { direction: "down", duration: 200 });
            $("#" + currentSection.id).css('display', 'none');
        });

        // Mise à jour du fond d'écran
        $("#background").fadeOut(0, function () {
            $("#background").css("background-image", "url('" + nextSection.bg + "')");
            $("#background").fadeIn(100);
        });


    // Incrémentation du compteur
    counter++;
    vraicounter = counter % sections.length;
}

    
    
})

