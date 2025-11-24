// Fungsi untuk show detail project/prestasi
function showProjectDetail(projectId) {
    document.getElementById('mainContent').classList.add('hidden');
    document.getElementById(projectId).classList.add('active');
    window.scrollTo(0, 0);
    
    // Push state ke browser history
    history.pushState({ page: projectId }, '', '#' + projectId);
}

// Fungsi untuk kembali ke main content
function showMainContent() {
    document.getElementById('mainContent').classList.remove('hidden');
    const projectDetails = document.querySelectorAll('.project-detail');
    projectDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    window.scrollTo(0, 0);
    
    // Push state ke browser history
    history.pushState({ page: 'home' }, '', '#home');
}

// Handle tombol back browser/HP
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.page) {
        if (event.state.page === 'home') {
            // Tampilkan halaman utama
            document.getElementById('mainContent').classList.remove('hidden');
            const projectDetails = document.querySelectorAll('.project-detail');
            projectDetails.forEach(detail => {
                detail.classList.remove('active');
            });
            window.scrollTo(0, 0);
        } else {
            // Tampilkan detail page
            document.getElementById('mainContent').classList.add('hidden');
            const projectDetails = document.querySelectorAll('.project-detail');
            projectDetails.forEach(detail => {
                detail.classList.remove('active');
            });
            document.getElementById(event.state.page).classList.add('active');
            window.scrollTo(0, 0);
        }
    } else {
        // Kalau ga ada state, tampilkan home
        document.getElementById('mainContent').classList.remove('hidden');
        const projectDetails = document.querySelectorAll('.project-detail');
        projectDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        window.scrollTo(0, 0);
    }
});

// Set initial state saat page load
window.addEventListener('load', function() {
    history.replaceState({ page: 'home' }, '', '#home');
});
