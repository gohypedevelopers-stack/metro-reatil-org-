"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'motion/react';
import { PencilRuler, Hammer, Settings, ArrowRight, ChevronRight, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import FullServicesSection from '../../../components/home/FullServicesSection';

const SERVICES_DATA: Record<string, {
  title: string;
  tagline: string;
  heroImage: string;
  desc: string;
  stats: { label: string; value: string; icon: any }[];
  subcategories: {
    title: string;
    desc: string;
    image: string;
    link: string;
  }[];
  gallery: string[];
}> = {
  // ORIGINAL CATEGORIES (From ServicesSlider)
  "bespoke-joinery": {
    title: "Bespoke Joinery & Carpentry",
    tagline: "High-End Woodwork & Custom Millwork Manufactured In-House",
    heroImage: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop",
    desc: "Our private state-of-the-art production facilities allow us to maintain total control over quality, timelines, and costs for all custom wood elements. From luxury corporate bar counters to residential kitchens and bespoke vanity spaces, we bring premium craftsmanship to the GCC region.",
    stats: [
      { label: "Years of Experience", value: "12+ Years", icon: Award },
      { label: "Custom Projects Delivered", value: "340+", icon: CheckCircle2 },
      { label: "Technical Craftsmen", value: "85+", icon: ShieldCheck }
    ],
    subcategories: [
      {
        title: "Bar Counters",
        desc: "Premium, functional custom bars for fine dining and commercial lounges.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
        link: "#gallery"
      },
      {
        title: "Vanities & Cabinetry",
        desc: "Exquisite bathroom vanities and dressing units with marble and timber detailing.",
        image: "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&q=80",
        link: "#gallery"
      },
      {
        title: "Feature Walls",
        desc: "Acoustic wood paneling, decorative grids, and textured veneer feature installations.",
        image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80",
        link: "#gallery"
      },
      {
        title: "Kitchen Cabinets",
        desc: "High-capacity modular and custom luxury kitchen joinery systems.",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80",
        link: "/portfolio/residential/kitchens"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b6979a?auto=format&fit=crop&q=80"
    ]
  },
  "retail-design": {
    title: "Retail Design & Spatial Planning",
    tagline: "Immersive & Brand-Aligned Spatial Layouts",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2062&auto=format&fit=crop",
    desc: "End-to-end execution and design for shopping mall boutiques, standalone street setups, and airport kiosks. We map the ideal path to purchase by pairing optimized visual merchandising with detailed 3D spatial planning.",
    stats: [
      { label: "Boutiques Designed", value: "185+", icon: Award },
      { label: "Design Approvals", value: "100%", icon: CheckCircle2 },
      { label: "Creative Designers", value: "18 Architects", icon: ShieldCheck }
    ],
    subcategories: [
      {
        title: "Mall Stores",
        desc: "Striking storefronts and interior layouts designed to mall specifications.",
        image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80",
        link: "/portfolio/retail"
      },
      {
        title: "High-Street Retail",
        desc: "Standalone setups with grand facades and optimized customer flow.",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
        link: "/portfolio/retail"
      },
      {
        title: "Airport Retail",
        desc: "Highly-secure, lightweight, dynamic fit-outs matching strict aviation guidelines.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80",
        link: "/portfolio/retail"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80"
    ]
  },
  "turnkey-execution": {
    title: "Turnkey Execution & Fit-outs",
    tagline: "Seamless Transition from Shell Core to Handover",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    desc: "We manage every single phase of your space construction in-house: tiling, custom partitions, plastering, decorative plaster, bespoke joinery installation, and painting. Avoid multi-vendor coordination headaches.",
    stats: [
      { label: "Space Completed", value: "2.8M Sq.Ft.", icon: Award },
      { label: "Turnkey Handovers", value: "220+ Stores", icon: CheckCircle2 },
      { label: "On-Time Handover", value: "100%", icon: ShieldCheck }
    ],
    subcategories: [
      {
        title: "Partition Systems",
        desc: "Glass partitions, acoustic boards, drywalls, and security steel panel dividers.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
        link: "#gallery"
      },
      {
        title: "Flooring & Tiling",
        desc: "Large format porcelain, marble floor patterns, premium timber parquet, and vinyl.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
        link: "#gallery"
      },
      {
        title: "Civil Work & Ceilings",
        desc: "Structural civil remediation, decorative false ceilings, and bulkheads.",
        image: "https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80",
        link: "#gallery"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
    ]
  },
  "technical-infrastructure": {
    title: "Technical Infrastructure & MEP",
    tagline: "Rigorous Mechanical, Electrical, and Plumbing Systems",
    heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
    desc: "A beautiful interior requires flawless infrastructure. We deliver certified MEP engineering including custom HVAC ducting, smoke management, structural wiring, backup energy systems, and high-spec lighting design.",
    stats: [
      { label: "HVAC Installed", value: "48,000 TR", icon: Award },
      { label: "Civil Defense Cleared", value: "100%", icon: CheckCircle2 },
      { label: "Safety Audits Passed", value: "Zero Failures", icon: ShieldCheck }
    ],
    subcategories: [
      {
        title: "AC & HVAC Works",
        desc: "Clean ducting, industrial ventilation, heat exhaust hoods, and smart multi-zone climate nodes.",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80",
        link: "#gallery"
      },
      {
        title: "Fire Safety Systems",
        desc: "Certified fire alarms, wet sprinkler layouts, and smoke exhaust fans built to safety codes.",
        image: "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?auto=format&fit=crop&q=80",
        link: "#gallery"
      },
      {
        title: "MEP Engineering",
        desc: "High-load electrical grids, grease trap plumbing, structural server racks, and safety panels.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80",
        link: "#gallery"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?auto=format&fit=crop&q=80"
    ]
  },

  // NEW 12 SUB-SERVICES
  // DESIGN
  "interior-design": {
    title: "Interior Design",
    tagline: "Crafting Environments that Inspire",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
    desc: "Our interior design service focuses on balancing aesthetics, functionality, and brand identity. We create comprehensive concepts for residential, commercial, and retail spaces that resonate with your vision and enhance the user experience.",
    stats: [
      { label: "Concepts Delivered", value: "450+", icon: Award },
      { label: "Design Studios", value: "3", icon: CheckCircle2 },
      { label: "Creative Awards", value: "15+", icon: ShieldCheck }
    ],
    subcategories: [
      { title: "Residential", desc: "Luxurious and comfortable living spaces tailored to your lifestyle.", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80", link: "#gallery" },
      { title: "Commercial", desc: "Optimized office environments for productivity and brand reflection.", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80", link: "#gallery" },
      { title: "Retail", desc: "Engaging storefronts and layouts designed to maximize customer flow.", image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80", link: "#gallery" }
    ],
    gallery: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"]
  },
  "3d-visualization": {
    title: "3D Visualization",
    tagline: "Bringing Your Vision to Life Before Construction",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
    desc: "Our advanced 3D visualization and rendering services allow you to see your space before a single brick is laid. We create photorealistic representations of your project, enabling precise design decisions and stakeholder approvals.",
    stats: [
      { label: "Renders Completed", value: "2000+", icon: Award },
      { label: "Accuracy Rate", value: "99%", icon: CheckCircle2 },
      { label: "Rendering Specialists", value: "12", icon: ShieldCheck }
    ],
    subcategories: [
      { title: "Photorealistic Stills", desc: "High-resolution images of your future space from multiple angles.", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80", link: "#gallery" },
      { title: "Virtual Tours", desc: "Interactive 360-degree walkthroughs for immersive experiences.", image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80", link: "#gallery" },
      { title: "Material Mapping", desc: "Accurate representation of textures, finishes, and lighting.", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80", link: "#gallery" }
    ],
    gallery: ["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80"]
  },
  "space-planning": {
    title: "Space Planning",
    tagline: "Optimizing Layouts for Flow and Function",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    desc: "Effective space planning is the foundation of any successful interior. We meticulously analyze your requirements to create layouts that maximize usable area, ensure ergonomic flow, and meet all regulatory standards.",
    stats: [
      { label: "Square Footage Planned", value: "5M+", icon: Award },
      { label: "Efficiency Increase", value: "Up to 30%", icon: CheckCircle2 },
      { label: "Code Compliance", value: "100%", icon: ShieldCheck }
    ],
    subcategories: [
      { title: "Zoning & Flow", desc: "Strategic placement of departments, workstations, and amenities.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80", link: "#gallery" },
      { title: "Ergonomic Design", desc: "Layouts focused on human comfort, health, and productivity.", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80", link: "#gallery" },
      { title: "Regulatory Compliance", desc: "Ensuring all plans adhere to local building codes and fire safety.", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80", link: "#gallery" }
    ],
    gallery: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80"]
  },
  "moodboards": {
    title: "Moodboards & Concept Development",
    tagline: "Curating the Visual Language of Your Space",
    heroImage: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80",
    desc: "We help you define the soul of your project through carefully curated moodboards. This collaborative process explores color palettes, material textures, lighting concepts, and furniture styles to align perfectly with your brand or personal taste.",
    stats: [
      { label: "Concepts Created", value: "800+", icon: Award },
      { label: "Material Libraries", value: "Extensive", icon: CheckCircle2 },
      { label: "Client Satisfaction", value: "100%", icon: ShieldCheck }
    ],
    subcategories: [
      { title: "Material Selection", desc: "Curated palettes of woods, stones, fabrics, and metals.", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80", link: "#gallery" },
      { title: "Color Theory", desc: "Strategic use of color to evoke emotion and reinforce branding.", image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80", link: "#gallery" },
      { title: "FF&E Specification", desc: "Selecting the perfect furniture, fixtures, and equipment.", image: "https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80", link: "#gallery" }
    ],
    gallery: ["https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80"]
  },

  // FIT-OUT
  "joinery-works": {
    title: "Custom Joinery Works",
    tagline: "Precision Woodcraft Manufactured In-House",
    heroImage: "/images/phase_02_prefabrication.png",
    desc: "Our state-of-the-art joinery facility enables us to produce highly bespoke, premium wood products. From complex reception desks to intricate wall paneling and custom cabinetry, our artisans deliver flawless finishes.",
    stats: [
      { label: "In-House Facility", value: "20,000 Sq.Ft", icon: Award },
      { label: "Master Craftsmen", value: "100+", icon: CheckCircle2 },
      { label: "Quality Control", value: "Multi-stage", icon: ShieldCheck }
    ],
    subcategories: [
      { title: "Bespoke Furniture", desc: "Custom-designed pieces built to exact specifications.", image: "https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80", link: "#gallery" },
      { title: "Architectural Millwork", desc: "High-end doors, frames, skirting, and integrated moldings.", image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80", link: "#gallery" },
      { title: "Commercial Counters", desc: "Durable and stunning reception, bar, and retail counters.", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80", link: "#gallery" }
    ],
    gallery: ["/images/phase_02_prefabrication.png", "https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80"]
  },
  "flooring": {
    title: "Premium Flooring Solutions",
    tagline: "Foundations of Elegance and Durability",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
    desc: "We offer complete flooring supply and installation services, handling everything from luxurious marble and solid timber to high-traffic commercial vinyl and raised access flooring systems. Expertly leveled and flawlessly finished.",
    stats: [
      { label: "Area Installed", value: "3M+ Sq.Ft", icon: Award },
      { label: "Material Options", value: "Unlimited", icon: CheckCircle2 },
      { label: "Installation Warranty", value: "Included", icon: ShieldCheck }
    ],
    subcategories: [
      { title: "Hard Surfaces", desc: "Marble, granite, porcelain, and ceramic tiling.", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80", link: "#gallery" },
      { title: "Timber & Parquet", desc: "Solid wood, engineered timber, and intricate parquet patterns.", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80", link: "#gallery" },
      { title: "Commercial & Resilient", desc: "LVT, carpets, epoxy, and raised access floors.", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80", link: "#gallery" }
    ],
    gallery: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"]
  },
  "partition-systems": {
    title: "Partition Systems",
    tagline: "Defining Spaces with Style and Function",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    desc: "We expertly design and install a wide range of partition systems. Whether you need seamless frameless glass for an open feel or high-acoustic drywall for privacy, we construct sturdy, perfectly finished dividers.",
    stats: [
      { label: "Systems Installed", value: "10,000+", icon: Award },
      { label: "Acoustic Rating", value: "Up to 55dB", icon: CheckCircle2 },
      { label: "Fire Resistance", value: "Certified", icon: ShieldCheck }
    ],
    subcategories: [
      { title: "Glass Partitions", desc: "Frameless, framed, and smart glass solutions.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80", link: "#gallery" },
      { title: "Solid Drywall", desc: "Standard, moisture-resistant, and fire-rated gypsum partitions.", image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80", link: "#gallery" },
      { title: "Demountable Systems", desc: "Flexible, modular partitioning for evolving workspaces.", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80", link: "#gallery" }
    ],
    gallery: ["https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80"]
  },
  "acoustic-solutions": {
    title: "Acoustic Solutions",
    tagline: "Engineering the Perfect Soundscape",
    heroImage: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80",
    desc: "Noise control is critical for comfort and productivity. We integrate advanced acoustic treatments seamlessly into your design, utilizing specialized panels, baffles, and insulation to absorb, block, or diffuse sound effectively.",
    stats: [
      { label: "Noise Reduction", value: "Significant", icon: Award },
      { label: "Design Integration", value: "Seamless", icon: CheckCircle2 },
      { label: "Testing", value: "Pre/Post Install", icon: ShieldCheck }
    ],
    subcategories: [
      { title: "Wall & Ceiling Panels", desc: "Fabric-wrapped and timber-slat acoustic absorbers.", image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80", link: "#gallery" },
      { title: "Acoustic Baffles", desc: "Suspended ceiling elements for large, reverberant spaces.", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80", link: "#gallery" },
      { title: "Soundproofing", desc: "Structural isolation techniques for maximum privacy.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80", link: "#gallery" }
    ],
    gallery: ["https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"]
  },

  // SYSTEMS
  "electro-mechanical": {
    title: "Electro-Mechanical (MEP)",
    tagline: "The Invisible Lifeline of Your Space",
    heroImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80",
    desc: "Our certified engineers provide comprehensive mechanical, electrical, and plumbing services. From high-capacity HVAC ducting and smart load distribution to sanitary plumbing, we ensure your space operates flawlessly behind the walls.",
    stats: [
      { label: "Systems Engineered", value: "1000+", icon: Award },
      { label: "Authority Approvals", value: "100%", icon: CheckCircle2 },
      { label: "Energy Efficiency", value: "Optimized", icon: ShieldCheck }
    ],
    subcategories: [
      { title: "HVAC Systems", desc: "Advanced climate control, ventilation, and exhaust solutions.", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80", link: "#gallery" },
      { title: "Electrical Engineering", desc: "Power distribution, backup systems, and data cabling.", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80", link: "#gallery" },
      { title: "Plumbing & Drainage", desc: "Commercial and residential water supply and waste management.", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80", link: "#gallery" }
    ],
    gallery: ["https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"]
  },
  "lighting-design": {
    title: "Lighting Design",
    tagline: "Sculpting Space with Light",
    heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80",
    desc: "Lighting is transformative. Our specialists design and implement layered lighting schemes—ambient, task, and accent—that enhance architecture, improve well-being, and perfectly highlight your products or features.",
    stats: [
      { label: "Fixtures Installed", value: "100,000+", icon: Award },
      { label: "Energy Savings", value: "Up to 40%", icon: CheckCircle2 },
      { label: "Custom Solutions", value: "Available", icon: ShieldCheck }
    ],
    subcategories: [
      { title: "Architectural Lighting", desc: "Integrated LEDs, cove lighting, and hidden fixtures.", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80", link: "#gallery" },
      { title: "Decorative Fixtures", desc: "Sourcing and installation of statement chandeliers and pendants.", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80", link: "#gallery" },
      { title: "Smart Controls", desc: "Dimmable networks, sensors, and automated scene setting.", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80", link: "#gallery" }
    ],
    gallery: ["https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"]
  },
  "wall-covering": {
    title: "Wall Coverings & Finishes",
    tagline: "Textures and Tones that Define Character",
    heroImage: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80",
    desc: "We provide an extensive array of wall treatments to elevate any interior. From specialized decorative paints and microcement to luxury commercial wallpapers and 3D cladding, our applicators ensure a flawless finish.",
    stats: [
      { label: "Surface Area", value: "5M+ Sq.Ft", icon: Award },
      { label: "Finish Types", value: "50+", icon: CheckCircle2 },
      { label: "Application Quality", value: "Premium", icon: ShieldCheck }
    ],
    subcategories: [
      { title: "Decorative Paints", desc: "Stucco, Venetian plaster, and specialized texture coatings.", image: "https://images.unsplash.com/photo-1584515901407-c87d5696c73c?auto=format&fit=crop&q=80", link: "#gallery" },
      { title: "Luxury Wallpapers", desc: "Precision installation of vinyl, fabric, and bespoke prints.", image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80", link: "#gallery" },
      { title: "Architectural Cladding", desc: "Wood veneers, metal panels, and stone cladding systems.", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80", link: "#gallery" }
    ],
    gallery: ["https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1584515901407-c87d5696c73c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"]
  },
  "automation": {
    title: "Smart Home & Automation",
    tagline: "Intelligent Control for Modern Living",
    heroImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
    desc: "Bring your space into the future with fully integrated automation systems. We design and install centralized controls for lighting, climate, security, and AV, allowing you to manage your environment effortlessly from any device.",
    stats: [
      { label: "Systems Integrated", value: "500+", icon: Award },
      { label: "Technology Partners", value: "Top Tier", icon: CheckCircle2 },
      { label: "User Experience", value: "Intuitive", icon: ShieldCheck }
    ],
    subcategories: [
      { title: "Lighting & Climate", desc: "Automated schedules, sensors, and remote environmental control.", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80", link: "#gallery" },
      { title: "AV Integration", desc: "Multi-room audio, home theaters, and hidden displays.", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80", link: "#gallery" },
      { title: "Security Systems", desc: "Integrated CCTV, smart locks, and access control solutions.", image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80", link: "#gallery" }
    ],
    gallery: ["https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80"]
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  const data = SERVICES_DATA[id] || SERVICES_DATA["bespoke-joinery"];

  return (
    <div className="bg-white pt-20">
      {/* 1. Common Hero Banner */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden flex items-center bg-brand-dark">
        <img
          src={data.heroImage}
          alt={data.title}
          className="absolute inset-0 w-full h-full object-cover opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 via-transparent to-brand-dark/60" />
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 z-10 w-full">
          <div className="max-w-4xl text-left">
            <span className="text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] mb-4 block">Metro Professional Services</span>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 uppercase tracking-tight"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              Our Services
            </h1>
            <p
              className="text-neutral-200 text-base md:text-lg font-light max-w-2xl leading-relaxed"
              style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic' }}
            >
              Exceptional design, in-house joinery manufacturing, turnkey execution, and certified engineering systems.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Second Section: Dynamic Service Content (Split Image & Content) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Specific Service Image */}
            <div className="lg:col-span-6 relative aspect-[16/11] overflow-hidden group shadow-2xl rounded-sm">
              <img
                src={data.heroImage}
                alt={data.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
              />
              <div className="absolute inset-0 bg-brand-dark/15 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Right Column: Specific Service Content */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] block">Active Service</span>
                <h2
                  className="text-4xl md:text-5xl font-serif text-brand-dark uppercase tracking-tight"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  {data.title}
                </h2>
                <p
                  className="text-neutral-400 text-lg md:text-xl font-light italic"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                  {data.tagline}
                </p>
              </div>
              <div className="w-16 h-[2px] bg-brand-gold" />
              <p className="text-neutral-500 text-lg leading-relaxed font-light">
                {data.desc}
              </p>

              {/* Stats / Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                {data.stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="flex flex-col p-5 bg-neutral-50/50 border border-neutral-100 rounded-sm">
                      <div className="text-brand-gold mb-3">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <div className="text-xl font-serif text-brand-dark leading-tight">{stat.value}</div>
                      <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-400 mt-1">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 Specialized Capabilities (Subcategories) */}
      {data.subcategories && data.subcategories.length > 0 && (
        <section className="py-16 md:py-24 bg-neutral-50 border-t border-neutral-100">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Specialized Capabilities</span>
              <h2 className="text-3xl md:text-4xl font-serif text-brand-dark uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                Included in this Service
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {data.subcategories.map((sub, i) => (
                <div key={i} className="group bg-white border border-neutral-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                    <img
                      src={sub.image}
                      alt={sub.title}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-serif text-brand-dark mb-3 uppercase tracking-tight">{sub.title}</h3>
                    <p className="text-neutral-500 text-sm font-light leading-relaxed mb-6 flex-1">{sub.desc}</p>
                    <a href={sub.link} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-gold hover:text-brand-dark transition-colors mt-auto">
                      Explore Projects <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Delivered Project Gallery Section */}
      {/* <section id="gallery" className="py-20 md:py-28 bg-white border-t border-neutral-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-brand-gold text-[9px] font-bold uppercase tracking-[0.5em] mb-4 block">Visuals</span>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-dark uppercase tracking-tight" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                {data.title} Project Gallery
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.gallery.map((img, i) => (
              <div key={i} className="relative group aspect-square overflow-hidden bg-neutral-200 shadow-sm rounded-sm">
                <img
                  src={img}
                  alt={`Delivered project ${i + 1}`}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-brand-dark/10 opacity-100 group-hover:opacity-0 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 4. Complete Range of Services (Looping Section) */}
      <div className="relative border-t border-neutral-100 bg-white">
        <FullServicesSection />
      </div>
    </div>
  );
}
