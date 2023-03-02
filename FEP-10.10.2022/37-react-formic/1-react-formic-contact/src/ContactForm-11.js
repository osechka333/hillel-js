import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik'
import { object, string } from 'yup'

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

export default function ContactForm () {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: 'Potter',
        phone: '777-88-88',
      }}
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
