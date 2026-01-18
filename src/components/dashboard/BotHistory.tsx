import { CheckCircle2, XCircle, Clock, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface HistoryItem {
  id: string;
  email: string;
  points: number;
  status: "success" | "failed" | "pending";
  duration: string;
  timestamp: string;
}

const mockHistory: HistoryItem[] = [
  {
    id: "1",
    email: "user1@email.com",
    points: 150,
    status: "success",
    duration: "42s",
    timestamp: "Há 5 min",
  },
  {
    id: "2",
    email: "user2@email.com",
    points: 200,
    status: "success",
    duration: "38s",
    timestamp: "Há 15 min",
  },
  {
    id: "3",
    email: "user3@email.com",
    points: 0,
    status: "failed",
    duration: "12s",
    timestamp: "Há 30 min",
  },
  {
    id: "4",
    email: "user4@email.com",
    points: 100,
    status: "pending",
    duration: "-",
    timestamp: "Agora",
  },
  {
    id: "5",
    email: "user5@email.com",
    points: 300,
    status: "success",
    duration: "55s",
    timestamp: "Há 1 hora",
  },
];

const statusConfig = {
  success: {
    icon: CheckCircle2,
    color: "text-success",
    bg: "bg-success/10",
    label: "Sucesso",
  },
  failed: {
    icon: XCircle,
    color: "text-destructive",
    bg: "bg-destructive/10",
    label: "Falhou",
  },
  pending: {
    icon: Clock,
    color: "text-warning",
    bg: "bg-warning/10",
    label: "Pendente",
  },
};

export function BotHistory() {
  return (
    <div className="glass rounded-xl p-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Histórico</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Últimas execuções do bot
          </p>
        </div>
        <button className="p-2 rounded-lg hover:bg-muted transition-colors">
          <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider py-3 px-4">
                E-mail
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider py-3 px-4">
                Pontos
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider py-3 px-4">
                Status
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider py-3 px-4">
                Duração
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider py-3 px-4">
                Quando
              </th>
            </tr>
          </thead>
          <tbody>
            {mockHistory.map((item, index) => {
              const config = statusConfig[item.status];
              const Icon = config.icon;
              return (
                <tr
                  key={item.id}
                  className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <td className="py-4 px-4">
                    <span className="text-sm font-medium text-foreground font-mono">
                      {item.email}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-semibold text-primary">
                      +{item.points}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
                        config.bg,
                        config.color
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {config.label}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-muted-foreground font-mono">
                      {item.duration}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-muted-foreground">
                      {item.timestamp}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
