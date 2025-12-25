/*
 * つばめ学習舎 共通JavaScript
 * 全ページで使用するスクリプト
 */

// モバイルメニューの開閉
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('menuOverlay');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
}

// サブメニューの開閉
function toggleSubmenu(event) {
    event.preventDefault();
    const parentLi = event.target.parentElement;
    const submenu = parentLi.querySelector('.submenu');
    
    parentLi.classList.toggle('open');
    submenu.classList.toggle('open');
}

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
