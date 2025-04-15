
import { AlertCircle, AlertTriangle, Info } from "lucide-react";

type AlertSeverity = "high" | "medium" | "low" | "info";

interface AlertItemProps {
  severity: AlertSeverity;
  title: string;
  description: string;
  time: string;
  className?: string;
}

export const AlertItem = ({ severity, title, description, time, className = "" }: AlertItemProps) => {
  const getIconForSeverity = () => {
    switch (severity) {
      case "high":
        return <AlertCircle className="text-destructive" style={{ width: '1.25rem', height: '1.25rem' }} />;
      case "medium":
        return <AlertTriangle className="text-warning" style={{ width: '1.25rem', height: '1.25rem' }} />;
      case "low":
      case "info":
        return <Info className={severity === "low" ? "text-primary" : "text-accent"} style={{ width: '1.25rem', height: '1.25rem' }} />;
    }
  };

  return (
    <div className={`alert-item ${severity} ${className}`}>
      <div className="card-content">
        <div className="flex">
          <div className="mr-3">
            {getIconForSeverity()}
          </div>
          <div style={{ flex: 1 }}>
            <div className="flex justify-between">
              <h4 className="font-semibold">{title}</h4>
              <span className="text-xs text-muted">{time}</span>
            </div>
            <p className="text-sm text-muted mt-1">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
