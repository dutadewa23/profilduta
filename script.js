        function showProjectDetail(projectId) {
            document.getElementById('mainContent').classList.add('hidden');
            document.getElementById(projectId).classList.add('active');
            window.scrollTo(0, 0);
        }

        function showMainContent() {
            document.getElementById('mainContent').classList.remove('hidden');
            const projectDetails = document.querySelectorAll('.project-detail');
            projectDetails.forEach(detail => {
                detail.classList.remove('active');
            });
            window.scrollTo(0, 0);
        }
