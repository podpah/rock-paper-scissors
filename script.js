// Basic needed variables, array with options, counters
let rps = ["Rock", "Paper", "Scissors"]; 
let usc = 0; 
let bot = 0;
let rand = 0;

// If the user wins, the counter image turn red + the counter is updated here
userw = () => {
    uimg.src = "imgs/redplayer.png";  
    use.style.color= "red"; 
    uscore.style.color = "red";
    bscore.src = "imgs/robot.png"; 
    rob2.style.color = "black"; 
    rob.style.color="black";
    usc++;
}

// Same for the program with blue instead
botw = () => {
    uimg.src = "imgs/player.png";  
    use.style.color= "black"; 
    uscore.style.color = "black";
    bscore.src = "imgs/bluerobot.png"; 
    rob2.style.color = "#4d8bf4"; 
    rob.style.color="#4d8bf4";
    bot++;
}

// The main function with rolling

bat = (str) => {
    rand = rps[Math.floor(Math.random() * rps.length)]; 
    while (rand == str) {
        rand = rps[Math.floor(Math.random() * rps.length)]  // This prevents you from drawing
    };
    // Win/loss conditions
    if (rand == "Rock") {
        if (str == "Paper") {
            userw();
            out.value="Paper wraps rock, you've won"
        } 
        else {
            botw();
            out.value="Rock breaks scissors, you've lost"
        }
    }
    else if (rand == "Paper") {
        if (str == "Scissors") {
            userw();
            out.value="Scissors cut paper, you've won"
        } 
        else {
            botw();
            out.value="Paper wraps rock, you've lost"
        }
    }
    else {
        if (str == "Rock") {
            userw();
            out.value="Rock breaks scissors, you've won"
        } 
        else {
            botw();
            out.value="Scissors cut paper, you've lost"
        }
    }

    rob.innerHTML = bot; use.innerHTML = usc;

    //Animation trigger
    if ((rand == "Scissors" && str == "Paper") || (str == "Scissors" && rand == "Paper")) {
        scicut()
    }
    else if ((rand == "Scissors" && str == "Rock") || (str == "Scissors" && rand == "Rock")) {
        rocpunch()
    }
    else  {
        papslap()
    };
    
}

// Coloring functions
rrock = () => {
    roc.src = "imgs/redrock.png" ; 
    sci.src = "imgs/Scissors.png" ; 
    pap.src = "imgs/Paper.png" ; 
    ro.style.color = "red" ; 
    sc.style.color = "black" ; 
    pa.style.color = "black";
    if(rand == "Paper" ) {
        pap.src = "imgs/bluepaper.png" ; 
        pa.style.color = "#4d8bf4"
    } 
    else if (rand== "Scissors") {
        sci.src = "imgs/bluescissors.png" ;  
        sc.style.color = "#4d8bf4"
    }
}
rpap = () => {
    pap.src = "imgs/redpaper.png" ;
    sci.src = "imgs/Scissors.png" ; 
    roc.src = "imgs/rock.png" ; 
    pa.style.color = "red" ; 
    ro.style.color = "black" ; 
    sc.style.color = "black"
    if (rand== "Scissors") {
        sci.src = "imgs/bluescissors.png" ;  
        sc.style.color = "#4d8bf4"
    } 
    else if (rand =="Rock") {
        roc.src = "imgs/bluerock.png" ;  
        ro.style.color = "#4d8bf4"
    }
}
rsci = () => {
    sci.src = "imgs/redscissors.png" ; 
    roc.src = "imgs/rock.png" ; 
    pap.src = "imgs/Paper.png" ; 
    pa.style.color = "black" ; 
    ro.style.color = "black" ; 
    sc.style.color = "red"
    if (rand =="Rock") {
        roc.src = "imgs/bluerock.png" ;  
        ro.style.color = "#4d8bf4"
    } 
    else if (rand == "Paper" ) {
        pap.src = "imgs/bluepaper.png" ;  
        pa.style.color = "#4d8bf4"
    }
}

// Animation functions
papslap = () => {
    pap.style.setProperty("animation" , "test3 1s linear alternate")
    setTimeout(function(){pap.style.setProperty("animation","0")},1000)     // These wait until the animation is done and resets the value so it can be ran again
}

rocpunch = () => {
    roc.style.setProperty("animation" , "test2 1s linear alternate")
    setTimeout(function(){roc.style.setProperty("animation","0")},1000)
}

scicut = () => {
    sci.style.setProperty("animation" , "test 1s linear alternate")
    setTimeout(function(){sci.style.setProperty("animation","0")},1000)
}
