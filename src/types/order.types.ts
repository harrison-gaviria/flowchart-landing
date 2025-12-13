export type OrderStatus = 'pendiente' | 'en_proceso' | 'completado' | 'cancelado';
export type FieldType = 'fecha' | 'cliente' | 'producto' | 'cantidad' | 'precio';

export const inputTypeMap: Record<FieldType, string> = {
  fecha: 'date',
  cantidad: 'number',
  precio: 'number',
  cliente: 'text',
  producto: 'text',
};

export interface Order {
  id: string;
  cliente: string;
  producto: string;
  cantidad: number;
  precio: number;
  estado: OrderStatus;
  fecha: string;
}