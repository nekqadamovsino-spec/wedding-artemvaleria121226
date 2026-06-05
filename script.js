const target=new Date("2026-12-12T15:30:00+07:00");
function pad(n){return String(n).padStart(2,"0")}
function updateCountdown(){let diff=target-new Date();if(diff<=0){const timer=document.querySelector(".timer");if(timer){timer.innerHTML='<div style="grid-column:1 / -1"><b>♡</b><span>мы женимся сегодня</span></div>'}return}days.textContent=Math.floor(diff/(1000*60*60*24));hours.textContent=pad(Math.floor((diff/(1000*60*60))%24));minutes.textContent=pad(Math.floor((diff/(1000*60))%60));seconds.textContent=pad(Math.floor((diff/1000)%60))}
updateCountdown();setInterval(updateCountdown,1000);
rsvpForm.addEventListener("submit",e=>{e.preventDefault();formResult.textContent=guestName.value.trim()+", спасибо! Ваш ответ принят.";rsvpForm.reset();});


// Плавное появление текста при прокрутке
document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(".reveal, .reveal-section");

  const show = (el) => el.classList.add("visible");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach(show);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        show(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.14,
    rootMargin: "0px 0px -8% 0px"
  });

  revealItems.forEach(el => observer.observe(el));

  // Первый экран запускаем сразу
  document.querySelectorAll(".hero .reveal").forEach((el, i) => {
    setTimeout(() => show(el), 120 + i * 140);
  });
});
