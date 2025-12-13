import { useState } from "react";
import { useOrders } from "@/context/OrderContext";
import { Modal } from "@/components/Modal";

interface Props {
  orderId: string;
  fecha: string;
}

export const DateEditCell = ({ orderId, fecha }: Props) => {
  const { updateOrderDate } = useOrders();
  const [open, setOpen] = useState(false);
  const [tempDate, setTempDate] = useState(fecha);

  const openModal = () => {
    setTempDate(fecha);
    setOpen(true);
  };

  const save = () => {
    updateOrderDate(orderId, tempDate);
    setOpen(false);
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <span>
          {new Date(fecha).toLocaleDateString("es-CO")}
        </span>

        <button
          onClick={openModal}
          className="text-blue-600 text-xs hover:underline"
        >
          Editar
        </button>
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h3 className="text-lg font-semibold mb-3">
          Editar fecha
        </h3>

        <input
          type="date"
          value={tempDate}
          onChange={(e) => setTempDate(e.target.value)}
          className="w-full border rounded px-2 py-1"
        />

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={() => setOpen(false)}
            className="px-3 py-1 border rounded"
          >
            Cancelar
          </button>

          <button
            onClick={save}
            className="px-3 py-1 bg-blue-600 text-white rounded"
          >
            Guardar
          </button>
        </div>
      </Modal>
    </>
  );
};
