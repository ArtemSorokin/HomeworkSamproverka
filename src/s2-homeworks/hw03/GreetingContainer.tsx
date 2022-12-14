import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: any, setName: Function, addUserCallback: Function) => {

    let trimedName =  name.trim()
    if (trimedName === '') {
        setError('Ошибка! Введите имя!')
    } else {
        addUserCallback(name)

    }

}

export const pureOnBlur = (name: string, setError: Function) => { // если имя пустое - показать ошибку
    let tremedNamr = name.trim()
    if (!tremedNamr) {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: Function) => { // если нажата кнопка Enter - добавить
    if (e.key === 'Enter') {
        addUser()
    }
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        let inputValue = e.currentTarget.value

        if (inputValue) {
            setName(inputValue)
            setError('')

        } else if (error !== '') {
            // error && setError(error)
            setError('Ошибка! Введите имя!')
        }
    }
    const addUser = () => {
        debugger
        pureAddUser(name, setError, setName, addUserCallback)
        setName('')
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
            pureOnEnter(e, addUser)
    }

    const totalUsers = users.length


    const lastUserName = users.slice(-1).map(u => u.name)// need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
