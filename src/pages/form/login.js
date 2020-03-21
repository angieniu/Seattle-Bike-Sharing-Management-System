import React from "react";
import { Card, Form, Input, Button, message, Icon, Checkbox } from "antd";
const FormItem = Form.Item;
class FormLogin extends React.Component{

    handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success(`${userInfo.userName} Congratulations! Password：${userInfo.userPwd}`)
            }
        })
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title="Login Form" style={{marginTop:10}}>
                    <Form style={{width:300}}>
                        <FormItem>
                            {
                                getFieldDecorator('userName',{
                                    initialValue:'Yanjie',
                                    rules:[
                                        {
                                            required:true,
                                            message:'Username should not be empty.'
                                        },
                                        {
                                            min:5,max:10,
                                            message:'Length should be between 5-10 characters.'
                                        },
                                        {
                                            pattern:new RegExp('^\\w+$','g'),
                                            message:'Username must only contain letters or digits'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="user"/>} placeholder="Username" />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: '123456',
                                    rules: []
                                })(
                                    <Input prefix={<Icon type="lock" />} type="password" placeholder="Password" />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName:'checked',
                                    initialValue: true
                                })(
                                    <Checkbox>Remember password</Checkbox>
                                )
                            }
                            <a href="#" style={{float:'right'}}>Forgotten account?</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>Log In</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}
export default Form.create()(FormLogin);