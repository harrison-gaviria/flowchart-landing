import type { OrderStatus } from '../types/order.types';

interface StatusBadgeProps {
  status: OrderStatus;
}

const statusConfig = {
  pendiente: 'bg-yellow-100 text-yellow-800',
  en_proceso: 'bg-blue-100 text-blue-800',
  completado: 'bg-green-100 text-green-800',
  cancelado: 'bg-red-100 text-red-800'
};

const statusText = {
  pendiente: 'Pendiente',
  en_proceso: 'En Proceso',
  completado: 'Completado',
  cancelado: 'Cancelado'
};

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusConfig[status]}`}>
      {statusText[status]}
    </span>
  );
};