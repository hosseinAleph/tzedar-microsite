import { cn } from "@/lib/utils"
import { Loader2Icon } from "lucide-react"

export function Spinner({ ...props }: React.ComponentProps<"svg">) {
  return (
    <div>
      <Loader2Icon
        role="status"
        aria-label="Loading"
        className={cn("margin-top-2 animate-spin")}
        {...props}
      />
    </div>
  )
}
