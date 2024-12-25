import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

export const QuickStatsWidget = ({
  icon: Icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) => (
  <Card>
    <CardContent className="flex items-center p-6">
      <Icon className="h-8 w-8 text-primary mr-4" />
      <div>
        <CardDescription>{label}</CardDescription>
        <CardTitle>{value}</CardTitle>
      </div>
    </CardContent>
  </Card>
);