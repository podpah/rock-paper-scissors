/*let rps = ["Rock", "Paper", "Scissors"]; let usc = 0; let bot = 0;
let rand = 0;

userw = () => {
    uimg.src = "imgs/redplayer.png";  use.style.color= "red"; uscore.style.color = "red";
    bscore.src = "imgs/robot.png"; rob2.style.color = "black"; rob.style.color="black";
    usc++;
}

botw = () => {
    uimg.src = "imgs/player.png";  use.style.color= "black"; uscore.style.color = "black";
    bscore.src = "imgs/bluerobot.png"; rob2.style.color = "#4d8bf4"; rob.style.color="#4d8bf4"
    bot++;
}

bat = (str) => {
    rand = rps[Math.floor(Math.random() * rps.length)];
    while (rand == str) {rand = rps[Math.floor(Math.random() * rps.length)]};
    if (rand == "Rock") {if (str == "Paper") {userw();out.value="Paper wraps rock, you've won"} else {botw();out.value="Rock breaks scissors, you've lost"}}
    else if (rand == "Paper") {if (str == "Scissors") {userw();out.value="Scissors cut paper, you've won"} else {botw();out.value="Paper wraps rock, you've lost"}}
    else {if (str == "Rock") {userw();out.value="Rock breaks scissors, you've won"} else {botw();out.value="Scissors cut paper, you've lost"}}
    rob.innerHTML = bot; use.innerHTML = usc;}

rrock = () => {roc.src = "imgs/redrock.png" ; sci.src = "imgs/Scissors.png" ; pap.src = "imgs/Paper.png" ; ro.style.color = "red" ; sc.style.color = "black" ; pa.style.color = "black";
    if(rand == "Paper" ) {pap.src = "imgs/bluepaper.png" ;  pa.style.color = "#4d8bf4"} else if (rand== "Scissors") {sci.src = "imgs/bluescissors.png" ;  sc.style.color = "#4d8bf4"}
}
rpap = () => {pap.src = "imgs/redpaper.png" ; sci.src = "imgs/Scissors.png" ; roc.src = "imgs/rock.png" ; pa.style.color = "red" ; ro.style.color = "black" ; sc.style.color = "black"
    if (rand== "Scissors") {sci.src = "imgs/bluescissors.png" ;  sc.style.color = "#4d8bf4"} else if (rand =="Rock") {roc.src = "imgs/bluerock.png" ;  ro.style.color = "#4d8bf4"}
}
rsci = () => {sci.src = "imgs/redscissors.png" ; roc.src = "imgs/rock.png" ; pap.src = "imgs/Paper.png" ; pa.style.color = "black" ; ro.style.color = "black" ; sc.style.color = "red"
    if (rand =="Rock") {roc.src = "imgs/bluerock.png" ;  ro.style.color = "#4d8bf4"} else if (rand == "Paper" ) {pap.src = "imgs/bluepaper.png" ;  pa.style.color = "#4d8bf4"}
} */

let rps = ["Rock", "Paper", "Scissors"]; let usc = 0; let bot = 0;
let rand = 0;

userw = () => {
    uimg.src = "imgs/redplayer.png";  use.style.color= "red"; uscore.style.color = "red";
    bscore.src = "imgs/robot.png"; rob2.style.color = "black"; rob.style.color="black";
    usc++;
}

botw = () => {
    uimg.src = "imgs/player.png";  use.style.color= "black"; uscore.style.color = "black";
    bscore.src = "imgs/bluerobot.png"; rob2.style.color = "#4d8bf4"; rob.style.color="#4d8bf4"
    bot++;
}

/*let ucol = 0;
ucolor = () =>{
    ucol = ucolor1.value
}*/

bat = (str) => {
    rand = rps[Math.floor(Math.random() * rps.length)];
    while (rand == str) {rand = rps[Math.floor(Math.random() * rps.length)]};
    if (rand == "Rock") {if (str == "Paper") {userw();out.value="Paper wraps rock, you've won"} else {botw();out.value="Rock breaks scissors, you've lost"}}
    else if (rand == "Paper") {if (str == "Scissors") {userw();out.value="Scissors cut paper, you've won"} else {botw();out.value="Paper wraps rock, you've lost"}}
    else {if (str == "Rock") {userw();out.value="Rock breaks scissors, you've won"} else {botw();out.value="Scissors cut paper, you've lost"}}
    rob.innerHTML = bot; use.innerHTML = usc;}

rrock = () => {roc.src = "imgs/redrock.png" ; sci.src = "imgs/Scissors.png" ; pap.src = "imgs/Paper.png" ; ro.style.color = "red" ; sc.style.color = "black" ; pa.style.color = "black";
    if(rand == "Paper" ) {pap.src = "imgs/bluepaper.png" ;  pa.style.color = "#4d8bf4"} else if (rand== "Scissors") {sci.src = "imgs/bluescissors.png" ;  sc.style.color = "#4d8bf4"}
}
rpap = () => {pap.src = "imgs/redpaper.png" ; sci.src = "imgs/Scissors.png" ; roc.src = "imgs/rock.png" ; pa.style.color = "red" ; ro.style.color = "black" ; sc.style.color = "black"
    if (rand== "Scissors") {sci.src = "imgs/bluescissors.png" ;  sc.style.color = "#4d8bf4"} else if (rand =="Rock") {roc.src = "imgs/bluerock.png" ;  ro.style.color = "#4d8bf4"}
}
rsci = () => {sci.src = "imgs/redscissors.png" ; roc.src = "imgs/rock.png" ; pap.src = "imgs/Paper.png" ; pa.style.color = "black" ; ro.style.color = "black" ; sc.style.color = "red"
    if (rand =="Rock") {roc.src = "imgs/bluerock.png" ;  ro.style.color = "#4d8bf4"} else if (rand == "Paper" ) {pap.src = "imgs/bluepaper.png" ;  pa.style.color = "#4d8bf4"}
}

//player.style.setProperty("animation", "launch 2s ease-in");
