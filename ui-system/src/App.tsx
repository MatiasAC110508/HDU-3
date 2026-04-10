import { Button } from './components/Button';
import { Card } from './components/Card';
import { ApiCard } from './components/ApiCard';
import { CheckCircle, AlertTriangle, ArrowRight, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Sistema de Componentes UI</h1>
          <p className="text-gray-500 mt-2">Ejemplo de integración de Button, Badge y Card tipados con TypeScript.</p>
        </header>

        {/* The middle card will display backend status via ApiCard (keeps output inside the card). */}

        {/* Listado de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Tipo White con botón primario */}
          <Card
            title="Suscripción Pro"
            type="white"
            imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600"
            badges={[
              { label: "Recomendado", status: "success", icon: <CheckCircle className="w-3 h-3" /> },
              { label: "Tecnología", status: "neutral" }
            ]}
            footer={
              <Button 
                text="Actualizar ahora" 
                variant="primary" 
                className="w-full" 
                rightIcon={<ArrowRight className="w-4 h-4" />} 
              />
            }
          >
            <p>Accede a todas las características premium, soporte 24/7 y despliegues ilimitados en nuestra infraestructura global.</p>
          </Card>

          {/* Card 2: Tipo Black con botón secundario y estado de carga */}
          <Card
            title="Mantenimiento de Servidores"
            type="black"
            badges={[
              { label: "Crítico", status: "error", icon: <AlertTriangle className="w-3 h-3" /> }
            ]}
            footer={
              <div className="flex gap-2">
                <Button text="Cancelar" variant="secondary" size="sm" />
                <Button text="Reiniciando" variant="danger" size="sm" loading />
              </div>
            }
          >
            {/* Show API-driven status inside the card so there is no external error box */}
            <ApiCard />
          </Card>

          {/* Card 3: Tipo Green con íconos personalizados */}
          <Card
            title="Energía Renovable"
            type="green"
            badges={[
              { label: "Eco-Friendly", status: "success" },
              { label: "Beta", status: "warning" }
            ]}
            footer={
              <Button 
                text="Activar panel" 
                variant="primary" 
                leftIcon={<Zap className="w-4 h-4" />} 
              />
            }
          >
            <p>Tus paneles solares están operando al 98% de su capacidad. Has ahorrado 240kg de CO2 este mes.</p>
          </Card>

        </div>
      </div>
    </div>
  );
}

export default App;