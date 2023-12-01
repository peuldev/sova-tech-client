const Faqpage = () => {
  return (
    <div
      className="lg:pb-10 md:pb-5 pb-2 m-3
    "
    >
      <h1 className="text-4xl lg:py-5 py-2">Faq Account</h1>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            Visit the Website
          </div>
          <div className="collapse-content">
            <p>
              Open your web browser and go to the official website of the
              service you want to sign up for.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Locate the Sign-Up Button
          </div>
          <div className="collapse-content">
            <p>
              Look for a Sign Up Create Account or similar button. This is
              usually prominently displayed on the homepage.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Provide Information{" "}
          </div>
          <div className="collapse-content">
            <p>
              Click on the sign-up button, and you ll be directed to a
              registration or sign-up page. Fill in the required information,
              which typically includes your email address, a username, and a
              password.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Complete Additional Steps
          </div>
          <div className="collapse-content">
            <p>
              Some services may require additional steps, such as providing a
              phone number for two-factor authentication or filling out a
              profile.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Read Terms and Conditions
          </div>
          <div className="collapse-content">
            <p>
              Before finalizing your registration, it s a good idea to read the
              terms and conditions or user agreement of the service.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Submit and Confirm
          </div>
          <div className="collapse-content">
            <p>
              Once you ve provided all the necessary information and agreed to
              the terms, submit your registration. Some services may require you
              to confirm your identity through a secondary method.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqpage;
