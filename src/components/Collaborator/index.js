import './Collaborator.css'

const Collaborator = ({name, image, post}) => {
    return (
    <div className='colaborador'>
        <div className='cabecalho'>
            <img src={image} alt={name} />
        </div>
        <div className='rodape'>
            <h4>{name}</h4>
            <h5>{post}</h5>
        </div>
    </div>
    )
}

export default Collaborator 