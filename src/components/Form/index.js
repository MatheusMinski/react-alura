import './Form.css'
import TextInput from '../TextInput'
import HangingList from '../HangingList'
import Buttom from '../Buttom'

const Form = () => {
    const teams = [
        'Programação',
        'Front End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const onSave = (event) =>{
        event.preventDefault()
        console.log('form foi submetido')
    }

    return (
        <section className='create-form'>
            <form onSubmit={onSave}>
                <h2>Preecha os dados</h2>
                <TextInput requiredProp={true} label='Nome' placeholder='digite seu nome' />
                <TextInput label='Cargo' placeholder='digite seu cargo' />
                <TextInput label='Imagem' placeholder='digite a url da sua imagem' />
                <HangingList label='Time' itens={teams} />
                <Buttom>
                    Criar card
                </Buttom>
            </form>
        </section>
    )
}

export default Form 