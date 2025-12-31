import { getChallengeBySlug } from "@/data/challenges/challenges-showcase";
import { notFound } from "next/navigation";
import ChallengeDetailItem from "@/components/challenges/challenge-detail";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

type ChallengePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ChallengePage({ params }: ChallengePageProps) {
  const { id } = await params;
  const challenge = await getChallengeBySlug(id);

  if (!challenge) {
    notFound();
  }

  return (
    <div className="px-4 py-2">
      <div className="py-2">
        <Button variant="outline" asChild>
          <Link href="/challenges">
            <MoveLeft />
            Back to challenges
          </Link>
        </Button>
      </div>
      <div className="">
        <ChallengeDetailItem {...challenge} />
      </div>
    </div>
  );
}
