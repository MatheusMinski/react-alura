import './Buttom.css'

const Buttom = (props) => {
    return (
        <button className='form-buttom'>{props.children}</button>
    )
}

export default Buttom