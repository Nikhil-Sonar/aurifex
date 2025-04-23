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
  } | null;
  onSendData: (message: string, itemVal: { title: string; year: string; image: string }) => void;
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
           <Image  src={passData?.image as string}  alt="company logo" />
          <h2>{passData?.title}</h2>
        </div>
        <p>
          Working with Aurifex was a game-changer for our fitness app. They understood our vision,
          delivered a sleek and intuitive design, and ensured a smooth user experience. Their team was
          proactive, communicative, and always ready to go the extra mile. Highly recommend!
        </p>
        <div className="tags">EdTech | Mumbai</div> 
      </div>
    </div>
  )
})

modal.displayName = 'Modal';


export default modal