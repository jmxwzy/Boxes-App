import React, { Component } from 'react';
import Box from './box';

class Boxes extends Component {
    state = {
        boxes: [
            {id: 1, x: 0},
            {id: 2, x: 1},
            {id: 3, x: 2},
            {id: 4, x: 3},
        ],
    }

    render() { 
        return (
            <React.Fragment>
                {this.state.boxes.map(box => (
                    <Box key={box.id} x={box.x}></Box> // 可以从上往下传递数据
                ))}
            </React.Fragment>
        );
    }
}
 
export default Boxes;