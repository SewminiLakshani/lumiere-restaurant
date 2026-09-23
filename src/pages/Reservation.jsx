import ReservationForm from '../components/ReservationForm.jsx'

function Reservation() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h1 className="section-heading">Reserve a Table</h1>
        <div className="divider-line mx-auto mt-6 mb-6" />
        <p className="text-cream/60">
          Fill in the details below and we'll confirm your table by email or phone.
        </p>
      </div>
      <ReservationForm />
    </div>
  )
}

export default Reservation
