import React, { Component } from 'react';


class Box extends Component {
    state = { // 定义局部变量
        x: 0,
        // colors: ['red', 'green', 'blue'],
    };

    handleClickLeft = (step) => {
        // console.log("click left", this);
        // 每次调用this.setState()函数后，会重新调用this.render()函数，用来修改虚拟DOM树。
        // React只会修改不同步的实际DOM树节点。
        this.setState({
            x:  this.state.x - step
        });
        console.log("x: ", this.state.x);
    };

    handleClickRight = (step) =>  {
        // console.log("click right", this);
        this.setState({
            x:  this.state.x + step
        });
        console.log("x: ", this.state.x);
    };

    handleClickLeftTmp = () => {
        return this.handleClickLeft(10);
    }

    render() { 
        return ( // 返回渲染的html
            // 当子节点数量大于1时，可以用<div>或<React.Fragment>将其括起来。
            // JSX中使用{}嵌入表达式。
            <React.Fragment> 
                <div style={this.getStyles()}>{this.toString()}</div>
                <button type="button" onClick={this.handleClickLeftTmp} className="btn btn-primary m-2">left</button>
                <button type="button" onClick={() => {this.handleClickRight(10)}} className="btn btn-success m-2">right</button>
                {/* {this.state.colors.length === 0 && <p>No color</p>}
                {this.state.colors.map(color => (
                    <div key={color}>{color}</div>
                ))} */}
            </React.Fragment>
        );
    }

    getStyles() { // 根据state中x的值不同设置样式
        let styles = {
            width: "50px",
            height: "50px",
            backgroundColor: "#66ccff",
            color : "white",
            textAlign: "center",
            lineHeight: "50px",
            borderRadius: "5px",
            marginLeft: this.state.x,
        };

        if (this.state.x === 0) {
            styles.backgroundColor = "orange";
        }

        return styles; 
    }

    toString() {
        const {x} = this.state;
        // return <h1>x: {x}</h1>;
        return `x: ${x}`;
    }
}
 
export default Box;