import React from 'react'
import { Card } from 'antd'
import ReactEcharts from 'echarts-for-react';
import echartTheme from '../echartTheme'
// import echarts from 'echarts'
// import ECharts 
import echarts from 'echarts/lib/echarts'
// import pie and line chart 
import 'echarts/lib/chart/bar'
// import tooltip, title, legend, and markPoint
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
export default class Bar extends React.Component {

    state={}

    componentWillMount(){
        echarts.registerTheme('Bike-Sharing MS',echartTheme);
    }

    getOption(){
        let option = {
            title: {
                text: 'User Biking Orders'
            },
            tooltip : {
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
                    'Sundary'
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'Order Quantity',
                    type: 'bar',
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

    getOption2(){
        let option = {
            title: {
                text: 'User Biking Orders'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend:{
                data:['King County Metro','Sound Transit']
            },
            xAxis: {
                data: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sundary'
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'King County Metro',
                    type: 'bar',
                    data: [
                        2000,
                        3000,
                        5500,
                        7000,
                        8000,
                        12000,
                        20000
                    ]
                },
                {
                name: 'Sound Transit',
                    type: 'bar',
                    data: [
                        1000,
                        2000,
                        2500,
                        4000,
                        6000,
                        7000,
                        8000
                    ]
                },
            ]
        }
        return option;
    }

    render(){
        return (
            <div>
                <Card title="Bar Chart One">
                    <ReactEcharts option={this.getOption()} theme="Bike-Sharing MS" notMerge={true} lazyUpdate={true} style={{ height: 500 }} />
                </Card>
                <Card title="Bar Chart Two" style={{marginTop:10}}>
                    <ReactEcharts option={this.getOption2()} theme="Bike-Sharing MS" notMerge={true} lazyUpdate={true} style={{ height: 500 }} />
                </Card>
            </div> 
        );
    }
}