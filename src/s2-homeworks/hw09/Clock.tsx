import React, {useEffect, useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'


function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)


    // stud
    const [activeButton, setActiveButton] = useState<boolean>(false)
    const [stopButton, setstopButton] = useState<boolean>(true)


    const start = () => {
        debugger
        let newDate = new Date()
        newDate.setMinutes(newDate.getMinutes() - newDate.getMinutes() +1)

        // let dateNew = ()=> {
        //     let date = new Date()
        //     date.setMinutes( date.setMinutes(date.getMinutes() + 1))
        //     return date
        // }
        // console.log(dateNew)

        // @ts-ignore
        let timerId = setInterval(() => setDate(newDate.setMinutes(newDate.getMinutes() + 1)), 1000) ;
        setTimeout(() => { clearInterval(timerId); // @ts-ignore
            setDate(newDate.setMinutes(0)) }, 10000)
        setTimerId(+timerId)
        setActiveButton(!activeButton)
        setstopButton(!stopButton)

        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)

    }

    const stop = () => {
        clearTimeout(timerId)
        setstopButton(!stopButton)
        setActiveButton(!activeButton)

        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)

    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(true)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    }

    // const stringTime =  date.toLocaleTimeString() || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringTime = new Intl.DateTimeFormat('ru-Ru', {
        hour: "numeric",
        minute: "numeric"
    }).format(date) || <br/> //
    // const stringDate =  date.toLocaleDateString()|| <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем
    const stringDate = new Intl.DateTimeFormat('ru-RU', {
        day: 'numeric',
        month: "2-digit",
        year: "numeric"
    }).format(date) || <br/>

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    // const stringDay =  new Intl.DateTimeFormat([date.toString(), date.toString() ])  || <br/> // пишут студенты

    // чтобы было полное назване дня
    const stringDay = new Intl.DateTimeFormat('en-US', {
        weekday: 'long'
    }).format(date)
    // date.toDateString().split(' ').slice(0, 1) || <br/> // пишут студенты
    // const stringMonth = date.toDateString().split(' ').slice(1, 2) || <br/> // пишут студенты
    const stringMonth = new Intl.DateTimeFormat('en-US',
        {month: 'long'}).format(date) || <br/> // пишут студенты


    // console.log(stringTime)
    // console.log(stringDate)
    // console.log(stringDay)
    // console.log(stringMonth)
    return (

        <div className={s.clock}>

            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={activeButton} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={stopButton} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
