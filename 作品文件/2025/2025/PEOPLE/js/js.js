$(window).load(function () {
  $(".loading").fadeOut()
})

/****/
$(document).ready(function () {
  var whei = $(window).width()
  $("html").css({ fontSize: whei / 20 })
  $(window).resize(function () {
    var whei = $(window).width()
    $("html").css({ fontSize: whei / 20 })
  });
});


$(window).load(function () { $(".loading").fadeOut() })
$(function () {
  echarts_1()
  echarts_2()
  echarts_3()
  echarts_4()
  echarts_5()
  echarts_6()
  pe01()
  pe02()
  pe03()


  function echarts_1() {

  }
  function echarts_2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echarts2'));

    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        // formatter:'{c}' ,
      },
      grid: {
        left: '0',
        top: '30',
        right: '10',
        bottom: '-20',
        containLabel: true
      },
      legend: {
        data: ['总人口', '务农人口'],
        right: 'center',
        top: 0,
        textStyle: {
          color: "#000"
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
      },

      xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          // rotate: -90,
          formatter: function (value) { return value.split("").join("\n"); },
          textStyle: {
            color: "#000",
            fontSize: 14,

          },
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }

        },

        data: ['秦朝', '汉朝', '隋朝', '唐朝', '宋朝', '元朝', '五代十国', '明朝', '清朝']

      }, {

        axisPointer: { show: false },
        axisLine: { show: false },
        position: 'bottom',
        offset: 20,



      }],

      yAxis: [{
        type: 'value',
        axisTick: { show: false },
        // splitNumber: 6,
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        },
        axisLabel: {
          formatter: "{value} 万",
          textStyle: {
            color: "#000",
            fontSize: 14,
          },
        },

        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        }
      }],
      series: [
        {
          name: '总人口',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              color: 'rgba(228, 228, 126, 1)',
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(228, 228, 126, .2)'
              }, {
                offset: 1,
                color: 'rgba(228, 228, 126, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
          },
          itemStyle: {
            normal: {
              color: 'rgba(228, 228, 126, 1)',
              borderColor: 'rgba(228, 228, 126, .1)',
              borderWidth: 12
            }
          },
          data: [2500, 6000, 5000, 8000, 12000, 7000, 4000, 18000, 40000]

        }, {
          name: '务农人口',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {

            normal: {
              color: 'rgba(255, 128, 128, 1)',
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(255, 128, 128,.2)'
              }, {
                offset: 1,
                color: 'rgba(255, 128, 128, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
          },
          itemStyle: {
            normal: {
              color: 'rgba(255, 128, 128, 1)',
              borderColor: 'rgba(255, 128, 128, .1)',
              borderWidth: 12
            }
          },
          data: [2250, 5100, 4250, 6400, 9000, 4900, 2800, 11700, 24000]
        },
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_3() {
  }
  function echarts_5() {
    var myChart = echarts.init(document.getElementById('echarts5'));

    option = {

      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['农民数量'],
        right: 'center',
        top: 0,
        textStyle: {
          color: "#000"
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
      },
      grid: {
        left: '0',
        right: '20',
        bottom: '0',
        top: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['秦朝', '汉朝', '隋朝', '唐朝', '宋朝', '元朝', '五代十国', '明朝', '清朝'],
        axisLine: {
          lineStyle: {
            color: 'black'

          }
        },
        axisLabel: {
          //rotate:-90,
          formatter: function (value) { return value.split("").join("\n"); },
          textStyle: {
            color: "#000",
            fontSize: 14,
          }
        },
        axisLine: {
          lineStyle: {
            color: '#000'
          }
        },
      },

      yAxis: {
        type: 'value',
        splitNumber: 4,
        axisTick: { show: false },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.1)'
          }
        },
        axisLabel: {
          formatter: "{value} 万",
          textStyle: {
            color: "#000",
            fontSize: 14,
          }
        },
        axisLine: { show: false },
      },

      series: [{
        name: '农民数量',
        type: 'bar',
        stack: 'a',
        barWidth: '30', barGap: 0,
        itemStyle: {

          normal: {
            color: 'rgb(67, 163, 141)',
          }
        },
        data: [2250, 5100, 4250, 6400, 9000, 4900, 2800, 11700, 24000]
      },
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_4() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echarts4'));
    var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3'];
    option = {

      grid: {
        left: '2%',
        top: '1%',
        right: '5%',
        bottom: '0%',
        containLabel: true
      },
      xAxis: [{
        show: false,
      }],
      yAxis: [{
        axisTick: 'none',
        axisLine: 'none',
        offset: '7',
        axisLabel: {
          textStyle: {
            color: '#000',
            fontSize: '14',
          }
        },
        data: ['秦朝', '汉朝', '隋朝', '唐朝', '宋朝', '元朝', '五代十国', '明朝', '清朝']

      }, {
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
          formatter: "{value} 万",
          textStyle: {
            color: '#000',
            fontSize: '14',
          }
        },
        data: [2500, 6000, 5000, 8000, 12000, 7000, 4000, 18000, 40000]

      }, {
        name: '单位：件',
        nameGap: '50',
        nameTextStyle: {
          color: '#000',
          fontSize: '16',
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(0,0,0,0)'
          }
        },
        data: [],
      }],
      series: [{
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: [90, 85, 85, 80, 75, 70, 70, 65, 60],
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: function (param) {
              return param.value + '%';
            },
            textStyle: {
              color: '#000',
              fontSize: '12',
            }
          }
        },
        barWidth: 15,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
              offset: 0,
              color: '#03c893'
            },
            {
              offset: 1,
              color: '#0091ff'
            }
            ]),
            barBorderRadius: 15,
          }
        },
        z: 2
      }, {
        name: '白框',
        type: 'bar',
        yAxisIndex: 1,
        barGap: '-100%',
        data: [99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
        barWidth: 15,
        itemStyle: {
          normal: {
            color: 'rgba(0,0,0,.2)',
            barBorderRadius: 15,
          }
        },
        z: 1
      }]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  // 词云
  function echarts_6() {
    // var myChart = echarts.init(document.getElementById('echarts6'));

    // var keywords = [
    //   { name: '耕作', value: 100 },
    //   { name: '灌溉', value: 90 },
    //   { name: '施肥', value: 80 },
    //   { name: '播种', value: 70 },
    //   { name: '收割', value: 60 },
    //   { name: '农具', value: 50 },
    //   { name: '水利', value: 40 },
    //   { name: '养殖', value: 30 },
    //   { name: '蚕桑', value: 20 },
    //   { name: '手工业', value: 10 },
    //   { name: '政策', value: 5 }
    // ];

    // var option = {
    //   tooltip: {},
    //   series: [{
    //     type: 'wordCloud',
    //     shape: 'circle',
    //     left: 'center',
    //     top: 'center',
    //     width: '90%',
    //     height: '90%',
    //     right: null,
    //     bottom: null,
    //     sizeRange: [12, 60],
    //     rotationRange: [-90, 90],
    //     rotationStep: 45,
    //     gridSize: 8,
    //     drawOutOfBound: false,
    //     textStyle: {
    //       normal: {
    //         color: function () {
    //           return 'rgb(' + [
    //             Math.round(Math.random() * 160),
    //             Math.round(Math.random() * 160),
    //             Math.round(Math.random() * 160)
    //           ].join(',') + ')';
    //         }
    //       },
    //       emphasis: {
    //         shadowBlur: 10,
    //         shadowColor: '#333'
    //       }
    //     },
    //     data: keywords
    //   }]
    // };

    // myChart.setOption(option);
    // window.addEventListener("resize", function () {
    //   myChart.resize();
    // });


    // 不重复关键词列表
    const keywords = [
      { text: "耕作", size: 50 },
      { text: "灌溉", size: 45 },
      { text: "施肥", size: 40 },
      { text: "播种", size: 35 },
      { text: "收割", size: 35 },
      { text: "农具", size: 30 },
      { text: "水利", size: 30 },
      { text: "养殖", size: 25 },
      { text: "蚕桑", size: 25 },
      { text: "手工业", size: 20 },
      { text: "政策", size: 15 }
    ];

    // 将关键词列表转换为 WordCloud.js 需要的格式
    const wordList = keywords.map(word => [word.text, word.size]);

    // 配置词云参数
    const options = {
      list: wordList,
      gridSize: 10, // 网格大小，控制词与词之间的间距
      weightFactor: 1, // 字体大小缩放因子
      fontFamily: "SimHei, Arial, sans-serif", // 设置中文字体
      color: "random-dark", // 字体颜色，随机深色
      backgroundColor: "#ffffff", // 背景颜色
      rotateRatio: 0.5, // 旋转词的比例
      shape: "circle", // 词云形状，可选 circle, square, diamond, triangle, pentagon, star
      ellipticity: 1, // 椭圆度，控制词云的形状
      minSize: 10, // 最小字体大小
      shuffle: true // 是否随机排列词
    };

    // 初始化词云
    WordCloud(document.getElementById("wordcloud"), options);
  }

  function pe01() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pe01'));
    var txt = 81
    option = {
      title: {
        text: txt + '%',
        x: 'center',
        y: 'center',
        textStyle: {
          fontWeight: 'normal',
          color: '#000',
          fontSize: '18'
        }
      },
      color: 'rgba(255,255,255,.3)',

      series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '80%'],
        itemStyle: {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        },
        hoverAnimation: false,
        data: [{
          value: txt,
          name: '已使用',
          itemStyle: {
            normal: {
              color: '#eaff00',
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          }
        }, {
          name: '未使用',
          value: 100 - txt
        }]
      }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }

  function pe02() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pe02'));
    var txt = 17
    option = {
      title: {
        text: txt + '%',
        x: 'center',
        y: 'center',
        textStyle: {
          fontWeight: 'normal',
          color: '#000',
          fontSize: '18'
        }
      },
      color: 'rgba(255,255,255,.3)',

      series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '80%'],
        itemStyle: {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        },
        hoverAnimation: false,
        data: [{
          value: txt,
          name: '已使用',
          itemStyle: {
            normal: {
              color: '#ea4d4d',
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          }
        }, {
          name: '未使用',
          value: 100 - txt
        }]
      }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function pe03() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pe03'));
    var txt = 2
    option = {
      title: {
        text: txt + '%',
        x: 'center',
        y: 'center',
        textStyle: {
          fontWeight: 'normal',
          color: '#000',
          fontSize: '18'
        }
      },
      color: 'rgba(255,255,255,.3)',

      series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '80%'],
        itemStyle: {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        },
        hoverAnimation: false,
        data: [{
          value: txt,
          name: '已使用',
          itemStyle: {
            normal: {
              color: '#395ee6',
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          }
        }, {
          name: '未使用',
          value: 100 - txt
        }
        ]
      }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
})

// // 滚动表格
// document.addEventListener('DOMContentLoaded', function () {
//   // 初始化第一个表格
//   initScrollTable('scrollContainer1', 'scrollBody1');

//   // 初始化第二个表格
//   initScrollTable('scrollContainer2', 'scrollBody2');

//   function initScrollTable(containerId, bodyId) {
//     const scrollContainer = document.getElementById(containerId);
//     const scrollBody = document.getElementById(bodyId);
//     const originalRows = Array.from(scrollBody.querySelectorAll('tr:not(.clone-row)'));
//     const cloneRows = Array.from(scrollBody.querySelectorAll('.clone-row'));

//     // 计算单行高度
//     const rowHeight = originalRows[0].offsetHeight;
//     const totalHeight = originalRows.length * rowHeight;

//     let scrollPos = 0;
//     const scrollSpeed = 0.5; // 滚动速度，数值越小越慢
//     let animationId = null;
//     let isScrolling = true;

//     // 初始显示克隆行
//     cloneRows.forEach(row => row.style.display = '');

//     // 设置tbody高度为两倍内容高度，确保有足够空间滚动
//     scrollBody.style.height = (totalHeight * 2) + 'px';

//     function smoothScroll() {
//       if (!isScrolling) {
//         animationId = null;
//         return;
//       }

//       scrollPos += scrollSpeed;

//       // 当滚动超过原始内容高度时，重置位置
//       if (scrollPos >= totalHeight) {
//         scrollPos = 0;
//       }

//       scrollContainer.scrollTop = scrollPos;
//       animationId = requestAnimationFrame(smoothScroll);
//     }

//     // 鼠标悬停暂停滚动
//     scrollContainer.addEventListener('mouseenter', () => {
//       isScrolling = false;
//     });

//     // 鼠标离开恢复滚动
//     scrollContainer.addEventListener('mouseleave', () => {
//       isScrolling = true;
//       if (!animationId) {
//         smoothScroll();
//       }
//     });

//     // 开始滚动
//     smoothScroll();

//     // 清理动画帧
//     window.addEventListener('beforeunload', () => {
//       if (animationId) {
//         cancelAnimationFrame(animationId);
//       }
//     });
//   }
// });

document.addEventListener('DOMContentLoaded', function () {
  // Initialize both tables
  initScrollTable('scrollContainer1', 'scrollBody1');
  initScrollTable('scrollContainer2', 'scrollBody2');

  function initScrollTable(containerId, bodyId) {
    const scrollContainer = document.getElementById(containerId);
    const scrollBody = document.getElementById(bodyId);
    const originalRows = Array.from(scrollBody.querySelectorAll('tr:not(.clone-row)'));

    // Calculate total height of original rows
    const totalHeight = originalRows.reduce((sum, row) => sum + row.offsetHeight, 0);

    // Set container height to show about 5-6 rows at a time
    const visibleHeight = originalRows.slice(0, 5).reduce((sum, row) => sum + row.offsetHeight, 0);
    scrollContainer.style.height = `${visibleHeight * 7}px`;

    // Set tbody height to accommodate original + cloned content
    scrollBody.style.height = `${totalHeight * 2}px`;

    // Show clone rows
    document.querySelectorAll(`#${bodyId} .clone-row`).forEach(row => {
      row.style.display = '';
    });

    // Add animation class
    scrollBody.classList.add('scrolling-content');

    // Pause on hover
    scrollContainer.addEventListener('mouseenter', () => {
      scrollBody.style.animationPlayState = 'paused';
    });

    scrollContainer.addEventListener('mouseleave', () => {
      scrollBody.style.animationPlayState = 'running';
    });
  }
});
function goToHomePage() {
  try {
    window.location.href = '../HOME/home.html';
  } catch (error) {
    console.error('跳转页面时出现错误:', error);
    alert('无法打开页面，请检查路径或文件是否存在。');
  }
}
// 获取按钮元素
const leftButton = document.getElementById('leftButton');

// 为按钮添加点击事件监听器
leftButton.addEventListener('click', function () {
  try {
    window.location.href = '../LAND/index.html';
  } catch (error) {
    console.error('跳转页面时出现错误:', error);
    alert('无法打开页面，请检查路径或文件是否存在。');
  }
  console.log('左切换按钮被点击');
});
// 获取按钮元素
const rightButton = document.getElementById('rightButton');

// 为按钮添加点击事件监听器
rightButton.addEventListener('click', function () {
  try {
    window.location.href = '../SOLARTERM/index.html';
  } catch (error) {
    console.error('跳转页面时出现错误:', error);
    alert('无法打开页面，请检查路径或文件是否存在。');
  }
  console.log('右切换按钮被点击');
});















