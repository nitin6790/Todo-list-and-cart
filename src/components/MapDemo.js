import React, { useState } from 'react'

function MapDemo(props) {
    const [subname, setSubname] = useState(props.subject);
    const [newsub, setNewSubname] = useState('');
    console.log(subname)
    const addsubject = (event) => {
        event.preventDefault()
        console.log('form submitted', event.target)
        const subObject ={
            name : newsub,
            id : subname.length + 1
        }
        setSubname(subname.concat(subObject))
        setNewSubname('')
    }
    const handleSubadd = (event) => {
        console.log('button clicked', event.target)
        setNewSubname(event.target.value)
    }
  return (
    <div>
        <table>
            <tr><th>Sub - Id</th><th>Sub - Name</th></tr>
            {subname.map((val,key) => {
                return(
                    <tr key = {key}>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                    </tr>
                )
            })}
        </table>
        <form onSubmit = {addsubject}>
            <input onChange = {handleSubadd} />
            <button type = 'submit' >Save</button>
        </form>
    </div>
  )
}

export default MapDemo