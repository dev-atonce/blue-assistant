"use client";
import { useState } from "react";
import Modal from "../layout/Modal";

export default function AddressModal({ modalContent, name }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      {" "}
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-blue-800 font-bold px-4 py-2 border border-blue-800 rounded-lg my-4 md:my-0 hover:scale-105 transition-all w-full"
      >
        詳しい行き方はこちら
      </button>
      <Modal
        //   @ts-ignore
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalContent={modalContent}
      />
    </div>
  );
}
