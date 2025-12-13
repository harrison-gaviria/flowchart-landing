import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Order, OrderStatus } from '@/types/order.types';
import { initialOrders } from '@/data/orders.data';

interface OrderContextType {
  orders: Order[];
  updateOrderStatus: (id: string, status: OrderStatus) => void;
  updateOrderDate: (id: string, fecha: string) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  const updateOrderStatus = (id: string, status: OrderStatus) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === id ? { ...order, estado: status } : order
      )
    );
  };

  const updateOrderDate = (id: string, date: string) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === id ? { ...order, fecha: date } : order
      )
    );
  };

  return (
    <OrderContext.Provider value={{ orders, updateOrderStatus, updateOrderDate }}>
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