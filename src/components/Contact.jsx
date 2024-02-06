import { useActiveSection } from "../hooks/useActiveSection";

const Contact = () => {
  const { ref } = useActiveSection("#contact");
  return (
    <section
      ref={ref}
      id="contact"
      className="max-w-[1014px] scroll-mt-8 mx-auto py-16"
    >
      <h1 className="text-[40px] text-white font-bold">Contact</h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[604px] mx-auto mt-5"
      >
        <h6 className="text-white text-center">
          Fill out this form to reach us.
        </h6>

        <div className="flex flex-col gap-y-8 mt-5">
          <div className="flex items-center gap-x-3">
            <input
              type="text"
              className="w-full bg-[#D9D9D9]  py-2 px-3 text-[20px]"
              placeholder="First name"
            />
            <input
              type="text"
              className="w-full bg-[#D9D9D9] py-2 px-3 text-[20px]"
              placeholder="Last name"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#D9D9D9] py-2 px-3 text-[20px]"
          />
          <input
            type="number"
            placeholder="Phone (optional)"
            className="w-full py-2 px-3 bg-[#D9D9D9] appearance-none text-[20px]"
          />

          <textarea
            placeholder="Message"
            className="resize-none text-[20px] bg-[#D9D9D9] w-full py-2 px-3 h-[128px]"
          ></textarea>
        </div>
        <div className="mt-5 w-full text-center">
          <button className="text-[24px] transit duration-300  text-[#0D0E30] bg-[#91D2F7] hover:bg-[#6fc1f0] py-2 w-[250px] mx-auto text-center font-bold">
            Send
          </button>
        </div>
      </form>
    </section>
  );
};
export default Contact;
