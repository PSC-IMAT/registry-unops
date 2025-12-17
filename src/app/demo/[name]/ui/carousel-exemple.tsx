"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/registry/onu/ui/carousel";
import { Card, CardContent } from "@/registry/onu/ui/card";

export function CarouselExemple() {
	const items = [
		{ title: "Project Alpha", description: "Infrastructure upgrade" },
		{ title: "Project Beta", description: "Data platform rollout" },
		{ title: "Project Gamma", description: "Field operations" },
		{ title: "Project Delta", description: "Climate initiative" },
		{ title: "Project Epsilon", description: "Health outreach" },
	];

	return (
		<Carousel className="w-full max-w-xl mx-auto">
			<CarouselContent>
				{items.map((item, index) => (
					<CarouselItem key={item.title} className="basis-full sm:basis-1/2">
						<Card className="h-full">
							<CardContent className="flex h-full flex-col justify-between gap-2 p-6">
								<div className="text-xs text-muted-foreground">{`0${index + 1}`}</div>
								<div className="space-y-1">
									<div className="text-lg font-semibold">{item.title}</div>
									<div className="text-sm text-muted-foreground">{item.description}</div>
								</div>
							</CardContent>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}

