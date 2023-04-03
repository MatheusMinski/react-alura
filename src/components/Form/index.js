import './Form.css'
import TextInput from '../TextInput'

const Form = () => {
    return (
        <section className='create-form'>
            <form>
                <h2>Preecha os dados</h2>
                <TextInput label='Nome' placeholder='digite seu nome' />
                <TextInput label='Cargo' placeholder='digite seu cargo' />
                <TextInput label='Imagem' placeholder='digite a url da sua imagem' />
            </form>
        </section>
    )
}

export default Form