
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { AlertItem } from "@/components/dashboard/AlertItem";
import { TransactionTable } from "@/components/dashboard/TransactionTable";
import { RiskScoreChart } from "@/components/dashboard/RiskScoreChart";
import { AlertCircle, BarChart3, Search, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data
const mockTransactions = [
  { id: 'TX123456', customer: 'John Smith', amount: '$1,245.00', date: '2025-04-12', status: 'approved' as const, riskScore: 12 },
  { id: 'TX123457', customer: 'Emily Johnson', amount: '$5,675.50', date: '2025-04-12', status: 'flagged' as const, riskScore: 89 },
  { id: 'TX123458', customer: 'Michael Chen', amount: '$3,240.75', date: '2025-04-11', status: 'investigating' as const, riskScore: 67 },
  { id: 'TX123459', customer: 'Sara Wilson', amount: '$890.25', date: '2025-04-11', status: 'approved' as const, riskScore: 23 },
  { id: 'TX123460', customer: 'David Miller', amount: '$2,350.00', date: '2025-04-10', status: 'flagged' as const, riskScore: 78 },
];

const riskScoreData = [
  { name: 'Apr 08', score: 32 },
  { name: 'Apr 09', score: 29 },
  { name: 'Apr 10', score: 45 },
  { name: 'Apr 11', score: 38 },
  { name: 'Apr 12', score: 52 },
  { name: 'Apr 13', score: 41 },
  { name: 'Apr 14', score: 35 },
  { name: 'Apr 15', score: 44 },
];

const Index = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Fraud Detection Dashboard</h1>
        <p className="text-muted-foreground mt-1">Monitor, analyze, and investigate suspicious activities</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Flagged Transactions" 
          value="25" 
          icon={AlertCircle} 
          change={12} 
        />
        <StatCard 
          title="Total Transactions" 
          value="1,245" 
          icon={BarChart3} 
          change={8} 
        />
        <StatCard 
          title="Average Risk Score" 
          value="42.5" 
          icon={ShieldCheck} 
          change={-3} 
        />
        <StatCard 
          title="Investigations" 
          value="14" 
          icon={Search} 
          change={5} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <RiskScoreChart data={riskScoreData} />
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Recent Alerts</CardTitle>
            <CardDescription>Latest suspicious activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <AlertItem 
              severity="high" 
              title="Unusual transaction pattern" 
              description="Multiple transactions from different locations within short time" 
              time="15 min ago" 
            />
            <AlertItem 
              severity="medium" 
              title="Velocity check failed" 
              description="Transaction frequency exceeded customer's normal pattern" 
              time="1 hour ago" 
            />
            <AlertItem 
              severity="low" 
              title="New device detected" 
              description="Customer logged in from a new device for the first time" 
              time="3 hours ago" 
            />
            <Button variant="outline" className="w-full">View All Alerts</Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recent" className="w-full mb-8">
        <div className="flex items-center justify-between mb-4">
          <TabsList>
            <TabsTrigger value="recent">Recent Transactions</TabsTrigger>
            <TabsTrigger value="flagged">Flagged Only</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <Input 
              placeholder="Search transactions..." 
              className="max-w-sm" 
            />
            <Button>Filter</Button>
          </div>
        </div>
        <TabsContent value="recent">
          <TransactionTable transactions={mockTransactions} />
        </TabsContent>
        <TabsContent value="flagged">
          <TransactionTable 
            transactions={mockTransactions.filter(t => t.status === 'flagged')} 
          />
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Investigation Tools</CardTitle>
            <CardDescription>Tools for deeper analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Button className="h-24 flex flex-col items-center justify-center">
                <Search className="h-6 w-6 mb-2" />
                <span>Transaction Search</span>
              </Button>
              <Button className="h-24 flex flex-col items-center justify-center">
                <BarChart3 className="h-6 w-6 mb-2" />
                <span>Pattern Analysis</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                <ShieldCheck className="h-6 w-6 mb-2" />
                <span>Risk Assessment</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                <AlertCircle className="h-6 w-6 mb-2" />
                <span>Create Alert</span>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>System Health</CardTitle>
            <CardDescription>Fraud detection engine status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">ML Model Accuracy</span>
                  <span className="text-sm font-medium">92%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div className="bg-success h-2.5 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">Rule Engine Performance</span>
                  <span className="text-sm font-medium">88%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">System Uptime</span>
                  <span className="text-sm font-medium">99.9%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div className="bg-accent h-2.5 rounded-full" style={{ width: '99.9%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">False Positive Rate</span>
                  <span className="text-sm font-medium">7%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div className="bg-warning h-2.5 rounded-full" style={{ width: '7%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Index;
