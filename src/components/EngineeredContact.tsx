import { Button } from '@/components/ui/button';

export const EngineeredContact = () => {
  const handleContact = () => {
    window.location.href = 'mailto:nunorgsantosdesigner@gmail.com?subject=Let\'s Connect';
  };

  return (
    <section className="py-24 px-6 bg-foreground text-background">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-normal mb-4 leading-tight">
          Clarity isn't an accident.
        </h2>
        <p className="text-xl md:text-2xl font-light mb-10 text-background/80">
          Let's make it deliberate.
        </p>
        
        <Button
          onClick={handleContact}
          variant="outline"
          className="border-background text-background hover:bg-background hover:text-foreground px-8 py-3 rounded-full font-medium text-sm transition-all duration-200 hover:translate-x-[1px]"
        >
          Get in Touch
        </Button>
      </div>
    </section>
  );
};
