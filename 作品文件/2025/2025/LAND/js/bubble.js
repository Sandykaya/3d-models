var bubbleChart = echarts.init(document.querySelector(".bubble .chart"));

var option = {
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return params.seriesName + '<br/>朝代: ' + params.data[0] + '<br/>数值: ' + params.data[1];
        }
    },
    legend: {
        data: ['灌溉率', '水利工程数量', '灌溉面积（万顷）'],
        top: 10
    },
    // 添加 grid 配置项来调整图表位置
    grid: {
        left: '5%',
        right: '5%',
        bottom: '0%',
        top: '25%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['战国以前', '战国至西汉', '东汉至南北朝', '隋唐宋', '元明清'],
        axisLabel: {
            color: 'black' // 设置 x 轴文字颜色为黑色
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                color: '#666'
            }
        },
        axisLabel: {
            color: 'black' // 设置 y 轴文字颜色为黑色
        }
    },
    series: [
        {
            name: '灌溉率',
            type: 'scatter',
            symbolSize: function (data) {
                return data[1] * 0.8; // 修改系数为 1
            },
            data: [
                ['战国以前', 10],
                ['战国至西汉', 25],
                ['东汉至南北朝', 35],
                ['隋唐宋', 45],
                ['元明清', 55]
            ]
        },
        {
            name: '水利工程数量',
            type: 'scatter',
            symbolSize: function (data) {
                return data[1] * 0.8; // 修改系数为 1
            },
            data: [
                ['战国以前', 10],
                ['战国至西汉', 30],
                ['东汉至南北朝', 40],
                ['隋唐宋', 60],
                ['元明清', 80]
            ]
        },
        {
            name: '灌溉面积（万顷）',
            type: 'scatter',
            symbolSize: function (data) {
                return data[1] * 0.8; // 修改系数为 1
            },
            data: [
                ['战国以前', 1],
                ['战国至西汉', 5],
                ['东汉至南北朝', 8],
                ['隋唐宋', 15],
                ['元明清', 20]
            ]
        }
    ]
};

bubbleChart.setOption(option);    