import {useState} from 'react'
import '../App.css'
import Notes from './Notes'

function Child() {
    const [value,setValue]=useState()
    const [notes,setNotes]=useState([])
    const [background,setBackground]=useState("blue")
    const colorBlue=()=>{setBackground('blue') }
    const colorRed=()=>{setBackground('red') }
    const colorBlack=()=>{setBackground('black') }
    const colorPurple=()=>{setBackground('purple') }
    const add =()=>{
        setNotes((notes)=>[
          ...notes, // prev notes set to notes
           {
            id:1,
            title: 'New Not',
            value:value,
            backgroundColor: background,
                     } //new notes added
        ])
        setValue("") //set value 
    }
    return (
    <div className='main'> 
          <div className="input">
            <input type='text' className='input-input' value={value} 
          onChange={((e)=>setValue(e.target.value))} 
          placeholder="enter your notes here"
          style={{backgroundColor: background}} />
          
          <button onClick={add}>Add</button>
            <button className='colorBlue' onClick={colorBlue}></button>
            <button className='colorRed' onClick={colorRed}></button>
            <button className='colorBlack' onClick={colorBlack}></button>
            <button className='colorPurple' onClick={colorPurple}></button>
            
          </div>
        <div className='notes'> 
          {
            notes.map((e)=>
          { return <div className='items' style={{backgroundColor: (e.backgroundColor)}} key={e.value}>{e.value}</div>})
          } {/* maping notes array's item */}
        </div>
    </div>
  )
}

export default Child