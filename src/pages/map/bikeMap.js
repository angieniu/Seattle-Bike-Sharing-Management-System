import React from 'react'
import { Card, Form } from 'antd'
import axios from '../../axios/index'
import BaseForm from '../../components/BaseForm'
export default class Order extends React.Component{

    state = {
        bikeInfo:{}
    }

    map = {}

    // form encapsulation, BaseForm
    formList = [
        {
            type: 'area'
        }, {
            type: 'time search'
        }, {
            type: 'SELECT',
            label: 'Booking Status',
            field: 'order_status',
            placeholder: 'All',
            initialValue: '0',
            width: 150,
            list: [{id: '0', name: 'All'}, {id: '1', name: 'On the Way'}, {id: '3', name: 'Finish'}]
        }
    ]

    params = {
        page:1
    }

    // Request List
    requestList = ()=>{
        axios.ajax({
            url:'/map/bike_list',
            data:{
                params:this.params
            }
        }).then((res)=>{
            if(res){
                this.setState({
                    total_count:res.result.total_count
                },()=>{
                    
                })
                this.renderMap(res.result);
            }
        })
    }

    // Search Form
    handleFilterSubmit = (filterParams) => {
        this.params = filterParams;
        this.requestList();
    };

    componentDidMount(){
        this.requestList();
    }

    // Map Rendering
    renderMap = (res) => {
        let list = res.route_list;
        this.map = new window.BMap.Map("container", {enableMapClick: false});
        let gps1 = list[0].split(',');
        let startPoint = new window.BMap.Point(gps1[0], gps1[1]);
        let gps2 = list[list.length - 1].split(',');
        let endPoint = new window.BMap.Point(gps2[0], gps2[1]);

        this.map.centerAndZoom(endPoint, 11);
        // map.clearOverlays();

        //Sites
        let startPointIcon = new window.BMap.Icon("/assets/start_point.png", new window.BMap.Size(36, 42), {
            imageSize: new window.BMap.Size(36, 42),
            anchor: new window.BMap.Size(18, 42)
        });
        
        var bikeMarkerStart = new window.BMap.Marker(startPoint, { icon: startPointIcon });
        this.map.addOverlay(bikeMarkerStart);

        let endPointIcon = new window.BMap.Icon("/assets/end_point.png", new window.BMap.Size(36, 42), {
            imageSize: new window.BMap.Size(36, 42),
            anchor: new window.BMap.Size(18, 42)
        });
        var bikeMarkerEnd = new window.BMap.Marker(endPoint, { icon: endPointIcon });
        this.map.addOverlay(bikeMarkerEnd);

        let routeList = [];
        list.forEach((item)=>{
            let p = item.split(",");
            let point = new window.BMap.Point(p[0], p[1]);
            routeList.push(point);
        })
        // Routes
        var polyLine = new window.BMap.Polyline(routeList, {
            strokeColor: "blue",
            strokeWeight: 3,
            strokeOpacity: 1
        });
        this.map.addOverlay(polyLine);

        // Parking Zone
        let serviceList = res.service_list;
        let servicePointist = [];
        serviceList.forEach((item) => {
            let point = new window.BMap.Point(item.lon, item.lat);
            servicePointist.push(point);
        })
        // line
        var polyServiceLine = new window.BMap.Polyline(servicePointist, {
            strokeColor: "#ef4136",
            strokeWeight: 3,
            strokeOpacity: 1
        });
        this.map.addOverlay(polyServiceLine);

        // add bikes
        let bikeList = res.bike_list;
        let bikeIcon = new window.BMap.Icon("/assets/bike.jpg", new window.BMap.Size(36, 42), {
            imageSize: new window.BMap.Size(36, 42),
            anchor: new window.BMap.Size(18, 42)
        });
        bikeList.forEach((item) => {
            let p = item.split(",");
            let point = new window.BMap.Point(p[0], p[1]);
            var bikeMarker = new window.BMap.Marker(point, { icon: bikeIcon });
            this.map.addOverlay(bikeMarker);
        })
        
        this.addMapControl();
    };

    // map control
    addMapControl = () => {
        let map = this.map;
        var top_right_control = new window.BMap.ScaleControl({anchor: window.BMAP_ANCHOR_TOP_RIGHT});
        var top_right_navigation = new window.BMap.NavigationControl({anchor: window.BMAP_ANCHOR_TOP_RIGHT});
        map.addControl(top_right_control);
        map.addControl(top_right_navigation);
        map.enableScrollWheelZoom(true);
        // legend.addLegend(map);
    };

    render(){
        return (
            <div>
                <Card>
                    <BaseForm formList={this.formList} filterSubmit={this.handleFilterSubmit}/>
                </Card>
                <Card style={{marginTop:10}}>
                    <div>In Total: {this.state.total_count} Bikes</div>
                    <div id="container" style={{height:500}}></div>
                </Card>
            </div>
        );
    }
}