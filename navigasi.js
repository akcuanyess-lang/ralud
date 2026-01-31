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
        // Deteksi kuat untuk file dalam folder atau di root
        if (fullPath.includes("/" + daftarHalaman[i]) || (i === 0 && fullPath.endsWith("/"))) {
            currentIndex = i;
            break;
        }
    }

    if (currentIndex !== -1) {
        // 2. Buat Navigasi Visual (Gaya diperbaiki agar rapi di bawah)
        const navHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:20px; margin:50px auto 20px; border-top:2px solid #eee; max-width:900px; font-family:sans-serif; clear:both; width:100%;">
                <div style="flex:1; text-align:left;">
                    <button id="btnPrev" style="visibility:${currentIndex === 0 ? 'hidden' : 'visible'}; padding:12px 24px; cursor:pointer; border-radius:6px; border:1px solid #ddd; background:#fff;">&larr; Kiri</button>
                </div>
                <div style="flex:1; text-align:center; color:#777; font-size:14px;">Halaman ${currentIndex + 1} dari ${daftarHalaman.length}</div>
                <div style="flex:1; text-align:right;">
                    <button id="btnNext" style="visibility:${currentIndex === daftarHalaman.length - 1 ? 'hidden' : 'visible'}; padding:12px 24px; cursor:pointer; border-radius:6px; border:none; background:#007bff; color:#fff;">Kanan &rarr;</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', navHTML);

        // 3. Logika Navigasi Paling Aman (Mencari Path Root)
        const navigasi = (targetIdx) => {
            if (targetIdx >= 0 && targetIdx < daftarHalaman.length) {
                // Temukan alamat root dengan membuang path halaman saat ini dari URL
                const currentRelPath = daftarHalaman[currentIndex];
                const baseURL = window.location.href.split(currentRelPath)[0];
                
                // Pindah ke halaman tujuan dari folder utama
                window.location.href = baseURL + daftarHalaman[targetIdx];
            }
        };

        document.getElementById("btnPrev").onclick = () => navigasi(currentIndex - 1);
        document.getElementById("btnNext").onclick = () => navigasi(currentIndex + 1);

        document.onkeydown = (e) => {
            if (e.key === "ArrowLeft") navigasi(currentIndex - 1);
            if (e.key === "ArrowRight") navigasi(currentIndex + 1);
        };
    }
});
