import React from 'react';
import { Card, Button, Table, Form, Select, Modal, message } from 'antd';
import axios from './../../axios/index';
import Utils from './../../utils/utils';
const FormItem = Form.Item;
const Option = Select.Option;
export default class City extends React.Component{

    state = {
        list:[],
        isShowOpenCity:false
    }
    params = {
        page:1
    }
    componentDidMount(){
        this.requestList();
    }

    // Request data 
    requestList = ()=>{
        let _this = this;
        axios.ajax({
            url: '/open_city',
            data:{
                params:{
                    page:this.params.page
                }
            }
        }).then((res)=>{
            let list = res.result.item_list.map((item, index) => {
                item.key = index;
                return item;
            });
            this.setState({
                list:list,
                pagination:Utils.pagination(res,(current)=>{
                    _this.params.page = current;
                    _this.requestList();
                })
            })
        })
    }

    // Open City
    handleOpenCity = ()=>{
        this.setState({
            isShowOpenCity:true
        })
    }
    // Open City Submission
    handleSubmit = ()=>{
        let cityInfo = this.cityForm.props.form.getFieldsValue();
        console.log(cityInfo);
        axios.ajax({
            url:'/city/open',
            data:{
                params:cityInfo
            }
        }).then((res)=>{
            if(res.code == '0'){
                message.success('Succeed');
                this.setState({
                    isShowOpenCity:false
                })
                this.requestList();
            }
        })
    }
    render(){
        const columns = [
            {
                title:'Area ID',
                dataIndex:'id'
            }, {
                title: 'Area Name',
                dataIndex: 'name'
            }, {
                title: 'Biking Mode',
                dataIndex: 'mode',
                render(mode){
                    return mode ==1 ?'Bike-sharing Parking Zone':'Restricted Parking Zone';
                }
            }, 
            {
                title: 'Operation Mode',
                dataIndex: 'op_mode',
                render(op_mode) {
                    return op_mode == 1 ? 'Self-employed' : 'Franchising';
                }
            }, 
            {
                title: 'Franchisee Name',
                dataIndex: 'franchisee_name'
            }, {
                title: 'Area Admins',
                dataIndex: 'city_admins',
                render(arr){
                    return arr.map((item)=>{
                        return item.user_name;
                    }).join(',');
                }
            }, {
                title: 'Open Time',
                dataIndex: 'open_time'
            }, {
                title: 'Operation Time',
                dataIndex: 'update_time',
                render: Utils.formateDate
            }, {
                title: 'System Admins',
                dataIndex: 'sys_user_name'
            }
        ]
        return (
            <div>
                <Card>
                    <FilterForm />
                </Card>
                <Card style={{marginTop:10}}>
                    <Button type="primary" onClick={this.handleOpenCity}>Open Area</Button>
                </Card>
                <div className="content-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                    />
                </div>
                <Modal 
                    title="Open Area"
                    visible={this.state.isShowOpenCity}
                    onCancel={()=>{
                        this.setState({
                            isShowOpenCity:false
                        })
                    }}
                    onOk={this.handleSubmit}
                >
                    <OpenCityForm wrappedComponentRef={(inst)=>{this.cityForm = inst;}}/>
                </Modal>
            </div>
        );
    }
}

class FilterForm extends React.Component{

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline">
                <FormItem label="Area">
                    {
                        getFieldDecorator('area_id')(
                            <Select
                                style={{width:100}}
                                placeholder="All"
                            >
                                <Option value="">All</Option>
                                <Option value="1">Bothell</Option>
                                <Option value="2">Tukwila</Option>
                                <Option value="2">Seattle(North)</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="Use Mode">
                    {
                        getFieldDecorator('mode')(
                            <Select
                                style={{ width: 120 }}
                                placeholder="All"
                            >
                                <Option value="">All</Option>
                                <Option value="1">Free Parking Zone Mode</Option>
                                <Option value="2">Free Carpool (HOV) Parking Permit Mode</Option>
                                <Option value="3">Standard Solo Drive (SOV) Parking Permit Mode</Option>
                                <Option value="4">Reduced Rate Solo Driver Permit Mode</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="Operating Agents">
                    {
                        getFieldDecorator('op_agent')(
                            <Select
                                style={{ width: 80 }}
                                placeholder="All"
                            >
                                <Option value="">All</Option>
                                <Option value="1">King County Metro</Option>
                                <Option value="2">Sound Transit</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{margin:'0 20px'}}>Search</Button>
                    <Button>Reset</Button>
                </FormItem>
            </Form>
        );
    }
}
FilterForm = Form.create({})(FilterForm);

class OpenCityForm extends React.Component{
    render(){
        const formItemLayout = {
            labelCol:{
                span:5
            },
            wrapperCol:{
                span:19
            }
        }
        const { getFieldDecorator }  =this.props.form;
        return (
            <Form layout="horizontal">
                <FormItem label="Select Area" {...formItemLayout}>
                    {
                        getFieldDecorator('city_id',{
                            initialValue:'1'
                        })(
                            <Select style={{ width: 100 }}>
                                <Option value="">All</Option>
                                <Option value="1">Bothell</Option>
                                <Option value="2">Tukwila</Option>
                                <Option value="3">Seattle(North)</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="Operating Agent" {...formItemLayout}>
                    {
                        getFieldDecorator('op_agent', {
                            initialValue: '1'
                        })(
                            <Select style={{ width: 100 }}>
                                <Option value="1">King County Metro</Option>
                                <Option value="2">Sound Transit</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="Use Mode" {...formItemLayout}>
                    {
                        getFieldDecorator('use_mode', {
                            initialValue: '1'
                        })(
                            <Select style={{ width: 100 }}>
                                <Option value="1">Free Parking Zone Mode</Option>
                                <Option value="2">Free Carpool (HOV) Parking Permit Mode</Option>
                                <Option value="3">Standard Solo Drive (SOV) Parking Permit Mode</Option>
                                <Option value="4">Reduced Rate Solo Driver Permit Mode</Option>
                            </Select>
                        )
                    }
                </FormItem>
            </Form>
        );
    }
}
OpenCityForm = Form.create({})(OpenCityForm);