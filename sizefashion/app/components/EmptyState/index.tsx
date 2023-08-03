import React from 'react';

interface EmptyStateProps {
  text: string;
}

const EmptyState = ({ text }: EmptyStateProps) => (
  <div className="flex items-center justify-center bg-gray-700 h-44 w-full">
    <span>{text}</span>
  </div>
);

export default EmptyState;
