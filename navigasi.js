// PERHATIKAN: Ada "/" di awal setiap nama file/folder
const daftarHalaman = [
    "/index.html", 
    "/2/index.html", 
    "/3/index.html", 
    "/hal4-17/index.html", 
    "/hal4a-18/index.html", 
    "/hal4b-19/index.html", 
    "/5/index.html", 
    "/5b/index.html",
    "/6/index.html", 
    "/7/index.html", 
    "/8/index.html", 
    "/9/index.html", 
    "/10/index.html",
    "/11/index.html", 
    "/12/index.html", 
    "/13/index.html", 
    "/14/index.html", 
    "/15/index.html",
    "/15b/index.html", 
    "/16/index.html", 
    "/17/index.html", 
    "/18/index.html", 
    "/19/index.html",
    "/20/index.html", 
    "/20b/index.html", 
    "/21/index.html", 
    "/22/index.html", 
    "/22b/index.html",
    "/23/index.html", 
    "/24/index.html", 
    "/25/index.html"
];

document.addEventListener("DOMContentLoaded", function() {
    const pathFull = window.location.pathname;

    // Cari index halaman saat ini
    let currentIndex = daftarHalaman.findIndex(link => 
        pathFull.endsWith(link) || (link === "/index.html" && pathFull.endsWith("/"))
    );

    if (currentIndex !== -1) {
        // Buat Tombol Navigasi
        const navHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:20px; margin-top:50px; border-top:1px solid #ddd; clear:both; font-family:sans-serif;">
                <div style="flex:1; text-align:left;">
                    <button id="btnPrev" style="visibility:${currentIndex === 0 ? 'hidden' : 'visible'}; padding:10px 20px; cursor:pointer;">&larr; Kiri</button>
                </div>
                <div style="flex:1; text-align:center; color:#888;">Halaman ${currentIndex + 1} dari ${daftarHalaman.length}</div>
                <div style="flex:1; text-align:right;">
                    <button id="btnNext" style="visibility:${currentIndex === daftarHalaman.length - 1 ? 'hidden' : 'visible'}; padding:10px 20px; cursor:pointer; background:#007bff; color:white; border:none; border-radius:5px;">Kanan &rarr;</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', navHTML);

        // Fungsi Pindah (Menggunakan Absolute Path)
        const pindah = (targetIdx) => {
            if (targetIdx >= 0 && targetIdx < daftarHalaman.length) {
                // Di server lokal/hosting, ini akan langsung ke root
                window.location.href = daftarHalaman[targetIdx];
            }
        };

        document.getElementById("btnPrev").onclick = () => pindah(currentIndex - 1);
        document.getElementById("btnNext").onclick = () => pindah(currentIndex + 1);
    }
});
