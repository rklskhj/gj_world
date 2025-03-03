import FloatingShiba from "@/components/FloatingShiba";
import LandingOverlay from "@/components/LandingOverlay";

export default function Home() {
  return (
    <div className="relative w-full">
      <FloatingShiba />
      <LandingOverlay />
    </div>
  );
}
