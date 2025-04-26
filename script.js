$(document).ready(function(){

    var state=true;
    var counter = 0;
    var vraicounter = 0;
    var counterListener=1;


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

    document.addEventListener("wheel",  function(event) {
        // if(document.getElementById('vdi').style.display)
        if(state==true){

        if(event.deltaY>0){
        if(vraicounter==0 && state==true){
            $("#AI").css("display","block");
            $("#vdi").css("display","none");
        }
       if(vraicounter==1 && state==true){
           state = false;
           $("#other").toggle("drop",{direction : "up", duration : 100},function(){
               $("#AI").toggle("drop",{direction : "down", duration : 200}, function(){
               });
               
           });
           
           $("#background").fadeOut(100,function(){
            $("#background").css("background-image","url('img/ai.jpg')");
            $("#background").fadeIn(100);
        });

       };
           
       

       if(vraicounter==2 && state==true){
           state = false;
           $("#AI").toggle("drop",{direction : "up", duration : 100},function(){
               $("#vdi").toggle("drop",{direction : "down", duration : 200}, function(){
                   
               });
               
           });
           
           $("#background").fadeOut(0,function(){
                $("#background").css("background-image","url('img/tf1.jpg')");
                $("#background").fadeIn(100);
           });
           
       }

       if(vraicounter==3 && state==true){
        state = false;
        $("#vdi").toggle("drop",{direction : "up", duration : 100},function(){
            $("#carimersive").toggle("drop",{direction : "down", duration : 200}, function(){
                
            });
            
        });

        $("#background").fadeOut(0,function(){
            $("#background").css("background-image","url('img/carimersive.png')");
            $("#background").fadeIn(100);
       });
    }

       if(vraicounter==4 && state==true){
        state = false;
        $("#carimersive").toggle("drop",{direction : "up", duration : 100},function(){
            $("#creathon").toggle("drop",{direction : "down", duration : 200}, function(){
                
            });
            
        });

        $("#background").fadeOut(0,function(){
            $("#background").css("background-image","url('img/creathon.jpg')");
            $("#background").fadeIn(100);
       });
    }

       if(vraicounter==5 && state==true){
        state = false;
        $("#creathon").toggle("drop",{direction : "up", duration : 100},function(){
            $("#other").toggle("drop",{direction : "down", duration : 200}, function(){
                
            });
            
        });

        $("#background").fadeOut(0,function(){
            $("#background").css("background-image","url('projects/circuit.jpg')");
            $("#background").fadeIn(100);
       });
    }
        
        //console.log(counter);
        counter++;
        vraicounter = (counter%5)+1;
        console.log(state);

       setTimeout(function(){
        state=true;
       },500);
    };

    }
    else{

    }
        
        
    });

    

    

    $("#menu").on("click",function(){
        $('#deployedmenu').toggle("blind",{direction : "up"});
    })

    $("#deployedmenu span").on("click",function(){
        $('#deployedmenu').toggle("blind",{direction : "up"});
    });
        

    // gestion de l'orientation
    if(mobilecheck()==true){
        $("#background").on("click",function(){
            if(state==true){

               
                if(vraicounter==0 && state==true){
                    $("#AI").css("display","block");
                    $("#vdi").css("display","none");
                }
               if(vraicounter==1 && state==true){
                   state = false;
                   $("#other").toggle("drop",{direction : "up", duration : 100},function(){
                       $("#AI").toggle("drop",{direction : "down", duration : 200}, function(){
                       });
                       
                   });
                   
                   $("#background").fadeOut(100,function(){
                    $("#background").css("background-image","url('img/AI.jpg')");
                    $("#background").fadeIn(100);
                });
        
               };
                   
               
        
               if(vraicounter==2 && state==true){
                   state = false;
                   $("#AI").toggle("drop",{direction : "up", duration : 100},function(){
                       $("#vdi").toggle("drop",{direction : "down", duration : 200}, function(){
                           
                       });
                       
                   });
                   
                   $("#background").fadeOut(0,function(){
                        $("#background").css("background-image","url('img/tf1.jpg')");
                        $("#background").fadeIn(100);
                   });
                   
               }
        
               if(vraicounter==3 && state==true){
                state = false;
                $("#vdi").toggle("drop",{direction : "up", duration : 100},function(){
                    $("#carimersive").toggle("drop",{direction : "down", duration : 200}, function(){
                        
                    });
                    
                });
        
                $("#background").fadeOut(0,function(){
                    $("#background").css("background-image","url('img/carimersive.png')");
                    $("#background").fadeIn(100);
               });
            }
        
               if(vraicounter==4 && state==true){
                state = false;
                $("#carimersive").toggle("drop",{direction : "up", duration : 100},function(){
                    $("#creathon").toggle("drop",{direction : "down", duration : 200}, function(){
                        
                    });
                    
                });
        
                $("#background").fadeOut(0,function(){
                    $("#background").css("background-image","url('img/creathon.jpg')");
                    $("#background").fadeIn(100);
               });
            }
        
               if(vraicounter==5 && state==true){
                state = false;
                $("#creathon").toggle("drop",{direction : "up", duration : 100},function(){
                    $("#other").toggle("drop",{direction : "down", duration : 200}, function(){
                        
                    });
                    
                });
        
                $("#background").fadeOut(0,function(){
                    $("#background").css("background-image","url('projects/circuit.jpg')");
                    $("#background").fadeIn(100);
               });
            }
                
                //console.log(counter);
                counter++;
                vraicounter = (counter%5)+1;
                console.log(state);
        
               setTimeout(function(){
                state=true;
               },500);
            };
        
            
        });

        setInterval(function(){
            if(vraicounter==0){
                $("#AI").css("display","block");
                $("#vdi").css("display","none");
            }
           if(vraicounter==1){
   
               $("#other").toggle("drop",{direction : "up", duration : 100},function(){
                   $("#AI").toggle("drop",{direction : "down", duration : 200}, function(){
                   });
                   
               });
               
               $("#background").fadeOut(100,function(){
                $("#background").css("background-image","url('img/AI.jpg')");
                $("#background").fadeIn(100);
            });
    
           };
               
           
    
           if(vraicounter==2){
         
               $("#AI").toggle("drop",{direction : "up", duration : 100},function(){
                   $("#vdi").toggle("drop",{direction : "down", duration : 200}, function(){
                       
                   });
                   
               });
               
               $("#background").fadeOut(0,function(){
                    $("#background").css("background-image","url('img/tf1.jpg')");
                    $("#background").fadeIn(100);
               });
               
           }
    
           if(vraicounter==3){
   
            $("#vdi").toggle("drop",{direction : "up", duration : 100},function(){
                $("#carimersive").toggle("drop",{direction : "down", duration : 200}, function(){
                    
                });
                
            });
    
            $("#background").fadeOut(0,function(){
                $("#background").css("background-image","url('img/carimersive.png')");
                $("#background").fadeIn(100);
           });
        }
    
           if(vraicounter==4){

            $("#carimersive").toggle("drop",{direction : "up", duration : 100},function(){
                $("#creathon").toggle("drop",{direction : "down", duration : 200}, function(){
                    
                });
                
            });
    
            $("#background").fadeOut(0,function(){
                $("#background").css("background-image","url('img/creathon.jpg')");
                $("#background").fadeIn(100);
           });
        }
    
           if(vraicounter==5){
            state = false;
            $("#creathon").toggle("drop",{direction : "up", duration : 100},function(){
                $("#other").toggle("drop",{direction : "down", duration : 200}, function(){
                    
                });
                
            });
    
            $("#background").fadeOut(0,function(){
                $("#background").css("background-image","url('projects/circuit.jpg')");
                $("#background").fadeIn(100);
           });
        }

           counter++;
            vraicounter = (counter%5)+1;
        


        }, 5000);
    }
    
    
})

