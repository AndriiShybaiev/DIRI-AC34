import React from "react";

// AC3.4-7b: Diálogo modal cuando no se encuentra el item
type ModalProps = {
    isOpen: boolean;
    title: string;
    content: React.ReactNode;
    onClose: () => void;
};

export function Modal({ isOpen, title, content, onClose }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="modalBackdrop" role="dialog" aria-modal="true">
            <div className="modalCard">
                <div className="modalHeader">
                    <h3>{title}</h3>
                </div>
                <div className="modalBody">{content}</div>
                <div className="modalFooter">
                    <button onClick={onClose}>Cerrar</button>
                </div>
            </div>
        </div>
    );
}
