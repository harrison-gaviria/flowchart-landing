interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeCloseButton?: boolean;
  children: React.ReactNode;
}

export function Modal({
  isOpen,
  onClose,
  activeCloseButton = false,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  const closeButton = <div className="mt-4 text-right">
    <button
      onClick={onClose}
      className="text-sm text-gray-500 hover:underline"
    >
      Cerrar
    </button>
  </div>

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-slate-100 rounded-lg p-6 w-[350px] shadow-lg">
        {children}
        {activeCloseButton ?? closeButton}
      </div>
    </div>
  );
}