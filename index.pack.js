let homeBtn = document.getElementById('home')

let guestBtn = document.getElementById('guest')

count = 0
countG = 0

function onepoint() {
    count += 1
    homeBtn.textContent = count;
}

function twopoints() {
    count += 2
    homeBtn.textContent = count;
}

function threepoints() {
    count += 3
    homeBtn.textContent = count;
}

function onepointG() {
    countG += 1
    guestBtn.textContent = countG;
}

function twopointsG() {
    countG += 2
    guestBtn.textContent = countG;
}

function threepointsG() {
    countG += 3
    guestBtn.textContent = countG;
}

function restart() {
    count = 0;
    countG = 0;
    homeBtn.textContent = '00';
    guestBtn.textContent = '00';
}