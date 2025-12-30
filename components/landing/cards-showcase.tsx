import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "../ui/card";
import { cardShowcaseItems } from "@/data/landing/cards-showcase";

export default function CardsShowcase() {
  return (
    <div className="grid gap-6 px-6 pb-24 md:grid-cols-2 lg:grid-cols-3 lg:px-12">
      {cardShowcaseItems.map((item) => (
        <Card key={item.title}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{item.content}</p>
          </CardContent>
          <CardFooter>
            <CardAction>
              <Button asChild size="lg">
                <Link href={item.linkHref}>{item.linkText}</Link>
              </Button>
            </CardAction>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
