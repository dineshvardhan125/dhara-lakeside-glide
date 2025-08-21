import { useState, useEffect } from 'react';
import { processImageFromUrl } from '@/utils/backgroundRemoval';

interface ProcessedLogoProps {
  originalUrl: string;
  alt: string;
  className: string;
  fallbackUrl?: string;
}

const ProcessedLogo = ({ originalUrl, alt, className, fallbackUrl }: ProcessedLogoProps) => {
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processLogo = async () => {
      try {
        setIsProcessing(true);
        setError(null);
        const processed = await processImageFromUrl(originalUrl);
        setProcessedUrl(processed);
      } catch (err) {
        console.error('Error processing logo:', err);
        setError('Failed to process logo');
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, [originalUrl]);

  if (isProcessing) {
    return (
      <div className={`${className} flex items-center justify-center bg-transparent`}>
        <div className="animate-pulse text-white">Loading...</div>
      </div>
    );
  }

  if (error || !processedUrl) {
    return (
      <img 
        src={fallbackUrl || originalUrl} 
        alt={alt}
        className={className}
      />
    );
  }

  return (
    <img 
      src={processedUrl} 
      alt={alt}
      className={className}
    />
  );
};

export default ProcessedLogo;