import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Play, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface FormData {
  email: string;
  password: string;
  templateUrl: string;
  targetPoints: number;
}

export function BotForm() {
  const [form, setForm] = useState<FormData>({
    email: "",
    password: "",
    templateUrl: "",
    targetPoints: 100,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Bot iniciado com sucesso!", {
      description: `Alvo: ${form.targetPoints} pontos`,
    });

    setLoading(false);
  };

  return (
    <div className="glass rounded-xl p-6 animate-slide-up">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-foreground">Executar Bot</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Configure e inicie a automação de créditos
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="bg-input border-border focus:border-primary focus:ring-primary/20"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
            className="bg-input border-border focus:border-primary focus:ring-primary/20"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="templateUrl">URL do Template</Label>
          <Input
            id="templateUrl"
            type="url"
            placeholder="https://lovable.dev/template/..."
            value={form.templateUrl}
            onChange={(e) => setForm({ ...form, templateUrl: e.target.value })}
            required
            className="bg-input border-border focus:border-primary focus:ring-primary/20"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="targetPoints">Pontos Desejados</Label>
          <Input
            id="targetPoints"
            type="number"
            placeholder="100"
            value={form.targetPoints}
            onChange={(e) => setForm({ ...form, targetPoints: parseInt(e.target.value) || 0 })}
            min={10}
            step={10}
            required
            className="bg-input border-border focus:border-primary focus:ring-primary/20"
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow transition-all duration-300"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Executando...
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" />
              Iniciar Bot
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
