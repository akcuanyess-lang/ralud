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
        if (fullPath.endsWith(daftarHalaman[i]) || fullPath.includes("/" + daftarHalaman[i])) {
            currentIndex = i;
            break;
        }
    }
    
    // Jika tidak ketemu (halaman utama tanpa tulisan index.html)
    if (currentIndex === -1 && (fullPath.endsWith("/") || fullPath === "")) {
        currentIndex = 0;
    }

    if (currentIndex !== -1) {
        // 2. Tampilkan Navigasi
        const navHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:20px; margin:40px auto; border-top:2px solid #eee; max-width:900px; font-family:sans-serif; clear:both;">
                <button id="btnPrev" style="visibility:${currentIndex === 0 ? 'hidden' : 'visible'}; padding:12px 24px; cursor:pointer; border-radius:6px; border:1px solid #ddd; background:#fff;">&larr; Kiri</button>
                <div style="color:#777; font-size:14px;">Halaman ${currentIndex + 1} dari ${daftarHalaman.length}</div>
                <button id="btnNext" style="visibility:${currentIndex === daftarHalaman.length - 1 ? 'hidden' : 'visible'}; padding:12px 24px; cursor:pointer; border-radius:6px; border:none; background:#007bff; color:#fff;">Kanan &rarr;</button>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', navHTML);

        // 3. Logika Navigasi Paling Aman
        const navigasi = (arah) => {
            const targetIdx = currentIndex + arah;
            if (targetIdx >= 0 && targetIdx < daftarHalaman.length) {
                // MENCARI FOLDER UTAMA
                // Kita ambil URL saat ini, buang bagian "folder/index.html" nya
                const currentRelPath = daftarHalaman[currentIndex];
                const baseURL = window.location.href.split(currentRelPath)[0];
                
                // Gabungkan baseURL dengan tujuan baru
                window.location.href = baseURL + daftarHalaman[targetIdx];
            }
        };

        document.getElementById("btnPrev").onclick = () => navigasi(-1);
        document.getElementById("btnNext").onclick = () => navigasi(1);

        document.onkeydown = (e) => {
            if (e.key === "ArrowLeft") navigasi(-1);
            if (e.key === "ArrowRight") navigasi(1);
        };
    }
});
