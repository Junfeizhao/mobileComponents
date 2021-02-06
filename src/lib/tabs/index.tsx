import * as React from 'react';
import { Component } from 'react';
import "./style/index.scss";

/**
  mobile web组件 tabs简易封装
  by ian @2021 

 */

 interface IPprops{
  tabList:Array<String>,
  color?:String,
  activeColor?:String,
  undeline?:Boolean,
  onChange:Function,
  active?:Number
 }

 interface IPstate{
     
 }


export default class Tabs extends Component<IPprops,IPstate>{

     state={activeStyle:{},normalStyle:{},active:0,color:"black",activeColor:"orange",underline:true};

     componentDidMount(){
         this.setState({
             active:this.props.active?this.props.active:this.state.active,
             activeStyle:{color:this.props.activeColor?this.props.activeColor:"orange",borderBottom:this.props.undeline?(
                this.props.activeColor?`1px solid ${this.props.activeColor}`:"1px solid orange"
             ):null},
             normalStyle:{color:this.props.color?this.props.color:"black"}
         })
     };
   
    handleClick=(e:any)=>{
      const active=Number(e.currentTarget.dataset.index);
      this.setState({
          active
      },()=>{
          this.props.onChange(active);
      })
    }


    render(){
         const {active,normalStyle,activeStyle}=this.state;
         const {tabList}=this.props;
        return <div className="custom-tabs">
           {tabList.map((tabItem:any,index:any)=><span key={index} data-index={index} onClick={this.handleClick} style={index===active?activeStyle:normalStyle}>{tabItem}</span>)}
        </div>
    }
}