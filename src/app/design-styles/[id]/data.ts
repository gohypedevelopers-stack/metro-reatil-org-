import { CheckCircle2, Award, ShieldCheck } from 'lucide-react';

export const STYLE_DETAIL_DATA: Record<string, any> = {
  "contemporary": {
    title: "Contemporary Style",
    tagline: "Current forms, clean lines, and balanced sophistication.",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
    desc: [
      "Contemporary design refers to the aesthetics of the present moment. Our approach to contemporary design embraces clean architectural lines, open spaces, and a balanced mix of textures to create environments that feel current yet timeless.",
      "We focus on deliberate use of color, space, and shape to make contemporary spaces feel expansive. Neutral tones form the foundation, with bold accent colors introduced via art, statement lighting, and custom fixtures.",
      "From office headquarters to high-end retail boutiques, contemporary execution demands flawless finishing. We combine custom glass, metal profiles, and warm wood details to create a sophisticated balance."
    ],
    stats: [
      { label: "Completed Projects", value: "180+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Design Awards", value: "8", icon: ShieldCheck }
    ],
    process: [
      { step: "Initial Consultation", desc: "Understanding the spatial goals and specific aesthetic desires." },
      { step: "Material & Texture Selection", desc: "Curating a custom palette of stone, glass, textiles, and wood." },
      { step: "Spatial Layout Design", desc: "Developing layouts that maximize open space and natural flow." },
      { step: "Precision Handover", desc: "Ensuring perfect clean line finishes and high-end styling." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
    ]
  },
  "minimalist": {
    title: "Minimalist Style",
    tagline: "Clarity, restraint, and purposeful spatial flow.",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    desc: [
      "Minimalism is about focusing on the essentials. We design minimalist spaces where every form, surface, and object is purposeful, stripping away excess to create calm, breathable, and highly functional environments.",
      "Our designs leverage natural light, clean joints, and monochromatic color palettes to bring a sense of tranquility. Hidden storage and clean surfaces are key to maintaining the simplicity of the design.",
      "Minimalist execution leaves nowhere to hide flaws. Our master craftsmen ensure that every wall joint, floor transition, and custom cabinetry seam is executed with millimeter precision."
    ],
    stats: [
      { label: "Minimalist Fits", value: "120+", icon: Award },
      { label: "Seamless Execution", value: "99.9%", icon: CheckCircle2 },
      { label: "Material Sourcing", value: "Premium", icon: ShieldCheck }
    ],
    process: [
      { step: "Needs Analysis", desc: "Identifying essential functions to eliminate redundant design elements." },
      { step: "Concealed Detailing", desc: "Designing smart storage solutions to keep surfaces clean and decluttered." },
      { step: "Light Optimization", desc: "Maximizing natural light penetration and selecting soft ambient fixtures." },
      { step: "Quality Verification", desc: "Multi-stage inspections to ensure completely flawless finishes." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80"
    ]
  },
  "neoclassical": {
    title: "Neoclassical Style",
    tagline: "Timeless detailing with modern comfort and proportion.",
    heroImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80",
    desc: [
      "Neoclassical design brings the elegance of classical architecture into the modern era. We balance symmetrical layouts, delicate moldings, and classical columns with contemporary colors and furniture.",
      "We focus on creating spaces that feel grand yet comfortable. Tall ceilings, decorative cornices, and marble accents are paired with sophisticated neutral tones to evoke luxury and history.",
      "Our team excels in executing the intricate plasterwork, paneling, and moldings required for neoclassical designs, delivering rich detailing with absolute structural integrity."
    ],
    stats: [
      { label: "Luxury Portfolios", value: "90+", icon: Award },
      { label: "Artisans on Staff", value: "15+", icon: CheckCircle2 },
      { label: "Bespoke Millwork", value: "Certified", icon: ShieldCheck }
    ],
    process: [
      { step: "Symmetry Mapping", desc: "Establishing clear architectural balance and classical proportions." },
      { step: "Moldings & Detailing", desc: "Designing wall panels, cornices, and columns with premium plaster." },
      { step: "Material Selection", desc: "Sourcing premium marbles, gold leaf trims, and high-end fabrics." },
      { step: "Artisan Installation", desc: "Meticulous on-site carving and alignment of classical features." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&q=80"
    ]
  },
  "mediterranean": {
    title: "Mediterranean Style",
    tagline: "Earthy palettes, natural textures, and relaxed elegance.",
    heroImage: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80",
    desc: [
      "Inspired by the southern European coast, Mediterranean design is warm, organic, and relaxed. We blend textured plaster walls, arched doorways, terracotta accents, and rustic wood to create inviting, sunny spaces.",
      "Our approach focuses on connecting indoor and outdoor environments, emphasizing natural stone, wrought iron, and cozy lounge spaces that evoke seaside luxury.",
      "We specialize in textured wall finishes, custom ironwork, and masonry features that give Mediterranean projects an authentic, handcrafted feel."
    ],
    stats: [
      { label: "Venues Completed", value: "65+", icon: Award },
      { label: "Handcrafted Trims", value: "100%", icon: CheckCircle2 },
      { label: "Texture Specialty", value: "Elite", icon: ShieldCheck }
    ],
    process: [
      { step: "Organic Layout", desc: "Incorporating soft arches, curved transitions, and open-air flow." },
      { step: "Texture Artistry", desc: "Applying textured plaster, limewash, and earthy wash techniques." },
      { step: "Sourcing Natural Stone", desc: "Sourcing premium travertine, slate, and custom terracotta tiles." },
      { step: "Cozy Furnishing", desc: "Installing rustic wooden beams and bespoke wrought iron details." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
    ]
  },
  "japandi": {
    title: "Japandi Style",
    tagline: "Calm minimalism, natural materials, and functional warmth.",
    heroImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80",
    desc: [
      "Japandi is the fusion of Japanese rustic minimalism and Scandinavian functional warmth. We craft spaces that combine the simplicity and organic texture of Wabi-Sabi with Scandi comfort and hygge.",
      "We utilize light oak, bamboo, clay, and woven materials alongside clean, low-profile furniture to cultivate an atmosphere of mindful relaxation.",
      "Our in-house joinery creates custom Japandi slatted wall screens, low-height platforms, and minimalist furniture that fit the design's calm geometry perfectly."
    ],
    stats: [
      { label: "Executed Designs", value: "110+", icon: Award },
      { label: "Custom Joinery Items", value: "400+", icon: CheckCircle2 },
      { label: "Natural Woods Used", value: "100%", icon: ShieldCheck }
    ],
    process: [
      { step: "Zen Design Flow", desc: "Establishing low-profile layouts and clutter-free circulation paths." },
      { step: "Natural Wood Crafting", desc: "Selecting light oak, ash, and bamboo details for walls and screens." },
      { step: "Soft Textile Pairing", desc: "Adding organic linen, cotton, and paper lamps for warm lighting." },
      { step: "Millimeter Fit", desc: "Installing custom screens and paneling with clean hidden joints." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80"
    ]
  },
  "arabian": {
    title: "Arabian Style",
    tagline: "Ornate craftsmanship, layered textiles, and warm jewel tones.",
    heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80",
    desc: [
      "Arabian interior design is rich, luxurious, and highly detailed. We integrate intricate geometric patterns (Mashrabiya), arched openings, and layered textiles to create a grand, culturally rich atmosphere.",
      "We balance traditional elements with modern comfort, utilizing warm lighting, deep color palettes, copper/brass finishes, and plush custom seating (Majlis).",
      "Our in-house carpentry and metal divisions manufacture bespoke geometric screens, decorative plaster ceiling motifs, and ornate lighting fixtures to ensure authentic quality."
    ],
    stats: [
      { label: "Majlis & Hotels", value: "75+", icon: Award },
      { label: "Geometric Patterns", value: "Custom", icon: CheckCircle2 },
      { label: "Handcrafted Finishes", value: "Premium", icon: ShieldCheck }
    ],
    process: [
      { step: "Cultural Mapping", desc: "Structuring traditional spatial layouts and majlis seating zones." },
      { step: "Mashrabiya Design", desc: "Laser cutting custom geometric wood and metal dividing screens." },
      { step: "Deep Tones & Textures", desc: "Sourcing rich velvet, silk, copper, brass, and gold leaf accents." },
      { step: "Detailed Handover", desc: "Integrating soft lighting backdrops behind intricate arches." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
    ]
  },
  "farmhouse": {
    title: "Farmhouse Style",
    tagline: "Natural woods, soft whites, and honest materials.",
    heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80",
    desc: [
      "Modern Farmhouse combines traditional country charm with clean contemporary details. We focus on neutral palettes, warm wood accents, shiplap paneling, and practical, durable fixtures to build cozy, inviting spaces.",
      "We emphasize rustic textures, exposed beams, and matte black steel fixtures to ground the light and airy environment.",
      "We manufacture custom shaker cabinets, distressed wood tables, and paneling in our woodshop, ensuring robust construction for busy commercial or residential spaces."
    ],
    stats: [
      { label: "Cafe & Home Fits", value: "85+", icon: Award },
      { label: "Rustic Woodcrafts", value: "100%", icon: CheckCircle2 },
      { label: "Cabinetry Warranty", value: "Included", icon: ShieldCheck }
    ],
    process: [
      { step: "Cozy Space Layout", desc: "Planning layout focused on central dining tables, kitchens, and gathering spots." },
      { step: "Wood Sourcing", desc: "Sourcing reclaimed woods, distressed oak, and shaker cabinets." },
      { step: "Industrial Accents", desc: "Adding matte black iron, sliding barn doors, and copper details." },
      { step: "Painting & Assembly", desc: "Applying soft warm whites and protective matte coatings." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
    ]
  },
  "industrial": {
    title: "Industrial Style",
    tagline: "Raw textures, structural expression, and urban character.",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
    desc: [
      "Industrial design celebrates raw structural elements. We highlight exposed brick, steel beams, concrete floors, and exposed ductwork to give retail outlets, cafes, and workspaces an edgy, urban personality.",
      "We design layouts that feel open and volumetric, balancing cold metal and concrete structures with warm leather, reclaimed timber, and large industrial windows.",
      "Our MEP team ensures that exposed HVAC ducts, piping, and wiring trays are laid out neatly and safely, serving as clean design elements."
    ],
    stats: [
      { label: "Offices & Outlets", value: "140+", icon: Award },
      { label: "MEP Layouts", value: "Perfect", icon: CheckCircle2 },
      { label: "Metal Fabrications", value: "In-House", icon: ShieldCheck }
    ],
    process: [
      { step: "Structural Audit", desc: "Evaluating concrete, columns, and ceiling beams to expose." },
      { step: "Exposed MEP Design", desc: "Engineering aesthetic routing for HVAC ducts, piping, and conduits." },
      { step: "Raw Texturing", desc: "Installing microcement flooring, brick slips, and dark steel frames." },
      { step: "Cozy Contrast", desc: "Adding warm wood panels and leather furniture to soften the space." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80"
    ]
  },
  "ultra-luxury": {
    title: "Ultra Luxury Style",
    tagline: "Bespoke detailing, premium materials, and statement execution.",
    heroImage: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80",
    desc: [
      "Ultra Luxury is about creating one-of-a-kind statement environments. We select rare marbles, bespoke brass details, exotic veneers, and designer lighting to deliver spaces that are visually stunning and completely custom.",
      "We focus on high-fidelity execution, ensuring that every material seam, backlight, and customized piece of furniture is crafted to perfection.",
      "Our advanced laser metal machines and premium woodshop are fully optimized to handle brass plating, detailed metal trims, and custom high-gloss lacquer finishes."
    ],
    stats: [
      { label: "Villas & Boutiques", value: "50+", icon: Award },
      { label: "Rare Stone Sourced", value: "Imported", icon: CheckCircle2 },
      { label: "Finishing Level", value: "Exquisite", icon: ShieldCheck }
    ],
    process: [
      { step: "Exclusive Sourcing", desc: "Procuring rare marbles, onyx, specialty metals, and luxury fabrics." },
      { step: "Detailed Drafting", desc: "Creating shop drawings with hidden fixings and lighting channels." },
      { step: "Joinery Crafting", desc: "Fabricating high-gloss veneers and brass-inlaid paneling in-house." },
      { step: "White Glove Install", desc: "Careful, secure installation of all high-end components by senior fitters." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&q=80"
    ]
  },
  "boho-chic": {
    title: "Boho Chic Style",
    tagline: "Layered textures, artistic accents, and eclectic personality.",
    heroImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80",
    desc: [
      "Boho Chic is bright, creative, and full of texture. We combine natural fibers (rattan, jute, cotton), light wood finishes, organic plaster, and abundant indoor greenery to create warm, welcoming spaces.",
      "We design relaxed and playful layouts, incorporating cozy corners, textured wall paneling, and unique artistic fixtures.",
      "Our team custom manufactures woven details, curved arches, and organic display units to give commercial venues a unique, instagrammable aesthetic."
    ],
    stats: [
      { label: "Retail & Cafes", value: "70+", icon: Award },
      { label: "Rattan & Jute Items", value: "Bespoke", icon: CheckCircle2 },
      { label: "Greenery Accents", value: "Biophilic", icon: ShieldCheck }
    ],
    process: [
      { step: "Concept Planning", desc: "Designing open, relaxed layouts with arches and niche walls." },
      { step: "Texture Selection", desc: "Curating a mix of linen, rattan, light timbers, and plants." },
      { step: "Custom Features", desc: "Crafting plaster display shelves and organic wooden fixtures." },
      { step: "Styling & Handover", desc: "Assembling textiles, lighting, and biophilic plants." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80"
    ]
  },
  "wellness": {
    title: "Wellness Style",
    tagline: "Biophilic principles, natural materials, and soft palettes.",
    heroImage: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80",
    desc: [
      "Wellness-focused design seeks to improve the health and mental peace of occupants. We leverage biophilic elements (plants, water sounds), natural light, low-VOC materials, and calming soundscapes to construct restorative spaces.",
      "We utilize circular geometries, natural stone, soft colors, and non-toxic materials to lower stress and encourage relaxation in clinics, salons, and offices.",
      "Our MEP engineers integrate advanced air purifiers, thermal controls, and hum-free ventilation systems to ensure absolute physical comfort."
    ],
    stats: [
      { label: "Clinics & Spas", value: "55+", icon: Award },
      { label: "Air Quality Rating", value: "HEPA 99%", icon: CheckCircle2 },
      { label: "VOC Level", value: "Ultra-Low", icon: ShieldCheck }
    ],
    process: [
      { step: "Biophilic Layout", desc: "Structuring spatial flows around light sources, views, and plants." },
      { step: "Material Validation", desc: "Filtering out toxic paints, adhesives, and synthetics." },
      { step: "MEP Integration", desc: "Installing clean HEPA filters, quiet ducting, and water features." },
      { step: "Acoustic Tuning", desc: "Applying dampening panels to eliminate background noise." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&q=80"
    ]
  }
};
