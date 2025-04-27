// 模拟各朝代主要作物分布数据，需根据实际数据调整
const dynastyData = [
    {
        dynasty: '夏商周',
        crops: ['粟', '黍', '稻', '大豆', '麻'],
        proportions: [65, 25, 7.5, 2.5, 0]
    },
    {
        dynasty: '秦朝',
        crops: ['粟', '小麦', '麻'],
        proportions: [80, 12.5, 7.5]
    },
    {
        dynasty: '汉朝',
        crops: ['粟', '小麦', '豆类', '麻', '桑'],
        proportions: [55, 30, 17.5, 7.5, 5]
    },
    {
        dynasty: '魏晋南北朝',
        crops: ['粟', '小麦', '豆类', '桑'],
        proportions: [50, 20, 15, 5]
    },
    {
        dynasty: '隋唐',
        crops: ['水稻', '粟麦', '茶', '桑', '油菜籽'],
        proportions: [50, 40, 3, 4, 2]
    },
    {
        dynasty: '宋朝',
        crops: ['水稻', '小麦', '豆类', '油菜', '棉花'],
        proportions: [45, 30, 15, 5, 5]
    },
    {
        dynasty: '元朝',
        crops: ['水稻', '小麦', '桑', '棉花', '荞麦'],
        proportions: [40, 30, 8, 15, 7]
    },
    {
        dynasty: '明朝',
        crops: ['水稻', '小麦', '玉米', '甘薯', '油菜', '棉花'],
        proportions: [50, 25, 10, 8, 5, 2]
    },
    {
        dynasty: '清朝',
        crops: ['水稻', '小麦', '大豆', '玉米', '花生'],
        proportions: [40, 20, 25, 10, 5]
    }
];

function createPieChart(dynasty, crops, proportions) {
    const pieChart = echarts.init(document.getElementById('pieChart'));
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        grid: {
            top: '40%',
            left: '10%',
            right: '10%',
            bottom: '0%'
        },
        series: [
            {
                name: '作物比例',
                type: 'pie',
                radius: '60%',
                data: crops.map((crop, index) => ({
                    value: proportions[index],
                    name: crop
                })),
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                label: {
                    show: true,
                    formatter: function (params) {
                        return `${params.name}: ${params.value}%`;
                    }
                }
            }
        ],
        graphic: [
            {
                type: 'text',
                left: '70%', // 从 'right' 修改为 '80%'，左移一点
                top: '10%', // 从 '10%' 修改为 '20%'，下移一点
                style: {
                    text: dynasty,
                    fontSize: 14,
                    fontWeight: 'bold',
                    fill: '#000'
                }
            }
        ]
    };
    pieChart.setOption(option);
}

let currentIndex = 0;

function showPieChartByIndex(index) {
    const { dynasty, crops, proportions } = dynastyData[index];
    createPieChart(dynasty, crops, proportions);
}

document.addEventListener('DOMContentLoaded', function () {
    showPieChartByIndex(currentIndex);

    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + dynastyData.length) % dynastyData.length;
        showPieChartByIndex(currentIndex);
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % dynastyData.length;
        showPieChartByIndex(currentIndex);
    });
});