import ContactForm from '../components/ContactForm';

const ApplicationForm = ({ setFormComplete }) => {
  return (
    <>
      <h2>Pavers React Developer Application Form</h2>
      <p>
        Please fill in the form below. Note, any fields marked with an * are
        required. Good luck in your application!
      </p>
      <ContactForm setFormComplete={setFormComplete} />
    </>
  );
};

export default ApplicationForm;
