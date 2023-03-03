import {useState} from 'react'
import '../App.css'


function Child() {
    const [value,setValue]=useState()
    const [notes,setNotes]=useState([])
    const [background,setBackground]=useState("rgb(90, 90, 201)")
    const colorBlue=()=>{setBackground( "rgb(90, 90, 201)") }
    const colorGreen=()=>{setBackground( "rgb(76, 168, 108)") }
    const colorYelleow=()=>{setBackground('yellow') }
    const colorPurple=()=>{setBackground('purple') }

    const add =()=>{
        setNotes((notes)=>( 
          [
          ...notes, // prev notes set to notes
           {
            id:1,
            title: 'New Not',
            value:value,
            backgroundColor: background,
                     } //new notes added
        ]))
        setValue("") //set value 
    }
    return (
    <div className='main'> 
          <h1>Post-it</h1>
          <div className="input">
            <input type='text' className='input-input' value={value} 
          onChange={((e)=>setValue(e.target.value))} 
          placeholder="Enter your notes here..."
          style={{backgroundColor: background}} />
        
          <div>
          <button className='colorBlue' onClick={colorBlue}></button>
            <button className='colorGreen' onClick={colorGreen}></button>
            <button className='colorYellow' onClick={colorYelleow}></button>
            <button className='colorPurple' onClick={colorPurple}></button>
          </div>
          <div>
          <button onClick={add} className="add">Add</button>
          </div>
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