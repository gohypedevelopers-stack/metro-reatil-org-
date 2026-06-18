import { CheckCircle2, ChevronRight, PenTool, Award, ShieldCheck } from 'lucide-react';

export const SUBCATEGORY_DATA: Record<string, any> = {

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
      "Energy efficiency and dynamic control are central to our designs. We integrate advanced dimming protocols (like DALI and 0-10V) that allow you to set specific lighting 'scenes' for different times of the day or specific events, significantly reducing power consumption while creating endless atmospheric possibilities."
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
  }
,
  "fitout": {
    title: "Fitout",
    tagline: "Premium Fitout Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/retail_cafes_pantry_fitout.webp",
    desc: ["Our expert Fitout services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in Fitout, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for Fitout and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the Fitout with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/retail_cafes_pantry_fitout.webp","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
  "joinery": {
    title: "Joinery",
    tagline: "Premium Joinery Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/design_styles_ultra_luxury_high_end_bespoke_joinery_leather_designs.webp",
    desc: ["Our expert Joinery services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in Joinery, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for Joinery and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the Joinery with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/design_styles_ultra_luxury_high_end_bespoke_joinery_leather_designs.webp","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
  "kitchens-wardrobes": {
    title: "Kitchens & Wardrobes",
    tagline: "Premium Kitchens & Wardrobes Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/kitchen_surfaces.webp",
    desc: ["Our expert Kitchens & Wardrobes services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in Kitchens & Wardrobes, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for Kitchens & Wardrobes and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the Kitchens & Wardrobes with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/kitchen_surfaces.webp","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
  "decorative-paint": {
    title: "Decorative Paints",
    tagline: "Premium Decorative Paints Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/services_decorative_paint_brick_finishes_feature_wall_brick.webp",
    desc: ["Our expert Decorative Paints services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in Decorative Paints, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for Decorative Paints and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the Decorative Paints with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/services_decorative_paint_brick_finishes_feature_wall_brick.webp","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
  "microcement": {
    title: "Microcement",
    tagline: "Premium Microcement Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/microcement-1.jpg",
    desc: ["Our expert Microcement services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in Microcement, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for Microcement and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the Microcement with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/microcement-1.jpg","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
  "terrazzo-floors": {
    title: "Terrazzo Floors",
    tagline: "Premium Terrazzo Floors Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/terrazzo.png",
    desc: ["Our expert Terrazzo Floors services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in Terrazzo Floors, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for Terrazzo Floors and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the Terrazzo Floors with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/terrazzo.png","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
  "landscaping-pools": {
    title: "Landscaping & Pools",
    tagline: "Premium Landscaping & Pools Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/pool_19.webp",
    desc: ["Our expert Landscaping & Pools services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in Landscaping & Pools, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for Landscaping & Pools and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the Landscaping & Pools with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/pool_19.webp","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
  "automation": {
    title: "Automation",
    tagline: "Premium Automation Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/services_automation_dubai_ac_and_climate_control.webp",
    desc: ["Our expert Automation services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in Automation, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for Automation and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the Automation with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/services_automation_dubai_ac_and_climate_control.webp","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
  "stretch-ceiling": {
    title: "Stretch Ceiling",
    tagline: "Premium Stretch Ceiling Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/services_stretch_ceiling_custom_designs.webp",
    desc: ["Our expert Stretch Ceiling services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in Stretch Ceiling, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for Stretch Ceiling and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the Stretch Ceiling with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/services_stretch_ceiling_custom_designs.webp","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
  "halo-shield": {
    title: "Halo Shield",
    tagline: "Premium Halo Shield Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/services_halo_shield_thermal_coating.webp",
    desc: ["Our expert Halo Shield services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in Halo Shield, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for Halo Shield and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the Halo Shield with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/services_halo_shield_thermal_coating.webp","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
  "property-inspection": {
    title: "Property Inspection",
    tagline: "Premium Property Inspection Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/services_property_audits_pre_purchase_inspections.webp",
    desc: ["Our expert Property Inspection services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in Property Inspection, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for Property Inspection and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the Property Inspection with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/services_property_audits_pre_purchase_inspections.webp","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
  "mep-hvac": {
    title: "MEP & HVAC",
    tagline: "Premium MEP & HVAC Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/services_mep_hvac_hvac_installations.webp",
    desc: ["Our expert MEP & HVAC services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in MEP & HVAC, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for MEP & HVAC and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the MEP & HVAC with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/services_mep_hvac_hvac_installations.webp","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
  "project-management": {
    title: "Project Management",
    tagline: "Premium Project Management Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/services_project_management_communication.webp",
    desc: ["Our expert Project Management services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in Project Management, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for Project Management and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the Project Management with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/services_project_management_communication.webp","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
  "venetian-plasters": {
    title: "Venetian Plasters",
    tagline: "Premium Venetian Plasters Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/textured_venetian.webp",
    desc: ["Our expert Venetian Plasters services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in Venetian Plasters, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for Venetian Plasters and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the Venetian Plasters with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/textured_venetian.webp","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
  "feature-walls": {
    title: "Feature Walls",
    tagline: "Premium Feature Walls Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/services_decorative_paint_feature_walls_metallic_feature_walls.webp",
    desc: ["Our expert Feature Walls services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in Feature Walls, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for Feature Walls and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the Feature Walls with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/services_decorative_paint_feature_walls_metallic_feature_walls.webp","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
  "artistic-finishes": {
    title: "Artistic Finishes",
    tagline: "Premium Artistic Finishes Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/artistic_patterns.webp",
    desc: ["Our expert Artistic Finishes services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in Artistic Finishes, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for Artistic Finishes and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the Artistic Finishes with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/artistic_patterns.webp","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
  "custom-furniture": {
    title: "Custom Furniture",
    tagline: "Premium Custom Furniture Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/services_customized_furniture_dubai_ceiling_works_and_lighting.webp",
    desc: ["Our expert Custom Furniture services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in Custom Furniture, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for Custom Furniture and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the Custom Furniture with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/services_customized_furniture_dubai_ceiling_works_and_lighting.webp","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
  "air-quality": {
    title: "Air Quality",
    tagline: "Premium Air Quality Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/services_air_quality_hvac_cleaning_and_maintenance.webp",
    desc: ["Our expert Air Quality services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in Air Quality, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for Air Quality and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the Air Quality with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/services_air_quality_hvac_cleaning_and_maintenance.webp","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
  "contracting": {
    title: "Contracting",
    tagline: "Premium Contracting Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/services_contracting_dubai_structural_engineering_and_design.webp",
    desc: ["Our expert Contracting services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in Contracting, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for Contracting and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the Contracting with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/services_contracting_dubai_structural_engineering_and_design.webp","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
  "window-glazing": {
    title: "Window Glazing",
    tagline: "Premium Window Glazing Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/services_window_glazing_sliding_window_systems.webp",
    desc: ["Our expert Window Glazing services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in Window Glazing, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for Window Glazing and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the Window Glazing with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/services_window_glazing_sliding_window_systems.webp","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
  "tile-installation": {
    title: "Tile Installation",
    tagline: "Premium Tile Installation Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/services_tile_installation_ceramic_tile_installation.webp",
    desc: ["Our expert Tile Installation services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in Tile Installation, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for Tile Installation and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the Tile Installation with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/services_tile_installation_ceramic_tile_installation.webp","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
  "marble-installation": {
    title: "Marble Installation",
    tagline: "Premium Marble Installation Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/services_tile_installation_marble_tile_installation.webp",
    desc: ["Our expert Marble Installation services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in Marble Installation, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for Marble Installation and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the Marble Installation with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/services_tile_installation_marble_tile_installation.webp","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
  "gypsum-works": {
    title: "Gypsum Works",
    tagline: "Premium Gypsum Works Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/gypsum_partitions.webp",
    desc: ["Our expert Gypsum Works services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in Gypsum Works, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for Gypsum Works and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the Gypsum Works with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/gypsum_partitions.webp","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
  "property-audits": {
    title: "Property Audits",
    tagline: "Premium Property Audits Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/services_property_audits_technical_audits.webp",
    desc: ["Our expert Property Audits services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in Property Audits, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for Property Audits and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the Property Audits with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/services_property_audits_technical_audits.webp","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
  "authority-approvals": {
    title: "Authority Approvals",
    tagline: "Premium Authority Approvals Services in Dubai",
    heroImage: "https://halo.ae/images/services_r2/services_authority_approvals_utility_connections.webp",
    desc: ["Our expert Authority Approvals services are designed to transform your spaces with precision and style. We focus on delivering high-end aesthetics, everyday functionality, and unmatched quality. Every project is meticulously planned and executed by our specialized team.","With extensive experience in Authority Approvals, we ensure that all our materials and installations meet the highest industry standards. From residential villas to commercial spaces, we provide tailored solutions that align perfectly with your vision.","We manage the entire process seamlessly from initial concept through to final execution and handover, guaranteeing a flawless result that exceeds expectations."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award },
      { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 },
      { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{"step":"Initial Consultation","desc":"Understanding your specific requirements for Authority Approvals and assessing the space."},{"step":"Design & Planning","desc":"Developing tailored solutions, material selection, and precise technical planning."},{"step":"Execution Phase","desc":"Our expert technicians install and implement the Authority Approvals with meticulous attention to detail."},{"step":"Final Handover","desc":"Comprehensive quality checks and final handover to ensure absolute perfection."}],
    gallery: ["https://halo.ae/images/services_r2/services_authority_approvals_utility_connections.webp","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1560185009-dddecae3c5a8?auto=format&fit=crop&q=80"]
  },
};