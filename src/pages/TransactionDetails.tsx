
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { BarChart3, ChevronLeft, FileCheck, MapPin, Shield, User, Clock, CreditCard, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

// Mock data for charts
const historyData = [
  { date: "Jan", amount: 1200 },
  { date: "Feb", amount: 1900 },
  { date: "Mar", amount: 1100 },
  { date: "Apr", amount: 1600 },
  { date: "May", amount: 900 },
  { date: "Jun", amount: 1700 },
  { date: "Jul", amount: 750 },
  { date: "Aug", amount: 950 },
  { date: "Sep", amount: 1800 },
  { date: "Oct", amount: 2100 },
  { date: "Nov", amount: 1000 },
  { date: "Dec", amount: 1350 },
];

const riskFactorsData = [
  { name: "Velocity", score: 85 },
  { name: "Amount", score: 65 },
  { name: "Location", score: 95 },
  { name: "Time", score: 40 },
  { name: "Device", score: 25 },
  { name: "History", score: 15 },
];

const TransactionDetails = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center gap-2 mb-8">
        <Button variant="ghost" size="icon">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Transaction Details</h1>
          <p className="text-muted-foreground">Detailed view of transaction TX123457</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Transaction Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Transaction ID</p>
                <p className="font-medium">TX123457</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date & Time</p>
                <p className="font-medium">Apr 12, 2025 - 14:32:45 UTC</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Amount</p>
                <p className="font-medium text-lg">$5,675.50</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <div className="flex items-center gap-1 mt-1">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  <Badge variant="destructive">Flagged</Badge>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Payment Method</p>
                <p className="font-medium">Credit Card ****6789</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">IP Address</p>
                <p className="font-medium">192.168.0.123</p>
              </div>
            </div>

            <Separator className="my-6" />

            <div>
              <p className="text-sm text-muted-foreground mb-2">Risk Assessment</p>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-destructive/10 rounded-full">
                  <Shield className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <p className="font-semibold">High Risk Score: 89/100</p>
                  <p className="text-xs text-muted-foreground">
                    This transaction has been flagged for unusual activity patterns
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Customer Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Emily Johnson</h3>
                <p className="text-muted-foreground">Customer since June 2021</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">emily.johnson@example.com</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Address</p>
                <p className="font-medium">123 Main St, Boston, MA 02115</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Account</p>
                <p className="font-medium">#AC98765432</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Risk Profile</p>
                <p className="font-medium">Low</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Previous Flags</p>
                <p className="font-medium">0</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Transaction Location</CardTitle>
            <CardDescription>Unusual transaction location detected</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-4 mb-6">
              <div className="p-2 bg-warning/10 rounded-full">
                <MapPin className="h-5 w-5 text-warning" />
              </div>
              <div>
                <h3 className="font-medium">Transaction Location</h3>
                <p>Las Vegas, NV, United States</p>
                <p className="text-xs text-warning mt-1">
                  <AlertTriangle className="h-3 w-3 inline mr-1" />
                  Different from usual customer location (Boston, MA)
                </p>
              </div>
            </div>

            <div className="bg-muted h-[200px] rounded-md flex items-center justify-center">
              {/* Placeholder for a map */}
              <p className="text-muted-foreground">Map visualization would appear here</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk Factors</CardTitle>
            <CardDescription>Breakdown of risk evaluation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={riskFactorsData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis type="category" dataKey="name" width={80} />
                  <Tooltip 
                    formatter={(value) => [`${value}/100`, 'Risk Score']}
                    contentStyle={{ 
                      borderRadius: 'var(--radius)',
                      border: '1px solid hsl(var(--border))',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Bar 
                    dataKey="score" 
                    fill="hsl(var(--primary))" 
                    barSize={20}
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="history" className="w-full mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="history">Transaction History</TabsTrigger>
          <TabsTrigger value="details">Technical Details</TabsTrigger>
          <TabsTrigger value="timeline">Event Timeline</TabsTrigger>
        </TabsList>
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>Customer's transaction pattern over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={historyData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
                    <Tooltip 
                      formatter={(value) => [`$${value}`, 'Amount']}
                      contentStyle={{ 
                        borderRadius: 'var(--radius)',
                        border: '1px solid hsl(var(--border))',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="amount" 
                      stroke="hsl(var(--primary))" 
                      fillOpacity={1} 
                      fill="url(#colorAmount)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-sm text-muted-foreground">Average Transaction</p>
                  <p className="font-medium">$1,362.50</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Highest Transaction</p>
                  <p className="font-medium">$2,100.00</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Current Transaction</p>
                  <p className="font-medium text-destructive">$5,675.50</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">% Above Average</p>
                  <p className="font-medium text-destructive">+316%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="details">
          <Card>
            <CardHeader>
              <CardTitle>Technical Details</CardTitle>
              <CardDescription>Transaction metadata and technical information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    Payment Details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Card Type</span>
                      <span>Visa</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Card Number</span>
                      <span>****-****-****-6789</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Authorization Code</span>
                      <span>AUTH4567890123</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Merchant Category</span>
                      <span>Electronics</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Processing Fee</span>
                      <span>$14.19</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Security Information
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">3D Secure</span>
                      <span className="text-destructive">Failed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">AVS Check</span>
                      <span className="text-warning">Partial Match</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">CVV Verification</span>
                      <span className="text-success">Passed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Device Fingerprint</span>
                      <span>DF123456789ABCDEF</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Browser</span>
                      <span>Chrome 123.0.0.1</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Timing Information
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Initiated</span>
                      <span>Apr 12, 2025 - 14:32:12 UTC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Authorized</span>
                      <span>Apr 12, 2025 - 14:32:28 UTC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Flagged</span>
                      <span className="text-destructive">Apr 12, 2025 - 14:32:45 UTC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Processing Time</span>
                      <span>33 seconds</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Risk Engine Results
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rule Engine</span>
                      <span className="text-destructive">4 rules triggered</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">ML Score</span>
                      <span className="text-destructive">0.92 (High Risk)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Anomaly Detection</span>
                      <span className="text-destructive">Positive</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Network Analysis</span>
                      <span className="text-warning">Suspicious</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Final Decision</span>
                      <span className="text-destructive">Manual Review</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="timeline">
          <Card>
            <CardHeader>
              <CardTitle>Event Timeline</CardTitle>
              <CardDescription>Chronological sequence of transaction events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full flex items-center justify-center bg-primary/10">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <div className="w-px h-full bg-border"></div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">Transaction Initiated</h3>
                      <Badge variant="outline">14:32:12</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Customer initiated a purchase of $5,675.50 from merchant "TechGadgets Inc".
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full flex items-center justify-center bg-primary/10">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div className="w-px h-full bg-border"></div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">Security Checks</h3>
                      <Badge variant="outline">14:32:20</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      3D Secure authentication failed. AVS returned partial match. CVV verification passed.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full flex items-center justify-center bg-success/10">
                      <CheckCircle className="h-5 w-5 text-success" />
                    </div>
                    <div className="w-px h-full bg-border"></div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">Authorization Approved</h3>
                      <Badge variant="outline">14:32:28</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Payment authorized by issuing bank with authorization code AUTH4567890123.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full flex items-center justify-center bg-destructive/10">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                    </div>
                    <div className="w-px h-full bg-border"></div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">Risk Analysis Triggered</h3>
                      <Badge variant="outline">14:32:40</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Transaction flagged by risk engine. Unusual location, amount exceeds typical spending, and velocity check failed.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full flex items-center justify-center bg-destructive/10">
                      <XCircle className="h-5 w-5 text-destructive" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">Manual Review Required</h3>
                      <Badge variant="outline">14:32:45</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Transaction held for manual review. Customer notified of temporary hold.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex gap-2 justify-end">
        <Button variant="outline">Approve Transaction</Button>
        <Button variant="destructive">Decline Transaction</Button>
        <Button>Request More Information</Button>
      </div>
    </DashboardLayout>
  );
};

export default TransactionDetails;
