import { useEffect, useState } from "react";
import { ProgressContainer, ProgressIndicator } from "./styles";


export function ProgressBar(){
  const [progress, setProgress] = useState(13);

    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);
    
    return (
      <ProgressContainer  value={66}>
        <ProgressIndicator className="ProgressIndicator" style={{ transform: `translateX(-${100 - progress}%)` }} />
      </ProgressContainer>
    )
}