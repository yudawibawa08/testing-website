  // Gunakan link HTTPS yang konsisten untuk semua modul
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  import { getRemoteConfig, fetchAndActivate, getValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-remote-config.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAdzYssZ6t3Uh8b_0ChDt0PvRA_qVj-WwY",
    authDomain: "fir-edeab.firebaseapp.com",
    projectId: "fir-edeab",
    storageBucket: "fir-edeab.firebasestorage.app",
    messagingSenderId: "192263616319",
    appId: "1:192263616319:web:b2c5c33f7cee5e51ca858a",
    measurementId: "G-V47J1F4JF9"
  };

  // Inisialisasi
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const remoteConfig = getRemoteConfig(app);

  // Paksa ambil data baru (cache 0)
  remoteConfig.settings.minimumFetchIntervalMillis = 0;

  // state default value
  remoteConfig.defaultConfig = {
    "button_abc": "Island of a Thousand Temples"
  };

  fetchAndActivate(remoteConfig)
    .then(() => {
      // Ambil nilai berdasarkan key "button_abc"
      const newText = getValue(remoteConfig, "button_abc").asString();

      console.log("Data dari Firebase:", newText);

      if (newText && newText !== "") {
        const element = document.getElementById("button_abc");
        if (element) {
          element.innerText = newText;
        }
      }
    })
    .catch((err) => {
      console.error("Gagal memuat Remote Config:", err);
    });


    
/**
 * ini untuk remote config berupa jpg
 * 
  // Set default ke URL gambar lokal Anda
  remoteConfig.defaultConfig = {
    "hero_image_url": "default-bali.jpg"
  };
  fetchAndActivate(remoteConfig)
    .then(() => {
      // Ambil URL gambar dari Firebase
      const newImageUrl = getValue(remoteConfig, "hero_image_url").asString();

      console.log("URL Gambar dari Firebase:", newImageUrl);

      if (newImageUrl && newImageUrl !== "") {
        const imageElement = document.getElementById("image_hero");
        if (imageElement) {
          // Ubah atribut SRC gambar
          imageElement.src = newImageUrl;
        }
      }
    })
    .catch((err) => {
      console.error("Gagal memuat Remote Config:", err);
    });
**/