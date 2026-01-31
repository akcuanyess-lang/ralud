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

    // 1. Cari Index Halaman Sekarang berdasarkan daftar
    let currentIndex = -1;
    for (let i = 0; i < daftarHalaman.length; i++) {
        // Deteksi apakah URL mengandung path dari daftarHalaman
        if (fullPath.endsWith(daftarHalaman[i]) || fullPath.includes("/" + daftarHalaman[i])) {
            currentIndex = i;
            break;
        }
    }
    
    // Fallback: jika di halaman utama banget (/) anggap index.html
    if (currentIndex === -1 && (fullPath.endsWith("/") || fullPath === "")) {
        currentIndex = 0;
    }

    if (currentIndex !== -1) {
        // 2. Buat Navigasi Visual
        const navHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 20px; margin: 40px auto; border-top: 1px solid #ddd; max-width: 800px; font-family: sans-serif; clear: both;">
                <div style="flex: 1; text-align: left;">
                    <button id="btnPrev" style="visibility: ${currentIndex === 0 ? 'hidden' : 'visible'}; padding: 10px 20px; cursor: pointer; border-radius: 5px; border: 1px solid #ccc; background: #fff;">&larr; Kiri</button>
                </div>
                <div style="flex: 1; text-align: center; font-size: 14px; color: #666;">
                    Halaman ${currentIndex + 1} dari ${daftarHalaman.length}
                </div>
                <div style="flex: 1; text-align: right;">
                    <button id="btnNext" style="visibility: ${currentIndex === daftarHalaman.length - 1 ? 'hidden' : 'visible'}; padding: 10px 20px; cursor: pointer; border-radius: 5px; border: none; background: #007bff; color: white;">Kanan &rarr;</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', navHTML);

        // 3. Logika Perpindahan Halaman (PENTING)
        const navigasi = (targetIdx) => {
            if (targetIdx >= 0 && targetIdx < daftarHalaman.length) {
                // Hitung berapa folder kita harus keluar (../)
                // Contoh: dari '2/index.html', kita butuh '../' satu kali
                const currentFile = daftarHalaman[currentIndex];
                const folderDepth = (currentFile.match(/\//g) || []).length;
                let prefix = "";
                for(let i=0; i<folderDepth; i++) { prefix += "../"; }

                window.location.href = prefix + daftarHalaman[targetIdx];
            }
        };

        document.getElementById("btnPrev")?.addEventListener("click", () => navigasi(currentIndex - 1));
        document.getElementById("btnNext")?.addEventListener("click", () => navigasi(currentIndex + 1));

        // Shortcut Keyboard
        document.addEventListener('keydown', (e) => {
            if (e.key === "ArrowLeft") navigasi(currentIndex - 1);
            if (e.key === "ArrowRight") navigasi(currentIndex + 1);
        });
    }
});
