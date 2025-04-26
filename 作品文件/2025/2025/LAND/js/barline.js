var BarLineChart = echarts.init(document.querySelector(".barline .chart"));

// 定义数据
// 根据之前查找到的数据进行修改
var area = [5, 6.4, 6.33, 8.25, 5.48, 6.07, 4.21, 4.05, 2.5];
// 唐朝后期数据暂缺，以 '-' 表示，可根据实际情况进一步补充完善
const dynasties = [
    { dynasty: '秦朝' },
    { dynasty: '西汉' },
    { dynasty: '东汉' },
    { dynasty: '唐朝（前期）' },
    { dynasty: '宋朝（北宋）' },
    { dynasty: '元朝（元初）' },
    { dynasty: '明朝（后期）' },
    { dynasty: '清朝（初期）' },
    { dynasty: '清朝（乾隆后期）' }
];
// 提取朝代名称
const dynastyNames = dynasties.map(item => item.dynasty);

// 配置项
var BarLineOption = {
    tooltip: {
        trigger: "axis",
    },
    grid: {
        left: "10%",
        top: "25%",
        right: "10%",
        bottom: "15%",
        containLabel: true,
    },
    legend: {
        data: ["正常产量", "趋势线"],
        textStyle: {
            color: "rgb(0, 0, 0)",
        },
        itemWidth: 10, // 缩小图例图标宽度
        itemHeight: 10, // 缩小图例图标高度
        itemGap: 15, // 调整图例项之间的间距
        orient: "horizontal", // 设置图例水平排列
        top: 10, // 可按需调整图例距底部的距离
    },
    xAxis: {
        type: "category",
        data: dynastyNames,
        axisLine: {
            lineStyle: {
                color: "rgb(0, 0, 0)",
            },
        },
        axisLabel: {
            color: "rgb(0, 0, 0)",
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: {
        type: "value",
        name: "人均耕地面积(亩)",
        nameTextStyle: {
            color: "rgb(0, 0, 0)",
        },
        axisLine: {
            lineStyle: {
                color: "rgb(0, 0, 0)",
            },
        },
        axisLabel: {
            color: "rgb(0, 0, 0)",
        },
        splitLine: {
            lineStyle: {
                color: "rgb(0, 0, 0)",
            },
        },
    },
    series: [
        {
            name: "正常产量",
            type: "bar",
            itemStyle: {
                color: "rgb(129, 211, 146)",
            },
            data: area,
        },
        {
            name: "趋势线",
            type: "line",
            itemStyle: {
                color: "rgb(255, 99, 71)"
            },
            data: area,
            smooth: true
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
BarLineChart.setOption(BarLineOption);