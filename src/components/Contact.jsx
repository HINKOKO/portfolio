import { FaGithub, FaLinkedin, FaMedium, FaDiscord } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

const env = import.meta.env;

const Contact = () => {
  // use the useForm hook of Formspree
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);

  // form successful ? display thx message
  if (state.succeeded) {
    return (
      <div className='text-center text-white py-24'>
        <h5 className="text-2xl font-bold text-purple-400 my-2">
          Thanks for the message !
        </h5>
        <p className="text-[#ADB7Be] text-lg mb-4 max-w-md mx-auto py-5 px-2">
          I will get back to you as soon as possible.
        </p>
      </div>
    );
  }

 
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-20 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="ml-20">
        <h5 className="text-2xl font-bold text-purple-400 my-2">
          Let&apos;s get in touch
        </h5>
        <p className="text-[#ADB7Be] text-lg mb-4 max-w-md py-5 px-2">
          {' '}
          I'm currently looking for new opportunities
        </p>
        <div className="text-white socials flex flex-row gap-8">
          <a href="github.com" className="text-3xl">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/anthony-pizzoni-794517233/"
            className="text-3xl"
          >
            <FaLinkedin />
          </a>
          <a href="https://medium.com/me/stories/public" className="text-3xl">
            <FaMedium />
          </a>
          <a
            href="https://discordapp.com/users/1014804250141933598  "
            className="text-3xl"
          >
            <FaDiscord />
          </a>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email please
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5"
              placeholder="schwarzi@google.com"
            />
            <ValidationError prefix='Email' field='email' errors={state.errors} />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5"
              placeholder="Just saying hi!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              placeholder="Lets talk about Irish whiskey..."
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>  
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5"
              placeholder="Please tell me what is your favorite whiskey..."
            />
            <ValidationError prefix='Message' field='message' errors={state.errors} />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            disabled={state.submitting}
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
