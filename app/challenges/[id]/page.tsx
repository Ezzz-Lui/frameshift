import { getChallengeBySlug } from "@/data/challenges/challenges-showcase";
import { notFound } from "next/navigation";

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

  return <div>Challenge: {challenge.title}</div>;
}
