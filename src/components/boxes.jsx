import React, { Component } from 'react';
import Box from './box';

class Boxes extends Component {
    state = { // 每个组件的this.state只能在组件内部修改，不能在其他组件内修改; 每个维护的数据仅能保存在一个this.state中
        boxes: [
            {id: 1, x: 0},
            {id: 2, x: 1},
            {id: 3, x: 2},
            {id: 4, x: 3},
        ],
    }

    handleReset = () => {
        const boxes = this.state.boxes.map((box) => {
            return {
                id: box.id,
                x: 0
            }
        });
        this.setState({ boxes: boxes });
    }

    handleClickLeft = (box) => {
        // console.log("click left");
        // 每次调用this.setState()函数后，会重新调用this.render()函数，用来修改虚拟DOM树。
        // React只会修改不同步的实际DOM树节点。
        // this.setState({
        //     x:  this.state.x - step
        // });

        const boxes = [...this.state.boxes]; // 对数组进行值拷贝（直接用=是无法对数组进行值拷贝的，只能复制一份引用）
        const k = boxes.indexOf(box);
        boxes[k] = {...boxes[k]}; // 展开对象用{}, 展开数组用[]
        boxes[k].x --;
        // 不要直接修改this.state的值，因为setState函数可能会将修改覆盖掉。
        this.setState({
            boxes: boxes,
        });

    };

    handleClickRight = (box) =>  {
        // console.log("click right");

        const boxes = [...this.state.boxes]; // 不要直接修改this.state的值，因为setState函数可能会将修改覆盖掉。
        const k = boxes.indexOf(box);
        boxes[k] = {...boxes[k]}; // 浅拷贝
        boxes[k].x ++;
        this.setState({
            boxes: boxes,
        });
    };

    handleDelete = (boxId) => {
        const boxes = this.state.boxes.filter(box => box.id !== boxId);
        this.setState({
            boxes: boxes
        });
    }

    render() { 
        return (
            <React.Fragment>
                <button type="button" className="btn btn-info" onClick={this.handleReset} style={{marginBottom: "15px"}}>Reset</button>
                {this.state.boxes.map(box => ( // 遍历state中的box
                    <Box key={box.id} box={box} onClickLeft={() => this.handleClickLeft(box)} onClickRight={() => this.handleClickRight(box)} onDelete={this.handleDelete}> {/*可以从上往下传递数据*/}
                        <h1>Box:</h1> {/* 组件标签之间的为子节点 */}
                        <p>#{box.id}</p>
                    </Box>
                ))}
            </React.Fragment>
        );
    }
}
 
export default Boxes;