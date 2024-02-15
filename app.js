const strikeButton = document.getElementById("strike");
const resetButton = document.getElementById("reset");



const audio1 = new Audio("http://bit.ly/so-ball-hit");
const overaudio = new Audio("http://bit.ly/so-crowd-cheer");


const $t1score = document.getElementById("any-t1hai");


const $t1wickets = document.getElementById("wickets-t1hai");

const $t2score = document.getElementById("any-t2hai");


const $t2wickets = document.getElementById("wickets-t2hai");



const $t1haiSuperOver = document.getElementById("t1");


const $t2haiSuperOver = document.getElementById("t2");

let t1score = 0;
let t1wickets = 0;
let t2score = 0;
let t2wickets = 0;
let t1ball = 0;
let t2ball = 0;
let turn = 1;

const possible = [0, 1, 2, 3, 4, 6, "W"];

async function end() {
    overaudio.play();
    let message = "";
    if (t1score > t2score) {
      message = "IND WINS";
    } else if (t2score > t1score) {
      message = "PAK WINS";
    } else {
      message = "🏏 It's superover! 🏏";
    }
    await new Promise(resolve => setTimeout(resolve, 100));

    alert(message);
  }
  

function scoreCheck() {
  $t1score.textContent = t1score;
  $t1wickets.textContent = t1wickets;
  $t2score.textContent = t2score;
  $t2wickets.textContent = t2wickets;
}


function handler() {
    audio1.pause();
    audio1.currentTime = 0;
    audio1.play();
  
    const randomElement = possible[Math.floor(Math.random() * possible.length)];
  
    if (turn === 1) {
      t1ball++;
      const balls = $t1haiSuperOver.querySelectorAll(".ball");
      balls[t1ball - 1].textContent = randomElement;
  
      if (randomElement === "W") {
        t1wickets++;
      } else {
        t1score += randomElement;
      }
  
      if (t1ball === 6 || t1wickets === 2) {
        turn = 2;
      }
    } else if (turn === 2) {
      t2ball++;
      const balls = $t2haiSuperOver.querySelectorAll(".ball");
      balls[t2ball - 1].textContent = randomElement;
  
      if (randomElement === "W") {
        t2wickets++;
      } else {
        t2score += randomElement;
      }
  
      if (t2ball === 6 || t2wickets === 2 || t2score > t1score) {
        turn = 3;
        end();
      }
    }
    scoreCheck();
  }
  

strikeButton.onclick = handler;

resetButton.onclick = () => {
  window.location.reload();
};