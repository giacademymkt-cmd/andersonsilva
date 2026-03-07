import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';

// Mock images since we don't have actual client transformation images yet.
// In a real scenario, these would be before/after shots or high-quality gym photos.
const slides = [
    {
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
        title: "Emagrecimento com Saúde",
        subtitle: "-12kg em 4 meses, sem restrições severas."
    },
    {
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
        title: "Hipertrofia Feminina",
        subtitle: "Construção real de massa magra nos membros inferiores."
    },
    {
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
        title: "Definição Abdominal",
        subtitle: "Resultados focados através da periodização inteligente."
    },
    {
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
        title: "Condicionamento Físico",
        subtitle: "Mais disposição e energia para o dia a dia."
    }
];

export function Transformations() {
    const [emblaRef] = useEmblaCarousel(
        { loop: true, align: 'center', skipSnaps: false },
        [Autoplay({ delay: 4000, stopOnInteraction: false })]
    );

    return (
        <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto relative overflow-hidden">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 relative z-10"
            >
                <span className="text-primary-orange text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                    Resultados Reais
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                    A Transformação Que<br />Você Busca Está <span className="text-primary-orange">Aqui.</span>
                </h2>
                <p className="text-text-muted text-base max-w-2xl mx-auto">
                    Não é sobre genética abençoada. É sobre método, consistência e acompanhamento de quem entende do assunto.
                </p>
            </motion.div>

            {/* Carousel */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="overflow-hidden rounded-3xl"
            >
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container flex cursor-grab active:cursor-grabbing">
                        {slides.map((slide, index) => (
                            <div className="embla__slide flex-[0_0_85%] md:flex-[0_0_60%] lg:flex-[0_0_45%] min-w-0 mr-8 relative group" key={index}>
                                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border-subtle bg-surface-card">
                                    {/* Image Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-bg-darkest via-bg-darkest/40 to-transparent z-10 opacity-90 transition-opacity duration-500 group-hover:opacity-70"></div>

                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-cover grayscale mix-blend-luminosity transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Subtle Orange Glow on hover */}
                                    <div className="absolute inset-0 bg-primary-orange/20 mix-blend-overlay opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10"></div>

                                    {/* Text Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-2xl font-bold text-white mb-2">{slide.title}</h3>
                                        <p className="text-sm text-text-muted">{slide.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* CTA Button below carousel */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-16 text-center"
            >
                <a href="#aplicacao" className="inline-block bg-transparent border border-primary-orange text-primary-orange px-8 py-4 rounded-xl font-bold text-sm lg:text-base hover:bg-primary-orange/10 transition-colors">
                    QUERO TER RESULTADOS ASSIM
                </a>
            </motion.div>
        </section>
    );
}
