import React, {ChangeEvent, KeyboardEvent, KeyboardEventHandler} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void
    onBlur: any // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>)=> void // need to fix any
    error: string
    totalUsers: number
    lastUserName?: string[]
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
        name,
        setNameCallback,
        addUser,
        onEnter,
        onBlur,
        error,
        totalUsers,
        lastUserName,
    } // деструктуризация пропсов
) => {
    const inputClass = error? s.errorInput : s.greetingForm // need to fix with (?:)

    return (
        <div id={'hw3-form'} className={s.greetingForm}>
            <div className={s.text}>
                {'Людей добавили: '}
                <span id={'hw3-users-total'}>
                    {totalUsers}
                </span>
            </div>

            <div className={s.inputAndButtonContainer}>
                <div>
                    <input
                        id={'hw3-input'}
                        type={"text"}
                        value={name}
                        onChange={setNameCallback}
                        className={inputClass}
                        onKeyPress={onEnter}
                        onBlur={onBlur}
                    />
                    <div id={'hw3-error'} className={s.error}>
                        {error}
                    </div>
                </div>

                <button
                    id={'hw3-button'}
                    onClick={addUser}
                    onKeyPress={addUser}
                    className={s.button}

                >
                    add
                </button>
            </div>

            {lastUserName && (
                <div className={s.greeting}>
                    Привет<span id={'hw3-last-user'}>{lastUserName}</span>!
                </div>
            )}
        </div>
    )
}

export default Greeting
