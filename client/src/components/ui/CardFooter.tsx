import React from "react";

interface CardFooterProps {
  buttonText: string;
  onButtonClick: () => void;
}

const CardFooter: React.FC<CardFooterProps> = ({
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="p-4">
      <button
        onClick={onButtonClick}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default CardFooter;
