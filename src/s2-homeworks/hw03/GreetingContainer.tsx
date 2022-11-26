import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name:string)=>void
}

export const pureAddUser = (name: string, setError: any, setName: Function, addUserCallback: Function) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    debugger
    let trimedName = name.trim()
    if(trimedName === '') {
        setError('Ошибка! Введите имя!')
    } else {
        addUserCallback(name)

    }

}

export const pureOnBlur = (name: string, setError: Function) => { // если имя пустое - показать ошибку
}

export const pureOnEnter = (e: any, addUser: Function) => { // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any
    let addedUsername;

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        let trimed = e.currentTarget.value.trim()
        if(trimed){ setName(trimed)

        } else {
            error && setError(error)
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

    const onEnter = (e: any) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length
    // name? users[users.length].name: 'no name'
    // users.length > 0? users[users.length].name: 'no name'

    // users.map( (u)=> {
    //     if(totalUsers === 0){
    //         return 'no name'
    //     } else if(totalUsers === 1) {
    //         return  u.name
    //     } else if (totalUsers > 1){
    //         return users[totalUsers].name
    //     } else  return 'no name'
    // })

// let newNameLastElement =
    const lastUserName = users.slice(-1).map(u=>u.name)// need to fix

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
