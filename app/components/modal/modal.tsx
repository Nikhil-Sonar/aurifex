'use client';
import React, { useCallback } from 'react'
import "./modal.css"
import Image from 'next/image';

type ModalProps = {
  showCard: string;
  passData: {
    title: string;
    year: string;
    image: string;
    card_view_title: string;
    description: string;
  } | null;
  onSendData: (message: string, itemVal: { title: string; year: string; image: string; card_view_title: string; description: string }) => void;
};

const modal = React.memo(({ showCard, passData, onSendData }: ModalProps) => {

  const handleEvent = useCallback(() => {
    if (passData) {
      onSendData('hide', passData);
    }
  }, [passData, onSendData]);

  return (
    <div className={`overlay ${showCard}`} >
      <div className="popup">
        <div onClick={handleEvent} className="close-btn">×</div>
        <div className="logo">
          <Image width={32} height={32} src={passData?.image as string} alt="company logo" />
          <h2>{passData?.title}</h2>
        </div>
        <p>
          {passData?.description}
        </p>
        <div className="tags">EdTech | Mumbai</div>
      </div>
    </div>
  )
})

modal.displayName = 'Modal';
export default modal