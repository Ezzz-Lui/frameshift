import { challenges } from "@/data/challenges/challenges-showcase";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { FrameworkBadge, DifficultyBadge, TypeBadge } from "@/components/challenges/badges-usage";


const frameworkVariantColors: Record<string, string> = {
    "vue 3": "vue",
    "react": "react",
    "next.js": "nextjs",
    "django": "django",
    "sveltekit": "sveltekit",
    "nuxt.js": "nuxtjs",
    "remix": "remix",
    "astro": "astro",
}

const difficultyVariantColors: Record<string, string> = {
    "challenger": "challenger",
    "hard": "destructive",
    "medium": "secondary",
    "easy": "default",
}

const getVariant = (value: string, variantMap: Record<string, string>, defaultVariant = "outline") => {
  return (variantMap[value.toLowerCase()] || defaultVariant) as typeof frameworkVariantColors[keyof typeof frameworkVariantColors];
};

export default function GridChallenges() {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>All challenges</CardTitle>
          <CardDescription>
            {challenges.length > 0
              ? `Showing ${challenges.length} challenges`
              : `Not founding challenges`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            {challenges.map((challenge) => (
              <Card key={challenge.id} className="mb-4">
                <CardHeader>
                    <CardTitle>{challenge.title}</CardTitle>
                    <CardDescription className="capitalize space-x-2">
                        <FrameworkBadge value={challenge.framework} />
                        <DifficultyBadge value={challenge.difficulty} />
                        <TypeBadge value={challenge.type} />
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
