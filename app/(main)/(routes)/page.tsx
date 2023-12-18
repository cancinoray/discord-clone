import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  const status = true;
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-500"> Hello World</p>

      <Button className={cn("bg-indigo-500", status && "bg-red-500")}>Click Me!</Button>
    </div>
  );
}
