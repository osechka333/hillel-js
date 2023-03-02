import { useFormik } from 'formik'

export default function ContactForm() {
  const formik = useFormik({})

  console.log(formik)

  return (
    <form>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="text"
        />
      </div>

      <button>Save</button>
    </form>
  )
}
