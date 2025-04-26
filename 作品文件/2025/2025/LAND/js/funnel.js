// 右上角雷达图
var funnelChart = echarts.init(document.getElementById('funnelChart'));

// 数据，朝代和对应的耕地面积
var data = [
    { value: 0.12, name: '夏商周' },
    { value: 1.31, name: '秦朝' },
    { value: 6.51, name: '汉朝' },
    { value: 4.35, name: '魏晋南北朝' },
    { value: 8.7, name: '隋唐' },
    { value: 5.72, name: '宋朝' },
    { value: 3.85, name: '元朝' },
    { value: 7.84, name: '明朝' },
    { value: 12.7, name: '清朝' }
];

// 为较长的朝代名称设置简称，用于标签显示
var shortNames = {
    '魏晋南北朝': '魏晋南北朝'
};

// 配置项
var option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} 亿市亩'
    },
    legend: {
        show: false
    },
    grid: {
        top: '5%',
        bottom: '5%',
        left: '5%',
        right: '5%',
        containLabel: true
    },
    series: [
        {
            name: '耕地面积',
            type: 'funnel',
            data: data.map(item => ({
                value: item.value,
                name: shortNames[item.name] || item.name
            })),
            left: '5%',
            top: '10%',
            bottom: '10%',
            width: '90%',
            min: 0,
            max: Math.max(...data.map(item => item.value)),
            minSize: '0%',
            maxSize: '100%',
            sort: null,
            gap: 5,
            label: {
                show: true,
                position: 'inside',
                formatter: function (params) {
                    return `${params.name}`;
                },
                fontSize: 12,
                color: '#010101'
            },
            labelLine: {
                length: 15,
                lineStyle: {
                    width: 1,
                    type: 'solid',
                    color: '#999'
                }
            },
            itemStyle: {
                normal: {
                    borderRadius: 5,
                    opacity: 0.8
                }
            }
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
funnelChart.setOption(option);
