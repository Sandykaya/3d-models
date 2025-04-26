function goToHomePage() {
  try {
    window.location.href = "../HOME/home.html";
  } catch (error) {
    console.error("跳转页面时出现错误:", error);
    alert("无法打开页面，请检查路径或文件是否存在。");
  }
}
// 定义数据分类
const categories = [
  { name: "三维博物馆" },
  { name: "农具类" },
  { name: "加工器具类" },
  { name: "容器类" },
  { name: "灌溉类" },
];

const nodes = [
  {
    name: "三维博物馆",
    symbolSize: 140,
    category: 0,
    itemStyle: {
      normal: { color: "#F4A261" }, // 莫兰迪暖橘
    },
  },
  {
    name: "农具类",
    symbolSize: 120,
    category: 1,
    itemStyle: {
      normal: { color: "#A8D8B9" }, // 莫兰迪清新绿
    },
  },
  {
    name: "木制农具",
    symbolSize: 100,
    category: 1,
    itemStyle: {
      normal: { color: "#B7D3B8" }, // 浅绿色
    },
    link: "https://antimatter15.com/splat/?url=https://sandykaya.github.io/3d-models/c5shimo.splat"
  },
  {
    name: "铁犁牛耕",
    symbolSize: 100,
    category: 1,
    itemStyle: {
      normal: { color: "#8FB996" }, // 深绿色
    },
    link: "https://antimatter15.com/splat/?url=https://sandykaya.github.io/3d-models/c7renxiang.splat"
  },
  {
    name: "加工器具类",
    symbolSize: 120,
    category: 2,
    itemStyle: {
      normal: { color: "#E5989B" }, // 莫兰迪玫瑰粉
    },
  },
  {
    name: "石臼和杵",
    symbolSize: 100,
    category: 2,
    itemStyle: {
      normal: { color: "#E8AEB7" }, // 浅粉色
    },
    link: "https://antimatter15.com/splat/?url=https://sandykaya.github.io/3d-models/c1guang.splat"
  },
  {
    name: "石磨",
    symbolSize: 100,
    category: 2,
    itemStyle: {
      normal: { color: "#D17B88" }, // 深粉色
    },
    link: "https://antimatter15.com/splat/?url=https://sandykaya.github.io/3d-models/c2shimo.splat"
  },
  {
    name: "风谷车",
    symbolSize: 100,
    category: 2,
    itemStyle: {
      normal: { color: "#F2C6C2" }, // 温柔粉色
    },
    link: "https://antimatter15.com/splat/?url=https://sandykaya.github.io/3d-models/c3guche.splat"
  },
  {
    name: "容器类",
    symbolSize: 120,
    category: 3,
    itemStyle: {
      normal: { color: "#B5C0D0" }, // 莫兰迪雾霾蓝
    },
  },
  {
    name: "藤编容器",
    symbolSize: 100,
    category: 3,
    itemStyle: {
      normal: { color: "#A3B2C4" }, // 浅蓝灰
    },
    link: "https://antimatter15.com/splat/?url=https://sandykaya.github.io/3d-models/c6biandan.splat"
  },
  {
    name: "灌溉类",
    symbolSize: 120,
    category: 4,
    itemStyle: {
      normal: { color: "#F5DD90" }, // 莫兰迪奶油黄
    },
  },
  {
    name: "筒车",
    symbolSize: 100,
    category: 4,
    itemStyle: {
      normal: { color: "#F6E5A0" }, // 浅黄色
    },
    link: "https://antimatter15.com/splat/?url=https://sandykaya.github.io/3d-models/c8shuiche.splat"
  },
];

const links = [
  {
    source: "三维博物馆",
    target: "农具类",
    lineStyle: { normal: { color: "#F4A261" } },
  },
  {
    source: "三维博物馆",
    target: "加工器具类",
    lineStyle: { normal: { color: "#F4A261" } },
  },
  {
    source: "三维博物馆",
    target: "容器类",
    lineStyle: { normal: { color: "#F4A261" } },
  },
  {
    source: "三维博物馆",
    target: "灌溉类",
    lineStyle: { normal: { color: "#F4A261" } },
  },
  {
    source: "农具类",
    target: "木制农具",
    lineStyle: { normal: { color: "#A8D8B9" } },
  },
  {
    source: "农具类",
    target: "铁犁牛耕",
    lineStyle: { normal: { color: "#A8D8B9" } },
  },
  {
    source: "加工器具类",
    target: "石臼和杵",
    lineStyle: { normal: { color: "#E5989B" } },
  },
  {
    source: "加工器具类",
    target: "石磨",
    lineStyle: { normal: { color: "#E5989B" } },
  },
  {
    source: "加工器具类",
    target: "风谷车",
    lineStyle: { normal: { color: "#E5989B" } },
  },
  {
    source: "容器类",
    target: "藤编容器",
    lineStyle: { normal: { color: "#B5C0D0" } },
  },
  {
    source: "灌溉类",
    target: "筒车",
    lineStyle: { normal: { color: "#F5DD90" } },
  },
];

const option = {
  //backgroundColor: "#1a4377",//背景颜色
  tooltip: {},
  animationDurationUpdate: 1500,
  animationEasingUpdate: "quinticInOut",
  color: ["#FFD700", "#83e0ff", "#45f5ce", "#b158ff", "#00FF00"], // 更新颜色数组
  series: [
    {
      type: "graph",
      layout: "force",
      force: {
        repulsion: 1000,
        edgeLength: 150, // 将边的长度从 50 增大到 100
      },
      symbolSize: 50,
      roam: true,
      label: {
        normal: {
          show: true,
          fontSize: 20, // 设置字体大小
          fontWeight: "bold", // 设置字体粗细
        },
      },
      edgeSymbolSize: [4, 10],
      edgeLabel: {
        normal: {
          show: false,
          textStyle: {
            fontSize: 13,
          },
          formatter: "{c}",
        },
      },
      data: nodes,
      links: links,
      lineStyle: {
        normal: {
          opacity: 0.9,
          width: 5,
          curveness: 0,
        },
      },
      categories: categories,
    },
  ],
};

// 初始化 ECharts 实例
const myChart = echarts.init(document.getElementById("main"));

// 设置配置项并渲染图表
myChart.setOption(option);

// 监听节点点击事件
myChart.on("click", function (params) {
  if (params.componentType === "series" && params.seriesType === "graph") {
    const data = params.data;
    if (data.link) {
      window.open(data.link, "_blank");
    }
  }
});
