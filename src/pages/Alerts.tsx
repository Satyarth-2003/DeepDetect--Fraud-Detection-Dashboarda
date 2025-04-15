
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertItem } from "@/components/dashboard/AlertItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { FilterX, Search } from "lucide-react";

const Alerts = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Alert Management</h1>
        <p className="text-muted-foreground mt-1">Review and manage fraud alerts</p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Alert Filters</CardTitle>
          <CardDescription>Narrow down alerts by specific criteria</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Search</label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by ID, name, or details" className="pl-8" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Severity</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select severity level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Severities</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Time Frame</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select time period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="yesterday">Yesterday</SelectItem>
                  <SelectItem value="week">Past Week</SelectItem>
                  <SelectItem value="month">Past Month</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Alert Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select alert type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="transaction">Transaction Pattern</SelectItem>
                  <SelectItem value="location">Location Based</SelectItem>
                  <SelectItem value="velocity">Velocity Check</SelectItem>
                  <SelectItem value="device">Device Based</SelectItem>
                  <SelectItem value="amount">Amount Based</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Status</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                  <SelectItem value="false-positive">False Positive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button variant="outline" className="mr-2 flex items-center gap-1">
                <FilterX className="h-4 w-4" />
                Reset
              </Button>
              <Button className="flex-1">Apply Filters</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">Active Alerts</h2>
          <Badge>42 Total</Badge>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="severity-high">Highest Severity</SelectItem>
              <SelectItem value="severity-low">Lowest Severity</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Alerts (42)</TabsTrigger>
          <TabsTrigger value="high">High Priority (15)</TabsTrigger>
          <TabsTrigger value="medium">Medium Priority (18)</TabsTrigger>
          <TabsTrigger value="low">Low Priority (9)</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="space-y-4">
            <AlertItem 
              severity="high" 
              title="Multiple large transactions in short period" 
              description="Customer ID #5789 made 5 transactions exceeding $1,000 within 30 minutes" 
              time="15 min ago" 
            />
            <AlertItem 
              severity="high" 
              title="Unusual location for high-value transaction" 
              description="Transaction from New Zealand for customer with history only in United States" 
              time="32 min ago" 
            />
            <AlertItem 
              severity="medium" 
              title="Velocity check failed" 
              description="Transaction frequency exceeded customer's normal pattern for Customer ID #2345" 
              time="1 hour ago" 
            />
            <AlertItem 
              severity="medium" 
              title="Device risk score elevated" 
              description="New device with suspicious fingerprint accessing account #AC8765432" 
              time="2 hours ago" 
            />
            <AlertItem 
              severity="low" 
              title="New browser detected" 
              description="Customer logged in using Firefox for the first time (typically uses Chrome)" 
              time="3 hours ago" 
            />
            <AlertItem 
              severity="low" 
              title="Multiple failed authentication attempts" 
              description="3 failed login attempts before successful authentication for customer ID #7123" 
              time="5 hours ago" 
            />
          </div>
          <CardFooter className="flex justify-between mt-6 px-0">
            <div className="text-sm text-muted-foreground">
              Showing 6 of 42 alerts
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </CardFooter>
        </TabsContent>
        
        <TabsContent value="high">
          <div className="space-y-4">
            <AlertItem 
              severity="high" 
              title="Multiple large transactions in short period" 
              description="Customer ID #5789 made 5 transactions exceeding $1,000 within 30 minutes" 
              time="15 min ago" 
            />
            <AlertItem 
              severity="high" 
              title="Unusual location for high-value transaction" 
              description="Transaction from New Zealand for customer with history only in United States" 
              time="32 min ago" 
            />
          </div>
        </TabsContent>
        
        <TabsContent value="medium">
          <div className="space-y-4">
            <AlertItem 
              severity="medium" 
              title="Velocity check failed" 
              description="Transaction frequency exceeded customer's normal pattern for Customer ID #2345" 
              time="1 hour ago" 
            />
            <AlertItem 
              severity="medium" 
              title="Device risk score elevated" 
              description="New device with suspicious fingerprint accessing account #AC8765432" 
              time="2 hours ago" 
            />
          </div>
        </TabsContent>
        
        <TabsContent value="low">
          <div className="space-y-4">
            <AlertItem 
              severity="low" 
              title="New browser detected" 
              description="Customer logged in using Firefox for the first time (typically uses Chrome)" 
              time="3 hours ago" 
            />
            <AlertItem 
              severity="low" 
              title="Multiple failed authentication attempts" 
              description="3 failed login attempts before successful authentication for customer ID #7123" 
              time="5 hours ago" 
            />
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Alerts;
