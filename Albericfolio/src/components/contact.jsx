const Contact = () => {
  return (
    <section  className="py-16 px-4  text-white">
      <h1 id="contact" className="text-3xl font-bold text-center bg-warning text-black p-6 mb-10 md:mb-20 rounded-xl w-fit mx-auto">
        Me Contacter
      </h1>

      <form className="max-w-2xl mx-auto space-y-6 bg-gray-800 p-8 rounded-xl shadow-lg">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            placeholder="Votre nom"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-warning"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Votre email"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-warning"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Votre message"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-warning"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-warning text-black font-semibold px-6 py-2 rounded hover:bg-yellow-400 transition duration-300"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default Contact;
