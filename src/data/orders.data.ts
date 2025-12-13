import type { Order } from '@/types/order.types';

export const initialOrders: Order[] = [
  {
    id: '1',
    cliente: 'Juan Pérez',
    producto: 'Laptop Dell XPS 15',
    cantidad: 2,
    precio: 2500000,
    estado: 'completado',
    fecha: '2024-12-01'
  },
  {
    id: '2',
    cliente: 'María González',
    producto: 'Mouse Logitech MX Master',
    cantidad: 5,
    precio: 350000,
    estado: 'en_proceso',
    fecha: '2024-12-08'
  },
  {
    id: '3',
    cliente: 'Carlos Rodríguez',
    producto: 'Teclado Mecánico Keychron',
    cantidad: 3,
    precio: 450000,
    estado: 'pendiente',
    fecha: '2024-12-10'
  },
  {
    id: '4',
    cliente: 'Ana Martínez',
    producto: 'Monitor LG UltraWide',
    cantidad: 1,
    precio: 1200000,
    estado: 'completado',
    fecha: '2024-11-28'
  },
  {
    id: '5',
    cliente: 'Pedro Sánchez',
    producto: 'Webcam Logitech C920',
    cantidad: 4,
    precio: 280000,
    estado: 'en_proceso',
    fecha: '2024-12-09'
  },
  {
    id: '6',
    cliente: 'Laura Torres',
    producto: 'Auriculares Sony WH-1000XM4',
    cantidad: 2,
    precio: 850000,
    estado: 'cancelado',
    fecha: '2024-12-05'
  }
];