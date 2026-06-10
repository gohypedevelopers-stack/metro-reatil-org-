"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { CheckCircle2, ChevronRight, PenTool, Award, ShieldCheck } from 'lucide-react';
import FullServicesSection from '../../../components/home/FullServicesSection';

const SUBCATEGORY_DATA: Record<string, {
  title: string;
  tagline: string;
  heroImage: string;
  desc: string[];
  stats: { label: string; value: string; icon: any }[];
  process: { step: string; desc: string }[];
  gallery: string[];
}> = {
  // DESIGN
  "interior-design": {
    title: "Interior Design",
    tagline: "Crafting Environments that Inspire",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
    desc: [
      "Our interior design service focuses on balancing high-end aesthetics, everyday functionality, and deep brand identity. We do not just decorate spaces; we engineer environments that resonate with your vision and fundamentally enhance the user experience. Whether it is a luxury corporate headquarters, a high-traffic retail boutique, or an exclusive residential villa, our approach is deeply rooted in spatial psychology and modern architectural principles.",
      "Every project begins with a deep dive into the operational needs and cultural aspirations of the client. Our award-winning design team leverages global trends, sustainable materials, and cutting-edge spatial technologies to craft layouts that feel both expansive and intimately purposeful. We specialize in creating custom design narratives where every material, texture, and fixture plays a critical role in telling your story.",
      "From the initial conceptual sketches to the final material handovers, our interior design process is highly collaborative. We provide comprehensive documentation including 2D floor plans, elevation drawings, material schedules, and bespoke furniture designs, ensuring that the transition from imagination to execution is entirely seamless."
    ],
    stats: [
      { label: "Concepts Delivered", value: "450+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Design Awards", value: "15+", icon: ShieldCheck }
    ],
    process: [
      { step: "Initial Consultation", desc: "Understanding your vision, functional requirements, daily operational flows, and core brand identity." },
      { step: "Concept Development", desc: "Creating moodboards, color palettes, and initial layout sketches to establish the aesthetic direction." },
      { step: "Detailed Design", desc: "Finalizing all materials, custom fixtures, lighting specifications, and comprehensive 2D floor plans." },
      { step: "Execution Handoff", desc: "Delivering detailed BOQs, material schedules, and technical drawings directly to the fit-out execution team." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"
    ]
  },
  "3d-visualization": {
    title: "3D Visualization",
    tagline: "Bringing Your Vision to Life Before Construction",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
    desc: [
      "Our advanced 3D visualization and rendering services allow you to step inside your space before a single brick is laid. By utilizing industry-leading rendering engines and physical light simulation, we create hyper-realistic representations of your project. This critical phase removes the guesswork from the design process, enabling precise design decisions and immediate stakeholder approvals.",
      "We build exact digital twins of your architectural plans, meticulously applying real-world textures, accurate lighting scenarios, and lifelike environmental conditions. Whether you need still renders for marketing materials, immersive 360-degree panoramic tours, or dynamic architectural walkthroughs, our 3D artists deliver visuals that are indistinguishable from photography.",
      "Beyond mere aesthetics, 3D visualization serves as a vital problem-solving tool. It allows our engineering and design teams to identify spatial conflicts, optimize natural light penetration, and test multiple material combinations instantly. This proactive approach saves substantial time and capital during the actual construction phase."
    ],
    stats: [
      { label: "Renders Completed", value: "2,000+", icon: Award },
      { label: "Accuracy Rate", value: "99%", icon: CheckCircle2 },
      { label: "Rendering Specialists", value: "12", icon: ShieldCheck }
    ],
    process: [
      { step: "Draft Modeling", desc: "Building the core 3D geometry of the architectural space based strictly on approved 2D CAD layouts." },
      { step: "Material Texturing", desc: "Applying accurate textures representing real-world finishes, factoring in gloss, reflection, and bump mapping." },
      { step: "Lighting Setup", desc: "Simulating accurate natural sunlight paths and placing artificial interior lighting fixtures to match the design." },
      { step: "Final Rendering", desc: "Exporting high-resolution photorealistic images, virtual reality tours, and animated architectural walkthroughs." }
    ],
    gallery: ["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80"]
  },
  "space-planning": {
    title: "Space Planning",
    tagline: "Optimizing Layouts for Flow and Function",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    desc: [
      "Effective space planning is the foundation of any successful interior. We meticulously analyze your volumetric requirements, daily foot traffic, and operational workflows to create layouts that maximize usable area while ensuring ergonomic comfort. A well-planned space naturally guides movement, encourages collaboration, and reduces operational bottlenecks.",
      "Our approach goes far beyond simply arranging furniture. We conduct deep spatial audits, calculating the optimal ratio of open areas to enclosed private zones. For commercial environments, we optimize workstation density and meeting space distribution. For retail, we engineer strategic customer journeys that maximize product exposure and drive sales metrics.",
      "Crucially, our space planning services ensure absolute compliance with all local municipality and civil defense regulations. We factor in fire escape routes, ADA accessibility standards, and HVAC load distribution from day one. The result is a mathematically sound, legally compliant, and highly efficient spatial blueprint."
    ],
    stats: [
      { label: "Sq. Footage Planned", value: "5M+", icon: Award },
      { label: "Efficiency Increase", value: "Up to 30%", icon: CheckCircle2 },
      { label: "Code Compliance", value: "100%", icon: ShieldCheck }
    ],
    process: [
      { step: "Space Auditing", desc: "Measuring the site, evaluating structural limitations, and identifying primary sources of natural light and ventilation." },
      { step: "Zoning Strategies", desc: "Allocating specific zones for public reception, private operations, collaborative work, and utility storage." },
      { step: "Ergonomic Mapping", desc: "Ensuring comfortable circulation paths, ideal desk spacing, and optimal sightlines across the environment." },
      { step: "Code Compliance", desc: "Aligning all spatial layouts with strict civil defense fire codes and local municipality building regulations." }
    ],
    gallery: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80"]
  },
  "moodboards": {
    title: "Moodboards & Concept",
    tagline: "Curating the Visual Language of Your Space",
    heroImage: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80",
    desc: [
      "We help you define the soul of your project through carefully curated moodboards and concept development. This highly collaborative process explores color palettes, material textures, lighting concepts, and furniture styles to align perfectly with your brand identity or personal taste. It is the crucial bridge between abstract ideas and tangible design.",
      "Our designers curate physical and digital concept boards that allow you to see, touch, and feel the proposed environment. We source unique fabric swatches, exotic wood veneers, metal finishes, and stone samples, combining them to establish a cohesive visual language. This tactile experience ensures that all stakeholders share the exact same vision before significant investments are made.",
      "Concept development also extends to FF&E (Furniture, Fixtures, and Equipment) specifications. We develop a curated catalog of bespoke and sourced items that fit the established narrative. By the end of this phase, you will have a comprehensive styling guide that dictates every visual element of the upcoming architectural design."
    ],
    stats: [
      { label: "Concepts Created", value: "800+", icon: Award },
      { label: "Material Libraries", value: "Extensive", icon: CheckCircle2 },
      { label: "Client Satisfaction", value: "100%", icon: ShieldCheck }
    ],
    process: [
      { step: "Brand Alignment", desc: "Extracting core brand values, corporate guidelines, or personal aesthetic preferences to establish a baseline." },
      { step: "Texture Selection", desc: "Gathering physical samples of high-performance fabrics, natural woods, metals, and imported stones." },
      { step: "Color Theory", desc: "Establishing primary, secondary, and accent color palettes based on environmental psychology." },
      { step: "Concept Presentation", desc: "Delivering a unified visual direction via physical boards and digital presentations for stakeholder approval." }
    ],
    gallery: ["https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80"]
  },

  // FIT-OUT
  "joinery-works": {
    title: "Custom Joinery Works",
    tagline: "Precision Woodcraft Manufactured In-House",
    heroImage: "/images/phase_02_prefabrication.png",
    desc: [
      "Our private, state-of-the-art joinery facility enables us to produce highly bespoke, premium wood products without relying on third-party vendors. From complex curved reception desks to intricate acoustic wall paneling and custom commercial cabinetry, our master artisans deliver flawless finishes that elevate the entire interior.",
      "Operating our own manufacturing unit allows us to maintain absolute control over quality, material sourcing, and project timelines. We utilize advanced 5-axis CNC machinery paired with traditional hand-finishing techniques. This hybrid approach allows us to execute highly complex geometric designs with millimeter precision while retaining the warmth of artisan craftsmanship.",
      "We source only premium, sustainable materials, including exotic solid woods, high-density MDF, and rare imported veneers. Our joinery services cover everything from high-end residential kitchen installations to heavy-duty commercial bar counters and bespoke architectural millwork, all rigorously tested for durability before leaving our factory floor."
    ],
    stats: [
      { label: "In-House Facility", value: "20,000 Sq.Ft", icon: Award },
      { label: "Master Craftsmen", value: "100+", icon: CheckCircle2 },
      { label: "Quality Control", value: "Multi-Stage", icon: ShieldCheck }
    ],
    process: [
      { step: "Shop Drawings", desc: "Translating architectural plans into highly precise, millimeter-accurate manufacturing blueprints." },
      { step: "Timber Selection", desc: "Sourcing premium solid woods, commercial-grade MDF, laminates, and imported luxury veneers." },
      { step: "CNC Fabrication", desc: "Using advanced automated machinery for perfect cutting, grooving, and edge-banding." },
      { step: "On-Site Assembly", desc: "Expert, careful installation by our master carpenters ensuring seamless joints and perfect alignments." }
    ],
    gallery: ["/images/phase_02_prefabrication.png", "https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80"]
  },
  "flooring": {
    title: "Premium Flooring Solutions",
    tagline: "Foundations of Elegance and Durability",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
    desc: [
      "We offer comprehensive flooring supply and installation services, engineered to handle everything from luxurious residential spaces to ultra-high-traffic commercial environments. A flawless floor requires more than just beautiful materials; it demands expert sub-floor preparation, precise leveling, and meticulous installation techniques.",
      "Our portfolio of flooring solutions is vast. We specialize in laying large-format porcelain slabs, intricate marble waterjet patterns, solid timber parquet, and engineered wood. For commercial sectors, we install heavy-duty luxury vinyl tiles (LVT), acoustic carpets, epoxy resins, and highly technical raised access flooring systems for server rooms and modern offices.",
      "We stand by the longevity of our installations. Every project involves rigorous moisture testing, the application of premium self-leveling compounds, and the use of specialized industrial adhesives. This ensures that your floors will never warp, crack, or shift, maintaining their pristine architectural integrity for decades."
    ],
    stats: [
      { label: "Area Installed", value: "3M+ Sq.Ft", icon: Award },
      { label: "Material Options", value: "Unlimited", icon: CheckCircle2 },
      { label: "Installation Warranty", value: "Included", icon: ShieldCheck }
    ],
    process: [
      { step: "Sub-Floor Preparation", desc: "Applying self-leveling compounds, damp-proof membranes, and screeding to ensure a perfectly flat base." },
      { step: "Material Acclimation", desc: "Allowing solid timber or temperature-sensitive materials to adjust to local ambient humidity." },
      { step: "Precision Laying", desc: "Expert application of specialized adhesives, seamless grouting, or advanced click-lock floating systems." },
      { step: "Surface Polishing", desc: "Final sealing, mechanical buffing, or protective lacquering for maximum longevity and shine." }
    ],
    gallery: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80"]
  },
  "partition-systems": {
    title: "Partition Systems",
    tagline: "Defining Spaces with Style and Function",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    desc: [
      "We expertly design, engineer, and install a wide spectrum of partition systems to define and optimize your interior volumes. Whether you require seamless, frameless structural glass for an open-concept feel or high-density acoustic drywall for absolute boardroom privacy, we construct sturdy, perfectly finished dividers.",
      "Our glazing capabilities include single and double-glazed aluminum-framed systems, curved glass installations, and smart-glass partitions that switch from transparent to opaque at the touch of a button. For solid walls, we build standard, moisture-resistant, and strictly certified fire-rated gypsum drywall systems tailored to civil defense requirements.",
      "Modern dynamic workspaces often require flexibility. To address this, we also supply and install modular, demountable partition systems. These premium systems allow for rapid spatial reconfiguration as your team grows, without the dust, noise, or downtime associated with traditional civil demolition."
    ],
    stats: [
      { label: "Systems Installed", value: "10,000+", icon: Award },
      { label: "Acoustic Rating", value: "Up to 55dB", icon: CheckCircle2 },
      { label: "Fire Resistance", value: "Certified", icon: ShieldCheck }
    ],
    process: [
      { step: "Track Installation", desc: "Setting the floor and ceiling heavy-duty channels, ensuring they are perfectly plumb and laser-aligned." },
      { step: "Framing & Insulation", desc: "Erecting metal studs and inserting high-density acoustic rockwool or fiberglass insulation." },
      { step: "Boarding & Glazing", desc: "Fixing gypsum boards with precision, or installing heavy double-glazed glass panels securely." },
      { step: "Jointing & Finishing", desc: "Taping, sanding, and preparing the solid surfaces for final decoration and painting." }
    ],
    gallery: ["https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80"]
  },
  "acoustic-solutions": {
    title: "Acoustic Solutions",
    tagline: "Engineering the Perfect Soundscape",
    heroImage: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80",
    desc: [
      "In modern architecture, noise control is critical for focus, comfort, and productivity. Our specialized acoustic engineering team integrates advanced acoustic treatments seamlessly into your design, utilizing high-performance panels, baffles, and structural insulation to absorb, block, or diffuse sound waves effectively.",
      "We address two distinct acoustic challenges: reverberation (echo) within a room, and sound transmission between rooms. To stop echo, we install beautifully designed fabric-wrapped wall panels, suspended acoustic ceiling baffles, and perforated timber slats. To stop transmission, we decouple structural framing and install mass-loaded vinyl and heavy acoustic doors.",
      "Our acoustic solutions are heavily utilized in corporate boardrooms, recording studios, home theaters, and open-plan offices. We conduct extensive pre-installation acoustic audits and post-installation decibel testing to mathematically prove that the target noise reduction coefficients (NRC) have been successfully achieved."
    ],
    stats: [
      { label: "Noise Reduction", value: "Up to 55dB", icon: Award },
      { label: "Design Integration", value: "Seamless", icon: CheckCircle2 },
      { label: "Testing", value: "Pre & Post Install", icon: ShieldCheck }
    ],
    process: [
      { step: "Sound Auditing", desc: "Measuring existing reverberation times and identifying specific structural noise leakage points." },
      { step: "Material Specification", desc: "Selecting NRC-rated wall panels, ceiling baffles, and heavy acoustic perimeter seals." },
      { step: "Structural Isolation", desc: "Decoupling walls and ceilings using resilient channels to prevent structural vibration transfer." },
      { step: "Post-Installation Testing", desc: "Verifying decibel drops and acoustic clarity against the initial engineering targets." }
    ],
    gallery: ["https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&q=80"]
  },

  // SYSTEMS
  "electro-mechanical": {
    title: "Electro-Mechanical (MEP)",
    tagline: "The Invisible Lifeline of Your Space",
    heroImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80",
    desc: [
      "A stunning interior is useless if the infrastructure fails. Our certified in-house MEP engineers provide comprehensive mechanical, electrical, and plumbing services that serve as the invisible lifeline of your space. From high-capacity HVAC ducting and smart load distribution to robust sanitary plumbing, we ensure absolute operational reliability.",
      "Our electrical division handles high-voltage distribution, backup generator integration, IT data cabling, and complex server room setups. The mechanical division engineers advanced climate control systems, fresh air handling units, and industrial exhaust hoods for F&B projects. Our plumbing experts manage everything from luxury bathroom piping to commercial grease traps.",
      "Compliance and safety are our highest priorities. All MEP systems designed and installed by our team undergo rigorous load testing and pressure checks. We manage the entire bureaucratic process, securing approvals and completion certificates directly from local authorities, including DEWA and Civil Defense, guaranteeing a fully legal, safe handover."
    ],
    stats: [
      { label: "Systems Engineered", value: "1,000+", icon: Award },
      { label: "Authority Approvals", value: "100%", icon: CheckCircle2 },
      { label: "Energy Efficiency", value: "Optimized", icon: ShieldCheck }
    ],
    process: [
      { step: "Load Calculations", desc: "Engineering exact power consumption, cooling tonnage, and water capacity requirements." },
      { step: "First Fix Routing", desc: "Laying internal concealed pipes, electrical conduits, and large HVAC galvanized ducting." },
      { step: "Authority Inspections", desc: "Submitting schematics and securing site approvals from DEWA, Civil Defense, and local bodies." },
      { step: "Second Fix & Testing", desc: "Installing fixtures, lighting, switches, and performing final pressure and electrical load tests." }
    ],
    gallery: ["https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80"]
  },
  "lighting-design": {
    title: "Lighting Design",
    tagline: "Sculpting Space with Light",
    heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80",
    desc: [
      "Lighting is a transformative architectural element. Our lighting specialists design and implement highly layered lighting schemes—combining ambient, task, and accent lighting—that dramatically enhance architecture, improve occupant well-being, and perfectly highlight key features or retail products within your environment.",
      "We move beyond basic illumination. By calculating exact Lux levels and utilizing high CRI (Color Rendering Index) LEDs, we ensure that the colors of your furniture, art, and merchandise are displayed with absolute accuracy. We specify concealed cove lighting, magnetic track systems, recessed architectural downlights, and spectacular statement chandeliers.",
      "Energy efficiency and dynamic control are central to our designs. We integrate advanced dimming protocols (like DALI and 0-10V) that allow you to set specific lighting \"scenes\" for different times of the day or specific events, significantly reducing power consumption while creating endless atmospheric possibilities."
    ],
    stats: [
      { label: "Fixtures Installed", value: "100,000+", icon: Award },
      { label: "Energy Savings", value: "Up to 40%", icon: CheckCircle2 },
      { label: "Custom Solutions", value: "Available", icon: ShieldCheck }
    ],
    process: [
      { step: "Lux Calculations", desc: "Determining exact light intensity requirements per specific zone using advanced DIALux software." },
      { step: "Fixture Selection", desc: "Specifying correct LED color temperatures, high CRI ratings, and architectural fixture aesthetics." },
      { step: "Wiring & Transformers", desc: "Setting up safe, concealed, and heavily load-balanced electrical routes and LED drivers." },
      { step: "Scene Commissioning", desc: "Physically focusing track lights and programming intelligent dimming control scenes." }
    ],
    gallery: ["https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80"]
  },
  "wall-covering": {
    title: "Wall Coverings & Finishes",
    tagline: "Textures and Tones that Define Character",
    heroImage: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80",
    desc: [
      "We provide an extensive array of premium wall treatments designed to elevate any interior beyond standard paint. From specialized decorative plasters and seamless microcement to luxury commercial wallpapers and 3D architectural cladding, our master applicators ensure a flawless, highly durable finish every single time.",
      "Our decorative paint services include genuine Venetian plaster, textured stucco, and metallic washes that add deep organic movement to your walls. For commercial and hospitality sectors, we expertly install heavy-duty fabric-backed vinyl wallpapers that resist scuffing while adding rich patterns and tactile warmth to long corridors and suites.",
      "Before any premium finish is applied, our team executes rigorous surface preparation. We perform intensive skim-coating, sanding, and chemical priming to ensure the substrate is perfectly smooth and stable. This meticulous prep work is the secret to preventing peeling, cracking, or bubbling, ensuring the wall finish lasts for years."
    ],
    stats: [
      { label: "Surface Area", value: "5M+ Sq.Ft", icon: Award },
      { label: "Finish Types", value: "50+", icon: CheckCircle2 },
      { label: "Application Quality", value: "Premium", icon: ShieldCheck }
    ],
    process: [
      { step: "Wall Skimming", desc: "Achieving a perfectly smooth, level surface free of all structural bumps or imperfections." },
      { step: "Priming & Sealing", desc: "Applying specialized binding primers to ensure the long-term adhesion of the final finishes." },
      { step: "Application", desc: "Expert, layered troweling of microcement or precise, seamless pattern-matching of luxury wallpaper." },
      { step: "Protective Coating", desc: "Applying heavy-duty matte or gloss sealants to protect against high-traffic wear and moisture." }
    ],
    gallery: ["https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1584515901407-c87d5696c73c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80"]
  },
  "automation": {
    title: "Smart Home & Automation",
    tagline: "Intelligent Control for Modern Living",
    heroImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
    desc: [
      "Bring your space into the future with fully integrated, enterprise-grade automation systems. We design and install centralized intelligent controls for lighting, climate, biometric security, and high-fidelity AV, allowing you to manage your entire environment effortlessly from a single touch-panel or mobile device.",
      "We partner with top-tier automation brands (such as Crestron, Lutron, and Control4) to build robust digital ecosystems. Imagine arriving at your office or villa, and with a single button press, the blinds open, the AC adjusts to your preferred temperature, the lights dim to a specific scene, and your preferred audio playlist begins playing.",
      "Our automation services are designed for absolute reliability. We hardwire the backbone of your system during the first-fix MEP phase, ensuring the network is not reliant on unstable Wi-Fi. The result is a seamless, highly responsive smart environment that enhances security, drastically reduces energy costs, and simplifies your daily life."
    ],
    stats: [
      { label: "Systems Integrated", value: "500+", icon: Award },
      { label: "Technology Partners", value: "Top Tier", icon: CheckCircle2 },
      { label: "User Experience", value: "Intuitive", icon: ShieldCheck }
    ],
    process: [
      { step: "System Architecture", desc: "Designing the centralized network topology, control hub location, and server rack layout." },
      { step: "Low Voltage Cabling", desc: "Running dedicated, shielded data and control wires during the dusty first-fix construction phase." },
      { step: "Hardware Integration", desc: "Connecting smart thermostats, motorized curtain tracks, and heavy-duty smart electrical relays." },
      { step: "Interface Programming", desc: "Customizing glass touch-panels, mobile apps, and programming complex macro automation rules." }
    ],
    gallery: ["https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80"]
  }
};

export default function SubcategoryDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  const data = SUBCATEGORY_DATA[id] || SUBCATEGORY_DATA["interior-design"];

  return (
    <div className="bg-white pt-20">

      {/* HERO — dark banner */}
      <section className="relative h-[55vh] min-h-[380px] flex items-end pb-16 bg-brand-dark overflow-hidden">
        <img
          src={data.heroImage}
          alt={data.title}
          className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale-[40%] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent" />
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full">
          <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-3 flex items-center gap-2">
            <PenTool size={12} /> Specialized Capability
          </span>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white uppercase tracking-tight"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            {data.title}
          </h1>
          <p
            className="text-neutral-300 text-lg md:text-xl font-light italic mt-4 border-l-2 border-brand-gold pl-5 max-w-2xl"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            {data.tagline}
          </p>
        </div>
      </section>

      {/* SPLIT SECTION — image left, content + stats right (matches your reference) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* LEFT: hero image — sticky */}
            <div className="lg:col-span-6 relative aspect-[16/11] overflow-hidden group shadow-2xl lg:sticky lg:top-28">
              <img
                src={data.heroImage}
                alt={data.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
              />
              <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* RIGHT: title, tagline, description, stats */}
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

              {/* Description paragraphs */}
              <div className="space-y-4">
                {data.desc.map((paragraph, idx) => (
                  <p key={idx} className="text-neutral-500 text-base leading-relaxed font-light">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-5 pt-4">
                {data.stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="flex flex-col p-5 bg-neutral-50/70 border border-neutral-100">
                      <div className="text-brand-gold mb-3">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <div className="text-xl font-serif text-brand-dark leading-tight">{stat.value}</div>
                      <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-400 mt-1">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-brand-dark text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors duration-300"
              >
                Request a Consultation <ChevronRight size={14} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* EXECUTION PROCESS */}
      <section className="py-20 md:py-28 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Methodology</span>
            <h2
              className="text-3xl md:text-4xl font-serif text-brand-dark uppercase tracking-tight"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              Our Execution Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.process.map((p, i) => (
              <div key={i} className="relative p-8 border border-neutral-200 bg-white hover:shadow-xl transition-all duration-500 group">
                <div
                  className="absolute top-4 right-5 text-6xl font-serif text-neutral-100 group-hover:text-brand-gold/10 transition-colors select-none"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  {i + 1}
                </div>
                <div className="relative z-10">
                  <h3 className="text-sm font-bold text-brand-dark uppercase tracking-widest mb-3 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-brand-gold shrink-0" />
                    {p.step}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed font-light">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 md:py-28 bg-neutral-900">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="mb-14 md:w-2/3">
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Visuals</span>
            <h2
              className="text-3xl md:text-5xl font-serif text-white uppercase tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              Featured {data.title} Work
            </h2>
            <p className="text-neutral-400 font-light text-base">
              Examine the precision and quality of our completed installations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.gallery.map((img, i) => (
              <div key={i} className="relative aspect-[4/5] overflow-hidden group border border-neutral-800">
                <img
                  src={img}
                  alt={`Project ${i + 1}`}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-5 left-5">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-2 text-[9px] font-bold uppercase tracking-widest text-brand-dark">
                    View Details
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL SERVICES */}
      <FullServicesSection />
    </div>
  );
}
