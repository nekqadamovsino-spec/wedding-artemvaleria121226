const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxQEl7pwKnEWmLwWC_FvjIE7w60QFalQ31OQF9kH-zo15cGAGeuari3cSMpHUQsFbl9ag/exec";

const target = new Date("2026-12-12T15:30:00+07:00");

function pad(n){ return String(n).padStart(2,"0"); }

function updateCountdown(){
  let diff = target - new Date();
  if(diff <= 0){
    const timer = document.querySelector(".timer");
    if(timer){
      timer.innerHTML = '<div style="grid-column:1 / -1"><b>♡</b><span>мы женимся сегодня</span></div>';
    }
    return;
  }

  days.textContent = Math.floor(diff/(1000*60*60*24));
  hours.textContent = pad(Math.floor((diff/(1000*60*60))%24));
  minutes.textContent = pad(Math.floor((diff/(1000*60))%60));
  seconds.textContent = pad(Math.floor((diff/1000)%60));
}

updateCountdown();
setInterval(updateCountdown,1000);

rsvpForm.addEventListener("submit", e => {
  e.preventDefault();

  const name = guestName.value.trim();
  const answer = document.querySelector('input[name="answer"]:checked')?.value || "";
  const drinks = [...document.querySelectorAll('input[name="drink"]:checked')]
    .map(i => i.value)
    .join(", ");
  const comment = document.getElementById("comment")?.value.trim() || "";

  formResult.textContent = "Отправляем...";

  fetch(WEB_APP_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ name, answer, drinks, comment })
  });

  formResult.textContent = name + ", спасибо! Ваш ответ отправлен.";
  rsvpForm.reset();
});
