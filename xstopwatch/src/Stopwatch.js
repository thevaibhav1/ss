import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
  const [count,setCount]=useState({
    min:0,
    sec:0
  })
  const [start,setStart]=useState(false)
  const [reset,setReset]=useState(false)
    const clickHandaler=()=>{
      setStart(prev=>!prev)
  }
  const resetHandaler=()=>{
    setReset(true)
  }
  if(reset){
    setCount({
      min:0,
      sec:0
    })
    setReset((prev)=>!prev)
    setStart(false)
  }
  useEffect(()=>{
    const intervalid=setInterval(()=>{
    if(start){
      if(count.sec===59){
        setCount((prev)=>{
          return { ...prev,
            min: prev.min + 1,
            sec:0
          }
        })
      }
        else if(count.sec<59){
          setCount((prev)=>{
            return { ...prev,
              sec:prev.sec+1
            }
          })
        }
    }
    },1000)
    // console.log('second',count)
    return ()=>{
      console.log('third',count)
      clearInterval(intervalid)
    }
  },[count,count.sec,count.min, start])
  // console.log('first',count)
  return (
    <>
    <h1>Stopwatch</h1>
    <p>{`Time: `}{count.sec<10?`${count.min}:0${count.sec}`:`${count.min}:${count.sec}`}</p>
    <button onClick={clickHandaler}>{start?'Stop':'Start'}</button>
    <button onClick={resetHandaler}>Reset</button>
    </>
  )
}

export default Stopwatch