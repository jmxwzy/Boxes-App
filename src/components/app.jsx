import React, { Component } from 'react';
import NavBar from './navbar';
import Boxes from './boxes';


class App extends Component {
    // 要将多个组件(box, boxes)共用的数据存放到最近公共祖先(app)的this.state中。
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
                <NavBar boxesCount={this.state.boxes.filter(box => box.x !== 0).length}></NavBar>
                <div className='container'>
                    <Boxes
                        boxes={this.state.boxes}
                        onReset={this.handleReset}
                        onClickLeft={this.handleClickLeft}
                        onClickRight={this.handleClickRight}
                        onDelete={this.handleDelete}
                    >
                    </Boxes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;