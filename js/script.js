
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function(e) {
        // 阻止點擊事件冒泡，避免干擾其他元素
        e.stopPropagation();
        
        // 切換 active 狀態
        navLinks.classList.toggle('active');
        
        // 漢堡按鈕動畫
        const spans = this.querySelectorAll('span');
        spans[0].classList.toggle('rotate-45');
        spans[1].classList.toggle('opacity-0');
        spans[2].classList.toggle('-rotate-45');
    });

    // 點擊連結後自動關閉選單
    function closeMenu() {
        navLinks.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].classList.remove('rotate-45');
        spans[1].classList.remove('opacity-0');
        spans[2].classList.remove('-rotate-45');
    }

    // 點擊選單外部自動關閉 (選配優化)
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            closeMenu();
        }
    });
