import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "Após implementar a estratégia de captura de leads, conseguimos aumentar nossa taxa de conversão em mais de 200% e transformar nosso funil de vendas.",
      author: "Ana Silva",
      position: "Diretora de Marketing, TechSoft",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      content: "O suporte é incrível! Sempre recebemos orientações rápidas e precisas que nos ajudam a otimizar nossas campanhas de geração de leads.",
      author: "Rafael Oliveira",
      position: "CEO, Startec",
      avatar: "https://randomuser.me/api/portraits/men/17.jpg"
    },
    {
      content: "Nossa empresa conseguiu triplicar o número de leads qualificados em apenas três meses. A solução é completa e extremamente eficaz.",
      author: "Juliana Costa",
      position: "Gerente de Vendas, InfoData",
      avatar: "https://randomuser.me/api/portraits/women/47.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Histórias reais de empresas que transformaram seus resultados com nossa solução
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-4">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="bg-white text-gray-800 rounded-xl shadow-xl p-8 md:p-10"
            >
              <div className="flex flex-col items-center">
                <div className="mb-8">
                  <svg className="w-12 h-12 text-blue-500 mb-4 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                  <p className="text-xl text-center font-medium">{testimonials[currentIndex].content}</p>
                </div>
                <div className="flex items-center">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].author} 
                    className="w-14 h-14 rounded-full border-2 border-blue-500 mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonials[currentIndex].author}</h4>
                    <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-10 transform -translate-y-1/2 bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-10 transform -translate-y-1/2 bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors"
            aria-label="Próximo"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-blue-200'
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 