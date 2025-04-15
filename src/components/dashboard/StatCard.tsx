
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change?: number;
  className?: string;
}

export const StatCard = ({ title, value, icon: Icon, change, className = "" }: StatCardProps) => {
  return (
    <div className={`stat-card ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          
          {change !== undefined && (
            <div className={`flex items-center mt-1 text-xs font-medium ${change >= 0 ? "text-success" : "text-destructive"}`}>
              {change >= 0 ? "+" : ""}{change}% from last period
            </div>
          )}
        </div>
        
        <div style={{ 
          padding: '0.5rem', 
          backgroundColor: 'var(--primary)', 
          opacity: 0.1, 
          borderRadius: '9999px' 
        }}>
          <Icon className="text-primary" style={{ width: '1.25rem', height: '1.25rem' }} />
        </div>
      </div>
    </div>
  );
};
