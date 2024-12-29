import './App.css'

import cLogo from './assets/C.png'

import { useEffect, useState } from 'react'

function App() {

  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <>
      <div className="container">
        <div className={"circle" + (selectIndex === 0 ? " circle_selected" : "")} onClick={() => { setSelectIndex(0) }} />
        <div className="line"></div>
        <div className={"circle" + (selectIndex === 1 ? " circle_selected" : "")} onClick={() => { setSelectIndex(1) }} />
        <div className="line"></div>
        <div className={"circle" + (selectIndex === 2 ? " circle_selected" : "")} onClick={() => { setSelectIndex(2) }} />
        <div className="line"></div>
        <div className={"circle" + (selectIndex === 3 ? " circle_selected" : "")} onClick={() => { setSelectIndex(3) }} />
        <div className="line"></div>
        <div className={"circle" + (selectIndex === 4 ? " circle_selected" : "")} onClick={() => { setSelectIndex(4) }} />
        <div className="line"></div>
        <div className={"circle" + (selectIndex === 5 ? " circle_selected" : "")} onClick={() => { setSelectIndex(5) }} />
      </div>

    </>
  )
}

export default App
