import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Search } from "lucide-react";
import { challenges } from "@/data/challenges/challenges-showcase";

export default function ChallengesContent() {
  return (
    <div>
      <h1>Browse Challenges</h1>
    </div>
  );
}
