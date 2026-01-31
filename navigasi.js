 <script>
// ATUR DISINI: Total halaman artikel Anda
const totalHalaman = 31; 

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
          <nav>
        <a href="2/index.html">2</a>
        <a href="3/index.html">3</a>
        <a href="hal4-17/index.html">4</a>
        <a href="hal4a-18/index.html">4a</a>
        <a href="hal4b-19/index.html">4b</a>
        <a href="5/index.html">5</a>
        <a href="5b/index.html">5b</a>
        <a href="6/index.html">6</a>
        <a href="7/index.html">7</a>
        <a href="8/index.html">8</a>
        <a href="9/index.html">9</a>
        <a href="10/index.html">10</a>
        <a href="11/index.html">11</a>
        <a href="12/index.html">12</a>
        <a href="13/index.html">13</a>
        <a href="14/index.html">14</a>
        <a href="15/index.html">15</a>
        <a href="15b/index.html">15b</a>
        <a href="16/index.html">16</a>
        <a href="17/index.html">17</a>
        <a href="18/index.html">18</a>
        <a href="19/index.html">19</a>
        <a href="20/index.html">20</a>
        <a href="20b/index.html">20b</a>
        <a href="21/index.html">21</a>
        <a href="22/index.html">22</a>
        <a href="22b/index.html">22b</a>
        <a href="23/index.html">23</a>
        <a href="24/index.html">24</a>
        <a href="25/index.html">25</a>
        </nav>
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
