const daftarHalaman = [
    "index.html", 
    "2/index.html", 
    "3/index.html", 
    "hal4-17/index.html", 
    "hal4a-18/index.html", 
    "hal4b-19/index.html", 
    "5/index.html", 
    "5b/index.html",
    "6/index.html", 
    "7/index.html", 
    "8/index.html", 
    "9/index.html", 
    "10/index.html",
    "11/index.html", 
    "12/index.html", 
    "13/index.html", 
    "14/index.html", 
    "15/index.html",
    "15b/index.html", 
    "16/index.html", 
    "17/index.html", 
    "18/index.html", 
    "19/index.html",
    "20/index.html", 
    "20b/index.html", 
    "21/index.html", 
    "22/index.html", 
    "22b/index.html",
    "23/index.html", 
    "24/index.html", 
    "25/index.html"
];

document.addEventListener("DOMContentLoaded", function() {
    const fullPath = window.location.pathname.replace(/%20/g, " "); // Perbaikan jika ada spasi di nama folder

    // 1. Cari Index Halaman Sekarang
    let currentIndex = -1;
    for (let i = 0; i < daftarHalaman.length; i++) {
        // Cek apakah akhir dari URL cocok dengan item di daftarHalaman
        if (fullPath.endsWith(daftarHalaman[i]) || (i === 0 && fullPath.endsWith("/"))) {
            currentIndex = i;
            break;
        }
    }

    if (currentIndex !== -1) {
        // 2. Tampilkan Navigasi
        const navContainer = document.createElement('div');
        navContainer.style.cssText = "display:flex; justify-content:space-between; align-items:center; padding:20px; margin-top:50px; border-top:1px solid #ddd; clear:both; font-family:sans-serif;";
        
        navContainer.innerHTML = `
            <button id="btnPrev" style="visibility:${currentIndex === 0 ? 'hidden' : 'visible'}; padding:10px 20px; cursor:pointer;">&larr; Kiri</button>
            <div style="color:#888; font-size:14px;">Halaman ${currentIndex + 1} dari ${daftarHalaman.length}</div>
            <button id="btnNext" style="visibility:${currentIndex === daftarHalaman.length - 1 ? 'hidden' : 'visible'}; padding:10px 20px; cursor:pointer; background:#007bff; color:white; border:none; border-radius:5px;">Kanan &rarr;</button>
        `;
        document.body.appendChild(navContainer);

        // 3. Logika Navigasi "Keluar Masuk Folder"
        const pindah = (targetIdx) => {
            if (targetIdx >= 0 && targetIdx < daftarHalaman.length) {
                // Cari tahu berapa tingkat folder saat ini (hitung tanda /)
                const currentRelPath = daftarHalaman[currentIndex];
                const folderDepth = (currentRelPath.match(/\//g) || []).length;
                
                // Buat awalan ../ sebanyak kedalaman folder
                let prefix = "";
                for (let j = 0; j < folderDepth; j++) {
                    prefix += "../";
                }
                
                // Gabungkan awalan dengan tujuan baru
                window.location.href = prefix + daftarHalaman[targetIdx];
            }
        };

        document.getElementById("btnPrev").onclick = () => pindah(currentIndex - 1);
        document.getElementById("btnNext").onclick = () => pindah(currentIndex + 1);
        
        // Shortcut keyboard
        document.onkeydown = (e) => {
            if (e.key === "ArrowLeft") pindah(currentIndex - 1);
            if (e.key === "ArrowRight") pindah(currentIndex + 1);
        };
    }
});
