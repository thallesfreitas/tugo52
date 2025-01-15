import { Card } from "@/components/ui/card";

interface ProjectTechStackProps {
	tech: string[];
}

export function ProjectTechStack({ tech }: ProjectTechStackProps) {
	return (
		<div className="grid gap-4 md:grid-cols-2">
			{tech.map((technology) => (
				<Card key={technology} className="p-4 flex items-center gap-3">
					<div className="p-2 bg-primary/10 rounded-lg">
						<TechIcon name={technology} />
					</div>
					<span className="font-medium">{technology}</span>
				</Card>
			))}
		</div>
	);
}

function TechIcon({ name }: { name: string }) {
	// Em produção, isso seria um componente mais robusto com ícones reais
	return (
		<div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center">
			{name[0]}
		</div>
	);
}
