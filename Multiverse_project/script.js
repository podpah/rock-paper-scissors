let rps = ["Rock", "Paper", "Scissors"]; let usc = 0; let bot = 0;

bat = (str) => {
    let rand = rps[Math.floor(Math.random() * rps.length)];
    while (rand == str) {rand = rps[Math.floor(Math.random() * rps.length)]}; console.log(rand)
    if (rand == "Rock") {if (str == "Paper") {usc++;out.value="Paper wraps rock, you've won"} else {bot++;out.value="Rock breaks scissors, you've lost"}}
    else if (rand == "Paper") {if (str == "Scissors") {usc++;out.value="Scissors cut paper, you've won"} else {bot++;out.value="Paper wraps rock, you've lost"}}
    else {if (str == "Rock") {usc++;out.value="Rock breaks scissors, you've won"} else {bot++;out.value="Scissors cut paper, you've lost"}}
    rob.innerHTML = bot; use.innerHTML = usc;}