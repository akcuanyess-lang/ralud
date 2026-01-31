<script>
// Pengaturan jumlah total halaman
const totalHalaman = 31; 

document.addEventListener("DOMContentLoaded", function() {
    let path = window.location.pathname;
    let namaFile = path.split("/").pop() || "1.html"; // Default ke 1.html jika index
    let match = namaFile.match(/\d+/);
    let angkaSekarang = match ? parseInt(match[0]) : 1;

    // Sembunyikan tombol Sebelumnya di halaman 1
    if (angkaSekarang <= 1) {
        document.getElementById("prevContainer").style.visibility = "hidden";
    }
    
    // Sembunyikan tombol Selanjutnya di halaman 31
    if (angkaSekarang >= totalHalaman) {
        document.getElementById("nextContainer").style.visibility = "hidden";
    }
});

function pindahHalaman(arah) {
    let path = window.location.pathname;
    let namaFile = path.split("/").pop() || "1.html";
    let match = namaFile.match(/\d+/);
    let angkaSekarang = match ? parseInt(match[0]) : 1;

    let angkaBaru = angkaSekarang + arah;
    
    if (angkaBaru >= 1 && angkaBaru <= totalHalaman) {
        // Mengganti angka lama dengan angka baru dalam nama file
        let fileTujuan = namaFile.replace(angkaSekarang, angkaBaru);
        window.location.href = fileTujuan;
    }
}
</script>
