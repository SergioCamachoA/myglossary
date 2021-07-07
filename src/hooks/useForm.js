import { useState } from 'react'

export const useForm = (values = {}) => {
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
        setForm,
        handlerOnChange,
    }
}