import BookingForm from '../../components/BookingForm';

const Booking = () => {
  return (
    <section className="booking">
      <h2>Book a Session</h2>
      <p>Fill out the form below and I'll get back to you within 24 hours.</p>
      <BookingForm />
    </section>
  );
};

export default Booking;
