import React, { useState, useRef, useEffect } from "react"
// import "../styles/App.css"
// import { ArrayConcepts } from "./ArrayConcepts";



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
        // console.log(e.pageX, e.pageY);
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

    function useForm(values = {}) {
        const [form, setForm] = useState(values)

        function handlerOnChange(e) {

            const updatedForm = {
                ...form,
                [e.target.name]:
                    e.target.type === 'select'
                        ? e.target[e.target.selectedIndex]
                        : e.target.value
            }
            setForm(updatedForm)
        }
        return {
            form,
            handlerOnChange,
        }
    }

    const { form, handlerOnChange } = useForm({
        topic: '',
        description: '',
        category: '',
        mainLink: '',
        secLink: '',
    })
    const [filledOut, setFilledOut] = useState([])

    function handleFormSubmit() {
        function checkAll() {

            let tempArray = []
            for (const property in form) {
                let missingInput = document.getElementById(property)


                if (form[property] === '') {
                    missingInput.style.backgroundColor = '#abd1c6'
                    missingInput.style.border = '1px solid #004643'
                } else {
                    tempArray.push('item-added')
                    console.log(tempArray);
                    setFilledOut(tempArray)
                    console.log(filledOut);
                    missingInput.style.backgroundColor = ''
                    missingInput.style.border = ''
                }
            }
        }
        checkAll()
    }

    useEffect(() => {
        if (filledOut.length === 5) {

            let storedArray = JSON.parse(localStorage.getItem('mainList'))
            console.log(storedArray);
            if (storedArray === null) storedArray = []
            storedArray.push(form)
            localStorage.setItem('mainList', JSON.stringify(storedArray))
            setUpdateRecent(!updateRecent)
            setFilledOut([])
        }
    }, [filledOut, form, setUpdateRecent, updateRecent])

    return (
        <>
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
                    <h1 ref={title}>Add A new concept</h1>
                    <h1 className="title-two" ref={titleTwo}>
                        Add A new concept
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
                        onClick={handleFormSubmit}
                    >
                        add to myglossary
                    </button>
                    <button className="btn-two" ref={formBtnTwo}></button>
                </form>
            </section>
        </>
    )
}
