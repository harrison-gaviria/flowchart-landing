import './App.css'
import { OrderProvider } from '@/context/OrderContext';
import { OrderTable } from '@/components/OrderTable';

function App() {
  return (
    <OrderProvider>
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Gestión de Pedidos
            </h1>
            <p className="mt-2 text-gray-600">
              Administra y controla el estado de tus pedidos
            </p>
          </div>
          <OrderTable />
        </div>
      </div>
    </OrderProvider>
  );
}

export default App;