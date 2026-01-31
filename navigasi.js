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
    // Ambil path URL dan bersihkan dari karakter aneh
    const pathFull = decodeURIComponent(window.location.pathname);
    
    // Cari index halaman saat ini dengan mencocokkan nama folder/file
    let currentIndex = -1;
    for (let i = 0; i < daftarHalaman.length; i++) {
        if (pathFull.includes(daftarHalaman[i]) || (i === 0 && (pathFull.endsWith("/") || pathFull.endsWith("index.html")))) {
            currentIndex = i;
            break;
        }
    }

    // JIKA MASIH TIDAK KETEMU (Logika darurat agar tombol tetap muncul)
    if (currentIndex === -1 && pathFull.includes("/")) {
        let parts = pathFull.split("/");
        let folderSekarang = parts[parts.length - 2]; // Ambil nama folder tempat index.html berada
        currentIndex = daftarHalaman.findIndex(h => h.startsWith(folderSekarang + "/"));
    }

    if (currentIndex !== -1) {
        const navContainer = document.createElement('div');
        navContainer.style.cssText = "display:flex; justify-content:space-between; align-items:center; padding:20px; margin-top:50px; border-top:2px solid #ddd; clear:both; font-family:sans-serif; width:100%; box-sizing:border-box;";

        navContainer.innerHTML = `
            <div style="flex:1; text-align:left;">
                <button id="btnPrev" style="display:${currentIndex === 0 ? 'none' : 'block'}; padding:10px 20px; cursor:pointer; border-radius:5px; border:1px solid #ccc; background:#fff;">&larr; Kiri</button>
            </div>
            <div style="flex:1; text-align:center; color:#888; font-size:14px;">
                Halaman ${currentIndex + 1} dari ${daftarHalaman.length}
            </div>
            <div style="flex:1; text-align:right;">
                <button id="btnNext" style="display:${currentIndex === daftarHalaman.length - 1 ? 'none' : 'block'}; padding:10px 20px; cursor:pointer; border-radius:5px; border:none; background:#007bff; color:white;">Kanan &rarr;</button>
            </div>
        `;
        document.body.appendChild(navContainer);

        const navigasi = (arah) => {
            let targetIdx = currentIndex + arah;
            if (targetIdx >= 0 && targetIdx < daftarHalaman.length) {
                // Hitung mundur berapa kali harus naik folder (../)
                let depth = (daftarHalaman[currentIndex].split('/').length) - 1;
                let prefix = "";
                for(let j=0; j < depth; j++) { prefix += "../"; }
                
                window.location.href = prefix + daftarHalaman[targetIdx];
            }
        };

        document.getElementById("btnPrev").onclick = () => navigasi(-1);
        document.getElementById("btnNext").onclick = () => navigasi(1);
    }
});
