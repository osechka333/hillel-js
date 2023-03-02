import { useFormik } from 'formik'

const PHONE_TEMPLATE = /^\d{3}(-\d{2}){2}$/;

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      firstName: 'Harry',
      lastName: 'Potter',
      phone: '777-88-88',
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validate: (values) => {
      const errors = {};

      if (values.firstName.length <= 3) {
        errors.firstName = 'must be > 3 symbols'
      }
      if (values.lastName.length <= 3) {
        errors.lastName = 'must be > 3 symbols'
      }
      if (!PHONE_TEMPLATE.test(values.phone)) {
        errors.phone = 'must be template 111-22-33'
      }

      return errors;
    },
  })

  console.log(formik)

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="text"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
      </div>

      <button>Save</button>
    </form>
  )
}
