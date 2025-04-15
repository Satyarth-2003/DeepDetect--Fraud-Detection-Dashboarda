
import { 
  Home, 
  BarChart3, 
  AlertCircle, 
  Search, 
  Users, 
  History, 
  Settings, 
  LogOut,
  Menu
} from "lucide-react";
import { useState } from "react";
import { Logo } from "../Logo";

const navItems = [
  { 
    icon: Home, 
    label: "Dashboard", 
    href: "/" 
  },
  { 
    icon: BarChart3, 
    label: "Transactions", 
    href: "/transactions" 
  },
  { 
    icon: AlertCircle, 
    label: "Alerts", 
    href: "/alerts" 
  },
  { 
    icon: Search, 
    label: "Investigation", 
    href: "/investigation" 
  },
  { 
    icon: Users, 
    label: "User Management", 
    href: "/users" 
  },
  { 
    icon: History, 
    label: "Audit Log", 
    href: "/audit" 
  },
  { 
    icon: Settings, 
    label: "Settings", 
    href: "/settings" 
  },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : 'expanded'}`}>
      <div className="sidebar-header">
        {!collapsed && <Logo />}
        <button 
          className="btn btn-ghost btn-icon"
          onClick={() => setCollapsed(prev => !prev)}
          style={{ color: 'var(--sidebar-foreground)' }}
        >
          <Menu style={{ width: '1.25rem', height: '1.25rem' }} />
        </button>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="sidebar-nav-list">
          {navItems.map((item) => (
            <li key={item.label} className="sidebar-nav-item">
              <a 
                href={item.href} 
                className="sidebar-nav-link"
              >
                <item.icon style={{ width: '1.25rem', height: '1.25rem' }} />
                {!collapsed && <span>{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <button 
          className={`btn btn-ghost ${collapsed ? '' : 'w-full'}`}
          style={{ 
            justifyContent: collapsed ? 'center' : 'flex-start',
            color: 'var(--sidebar-foreground)'
          }}
        >
          <LogOut style={{ width: '1.25rem', height: '1.25rem', marginRight: collapsed ? 0 : '0.5rem' }} />
          {!collapsed && "Logout"}
        </button>
      </div>
    </div>
  );
};
