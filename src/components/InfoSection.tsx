import React, { useEffect, useRef } from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';

export const InfoSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.animate-on-scroll');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-fade-in-up');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="animate-on-scroll">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-8">
                Nuestra Información
              </h2>
            </div>

            <div className="space-y-6">
              <div className="animate-on-scroll flex items-start space-x-4 p-6 bg-secondary/50 rounded-xl hover-lift">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Horarios de Atención</h3>
                  <div className="font-body text-muted-foreground space-y-1">
                    <p>Lunes a Viernes: 9:00 - 19:00</p>
                    <p>Sábados: 9:00 - 17:00</p>
                    <p>Domingos: Cerrado</p>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll flex items-start space-x-4 p-6 bg-secondary/50 rounded-xl hover-lift">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Ubicación</h3>
                  <p className="font-body text-muted-foreground">
                    Av. Santa Fe 3421, Palermo<br />
                    Buenos Aires, Argentina
                  </p>
                </div>
              </div>

              <div className="animate-on-scroll flex items-start space-x-4 p-6 bg-secondary/50 rounded-xl hover-lift">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Teléfono</h3>
                  <a 
                    href="tel:+541149876543" 
                    className="font-body text-primary hover:text-primary/80 transition-colors text-lg font-medium"
                  >
                    (011) 4987-6543
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="animate-on-scroll h-full">
            <div className="bg-secondary/30 rounded-xl overflow-hidden shadow-lg hover-lift h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168905770326!2d-58.40244!3d-34.595899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca99c4b3b7c1%3A0x5c9e0b0c5c9e0b0c!2sAv.%20Santa%20Fe%203421%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Compromiso */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <div className="animate-on-scroll">
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
              Nuestro Compromiso
            </h3>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              En Óptica Villalba nos comprometemos a brindar la mejor atención personalizada, 
              utilizando tecnología de vanguardia y ofreciendo productos de la más alta calidad. 
              Desde 1995, cuidamos tu visión con la precisión y el estilo que mereces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};