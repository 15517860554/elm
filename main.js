//入口文件(将虚拟dom转为真实dom节点)

import React from 'react'
import ReactDOM from 'react-dom'

import Home from './components/home'

import './stylesheet/app.css'
ReactDOM.render(<Home/>,document.getElementById("out"))
