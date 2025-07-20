const translations = {
  en: {
    title: "KIMAAL Token Panel",
    desc: "Connect wallet to claim dividends.",
    connect: "Connect Wallet",
    claim: "Claim Dividends"
  },
  ru: {
    title: "Панель KIMAAL",
    desc: "Подключите кошелек для получения дивидендов.",
    connect: "Подключить кошелек",
    claim: "Получить дивиденды"
  },
  ua: {
    title: "Панель KIMAAL",
    desc: "Підключіть гаманець для отримання дивідендів.",
    connect: "Підключити гаманець",
    claim: "Отримати дивіденди"
  }
};

function changeLang(lang) {
  localStorage.setItem("lang", lang);
  applyLang(lang);
}

function applyLang(lang) {
  const t = translations[lang];
  document.getElementById("title").innerText = t.title;
  document.getElementById("desc").innerText = t.desc;
  document.getElementById("connect").innerText = t.connect;
  document.getElementById("claim").innerText = t.claim;
}

function initLang() {
  const lang = localStorage.getItem("lang") || "en";
  document.getElementById("lang").value = lang;
  applyLang(lang);
}

window.onload = initLang;
