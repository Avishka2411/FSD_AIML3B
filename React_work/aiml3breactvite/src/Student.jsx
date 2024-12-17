import React from 'react'
import './studentstyle.css'
import logo from './logo1.webp'

function Student({data}) {

  return (
    <div className='icard'>
        <table>
            <tbody>
                <tr><td colSpan={2}>{props.college}</td></tr>
                <tr><td colSpan={2}>{props.pic}</td></tr>
                <tr><td>Roll:</td><td>{props.roll}</td></tr>
                <tr><td>Name:</td><td>{props.name}</td></tr>
                <tr><td>Branch:</td><td>{props.branch}</td></tr>
                <tr><td>Section:</td><td>{props.section}</td></tr>
            </tbody>
        </table>
        </div>
  )
}

export default Student