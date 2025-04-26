document.getElementById('button1').addEventListener('click', function () {
    window.open('http://www.moa.gov.cn/ztzl/ymksn/gmrbbd/202111/t20211129_6383166.htm', '_blank');
});

document.getElementById('button2').addEventListener('click', function () {
    window.open('http://www.dangwei.moa.gov.cn/xxyd/202004/t20200424_6342275.htm', '_blank');
});

function goToTimeAxisPage() {
    try {
        window.location.href = '../TIMEAXIS/timeaxis.html';
    } catch (error) {
        console.error('跳转页面时出现错误:', error);
        alert('无法打开页面，请检查路径或文件是否存在。');
    }
}
function goToThreeDimensionPage() {
    try {
        window.location.href = '../THREEDIMENSION/index.html';
    } catch (error) {
        console.error('跳转页面时出现错误:', error);
        alert('无法打开页面，请检查路径或文件是否存在。');
    }
}
function goToVisualPage() {
    try {
        window.location.href = '../SOLARTERM/index.html';
    } catch (error) {
        console.error('跳转页面时出现错误:', error);
        alert('无法打开页面，请检查路径或文件是否存在。');
    }
}

const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        cards.forEach((otherCard, otherIndex) => {
            if (otherIndex !== index) {
                const direction = otherIndex < index ? 1 : -1;
                otherCard.style.transform = `rotateY(${direction * 30}deg)`;
            } else {
                otherCard.style.transform = 'rotateY(0deg)';
            }
        });
    });

    card.addEventListener('mouseleave', () => {
        cards.forEach((otherCard) => {
            otherCard.style.transform = 'rotateY(30deg)';
        });
    });
});    