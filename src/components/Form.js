import React, { useState, useRef, useEffect } from "react"
import { useForm } from '../hooks/useForm'
import { handlerFormSubmit } from '../helpers/handlerFormSubmit'

export const Form = ({ categoriesArray, setUpdateRecent, updateRecent }) => {
    const [active3D, setActive3D] = useState(true)
    const [form3D, setForm3D] = useState()
    const [input3D, setInput3D] = useState()

    const title = useRef(null)
    const titleTwo = useRef(null)
    const formBtn = useRef(null)
    const formBtnTwo = useRef(null)

    function handleForm(e) {
        e.preventDefault()
    }

    const handleMouseMove = (e) => {
        let axisX = (window.innerWidth * 0.75 - e.pageX) / 20
        let axisY = (window.innerHeight / 2 - e.pageY) / 20

        if (active3D) {
            setForm3D({
                transform: `rotateY(${-axisX}deg) rotateX(${axisY}deg)`,
                boxShadow: "inset 0px 0px 10px #2f2f3069, inset 5px 5px 5px #2f2f3069"
            })
            setInput3D({
                transform: "translateZ(-50px)",
                boxShadow: "inset 0px 0px 5px #2f2f3069, inset 4px 4px 5px #2f2f3069"
            })

            title.current.style.transform = "translateZ(30px)"
            titleTwo.current.style.transform = "translateZ(-30px)"
            titleTwo.current.style.textShadow = "0 0 7px black"
            formBtn.current.style.transform = "translateZ(30px)"
            formBtnTwo.current.style.transform = "translateZ(-50px)"
            formBtnTwo.current.style.boxShadow =
                "inset 0px 0px 15px 50px rgba(0, 0, 0, 0.6),  0px 0px 5px rgb(0, 0, 0)"
            formBtnTwo.current.style.opacity = "0.5"
        }
    }
    const undo3D = () => {
        setActive3D(false)
        setForm3D({
            transition: "all 0.7s ease",
            transform: "rotateY(0deg) rotateX(0deg)",
            boxShadow: "none"
        })
        setInput3D({
            transform: "translateZ(0px)",
            boxShadow: "none"
        })

        title.current.style.transform = "translateZ(0px)"
        titleTwo.current.style.transform = "translateZ(0px)"
        titleTwo.current.style.textShadow = "none"
        formBtn.current.style.transform = "translateZ(0px)"
        formBtnTwo.current.style.transform = "translateZ(0px)"
        formBtnTwo.current.style.boxShadow = "none"
        formBtnTwo.current.style.opacity = "0"
    }
    const redo3D = () => {
        setActive3D(true)
        setForm3D({ ...form3D, transition: 'none' })
    }

    const emptyForm = {
        topic: '',
        description: '',
        category: '',
        mainLink: '',
        secLink: '',
    }
    const { form, setForm, handlerOnChange } = useForm(emptyForm)
    const [filledOut, setFilledOut] = useState([])

    useEffect(() => {
        const emptyFormEffect = {
            topic: '',
            description: '',
            category: '',
            mainLink: '',
            secLink: '',
        }

        if (filledOut.length === 5) {
            let storedArray = JSON.parse(localStorage.getItem('mainList'))
            let idValue

            if (storedArray === null) storedArray = []
            if (storedArray[storedArray.length - 1] !== undefined) { idValue = storedArray[storedArray.length - 1].id }
            if (idValue === undefined) {
                idValue = 1
            } else { idValue += 1 }

            storedArray.push({ ...form, views: 1, id: idValue })
            localStorage.setItem('mainList', JSON.stringify(storedArray))
            setUpdateRecent(!updateRecent)
            setFilledOut([])
            setForm(emptyFormEffect)

        }
    }, [filledOut, form, setUpdateRecent, updateRecent, setForm])

    return (
        <section
            onMouseLeave={undo3D}
            onMouseEnter={redo3D}
            onMouseMove={handleMouseMove} className="section-one">
            <form
                style={form3D}
                className="inner-form"
                onMouseEnter={undo3D}
                onMouseLeave={redo3D}
                onSubmit={handleForm}
            >
                <h1 ref={title}>ADD A NEW CONCEPT</h1>
                <h1 className="title-two" ref={titleTwo}>
                    ADD A NEW CONCEPT
                </h1>
                <input
                    onChange={handlerOnChange}
                    name='topic'
                    id='topic'
                    style={input3D}
                    type="text"
                    placeholder="topic"
                    value={form.topic} />
                <textarea
                    onChange={handlerOnChange}
                    style={input3D}
                    name="description"
                    id="description"
                    // cols=""
                    // rows="10"
                    placeholder="description"
                    value={form.description}
                ></textarea>
                <select
                    onChange={handlerOnChange}
                    style={input3D}
                    name="category"
                    id="category"
                    type='select'
                >

                    {categoriesArray.map((each, index) => {
                        return (<option
                            // className='testing'
                            name={each}
                            key={index + 'dropdown'} >{each}</option>)
                    })}
                </select>
                <input
                    onChange={handlerOnChange}
                    style={input3D}
                    type="text"
                    placeholder="main link"
                    name='mainLink'
                    id='mainLink'
                    value={form.mainLink} />
                <input
                    onChange={handlerOnChange}
                    style={input3D}
                    type="text"
                    placeholder="secondary links"
                    name='secLink'
                    id='secLink'
                    value={form.secLink} />
                <button
                    ref={formBtn}
                    onClick={() => handlerFormSubmit(setFilledOut, form)}
                >
                    ADD TO GLOSSARY
                </button>
                <button className="btn-two" ref={formBtnTwo}></button>
            </form>
        </section>
    )
}
