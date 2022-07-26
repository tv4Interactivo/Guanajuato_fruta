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

  toggle.style.display = "none";
}
