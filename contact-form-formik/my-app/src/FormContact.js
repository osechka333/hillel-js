import React from 'react';
import {Formik, Form, Field, ErrorMessage, useFormikContext} from 'formik'
import { object, string } from 'yup';

const PHONE_TEMPLATE = /^\d{5}(-\d{3})(-\d{2}){2}$/;
const EMAIL_TEMPLATE = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const formValidation = object({
    username: string()
        .min(1)
        .required('Required'),
    email: string()
        .min(1)
        .required('Required')
        .matches(EMAIL_TEMPLATE, 'Invalid email specified'),
    phone: string()
        .matches(PHONE_TEMPLATE, 'Invalid format: XXXXX-XXX-XX-XX')
        .required('Required')
});
export default function ContactForm() {
    return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                phone: '',
            }}
            onSubmit={(values, {resetForm}) => {
                resetForm({values: ''})
                alert('The contact is created')
            }}
            validationSchema={formValidation}
        >
            <Form>
                <h1>Create an account</h1>
                <h3>Specify your personal details:</h3>
                <div>
                    <label class="required" htmlFor="username">Name</label>
                    <Field name="username" type="text" />
                    <ErrorMessage component="span" name="username" />
                </div>
                <div>
                    <label class="required" htmlFor="email">Email</label>
                    <Field name="email" type="text" />
                    <ErrorMessage component="span" name="email" />
                </div>
                <div>
                    <label class="required" htmlFor="phone">Phone</label>
                    <Field name="phone" type="text" />
                    <ErrorMessage component="span" name="phone" />
                </div>
                <SubmitButton/>
            </Form>
        </Formik>
    )
}
function SubmitButton () {
    const { isValid } = useFormikContext();

    return <button type="submit" disabled={!isValid}>Create</button>
}