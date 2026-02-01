<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'EduTrack')</title>

    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" rel="stylesheet">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">

    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
    </style>
    @yield('styles')
</head>

<body>

    <!-- Mobile Navbar -->
    <nav class="mobile-navbar justify-content-between">
        <div class="d-flex align-items-center gap-3">
            <button class="btn btn-light border-0" id="sidebarToggle"><i class="bi bi-list fs-4"></i></button>
            <span class="fw-bold text-primary"><i class="bi bi-book-half me-2"></i>EduTrack</span>
        </div>
        <div class="dropdown">
            <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2"
                style="width: 32px; height: 32px;">{{ substr(Auth::user()->name, 0, 1) }}</div>
        </div>
    </nav>
    <div class="sidebar-overlay" id="sidebarOverlay"></div>

    <!-- Sidebar -->
    <aside class="sidebar" id="sidebar">
        <div class="sidebar-brand text-primary"><i class="bi bi-book-half me-2"></i>EduTrack</div>
        <nav class="nav flex-column mt-3">
            @yield('sidebar-links')
            <div class="mt-auto border-top pt-2">
                <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <a href="{{ route('logout') }}" class="nav-link text-danger"
                        onclick="event.preventDefault(); this.closest('form').submit();">
                        <i class="bi bi-box-arrow-right"></i> Logout
                    </a>
                </form>
            </div>
        </nav>
    </aside>

    <main class="main-content">
        <div class="container-fluid p-0">
            @yield('content')
        </div>

        <!-- Footer -->
        <footer class="footer mt-auto">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-md-4 text-center text-md-start mb-2 mb-md-0">
                        <span class="fw-bold text-primary">EduTrack</span>
                    </div>
                    <div class="col-md-4 text-center mb-2 mb-md-0">
                        <small class="text-muted">Support: +962-7-9000-0000</small>
                    </div>
                    <div class="col-md-4 text-center text-md-end">
                        <small class="text-muted mb-0 me-3">&copy; 2026</small>
                        <a href="#" class="footer-link">Privacy</a>
                        <a href="#" class="footer-link">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const sidebar = document.getElementById('sidebar');
            const toggle = document.getElementById('sidebarToggle');
            const overlay = document.getElementById('sidebarOverlay');
            if (toggle) toggle.addEventListener('click', (e) => { e.stopPropagation(); sidebar.classList.toggle('show'); overlay.classList.toggle('show'); });
            if (overlay) overlay.addEventListener('click', () => { sidebar.classList.remove('show'); overlay.classList.remove('show'); });
        });
    </script>
    @yield('scripts')
</body>

</html>