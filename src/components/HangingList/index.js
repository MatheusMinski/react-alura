import './HangingList.css'

const HangingList = (props) =>{
    return (
        <div className='hanging-list'>
            <label>{props.label}</label>
            <select onChange={evento => props.onValueChange(evento.target.value)} value={props.value}>
            <option value='' >Selecione um time</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default HangingList