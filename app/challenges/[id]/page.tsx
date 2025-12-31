import { getChallengeBySlug } from "@/data/challenges/challenges-showcase";
import { notFound } from "next/navigation";
import ChallengeDetailItem from "@/components/challenges/challenge-detail";
import { Button } from "@/components/ui/button";
import { GitBranch, MoveLeft } from "lucide-react";
import Link from "next/link";
import SidebarChallenge from "@/components/challenges/challenge-sidebar";

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
      <div className="py-2 flex gap-2">
        <Button variant="outline" asChild>
          <Link href="/challenges">
            <MoveLeft />
            Back to challenges
          </Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/challenges">
            <GitBranch />
            Take Challenge
          </Link>
        </Button>
      </div>
      <div className="flex flex-row">
        <div className="basis-3/4 mr-4">
          <ChallengeDetailItem {...challenge}/>
        </div>
        <div className="basis-1/4">
          <SidebarChallenge {...challenge} />
        </div>
      </div>
    </div>
  );
}
