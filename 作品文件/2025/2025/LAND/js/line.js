// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('chart'));

// 定义数据
var categories = ['唐朝', '宋朝', '元朝', '明朝', '清朝'];
var wheatData = [100, 150, 120, 180, 200];   // 小麦
var riceData = [80, 120, 100, 150, 160];      // 水稻
var beetData = [60, 90, 80, 110, 130];        // 甜菜
var cornData = [70, 100, 90, 120, 140];       // 玉米
var caneData = [50, 80, 70, 100, 120];        // 甘蔗

var option = {
    grid: {
        top: '20%',     // 顶部留更多空间给标题
        left: '10%',
        right: '5%',
        bottom: '20%'   // 底部留更多空间给图例
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['小麦', '水稻', '甜菜', '玉米', '甘蔗'],
        top: '1%',      // 图例位置上移
        left: '10%',
        orient: 'horizontal' // 设置图例水平排列，即一行显示
    },
    xAxis: {
        type: 'category',
        data: categories,
        axisLabel: {
            fontSize: 12,  // 调整朝代文字大小
            color: 'black' // 设置 x 轴文字颜色为黑色
        }
    },
    yAxis: {
        type: 'value',
        name: '产量（市斤）',
        axisLabel: {
            fontSize: 12,
            color: 'black' // 设置 y 轴刻度文字颜色为黑色
        },
        nameTextStyle: {
            color: 'black' // 设置 y 轴名称文字颜色为黑色
        },
        splitLine: {
            lineStyle: {
                color: '#333' // 设置 y 轴网格线颜色为黑色
            }
        }
    },
    series: [
        {
            name: '小麦',
            type: 'line',
            data: wheatData,
            label: {
                show: true,
                position: 'top',    // 名称显示在折线上方
                color: '#8BC34A',   // 文字颜色与线条一致
                fontSize: 12
            },
            itemStyle: {
                color: '#8BC34A'    // 绿色系
            }
        },
        {
            name: '水稻',
            type: 'line',
            data: riceData,
            label: {
                show: true,
                position: 'bottom',
                color: '#4CAF50',
                fontSize: 12
            },
            itemStyle: {
                color: '#4CAF50'    // 深绿色
            }
        },
        {
            name: '甜菜',
            type: 'line',
            data: beetData,
            label: {
                show: true,
                position: 'top',
                color: '#795548',   // 棕色系
                fontSize: 12
            },
            itemStyle: {
                color: '#795548'    // 棕色
            }
        },
        {
            name: '玉米',
            type: 'line',
            data: cornData,
            label: {
                show: true,
                position: 'bottom',
                color: '#FF9800',   // 橙色系
                fontSize: 12
            },
            itemStyle: {
                color: '#FF9800'    // 橙色
            }
        },
        {
            name: '甘蔗',
            type: 'line',
            data: caneData,
            label: {
                show: true,
                position: 'top',
                color: '#607D8B',   // 蓝灰色系
                fontSize: 12
            },
            itemStyle: {
                color: '#607D8B'    // 蓝灰色
            }
        }
    ]
};

myChart.setOption(option);    