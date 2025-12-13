import { useState } from "react";
import { useOrders } from "@/context/OrderContext";
import { Modal } from "@/components/Modal";
import { IoIosAddCircle } from "react-icons/io";
import type { Order, OrderStatus } from "@/types/order.types";

export const CreateOrder = () => {
  const { orders, createOrder } = useOrders();
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState<Partial<Order>>({
    estado: "pendiente",
    fecha: new Date().toISOString().split("T")[0],
  });

  const openModal = () => setOpen(true);

  const updateField = <K extends keyof Order>(
    field: K,
    value: Order[K]
  ) => {
    setOrder(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const save = () => {
    if (
      !order.cliente ||
      !order.producto ||
      !order.cantidad ||
      !order.precio
    ) {
      alert("Completa todos los campos");
      return;
    }

    const newOrder: Order = {
      id: (orders.length + 1).toString(),
      cliente: order.cliente,
      producto: order.producto,
      cantidad: order.cantidad,
      precio: order.precio,
      estado: order.estado ?? "pendiente",
      fecha: order.fecha ?? new Date().toISOString(),
    };

    createOrder(newOrder);
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="flex items-center gap-2 text-emerald-700 !bg-transparent"
      >
        <IoIosAddCircle />
        Crear Pedido
      </button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className="text-black">
          <h3 className="text-lg font-semibold mb-3">
            Crear Pedido
          </h3>
          <input
            type="text"
            placeholder="Cliente"
            value={order.cliente ?? ""}
            onChange={(e) => updateField("cliente", e.target.value)}
            className="text-black w-full border rounded px-2 py-1 mb-2"
          />
          <input
            type="text"
            placeholder="Producto"
            value={order.producto ?? ""}
            onChange={(e) => updateField("producto", e.target.value)}
            className="w-full border rounded px-2 py-1 mb-2"
          />
          <input
            type="number"
            placeholder="Cantidad"
            value={order.cantidad ?? ""}
            onChange={(e) =>
              updateField("cantidad", Number(e.target.value))
            }
            className="w-full border rounded px-2 py-1 mb-2"
          />
          <input
            type="number"
            placeholder="Precio"
            value={order.precio ?? ""}
            onChange={(e) =>
              updateField("precio", Number(e.target.value))
            }
            className="w-full border rounded px-2 py-1 mb-2"
          />
          <input
            type="date"
            value={order.fecha ?? ""}
            onChange={(e) => updateField("fecha", e.target.value)}
            className="w-full border rounded px-2 py-1 mb-2"
          />
          <select
            value={order.estado ?? "pendiente"}
            onChange={(e) =>
              updateField("estado", e.target.value as OrderStatus)
            }
            className="w-full border rounded px-2 py-1 mb-4"
          >
            <option value="pendiente">Pendiente</option>
            <option value="en_proceso">En proceso</option>
            <option value="completado">Completado</option>
            <option value="cancelado">Cancelado</option>
          </select>
        </div>
        <div className="flex justify-end gap-2">
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