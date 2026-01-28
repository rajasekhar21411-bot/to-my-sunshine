import { Header } from "@/components/Header";
import { Timeline } from "@/components/Timeline";
import { FloatingDecorations } from "@/components/FloatingDecorations";

const Index = () => {
  return (
    <div className="min-h-screen gradient-hero relative">
      {/* Floating background decorations */}
      <FloatingDecorations />

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Timeline />
        </main>
        
        {/* Footer */}
        <footer className="py-8 text-center">
          <p className="text-sm text-muted-foreground">
            Made with 🎂 just for you
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
