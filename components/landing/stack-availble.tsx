import { Vue } from "../icons/vue-icon";
import { Django } from "../icons/django-icon";

export default function StackAvailable() {
  return (
    <div className="mt-8 flex gap-4 justify-center mb-16 flex-col items-center">
      <h1 className="text-3xl">Evaluate Skills in</h1>
      <div className="flex gap-4 justify-center mt-4">
        <Vue className="size-8" />
        <Django className="size-10" />
      </div>
    </div>
  );
}
