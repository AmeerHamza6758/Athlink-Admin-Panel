import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { dashboardGraphData } from '../../helpers/dummydata';
import './Graph.css'

export const Graph = ({ value, colors }) => {
  return (
    <>
      <CircularProgressbar value={value}
        strokeWidth={4}
        styles={buildStyles({
          pathColor: colors,
        })} />
    </>
  )
}

export const GraphData = () => {
  return (
    <div className='flex graph-data  w-full gap-4  sticky left-[34rem] justify-end'>
      {dashboardGraphData.map((items, index) => {
        return (
          <div className='flex items-center gap-2'>
            <span key={index} className={`bg-[${items.bgColor}] h-2 w-2 rounded-full`}></span>
            <div className='flex flex-col'>
              <span key={index} className='text-[#8A92A6]'>{items.name}</span>
              <span key={index} className='text-[#232D42]'>{items.percentage}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}


