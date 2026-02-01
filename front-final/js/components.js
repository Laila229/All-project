
/**
 * Components.js
 * Handles rendering of common layout elements (Sidebar, Navbar)
 * and initialization of Lucide icons.
 */

const AppComponents = {
    renderSidebar: (role, activePage) => {
        const sidebarContainer = document.getElementById('sidebar-container');
        if (!sidebarContainer) return;

        const navItems = {
            admin: [
                { name: 'Dashboard', icon: 'layout-dashboard', href: 'admin-dashboard.html' },
                { name: 'Classes', icon: 'school', href: 'admin-classes.html' },
                { name: 'Sections', icon: 'layers', href: 'admin-sections.html' },
                { name: 'Subjects', icon: 'book-open', href: 'admin-subjects.html' },
                { name: 'Users', icon: 'users', href: 'admin-users.html' },
            ],
            teacher: [
                { name: 'Dashboard', icon: 'layout-dashboard', href: 'teacher-dashboard.html' },
                { name: 'My Subjects', icon: 'book', href: 'teacher-subjects.html' },
                { name: 'Attendance', icon: 'calendar-check', href: 'teacher-attendance.html' },
                { name: 'Homework', icon: 'file-text', href: 'teacher-homework.html' },
                { name: 'Create Homework', icon: 'plus-square', href: 'teacher-create-homework.html' },
                { name: 'Grading', icon: 'check-circle', href: 'teacher-grading.html' },
            ],
            student: [
                { name: 'Dashboard', icon: 'layout-dashboard', href: 'student-dashboard.html' },
                { name: 'Subjects', icon: 'book', href: 'student-subjects.html' },
                { name: 'Assignments', icon: 'file-text', href: 'student-homework.html' },
                { name: 'Attendance', icon: 'clock', href: 'student-attendance.html' },
                { name: 'Grades', icon: 'bar-chart-2', href: 'student-grades.html' },
                { name: 'Profile', icon: 'user', href: 'student-profile.html' },
                { name: 'Logout', icon: 'log-out', href: 'login.html' },
            ]
        };

        const currentNav = navItems[role] || [];

        const navHTML = currentNav.map(item => {
            const isActive = activePage === item.href || (activePage === 'dashboard' && item.href.includes('dashboard'));
            const activeClass = isActive ? 'active' : '';
            return `
                <a href="${item.href}" class="nav-item ${activeClass}">
                    <i data-lucide="${item.icon}"></i>
                    <span>${item.name}</span>
                </a>
            `;
        }).join('');

        sidebarContainer.innerHTML = `
            <aside class="sidebar">
                <div class="sidebar-header">
                    <i data-lucide="graduation-cap" style="margin-right: 0.5rem; color: var(--primary);"></i>
                    EduManage
                </div>
                <nav class="sidebar-nav">
                    ${navHTML}
                </nav>
            </aside>
        `;
    },

    renderNavbar: (user) => {
        const navbarContainer = document.getElementById('navbar-container');
        if (!navbarContainer) return;

        navbarContainer.innerHTML = `
            <header class="navbar">
                <button class="btn btn-outline" id="sidebar-toggle" style="padding: 0.5rem;">
                   <i data-lucide="menu"></i>
                </button>
                <div class="flex items-center gap-md">
                    <span style="font-weight: 500;">${user.name}</span>
                    <div style="width: 32px; height: 32px; background-color: var(--primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">
                        ${user.name.charAt(0)}
                    </div>
                </div>
            </header>
        `;
    },

    init: (role, activePage, user = { name: 'User' }) => {
        AppComponents.renderSidebar(role, activePage);
        AppComponents.renderNavbar(user);

        // Initialize Icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // Mobile Sidebar Toggle
        const toggleBtn = document.getElementById('sidebar-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                const sidebar = document.querySelector('.sidebar');
                sidebar.classList.toggle('open');
            });
        }
    }
};
