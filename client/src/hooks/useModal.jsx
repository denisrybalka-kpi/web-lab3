import { useState, useCallback } from "react";

const useModal = () => {
  const [openModals, setOpenModals] = useState({});

  const openModal = useCallback((modalId) => {
    setOpenModals((prev) => ({ ...prev, [modalId]: true }));
  }, []);

  const closeModal = useCallback((modalId) => {
    setOpenModals((prev) => ({ ...prev, [modalId]: false }));
  }, []);

  const toggleModal = useCallback((modalId) => {
    setOpenModals((prev) => ({ ...prev, [modalId]: !prev[modalId] }));
  }, []);

  const isModalOpen = useCallback(
    (modalId) => !!openModals[modalId],
    [openModals]
  );

  return {
    openModal,
    closeModal,
    toggleModal,
    isModalOpen,
  };
};

export default useModal;
