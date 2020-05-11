if (navigator.userAgent.includes("Mobile")) {
  document.querySelector(
    "body > div.notes-container > div:nth-child(2) > div:nth-child(1)"
  ).style.display = "none";
  document.querySelector(
    "header > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"
  ).style.display = "none";
}
