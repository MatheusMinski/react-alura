import './Form.css'
import TextInput from '../TextInput'
import HangingList from '../HangingList'
import { useState } from 'react'
import Buttom from '../Buttom'

const Form = (props) => {
    const [name, setName] = useState('')
    const [post, setPost] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()

        props.onCollaboratorCreate({
            name,
            post,
            image,
            team
        })
    }

    return (
        <section className='create-form'>
            <form onSubmit={onSave}>
                <h2>Preecha os dados</h2>
                <TextInput
                    requiredProp={true}
                    label='Nome'
                    placeholder='digite seu nome'
                    value={name}
                    onValueChange={value => setName(value)}
                />
                <TextInput
                    label='Cargo'
                    placeholder='digite seu cargo'
                    value={post}
                    onValueChange={value => setPost(value)}
                />
                <TextInput
                    label='Imagem'
                    placeholder='digite a url da sua imagem'
                    value={image}
                    onValueChange={value => setImage(value)}
                />
                <HangingList
                    label='Time'
                    itens={props.teams}
                    value={team}
                    onValueChange={value => setTeam(value)}
                />
                <Buttom>
                    Criar card
                </Buttom>
            </form>
        </section>
    )
}

export default Form 