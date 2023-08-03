import React from 'react';
import { FaSpinner } from 'react-icons/fa';

interface LoadingOverlayProps {
  fullscreen?: boolean;
}

const LoadingOverlay = ({ fullscreen }: LoadingOverlayProps): React.ReactNode => {

  const overlayClass = `${fullscreen ? "inset-0" : "relative top-0 left-0 right-0 bottom-0"} flex items-center justify-center bg-blue-200 z-50 h-full`;

  return (
    <div className={overlayClass}>
      <FaSpinner className="text-white animate-spin" size={40} />
    </div>
  );
};

export default LoadingOverlay;
