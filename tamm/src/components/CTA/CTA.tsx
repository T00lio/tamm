import { useState } from "react";
import CTAimage from "./../../assets/tuliosal_an_attractive_cleaner_waiting_for_a_customers_reply_in_32061b94-cecf-4898-90e5-860a11a6b63d.png";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST", // POST request to send data to the server
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // Sending the email as a JSON object
      });

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(
          `Network response was not ok. Status: ${response.status}, Body: ${errorBody}`
        );
      }

      const data = await response.json();
      setMessage(data.message || "Thank you for subscribing!");
      setEmail(""); // Clear the input field
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
        setMessage(
          `There was a problem with your subscription. ${error.message}`
        );
      } else {
        console.error("Unknown error:", error);
        setMessage("An unknown error occurred.");
      }
    }
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gradient-to-tr from-lime-300 to-emerald-400 h-3/4 p-8">
      <div className="container mx-auto px-4 md:px-6 text-center place-content-center">
        <h2 className="text-4xl font-bold text-white sm:text-6xl">
          Stay up-to-date with our latest offers
        </h2>
        <p className="mt-4 text-white md:text-xl w-50">
          Subscribe to our newsletter and be the first to know about our
          exclusive <a className="font-black">first cleaning discount deals!</a>
        </p>
        <form
          className="mt-20 grid flex-col items-center gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="self-center justify-center ml-auto mr-auto w-1/2 max-w-md rounded-md border-transparent bg-white p-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:flex-1"
            required
          />
          <button
            type="submit"
            className="bg-white inline-flex h-12 items-center justify-center ml-auto mr-auto rounded-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-150  duration-100 px-6 text-xl font-medium text-mainBlue  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-1/4"
          >
            Subscribe
          </button>
        </form>
        {message && (
          <p className="mt-4 text-red-600 bg-slate-100  rounded-xl w-1/4 ml-auto mr-auto p-2">
            {message}
          </p>
        )}
      </div>
      <div className="image">
        <img
          src={CTAimage}
          alt="callToAction"
          className="rounded-2xl h-100 bg-fit"
        />
      </div>
    </section>
  );
}
