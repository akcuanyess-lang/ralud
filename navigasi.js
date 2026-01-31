const daftarHalaman = [
    "index.html", "2/index.html", "3/index.html", "hal4-17/index.html", 
    "hal4a-18/index.html", "hal4b-19/index.html", "5/index.html", "5b/index.html",
    "6/index.html", "7/index.html", "8/index.html", "9/index.html", "10/index.html",
    "11/index.html", "12/index.html", "13/index.html", "14/index.html", "15/index.html",
    "15b/index.html", "16/index.html", "17/index.html", "18/index.html", "19/index.html",
    "20/index.html", "20b/index.html", "21/index.html", "22/index.html", "22b/index.html",
    "23/index.html", "24/index.html", "25/index.html"
];

document.addEventListener("DOMContentLoaded", function() {
    const fullPath = window.location.pathname;

    // Deteksi Index Halaman Saat Ini
    let currentIndex = daftarHalaman.findIndex(link => 
        fullPath.includes(link) || (link === "index.html" && (fullPath.endsWith("/") || fullPath === ""))
    );

    if (currentIndex !== -1) {
        // Tambahkan Navigasi ke Body
        const navHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:20px; margin:50px auto 20px; border-top:2px solid #eee; max-width:900px; font-family:sans-serif; clear:both;">
                <button id="btnPrev" style="visibility:${currentIndex === 0 ? 'hidden' : 'visible'}; padding:12px 24px; cursor:pointer; border-radius:6px; border:1px solid #ddd; background:#fff;">&larr; Kiri</button>
                <div style="color:#777; font-size:14px;">Halaman ${currentIndex + 1} dari ${daftarHalaman.length}</div>
                <button id="btnNext" style="visibility:${currentIndex === daftarHalaman.length - 1 ? 'hidden' : 'visible'}; padding:12px 24px; cursor:pointer; border-radius:6px; border:none; background:#007bff; color:#fff;">Kanan &rarr;</button>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', navHTML);

        const pindah = (targetIdx) => {
            if (targetIdx >= 0 && targetIdx < daftarHalaman.length) {
                // Tentukan alamat root (kembali ke pangkal domain)
                const currentRelPath = daftarHalaman[currentIndex];
                const baseURL = window.location.href.split(currentRelPath)[0];
                window.location.href = baseURL + daftarHalaman[targetIdx];
            }
        };

        document.getElementById("btnPrev").onclick = () => pindah(currentIndex - 1);
        document.getElementById("btnNext").onclick = () => pindah(currentIndex + 1);

        document.onkeydown = (e) => {
            if (e.key === "ArrowLeft") pindah(currentIndex - 1);
            if (e.key === "ArrowRight") pindah(currentIndex + 1);
        };
    }
});
