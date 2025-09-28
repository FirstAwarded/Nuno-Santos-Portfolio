import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface MetricCardProps {
  value: ReactNode;
  label: string;
  sublabel?: string;
}

export function MetricCard({ value, label, sublabel }: MetricCardProps) {
  return (
    <Card className="text-center">
      <CardContent className="pt-6">
        <div className="text-3xl font-bold text-primary mb-2">{value}</div>
        <p className="text-sm text-muted-foreground">{label}</p>
        {sublabel && (
          <div className="text-xs text-muted-foreground mt-1">{sublabel}</div>
        )}
      </CardContent>
    </Card>
  );
}