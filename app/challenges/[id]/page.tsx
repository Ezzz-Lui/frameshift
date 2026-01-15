import { getChallengeBySlug } from "@/data/challenges/challenges-showcase";
import { notFound } from "next/navigation";
import ChallengeDetailItem from "@/components/challenges/challenge-detail";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
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
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      {/* Back Navigation */}
      <div className="mb-6">
        <Button
          variant="ghost"
          asChild
          className="gap-2 pl-0 hover:pl-2 transition-all"
        >
          <Link href="/challenges">
            <MoveLeft className="h-4 w-4" />
            Back to challenges
          </Link>
        </Button>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Challenge Details - Takes 2 columns on large screens */}
        <div className="lg:col-span-2">
          <ChallengeDetailItem {...challenge} />
        </div>

        {/* Sidebar - Takes 1 column on large screens */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-6">
            <SidebarChallenge {...challenge} />
          </div>
        </div>
      </div>
    </div>
  );
}
