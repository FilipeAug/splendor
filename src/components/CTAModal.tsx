import { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface CTAModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TrackingParams {
  gclid: string | null;
  fbclid: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
  referrer: string;
  landing_page: string;
  user_agent: string;
  timestamp: string;
}

declare global {
  interface Window {
    trackingParams: TrackingParams;
  }
}

const healthConditions = [
  "Diabetes",
  "Colesterol Alto", 
  "Ácido Úrico",
  "Pressão Alta/Baixa",
  "Tireoide",
  "Trombose",
  "Asma",
  "Sinusite",
  "TPM",
  "Enxaqueca",
  "Artrite",
  "Fibromialgia",
  "Osteoporose",
  "Psoríase",
  "Gastrite",
  "Intestino Preso",
  "Pedra na Vesícula",
  "Pedra nos Rins",
  "Mal de Parkinson",
  "Alergias",
  "Câncer"
];

export function CTAModal({ isOpen, onClose }: CTAModalProps) {
  const [formData, setFormData] = useState({
    numPeople: "",
    healthConditions: [] as string[],
    otherCondition: "",
    hasFilter: ""
  });

  const { toast } = useToast();

  const handleHealthConditionChange = (condition: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      healthConditions: checked 
        ? [...prev.healthConditions, condition]
        : prev.healthConditions.filter(c => c !== condition)
    }));
  };

  const handleSubmit = async () => {
    if (!formData.numPeople || !formData.hasFilter) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    try {
      // Preparar dados para o webhook
      const webhookData = {
        // Dados do formulário
        numPeople: formData.numPeople,
        healthConditions: formData.healthConditions,
        otherCondition: formData.otherCondition,
        hasFilter: formData.hasFilter,
        
        // Dados de tracking
        ...(window.trackingParams || {}),
        
        // Dados adicionais
        form_type: "cta_modal",
        page_url: window.location.href,
        submitted_at: new Date().toISOString(),
        device_type: window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop'
      };

      // Enviar para webhook
      await fetch('https://workflowebhook.redoclub.com.br/webhook/splendor-lp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData)
      });

      // Preparar mensagem para WhatsApp
      let message = `Olá! Tenho interesse no Sylocimol e Top H+.\n\n`;
      message += `👥 Pessoas que irão consumir: ${formData.numPeople}\n\n`;
      
      if (formData.healthConditions.length > 0) {
        message += `🏥 Condições de saúde na família:\n`;
        formData.healthConditions.forEach(condition => {
          message += `• ${condition}\n`;
        });
        if (formData.otherCondition) {
          message += `• ${formData.otherCondition}\n`;
        }
        message += `\n`;
      }
      
      message += `🚰 Já possui filtro de água: ${formData.hasFilter}\n\n`;
      message += `Gostaria de saber mais sobre os produtos e como podem ajudar!`;

      // Codificar a mensagem para URL
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/5547992841886?text=${encodedMessage}`;
      
      // Abrir WhatsApp
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Redirecionando...",
        description: "Você será direcionado para o WhatsApp!",
      });

      // Fechar modal
      onClose();
      
      // Reset form
      setFormData({
        numPeople: "",
        healthConditions: [],
        otherCondition: "",
        hasFilter: ""
      });

    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      
      // Mesmo com erro no webhook, continuar com WhatsApp
      let message = `Olá! Tenho interesse no Sylocimol e Top H+.\n\n`;
      message += `👥 Pessoas que irão consumir: ${formData.numPeople}\n\n`;
      
      if (formData.healthConditions.length > 0) {
        message += `🏥 Condições de saúde na família:\n`;
        formData.healthConditions.forEach(condition => {
          message += `• ${condition}\n`;
        });
        if (formData.otherCondition) {
          message += `• ${formData.otherCondition}\n`;
        }
        message += `\n`;
      }
      
      message += `🚰 Já possui filtro de água: ${formData.hasFilter}\n\n`;
      message += `Gostaria de saber mais sobre os produtos e como podem ajudar!`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/5547992841886?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Redirecionando...",
        description: "Você será direcionado para o WhatsApp!",
      });

      onClose();
      setFormData({
        numPeople: "",
        healthConditions: [],
        otherCondition: "",
        hasFilter: ""
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto font-montserrat">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gradient">
            Vamos Personalizar Sua Experiência!
          </DialogTitle>
          <p className="text-center text-muted-foreground mt-2">
            Com essas informações, nosso consultor poderá te orientar melhor sobre como o Sylocimol e Top H+ podem transformar a saúde da sua família.
          </p>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Número de pessoas */}
          <div className="space-y-2">
            <Label htmlFor="numPeople" className="text-base font-semibold text-foreground">
              1. Quantas pessoas irão consumir a água com você? *
            </Label>
            <Input
              id="numPeople"
              placeholder="Ex: 2 pessoas"
              value={formData.numPeople}
              onChange={(e) => setFormData(prev => ({ ...prev, numPeople: e.target.value }))}
              className="text-lg p-4"
            />
          </div>

          {/* Condições de saúde */}
          <div className="space-y-4">
            <Label className="text-base font-semibold text-foreground">
              2. Na sua família, alguém tem ou já teve:
            </Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-64 overflow-y-auto border rounded-lg p-4 bg-muted/30">
              {healthConditions.map((condition) => (
                <div key={condition} className="flex items-center space-x-3">
                  <Checkbox
                    id={condition}
                    checked={formData.healthConditions.includes(condition)}
                    onCheckedChange={(checked) => 
                      handleHealthConditionChange(condition, checked as boolean)
                    }
                  />
                  <Label htmlFor={condition} className="text-sm font-medium cursor-pointer">
                    {condition}
                  </Label>
                </div>
              ))}
              <div className="col-span-full">
                <div className="flex items-center space-x-3 mb-2">
                  <Checkbox
                    id="other"
                    checked={!!formData.otherCondition}
                    onCheckedChange={(checked) => {
                      if (!checked) setFormData(prev => ({ ...prev, otherCondition: "" }));
                    }}
                  />
                  <Label htmlFor="other" className="text-sm font-medium cursor-pointer">
                    Outro
                  </Label>
                </div>
                <Input
                  placeholder="Especifique..."
                  value={formData.otherCondition}
                  onChange={(e) => setFormData(prev => ({ ...prev, otherCondition: e.target.value }))}
                  className="mt-2"
                />
              </div>
            </div>
          </div>

          {/* Filtro de água */}
          <div className="space-y-4">
            <Label className="text-base font-semibold text-foreground">
              3. Você já possui um filtro de água em casa? *
            </Label>
            <div className="flex gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="filter-yes"
                  checked={formData.hasFilter === "Sim"}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, hasFilter: checked ? "Sim" : "" }))
                  }
                />
                <Label htmlFor="filter-yes" className="cursor-pointer">Sim</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="filter-no"
                  checked={formData.hasFilter === "Não"}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, hasFilter: checked ? "Não" : "" }))
                  }
                />
                <Label htmlFor="filter-no" className="cursor-pointer">Não</Label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1 py-3"
          >
            Cancelar
          </Button>
          <Button
            onClick={handleSubmit}
            className="flex-1 py-3 bg-green-500 hover:bg-green-600 text-white font-bold flex items-center justify-center gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}