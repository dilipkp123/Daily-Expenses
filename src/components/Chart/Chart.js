import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

export default function Chart(props) {
    const dataPointValues = props.dataPoints.map((key)=>{
return key.value
    })
    const maximumValue =Math.max(...dataPointValues)
  return (
    <div className='chart'>
        {props.dataPoints.map((datapoint) => {
            return (
                <ChartBar
                key = {datapoint.label}
                value={datapoint.value}
                label = {datapoint.label}
                maxValue={maximumValue}
                 ></ChartBar>
            )
        })}
    </div>
  )
}
