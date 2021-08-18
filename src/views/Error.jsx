const Error = () => {
  return (
    <div className='result-page'>
      <h1>Something went wrong!</h1>
      <p>
        It looks like something didn't work properly when submitting your
        details.
      </p>
      <p>Please try again or get in touch with us.</p>
      <a href='/' className='btn btn__warning'>
        Try Again
      </a>
    </div>
  );
};

export default Error;
