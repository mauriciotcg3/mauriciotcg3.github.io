import { LeadForm } from './LeadForm';

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container-padding max-w-7xl mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
              Transforme visitantes em <span className="text-blue-600">clientes fiéis</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8">
              Maximize seu potencial de vendas com nossa estratégia comprovada de captura e nutrição de leads qualificados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center">
                <svg 
                  className="w-6 h-6 text-green-500 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                <span className="text-gray-700">Aumento de conversão</span>
              </div>
              
              <div className="flex items-center">
                <svg 
                  className="w-6 h-6 text-green-500 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                <span className="text-gray-700">Leads qualificados</span>
              </div>
              
              <div className="flex items-center">
                <svg 
                  className="w-6 h-6 text-green-500 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                <span className="text-gray-700">Suporte especializado</span>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <p className="text-lg font-medium text-gray-700 mb-4">
                Empresas que confiam em nós:
              </p>
              
              <div className="flex items-center space-x-8 opacity-70">
                {/* Substitua pelos logos reais das empresas */}
                <div className="text-gray-500 text-xl font-bold">Empresa 1</div>
                <div className="text-gray-500 text-xl font-bold">Empresa 2</div>
                <div className="text-gray-500 text-xl font-bold">Empresa 3</div>
              </div>
            </div>
          </div>
          
          <div>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}; 