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
    const pathFull = window.location.pathname;
    
    // Logika deteksi: Jika path kosong atau berakhir dengan '/', anggap sebagai index.html
    const currentPage = pathFull.endsWith('/') || pathFull === '' ? "index.html" : pathFull;

    const currentIndex = daftarHalaman.findIndex(link => {
        return currentPage.includes(link);
    });

    // JIKA HALAMAN DITEMUKAN DALAM DAFTAR
    if (currentIndex !== -1) {
        const navHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 20px; margin-top: 30px; border-top: 1px solid #ddd; font-family: sans-serif;">
                <div style="flex: 1; text-align: left;">
                    <button id="btnPrev" style="visibility: ${currentIndex === 0 ? 'hidden' : 'visible'}; padding: 10px 20px; cursor: pointer; border-radius: 5px; border: 1px solid #ccc; background: #fff;">&larr; Kiri</button>
                </div>
                <div style="flex: 1; text-align: center; font-size: 14px; color: #888;">
                    Halaman ${currentIndex + 1} dari ${daftarHalaman.length}
                </div>
                <div style="flex: 1; text-align: right;">
                    <button id="btnNext" style="visibility: ${currentIndex === daftarHalaman.length - 1 ? 'hidden' : 'visible'}; padding: 10px 20px; cursor: pointer; border-radius: 5px; border: none; background: #007bff; color: white;">Kanan &rarr;</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', navHTML);

        document.getElementById("btnPrev")?.addEventListener("click", () => pindah(currentIndex - 1));
        document.getElementById("btnNext")?.addEventListener("click", () => pindah(currentIndex + 1));

        document.addEventListener('keydown', (e) => {
            if (e.key === "ArrowLeft" && currentIndex > 0) pindah(currentIndex - 1);
            if (e.key === "ArrowRight" && currentIndex < daftarHalaman.length - 1) pindah(currentIndex + 1);
        });
    }
});

function pindah(targetIndex) {
    if (targetIndex >= 0 && targetIndex < daftarHalaman.length) {
        // Mencari alamat dasar website (URL Root)
        const currentLink = daftarHalaman.find(l => window.location.pathname.includes(l)) || "index.html";
        const rootPath = window.location.href.split(currentLink)[0];
        window.location.href = rootPath + daftarHalaman[targetIndex];
    }
}

