"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import type { Challenge } from "@/data/challenges/challenges-showcase";

export type FilterState = {
  search: string;
  framework: string;
  difficulty: string;
  type: string;
};

export function useChallengeFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [filters, setFilters] = useState<FilterState>({
    search: searchParams.get("search") || "",
    framework: searchParams.get("framework") || "",
    difficulty: searchParams.get("difficulty") || "",
    type: searchParams.get("type") || "",
  });

  useEffect(() => {
    setFilters({
      search: searchParams.get("search") || "",
      framework: searchParams.get("framework") || "",
      difficulty: searchParams.get("difficulty") || "",
      type: searchParams.get("type") || "",
    });
  }, [searchParams]);

  const updateFilter = useCallback(
    (key: keyof FilterState, value: string) => {
      const newFilters = { ...filters, [key]: value };
      setFilters(newFilters);

      const params = new URLSearchParams();
      Object.entries(newFilters).forEach(([k, v]) => {
        if (v) {
          params.set(k, v);
        }
      });

      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [filters, router, pathname]
  );

  const clearFilters = useCallback(() => {
    setFilters({
      search: "",
      framework: "",
      difficulty: "",
      type: "",
    });
    router.replace(pathname, { scroll: false });
  }, [router, pathname]);

  const filterChallenges = useCallback(
    (challenges: Challenge[]): Challenge[] => {
      return challenges.filter((challenge) => {
        // Search filter
        if (filters.search) {
          const searchLower = filters.search.toLowerCase();
          const matchesSearch =
            challenge.title.toLowerCase().includes(searchLower) ||
            challenge.description.toLowerCase().includes(searchLower) ||
            challenge.tags.some((tag) => tag.toLowerCase().includes(searchLower));

          if (!matchesSearch) return false;
        }

        // Framework filter
        if (filters.framework) {
          if (challenge.framework !== filters.framework) return false;
        }

        // Difficulty filter
        if (filters.difficulty) {
          if (
            challenge.difficulty.toLowerCase() !== filters.difficulty.toLowerCase()
          ) {
            return false;
          }
        }

        // Type filter
        if (filters.type) {
          if (
            challenge.type.toLowerCase().replace("-", " ") !==
            filters.type.toLowerCase()
          ) {
            return false;
          }
        }

        return true;
      });
    },
    [filters]
  );

  return {
    filters,
    updateFilter,
    clearFilters,
    filterChallenges,
  };
}
