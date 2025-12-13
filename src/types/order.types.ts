export type OrderStatus = 'pendiente' | 'en_proceso' | 'completado' | 'cancelado';

export interface Order {
  id: string;
  cliente: string;
  producto: string;
  cantidad: number;
  precio: number;
  estado: OrderStatus;
  fecha: string;
}