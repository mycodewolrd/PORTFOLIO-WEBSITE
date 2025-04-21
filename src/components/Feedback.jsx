import { useState } from "react";
import imghero from "/imghero.png";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const SURVICE_ID = import.meta.env.VITE_SURVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      Swal.fire({
        icon: "warning",
        title: "Please fill all fields!",
        confirmButtonColor: "#6f42c1",
      });
      return;
    }

    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to send this message?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#6f42c1",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, send it!",
    });

    if (!confirm.isConfirmed) return;

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    setLoading(true); // Start loading

    emailjs.send(SURVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
      () => {
        setLoading(false); // End loading
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully!",
          confirmButtonColor: "#6f42c1",
        });

        setName("");
        setEmail("");
        setMessage("");
      },
      (error) => {
        setLoading(false); // End loading
        Swal.fire({
          icon: "error",
          title: "Oops! Something went wrong.",
          text: error.text || "Failed to send message.",
          confirmButtonColor: "#6f42c1",
        });
      }
    );
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="300"
      className="min-h-screen overflow-hidden justify-center  flex items-center p-6 mt-10 relative mx-auto "
    >
      <article className="shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full relative mx-auto gap-10">
        <aside className="w-full md:w-1/2 relative ">
          <div
            className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px]
            sm:w-[#400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] 
            to-[#bb61c5] shadow-[0_0_70px_rgba(182,0,182,0.7)]"
          ></div>
          <img
            src={imghero}
            alt="Contact illustration"
            className="h-[250px] sm:h-[400px] md:h-[485px] w-[300px] sm:w-[480px] object-cover rounded-t-lg md:rounded-r-lg relative animate-float"
          />
        </aside>

        {/* Contact Form */}
        <section
          className="relative p-8 w-full md:w-1/2 rounded-xl bg-[#1a1a1a] shadow-xl backdrop-blur-md"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {/* Glowing Background Behind Whole Form */}
          <div className="absolute -z-10 w-72 h-72 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 blur-3xl opacity-30 -top-10 -left-20 rounded-full"></div>

          {/* Heading with Glow */}
          <header className="mb-6 relative text-center">
            <div className="absolute -z-10 w-60 h-60 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 blur-3xl opacity-30 left-1/2 transform -translate-x-1/2 -top-10"></div>
            <h2 className="text-4xl font-bold text-white relative z-10">
              Give Your Feedback
            </h2>
          </header>

          {/* Feedback Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 font-medium mb-2"
              >
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                className="w-full px-4 py-2 text-white bg-transparent border-[1px] border-opacity-5 border-[#d6c4f760] rounded-lg focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium mb-2"
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-white  rounded-lg focus:outline-none bg-transparent border-[1px] border-opacity-5 border-[#d6c4f760]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                id="message"
                placeholder="Your message"
                className="w-full px-4 py-2 text-white bg-transparent border-[1px] border-opacity-5 border-[#d6c4f760] rounded-lg focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white bg-[#59126d] border-[1px] border-opacity-5 border-[#d6c4f760] py-2 px-6 focus:outline-none rounded-full text-lg transition-all duration-300 ${
                loading
                  ? "bg-[#801b9c]/50 cursor-not-allowed"
                  : "hover:bg-[#d347f9] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] hover:-translate-y-1 hover:scale-95"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </section>
      </article>
    </section>
  );
}
