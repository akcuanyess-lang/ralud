function navigate(direction) {
    const navLinks = Array.from(document.querySelectorAll('#main-nav a'));
    const currentPath = window.location.pathname;
    
    let currentIndex = navLinks.findIndex(link => {
        const linkPath = new URL(link.href).pathname;
        return currentPath.endsWith(linkPath) || linkPath.endsWith(currentPath);
    });

    if (direction === 'next' && currentIndex < navLinks.length - 1) {
        window.location.href = navLinks[currentIndex + 1].href;
    } else if (direction === 'prev' && currentIndex > 0) {
        window.location.href = navLinks[currentIndex - 1].href;
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowRight") navigate('next');
    if (e.key === "ArrowLeft") navigate('prev');
});

// Update status tombol saat halaman dimuat
window.addEventListener('DOMContentLoaded', () => {
    const navLinks = Array.from(document.querySelectorAll('#main-nav a'));
    const currentPath = window.location.pathname;
    let currentIndex = navLinks.findIndex(link => link.href.includes(currentPath));

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn && nextBtn) {
        if (currentIndex <= 0) prevBtn.disabled = true;
        if (currentIndex === navLinks.length - 1 || currentIndex === -1) nextBtn.disabled = true;
    }
});
