$(function () {
    // // 获取装载柱状图的容器
    var firstDom = document.querySelector('.pic');
    // //根据准备好的dom，初始化Echarts实例
    var zheChart = echarts.init(firstDom);
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
        },
        yAxis: {
            type: 'value',
            axisPointer: {
                snap: true
            }
        },
        visualMap: {
            show: false,
            dimension: 0,
            pieces: [{
                lte: 6,
                color: 'green'
            }, {
                gt: 6,
                lte: 8,
                color: 'red'
            }, {
                gt: 8,
                lte: 14,
                color: 'green'
            }, {
                gt: 14,
                lte: 17,
                color: 'red'
            }, {
                gt: 17,
                color: 'green'
            }]
        },
        series: [
            {
                name:'',
                type:'line',
                smooth: true,
                data: [30,40,50,60,70],
                markArea: {
                    data: [ [{
                        name: '',
                        xAxis: '07:30'
                    }, {
                        xAxis: '10:00'
                    }], [{
                        name: '',
                        xAxis: '17:30'
                    }, {
                        xAxis: '21:15'
                    }] ]
                }
            }
        ]
    };

    zheChart.setOption(option)
    // 添加窗口模式实现响应式
    $(window).resize(function () {
        zheChart.resize();
    });    

    laydate.render({
        elem:'#test1'
    });
})