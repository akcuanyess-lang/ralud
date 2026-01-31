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

    // Mencari index halaman saat ini
    let currentIndex = -1;
    for (let i = 0; i < daftarHalaman.length; i++) {
        // Cek apakah URL saat ini mengandung nama folder/file dari daftar
        if (fullPath.includes("/" + daftarHalaman[i]) || (i === 0 && fullPath.endsWith("/"))) {
            currentIndex = i;
            break;
        }
    }

    if (currentIndex !== -1) {
        // Tambahkan HTML ke Body
        const navHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 20px; margin-top: 30px; border-top: 1px solid #ddd; font-family: sans-serif;">
                <div style="flex: 1; text-align: left;">
                    <button id="btnPrev" style="visibility: ${currentIndex === 0 ? 'hidden' : 'visible'}; padding: 10px 20px; cursor: pointer;">&larr; Kiri</button>
                </div>
                <div style="flex: 1; text-align: center; font-size: 14px; color: #888;">
                    Halaman ${currentIndex + 1} dari ${daftarHalaman.length}
                </div>
                <div style="flex: 1; text-align: right;">
                    <button id="btnNext" style="visibility: ${currentIndex === daftarHalaman.length - 1 ? 'hidden' : 'visible'}; padding: 10px 20px; cursor: pointer; background: #007bff; color: white; border: none; border-radius: 4px;">Kanan &rarr;</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', navHTML);

        // Fungsi navigasi yang lebih aman
        const navigasi = (targetIdx) => {
            if (targetIdx >= 0 && targetIdx < daftarHalaman.length) {
                // Menghitung base URL (kembali ke folder utama)
                const depth = (daftarHalaman[currentIndex].match(/\//g) || []).length;
                const prefix = depth > 0 ? "../".repeat(depth) : "";
                window.location.href = prefix + daftarHalaman[targetIdx];
            }
        };

        document.getElementById("btnPrev")?.addEventListener("click", () => navigasi(currentIndex - 1));
        document.getElementById("btnNext")?.addEventListener("click", () => navigasi(currentIndex + 1));

        document.addEventListener('keydown', (e) => {
            if (e.key === "ArrowLeft") navigasi(currentIndex - 1);
            if (e.key === "ArrowRight") navigasi(currentIndex + 1);
        });
    }
});
