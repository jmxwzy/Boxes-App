import React, { Component } from 'react';
import Box from './box';


const Boxes = (props) => {
    return (
        <React.Fragment>
                <button type="button" className="btn btn-info" onClick={props.onReset} style={{marginBottom: "15px"}}>Reset</button>
                {props.boxes.map(box => ( // 遍历state中的box
                    <Box key={box.id} box={box} onClickLeft={() => props.onClickLeft(box)} onClickRight={() => props.onClickRight(box)} onDelete={() => props.onDelete(box.id)}> {/*可以从上往下传递数据*/}
                        <h1>Box:</h1> {/* 组件标签之间的为子节点 */}
                        <p>#{box.id}</p>
                    </Box>
                ))}
            </React.Fragment>
    );
}
 
export default Boxes;