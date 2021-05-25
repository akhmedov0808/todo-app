import { Form, Formik } from 'formik'
import React from 'react'
import { required } from '../utils/validators'
import Input from './common/Input'
import Button from './common/Button'


export default function TodoForm({ onSubmit, title, initialValues }) {
    return (
        <Formik initialValues={{ title: '', ...initialValues }} onSubmit={onSubmit}>
            <Form>
                <div className="columns">
                    <div className="column">
                        <Input
                            name="title"
                            placeholder="Введите загаловок"
                            validate={required}
                            className='is-rounded ml-2' /> &nbsp;
                    </div>

                    <div className="column is-narrow">
                        <Button
                            type="submit"
                            text={title}
                            icon="checkmark"
                            className="is-success is-rounded is-small" /> &nbsp;
                    </div>
                </div>
            </Form>
        </Formik>
    )
}