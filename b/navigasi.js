<script>
// ATUR DISINI: Total halaman artikel Anda
const totalHalaman = 30; 

document.addEventListener("DOMContentLoaded", function() {
    let path = window.location.pathname;
    let namaFile = path.split("/").pop() || "1.html"; 
    let match = namaFile.match(/\d+/);
    let angkaSekarang = match ? parseInt(match) : 1;

    // 1. Tambahkan CSS Hover & Animasi
    const style = document.createElement('style');
    style.innerHTML = `
        .nav-btn-prev:hover { background-color: #f0f0f0 !important; border-color: #999 !important; }
        .nav-btn-next:hover { background-color: #0056b3 !important; transform: translateY(-2px); }
        .nav-btn-next, .nav-btn-prev { transition: all 0.2s ease; font-family: sans-serif; }
    `;
    document.head.appendChild(style);

    // 2. Buat Tampilan Visual
    const navHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 20px; margin-top: 30px; border-top: 1px solid #ddd;">
            <div style="flex: 1; text-align: left;">
                <button class="nav-btn-prev" onclick="pindah(-1)" style="visibility: ${angkaSekarang <= 1 ? 'hidden' : 'visible'}; padding: 10px 18px; cursor: pointer; border-radius: 6px; border: 1px solid #ccc; background: #fff;">&larr; Prev</button>
            </div>
            <div style="flex: 1; text-align: center; font-size: 14px; color: #666;">
                HALAMAN <b>${angkaSekarang}</b> DARI ${totalHalaman}
                <div style="font-size: 10px; color: #aaa; margin-top: 5px;">Gunakan Tombol Panah &larr; &rarr; di Keyboard</div>
            </div>
            <div style="flex: 1; text-align: right;">
                <button class="nav-btn-next" onclick="pindah(1)" style="visibility: ${angkaSekarang >= totalHalaman ? 'hidden' : 'visible'}; padding: 10px 18px; cursor: pointer; border-radius: 6px; border: none; background: #007bff; color: white;">Next &rarr;</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', navHTML);

    // 3. LOGIKA SHORTCUT KEYBOARD
    document.addEventListener('keydown', function(event) {
        if (event.key === "ArrowLeft") {
            pindah(-1); // Tekan Panah Kiri
        } else if (event.key === "ArrowRight") {
            pindah(1);  // Tekan Panah Kanan
        }
    });
});

function pindah(arah) {
    let path = window.location.pathname;
    let namaFile = path.split("/").pop() || "1.html";
    let match = namaFile.match(/\d+/);
    let angkaSekarang = match ? parseInt(match) : 1;
    let angkaBaru = angkaSekarang + arah;

    if (angkaBaru >= 1 && angkaBaru <= totalHalaman) {
        window.location.href = namaFile.replace(angkaSekarang, angkaBaru);
    }
}
</script>
