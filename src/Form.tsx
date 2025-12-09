import { useState } from "react"

const Form = () => {
    const [name, setName] =useState('')
    const [postName, setPostName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [send, setSend] = useState('')

  return (
    <div>
        <label>Name</label>
        <input type="text"value={name} onChange={(e) => setName(e.target.value)}/>
        <label>Post-Name</label>
        <input type="text" value={postName} onChange={(e) => setPostName(e.target.value)}/>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label>Number Phone</label>
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
        <button>Send</button>
    </div>
  )
}

export default Form