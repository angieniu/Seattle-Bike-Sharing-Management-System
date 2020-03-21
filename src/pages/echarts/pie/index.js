import React from 'react'
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react';
import echartTheme from '../echartTheme'
import themeLight from '../themeLight'
// import echarts from 'echarts'
import echarts from 'echarts/lib/echarts'
// import pie and line charts
import 'echarts/lib/chart/pie'
// import tooltip, title, legend, markPoint
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
export default class Bar extends React.Component {

    state = {}

    componentWillMount(){
        echarts.registerTheme('Bike-Sharing MS',themeLight);
    }

    getOption() {
        let option = {
            title: {
                text: 'User Biking Orders',
                x : 'center'
            },
            legend : {
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
            },
            tooltip: {
                trigger : 'item',
                formatter : "{a} <br/>{b} : {c} ({d}%)"
            },
            series: [
                {
                    name : 'Order Quantity',
                    type : 'pie',
                    radius : '55%',
                    center : [
                        '50%', '60%'
                    ],
                    data:[
                        {
                            value:1000,
                            name:'Monday'
                        },
                        {
                            value: 1000,
                            name: 'Tuesday'
                        },
                        {
                            value: 2000,
                            name: 'Wednesday'
                        },
                        {
                            value: 1500,
                            name: 'Thursday'
                        },
                        {
                            value: 3000,
                            name: 'Friday'
                        },
                        {
                            value: 2000,
                            name: 'Saturday'
                        },
                        {
                            value: 1200,
                            name: 'Sunday'
                        },
                    ],
                    itemStyle : {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
        return option;
    }

    getOption2() {
        let option = {
            title: {
                text: 'User Biking Orders',
                x: 'center'
            },
            legend: {
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday'
                ]
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            series: [
                {
                    name: 'Order Quantity',
                    type: 'pie',
                    radius: ['50%', '80%'],
                    center: [
                        '50%', '60%'
                    ],
                    data: [
                        {
                            value: 1000,
                            name: 'Monday'
                        }, {
                            value: 1000,
                            name: 'Tuesday'
                        }, {
                            value: 2000,
                            name: 'Wednesday'
                        }, {
                            value: 1500,
                            name: 'Thursday'
                        }, {
                            value: 3000,
                            name: 'Friday'
                        }, {
                            value: 2000,
                            name: 'Saturday'
                        }, {
                            value: 1200,
                            name: 'Sunday'
                        }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
        return option;
    }

    getOption3() {
        let option = {
            title: {
                text: 'User Biking Orders',
                x: 'center'
            },
            legend: {
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday'
                ]
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            series: [
                {
                    name: 'Order Quantity',
                    type: 'pie',
                    radius: '55%',
                    center: [
                        '50%', '50%'
                    ],
                    data: [
                        {
                            value: 1000,
                            name: 'Monday'
                        }, {
                            value: 1000,
                            name: 'Tuesday'
                        }, {
                            value: 2000,
                            name: 'Wednesday'
                        }, {
                            value: 1500,
                            name: 'Thursday'
                        }, {
                            value: 3000,
                            name: 'Friday'
                        }, {
                            value: 2000,
                            name: 'Saturday'
                        }, {
                            value: 1200,
                            name: 'Sunday'
                        }
                    ].sort(function (a, b) { return a.value - b.value; }),
                    roseType: 'radius',
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        }
        return option;
    }

    render() {
        return (
            <div>
                <Card title="Pie One">
                    <ReactEcharts
                        option={this.getOption()}
                        theme="Bike-Sharing MS"
                        notMerge={true}
                        lazyUpdate={true}
                        style={{ height: 500 }}/>
                </Card>
                <Card title="Pie Two" style={{marginTop:10}}>
                    <ReactEcharts
                        option={this.getOption2()}
                        theme="Bike-Sharing MS"
                        notMerge={true}
                        lazyUpdate={true}
                        style={{ height: 500 }}/>
                </Card>
                <Card title="Pie Three" style={{marginTop:10}}>
                    <ReactEcharts
                        option={this.getOption3()}
                        theme="Bike-Sharing MS"
                        notMerge={true}
                        lazyUpdate={true}
                        style={{ height: 500 }}/>
                </Card>
            </div>
        );
    }
}