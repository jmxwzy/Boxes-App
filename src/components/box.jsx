import React, { Component } from 'react';


class Box extends Component {

    componentWillUnmount() {
        console.log('Box - Unmount');
    }

    render() { 
        // console.log(this.props); // 通过this.props属性可以从上到下传递数据。

        return ( // 返回渲染的html
            // 当子节点数量大于1时，可以用<div>或<React.Fragment>将其括起来。
            // JSX中使用{}嵌入表达式。
            <React.Fragment> 
                {/* 通过this.props.children属性传递子节点 */}
                {this.props.children[1]}
                <div style={this.getStyles()}>{this.toString()}</div>
                {this.props.children[3]}
                <button type="button" onClick={this.props.onClickLeft} className="btn btn-primary m-2">left</button>
                <button type="button" onClick={this.props.onClickRight} className="btn btn-success m-2">right</button>
                <button type="button" onClick={() => {this.props.onDelete(this.props.box.id)}} className="btn btn-danger m-2">Delete</button>
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
            marginLeft: this.props.box.x,
        };

        if (this.props.box.x === 0) {
            styles.backgroundColor = "orange";
        }

        return styles; 
    }

    toString() {
        const {x} = this.props.box;
        // return <h1>x: {x}</h1>;
        return `x: ${x}`;
    }
}
 
export default Box;