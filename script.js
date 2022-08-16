// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector(".progress-bar");
  const updatingBar = event.target.querySelector(".update-bar");
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add("hide");
  } else {
    progressBar.classList.remove("hide");
    if (event.detail.totalProgress === 0) {
      event.target.querySelector(".center-pre-prompt").classList.add("hide");
    }
  }
};
document.querySelector("model-viewer").addEventListener("progress", onProgress);

const toggle = document.getElementById("dropdown-content");

//Show/Hide dropdown menu
function toggleDisplay() {
  if (toggle.style.display === "none") {
    toggle.style.display = "block";
  } else {
    toggle.style.display = "none";
  }
}

//copy url to clipboard
function copyURL() {
  const btnHome = document.getElementsByClassName("share");
  navigator.clipboard.writeText(window.location.href);

  Swal.fire({
    text: '¡Enlace copiado al portapapeles!',
    confirmButtonText: 'Ok',
    confirmButtonColor: '#61862e',
    background: '#8fc444',
    color: '#fff'
  })
  
  toggle.style.display = "none";
}

//change language
function changeLang() {
  const esp = document.getElementById("text-esp");
  const eng = document.getElementById("text-eng");
  const esp2 = document.getElementById("text-esp2");
  const eng2 = document.getElementById("text-eng2");
  const esp3 = document.getElementById("text-esp3");
  const eng3 = document.getElementById("text-eng3");
  const esp4 = document.getElementById("text-esp4");
  const eng4 = document.getElementById("text-eng4");
  const esp5 = document.getElementById("text-esp5");
  const eng5 = document.getElementById("text-eng5");
  const esp6 = document.getElementById("text-esp6");
  const eng6 = document.getElementById("text-eng6");
  const esp7 = document.getElementById("text-esp7");
  const eng7 = document.getElementById("text-eng7");

  if (esp.style.display === "flex") {
    esp.style.display = "none";
    eng.style.display = "flex";
  } else {
    esp.style.display = "flex";
    eng.style.display = "none";
  }

  if (esp2.style.display === "flex") {
    esp2.style.display = "none";
    eng2.style.display = "flex";
  } else {
    esp2.style.display = "flex";
    eng2.style.display = "none";
  }

  if (esp3.style.display === "flex") {
    esp3.style.display = "none";
    eng3.style.display = "flex";
  } else {
    esp3.style.display = "flex";
    eng3.style.display = "none";
  }

  if (esp4.style.display === "block") {
    esp4.style.display = "none";
    eng4.style.display = "block";
  } else {
    esp4.style.display = "block";
    eng4.style.display = "none";
  }

  if (esp5.style.display === "block") {
    esp5.style.display = "none";
    eng5.style.display = "block";
  } else {
    esp5.style.display = "block";
    eng5.style.display = "none";
  }

  if (esp6.style.display === "block") {
    esp6.style.display = "none";
    eng6.style.display = "block";
  } else {
    esp6.style.display = "block";
    eng6.style.display = "none";
  }

  if (esp7.style.display === "block") {
    esp7.style.display = "none";
    eng7.style.display = "block";
  } else {
    esp7.style.display = "block";
    eng7.style.display = "none";
  }




  toggle.style.display = "none";
}
