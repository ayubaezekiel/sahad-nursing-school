import { Footer } from "@/components/Footer";
import { ProgramsPage } from "@/components/Programs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/programs")({
  component: () => (
    <div>
      <ProgramsPage />
      <Footer />
    </div>
  ),
});
