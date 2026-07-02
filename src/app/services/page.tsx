import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import FullServicesSection from "@/components/home/FullServicesSection";

const services = [
  {
    id: "fitout",
    title: "Fitout",
    description: "Fitout delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/retail_cafes_pantry_fitout.webp",
    tags: ["Fitout Execution", "All Sectors"],
    href: "/services/fitout",
  },
  {
    id: "carpentry",
    title: "Carpentry",
    description: "Carpentry delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/design_styles_ultra_luxury_high_end_bespoke_carpentry_leather_designs.webp",
    tags: ["Bespoke Carpentry", "Home"],
    href: "/services/carpentry",
  },
  {
    id: "kitchens",
    title: "Kitchens & Wardrobes",
    description: "Kitchens & Wardrobes delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/kitchen_surfaces.webp",
    tags: ["Kitchen Wardrobe", "Home"],
    href: "/services/kitchens",
  },
  {
    id: "decorative-paints",
    title: "Decorative Paints",
    description: "Decorative Paints delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/services_decorative_paint_brick_finishes_feature_wall_brick.webp",
    tags: ["Decorative Finishes", "All Sectors"],
    href: "/services/decorative-paints",
  },
  {
    id: "microcement",
    title: "Microcement",
    description: "Microcement delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/microcement-1.jpg",
    tags: ["Microcement Finishes", "All Sectors"],
    href: "/services/microcement",
  },
  {
    id: "terrazzo",
    title: "Terrazzo Floors",
    description: "Terrazzo Floors delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/terrazzo.png",
    tags: ["Terrazzo Craft", "All Sectors"],
    href: "/services/terrazzo",
  },
  {
    id: "landscaping",
    title: "Landscaping & Pools",
    description: "Landscaping & Pools delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/pool_19.webp",
    tags: ["Landscape Pools", "Home"],
    href: "/services/landscaping",
  },
  {
    id: "automation",
    title: "Automation",
    description: "Automation delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/services_automation_dubai_ac_and_climate_control.webp",
    tags: ["Smart Automation", "Home"],
    href: "/services/automation",
  },
  {
    id: "stretch-ceiling",
    title: "Stretch Ceiling",
    description: "Stretch Ceiling delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/services_stretch_ceiling_custom_designs.webp",
    tags: ["Ceiling Systems", "Commercial"],
    href: "/services/stretch-ceiling",
  },
  {
    id: "halo-shield",
    title: "Halo Shield",
    description: "Halo Shield delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/services_halo_shield_thermal_coating.webp",
    tags: ["Thermal Protection", "All Sectors"],
    href: "/services/halo-shield",
  },
  {
    id: "property-inspection",
    title: "Property Inspection",
    description: "Property Inspection delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/services_property_audits_pre_purchase_inspections.webp",
    tags: ["Property Inspection", "All Sectors"],
    href: "/services/property-inspection",
  },
  {
    id: "mep-hvac",
    title: "MEP & HVAC",
    description: "MEP & HVAC delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/services_mep_hvac_hvac_installations.webp",
    tags: ["MEP Systems", "Commercial"],
    href: "/services/mep-hvac",
  },
  {
    id: "project-management",
    title: "Project Management",
    description: "Project Management delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/services_project_management_communication.webp",
    tags: ["Project Management", "All Sectors"],
    href: "/services/project-management",
  },
  {
    id: "venetian-plasters",
    title: "Venetian Plasters",
    description: "Venetian Plasters delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/textured_venetian.webp",
    tags: ["Venetian Plaster", "Home"],
    href: "/services/venetian-plasters",
  },
  {
    id: "feature-walls",
    title: "Feature Walls",
    description: "Feature Walls delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/services_decorative_paint_feature_walls_metallic_feature_walls.webp",
    tags: ["Feature Walls", "Retail"],
    href: "/services/feature-walls",
  },
  {
    id: "artistic-finishes",
    title: "Artistic Finishes",
    description: "Artistic Finishes delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/artistic_patterns.webp",
    tags: ["Artistic Finishes", "Home"],
    href: "/services/artistic-finishes",
  },
  {
    id: "custom-furniture",
    title: "Custom Furniture",
    description: "Custom Furniture delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/services_customized_furniture_dubai_ceiling_works_and_lighting.webp",
    tags: ["Custom Furniture", "Home"],
    href: "/services/custom-furniture",
  },
  {
    id: "air-quality",
    title: "Air Quality",
    description: "Air Quality delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/services_air_quality_hvac_cleaning_and_maintenance.webp",
    tags: ["Air Quality Systems", "Offices"],
    href: "/services/air-quality",
  },
  {
    id: "contracting",
    title: "Contracting",
    description: "Contracting delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/services_contracting_dubai_structural_engineering_and_design.webp",
    tags: ["General Contracting", "All Sectors"],
    href: "/services/contracting",
  },
  {
    id: "window-glazing",
    title: "Window Glazing",
    description: "Window Glazing delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/services_window_glazing_sliding_window_systems.webp",
    tags: ["Window Glazing", "Commercial"],
    href: "/services/window-glazing",
  },
  {
    id: "tile-installation",
    title: "Tile Installation",
    description: "Tile Installation delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/services_tile_installation_ceramic_tile_installation.webp",
    tags: ["Tile Installation", "All Sectors"],
    href: "/services/tile-installation",
  },
  {
    id: "marble-installation",
    title: "Marble Installation",
    description: "Marble Installation delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/services_tile_installation_marble_tile_installation.webp",
    tags: ["Marble Works", "All Sectors"],
    href: "/services/marble-installation",
  },
  {
    id: "gypsum-works",
    title: "Gypsum Works",
    description: "Gypsum Works delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/gypsum_partitions.webp",
    tags: ["Gypsum Works", "All Sectors"],
    href: "/services/gypsum-works",
  },
  {
    id: "property-audits",
    title: "Property Audits",
    description: "Property Audits delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/services_property_audits_technical_audits.webp",
    tags: ["Property Audits", "All Sectors"],
    href: "/services/property-audits",
  },
  {
    id: "authority-approvals",
    title: "Authority Approvals",
    description: "Authority Approvals delivered with precise execution and authority-ready planning.",
    image: "https://halo.ae/images/services_r2/services_authority_approvals_utility_connections.webp",
    tags: ["Authority Approvals", "Commercial"],
    href: "/services/authority-approvals",
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://halo.ae/images/LUXURY-MANSION1-copy.jpg"
            alt="Hero Background"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl text-white">
            <h1 className="mobile-heading-balance text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight uppercase" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              Complete Fitout <br /> <span className="text-brand-gold italic block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>& Interior Transformation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl leading-relaxed">
              Book a free consultation and let our experts assess your project requirements. We'll provide a comprehensive proposal with transparent timelines and pricing for your transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 max-w-[1800px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            
            {/* Image Section (Left) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative h-[400px] md:h-[550px] lg:h-[650px] w-full shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                <Image
                  src="https://halo.ae/images/LUXURY-MANSION1-copy.jpg"
                  alt="Fitout Services Dubai"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text Section (Right) */}
            <div className="lg:col-span-5 order-1 lg:order-2 lg:pr-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark uppercase tracking-tight mb-3" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                Complete Turnkey Fitout
              </h2>
              <div className="text-neutral-400 italic text-xl sm:text-2xl mb-8 font-light" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>
                & Interior Transformation
              </div>

              <div className="w-12 h-[2px] bg-brand-gold mb-8"></div>

              <p className="text-neutral-500 leading-[1.8] text-base md:text-lg font-light mb-8 max-w-lg">
                Halo Interiors offers a comprehensive suite of services designed to cover every stage of property improvement — from initial inspection to the final coat of paint. Browse our full range of services for residential, commercial, and F&B spaces.
              </p>
            </div>
            
          </div>
        </div>
      </section>



      {/* Services Grid Section */}
      <section className="py-24 bg-neutral-950 text-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
              Services We <br /> <span className="text-brand-gold italic block mt-2 text-2xl sm:text-4xl md:text-5xl font-normal" style={{ fontFamily: 'var(--font-playfair), serif', textTransform: 'none' }}>Offer</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 auto-rows-[400px]">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group relative overflow-hidden block rounded-none"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute bottom-4 right-4 bg-[#1a1a1a] text-white px-5 py-3 flex items-center gap-2 transition-all duration-300">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">{service.title}</span>
                  <ChevronRight size={14} className="text-white opacity-80 group-hover:translate-x-1 group-hover:text-brand-gold transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Complete Range of Services */}
      <FullServicesSection forceCarousel={true} />
    </div>
  );
}
