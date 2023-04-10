import './HangingList.css'

const HangingList = (props) =>{
    return (
        <div className='hanging-list'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default HangingList