import './TextInput.css'
 
 const InputText = (props) => {

   const onType = (evento) => {
      props.onValueChange(evento.target.value)
   }

    return (
     <div className="text-input">
        <label>{props.label}</label>
        <input value={props.value} onChange={onType} required={props.requiredProp} placeholder={props.placeholder}/>
     </div>   
    )
 }

 export default InputText