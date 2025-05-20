import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';

type FormInputs = {
  nome: string;
  email: string;
  telefone: string;
  empresa?: string;
  interesse: string;
};

const interesses = [
  { id: 'marketing', label: 'Marketing Digital' },
  { id: 'vendas', label: 'Vendas' },
  { id: 'tecnologia', label: 'Tecnologia' },
  { id: 'outros', label: 'Outros' },
];

export const LeadForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // Aqui você implementaria a lógica para enviar os dados para seu CRM ou backend
    console.log(data);
    setIsSubmitted(true);
    reset();
    
    // Após 5 segundos, volta para o estado inicial do formulário
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="w-full max-w-md p-6 mx-auto bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Receba conteúdo exclusivo
      </h2>
      
      {isSubmitted ? (
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <svg 
            className="w-12 h-12 text-green-500 mx-auto mb-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <h3 className="text-xl font-semibold text-green-800">Obrigado!</h3>
          <p className="mt-2 text-green-700">
            Seus dados foram recebidos com sucesso. Em breve entraremos em contato.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
              Nome completo *
            </label>
            <input
              id="nome"
              type="text"
              className={`input-field ${errors.nome ? 'border-red-500 focus:ring-red-500' : ''}`}
              {...register('nome', { required: 'Nome é obrigatório' })}
            />
            {errors.nome && (
              <p className="mt-1 text-sm text-red-600">{errors.nome.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail profissional *
            </label>
            <input
              id="email"
              type="email"
              className={`input-field ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
              {...register('email', { 
                required: 'E-mail é obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'E-mail inválido'
                }
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefone *
            </label>
            <input
              id="telefone"
              type="tel"
              className={`input-field ${errors.telefone ? 'border-red-500 focus:ring-red-500' : ''}`}
              {...register('telefone', { 
                required: 'Telefone é obrigatório',
                pattern: {
                  value: /^[0-9]{10,11}$/,
                  message: 'Digite apenas números (DDD + número)'
                }
              })}
              placeholder="11999999999"
            />
            {errors.telefone && (
              <p className="mt-1 text-sm text-red-600">{errors.telefone.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1">
              Empresa
            </label>
            <input
              id="empresa"
              type="text"
              className="input-field"
              {...register('empresa')}
            />
          </div>
          
          <div>
            <label htmlFor="interesse" className="block text-sm font-medium text-gray-700 mb-1">
              Principal interesse *
            </label>
            <select
              id="interesse"
              className={`input-field ${errors.interesse ? 'border-red-500 focus:ring-red-500' : ''}`}
              {...register('interesse', { required: 'Selecione uma opção' })}
              defaultValue=""
            >
              <option value="" disabled>Selecione uma opção</option>
              {interesses.map((opcao) => (
                <option key={opcao.id} value={opcao.id}>
                  {opcao.label}
                </option>
              ))}
            </select>
            {errors.interesse && (
              <p className="mt-1 text-sm text-red-600">{errors.interesse.message}</p>
            )}
          </div>
          
          <div className="pt-2">
            <button 
              type="submit" 
              className="btn-primary w-full"
            >
              Quero receber conteúdo exclusivo
            </button>
          </div>
          
          <p className="text-xs text-gray-500 text-center mt-4">
            Ao enviar este formulário, você concorda com nossa 
            <a href="#" className="text-blue-600 hover:underline"> Política de Privacidade</a>.
          </p>
        </form>
      )}
    </div>
  );
}; 