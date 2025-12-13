import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Order } from '@/types/order.types';
import { initialOrders } from '@/data/orders.data';

interface OrderContextType {
  orders: Order[];
  createOrder: (data: Order) => void;
  updateField: <K extends keyof Order>(id: string, field: K, value: Order[K]) => void;
  deleteOrder: (id: string) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  const updateField = <K extends keyof Order>(
    id: string,
    field: K,
    value: Order[K]
  ) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === id ? { ...order, [field]: value, } : order
      )
    );
  };

  const deleteOrder = (id: string) => {
    setOrders(prev => prev.filter(order => order.id !== id));
  };

  const createOrder = (data: Order) => {
    setOrders(prev => [...prev, data]);
  };

  return (
    <OrderContext.Provider value={{ orders, createOrder: createOrder, updateField, deleteOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders debe usarse dentro de OrderProvider');
  }
  return context;
};