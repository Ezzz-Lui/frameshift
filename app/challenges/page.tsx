"use client";

import GridChallenges from "@/components/challenges/grid-challenges";
import SearchSection from "@/components/challenges/search-section";
import { UserStats } from "@/components/challenges/user-stats";
import { BadgesDisplay } from "@/components/challenges/badges-display";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ChallengesContent() {
  return (
    <div className="space-y-6 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <Tabs defaultValue="challenges" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="stats">My Progress</TabsTrigger>
          </TabsList>
          <TabsContent value="challenges" className="space-y-6">
            <SearchSection />
            <GridChallenges />
          </TabsContent>
          <TabsContent value="stats" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <UserStats />
              </div>
              <div className="lg:col-span-1">
                <BadgesDisplay />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
