 import './TextInput.css'
 
 const InputText = (props) => {
    return (
     <div className="text-input">
        <label>{props.label}</label>
        <input required={props.requiredProp} placeholder={props.placeholder}/>
     </div>   
    )
 }

 export default InputText