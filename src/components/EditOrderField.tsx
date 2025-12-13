import { useState, type ReactNode } from "react";
import { useOrders } from "@/context/OrderContext";
import { Modal } from "@/components/Modal";
import { MdEdit } from "react-icons/md";
import { inputTypeMap } from "@/types/order.types";
import type { Order, FieldType } from "@/types/order.types";

interface Props {
  orderId: string;
  field: keyof Order;
  value: string | number;
  children: ReactNode;
}

export const EditCell = ({ orderId, field, value, children }: Props) => {
  const { updateField } = useOrders();
  const [open, setOpen] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const openModal = () => {
    setTempValue(value);
    setOpen(true);
  };

  const save = () => {
    updateField(orderId, field, tempValue);
    setOpen(false);
  };

  return (
    <>
      <div className="flex items-center gap-2">
        {children}
        <MdEdit onClick={openModal} className="hover:underline"/>
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h3 className="text-lg font-semibold mb-3">
          Editar {field}
        </h3>

        {field === 'estado' ? (
          <select
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className="w-full text-gray-900 px-2 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="pendiente">Pendiente</option>
            <option value="en_proceso">En Proceso</option>
            <option value="completado">Completado</option>
            <option value="cancelado">Cancelado</option>
          </select>
        ) :
          <input
            type={inputTypeMap[field as FieldType]}
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className="w-full border rounded px-2 py-1"
          />
        }
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={() => setOpen(false)}
            className="px-3 py-1 border rounded text-white !bg-slate-600"
          >
            Cancelar
          </button>

          <button
            onClick={save}
            className="px-3 py-1 border rounded text-white !bg-emerald-800"
          >
            Guardar
          </button>
        </div>
      </Modal>
    </>
  );
};
