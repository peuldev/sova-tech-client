const Contact = () => {
  return (
    <div className="lg:my-20 md:my-10 my-5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2">
        <div className="px-2 lg:mt-20 md:mt-10 mt-5">
          <h1 className="lg:text-4xl md:text-2xl text-2xl font-bold">
            Contact Info
          </h1>
          <p className="text-custom_gary_text">
            Fill the form below so we can get to know you and your needs better.
          </p>
        </div>
        <div>
          <form className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
                name="name"
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered"
                required
                name="subject"
              />
            </div>
            <textarea
              className="textarea h-40 textarea-bordered"
              placeholder="Message"
            ></textarea>
            <div className="flex">
              <input type="checkbox" name="" id="" />
              <p className="ml-2"> I agree with the terms and conditions.</p>
            </div>
            <div className="form-control mt-6 inline">
              <p className=" inline py-2 rounded bg-custom_blue text-custom_white cursor-pointer px-5 hover:bg-custom_gray">Send</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
