 import './TextInput.css'
 
 const InputText = (props) => {
    return (
     <div className="text-input">
        <label>{props.label}</label>
        <input placeholder={props.placeholder}/>
     </div>   
    )
 }

 export default InputText