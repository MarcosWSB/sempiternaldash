import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { BotForm } from "@/components/dashboard/BotForm";
import { Coins, Zap, TrendingUp, Clock } from "lucide-react";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Automatize a geração de créditos com eficiência
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard
            title="Total de Pontos"
            value="1,250"
            change="+12% este mês"
            changeType="positive"
            icon={Coins}
          />
          <StatsCard
            title="Execuções Hoje"
            value="12"
            change="+3 desde ontem"
            changeType="positive"
            icon={Zap}
          />
          <StatsCard
            title="Taxa de Sucesso"
            value="98%"
            change="Estável"
            changeType="neutral"
            icon={TrendingUp}
          />
          <StatsCard
            title="Tempo Médio"
            value="45s"
            change="-5s otimizado"
            changeType="positive"
            icon={Clock}
          />
        </div>

        {/* Bot Form - Full Width */}
        <div className="max-w-xl">
          <BotForm />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
