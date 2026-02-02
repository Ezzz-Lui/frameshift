"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "../ui/combobox";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { useChallengeFilters } from "@/lib/hooks/use-challenge-filters";
import { useEffect, useState } from "react";

const frameworks = [
  "Vue 3",
  "Django",
  "React",
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
] as const;

const difficulties = ["Easy", "Medium", "Hard", "Challenger"] as const;

const types = ["Bug Fix", "Feature Addition", "Refactor"] as const;

export default function SearchSection() {
  const { filters, updateFilter, clearFilters } = useChallengeFilters();
  const [searchValue, setSearchValue] = useState(filters.search);

  useEffect(() => {
    setSearchValue(filters.search);
  }, [filters.search]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    updateFilter("search", value);
  };

  const hasActiveFilters =
    filters.search || filters.framework || filters.difficulty || filters.type;

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Browse Challenges</CardTitle>
          <CardDescription>
            Filter by framework, difficulty, and challenge type to find the
            right assessment.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <FieldGroup>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Field>
                  <FieldLabel htmlFor="search-input">Search</FieldLabel>
                  <Input
                    id="search-input"
                    placeholder="Search by name or keyword"
                    value={searchValue}
                    onChange={(e) => handleSearchChange(e.target.value)}
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="framework-select">Framework</FieldLabel>
                  <Combobox
                    items={frameworks}
                    value={filters.framework || null}
                    onValueChange={(value) => updateFilter("framework", value || "")}
                  >
                    <ComboboxInput
                      id="framework-select"
                      placeholder="All frameworks"
                    />
                    <ComboboxContent>
                      <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
                      <ComboboxList>
                        {(item) => (
                          <ComboboxItem key={item} value={item}>
                            {item}
                          </ComboboxItem>
                        )}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </Field>
                <Field>
                  <FieldLabel htmlFor="difficulty-select">Difficulty</FieldLabel>
                  <Combobox
                    items={difficulties}
                    value={filters.difficulty || null}
                    onValueChange={(value) => updateFilter("difficulty", value || "")}
                  >
                    <ComboboxInput
                      id="difficulty-select"
                      placeholder="All difficulties"
                    />
                    <ComboboxContent>
                      <ComboboxEmpty>No difficulties found.</ComboboxEmpty>
                      <ComboboxList>
                        {(item) => (
                          <ComboboxItem key={item} value={item}>
                            {item}
                          </ComboboxItem>
                        )}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </Field>
                <Field>
                  <FieldLabel htmlFor="type-select">Type</FieldLabel>
                  <Combobox
                    items={types}
                    value={filters.type || null}
                    onValueChange={(value) => updateFilter("type", value || "")}
                  >
                    <ComboboxInput
                      id="type-select"
                      placeholder="All types"
                    />
                    <ComboboxContent>
                      <ComboboxEmpty>No types found.</ComboboxEmpty>
                      <ComboboxList>
                        {(item) => (
                          <ComboboxItem key={item} value={item}>
                            {item}
                          </ComboboxItem>
                        )}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </Field>
              </div>
              {hasActiveFilters && (
                <div className="mt-4 flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={clearFilters}
                  >
                    <X className="h-4 w-4 mr-2" />
                    Clear Filters
                  </Button>
                </div>
              )}
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
