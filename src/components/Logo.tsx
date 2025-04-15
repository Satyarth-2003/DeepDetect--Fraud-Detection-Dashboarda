
import { ShieldCheck } from "lucide-react";

export const Logo = () => {
  return (
    <div className="logo">
      <ShieldCheck className="text-primary" style={{ width: '1.5rem', height: '1.5rem' }} />
      <span className="logo-text">DeepDetect</span>
    </div>
  );
};
