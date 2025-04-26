// // 存储每个节气的介绍及相关诗句
// const introductionMap = {
//   立春: "东风带雨逐西风，大地阳和暖气生。立春，为二十四节气之首，此时节，冰雪消融，草木初萌，万物开始复苏。正如古诗云：“春风如醇酒，著物物不知。”",
//   雨水: "好雨知时节，当春乃发生。雨水节气，意味着降雨开始，雨量渐增。春雨贵如油，滋润着大地，唤醒了沉睡的生命。",
//   惊蛰: "一阵催花雨，数声惊蛰雷。惊蛰时节，春雷始鸣，惊醒蛰伏于地下越冬的蛰虫。大自然焕发出勃勃生机。",
//   春分: "春风如故人，拂槛来相迎。春分之日，昼夜平分，阴阳相半。此时，春色正中分，繁花似锦，美不胜收。",
//   清明: "清明时节雨纷纷，路上行人欲断魂。清明兼具自然与人文两大内涵，既是自然节气点，也是传统节日，人们扫墓祭祖，缅怀先人。",
//   谷雨: "谷雨如丝复似尘，煮瓶浮蜡正尝新。谷雨是春季的最后一个节气，此时降水明显增加，田中的秧苗初插、作物新种，最需要雨水的滋润。",
//   立夏: "绿树阴浓夏日长，楼台倒影入池塘。立夏表示告别春天，是夏天的开始。此时，万物至此皆长大，天地始交，万物并秀。",
//   小满: "夜莺啼绿柳，皓月醒长空。小满时节，夏熟作物的籽粒开始灌浆饱满，但还未成熟，只是小满，还未大满。",
//   芒种: "时雨及芒种，四野皆插秧。芒种是一个耕种忙碌的节气，民间也称其为“忙种”。此时，大麦、小麦等有芒作物种子已经成熟，抢收十分急迫。",
//   夏至: "昼晷已云极，宵漏自此长。夏至这天，太阳直射地面的位置到达一年的最北端，几乎直射北回归线，此时，北半球各地的白昼时间达到全年最长。",
//   小暑: "倏忽温风至，因循小暑来。小暑为小热，还不十分热，此时，天气开始炎热，但还没到最热。",
//   大暑: "赤日几时过，清风无处寻。大暑是一年中最热的时期，酷热多雨。此时，农作物生长最快，同时，很多地区的旱、涝、风灾等各种气象灾害也最为频繁。",
//   立秋: "天阶夜色凉如水，卧看牵牛织女星。立秋，标志着孟秋时节的正式开始。虽立秋，但暑气一时难消，还有“秋老虎”的余威。",
//   处暑: "处暑无三日，新凉直万金。处暑即为“出暑”，是炎热离开的意思。此时，气温逐渐下降，暑气渐消。",
//   白露: "露从今夜白，月是故乡明。白露是反映自然界寒气增长的重要节气。由于天气逐渐转凉，白昼有阳光尚热，但傍晚后气温便很快下降，昼夜温差大。",
//   秋分: "平分秋色一轮满，长伴云衢千里明。秋分这天太阳几乎直射地球赤道，全球各地昼夜等长。秋分过后，太阳直射点继续由赤道向南半球推移，北半球各地开始昼短夜长。",
//   寒露: "萧疏桐叶上，月白露初团。寒露是一个反映气候变化特征的节气，寒露节气后，昼渐短，夜渐长，日照减少，热气慢慢退去，寒气渐生。",
//   霜降: "霜降水返壑，风落木归山。霜降是秋季的最后一个节气，是秋季到冬季的过渡。霜降不是表示“降霜”，而是表示气温骤降、昼夜温差大。",
//   立冬: "落水荷塘满眼枯，西风渐作北风呼。立冬是冬季的第一个节气，代表着冬季的开始。此时，万物进入休养、收藏状态。",
//   小雪: "小雪已晴芦叶暗，长波乍急鹤声嘶。小雪节气，意味着天气会越来越冷、降水量渐增。此时，气温下降，但大地尚未过于寒冷，虽开始降雪，但雪量不大。",
//   大雪: "大雪压青松，青松挺且直。大雪节气是干支历子月的起始，标志着仲冬时节正式开始。大雪是反映气候特征的一个节气，大雪节气的特点是气温显著下降、降水量增多。",
//   冬至: "天时人事日相催，冬至阳生春又来。冬至是“二十四节气”之第22个节气，冬至这天太阳光直射南回归线，北半球各地白昼最短、黑夜最长。",
//   小寒: "小寒连大吕，欢鹊垒新巢。小寒是天气寒冷但还没有到极点的意思，它与大寒、小暑、大暑及处暑一样，都是表示气温冷暖变化的节气。",
//   大寒: "寒冬十二月，晨起践严霜。大寒是二十四节气中的最后一个节气，同小寒一样，大寒也是表示天气寒冷程度的节气。此时，天气寒冷到极致。",
// };
const option = {
    tooltip: {
        trigger: "item",
        // 自定义提示框内容
        formatter: function (params) {
            const dateMap = {
                立春: "2月3 - 5日",
                雨水: "2月18 - 20日",
                惊蛰: "3月5 - 6日",
                春分: "3月20 - 22日",
                清明: "4月4 - 6日",
                谷雨: "4月19 - 21日",
                立夏: "5月5 - 7日",
                小满: "5月20 - 22日",
                芒种: "6月5 - 7日",
                夏至: "6月21 - 22日",
                小暑: "7月6 - 8日",
                大暑: "7月22 - 24日",
                立秋: "8月7 - 9日",
                处暑: "8月22 - 24日",
                白露: "9月7 - 9日",
                秋分: "9月22 - 24日",
                寒露: "10月7 - 9日",
                霜降: "10月22 - 24日",
                立冬: "11月7 - 8日",
                小雪: "11月22 - 23日",
                大雪: "12月6 - 8日",
                冬至: "12月21 - 23日",
                小寒: "1月4 - 6日",
                大寒: "1月19 - 21日",
            };
            // 若名称存在于 dateMap 中，显示节气和对应的日期
            if (dateMap[params.name]) {
                return `<div style="font-size: 14px;">节气：${params.name
                    }</div><div style="font-size: 14px;">时间：${dateMap[params.name]
                    }</div>`;
            }
            // 若名称不在 dateMap 中，不显示提示框内容
            return "";
        },
    },
    series: [
        {
            name: "Access From Outer",
            type: "pie",
            radius: ["60%", "85%"],
            avoidLabelOverlap: false,
            label: {
                show: true,
                formatter: function (params) {
                    const dateMap = {
                        立春: "2月3-5日",
                        雨水: "2月18-20日",
                        惊蛰: "3月5-6日",
                        春分: "3月20-22日",
                        清明: "4月4-6日",
                        谷雨: "4月19-21日",
                        立夏: "5月5-7日",
                        小满: "5月20-22日",
                        芒种: "6月5-7日",
                        夏至: "6月21-22日",
                        小暑: "7月6-8日",
                        大暑: "7月22-24日",
                        立秋: "8月7-9日",
                        处暑: "8月22-24日",
                        白露: "9月7-9日",
                        秋分: "9月22-24日",
                        寒露: "10月7-9日",
                        霜降: "10月22-24日",
                        立冬: "11月7-8日",
                        小雪: "11月22-23日",
                        大雪: "12月6-8日",
                        冬至: "12月21-23日",
                        小寒: "1月4-6日",
                        大寒: "1月19-21日",
                    };
                    console.log("params:", params); // 添加调试语句
                    return dateMap[params.name] || ""; // 如果未找到日期，返回空字符串
                },
                position: "inside",
                fontSize: 10,
                color: "#fff",
                width: 100,
                fontWeight: "bold",
            },
            emphasis: {
                // 悬浮时扇形的样式
                itemStyle: {
                    scale: 1.1, // 悬浮时扇形放大1.1倍，可按需调整
                },
                label: {
                    show: true,
                    fontSize: 12, // 保持字体大小与非悬浮时一致
                    fontWeight: "normal", // 可按需调整字体粗细
                },
            },
            labelLine: {
                show: false,
            },
            itemStyle: {
                borderWidth: 0.5,
                borderColor: "#fff",
            },
            data: [
                { value: 1, name: "立春", itemStyle: { color: "#708D81" } }, // 柔和青绿 🌿
                { value: 1, name: "雨水", itemStyle: { color: "#7A9275" } },
                { value: 1, name: "惊蛰", itemStyle: { color: "#849770" } },
                { value: 1, name: "春分", itemStyle: { color: "#8E9C6A" } },
                { value: 1, name: "清明", itemStyle: { color: "#98A165" } }, // 黄绿色 🌱
                { value: 1, name: "谷雨", itemStyle: { color: "#A2A660" } },

                { value: 1, name: "立夏", itemStyle: { color: "#C18D5A" } }, // 橙焦糖 ☀️
                { value: 1, name: "小满", itemStyle: { color: "#CC7E55" } },
                { value: 1, name: "芒种", itemStyle: { color: "#D47150" } },
                { value: 1, name: "夏至", itemStyle: { color: "#DC664B" } }, // 橘红 🔥
                { value: 1, name: "小暑", itemStyle: { color: "#D95C4F" } },
                { value: 1, name: "大暑", itemStyle: { color: "#D05054" } },

                { value: 1, name: "立秋", itemStyle: { color: "#B85F5B" } }, // 红棕 🍂
                { value: 1, name: "处暑", itemStyle: { color: "#A7695F" } },
                { value: 1, name: "白露", itemStyle: { color: "#97635E" } },
                { value: 1, name: "秋分", itemStyle: { color: "#875E5D" } }, // 紫棕 🍁
                { value: 1, name: "寒露", itemStyle: { color: "#765A5C" } },
                { value: 1, name: "霜降", itemStyle: { color: "#65575B" } },

                { value: 1, name: "立冬", itemStyle: { color: "#596178" } }, // 冷蓝灰 ❄️
                { value: 1, name: "小雪", itemStyle: { color: "#546686" } },
                { value: 1, name: "大雪", itemStyle: { color: "#506B94" } },
                { value: 1, name: "冬至", itemStyle: { color: "#4B70A2" } }, // 深蓝紫 🌌
                { value: 1, name: "小寒", itemStyle: { color: "#4765A5" } },
                { value: 1, name: "大寒", itemStyle: { color: "#4259A8" } },
            ],
        },
        {
            name: "Access From Inner",
            type: "pie",
            radius: ["40%", "45%"],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: "center",
            },
            emphasis: {
                label: {
                    show: false,
                    fontSize: 40,
                    fontWeight: "bold",
                },
            },
            labelLine: {
                show: false,
            },
            itemStyle: {
                borderWidth: 2,
                borderColor: "#fff",
            },
            data: [
                { value: 1, name: "立春", itemStyle: { color: "#708D81" } }, // 柔和青绿 🌿
                { value: 1, name: "雨水", itemStyle: { color: "#7A9275" } },
                { value: 1, name: "惊蛰", itemStyle: { color: "#849770" } },
                { value: 1, name: "春分", itemStyle: { color: "#8E9C6A" } },
                { value: 1, name: "清明", itemStyle: { color: "#98A165" } }, // 黄绿色 🌱
                { value: 1, name: "谷雨", itemStyle: { color: "#A2A660" } },

                { value: 1, name: "立夏", itemStyle: { color: "#C18D5A" } }, // 橙焦糖 ☀️
                { value: 1, name: "小满", itemStyle: { color: "#CC7E55" } },
                { value: 1, name: "芒种", itemStyle: { color: "#D47150" } },
                { value: 1, name: "夏至", itemStyle: { color: "#DC664B" } }, // 橘红 🔥
                { value: 1, name: "小暑", itemStyle: { color: "#D95C4F" } },
                { value: 1, name: "大暑", itemStyle: { color: "#D05054" } },

                { value: 1, name: "立秋", itemStyle: { color: "#B85F5B" } }, // 红棕 🍂
                { value: 1, name: "处暑", itemStyle: { color: "#A7695F" } },
                { value: 1, name: "白露", itemStyle: { color: "#97635E" } },
                { value: 1, name: "秋分", itemStyle: { color: "#875E5D" } }, // 紫棕 🍁
                { value: 1, name: "寒露", itemStyle: { color: "#765A5C" } },
                { value: 1, name: "霜降", itemStyle: { color: "#65575B" } },

                { value: 1, name: "立冬", itemStyle: { color: "#596178" } }, // 冷蓝灰 ❄️
                { value: 1, name: "小雪", itemStyle: { color: "#546686" } },
                { value: 1, name: "大雪", itemStyle: { color: "#506B94" } },
                { value: 1, name: "冬至", itemStyle: { color: "#4B70A2" } }, // 深蓝紫 🌌
                { value: 1, name: "小寒", itemStyle: { color: "#4765A5" } },
                { value: 1, name: "大寒", itemStyle: { color: "#4259A8" } },
            ],
        },
        {
            name: "Access From Inner",
            type: "pie",
            radius: ["0%", "30%"],
            avoidLabelOverlap: false,
            label: {
                show: true, // 设置为 true 以显示文字
                position: "center",
                formatter: "{stroke|二十四\n节气}", // 使用 rich 样式
                rich: {
                    stroke: {
                        fontSize: 60, // 设置字体大小
                        fontWeight: "bold",
                        fontFamily: "华文新魏", // 设置字体
                        color: "rgb(7, 148, 105)", // 文字颜色
                        textBorderColor: "rgb(255, 255, 255)", // 描边颜色（白色）
                        textBorderWidth: 3, // 描边宽度
                        lineHeight: 60, // 调整行高
                        letterSpacing: 5, // 调整文字横向间距
                    },
                },
                width: 200, // 设置宽度以实现换行
                overflow: "break", // 超过宽度时换行
            },
            emphasis: {}, // 设置为空对象，取消悬浮效果
            labelLine: {
                show: false,
            },
            itemStyle: {
                color: "transparent", // 设置背景颜色为透明
                borderWidth: 0,
                borderColor: "transparent",
            },
            data: [{ value: 1 }],
        },

        {
            name: "Access From Out",
            type: "pie",
            radius: ["88%", "100%"],
            avoidLabelOverlap: false,
            label: {
                show: true, // 确保默认显示
                position: "inside",
                fontSize: 29,
                align: "center",
                verticalAlign: "middle",
                fontWeight: "bold",
                fontFamily: "华文新魏",
                color: "rgb(7, 148, 105)",
                textBorderColor: "#ffffff",
                width: 100, // 适当增加宽度，避免文字被隐藏
                overflow: "truncate",
                textBorderColor: "#ffffff", // 白色描边
                textBorderWidth: 1, // 默认描边宽度
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 40, // 悬浮时放大
                    fontWeight: "bold",
                    formatter: "{stroke|{b}}",
                    rich: {
                        stroke: {
                            fontSize: 40, // 悬浮状态放大字体
                            fontWeight: "bold",
                            fontFamily: "华文新魏",
                            color: "rgb(7, 148, 105)",
                            textBorderColor: "#ffffff",
                            textBorderWidth: 1, // 悬浮时描边加粗
                            align: "center",
                            verticalAlign: "middle",
                        },
                    },
                },
            },
            labelLine: {
                show: false,
            },
            itemStyle: {
                color: "transparent",
                borderWidth: 0,
                borderColor: "transparent",
            },
            data: [
                { value: 1, name: "立春" },
                { value: 1, name: "雨水" },
                { value: 1, name: "惊蛰" },
                { value: 1, name: "春分" },
                { value: 1, name: "清明" },
                { value: 1, name: "谷雨" },
                { value: 1, name: "立夏" },
                { value: 1, name: "小满" },
                { value: 1, name: "芒种" },
                { value: 1, name: "夏至" },
                { value: 1, name: "小暑" },
                { value: 1, name: "大暑" },
                { value: 1, name: "立秋" },
                { value: 1, name: "处暑" },
                { value: 1, name: "白露" },
                { value: 1, name: "秋分" },
                { value: 1, name: "寒露" },
                { value: 1, name: "霜降" },
                { value: 1, name: "立冬" },
                { value: 1, name: "小雪" },
                { value: 1, name: "大雪" },
                { value: 1, name: "冬至" },
                { value: 1, name: "小寒" },
                { value: 1, name: "大寒" },
            ],
        },
    ],
};
const chartDom = document.getElementById("chart");
const myChart = echarts.init(chartDom);
myChart.setOption(option);
window.addEventListener("resize", function () {
    myChart.resize();
});
var wordCloudChart = echarts.init(document.querySelector(".wordcloud .chart"));
var JosnList = [
    { name: "春耕备耕", value: 300, textStyle: { color: "#B03A3A" } }, // 深豆沙红
    { name: "春播作物", value: 280, textStyle: { color: "#3A5BA0" } }, // 莫兰迪蓝
    { name: "春灌保墒", value: 260, textStyle: { color: "#468A78" } }, // 莫兰迪绿
    { name: "夏收夏种", value: 240, textStyle: { color: "#D9833D" } }, // 莫兰迪橙
    { name: "夏季防虫", value: 220, textStyle: { color: "#7A4DA0" } }, // 莫兰迪紫
    { name: "夏管追肥", value: 200, textStyle: { color: "#8C5A2F" } }, // 深焦糖棕
    { name: "秋收秋种", value: 180, textStyle: { color: "#C75050" } }, // 莫兰迪红
    { name: "秋季深耕", value: 160, textStyle: { color: "#3A7E8A" } }, // 深青色
    { name: "秋菜种植", value: 140, textStyle: { color: "#985786" } }, // 玫瑰紫
    { name: "冬藏储粮", value: 120, textStyle: { color: "#468A56" } }, // 橄榄绿
    { name: "冬季修渠", value: 100, textStyle: { color: "#A87C40" } }, // 焦糖棕
    { name: "冬暖棚搭建", value: 90, textStyle: { color: "#C4A270" } }, // 暖金驼色
    { name: "翻耕土地", value: 80, textStyle: { color: "#325A9D" } }, // 经典深蓝
    { name: "平整田块", value: 70, textStyle: { color: "#7D3B30" } }, // 深咖啡红
    { name: "种子精选", value: 60, textStyle: { color: "#C6A47E" } }, // 奶油焦糖
    { name: "化肥施用", value: 50, textStyle: { color: "#F28544" } }, // 鲜暖橙
    { name: "农药喷洒", value: 40, textStyle: { color: "#6A3B86" } }, // 深紫蓝
    { name: "除草松土", value: 35, textStyle: { color: "#BF4C4C" } }, // 浓郁红
    { name: "田间灌溉", value: 30, textStyle: { color: "#C76F5E" } }, // 深驼红
    { name: "作物授粉", value: 25, textStyle: { color: "#A85968" } }, // 莫兰迪酒红
    { name: "果实套袋", value: 22, textStyle: { color: "#A87A4A" } }, // 深焦糖
    { name: "果蔬采摘", value: 20, textStyle: { color: "#C87575" } }, // 复古玫瑰
    { name: "粮食晾晒", value: 18, textStyle: { color: "#967D6E" } }, // 暖灰棕
    { name: "农产品加工", value: 15, textStyle: { color: "#4B5C75" } }, // 深灰蓝
    { name: "土壤改良", value: 130, textStyle: { color: "#487A6D" } }, // 复古绿
    { name: "农家肥堆积", value: 110, textStyle: { color: "#D06060" } }, // 复古暖红
    { name: "水利设施维护", value: 90, textStyle: { color: "#8B725E" } }, // 深灰褐
    { name: "农机检修", value: 70, textStyle: { color: "#D47440" } }, // 深橙色
    { name: "农膜覆盖", value: 60, textStyle: { color: "#734848" } }, // 莫兰迪深咖
    { name: "间作套种", value: 50, textStyle: { color: "#3F6180" } }, // 莫兰迪蓝灰
    { name: "轮作换茬", value: 40, textStyle: { color: "#894D67" } }, // 酒紫红
    { name: "病虫害防治", value: 35, textStyle: { color: "#665A54" } }, // 深灰褐
    { name: "气象观测", value: 30, textStyle: { color: "#74744A" } }, // 复古橄榄绿
    { name: "作物育苗", value: 25, textStyle: { color: "#935A5A" } }, // 莫兰迪棕红
    { name: "果树修剪", value: 22, textStyle: { color: "#6E5346" } }, // 深可可棕
    { name: "水产养殖", value: 20, textStyle: { color: "#446872" } }, // 深海蓝
    { name: "畜禽饲养", value: 18, textStyle: { color: "#9F8774" } }, // 莫兰迪米棕
    { name: "饲料储备", value: 15, textStyle: { color: "#8A5A5E" } }, // 莫兰迪玫红
    { name: "鱼塘清淤", value: 12, textStyle: { color: "#79644C" } }, // 复古卡其
    { name: "蚕桑养殖", value: 10, textStyle: { color: "#C78F6A" } }, // 焦糖橘
    { name: "茶园管理", value: 8, textStyle: { color: "#A56757" } }, // 深赤陶
    { name: "花卉种植", value: 6, textStyle: { color: "#A88774" } }, // 暖棕
    { name: "中药材栽培", value: 5, textStyle: { color: "#877670" } }, // 莫兰迪灰
    { name: "蘑菇培育", value: 4, textStyle: { color: "#BF8A65" } }, // 驼棕
    { name: "蜜蜂养殖", value: 3, textStyle: { color: "#D4967A" } }, // 杏粉橙
    { name: "蚯蚓堆肥", value: 2, textStyle: { color: "#926A5A" } }, // 复古红棕
    { name: "沼气利用", value: 1, textStyle: { color: "#BA8C72" } }, // 焦糖粉
    { name: "秸秆还田", value: 1, textStyle: { color: "#AF7D60" } }, // 莫兰迪奶茶
];

// 指定图表的配置项和数据
var optionWordCloud = {
    series: [
        {
            type: "wordCloud",
            gridSize: 3, // 减小网格大小，使词云更紧凑
            sizeRange: [4, 30], // 减小文字大小范围，使文字更小
            rotationRange: [-90, 90],
            rotationStep: 20,
            shape: "circle",
            textStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: "#333",
                },
            },
            data: JosnList,
        },
    ],
};

// 使用刚指定的配置项和数据显示图表。
wordCloudChart.setOption(optionWordCloud);
window.addEventListener("resize", function () {
    wordCloudChart.resize();
});
// 直接处理好的数据
const xData = [
    "夏商周",
    "秦汉",
    "魏晋南北朝",
    "隋唐",
    "宋朝",
    "元朝",
    "明朝",
    "清朝",
];
const yData = [550, 683.33, 400, 833.33, 1000, 1000, 300, 1066.67];

// 初始化 ECharts 实例
const precipitationChart = echarts.init(document.querySelector(".bar .chart"));

// 配置项
const Baroption = {
    color: ["rgb(93, 109, 213)"],
    // 提示框组件
    tooltip: {
        trigger: "axis",
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    // 修改图表位置大小
    grid: {
        left: "20px", // 进一步增加左边距，给 y 轴留出足够空间
        top: "10px",
        right: "2%",
        bottom: "-5%",
        containLabel: true,
    },
    // x轴相关配置
    xAxis: [
        {
            type: "category",
            data: ["夏商周", "秦汉", "魏晋", "隋唐", "宋朝", "元朝", "明朝", "清朝"],
            axisTick: {
                alignWithLabel: true,
            },
            // 修改刻度标签，相关样式
            axisLabel: {
                color: "rgb(0, 0, 0)", // 坐标轴字体颜色改为深灰色
                fontSize: 12, // 调小 x 轴字体大小
                rotate: 45, // 让 x 轴标签倾斜 45 度，避免重叠
            },
            // x轴样式不显示
            axisLine: {
                show: false,
            },
        },
    ],
    // y轴相关配置
    yAxis: [
        {
            type: "value",
            // 修改刻度标签，相关样式
            axisLabel: {
                color: "rgb(0, 0, 0)", // 坐标轴字体颜色改为深灰色
                fontSize: 12, // 调小 y 轴字体大小
                inside: true, // 让数值显示在坐标轴内侧（顶部）
                margin: -15, // 调整 y 轴标签的偏移量
            },
            // y轴样式修改
            axisLine: {
                lineStyle: {
                    color: "rgb(0, 0, 0)",
                    width: 2,
                },
            },
            // y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "rgba(0, 0, 0, 0.65)",
                },
            },
        },
    ],
    // 系列列表配置
    series: [
        {
            name: "平均降水量mm",
            type: "bar",
            barWidth: "50%", // 增大柱形宽度，让柱形之间距离更近
            // ajax传动态数据
            data: [550, 683.33, 400, 833.33, 1000, 1000, 300, 1066.67],
            itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 5,
            },
            label: {
                show: true, // 在柱形上面显示数值
                position: "top", // 数值显示在柱形顶部
                color: "rgb(0, 0, 0)", // 数值颜色
                fontSize: 12, // 数值字体大小
            },
        },
    ],
};

// 使用配置项显示图表
precipitationChart.setOption(Baroption);
window.addEventListener("resize", function () {
    precipitationChart.resize();
});
var temperatureChart = echarts.init(document.querySelector(".line .chart"));

// 处理后的数据
var xAxisData = [
    "夏商周 夏商时期",
    "夏商周 西周寒冷期",
    "秦汉 西汉",
    "秦汉 东汉至魏晋",
    "魏晋南北朝 南北朝",
    "隋唐 盛唐",
    "隋唐 中唐后",
    "宋朝 北宋",
    "元朝 温暖期",
    "明朝 小冰期",
    "清朝 清初",
];
var yAxisData = [2.5, -1.5, 1.5, -1.5, -1.5, 1, -2, -0.75, 0.75, -2, -6];

// 配置图表选项
var temperatureOption = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "cross",
            crossStyle: {
                color: "rgb(0, 0, 0)", // 将悬浮虚线颜色改为更深的颜色
                width: 1, // 可以根据需要调整虚线宽度
                type: "dashed", // 保持虚线样式
            },
            lineStyle: {
                color: "rgb(0, 0, 0)",
                width: 1,
                type: "dashed",
            },
        },
        textStyle: {
            color: "#rgb(0, 0, 0)",
        },
    },
    grid: {
        left: "7%",
        top: "18%",
        right: "3%",
        bottom: "0%",
        containLabel: true,
        // 将 grid 标注线颜色改为浅灰色
        lineStyle: {
            color: "rgb(0, 0, 0)",
        },
    },
    xAxis: {
        type: "category",
        data: xAxisData,
        axisLabel: {
            color: "rgb(0, 0, 0)",
        },
    },
    yAxis: {
        type: "value",
        name: "气温变化（℃）",
        color: "rgb(0, 0, 0)",
        min: -7,
        max: 3,
        interval: 2,
        axisLabel: {
            // 加深 y 轴坐标轴字体颜色
            color: "rgb(0, 0, 0)",
        },
        nameTextStyle: {
            color: "rgb(0, 0, 0)",
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgb(0, 0, 0)",
            },
        },
    },
    series: [
        {
            name: "气温变化",
            type: "line",
            data: yAxisData,
            label: {
                show: true,
                position: "top",
                color: "rgb(0, 0, 0)",
                backgroundColor: "transparent",
                borderColor: "transparent",
            },
            lineStyle: {
                color: "blue",
            },
            itemStyle: {
                color: "blue",
            },
        },
    ],
};

// 使用配置项显示图表
temperatureChart.setOption(temperatureOption);
window.addEventListener("resize", function () {
    temperatureChart.resize();
});

// 饼状图数据
var pieCategories = [
    "夏商周 西周寒冷期",
    "秦汉 温暖期",
    "秦汉 寒冷期",
    "魏晋南北朝 寒冷干旱期",
    "隋唐 温暖期",
    "隋唐 中唐后",
    "宋朝 南宋",
];

// 结合原文档及部分研究更新数据，部分为推断
var pieValues = [1800, 2300, 2000, 2500, 2100, 1700, 1600];

// 选取柔和沉稳但不暗淡的莫兰迪色系
var morandiBalancedColors = [
    "#D27D7D", // 柔和豆沙红
    "#789BB9", // 莫兰迪蓝（中度饱和）
    "#88A680", // 莫兰迪绿（稍微低饱和）
    "#E0A96D", // 莫兰迪暖橙（降低亮度）
    "#A987C0", // 莫兰迪紫（温和）
    "#E6C17A", // 莫兰迪黄（不刺眼）
    "#D98DA4", // 莫兰迪粉（不过亮）
];

// 初始化饼状图
var pieChart = echarts.init(document.querySelector(".pie .chart"));

var pieOption = {
    tooltip: {
        trigger: "item",
    },
    series: [
        {
            name: "日照时长",
            type: "pie",
            radius: "75%",
            center: ["50%", "50%"],
            data: pieCategories.map((category, index) => ({
                value: pieValues[index],
                name: category,
                itemStyle: { color: morandiBalancedColors[index] }, // 应用更柔和的莫兰迪色
            })),
            label: {
                show: true,
                color: "rgb(0, 0, 0)", // 适当降低亮度，避免过亮
                fontWeight: "500",
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 12,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.25)", // 适当减弱阴影
                },
            },
        },
    ],
};

// 渲染图表
pieChart.setOption(pieOption);

window.addEventListener("resize", function () {
    pieChart.resize();
});
var radarCategories = [
    "商朝",
    "西周",
    "东周",
    "秦朝",
    "汉朝",
    "魏晋南北朝",
    "隋朝",
    "唐朝",
    "宋朝",
    "元朝",
    "明朝",
    "清朝",
];

var floodValues = [9, 4, 18, 5, 37, 29, 11, 58, 67, 34, 89, 112];

var droughtValues = [17, 6, 23, 2, 23, 18, 7, 45, 31, 29, 47, 63];

// 初始化雷达图
var radarChart = echarts.init(document.querySelector(".radar .chart"));

var radarOption = {
    tooltip: {
        position: function (point, params, dom) {
            // 获取提示框的宽度和高度
            var boxWidth = dom.offsetWidth;
            var boxHeight = dom.offsetHeight;
            // 获取当前鼠标点的坐标
            var x = point[0];
            var y = point[1];
            // 计算提示框的位置，避免超出边界
            var maxX = window.innerWidth - 10;
            var maxY = window.innerHeight - 10;
            var newX = x + 10;
            var newY = y + 10;
            if (newX + boxWidth > maxX) {
                newX = x - boxWidth - 10;
            }
            if (newY + boxHeight > maxY) {
                newY = y - boxHeight - 10;
            }
            return [newX, newY];
        },
    },
    grid: {
        left: "7%",
        top: "-10%",
        right: "3%",
        bottom: "10%",
        containLabel: true,
    },
    legend: {
        data: ["旱灾", "涝灾"],
        right: "0%",
        top: "-3%",
        textStyle: {
            color: "rgb(0, 0, 0)",
            fontSize: 12, // 适当减小图例文字大小
        },
    },
    radar: {
        center: ["50%", "50%"], // 确保雷达图在中心
        radius: "70%", // 减小雷达图半径，为文字留出空间
        indicator: radarCategories.map(function (category) {
            return {
                name: category,
                min: 0,
                max: Math.max(...floodValues, ...droughtValues) + 10,
                nameTextStyle: {
                    color: "rgb(0, 0, 0)",
                    fontSize: 10, // 减小轴线标签文字大小
                },
            };
        }),
        splitLine: {
            lineStyle: {
                color: "rgba(153, 153, 153, 0.5)",
                width: 1,
            },
        },
        axisLine: {
            lineStyle: {
                color: "#999",
            },
        },
    },
    series: [
        {
            name: "旱灾",
            type: "radar",
            data: [
                {
                    value: droughtValues,
                    name: "旱灾",
                },
            ],
            label: {
                show: false,
            },
            areaStyle: {
                normal: {
                    color: "rgba(223, 178, 46, 0.98)",
                    shadowColor: "rgba(0, 0, 0, 0.5)",
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                },
            },
            itemStyle: {
                normal: {
                    color: "rgba(223, 178, 46, 0.98)",
                    borderWidth: 1,
                    borderColor: "rgba(223, 178, 46, 0.98)",
                    opacity: 1,
                    symbolSize: 3,
                },
            },
            lineStyle: {
                normal: {
                    color: "rgba(223, 178, 46, 0.98)",
                    width: 1.5, // 调整连线宽度使图像更美观
                },
            },
        },
        {
            name: "涝灾",
            type: "radar",
            data: [
                {
                    value: floodValues,
                    name: "涝灾",
                },
            ],
            label: {
                show: false,
            },
            areaStyle: {
                normal: {
                    color: "rgba(63, 127, 211, 0.87)",
                    shadowColor: "rgba(0, 0, 0, 0.5)",
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                },
            },
            itemStyle: {
                normal: {
                    color: "rgba(63, 127, 211, 0.87)",
                    borderWidth: 1,
                    borderColor: "rgba(63, 127, 211, 0.87)",
                    opacity: 1,
                    symbolSize: 3,
                },
            },
            lineStyle: {
                normal: {
                    color: "rgba(63, 127, 211, 0.87)",
                    width: 1.5,
                },
            },
        },
    ],
};

radarChart.setOption(radarOption);
window.addEventListener("resize", function () {
    radarChart.resize();
});
var BarLineChart = echarts.init(document.querySelector(".barline .chart"));

// 定义数据
var dynasties = [
    "商朝早期",
    "秦汉（西汉温暖期）",
    "秦汉（东汉寒冷期）",
    "魏晋南北朝",
    "清代（东北水灾时期）",
];
// 假设的正常产量基准，这里使用更具体的相对值，可根据实际情况调整
var normalYield = [80, 90, 50, 40, 60];
// 温暖湿润气候下的产量
var warmYield = [95, 105, 20, 25, 50];
// 寒冷干燥气候下的产量
var coldYield = [30, 40, 20, 15, 30];
// 旱灾下的产量
var droughtYield = [35, 45, 10, 10, 20];
// 水灾下的产量
var floodYield = [20, 30, 20, 10, 40];

// 配置项
var BarLineOption = {
    tooltip: {
        trigger: "axis",
    },
    grid: {
        left: "10%",
        top: "30%",
        right: "10%",
        bottom: "0%",
        containLabel: true,
    },
    legend: {
        data: ["正常产量", "温暖湿润", "寒冷干燥", "旱灾", "水灾"],
        textStyle: {
            color: "rgb(0, 0, 0)",
        },
        itemWidth: 10, // 缩小图例图标宽度
        itemHeight: 10, // 缩小图例图标高度
        itemGap: 15, // 调整图例项之间的间距
        orient: "horizontal", // 设置图例水平排列
        top: -3, // 可按需调整图例距底部的距离
    },
    xAxis: {
        type: "category",
        data: dynasties,
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
        name: "农作物产量（相对值）",
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
            data: normalYield,
        },
        {
            name: "温暖湿润",
            type: "line",
            itemStyle: {
                color: "#1890ff",
            },
            lineStyle: {
                color: "#1890ff",
            },
            data: warmYield,
        },
        {
            name: "寒冷干燥",
            type: "line",
            itemStyle: {
                color: "#ff4d4f",
            },
            lineStyle: {
                color: "#ff4d4f",
            },
            data: coldYield,
        },
        {
            name: "旱灾",
            type: "line",
            itemStyle: {
                color: "#faad14",
            },
            lineStyle: {
                color: "#faad14",
            },
            data: droughtYield,
        },
        {
            name: "水灾",
            type: "line",
            itemStyle: {
                color: "rgb(88, 86, 211)",
            },
            lineStyle: {
                color: "rgb(88, 86, 211)",
            },
            data: floodYield,
        },
    ],
};

// 使用刚指定的配置项和数据显示图表。
BarLineChart.setOption(BarLineOption);
// 获取按钮元素
const rightButton = document.getElementById('rightButton');

// 为按钮添加点击事件监听器
rightButton.addEventListener('click', function () {
    try {
        window.location.href = '../LAND/index.html';
    } catch (error) {
        console.error('跳转页面时出现错误:', error);
        alert('无法打开页面，请检查路径或文件是否存在。');
    }
    console.log('右切换按钮被点击');
});
// 获取按钮元素
const leftButton = document.getElementById('leftButton');

// 为按钮添加点击事件监听器
leftButton.addEventListener('click', function () {
    try {
        window.location.href = '../PEOPLE/index.html';
    } catch (error) {
        console.error('跳转页面时出现错误:', error);
        alert('无法打开页面，请检查路径或文件是否存在。');
    }
    console.log('左切换按钮被点击');
})