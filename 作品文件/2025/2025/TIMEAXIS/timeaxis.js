function goToHomePage() {
    try {
        window.location.href = '../HOME/home.html';
    } catch (error) {
        console.error('跳转页面时出现错误:', error);
        alert('无法打开页面，请检查路径或文件是否存在。');
    }
}
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineContainer = document.querySelector('.timeline-container');

function checkVisibility() {
    timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top >= 0 && rect.bottom <= windowHeight) {
            item.classList.add('active');
            // 切换背景图片
            const bgImg = item.dataset.bgImg;
            timelineContainer.style.backgroundImage = `url(${bgImg})`;
        } else {
            item.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);