document.addEventListener("DOMContentLoaded", function () {
  const GreetBtn = document.getElementById("grt");
  const Clb1Btn = document.getElementById("clb1");
  const Clb2Btn = document.getElementById("clb2");
  const prsBtn = document.getElementById("pr");
  let frame = document.getElementById("contentFrame");
  const music = document.getElementById("bgMusic");
  const playBtn = document.getElementById("playMusic");
  frame.src = 'greet.html';
  GreetBtn.classList.add("selected");
  
  Clb2Btn.disabled = true;
  Clb1Btn.disabled = true;



  Clb1Btn.classList.add("locked");

  Clb2Btn.classList.add("locked");

  playBtn.addEventListener("click", () => {

    music.volume = 0.3;

    music.play();

  });

  function unlockButton(button) {
    button.disabled = false;
    button.classList.remove("locked");

  }

  GreetBtn.addEventListener("click", () => {
    const buttons = document.querySelectorAll(".menu-btn");
    buttons.forEach(btn => {
      //remove selected 
      btn.classList.remove("selected");
    });

    GreetBtn.classList.add("selected");
    frame.src = 'greet.html';
  });

  Clb1Btn.addEventListener("click", () => {
    const buttons = document.querySelectorAll(".menu-btn");
    buttons.forEach(btn => {
      //remove selected 
      btn.classList.remove("selected");
    });

    Clb1Btn.classList.add("selected");
    frame.src = 'celbfst.html';
    unlockButton(Clb2Btn);
  });

  Clb2Btn.addEventListener("click", () => {
    const buttons = document.querySelectorAll(".menu-btn");
    buttons.forEach(btn => {
      //remove selected 
      btn.classList.remove("selected");
    });
    Clb2Btn.classList.add("selected");
    frame.src = 'celbscd.html';
  });

  prsBtn.addEventListener("click", () => {
    const buttons = document.querySelectorAll(".menu-btn");
    buttons.forEach(btn => {
      //remove selected 
      btn.classList.remove("selected");
    });
    prsBtn.classList.add("selected");
    frame.src = 'present.html';
    unlockButton(Clb1Btn);
  });

});


