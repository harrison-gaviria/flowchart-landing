interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 w-[350px] shadow-lg">
        {children}
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:underline"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}