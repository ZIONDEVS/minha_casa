'use client';
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Funções de validação
  const validateName = (name: string) => /^[A-Za-zá-úÁ-Ú\s]+$/.test(name); // Permite apenas letras e espaços
  const validatePhone = (phone: string) => /^\(\d{2}\)\s9\s\d{4}-\d{4}$/.test(phone); // Formato: (00) 0 0000-0000
  const validateEmail = (email: string) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email); // Validação básica de e-mail

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validações
    if (!name || !validateName(name)) {
      alert("Por favor, insira um nome válido (apenas letras).");
      return;
    }
  
    if (!phone || !validatePhone(phone)) {
      alert("Por favor, insira um número de telefone válido no formato (00) 0 0000-0000.");
      return;
    }
  
    if (!email || !validateEmail(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }
  
    if (!subject) {
      alert("Por favor, insira um assunto.");
      return;
    }
  
    if (!message) {
      alert("Por favor, insira uma mensagem.");
      return;
    }
  
    if (!acceptTerms) {
      alert("Você deve aceitar os termos de uso.");
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append("entry.1819178168", name); 
      formData.append("entry.559145066", phone); 
      formData.append("entry.1765810086", email); 
      formData.append("entry.545184362", subject); 
      formData.append("entry.1779712791", message); 
      formData.append("entry.1965771624", acceptTerms ? "Sim" : "Não"); 
  
      console.log("Formulário está sendo enviado com os dados:",
        {
          name,
          phone,
          email,
          subject,
          message,
          acceptTerms,
        });
  
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSc6djWwnOV3fcA_oedEvgEvtr-XK0HeLThwKu19sxPFwctnYw/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors", 
        }
      );
  
      alert("Formulário enviado com sucesso!");
  
      setName("");
      setPhone("");
      setEmail("");
      setSubject("");
      setMessage("");
      setAcceptTerms(false);
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Houve um problema ao enviar o formulário. Tente novamente.");
    }
  };


  return (
    <section id="contato" className="w-full bg-[#82BFE0] py-12 lg:py-24 mt-[80px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-start gap-8 lg:gap-16">
            <h2 className="text-[40px] flex mx-auto lg:text-[75px] lg:leading-[95%] font-medium text-white lg:w-1/2">
              Fale com a gente!
            </h2>

            <form onSubmit={handleFormSubmit} className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-black font-medium mb-1">
                    Seu nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Seu nome aqui"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88A3E6] text-black"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-black font-medium mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="(00) 0 0000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88A3E6] text-black"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-black font-medium mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Seu e-mail aqui"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88A3E6] text-black"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-black font-medium mb-1">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Assunto"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88A3E6] text-black"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-black font-medium mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  placeholder="Escreva sua mensagem"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88A3E6] text-black"
                />
              </div>

              <div className="mb-4 flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="form-checkbox h-5 w-5 text-[#88A3E6] focus:ring-[#88A3E6]"
                />
                <label htmlFor="privacy" className="text-black text-sm">
                  Ao enviar essa mensagem você confirma estar de acordo com a{" "}
                  <a href="#" className="text-[#88A3E6] underline">
                    Política de Privacidade
                  </a>{" "}
                  da Residencial Minha Casa.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#478EB2] text-white font-bold py-3 rounded-full hover:bg-[#478EB2] transition-colors"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
    </section>
  );
};

export default Contact;
