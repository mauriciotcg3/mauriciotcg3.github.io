import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Componente de contador animado
const AnimatedCounter = ({ value, suffix = '', prefix = '' }: { value: number, suffix?: string, prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 segundos
      const increment = value / (duration / 16); // Incremento para cada frame (60fps)
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);
  
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

export const StatsSection = () => {
  const stats = [
    {
      value: 93,
      suffix: '%',
      title: 'de aumento na taxa de conversão',
      description: 'Em média, nossos clientes aumentam suas taxas de conversão em 93% nos primeiros 30 dias'
    },
    {
      value: 2500,
      suffix: '+',
      title: 'leads qualificados por mês',
      description: 'Nosso sistema consegue capturar mais de 2.500 leads qualificados por mês para nossos clientes'
    },
    {
      value: 68,
      suffix: '%',
      title: 'de redução no custo por lead',
      description: 'Redução média no custo de aquisição de leads comparado com métodos tradicionais'
    },
    {
      value: 24,
      suffix: '/7',
      title: 'suporte técnico especializado',
      description: 'Nossa equipe de especialistas está disponível 24 horas por dia, 7 dias por semana'
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Números que Impressionam
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados reais que nossos clientes estão alcançando com nossa plataforma de captura de leads
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {stat.title}
              </h3>
              <p className="text-gray-600">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p className="text-lg text-gray-700 mb-6">
            Junte-se a centenas de empresas que estão transformando seus resultados
          </p>
          <button className="btn-primary inline-flex items-center">
            <span>Comece sua transformação</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}; 