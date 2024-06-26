import React, { Component } from 'react';


// 组件中没有用到this.state时，可以简写为无状态的函数组件。
// 函数的传入参数为props对象
const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Navbar <span>Boxes Count: {props.boxesCount}</span>
                    </a>
                </div>
            </nav>
    );
}
 
export default NavBar;   