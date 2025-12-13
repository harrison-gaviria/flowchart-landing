import { useOrders } from '@/context/OrderContext';
import { StatusBadge } from '@/components/StatusBadge';
import { EditCell } from '@/components/EditOrderField';
import { CreateOrder } from '@/components/CreateOrder';
import { MdDeleteForever } from "react-icons/md";


export const OrderTable = () => {
  const { orders, deleteOrder } = useOrders();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="overflow-x-auto">
      <div className='flex justify-end'>
        <CreateOrder/>
      </div>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cliente
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Producto
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cantidad
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Precio Total
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Estado
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fecha
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                #{order.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <EditCell
                  orderId={order.id}
                  field='cliente'
                  value={order.cliente}
                >
                  {order.cliente}
                </EditCell>
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {order.producto}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <EditCell
                  orderId={order.id}
                  field='cantidad'
                  value={order.cantidad}
                >
                  {order.cantidad}
                </EditCell>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {formatCurrency(order.precio * order.cantidad)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <EditCell
                  orderId={order.id}
                  field='estado'
                  value={order.estado}
                >
                  <StatusBadge status={order.estado} />
                </EditCell>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <EditCell
                  orderId={order.id}
                  field='fecha'
                  value={order.fecha}
                >
                  {new Date(`${order.fecha}T00:00:00`).toLocaleDateString('en-US')}
                </EditCell>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <button
                  onClick={() => deleteOrder(order.id)}
                  className="flex items-center gap-2 text-red-700 !bg-transparent"
                >
                  <MdDeleteForever />
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};