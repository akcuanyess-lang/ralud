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
    const fullPath = window.location.pathname;

    // 1. Cari Index Halaman Sekarang
    let currentIndex = -1;
    for (let i = 0; i < daftarHalaman.length; i++) {
        // Cek kecocokan nama folder/file
        if (fullPath.includes(daftarHalaman[i]) || (i === 0 && (fullPath.endsWith("/") || fullPath.endsWith("index.html")))) {
            currentIndex = i;
            break;
        }
    }

    if (currentIndex !== -1) {
        // 2. Pasang HTML dengan Gaya CSS agar tidak berantakan
        const navContainer = document.createElement('div');
        navContainer.style.cssText = "display:flex; justify-content:space-between; align-items:center; padding:20px; margin-top:50px; border-top:1px solid #ddd; clear:both; width:100%; box-sizing:border-box; font-family:sans-serif;";

        navContainer.innerHTML = `
            <div style="flex:1; text-align:left;">
                <button id="btnPrev" style="visibility:${currentIndex === 0 ? 'hidden' : 'visible'}; padding:10px 20px; cursor:pointer; border-radius:5px; border:1px solid #ccc; background:#fff;">&larr; Kiri</button>
            </div>
            <div style="flex:1; text-align:center; font-size:14px; color:#888;">
                Halaman ${currentIndex + 1} dari ${daftarHalaman.length}
            </div>
            <div style="flex:1; text-align:right;">
                <button id="btnNext" style="visibility:${currentIndex === daftarHalaman.length - 1 ? 'hidden' : 'visible'}; padding:10px 20px; cursor:pointer; border-radius:5px; border:none; background:#007bff; color:white;">Kanan &rarr;</button>
            </div>
        `;
        
        document.body.appendChild(navContainer);

        // 3. Fungsi Navigasi yang mencari folder utama (root)
        const navigasi = (targetIdx) => {
            if (targetIdx >= 0 && targetIdx < daftarHalaman.length) {
                // Tentukan lokasi root
                let root;
                if (window.location.pathname.includes('/')) {
                    // Jika di dalam folder, kita ambil bagian domain saja
                    root = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf(daftarHalaman[currentIndex]));
                } else {
                    root = "./";
                }
                window.location.href = root + daftarHalaman[targetIdx];
            }
        };

        document.getElementById("btnPrev").onclick = () => navigasi(currentIndex - 1);
        document.getElementById("btnNext").onclick = () => navigasi(currentIndex + 1);

        // 4. Keyboard Shortcut
        document.onkeydown = (e) => {
            if (e.key === "ArrowLeft") navigasi(currentIndex - 1);
            if (e.key === "ArrowRight") navigasi(currentIndex + 1);
        };
    }
});
