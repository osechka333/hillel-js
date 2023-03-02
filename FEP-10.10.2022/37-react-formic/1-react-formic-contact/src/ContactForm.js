import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik'
import { object, string } from 'yup'
import { useEffect, useState } from 'react'

const PHONE_TEMPLATE = /^\d{3}(-\d{2}){2}$/
const validationSchema = object({
  firstName: string()
    .min(3)
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: string()
    .min(3)
    .max(20, 'Must be 20 characters or less'),
  phone: string()
    .matches(PHONE_TEMPLATE, 'Must be template 111-22-33')
    .required('Required'),
})
const initialContact = {
  firstName: '',
  lastName: 'Potter',
  phone: '777-88-88',
};

export default function ContactForm () {
  const [contact, setContact] = useState(initialContact);

  useEffect(() => {
    // emulate server request
    console.log('server request start')
    setTimeout(() => {
      setContact({
        firstName: 'Ron',
        lastName: 'Vizli',
        phone: '111-22-33',
      })
      console.log('server request end')
    }, 5000)
  }, [])

  return (
    <Formik
      enableReinitialize
      initialValues={contact}
      onSubmit={(values) => {
        console.log(values)
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text"/>
          <ErrorMessage component="span" name="firstName"/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text"/>
          <ErrorMessage component="span" name="lastName"/>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <Field name="phone" type="text"/>
          <ErrorMessage component="span" name="phone"/>
        </div>

        <SaveButton/>
      </Form>
    </Formik>
  )
}

function SaveButton () {
  const { isValid } = useFormikContext();

  return <button type="submit" disabled={!isValid}>Save</button>
}
