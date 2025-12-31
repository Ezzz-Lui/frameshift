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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const frameworks = [
  "Vue",
  "Django",
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
] as const;

const difficulties = ["Easy", "Medium", "Hard", "Challenger"] as const;

export default function SearchSection() {
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
          <form>
            <FieldGroup>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Field>
                  <FieldLabel htmlFor="small-form-name">Search</FieldLabel>
                  <Input
                    id="small-form-name"
                    placeholder="Search by name or keyword (optional)"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="small-form-role">Role</FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="small-form-role">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="developer">Developer</SelectItem>
                        <SelectItem value="designer" disabled>
                          Designer
                        </SelectItem>
                        <SelectItem value="manager" disabled>
                          Manager
                        </SelectItem>
                        <SelectItem value="other" disabled>
                          Other
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="small-form-framework">
                    Framework
                  </FieldLabel>
                  <Combobox items={frameworks}>
                    <ComboboxInput
                      id="small-form-framework"
                      placeholder="Select a framework"
                    />
                    <ComboboxContent>
                      <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
                      <ComboboxList>
                        {(item) => (
                          <ComboboxItem
                            key={item}
                            value={item}
                            disabled={item != "Vue" && item != "Django"}
                          >
                            {item}
                          </ComboboxItem>
                        )}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </Field>
                <Field>
                  <FieldLabel htmlFor="small-form-difficulty">
                    Difficulty
                  </FieldLabel>
                  <Combobox items={difficulties}>
                    <ComboboxInput
                      id="small-form-difficulty"
                      placeholder="Select a difficulty"
                    />
                    <ComboboxContent>
                      <ComboboxEmpty>No difficulties found.</ComboboxEmpty>
                      <ComboboxList>
                        {(item) => (
                          <ComboboxItem
                            key={item}
                            value={item}
                            disabled={item != "Easy" && item != "Medium"}
                          >
                            {item}
                          </ComboboxItem>
                        )}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </Field>
              </div>
              {/* <Field orientation="horizontal">
                <Button type="submit">Search</Button>
              </Field> */}
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
