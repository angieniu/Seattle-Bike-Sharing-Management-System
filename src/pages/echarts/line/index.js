import React from 'react'
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react';
import echartTheme from '../echartTheme'
// import echarts from 'echarts'
import echarts from 'echarts/lib/echarts'
// import pie and line charts
import 'echarts/lib/chart/line'
// import tooltip, title, legend, markPoint
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
export default class Line extends React.Component {

    state = {}

    componentWillMount(){
        echarts.registerTheme('Bike-Sharing MS',echartTheme);
    }

    getOption() {
        let option = {
            title: {
                text: 'User Biking Orders'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
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
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'Order Quantity',
                    type: 'line',
                    data: [
                        1000,
                        2000,
                        1500,
                        3000,
                        2000,
                        1200,
                        800
                    ]
                }
            ]
        }
        return option;
    }

    getOption2() {
        let option = {
            title: {
                text: 'User Biking Orders'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend:{
                data:['King County Metro Orders Quantity','Sound Transit Order Quantity']
            },
            xAxis: {
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
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'King County Metro Orders Quantity',
                    type: 'line',
                    stack: 'Total Quantity',
                    data: [
                        1200,
                        3000,
                        4500,
                        6000,
                        8000,
                        12000,
                        20000
                    ]
                },
                {
                    name: 'Sound Transit Order Quantity',
                    type: 'line',
                    stack: 'Total Quantity',
                    data: [
                        1000,
                        2000,
                        5500,
                        6000,
                        8000,
                        10000,
                        12000
                    ]
                },
            ]
        }
        return option;
    }

    getOption3() {
        let option = {
            title: {
                text: 'User Biking Orders'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type:'category',
                boundaryGap: false,
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
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'Order Quantity',
                    type: 'line',
                    data: [
                        1000,
                        2000,
                        1500,
                        3000,
                        2000,
                        1200,
                        800
                    ],
                    areaStyle: {}
                }
            ]
        }
        return option;
    }

    render() {
        return (
            <div>
                <Card title="Line Chart One">
                    <ReactEcharts
                        option={this.getOption()}
                        theme="Bike-Sharing MS"
                        notMerge={true}
                        lazyUpdate={true}
                        style={{
                        height: 500
                    }}/>
                </Card>
                <Card title="Line Chart Two" style={{marginTop:10}}>
                    <ReactEcharts
                        option={this.getOption2()}
                        theme="Bike-Sharing MS"
                        notMerge={true}
                        lazyUpdate={true}
                        style={{
                        height: 500
                    }}/>
                </Card>
                <Card title="Line Chart Three" style={{marginTop:10}}>
                    <ReactEcharts
                        option={this.getOption3()}
                        theme="Bike-Sharing MS"
                        notMerge={true}
                        lazyUpdate={true}
                        style={{
                        height: 500
                    }}/>
                </Card>
            </div>
        );
    }
}