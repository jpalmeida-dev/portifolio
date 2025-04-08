"use client";

import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa"; // Importando os ícones

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      setError("");
    } else {
      setError("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-black text-center">
          Contato
        </h2>

        {submitted && (
          <div className="mb-4 text-green-600 text-center">
            Mensagem enviada com sucesso!
          </div>
        )}

        {error && <div className="mb-4 text-red-600 text-center">{error}</div>}

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Enviar
          </button>
        </div>
          <div className="flex justify-center mt-6 space-x-4">
            <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-almeida-706207171?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSni%2FNljQRWyuZsw4gDEF3A%3D%3D" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 hover:text-blue-800 transition duration-200" size={30} />
            </a>
            <a href="https://github.com/jpalmeida-dev" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-800 hover:text-gray-600 transition duration-200" size={30} />
            </a>
            <a href="https://wa.me/11941602224" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-green-600 hover:text-green-800 transition duration-200" size={30} />
            </a>
          </div>
      </form>
    </div>
  );
}