import { useEffect, useRef, useState } from "react"

const StopwatchTwo = () => {
    const [lapse, setLapse]=useState(0)
    const [running, setRunning]=useState(false)
    let intervalRef=useRef(null)  //holding a null value

    useEffect(()=>{
        //runs when the comp mounts (aka on initialization)

        //return below will run when the comp unmounts
        return ()=>{
            clearInterval(intervalRef.current)
        }
    },[])
    //dependencey array--when the values in here vhange, the code inside the useEffect hook will run again--this is comp did update pertion of the lifecycle

    const handleClearClick=()=>{
        //i want this to make our click stop
        clearInterval(intervalRef.current)

        //reset the state to its initial value
        setLapse(0)
        setRunning(false)

    }

    const handleRunClick=()=>{
        //need to check if the clock is running
        if(running){
            //stop the clock by allowing the user to pause clock:state=true
            clearInterval(intervalRef.current)
        }else{
            //start the clock: state=false
            let startTime=Date.now()-lapse;
            console.log('this is the start time: ', startTime)

            intervalRef.current=setInterval(()=>{
                setLapse(Date.now()-startTime)
            },0)
        }
        setRunning(!running)
    }



  return (
    <div>
        <label>{lapse}ms</label>
        {/* if running is true say start if its false say stop */}
        <button onClick={handleRunClick}>{running ? 'Stop' : 'Start'}</button>
        <button onClick={handleClearClick}>Clear</button>
    </div>
  )
}

export default StopwatchTwo