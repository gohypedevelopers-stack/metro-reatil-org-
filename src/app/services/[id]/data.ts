import { CheckCircle2, ChevronRight, PenTool, Award, ShieldCheck } from 'lucide-react';

export const SUBCATEGORY_DATA: Record<string, any> = {

  "interior-design": {
    title: "Interior Design",
    tagline: "Metro Retail specializes in office & mall fitouts.",
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
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80"
    ]
  },
  "3d-visualization": {
    title: "3D Visualization",
    tagline: "Premium retail showrooms & office fitouts by Metro.",
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
    tagline: "Metro Retail: Expert office and retail fitout works.",
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
    tagline: "Delivering premium retail showrooms & office fitouts.",
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
  "carpentry-works": {
    title: "Custom Carpentry Works",
    tagline: "Metro Retail specializes in office & showroom fitouts.",
    heroImage: "/images/phase_02_prefabrication.png",
    desc: [
      "Our private, state-of-the-art carpentry facility enables us to produce highly bespoke, premium wood products without relying on third-party vendors. From complex curved reception desks to intricate acoustic wall paneling and custom commercial cabinetry, our master artisans deliver flawless finishes that elevate the entire interior.",
      "Operating our own manufacturing unit allows us to maintain absolute control over quality, material sourcing, and project timelines. We utilize advanced 5-axis CNC machinery paired with traditional hand-finishing techniques. This hybrid approach allows us to execute highly complex geometric designs with millimeter precision while retaining the warmth of artisan craftsmanship.",
      "We source only premium, sustainable materials, including exotic solid woods, high-density MDF, and rare imported veneers. Our carpentry services cover everything from high-end residential kitchen installations to heavy-duty commercial bar counters and bespoke architectural millwork, all rigorously tested for durability before leaving our factory floor."
    ],
    stats: [
      { label: "In-House Facility", value: "9,000 Sq.Ft", icon: Award },
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
    tagline: "Expert office fitouts & retail showrooms by Metro.",
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
    gallery: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80"]
  },
  "partition-systems": {
    title: "Partition Systems",
    tagline: "Metro Retail builds premium office & mall fitouts.",
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
    tagline: "Expert retail fitout works for showrooms and malls.",
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
    gallery: ["https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&q=80"]
  },
  "electro-mechanical": {
    title: "Electro-Mechanical (MEP)",
    tagline: "Metro Retail delivers office and showroom fitouts.",
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
    tagline: "Metro Retail creates premium offices and showrooms.",
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
    tagline: "Expert retail and office fitouts by Metro Retail!",
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
    title: "Ready to Complete Your Fitout Project?",
    tagline: "Metro Retail specializes in office & mall fitouts.",
    heroImage: "/images/intro-image.png",
    desc: ["Book a free fitout consultation and let our experts transform your space. We'll provide a detailed proposal with turnkey solutions and transparent pricing for complete fitout execution.", "At Metro Retail Interiors, fitout is more than construction — it is a seamless orchestration of engineering, craftsmanship, and design execution. Our certified teams deliver end-to-end fitout with unmatched precision, from demolition to final finishing. We manage every element — structural works, MEP, joinery, flooring, ceilings, glazing, and decorative finishes — ensuring consistency, quality, and perfect alignment with the design intent.", "Precision structural modifications to reconfigure layouts for residential and commercial spaces."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Ready to Complete Your Fitout Project? and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Ready to Complete Your Fitout Project? with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        img: "/images/fitout_dubai_r2/structural.webp",
        title: "Structural Modifications",
        description: "Precision structural modifications to reconfigure layouts for residential and commercial spaces.",
        tags: [
          "LoadBearingWalls",
          "SlabOpenings",
          "ColumnWrapping"
        ],
        bullets: [
          "Structural modification contractor",
          "Load bearing wall removal villa",
          "Luxury apartment structural alteration"
        ],
        buttonText: "STRUCTURAL MODIFICATIONS →"
      },
      {
        img: "/images/fitout_dubai_r2/lighting.webp",
        title: "Ceiling works and lighting",
        description: "Complete ceiling solutions with integrated lighting for refined interiors.",
        tags: [
          "FalseCeilings",
          "CofferedCeilings",
          "LEDIntegration"
        ],
        bullets: [
          "False ceiling installation",
          "Luxury coffered ceiling design villa",
          "LED ceiling light integration contractor"
        ],
        buttonText: "CEILING WORKS AND LIGHTING →"
      },
      {
        img: "/images/fitout_dubai_r2/hvac.webp",
        title: "Full MEP and HVAC",
        description: "Full MEP and HVAC coordination by DEWA certified engineers for peak performance.",
        tags: [
          "Ductwork",
          "ChillerSystems",
          "FireSafety"
        ],
        bullets: [
          "MEP contractor fitout",
          "HVAC ductwork installation villa",
          "DEWA certified MEP engineer"
        ],
        buttonText: "FULL MEP AND HVAC →"
      },
      {
        img: "/images/fitout_dubai_r2/drainage.webp",
        title: "Plumbing Drainage",
        description: "Professional plumbing and drainage installation to meet all authority standards.",
        tags: [
          "CopperPiping",
          "PPRPiping",
          "DrainageSystems"
        ],
        bullets: [
          "Plumbing contractor fitout",
          "Luxury bathroom plumbing installation",
          "Drainage system upgrade villa"
        ],
        buttonText: "PLUMBING DRAINAGE →"
      },
      {
        img: "/images/fitout_dubai_r2/electrical.webp",
        title: "Electrical rewiring",
        description: "Complete electrical rewiring and DB upgrades by DEWA certified engineers.",
        tags: [
          "DBUpgrades",
          "CircuitInstallation",
          "DEWACompliance"
        ],
        bullets: [
          "Electrical rewiring contractor",
          "DEWA approved electrical upgrade villa",
          "Distribution board upgrade apartment"
        ],
        buttonText: "ELECTRICAL REWIRING →"
      },
      {
        img: "/images/fitout_dubai_r2/smarthome.webp",
        title: "Smart home integration",
        description: "Modern smart home systems for automated lighting, security, and climate control.",
        tags: [
          "LightingAutomation",
          "SecuritySystems",
          "AVSystems"
        ],
        bullets: [
          "Smart home automation",
          "Luxury home automation system villa",
          "KNX smart lighting installation"
        ],
        buttonText: "SMART HOME INTEGRATION →"
      }
    ]
  },
  "carpentry": {
    title: "Bespoke In-House Joinery",
    tagline: "Premium retail showrooms & office fitouts by Metro.",
    heroImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200",
    desc: ["Book a free joinery consultation and let our craftsmen assess your requirements. We'll provide detailed designs and transparent pricing for your custom joinery project", "Introducing the Metro Retail SIGNATURE range of Luxury Wardrobes, Kitchens, Cabinets, Vanities and Wall Panels", "Custom bar counters and vanity units crafted for function and style."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Bespoke In-House Joinery and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Bespoke In-House Joinery with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        slug: "bar-counters-vanities",
        img: "/images/joinery_r2/HALO-bar-counter.webp",
        title: "Bar counters & vanities",
        description: "Custom bar counters and vanity units crafted for function and style.",
        tags: ["Bar Counters", "Vanities", "Home Bar"],
        bullets: ["Bar furniture India", "Home bar cabinet India", "Bar counter table India"],
        buttonText: "BAR COUNTERS & VANITIES →"
      },
      {
        slug: "feature-walls",
        img: "/images/joinery_r2/feature-walls-2.png",
        title: "Feature walls",
        description: "Bespoke feature wall joinery that adds depth and character.",
        tags: ["Slatted Walls", "Accent Walls", "Textured Panels"],
        bullets: ["Feature wall ideas for bedroom India", "Tile feature wall design India", "Vertical garden wall India", "Interior feature wall contractor India"],
        buttonText: "FEATURE WALLS →"
      },
      {
        slug: "kitchens",
        img: "/images/joinery_r2/Kitchen11-1.jpg",
        title: "Kitchens",
        description: "Tailor-made kitchens with smart storage and premium finishes.",
        tags: ["Modular Kitchens", "Luxury Kitchens", "Custom Cabinets"],
        bullets: ["Modern kitchen cabinet manufacturer in India", "Luxury modular kitchen design India", "Best kitchen cabinets company India"],
        buttonText: "KITCHENS →"
      },
      {
        slug: "office-furniture",
        img: "/images/joinery_r2/services_joinery_office_furniture_executing_desks.webp",
        title: "Office furniture",
        description: "Custom office furniture designed for productivity and durability.",
        tags: ["Desks", "Workstations", "Ergonomic Furniture"],
        bullets: ["Modern ergonomic office chair India", "Height adjustable standing desk India", "Office furniture supplier Abu Dhabi", "Modular office workstations India"],
        buttonText: "OFFICE FURNITURE →"
      },
      {
        slug: "reception-desks",
        img: "/images/joinery_r2/reception-desk-4.webp",
        title: "Reception desks",
        description: "Custom reception desks built to elevate first impressions.",
        tags: ["Modern Reception", "Marble Counters", "Custom Desks"],
        bullets: ["Custom made modern reception desk India", "Wooden contemporary reception desk India", "Italian marble finish reception counter India", "Modern reception counter supplier Abu Dhabi"],
        buttonText: "RECEPTION DESKS →"
      },
      {
        slug: "residential-furniture",
        img: "/images/joinery_r2/HALO-residential-furniture.webp",
        title: "Residential furniture",
        description: "Made-to-measure residential furniture for elegant everyday living.",
        tags: ["Sofas", "Dining Tables", "Bedroom Furniture"],
        bullets: ["Luxury bespoke residential furniture India", "Custom made sofas dining tables India", "Handcrafted bespoke wardrobes beds India India"],
        buttonText: "RESIDENTIAL FURNITURE →"
      },
      {
        slug: "tv-units",
        img: "/images/joinery_r2/tv-units-3.webp",
        title: "Tv-units",
        description: "Custom TV units with integrated storage and clean detailing.",
        tags: ["Media Consoles", "Floating TV Units", "Entertainment Units"],
        bullets: ["Modern minimalist TV unit buy online India", "TV unit with cable management India", "Minimalist modern TV unit apartment living room India", "Compact TV unit for small living room India"],
        buttonText: "TV UNITS →"
      },
      {
        slug: "wall-panels",
        img: "/images/joinery_r2/HALO-wall-panels.webp",
        title: "Wall panels",
        description: "Decorative wall panels crafted to enhance interiors with texture.",
        tags: ["Acoustic Panels", "Decorative Panels", "3D Wall Panels"],
        bullets: ["V-Groove engraved acoustic wall panels office India", "PVC waterproof wall panels India", "3D decorative wall panels for living room India", "Fluted wall panels India supplier"],
        buttonText: "WALL PANELS →"
      },
      {
        slug: "wardrobes",
        img: "/images/joinery_r2/services_joinery_wardrobes_walkin_wardrobes.webp",
        title: "Wardrobes",
        description: "Walk-in wardrobes, built-in closets, and dressing rooms tailored to your storage needs.",
        tags: ["Walk In Wardrobes", "Built In Closets", "Dressing Rooms"],
        bullets: ["Modern bedroom wardrobe cabinet India", "Kids room wardrobe custom made India", "Affordable sliding door wardrobe", "Walk-in wardrobe system IKEA"],
        buttonText: "WARDROBES →"
      },
      {
        slug: "wood-ceilings",
        img: "/images/joinery_r2/wood-ceilings-5.webp",
        title: "Wood ceilings",
        description: "Precision wood ceiling systems for warmth and visual impact.",
        tags: ["Coffered Ceilings", "Slatted Ceilings", "Carved Ceilings"],
        bullets: ["Luxury carved wood ceiling design villa India", "Traditional and contemporary wooden ceiling India", "Arabic style wooden ceiling design India", "Modern wooden ceiling design for office India"],
        buttonText: "WOOD CEILINGS →"
      }
    ]
  },
  "kitchens-wardrobes": {
    title: "Ready to Build Your Kitchens & Wardrobes?",
    tagline: "Metro Retail: Expert office and retail fitout works.",
    heroImage: "https://images.unsplash.com/photo-1672137233327-37b0c1049e77?auto=format&fit=crop&q=80&w=1200",
    desc: ["Book a free joinery consultation and let our craftsmen design custom kitchens and wardrobes. We'll provide a detailed proposal with in-house manufacturing and transparent pricing.", "From elegant European-style wardrobes to modern functional kitchens, Metro Retail Interiors combines custom joinery, intelligent space planning, and high-quality materials to create beautiful, durable, and fully integrated storage and cooking solutions.", "Bespoke kitchen cabinets designed and manufactured in our Al Quoz joinery facility with premium materials."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Ready to Build Your Kitchens & Wardrobes? and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Ready to Build Your Kitchens & Wardrobes? with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        img: "https://images.unsplash.com/photo-1610733374054-59454fe657cd?auto=format&fit=crop&q=80&w=800",
        title: "CUSTOM CABINETRY",
        description: "Bespoke custom cabinetry designed for maximum storage and visual appeal.",
        tags: ["Kitchens", "Cabinetry"]
      },
      {
        img: "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?auto=format&fit=crop&q=80&w=800",
        title: "BUILT-IN APPLIANCES",
        description: "Seamlessly integrated built-in appliances for a sleek, modern kitchen finish.",
        tags: ["Kitchens", "Appliances"]
      },
      {
        img: "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?auto=format&fit=crop&q=80&w=800",
        title: "QUARTZ, GRANITE & MARBLE COUNTERTOPS",
        description: "High-quality stone countertops providing durability and elegant aesthetics.",
        tags: ["Kitchens", "Countertops"]
      },
      {
        img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
        title: "BACKSPLASH INSTALLATION",
        description: "Expert backsplash installation that protects walls while enhancing the kitchen design.",
        tags: ["Kitchens", "Backsplash"]
      },
      {
        img: "https://images.unsplash.com/photo-1600422086908-72be2c8f5f3f?auto=format&fit=crop&q=80&w=800",
        title: "SOFT-CLOSING HARDWARE",
        description: "Premium soft-closing hardware for smooth, quiet, and reliable cabinet operation.",
        tags: ["Kitchens", "Hardware"]
      },
      {
        img: "https://images.unsplash.com/photo-1772567732993-3c546ee1a52c?auto=format&fit=crop&q=80&w=800",
        title: "INTEGRATED LIGHTING",
        description: "Beautiful integrated lighting solutions for better visibility and a warm ambiance.",
        tags: ["Kitchens", "Lighting"]
      },
      {
        img: "https://images.unsplash.com/photo-1617228069096-4638a7ffc906?auto=format&fit=crop&q=80&w=800",
        title: "ISLAND AND BREAKFAST COUNTERS",
        description: "Spacious kitchen islands and breakfast counters for dining, cooking, and socializing.",
        tags: ["Kitchens", "Islands"]
      },
      {
        img: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=800",
        title: "PLUMBING & ELECTRICAL",
        description: "Safe and reliable plumbing and electrical services for a fully functional kitchen.",
        tags: ["Kitchens", "Services"]
      }
    ]
  },
  "decorative-paint": {
    title: "Ready To Transform Your Walls With Premium Decorative Finishes",
    tagline: "Delivering premium retail showrooms & office fitouts.",
    heroImage: "/images/decorative_paint/finishes/marmorino.png",
    desc: ["Book a free consultation and let our decorative specialists assess your space. We'll provide expert recommendations and transparent pricing for your decorative finishing project.", "Transform your walls into works of art with Metro Retail's high-end decorative finishes — texture paints, Venetian plasters, microcement, metallic finishes, stone effects, and more.", "Executed by trained artisans, our finishes bring depth, warmth, and luxury to any space."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Ready To Transform Your Walls With Premium Decorative Finishes and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Ready To Transform Your Walls With Premium Decorative Finishes with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        slug: "texture-paints",
        img: "/images/decorative_paint_r2/services_decorative_paint_texture_paints_stucco_finishes.webp",
        title: "Texture Paints",
        description: "Luxury textured finishes with depth, movement, and visual character for premium interiors.",
        tags: [
          "SandTexture",
          "StuccoFinish",
          "KnockdownTexture"
        ],
        bullets: [
          "Texture paint application",
          "Luxury sand texture wall finish villa",
          "Stucco wall finish contractor India"
        ],
        buttonText: "TEXTURE PAINTS →"
      },
      {
        slug: "venetian-plasters",
        img: "/images/decorative_paint_r2/textured_venetian.webp",
        title: "Venetian Plasters",
        description: "Smooth polished plaster finishes that bring timeless Italian elegance to any space.",
        tags: [
          "MarmoPlaster",
          "PolishedPlaster",
          "TadelaktFinish"
        ],
        bullets: [
          "Venetian plaster wall finish",
          "Italian polished plaster villa",
          "Luxury tadelakt finish contractor India"
        ],
        buttonText: "VENETIAN PLASTERS →"
      },
      {
        slug: "feature-walls-paint",
        img: "/images/decorative_paint_r2/services_decorative_paint_lime_wash_feature_wall_lime_wash.webp",
        title: "Feature Walls",
        description: "Statement feature walls designed to anchor and elevate residential and commercial interiors.",
        tags: [
          "AccentWall",
          "StatementWall",
          "FocalPoint"
        ],
        bullets: [
          "Decorative feature wall",
          "Luxury accent wall design villa",
          "Statement feature wall contractor India"
        ],
        buttonText: "FEATURE WALLS →"
      },
      {
        slug: "limewash",
        img: "/images/decorative_paint_r2/colored_lime_wash.webp",
        title: "Limewash",
        description: "Soft matte limewash finishes with natural tone variation and warmth for organic aesthetics.",
        tags: [
          "LimewashPaint",
          "MatteLime",
          "NaturalFinish"
        ],
        bullets: [
          "Limewash wall paint",
          "Matte limewash finish villa",
          "Natural limewash application contractor India"
        ],
        buttonText: "LIMEWASH →"
      },
      {
        slug: "brick-finish",
        img: "/images/decorative_paint_r2/services_decorative_paint_brick_finishes_colored_brick.webp",
        title: "Brick Finish",
        description: "Decorative brick-effect finishes that add raw texture and urban charm to interiors.",
        tags: [
          "ExposedBrick",
          "FauxBrick",
          "IndustrialFinish"
        ],
        bullets: [
          "Decorative brick wall finish",
          "Faux brick effect wall villa",
          "Exposed brick finish contractor India"
        ],
        buttonText: "BRICK FINISH →"
      },
      {
        slug: "stencil-painting",
        img: "/images/decorative_paint_r2/custom_stencils.webp",
        title: "Stencil Painting",
        description: "Custom stencil patterns for artistic walls with precise repeat detailing and visual impact.",
        tags: [
          "GeometricStencil",
          "MoroccanPattern",
          "DamaskStencil"
        ],
        bullets: [
          "Custom stencil painting",
          "Moroccan pattern wall stencil villa",
          "Decorative stencil painter contractor India"
        ],
        buttonText: "STENCIL PAINTING →"
      },
      {
        slug: "pearl-finish",
        img: "/images/decorative_paint_r2/soft_pearl.webp",
        title: "Pearl Finish",
        description: "Subtle pearl sheen that creates elegant light play and sophistication on walls.",
        tags: ["Pearl Sheen", "Iridescent Finish", "Shimmer Coat"],
        bullets: ["Pearl finish wall paint India", "Iridescent wall coating villa", "Luxury pearl sheen paint contractor India"],
        buttonText: "PEARL FINISH →"
      },
      {
        slug: "artistic-finishes",
        img: "/images/decorative_paint_r2/artistic_patterns.webp",
        title: "Artistic Finishes",
        description: "Bespoke decorative finishes crafted by artisan painters for unique premium interiors.",
        tags: ["Hand Painted", "Faux Finish", "Artisan Craft"],
        bullets: ["Artistic wall finish India", "Hand painted decorative wall villa", "Bespoke faux finish contractor India"],
        buttonText: "ARTISTIC FINISHES →"
      },
      {
        slug: "microcement-flooring-services",
        img: "https://images.unsplash.com/photo-1612404730960-5c71577fca11?auto=format&fit=crop&q=80&w=800",
        title: "Microcement Flooring Services",
        description: "Seamless microcement flooring for premium aesthetics.",
        tags: ["Microcement", "Flooring", "Seamless"],
        bullets: ["Seamless application", "Durable finish", "Modern aesthetics"],
        buttonText: "MICROCEMENT FLOORING →"
      }
    ]
  },
  "microcement": {
    title: "Ready to Apply Microcement?",
    tagline: "Metro Retail specializes in office & showroom fitouts.",
    heroImage: "/images/H-Living10.jpg",
    desc: ["Book a free microcement consultation and let our specialists create seamless surfaces. We'll provide a detailed proposal with modern finishes and transparent pricing for microcement applications.", "At Metro Retail, we provide one of the India's most extensive and advanced ranges of decorative microcement and seamless surface coatings. Our applications are;", "We Have 50 Specialist Applicators50 Specialist Applicators10 Years Experience100 Shades and FinishesEU Standard Protocols"],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Ready to Apply Microcement? and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Ready to Apply Microcement? with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        img: "/images/H-Living10.jpg",
        title: "",
        description: "",
        tags: [],
        bullets: [],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "/images/decorative_paint/commercial/corporate_spaces_2.jpg",
        title: "",
        description: "",
        tags: [],
        bullets: [],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "/images/decorative_paint/commercial/corporate_spaces_1.png",
        title: "",
        description: "",
        tags: [],
        bullets: [],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "/images/microcement_dubai_r2/microcement_office_001.webp",
        title: "",
        description: "",
        tags: [],
        bullets: [],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "/images/microcement_dubai_r2/microcement_office_002.webp",
        title: "",
        description: "",
        tags: [],
        bullets: [],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "/images/microcement_dubai_r2/microcement_office_003.webp",
        title: "",
        description: "",
        tags: [],
        bullets: [],
        buttonText: "VIEW DETAILS →"
      }
    ]
  },
  "terrazzo": {
    title: "Ready to Install Terrazzo?",
    tagline: "Expert office fitouts & retail showrooms by Metro.",
    heroImage: "/images/terrazzo_dubai_r2/showroom.webp",
    desc: ["Book a free terrazzo consultation and let our craftsmen create timeless floors. We'll provide a detailed proposal with custom patterns and transparent pricing for terrazzo installations.", "We create durable, decorative terrazzo floors with stunning aggregates, colours, and finishes. Perfect for luxury homes, restaurants, and retail spaces. Our terrazzo installations combine timeless elegance with modern durability.", "Choose from our range of terrazzo options to create stunning floors, countertops, and feature walls that match your design vision."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Ready to Install Terrazzo? and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Ready to Install Terrazzo? with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        img: "/images/terrazzo_dubai_r2/bedroom.webp",
        title: "Terrazzo Floors",
        description: "Terrazzo Floors tailored for reliable and high-quality terrazzo floors execution.",
        tags: [
          "TerrazzoFlooring",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "TERRAZZO FLOORS →"
      },
      {
        img: "/images/terrazzo_dubai_r2/terazzo-counters.jpg",
        title: "Terrazzo Counters",
        description: "Terrazzo Counters tailored for reliable and high-quality terrazzo floors execution.",
        tags: [
          "TerrazzoCountertops",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "TERRAZZO COUNTERS →"
      },
      {
        img: "/images/terrazzo_dubai_r2/showroom.webp",
        title: "Custom Aggregates",
        description: "Custom Aggregates tailored for reliable and high-quality terrazzo floors execution.",
        tags: [
          "AggregateDesign",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "CUSTOM AGGREGATES →"
      },
      {
        img: "/images/terrazzo_dubai_r2/retail.webp",
        title: "Color Options",
        description: "Color Options tailored for reliable and high-quality terrazzo floors execution.",
        tags: [
          "ColorCustomization",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "COLOR OPTIONS →"
      },
      {
        img: "/images/terrazzo_dubai_r2/showroom.webp",
        title: "Polished Finishes",
        description: "Polished Finishes tailored for reliable and high-quality terrazzo floors execution.",
        tags: [
          "PolishedSurfaces",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "POLISHED FINISHES →"
      },
      {
        img: "/images/terrazzo_dubai_r2/office-1.webp",
        title: "Commercial Applications",
        description: "Commercial Applications tailored for reliable and high-quality terrazzo floors execution.",
        tags: [
          "CommercialFitout",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "COMMERCIAL APPLICATIONS →"
      }
    ]
  },
  "landscaping-pools": {
    title: "Ready to Create Your Landscape & Pool?",
    tagline: "Metro Retail builds premium office & mall fitouts.",
    heroImage: "/images/landscaping_pools_dubai_r2/ALP1_HALO.webp",
    desc: ["Book a free landscaping consultation and let our experts design outdoor paradises. We'll provide a detailed proposal with pools, gardens, and transparent pricing for outdoor living.", "From outdoor seating areas to custom pools, pergolas, and lush greenery, Metro Retail designs and builds outdoor spaces for modern living in . Transform your outdoor areas into beautiful, functional extensions of your home.", "Custom Pools tailored for reliable and high-quality landscaping & pools execution."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Ready to Create Your Landscape & Pool? and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Ready to Create Your Landscape & Pool? with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        img: "/images/landscaping_pools_dubai_r2/pool_06.webp",
        title: "Custom Pools",
        description: "Custom Pools tailored for reliable and high-quality landscaping \\u0026 pools execution.",
        tags: [
          "PoolDesign",
          "Home"
        ],
        bullets: [],
        buttonText: "CUSTOM POOLS →"
      },
      {
        img: "/images/landscaping_pools_dubai_r2/pool_05.webp",
        title: "Outdoor Seating Areas",
        description: "Outdoor Seating Areas tailored for reliable and high-quality landscaping \\u0026 pools execution.",
        tags: [
          "OutdoorLiving",
          "Home"
        ],
        bullets: [],
        buttonText: "OUTDOOR SEATING AREAS →"
      },
      {
        img: "/images/landscaping_pools_dubai_r2/pool_13.webp",
        title: "Garden Design",
        description: "Garden Design tailored for reliable and high-quality landscaping \\u0026 pools execution.",
        tags: [
          "LandscapeDesign",
          "Home"
        ],
        bullets: [],
        buttonText: "GARDEN DESIGN →"
      },
      {
        img: "/images/landscaping_pools_dubai_r2/pool_04.webp",
        title: "Outdoor Kitchens",
        description: "Outdoor Kitchens tailored for reliable and high-quality landscaping \\u0026 pools execution.",
        tags: [
          "OutdoorKitchens",
          "Home"
        ],
        bullets: [],
        buttonText: "OUTDOOR KITCHENS →"
      }
    ]
  },
  "automation": {
    title: "Ready to Automate Your Smart Home?",
    tagline: "Expert retail fitout works for showrooms and malls.",
    heroImage: "/images/automation_dubai_r2/lighting_control.webp",
    desc: ["Book a free automation consultation and let our experts design your smart systems. We'll provide a detailed proposal with integrated solutions and transparent pricing for home automation.", "Smart home automation for lighting, AC, speakers, curtains, and security — integrated neatly into your fitout. Control your entire home with ease and convenience through advanced automation systems.", "Lighting Control tailored for reliable and high-quality home automation execution."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Ready to Automate Your Smart Home? and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Ready to Automate Your Smart Home? with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        img: "/images/automation_dubai_r2/lighting_control.webp",
        title: "Lighting Control",
        description: "Lighting Control tailored for reliable and high-quality home automation execution.",
        tags: [
          "LightingControl",
          "Home"
        ],
        bullets: [],
        buttonText: "LIGHTING CONTROL →"
      },
      {
        img: "/images/automation_dubai_r2/security_system.webp",
        title: "Security Systems",
        description: "Security Systems tailored for reliable and high-quality home automation execution.",
        tags: [
          "SecurityAutomation",
          "Retail"
        ],
        bullets: [],
        buttonText: "SECURITY SYSTEMS →"
      },
      {
        img: "/images/automation_dubai_r2/smart_integration.webp",
        title: "Smart Integration",
        description: "Smart Integration tailored for reliable and high-quality home automation execution.",
        tags: [
          "SmartIntegration",
          "Offices"
        ],
        bullets: [],
        buttonText: "SMART INTEGRATION →"
      }
    ]
  },
  "stretch-ceiling": {
    title: "Ready to Install Stretch Ceilings?",
    tagline: "Metro Retail delivers office and showroom fitouts.",
    heroImage: "/images/stretch_ceiling_dubai_r2/streitch_ceiling_1.jpg",
    desc: ["Book a free stretch ceiling consultation and let our specialists create modern overhead solutions. We'll provide a detailed proposal with innovative designs and transparent pricing.", "Stylish, modern, and perfect for feature ceilings, backlit effects, and moisture resistance. Stretch ceilings offer a sleek, seamless finish that transforms any space with elegance and functionality.", "Feature Ceilings tailored for reliable and high-quality stretch ceiling execution."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Ready to Install Stretch Ceilings? and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Ready to Install Stretch Ceilings? with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        slug: "feature-ceilings",
        img: "https://images.unsplash.com/photo-1582203423341-64b918240e25?auto=format&fit=crop&q=80&w=800",
        title: "Feature Ceilings",
        description: "Feature Ceilings tailored for reliable and high-quality stretch ceiling execution.",
        tags: ["Ceiling Design", "Acoustics", "Interiors"],
        bullets: ["Seamless finish", "Quick installation", "Lightweight material"],
        buttonText: "FEATURE CEILINGS →"
      },
      {
        slug: "backlit-effects",
        img: "https://images.unsplash.com/photo-1718011584347-02301c9c5431?auto=format&fit=crop&q=80&w=800",
        title: "Backlit Effects",
        description: "Backlit Effects tailored for reliable and high-quality stretch ceiling execution.",
        tags: ["Lighting", "Ambiance", "Interiors"],
        bullets: ["Uniform illumination", "Energy efficient", "Customizable brightness"],
        buttonText: "BACKLIT EFFECTS →"
      },
      {
        slug: "moisture-resistance",
        img: "https://images.unsplash.com/photo-1637847522219-ef24dd4445fe?auto=format&fit=crop&q=80&w=800",
        title: "Moisture Resistance",
        description: "Moisture Resistance tailored for reliable and high-quality stretch ceiling execution.",
        tags: ["Wet Areas", "Bathrooms", "Pools"],
        bullets: ["Waterproof", "Prevents condensation", "Mold resistant"],
        buttonText: "MOISTURE RESISTANCE →"
      },
      {
        slug: "custom-designs",
        img: "https://images.unsplash.com/photo-1711107796112-e5b4fe9aa075?auto=format&fit=crop&q=80&w=800",
        title: "Custom Designs",
        description: "Custom Designs tailored for reliable and high-quality stretch ceiling execution.",
        tags: ["Printed Ceilings", "3D Shapes", "Interiors"],
        bullets: ["Custom graphics", "Unique shapes", "Endless possibilities"],
        buttonText: "CUSTOM DESIGNS →"
      },
      {
        slug: "quick-installation",
        img: "https://images.unsplash.com/photo-1482731215275-a1f151646268?auto=format&fit=crop&q=80&w=800",
        title: "Quick Installation",
        description: "Quick Installation tailored for reliable and high-quality stretch ceiling execution.",
        tags: ["Efficiency", "Clean Process", "Interiors"],
        bullets: ["No debris", "Fast process", "Minimal disruption"],
        buttonText: "QUICK INSTALLATION →"
      },
      {
        slug: "easy-maintenance",
        img: "https://images.unsplash.com/photo-1482731215275-a1f151646268?auto=format&fit=crop&q=80&w=800",
        title: "Easy Maintenance",
        description: "Easy Maintenance tailored for reliable and high-quality stretch ceiling execution.",
        tags: ["Durability", "Cleaning", "Interiors"],
        bullets: ["Washable surface", "Dust repellent", "Long-lasting finish"],
        buttonText: "EASY MAINTENANCE →"
      }
    ]
  },
  "property-inspection": {
    title: "Expert Property Inspection Services in India",
    tagline: "Metro Retail creates premium offices and showrooms.",
    heroImage: "https://images.unsplash.com/photo-1523705480679-b5d0cc17a656?auto=format&fit=crop&q=80&w=1200",
    desc: ["Certified property inspection engineers", "Find hidden property issues before you buy, accept handover, or move in. Our certified inspectors deliver detailed photo-backed snagging reports.", "We identify structural, MEP, HVAC, finishing, waterproofing, and safety issues before you take possession, ensuring you avoid costly surprises."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for property inspection and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions and precise technical planning for the inspection." }, { "step": "Execution Phase", "desc": "Our expert technicians conduct a thorough inspection with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive snagging report delivery and final handover to ensure absolute transparency." }],
    gallery: [
      {
        img: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800",
        title: "Professional Inspection",
        description: "On-site professional property inspection for handover and resale checks.",
        tags: [
          "PropertyInspection",
          "VillaInspection",
          "OfficeInspectionIndia"
        ],
        bullets: [
          "Professional villa inspection",
          "Office property inspection India",
          "Bedroom and living room inspection"
        ],
        buttonText: "PROFESSIONAL INSPECTION →"
      },
      {
        img: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800",
        title: "Detailed Assessment",
        description: "Detailed visual and technical assessment to identify defects before move-in.",
        tags: [
          "Snagging",
          "ApartmentInspection",
          "BedroomInspection"
        ],
        bullets: [
          "Apartment detailed assessment",
          "Bedroom defect assessment India",
          "Pre-handover villa inspection"
        ],
        buttonText: "DETAILED ASSESSMENT →"
      },
      {
        img: "https://images.unsplash.com/photo-1621511075938-f03482369feb?auto=format&fit=crop&q=80&w=800",
        title: "Technical Testing",
        description: "Detailed MEP and HVAC systems inspection for compliance and performance verification.",
        tags: [
          "DuctInspection",
          "PlumbingAudit",
          "ElectricalTesting"
        ],
        bullets: [
          "MEP inspection service",
          "HVAC performance testing villa",
          "Plumbing pressure test contractor India"
        ],
        buttonText: "TECHNICAL TESTING →"
      },
      {
        img: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?auto=format&fit=crop&q=80&w=800",
        title: "AI-Powered Detection",
        description: "AI-assisted detection workflow for faster and more accurate defect discovery.",
        tags: [
          "AIDetection",
          "VillaInspection",
          "ApartmentInspection"
        ],
        bullets: [
          "AI villa defect detection",
          "Smart apartment inspection India",
          "Technology-driven office snagging"
        ],
        buttonText: "AI-POWERED DETECTION →"
      },
      {
        img: "https://images.unsplash.com/photo-1523705480679-b5d0cc17a656?auto=format&fit=crop&q=80&w=800",
        title: "Quality Inspection",
        description: "Quality-focused inspection process aligned with practical handover standards.",
        tags: [
          "QualityInspection",
          "KitchenInspection",
          "BathroomInspectionIndia"
        ],
        bullets: [
          "Kitchen and bathroom inspection",
          "Villa quality audit India",
          "Handover quality check for apartments"
        ],
        buttonText: "QUALITY INSPECTION →"
      },
      {
        img: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?auto=format&fit=crop&q=80&w=800",
        title: "Expert Analysis",
        description: "Expert-led analysis with actionable recommendations for property owners and buyers.",
        tags: [
          "ExpertInspection",
          "PenthouseInspection",
          "TownhouseInspectionIndia"
        ],
        bullets: [
          "Expert villa inspection analysis",
          "Office and retail inspection experts India",
          "Property risk assessment for penthouses"
        ],
        buttonText: "EXPERT ANALYSIS →"
      }
    ]
  },
  "mep-hvac": {
    title: "Ready to Install MEP & HVAC?",
    tagline: "Expert retail and office fitouts by Metro Retail!",
    heroImage: "/images/mep_hvac_dubai_r2/electrical.webp",
    desc: ["Book a free MEP consultation and let our DEWA-certified engineers design your systems. We'll provide a detailed proposal with technical solutions and transparent pricing for MEP works.", "Certified mechanical, electrical, plumbing, and air conditioning works — from rewiring to full MEP installations. Our certified engineers ensure all systems meet Municipality and DEWA standards.", "Electrical Works tailored for reliable and high-quality mep & hvac execution."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Ready to Install MEP & HVAC? and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Ready to Install MEP & HVAC? with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        img: "/images/mep_hvac_dubai_r2/electrical.webp",
        title: "Electrical Works",
        description: "Electrical Works tailored for reliable and high-quality mep \\u0026 hvac execution.",
        tags: [
          "ElectricalSystems",
          "Commercial"
        ],
        bullets: [],
        buttonText: "ELECTRICAL WORKS →"
      },
      {
        img: "/images/mep_hvac_dubai_r2/plumbing_systems.jpg",
        title: "Plumbing Systems",
        description: "Plumbing Systems tailored for reliable and high-quality mep \\u0026 hvac execution.",
        tags: [
          "PlumbingSystems",
          "Commercial"
        ],
        bullets: [],
        buttonText: "PLUMBING SYSTEMS →"
      },
      {
        img: "/images/mep_hvac_dubai_r2/services_mep_hvac_hvac_installations.webp",
        title: "HVAC Installation",
        description: "HVAC Installation tailored for reliable and high-quality mep \\u0026 hvac execution.",
        tags: [
          "HVACInstallation",
          "Commercial"
        ],
        bullets: [],
        buttonText: "HVAC INSTALLATION →"
      },
      {
        img: "/images/mep_hvac_dubai_r2/services_mep_hvac_mechanical_systems.webp",
        title: "Mechanical Systems",
        description: "Mechanical Systems tailored for reliable and high-quality mep \\u0026 hvac execution.",
        tags: [
          "MechanicalSystems",
          "Commercial"
        ],
        bullets: [],
        buttonText: "MECHANICAL SYSTEMS →"
      },
      {
        img: "/images/mep_hvac_dubai_r2/system_upgrades.jpg",
        title: "System Upgrades",
        description: "System Upgrades tailored for reliable and high-quality mep \\u0026 hvac execution.",
        tags: [
          "MEPUpgrades",
          "Commercial"
        ],
        bullets: [],
        buttonText: "SYSTEM UPGRADES →"
      }
    ]
  },
  "project-management": {
    title: "Ready to Manage Your Project?",
    tagline: "Metro Retail specializes in office & mall fitouts.",
    heroImage: "/images/project_management_dubai_r2/services_project_management_timeline_management.webp",
    desc: ["Book a free project management consultation and let our experts coordinate your renovation. We'll provide a detailed proposal with timelines, milestones, and transparent pricing.", "Dedicated project managers oversee quality, timelines, subcontractors, inspections, and coordination. Ensure your project runs smoothly from start to finish with our professional project management services.", "Timeline Management tailored for reliable and high-quality project management execution."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Ready to Manage Your Project? and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Ready to Manage Your Project? with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        img: "/images/project_management_dubai_r2/services_project_management_timeline_management.webp",
        title: "Timeline Management",
        description: "Timeline Management tailored for reliable and high-quality project management execution.",
        tags: [
          "ScheduleControl",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "TIMELINE MANAGEMENT →"
      },
      {
        img: "/images/project_management_dubai_r2/services_project_management_quality_control.webp",
        title: "Quality Control",
        description: "Quality Control tailored for reliable and high-quality project management execution.",
        tags: [
          "QualityControl",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "QUALITY CONTROL →"
      },
      {
        img: "/images/project_management_dubai_r2/services_project_management_subcontractor_coordination.webp",
        title: "Subcontractor Coordination",
        description: "Subcontractor Coordination tailored for reliable and high-quality project management execution.",
        tags: [
          "SubcontractorCoordination",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "SUBCONTRACTOR COORDINATION →"
      },
      {
        img: "/images/project_management_dubai_r2/services_project_management_regular_inspections.webp",
        title: "Regular Inspections",
        description: "Regular Inspections tailored for reliable and high-quality project management execution.",
        tags: [
          "SiteInspections",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "REGULAR INSPECTIONS →"
      },
      {
        img: "/images/project_management_dubai_r2/services_project_management_communication.webp",
        title: "Communication",
        description: "Communication tailored for reliable and high-quality project management execution.",
        tags: [
          "StakeholderCommunication",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "COMMUNICATION →"
      },
      {
        img: "/images/project_management_dubai_r2/services_project_management_budget_management.webp",
        title: "Budget Management",
        description: "Budget Management tailored for reliable and high-quality project management execution.",
        tags: [
          "CostControl",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "BUDGET MANAGEMENT →"
      }
    ]
  },
  "venetian-plasters": {
    title: "Ready to Apply Venetian Plasters?",
    tagline: "Premium retail showrooms & office fitouts by Metro.",
    heroImage: "/images/decorative_paint_venetian_plasters_r2/polished_plaster.jpg",
    desc: ["Book a free Venetian plaster consultation and let our artisans create luxury finishes. We'll provide a detailed proposal with premium techniques and transparent pricing for elegant walls.", "Metro Retail's artisans apply authentic Venetian plasters including polished plaster, Marmorino, Travertino, and satin & matte finishes using traditional Italian-style application techniques for luxurious wall finishes.", "Polished Plaster tailored for reliable and high-quality venetian plasters execution."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Ready to Apply Venetian Plasters? and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Ready to Apply Venetian Plasters? with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        img: "/images/decorative_paint_venetian_plasters_r2/polished_plaster.jpg",
        title: "Polished Plaster",
        description: "Polished Plaster tailored for reliable and high-quality venetian plasters execution.",
        tags: [
          "DecorativeFinishes",
          "Home"
        ],
        bullets: [],
        buttonText: "POLISHED PLASTER →"
      },
      {
        img: "/images/decorative_paint_venetian_plasters_r2/marmorino.jpg",
        title: "Marmorino",
        description: "Marmorino tailored for reliable and high-quality venetian plasters execution.",
        tags: [
          "VenetianPlaster",
          "Home"
        ],
        bullets: [],
        buttonText: "MARMORINO →"
      },
      {
        img: "/images/decorative_paint_venetian_plasters_r2/travertino.jpg",
        title: "Travertino",
        description: "Travertino tailored for reliable and high-quality venetian plasters execution.",
        tags: [
          "VenetianPlaster",
          "Home"
        ],
        bullets: [],
        buttonText: "TRAVERTINO →"
      },
      {
        img: "/images/decorative_paint_venetian_plasters_r2/satin_finish.jpg",
        title: "Satin Finish",
        description: "Satin Finish tailored for reliable and high-quality venetian plasters execution.",
        tags: [
          "VenetianPlaster",
          "Home"
        ],
        bullets: [],
        buttonText: "SATIN FINISH →"
      },
      {
        img: "/images/decorative_paint_venetian_plasters_r2/matt_venetian_plaster.jpg",
        title: "Matte Finish",
        description: "Matte Finish tailored for reliable and high-quality venetian plasters execution.",
        tags: [
          "VenetianPlaster",
          "Home"
        ],
        bullets: [],
        buttonText: "MATTE FINISH →"
      },
      {
        img: "/images/decorative_paint_venetian_plasters_r2/textured_venetian.webp",
        title: "Textured Venetian",
        description: "Textured Venetian tailored for reliable and high-quality venetian plasters execution.",
        tags: [
          "VenetianPlaster",
          "Home"
        ],
        bullets: [],
        buttonText: "TEXTURED VENETIAN →"
      }
    ]
  },
  "feature-walls": {
    title: "Create Feature Walls",
    tagline: "Metro Retail: Expert office and retail fitout works.",
    heroImage: "/images/decorative_paint_feature_walls_r2/concrete_textures.jpg",
    desc: ["Book a free feature wall consultation and let our experts design stunning focal points. We'll provide a detailed proposal with creative solutions and transparent pricing for your walls.", "Create stunning focal points with Metro Retail's custom feature walls. From artistic textures to bold accent walls and statement finishes, we design and execute feature walls that transform your space.", "Textured Feature Walls tailored for reliable and high-quality feature walls execution."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Create Feature Walls and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Create Feature Walls with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        img: "/images/decorative_paint_feature_walls_r2/concrete_textures.jpg",
        title: "Textured Feature Walls",
        description: "Textured Feature Walls tailored for reliable and high-quality feature walls execution.",
        tags: [
          "DecorativeFinishes",
          "Retail"
        ],
        bullets: [],
        buttonText: "TEXTURED FEATURE WALLS →"
      },
      {
        img: "/images/decorative_paint_feature_walls_r2/geometric_walls.jpg",
        title: "Geometric Patterns",
        description: "Geometric Patterns tailored for reliable and high-quality feature walls execution.",
        tags: [
          "FeatureWalls",
          "Retail"
        ],
        bullets: [],
        buttonText: "GEOMETRIC PATTERNS →"
      },
      {
        img: "/images/decorative_paint_feature_walls_r2/metallic_textures.jpg",
        title: "Metallic Feature Walls",
        description: "Metallic Feature Walls tailored for reliable and high-quality feature walls execution.",
        tags: [
          "DecorativeFinishes",
          "Retail"
        ],
        bullets: [],
        buttonText: "METALLIC FEATURE WALLS →"
      },
      {
        img: "/images/decorative_paint_feature_walls_r2/feature-walls-2.png",
        title: "Wood Effect Walls",
        description: "Wood Effect Walls tailored for reliable and high-quality feature walls execution.",
        tags: [
          "BespokeJoinery",
          "Retail"
        ],
        bullets: [],
        buttonText: "WOOD EFFECT WALLS →"
      },
      {
        img: "/images/decorative_paint_feature_walls_r2/stone_effect_walls.jpg",
        title: "Stone Effect Walls",
        description: "Stone Effect Walls tailored for reliable and high-quality feature walls execution.",
        tags: [
          "MarbleWorks",
          "Retail"
        ],
        bullets: [],
        buttonText: "STONE EFFECT WALLS →"
      },
      {
        img: "/images/decorative_paint_feature_walls_r2/artistic_murals.jpg",
        title: "Artistic Murals",
        description: "Artistic Murals tailored for reliable and high-quality feature walls execution.",
        tags: [
          "DecorativeFinishes",
          "Retail"
        ],
        bullets: [],
        buttonText: "ARTISTIC MURALS →"
      }
    ]
  },
  "artistic-finishes": {
    title: "Ready to Apply Artistic Finishes?",
    tagline: "Delivering premium retail showrooms & office fitouts.",
    heroImage: "/images/decorative_paint_artistic_finishes_r2/metallic_finishes.jpg",
    desc: ["Book a free finishes consultation and let our artisans create unique textures. We'll provide a detailed proposal with decorative techniques and transparent pricing for artistic walls.", "Transform your walls into works of art with Metro Retail's artistic decorative finishes. From metallic effects to faux finishes and custom textures, we create unique surfaces that elevate your interior design to extraordinary levels.", "Metallic Finishes tailored for reliable and high-quality artistic finishes execution."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Ready to Apply Artistic Finishes? and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Ready to Apply Artistic Finishes? with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        img: "/images/decorative_paint_artistic_finishes_r2/metallic_finishes.jpg",
        title: "Metallic Finishes",
        description: "Metallic Finishes tailored for reliable and high-quality artistic finishes execution.",
        tags: [
          "DecorativeFinishes",
          "Home"
        ],
        bullets: [],
        buttonText: "METALLIC FINISHES →"
      },
      {
        img: "/images/decorative_paint_artistic_finishes_r2/faux_finishes.jpg",
        title: "Faux Finishes",
        description: "Faux Finishes tailored for reliable and high-quality artistic finishes execution.",
        tags: [
          "DecorativeFinishes",
          "Home"
        ],
        bullets: [],
        buttonText: "FAUX FINISHES →"
      },
      {
        img: "/images/decorative_paint_artistic_finishes_r2/decorative_plasters.jpg",
        title: "Decorative Plasters",
        description: "Decorative Plasters tailored for reliable and high-quality artistic finishes execution.",
        tags: [
          "DecorativeFinishes",
          "Home"
        ],
        bullets: [],
        buttonText: "DECORATIVE PLASTERS →"
      },
      {
        img: "/images/decorative_paint_artistic_finishes_r2/custom_textures.jpg",
        title: "Custom Textures",
        description: "Custom Textures tailored for reliable and high-quality artistic finishes execution.",
        tags: [
          "DecorativeFinishes",
          "Home"
        ],
        bullets: [],
        buttonText: "CUSTOM TEXTURES →"
      },
      {
        img: "/images/decorative_paint_artistic_finishes_r2/artistic_patterns.jpg",
        title: "Artistic Patterns",
        description: "Artistic Patterns tailored for reliable and high-quality artistic finishes execution.",
        tags: [
          "DecorativeFinishes",
          "Home"
        ],
        bullets: [],
        buttonText: "ARTISTIC PATTERNS →"
      },
      {
        img: "/images/decorative_paint_artistic_finishes_r2/statement_surfaces.jpg",
        title: "Statement Surfaces",
        description: "Statement Surfaces tailored for reliable and high-quality artistic finishes execution.",
        tags: [
          "ArtisticFinishes",
          "Home"
        ],
        bullets: [],
        buttonText: "STATEMENT SURFACES →"
      }
    ]
  },
  "customised-furniture": {
    title: "Ready to Create Your Custom Furniture?",
    tagline: "Metro Retail specializes in office & showroom fitouts.",
    heroImage: "/images/customised_furniture_dubai_r2/tv-units-3.webp",
    desc: ["Book a free furniture consultation and let our craftsmen design bespoke pieces. We'll provide a detailed proposal with custom joinery and transparent pricing for your furniture project.", "Metro Retail Interiors designs and manufactures bespoke furniture including sofas, tables, consoles, beds, benches, shelving, and more — all tailored to your style and space requirements. Every piece is custom-made in our Al Quoz joinery facility using premium materials and expert craftsmanship.", "Customized console design crafted for elegance, functionality, and a perfect fit for modern living spaces."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Ready to Create Your Custom Furniture? and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Ready to Create Your Custom Furniture? with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        slug: "custom-sofas",
        img: "/images/customised_furniture_dubai_r2/sofa.png",
        title: "Custom Sofas & Seating",
        description: "Luxurious, bespoke sofas tailored to your exact comfort preferences and spatial requirements.",
        tags: ["CustomSofas", "BespokeFurniture", "Seating"],
        bullets: ["Premium upholstery options", "Custom dimensions for perfect fit"],
        buttonText: "CUSTOM SOFAS →"
      },
      {
        slug: "custom-tables",
        img: "/images/customised_furniture_dubai_r2/customized_table.png",
        title: "Customized Tables",
        description: "Handcrafted dining and center tables designed to be the centerpiece of any room.",
        tags: ["CustomTables", "BespokeFurniture", "Dining"],
        bullets: ["Exotic wood and stone finishes", "Unique base designs"],
        buttonText: "CUSTOM TABLES →"
      },
      {
        slug: "custom-beds",
        img: "/images/customised_furniture_dubai_r2/customized-bed.png",
        title: "Bespoke Beds",
        description: "Custom-designed bed frames and headboards crafted for ultimate relaxation and style.",
        tags: ["CustomBeds", "Bedroom", "BespokeFurniture"],
        bullets: ["Integrated lighting options", "Premium fabric headboards"],
        buttonText: "BESPOKE BEDS →"
      },
      {
        slug: "custom-consoles",
        img: "/images/customised_furniture_dubai_r2/tv-units-3.webp",
        title: "Customized TV Units & Consoles",
        description: "Customized console design crafted for elegance, functionality, and a perfect fit for modern living spaces.",
        tags: ["CustomConsoles", "BespokeFurniture", "ConsoleDesign"],
        bullets: ["Seamless cable management", "Bespoke console table makers in India"],
        buttonText: "CUSTOM CONSOLES →"
      },
      {
        slug: "custom-doors",
        img: "/images/customised_furniture_dubai_r2/Door3.jpg",
        title: "Premium Custom Doors",
        description: "Elegant, solid wood custom doors engineered for security, soundproofing, and aesthetic appeal.",
        tags: ["CustomDoors", "Joinery", "BespokeFurniture"],
        bullets: ["Intricate carving details", "High-quality hardware integration"],
        buttonText: "CUSTOM DOORS →"
      }
    ]
  },
  "feature-walls-copy": {
    title: "Create Feature Walls",
    tagline: "Expert office fitouts & retail showrooms by Metro.",
    heroImage: "/images/decorative_paint_feature_walls_r2/concrete_textures.jpg",
    desc: ["Book a free feature wall consultation and let our experts design stunning focal points. We'll provide a detailed proposal with creative solutions and transparent pricing for your walls.", "Create stunning focal points with Metro Retail's custom feature walls. From artistic textures to bold accent walls and statement finishes, we design and execute feature walls that transform your space.", "Textured Feature Walls tailored for reliable and high-quality feature walls execution."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Create Feature Walls and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Create Feature Walls with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        img: "/images/decorative_paint_feature_walls_r2/concrete_textures.jpg",
        title: "Textured Feature Walls",
        description: "Textured Feature Walls tailored for reliable and high-quality feature walls execution.",
        tags: [
          "DecorativeFinishes",
          "Retail"
        ],
        bullets: [],
        buttonText: "TEXTURED FEATURE WALLS →"
      },
      {
        img: "/images/decorative_paint_feature_walls_r2/geometric_walls.jpg",
        title: "Geometric Patterns",
        description: "Geometric Patterns tailored for reliable and high-quality feature walls execution.",
        tags: [
          "FeatureWalls",
          "Retail"
        ],
        bullets: [],
        buttonText: "GEOMETRIC PATTERNS →"
      },
      {
        img: "/images/decorative_paint_feature_walls_r2/metallic_textures.jpg",
        title: "Metallic Feature Walls",
        description: "Metallic Feature Walls tailored for reliable and high-quality feature walls execution.",
        tags: [
          "DecorativeFinishes",
          "Retail"
        ],
        bullets: [],
        buttonText: "METALLIC FEATURE WALLS →"
      },
      {
        img: "/images/decorative_paint_feature_walls_r2/feature-walls-2.png",
        title: "Wood Effect Walls",
        description: "Wood Effect Walls tailored for reliable and high-quality feature walls execution.",
        tags: [
          "BespokeJoinery",
          "Retail"
        ],
        bullets: [],
        buttonText: "WOOD EFFECT WALLS →"
      },
      {
        img: "/images/decorative_paint_feature_walls_r2/stone_effect_walls.jpg",
        title: "Stone Effect Walls",
        description: "Stone Effect Walls tailored for reliable and high-quality feature walls execution.",
        tags: [
          "MarbleWorks",
          "Retail"
        ],
        bullets: [],
        buttonText: "STONE EFFECT WALLS →"
      },
      {
        img: "/images/decorative_paint_feature_walls_r2/artistic_murals.jpg",
        title: "Artistic Murals",
        description: "Artistic Murals tailored for reliable and high-quality feature walls execution.",
        tags: [
          "DecorativeFinishes",
          "Retail"
        ],
        bullets: [],
        buttonText: "ARTISTIC MURALS →"
      }
    ]
  },
  "artistic-finishes-copy": {
    title: "Ready to Apply Artistic Finishes?",
    tagline: "Metro Retail builds premium office & mall fitouts.",
    heroImage: "/images/decorative_paint_artistic_finishes_r2/metallic_finishes.jpg",
    desc: ["Book a free finishes consultation and let our artisans create unique textures. We'll provide a detailed proposal with decorative techniques and transparent pricing for artistic walls.", "Transform your walls into works of art with Metro Retail's artistic decorative finishes. From metallic effects to faux finishes and custom textures, we create unique surfaces that elevate your interior design to extraordinary levels.", "Metallic Finishes tailored for reliable and high-quality artistic finishes execution."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Ready to Apply Artistic Finishes? and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Ready to Apply Artistic Finishes? with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        img: "/images/decorative_paint_artistic_finishes_r2/metallic_finishes.jpg",
        title: "Metallic Finishes",
        description: "Metallic Finishes tailored for reliable and high-quality artistic finishes execution.",
        tags: [
          "DecorativeFinishes",
          "Home"
        ],
        bullets: [],
        buttonText: "METALLIC FINISHES →"
      },
      {
        img: "/images/decorative_paint_artistic_finishes_r2/faux_finishes.jpg",
        title: "Faux Finishes",
        description: "Faux Finishes tailored for reliable and high-quality artistic finishes execution.",
        tags: [
          "DecorativeFinishes",
          "Home"
        ],
        bullets: [],
        buttonText: "FAUX FINISHES →"
      },
      {
        img: "/images/decorative_paint_artistic_finishes_r2/decorative_plasters.jpg",
        title: "Decorative Plasters",
        description: "Decorative Plasters tailored for reliable and high-quality artistic finishes execution.",
        tags: [
          "DecorativeFinishes",
          "Home"
        ],
        bullets: [],
        buttonText: "DECORATIVE PLASTERS →"
      },
      {
        img: "/images/decorative_paint_artistic_finishes_r2/custom_textures.jpg",
        title: "Custom Textures",
        description: "Custom Textures tailored for reliable and high-quality artistic finishes execution.",
        tags: [
          "DecorativeFinishes",
          "Home"
        ],
        bullets: [],
        buttonText: "CUSTOM TEXTURES →"
      },
      {
        img: "/images/decorative_paint_artistic_finishes_r2/artistic_patterns.jpg",
        title: "Artistic Patterns",
        description: "Artistic Patterns tailored for reliable and high-quality artistic finishes execution.",
        tags: [
          "DecorativeFinishes",
          "Home"
        ],
        bullets: [],
        buttonText: "ARTISTIC PATTERNS →"
      },
      {
        img: "/images/decorative_paint_artistic_finishes_r2/statement_surfaces.jpg",
        title: "Statement Surfaces",
        description: "Statement Surfaces tailored for reliable and high-quality artistic finishes execution.",
        tags: [
          "ArtisticFinishes",
          "Home"
        ],
        bullets: [],
        buttonText: "STATEMENT SURFACES →"
      }
    ]
  },
  "customised-furniture-copy": {
    title: "Ready to Create Your Custom Furniture?",
    tagline: "Expert retail fitout works for showrooms and malls.",
    heroImage: "/images/customised_furniture_dubai_r2/tv-units-3.webp",
    desc: ["Book a free furniture consultation and let our craftsmen design bespoke pieces. We'll provide a detailed proposal with custom joinery and transparent pricing for your furniture project.", "Metro Retail Interiors designs and manufactures bespoke furniture including sofas, tables, consoles, beds, benches, shelving, and more — all tailored to your style and space requirements. Every piece is custom-made in our Al Quoz joinery facility using premium materials and expert craftsmanship.", "Customized console design crafted for elegance, functionality, and a perfect fit for modern living spaces."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Ready to Create Your Custom Furniture? and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Ready to Create Your Custom Furniture? with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        slug: "custom-consoles",
        img: "/images/customised_furniture_dubai_r2/tv-units-3.webp",
        title: "Customized Consoles",
        description: "Customized console design crafted for elegance, functionality, and a perfect fit for modern living spaces.",
        tags: [
          "CustomConsoles",
          "BespokeFurniture",
          "ConsoleDesign"
        ],
        bullets: [
          "Bespoke console table makers in India",
          "Premium custom console tables",
          "Modern luxury console tables India"
        ],
        buttonText: "CUSTOMIZED CONSOLES →"
      },
      {
        slug: "custom-doors",
        img: "/images/customised_furniture_dubai_r2/Door3.jpg",
        title: "Customized Doors",
        description: "Customized Door design crafted for luxury, security, style and a perfect fit for your home.",
        tags: [
          "CustomDoors",
          "BespokeFurniture",
          "DoorDesign"
        ],
        bullets: [
          "Bespoke Door makers in India",
          "Premium custom made doors",
          "Modern luxury doors India"
        ],
        buttonText: "CUSTOMIZED DOORS →"
      },
      {
        slug: "custom-sofas",
        img: "/images/customised_furniture_dubai_r2/sofa.png",
        title: "Customized Sofas",
        description: "Customized sofa design crafted for comfort, style, and a perfect fit for your living space.",
        tags: [
          "CustomSofas",
          "BespokeFurniture",
          "SofaDesign"
        ],
        bullets: [
          "Bespoke sofa makers in India",
          "Premium custom made sofas",
          "Modern luxury sofas India"
        ],
        buttonText: "CUSTOMIZED SOFAS →"
      },
      {
        slug: "custom-tables",
        img: "/images/customised_furniture_dubai_r2/customized_table.png",
        title: "Customized Tables",
        description: "Customized table design crafted for durability, elegance, and a perfect fit for your living or workspace.",
        tags: [
          "CustomTables",
          "BespokeFurniture",
          "TableDesign"
        ],
        bullets: [
          "Bespoke table makers in India",
          "Premium custom made tables",
          "Modern luxury tables India"
        ],
        buttonText: "CUSTOMIZED TABLES →"
      },
      {
        slug: "custom-beds",
        img: "/images/customised_furniture_dubai_r2/customized-bed.png",
        title: "Customized Beds",
        description: "Custom table installation tailored for precision, durability, and high-quality customised furniture execution.",
        tags: [
          "CustomTables",
          "BespokeFurniture",
          "TableDesign"
        ],
        bullets: [
          "Bespoke table installation services in India",
          "Premium custom table makers and installers",
          "Luxury custom dining and office tables India"
        ],
        buttonText: "CUSTOMIZED BEDS →"
      }
    ]
  },
  "air-quality": {
    title: "Ready to Improve Your Air Quality?",
    tagline: "Metro Retail delivers office and showroom fitouts.",
    heroImage: "/images/air_quality_dubai_r2/envirobiotics_family.png",
    desc: ["Book a free air quality consultation and let our experts assess your space. We'll provide a detailed proposal with ventilation solutions and transparent pricing for healthier indoor.", "Metro Retail provides advanced air purification, mold removal, environmental probiotics, HVAC cleaning, and humidity control solutions to ensure healthy indoor environments for your home or business.", "Advanced air purification systems for healthier indoor environments in homes and offices."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Ready to Improve Your Air Quality? and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Ready to Improve Your Air Quality? with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        img: "/images/air_quality_dubai_r2/all_products.jpg",
        title: "Air Purification systems",
        description: "Advanced air purification systems for healthier indoor environments in homes and offices.",
        tags: [
          "HEPAFilters",
          "UVPurifiers",
          "ActivatedCarbon"
        ],
        bullets: [
          "HEPA air purification system",
          "UV air purifier installation villa",
          "Commercial air purification system India"
        ],
        buttonText: "AIR PURIFICATION SYSTEMS →"
      },
      {
        img: "/images/air_quality_dubai_r2/probiotics.jpg",
        title: "Environment Probiotics",
        description: "Bio-based environmental probiotic solutions for long-term microbial air and surface protection.",
        tags: [
          "ProbioticCleaning",
          "BiofilmPrevention",
          "MicrobialBalance"
        ],
        bullets: [
          "Environmental probiotics air treatment",
          "Probiotic cleaning system villa",
          "Biofilm prevention solution India"
        ],
        buttonText: "ENVIRONMENT PROBIOTICS →"
      },
      {
        img: "/images/air_quality_dubai_r2/humidity_control.webp",
        title: "Humidity control solutions",
        description: "Precision humidity control systems to prevent condensation, mold, and discomfort in interiors.",
        tags: [
          "Dehumidifiers",
          "VaporBarriers",
          "HumidistatControl"
        ],
        bullets: [
          "Dehumidification system installation",
          "Humidity control solution villa",
          "Vapor barrier moisture control India"
        ],
        buttonText: "HUMIDITY CONTROL SOLUTIONS →"
      },
      {
        img: "/images/air_quality_dubai_r2/services_air_quality_air_quality_testing_and_assessment.webp",
        title: "Air quality testing and assessment",
        description: "Certified indoor air quality testing and environmental assessment for homes and commercial spaces.",
        tags: [
          "IAQMonitoring",
          "ParticulateTesting",
          "VOCAnalysis"
        ],
        bullets: [
          "Indoor air quality testing",
          "IAQ assessment luxury villa",
          "VOC air quality analysis India"
        ],
        buttonText: "AIR QUALITY TESTING AND ASSESSMENT →"
      },
      {
        img: "/images/air-quality/biologic-mini.jpg",
        title: "BioLogic Mini",
        description: "Cordless probiotic air and surface purifier with battery operation and USB recharging.",
        tags: [
          "AirPurifier",
          "IndoorAirQuality",
          ""
        ],
        bullets: [],
        buttonText: "BIOLOGIC MINI →"
      },
      {
        img: "/images/air-quality/BA2080.jpg",
        title: "BA2080",
        description: "Advanced probiotic purifier with HEPA filtration for whole-home air quality coverage.",
        tags: [
          "HEPAFilter",
          "MoldControl",
          "Interiors"
        ],
        bullets: [],
        buttonText: "BA2080 →"
      }
    ]
  },
  "contracting": {
    title: "Ready to Complete Your Contracting Project?",
    tagline: "Metro Retail creates premium offices and showrooms.",
    heroImage: "/images/contracting_dubai_r2/services_contracting_dubai_c_1_construction.webp",
    desc: ["Book a free contracting consultation and let our experts manage your project. We'll provide a detailed proposal with turnkey solutions and transparent pricing for complete execution.", "Expert structural work, additions, modifications, extensions, and G+1 construction with full authority-approved engineering and compliance.", "G+1 Construction tailored for reliable and high-quality contracting execution."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Ready to Complete Your Contracting Project? and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Ready to Complete Your Contracting Project? with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        img: "/images/contracting_dubai_r2/services_contracting_dubai_c_1_construction.webp",
        title: "G+1 Construction",
        description: "G+1 Construction tailored for reliable and high-quality contracting execution.",
        tags: [
          "GPlusOneConstruction",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "G+1 CONSTRUCTION →"
      },
      {
        img: "/images/contracting_dubai_r2/services_contracting_dubai_building_modifications.webp",
        title: "Building Modifications",
        description: "Building Modifications tailored for reliable and high-quality contracting execution.",
        tags: [
          "BuildingModifications",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "BUILDING MODIFICATIONS →"
      }
    ]
  },
  "window-glazing": {
    title: "Ready to Install Window Glazing?",
    tagline: "Expert retail and office fitouts by Metro Retail!",
    heroImage: "https://images.unsplash.com/photo-1710883734891-93709398496d?auto=format&fit=crop&q=80&w=1200",
    desc: ["Book a free glazing consultation and let our specialists install energy-efficient windows. We'll provide a detailed proposal with quality materials and transparent pricing.", "Expert window installation, replacement, low-E glass, sliding systems, folding doors, and thermal performance upgrades for residential and commercial properties.", "Window installation & replacement tailored for reliable and high-quality window glazing execution."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Ready to Install Window Glazing? and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Ready to Install Window Glazing? with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        img: "https://images.unsplash.com/photo-1751486403820-7cf45ebec080?auto=format&fit=crop&q=80&w=800",
        title: "Low-e solutions",
        description: "Low-e solutions tailored for reliable and high-quality window glazing execution.",
        tags: [
          "LowEGlazing",
          "Commercial"
        ],
        bullets: [],
        buttonText: "LOW-E SOLUTIONS →"
      },
      {
        img: "https://images.unsplash.com/photo-1613324061338-19d4528a5be9?auto=format&fit=crop&q=80&w=800",
        title: "Sliding window systems",
        description: "Sliding window systems tailored for reliable and high-quality window glazing execution.",
        tags: [
          "SlidingSystems",
          "Commercial"
        ],
        bullets: [],
        buttonText: "SLIDING WINDOW SYSTEMS →"
      },
      {
        img: "https://images.unsplash.com/photo-1667659360692-30640504b396?auto=format&fit=crop&q=80&w=800",
        title: "Folding doors and Bi fold systems",
        description: "Folding doors and Bi fold systems tailored for reliable and high-quality window glazing execution.",
        tags: [
          "BiFoldSystems",
          "Commercial"
        ],
        bullets: [],
        buttonText: "FOLDING DOORS AND BI FOLD SYSTEMS →"
      },
      {
        img: "https://images.unsplash.com/photo-1559219432-1962fcaa2752?auto=format&fit=crop&q=80&w=800",
        title: "Thermal performance upgrades",
        description: "Thermal performance upgrades tailored for reliable and high-quality window glazing execution.",
        tags: [
          "ThermalPerformance",
          "Commercial"
        ],
        bullets: [],
        buttonText: "THERMAL PERFORMANCE UPGRADES →"
      }
    ]
  },
  "tile-installation": {
    title: "Ready to Install Premium Tiles?",
    tagline: "Metro Retail specializes in office & mall fitouts.",
    heroImage: "https://images.unsplash.com/photo-1561817223-f67e69e6bd6a?auto=format&fit=crop&q=80&w=1200",
    desc: ["Book a free tile consultation and let our specialists install precision flooring and walls. We'll provide a detailed proposal with quality materials and transparent pricing.", "Professional installation of porcelain, ceramic, marble, mosaic, outdoor tiles, and large-format slabs with precision and quality craftsmanship.", "Porcelain Tile Installation tailored for reliable and high-quality tile installation execution."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Ready to Install Premium Tiles? and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Ready to Install Premium Tiles? with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        img: "https://images.unsplash.com/photo-1706629503586-2731f65587ae?auto=format&fit=crop&q=80&w=800",
        title: "Porcelain Tile Installation",
        description: "Porcelain Tile Installation tailored for reliable and high-quality tile installation execution.",
        tags: [
          "PorcelainTiles",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "PORCELAIN TILE INSTALLATION →"
      },
      {
        img: "https://images.unsplash.com/photo-1523413307857-ef24c53571ae?auto=format&fit=crop&q=80&w=800",
        title: "Ceramic Tile Installation",
        description: "Ceramic Tile Installation tailored for reliable and high-quality tile installation execution.",
        tags: [
          "CeramicTiles",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "CERAMIC TILE INSTALLATION →"
      },
      {
        img: "https://images.unsplash.com/photo-1706629503586-2731f65587ae?auto=format&fit=crop&q=80&w=800",
        title: "Marble Tile Installation",
        description: "Marble Tile Installation tailored for reliable and high-quality tile installation execution.",
        tags: [
          "MarbleTiles",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "MARBLE TILE INSTALLATION →"
      },
      {
        img: "https://images.unsplash.com/photo-1622227920933-7fcd7377703f?auto=format&fit=crop&q=80&w=800",
        title: "Mosaic Tile Installation",
        description: "Mosaic Tile Installation tailored for reliable and high-quality tile installation execution.",
        tags: [
          "MosaicTiles",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "MOSAIC TILE INSTALLATION →"
      },
      {
        img: "https://images.unsplash.com/photo-1617887021567-fe8d2480bd96?auto=format&fit=crop&q=80&w=800",
        title: "Outdoor Tile Installation",
        description: "Outdoor Tile Installation tailored for reliable and high-quality tile installation execution.",
        tags: [
          "OutdoorTiles",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "OUTDOOR TILE INSTALLATION →"
      },
      {
        img: "https://images.unsplash.com/photo-1774514580467-6492a3b54049?auto=format&fit=crop&q=80&w=800",
        title: "Large-Format Slab Installation",
        description: "Large-Format Slab Installation tailored for reliable and high-quality tile installation execution.",
        tags: [
          "LargeFormatSlabs",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "LARGE-FORMAT SLAB INSTALLATION →"
      }
    ]
  },
  "gypsum-works": {
    title: "Ready to Install Gypsum Works?",
    tagline: "Premium retail showrooms & office fitouts by Metro.",
    heroImage: "https://images.unsplash.com/photo-1582203423341-64b918240e25?auto=format&fit=crop&q=80&w=1200",
    desc: ["Book a free gypsum consultation and let our craftsmen create custom ceilings and partitions. We'll provide a detailed proposal with precision work and transparent pricing for gypsum installations.", "Expert false ceilings, partitions, bulkheads, coves, niches, and detailed gypsum design for residential and commercial spaces.", "False Ceiling Installation tailored for reliable and high-quality gypsum works execution."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Ready to Install Gypsum Works? and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Ready to Install Gypsum Works? with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        img: "https://images.unsplash.com/photo-1711107796112-e5b4fe9aa075?auto=format&fit=crop&q=80&w=800",
        title: "False Ceiling Installation",
        description: "False Ceiling Installation tailored for reliable and high-quality gypsum works execution.",
        tags: [
          "FalseCeilings",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "FALSE CEILING INSTALLATION →"
      },
      {
        img: "https://images.unsplash.com/photo-1718816281207-3b253cff549a?auto=format&fit=crop&q=80&w=800",
        title: "Gypsum Partitions",
        description: "Gypsum Partitions tailored for reliable and high-quality gypsum works execution.",
        tags: [
          "GypsumPartitions",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "GYPSUM PARTITIONS →"
      },
      {
        img: "https://images.unsplash.com/photo-1603525689518-1d8c608e5cbe?auto=format&fit=crop&q=80&w=800",
        title: "Detailed Gypsum Design",
        description: "Detailed Gypsum Design tailored for reliable and high-quality gypsum works execution.",
        tags: [
          "GypsumDetailing",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "DETAILED GYPSUM DESIGN →"
      }
    ]
  },
  "property-audits": {
    title: "Ready to Audit Your Property?",
    tagline: "Metro Retail: Expert office and retail fitout works.",
    heroImage: "/images/property_audits_dubai_r2/residential_outdoor_living_pool_decking_and_water_features.webp",
    desc: ["Book a free property audit and let our engineers assess your space. We'll provide a detailed inspection report with recommendations and transparent pricing for audit services.", "Comprehensive technical audits for ongoing projects, renovation oversight, and quality verification to ensure your project meets the highest standards.", "Technical Audits tailored for reliable and high-quality property audits execution."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Ready to Audit Your Property? and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Ready to Audit Your Property? with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        img: "/images/property_audits_dubai_r2/services_property_audits_technical_audits.webp",
        title: "Technical Audits",
        description: "Technical Audits tailored for reliable and high-quality property audits execution.",
        tags: [
          "TechnicalAudits",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "TECHNICAL AUDITS →"
      },
      {
        img: "/images/property_audits_dubai_r2/services_property_audits_ongoing_project_audits.webp",
        title: "Ongoing Project Audits",
        description: "Ongoing Project Audits tailored for reliable and high-quality property audits execution.",
        tags: [
          "ProjectAudits",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "ONGOING PROJECT AUDITS →"
      },
      {
        img: "/images/property_audits_dubai_r2/services_property_audits_renovation_oversight.webp",
        title: "Renovation Oversight",
        description: "Renovation Oversight tailored for reliable and high-quality property audits execution.",
        tags: [
          "RenovationOversight",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "RENOVATION OVERSIGHT →"
      },
      {
        img: "/images/property_audits_dubai_r2/services_property_audits_pre_purchase_inspections.webp",
        title: "Pre-Purchase Inspections",
        description: "Pre-Purchase Inspections tailored for reliable and high-quality property audits execution.",
        tags: [
          "PrePurchaseInspection",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "PRE-PURCHASE INSPECTIONS →"
      },
      {
        img: "/images/property_audits_dubai_r2/services_property_audits_compliance_audits.webp",
        title: "Compliance Audits",
        description: "Compliance Audits tailored for reliable and high-quality property audits execution.",
        tags: [
          "ComplianceAudits",
          "AllSectors"
        ],
        bullets: [],
        buttonText: "COMPLIANCE AUDITS →"
      }
    ]
  },
  "authority-approvals": {
    title: "Ready to Get Your Authority Approvals?",
    tagline: "Delivering premium retail showrooms & office fitouts.",
    heroImage: "/images/authority_approvals_dubai_r2/services_authority_approvals_dubai_municipality_approvals.webp",
    desc: ["Book a free approvals consultation and let our DM-certified engineers handle your permits. We'll provide a detailed proposal with timelines and transparent pricing for all authority submissions.", "Navigating 's regulatory landscape requires expertise and precision. Metro Retail Interiors handles all drawings, submissions, and NOCs for Municipality, Development Authority (DDA), RERA, Civil Defense, and utilities. Whether you're opening an F&B venue, renovating a commercial space, or developing a residential project, we ensure full compliance and timely approvals so your project moves forward without delays.", "Municipality Approvals tailored for reliable and high-quality authority approvals execution."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Specialists", value: "25+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your specific requirements for Ready to Get Your Authority Approvals? and assessing the space." }, { "step": "Design & Planning", "desc": "Developing tailored solutions, material selection, and precise technical planning." }, { "step": "Execution Phase", "desc": "Our expert technicians install and implement the Ready to Get Your Authority Approvals? with meticulous attention to detail." }, { "step": "Final Handover", "desc": "Comprehensive quality checks and final handover to ensure absolute perfection." }],
    gallery: [
      {
        img: "/images/authority_approvals_dubai_r2/services_authority_approvals_dubai_municipality_approvals.webp",
        title: "Municipality Approvals",
        description: "Municipality Approvals tailored for reliable and high-quality authority approvals execution.",
        tags: [
          "Municipality",
          "Commercial"
        ],
        bullets: [],
        buttonText: "MUNICIPALITY APPROVALS →"
      },
      {
        img: "/images/authority_approvals_dubai_r2/dda_approvals.jpg",
        title: "DDA Approvals",
        description: "DDA Approvals tailored for reliable and high-quality authority approvals execution.",
        tags: [
          "DDAApprovals",
          "Commercial"
        ],
        bullets: [],
        buttonText: "DDA APPROVALS →"
      },
      {
        img: "/images/authority_approvals_dubai_r2/rera_approvals.jpg",
        title: "RERA Approvals",
        description: "RERA Approvals tailored for reliable and high-quality authority approvals execution.",
        tags: [
          "RERAApprovals",
          "Commercial"
        ],
        bullets: [],
        buttonText: "RERA APPROVALS →"
      },
      {
        img: "/images/authority_approvals_dubai_r2/civil_defence_noc_approval.jpg",
        title: "Civil Defense NOCs",
        description: "Civil Defense NOCs tailored for reliable and high-quality authority approvals execution.",
        tags: [
          "CivilDefenseNOC",
          "Commercial"
        ],
        bullets: [],
        buttonText: "CIVIL DEFENSE NOCS →"
      },
      {
        img: "/images/authority_approvals_dubai_r2/utility_connection.jpg",
        title: "Utility Connections",
        description: "Utility Connections tailored for reliable and high-quality authority approvals execution.",
        tags: [
          "UtilityConnections",
          "Commercial"
        ],
        bullets: [],
        buttonText: "UTILITY CONNECTIONS →"
      }
    ]
  }
};

export const NESTED_SERVICE_DATA: Record<string, any> = {
  "wood-ceilings": {
    title: "Ready to Install Wood Ceilings?",
    tagline: "Metro Retail specializes in office & showroom fitouts.",
    heroImage: "/images/joinery_wood_ceilings_r2/veneer_panels.jpg",
    contentTitle: "Premium Custom Wood Ceilings for Luxury Interiors",
    contentDesc: "Wood ceilings add warmth, depth, and architectural character to any space. Metro Retail Solutions Interiors designs and manufactures bespoke wood ceiling systems in our in-house joinery facility, ensuring perfect alignment, clean detailing, and flawless installation. Whether for a villa, office, restaurant, or majlis, we craft statement ceilings that elevate your interiors.",
    gallery: [
      {
        img: "/images/joinery_wood_ceilings_r2/wood-ceilings-5.webp",
        title: "Slatted Wood Ceilings",
        description: "Slatted Wood Ceilings tailored for reliable and high-quality wood ceilings execution.",
        tags: ["Ceiling Systems", "Commercial"]
      },
      {
        img: "/images/joinery_wood_ceilings_r2/grooved_timber_ceilings.jpg",
        title: "Grooved Timber Ceilings",
        description: "Grooved Timber Ceilings tailored for reliable and high-quality wood ceilings execution.",
        tags: ["Ceiling Systems", "Commercial"]
      },
      {
        img: "/images/joinery_wood_ceilings_r2/veneer_panels.jpg?w=3840&q=75",
        title: "Veneer Panels with Concealed Joints",
        description: "Veneer Panels with Concealed Joints tailored for reliable and high-quality wood ceilings execution.",
        tags: ["Bespoke Joinery", "Commercial"]
      },
      {
        img: "/images/joinery_wood_ceilings_r2/Accoustic_wood_ceilings.jpg",
        title: "Acoustic Wood Ceilings",
        description: "Acoustic Wood Ceilings tailored for reliable and high-quality wood ceilings execution.",
        tags: ["Ceiling Systems", "Commercial"]
      },
      {
        img: "/images/joinery_wood_ceilings_r2/coffered_ceiling.jpg",
        title: "Coffered Ceilings",
        description: "Coffered Ceilings tailored for reliable and high-quality wood ceilings execution.",
        tags: ["Ceiling Systems", "Commercial"]
      },
      {
        img: "/images/joinery_wood_ceilings_r2/floating_wood_panels.jpg",
        title: "Floating & Suspended Wood Panels",
        description: "Floating & Suspended Wood Panels tailored for reliable and high-quality wood ceilings execution.",
        tags: ["Bespoke Joinery", "Commercial"]
      },
      {
        img: "/images/joinery_wood_ceilings_r2/integrated_light_wood_ceiling.jpg",
        title: "Integrated Lighting Ceilings",
        description: "Integrated Lighting Ceilings tailored for reliable and high-quality wood ceilings execution.",
        tags: ["Lighting Design", "Commercial"]
      },
      {
        img: "/images/joinery_wood_ceilings_r2/curved_ceiling.jpg",
        title: "Custom Patterns & Curved Designs",
        description: "Custom Patterns & Curved Designs tailored for reliable and high-quality wood ceilings execution.",
        tags: ["Ceiling Systems", "Commercial"]
      }
    ]
  },
  "wardrobes": {
    title: "Ready to Transform Your Wardrobes?",
    tagline: "Expert office fitouts & retail showrooms by Metro.",
    heroImage: "/images/wardrobes_r2/Ward8_HALO.webp",
    contentTitle: "Bespoke Walk-In Wardrobes Made to Fit Your Lifestyle",
    contentDesc: "A walk-in wardrobe should be functional, elegant, and meticulously organized. Metro Retail Solutions designs and manufactures custom wardrobe systems tailored to your needs.",
    gallery: [
      {
        img: "/images/wardrobes_r2/Ward1_HALO.webp",
        title: "Custom Wardrobes",
        description: "Custom Wardrobes tailored for reliable and high-quality residential execution.",
        tags: ["Custom Furniture", "Home"]
      },
      {
        img: "/images/wardrobes_r2/Ward2_HALO.webp",
        title: "Walk-in Wardrobes",
        description: "Walk-in Wardrobes tailored for reliable and high-quality residential execution.",
        tags: ["Custom Furniture", "Home"]
      },
      {
        img: "/images/wardrobes_r2/Ward3_HALO.webp",
        title: "Wardrobe Design",
        description: "Wardrobe Design tailored for reliable and high-quality residential execution.",
        tags: ["Custom Furniture", "Home"]
      },
      {
        img: "/images/wardrobes_r2/Ward4_HALO.webp",
        title: "Wardrobe Solutions",
        description: "Wardrobe Solutions tailored for reliable and high-quality residential execution.",
        tags: ["Custom Furniture", "Home"]
      },
      {
        img: "/images/wardrobes_r2/Ward5_HALO.webp",
        title: "Wardrobe Interiors",
        description: "Wardrobe Interiors tailored for reliable and high-quality residential execution.",
        tags: ["Custom Furniture", "Home"]
      },
      {
        img: "/images/wardrobes_r2/Ward6_HALO.webp",
        title: "Bespoke Wardrobes",
        description: "Bespoke Wardrobes tailored for reliable and high-quality residential execution.",
        tags: ["Custom Furniture", "Home"]
      }
    ]
  },
  "wall-panels": {
    title: "Ready to Install Wall Panels?",
    tagline: "Metro Retail builds premium office & mall fitouts.",
    heroImage: "/images/joinery_wall_panels_r2/fabric_panels.jpg",
    contentTitle: "Custom Wall Panels & Decorative Cladding",
    contentDesc: "Transform your walls with Metro Retail Solutions's custom wall panels. From fluted wood panels and veneer cladding to fabric panels and PU-painted designs, we create stunning feature walls for living rooms, bedrooms, lobbies, and offices. All panels are precision-crafted in our Al Quoz joinery facility.",
    gallery: [
      {
        img: "/images/joinery_wall_panels_r2/fluted%20wood%20panels.jpg",
        title: "Fluted Wood Panels",
        description: "Fluted Wood Panels tailored for reliable and high-quality wall panels execution.",
        tags: ["Bespoke Joinery", "Commercial"]
      },
      {
        img: "/images/joinery_wall_panels_r2/veneer_panels-1.jpg",
        title: "Veneer Panels",
        description: "Veneer Panels tailored for reliable and high-quality wall panels execution.",
        tags: ["Bespoke Joinery", "Commercial"]
      },
      {
        img: "/images/joinery_wall_panels_r2/geometric_designs_wood_panels.jpg",
        title: "Groove Lines & Geometric Designs",
        description: "Groove Lines & Geometric Designs tailored for reliable and high-quality wall panels execution.",
        tags: ["Bespoke Joinery", "Commercial"]
      },
      {
        img: "/images/joinery_wall_panels_r2/fabric_panels.jpg?w=3840&q=75",
        title: "Fabric Panels",
        description: "Fabric Panels tailored for reliable and high-quality wall panels execution.",
        tags: ["Bespoke Joinery", "Commercial"]
      },
      {
        img: "/images/joinery_wall_panels_r2/pu_painted_wall_panels.jpg",
        title: "PU-Painted Wall Panels",
        description: "PU-Painted Wall Panels tailored for reliable and high-quality wall panels execution.",
        tags: ["Bespoke Joinery", "Commercial"]
      },
      {
        img: "/images/joinery_wall_panels_r2/classic_molding.jpg",
        title: "Classic Molding & Wainscoting",
        description: "Classic Molding & Wainscoting tailored for reliable and high-quality wall panels execution.",
        tags: ["Bespoke Joinery", "Commercial"]
      }
    ]
  },
  "tv-units": {
    title: "Ready to Build Your TV Units?",
    tagline: "Expert retail fitout works for showrooms and malls.",
    heroImage: "/images/joinery_tv_units_r2/tv_unit_led_backlight.jpg",
    contentTitle: "Custom TV Units & Media Walls",
    contentDesc: "Metro Retail Solutions creates stunning custom TV units and media walls with veneer cladding, PU-painted finishes, LED backlighting, integrated shelving, concealed wiring, and floating designs. Every unit is custom-built to your specifications in our joinery facility.",
    gallery: [
      {
        img: "/images/joinery_tv_units_r2/services_joinery_tv_units_vaneer_cladding.webp",
        title: "Veneer Cladding",
        description: "Veneer Cladding tailored for reliable and high-quality tv units execution.",
        tags: ["Custom Furniture", "Home"]
      },
      {
        img: "/images/joinery_tv_units_r2/bed_headboards-1.jpg",
        title: "PU-Painted Finishes",
        description: "PU-Painted Finishes tailored for reliable and high-quality tv units execution.",
        tags: ["Custom Furniture", "Home"]
      },
      {
        img: "/images/joinery_tv_units_r2/tv_unit_led_backlight.jpg?w=3840&q=75",
        title: "LED Backlighting",
        description: "LED Backlighting tailored for reliable and high-quality tv units execution.",
        tags: ["Lighting Design", "Home"]
      },
      {
        img: "/images/joinery_tv_units_r2/services_joinery_tv_units_integrated_shelving.webp",
        title: "Integrated Shelving",
        description: "Integrated Shelving tailored for reliable and high-quality tv units execution.",
        tags: ["Custom Furniture", "Home"]
      },
      {
        img: "/images/joinery_tv_units_r2/concealed_wiring.jpg",
        title: "Concealed Wiring",
        description: "Concealed Wiring tailored for reliable and high-quality tv units execution.",
        tags: ["Custom Furniture", "Home"]
      },
      {
        img: "/images/joinery_tv_units_r2/floating_tv_unit.jpg",
        title: "Floating Units & Marble Accents",
        description: "Floating Units & Marble Accents tailored for reliable and high-quality tv units execution.",
        tags: ["Marble Works", "Home"]
      }
    ]
  },
  "residential-furniture": {
    title: "Ready to Create Your Residential Furniture?",
    tagline: "Metro Retail delivers office and showroom fitouts.",
    heroImage: "/images/joinery_residential_furniture_r2/shelving.jpg",
    contentTitle: "Bespoke Residential Furniture Crafted for Your Home",
    contentDesc: "Metro Retail Solutions designs and manufactures custom residential furniture including bed frames & headboards, custom consoles, dining tables & benches, sideboards, shelving units, and coffee tables. Every piece is tailored to your style and space.",
    gallery: [
      {
        img: "/images/joinery_residential_furniture_r2/bed_headboards.jpg",
        title: "Bed Frames & Headboards",
        description: "Bed Frames & Headboards tailored for reliable and high-quality residential furniture execution.",
        tags: ["Custom Furniture", "Home"]
      },
      {
        img: "/images/joinery_residential_furniture_r2/consoles.jpg",
        title: "Custom Consoles",
        description: "Custom Consoles tailored for reliable and high-quality residential furniture execution.",
        tags: ["Custom Furniture", "Home"]
      },
      {
        img: "/images/joinery_residential_furniture_r2/dining_tables.jpg",
        title: "Dining Tables & Benches",
        description: "Dining Tables & Benches tailored for reliable and high-quality residential furniture execution.",
        tags: ["Custom Furniture", "Home"]
      },
      {
        img: "/images/joinery_residential_furniture_r2/services_joinery_residential_furniture_sideboards_and_credenzas.webp",
        title: "Sideboards & Credenzas",
        description: "Sideboards & Credenzas tailored for reliable and high-quality residential furniture execution.",
        tags: ["Custom Furniture", "Home"]
      },
      {
        img: "/images/joinery_residential_furniture_r2/shelving.jpg?w=3840&q=75",
        title: "Shelving Units",
        description: "Shelving Units tailored for reliable and high-quality residential furniture execution.",
        tags: ["Custom Furniture", "Home"]
      },
      {
        img: "/images/joinery_residential_furniture_r2/coffee_table.jpg",
        title: "Coffee Tables & Storage Units",
        description: "Coffee Tables & Storage Units tailored for reliable and high-quality residential furniture execution.",
        tags: ["Custom Furniture", "Home"]
      }
    ]
  },
  "reception-desks": {
    title: "Ready to Create Your Bespoke Reception Desk?",
    tagline: "Metro Retail creates premium offices and showrooms.",
    heroImage: "/images/joinery_reception_desks_r2/reception_counter.jpg",
    contentTitle: "Custom Reception Desks Crafted in Al Quoz",
    contentDesc: "Custom reception desks designed and manufactured in our in-house joinery facility. From corporate offices to luxury hotels, we create reception counters that make powerful first impressions. Every desk is crafted with premium materials, integrated technology, and flawless finishes to reflect your brand identity.",
    gallery: [
      {
        img: "/images/joinery_reception_desks_r2/reception_counter.jpg?w=3840&q=75",
        title: "Corporate Reception Desks",
        description: "Corporate Reception Desks tailored for reliable and high-quality reception desks execution.",
        tags: ["Bespoke Joinery", "Offices"]
      },
      {
        img: "/images/joinery_reception_desks_r2/reception-desk-4.webp",
        title: "Hotel Reception Counters",
        description: "Hotel Reception Counters tailored for reliable and high-quality reception desks execution.",
        tags: ["Custom Furniture", "Offices"]
      },
      {
        img: "/images/joinery_reception_desks_r2/medical_reception_desk.jpg",
        title: "Medical Reception Desks",
        description: "Medical Reception Desks tailored for reliable and high-quality reception desks execution.",
        tags: ["Bespoke Joinery", "Offices"]
      },
      {
        img: "/images/joinery_reception_desks_r2/store_counters.jpg",
        title: "Retail Reception Counters",
        description: "Retail Reception Counters tailored for reliable and high-quality reception desks execution.",
        tags: ["Custom Furniture", "Offices"]
      },
      {
        img: "/images/joinery_reception_desks_r2/curved_reception_desk.jpg",
        title: "Curved Reception Desks",
        description: "Curved Reception Desks tailored for reliable and high-quality reception desks execution.",
        tags: ["Bespoke Joinery", "Offices"]
      },
      {
        img: "/images/joinery_reception_desks_r2/backlit-reception-desk.jpg",
        title: "Backlit Reception Desks",
        description: "Backlit Reception Desks tailored for reliable and high-quality reception desks execution.",
        tags: ["Lighting Design", "Offices"]
      }
    ]
  },
  "office-furniture": {
    title: "Ready to Create Your Office Furniture?",
    tagline: "Expert retail and office fitouts by Metro Retail!",
    heroImage: "/images/joinery_office_furniture_r2/conference_tables.jpg",
    contentTitle: "Custom Office Furniture for Professional Spaces",
    contentDesc: "Metro Retail Solutions creates bespoke office furniture including workstations, executive desks, filing cabinets, reception counters, conference tables, and storage walls. Designed for functionality and style, manufactured in our joinery facility.",
    gallery: [
      {
        img: "/images/joinery_office_furniture_r2/executive_workspace.jpg",
        title: "Workstations",
        description: "Workstations tailored for reliable and high-quality office furniture execution.",
        tags: ["Custom Furniture", "Offices"]
      },
      {
        img: "/images/joinery_office_furniture_r2/executive_desks.jpg",
        title: "Executive Desks",
        description: "Executive Desks tailored for reliable and high-quality office furniture execution.",
        tags: ["Bespoke Joinery", "Offices"]
      },
      {
        img: "/images/joinery_office_furniture_r2/filling_cabinets.jpg",
        title: "Filing Cabinets",
        description: "Filing Cabinets tailored for reliable and high-quality office furniture execution.",
        tags: ["Bespoke Joinery", "Offices"]
      },
      {
        img: "/images/joinery_office_furniture_r2/reception_counter.jpg",
        title: "Reception Counters",
        description: "Reception Counters tailored for reliable and high-quality office furniture execution.",
        tags: ["Custom Furniture", "Offices"]
      },
      {
        img: "/images/joinery_office_furniture_r2/conference_tables.jpg?w=3840&q=75",
        title: "Conference Tables",
        description: "Conference Tables tailored for reliable and high-quality office furniture execution.",
        tags: ["Custom Furniture", "Offices"]
      },
      {
        img: "/images/joinery_office_furniture_r2/storage_walls.jpg",
        title: "Storage Walls & Acoustic Paneling",
        description: "Storage Walls & Acoustic Paneling tailored for reliable and high-quality office furniture execution.",
        tags: ["Bespoke Joinery", "Offices"]
      }
    ]
  },
  "kitchens": {
    title: "Ready to Transform Your Kitchens?",
    tagline: "Metro Retail specializes in office & mall fitouts.",
    heroImage: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Custom Luxury Kitchens Built With Precision & Durability",
    contentDesc: "Your kitchen should be beautiful, functional, and built to last. Metro Retail Solutions designs and manufactures custom kitchens in our in-house joinery facility, integrating premium materials, appliances, and intelligent storage.",
    gallery: [
      {
        img: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&q=80&w=800",
        title: "Modern Kitchen Design",
        description: "Custom luxury kitchens built with precision and high-quality materials.",
        tags: ["Kitchens", "Residential"]
      },
      {
        img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
        title: "Contemporary Kitchen",
        description: "Custom luxury kitchens built with precision and high-quality materials.",
        tags: ["Kitchens", "Residential"]
      },
      {
        img: "https://images.unsplash.com/photo-1701421047855-d7bafd8d6f69?auto=format&fit=crop&q=80&w=800",
        title: "Bespoke Kitchen",
        description: "Custom luxury kitchens built with precision and high-quality materials.",
        tags: ["Kitchens", "Residential"]
      },
      {
        img: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?auto=format&fit=crop&q=80&w=800",
        title: "Luxury Kitchen",
        description: "Custom luxury kitchens built with precision and high-quality materials.",
        tags: ["Kitchens", "Residential"]
      },
      {
        img: "https://images.unsplash.com/photo-1610276173132-c47d148ab626?auto=format&fit=crop&q=80&w=800",
        title: "Minimalist Kitchen",
        description: "Custom luxury kitchens built with precision and high-quality materials.",
        tags: ["Kitchens", "Residential"]
      },
      {
        img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800",
        title: "Classic Kitchen",
        description: "Custom luxury kitchens built with precision and high-quality materials.",
        tags: ["Kitchens", "Residential"]
      }
    ]
  },
  "feature-walls": {
    title: "Ready to Create Your Statement Feature Wall?",
    tagline: "Premium retail showrooms & office fitouts by Metro.",
    heroImage: "/images/LUXURY-MANSION1-copy.jpg",
    contentTitle: "Bespoke Feature Walls Crafted in Al Quoz",
    contentDesc: "Custom feature walls designed and manufactured in our in-house joinery facility. From fluted wood panels to geometric designs, we create statement walls that transform spaces. Every feature wall is crafted with premium materials, precision engineering, and integrated lighting for maximum impact.",
    gallery: [
      {
        img: "/images/joinery_feature_walls_r2/services_joinery_feature_walls_fluted_wood_panels.webp",
        title: "Fluted Wood Panels",
        description: "Fluted Wood Panels tailored for reliable and high-quality feature walls execution.",
        tags: ["Bespoke Joinery", "Retail"]
      },
      {
        img: "/images/joinery_feature_walls_r2/services_joinery_feature_walls_geometric_patterns.webp",
        title: "Geometric Patterns",
        description: "Geometric Patterns tailored for reliable and high-quality feature walls execution.",
        tags: ["Feature Walls", "Retail"]
      },
      {
        img: "/images/joinery_feature_walls_r2/services_joinery_feature_walls_slatted_wood_walls.webp",
        title: "Slatted Wood Walls",
        description: "Slatted Wood Walls tailored for reliable and high-quality feature walls execution.",
        tags: ["Bespoke Joinery", "Retail"]
      },
      {
        img: "/images/joinery_feature_walls_r2/services_joinery_feature_walls_backlit_feature_walls.webp",
        title: "Backlit Feature Walls",
        description: "Backlit Feature Walls tailored for reliable and high-quality feature walls execution.",
        tags: ["Lighting Design", "Retail"]
      },
      {
        img: "/images/joinery_feature_walls_r2/services_joinery_feature_walls_veneer_feature_walls.webp",
        title: "Veneer Feature Walls",
        description: "Veneer Feature Walls tailored for reliable and high-quality feature walls execution.",
        tags: ["Decorative Finishes", "Retail"]
      },
      {
        img: "/images/joinery_feature_walls_r2/services_joinery_feature_walls_mixed_material_walls.webp",
        title: "Mixed Material Walls",
        description: "Mixed Material Walls tailored for reliable and high-quality feature walls execution.",
        tags: ["Feature Walls", "Retail"]
      }
    ]
  },
  "bar-counters-vanities": {
    title: "Ready to Create Your Custom Bar or Vanity?",
    tagline: "Metro Retail: Expert office and retail fitout works.",
    heroImage: "/images/LUXURY-MANSION1-copy.jpg",
    contentTitle: "Bespoke Bar Counters & Vanities Crafted in Al Quoz",
    contentDesc: "Custom bar counters and bathroom vanities designed and manufactured in our in-house joinery facility. From luxury home bars to elegant bathroom vanities, we create statement pieces with premium materials, integrated lighting, and flawless finishes. Every piece is crafted to your exact specifications.",
    gallery: [
      {
        img: "/images/joinery_bar_counters_vanities_r2/bar_counters.jpg",
        title: "Home Bar Counters",
        description: "Home Bar Counters tailored for reliable and high-quality bar counters & vanities execution.",
        tags: ["Bespoke Joinery", "Hospitality"]
      },
      {
        img: "/images/joinery_bar_counters_vanities_r2/residential_vanities_waterproof_finishes.webp",
        title: "Bathroom Vanities",
        description: "Bathroom Vanities tailored for reliable and high-quality bar counters & vanities execution.",
        tags: ["Bespoke Joinery", "Hospitality"]
      },
      {
        img: "/images/joinery_bar_counters_vanities_r2/commercial_bar_counters.jpg",
        title: "Commercial Bar Counters",
        description: "Commercial Bar Counters tailored for reliable and high-quality bar counters & vanities execution.",
        tags: ["Bespoke Joinery", "Hospitality"]
      },
      {
        img: "/images/joinery_bar_counters_vanities_r2/powder_room_vanities.jpg",
        title: "Powder Room Vanities",
        description: "Powder Room Vanities tailored for reliable and high-quality bar counters & vanities execution.",
        tags: ["Bespoke Joinery", "Hospitality"]
      },
      {
        img: "/images/joinery_bar_counters_vanities_r2/wet_bar_units.jpg",
        title: "Wet Bar Units",
        description: "Wet Bar Units tailored for reliable and high-quality bar counters & vanities execution.",
        tags: ["Bespoke Joinery", "Hospitality"]
      },
      {
        img: "/images/joinery_bar_counters_vanities_r2/custom_counter_tops.jpg",
        title: "Custom Countertops",
        description: "Custom Countertops tailored for reliable and high-quality bar counters & vanities execution.",
        tags: ["Bespoke Joinery", "Hospitality"]
      }
    ]
  },
  "default": {
    title: "Ready to Create Your Custom Space?",
    tagline: "Delivering premium retail showrooms & office fitouts.",
    heroImage: "/images/joinery/HALO-intro-section.webp",
    contentTitle: "Bespoke Solutions Crafted in Al Quoz",
    contentDesc: "Custom pieces designed and manufactured in our in-house joinery facility. We create statement pieces with premium materials, integrated lighting, and flawless finishes. Every piece is crafted to your exact specifications.",
    gallery: [
      {
        img: "/images/joinery_bar_counters_vanities_r2/bar_counters.jpg",
        title: "Premium Installation",
        tags: ["Bespoke Joinery", "Quality"]
      },
      {
        img: "/images/joinery_bar_counters_vanities_r2/commercial_bar_counters.jpg",
        title: "Expert Craftsmanship",
        tags: ["Bespoke Joinery", "Quality"]
      },
      {
        img: "/images/joinery_bar_counters_vanities_r2/residential_vanities_waterproof_finishes.webp",
        title: "Flawless Finishes",
        tags: ["Bespoke Joinery", "Quality"]
      }
    ]
  },
  "retail-fitout": {
    title: "Ready to Transform Your Retail Space?",
    tagline: "Metro Retail specializes in office & showroom fitouts.",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
    desc: ["From flagship stores to boutique pop-ups, Metro Retail delivers comprehensive retail fitout solutions that elevate brand presence and maximize customer engagement.", "We handle every aspect of retail interior design and fitout."],
    stats: [
      { label: "Projects Completed", value: "150+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Design Experts", value: "20+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your brand guidelines and space requirements." }, { "step": "Design & Planning", "desc": "Creating retail layouts and 3D visual merchandising plans." }, { "step": "Execution Phase", "desc": "Our team executes the fitout flawlessly." }, { "step": "Final Handover", "desc": "Quality checks and handover for launch." }],
    gallery: [
      {
        slug: "retail-store-design",
        img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800",
        title: "Retail Store Design",
        description: "Retail Store Design services",
        tags: ["Retail", "Design"],
        bullets: ["Store layout planning", "Brand integration", "Custom fixtures"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "luxury-retail-interior-design",
        img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
        title: "Luxury Retail Interior Design",
        description: "Luxury Retail Interior Design services",
        tags: ["Luxury", "Retail"],
        bullets: ["Premium finishes", "High-end fixtures", "Lighting design"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "store-fitout-company",
        img: "https://images.unsplash.com/photo-1555529902-5261145633bf?auto=format&fit=crop&q=80&w=800",
        title: "Store Fitout Company",
        description: "Store Fitout Company services",
        tags: ["Fitout", "Retail"],
        bullets: ["Turnkey fitout", "MEP works", "Joinery"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "retail-fitout-services",
        img: "https://images.unsplash.com/photo-1581373449483-374456832f05?auto=format&fit=crop&q=80&w=800",
        title: "Retail Fitout Services",
        description: "Retail Fitout Services",
        tags: ["Fitout", "Services"],
        bullets: ["Comprehensive solutions", "Fast execution", "Quality control"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "boutique-interior-design",
        img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800",
        title: "Boutique Interior Design",
        description: "Boutique Interior Design services",
        tags: ["Boutique", "Design"],
        bullets: ["Unique concepts", "Bespoke furniture", "Intimate spaces"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "flagship-store-design",
        img: "https://images.unsplash.com/photo-1558769132-cb1fac08b14b?auto=format&fit=crop&q=80&w=800",
        title: "Flagship Store Design",
        description: "Flagship Store Design services",
        tags: ["Flagship", "Design"],
        bullets: ["Iconic spaces", "Brand storytelling", "Innovative materials"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "pop-up-store-design-services",
        img: "https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?auto=format&fit=crop&q=80&w=800",
        title: "Pop-Up Store Design Services",
        description: "Pop-Up Store Design Services",
        tags: ["Pop-Up", "Design"],
        bullets: ["Modular fixtures", "Quick installation", "High impact"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "retail-space-design-experts",
        img: "https://images.unsplash.com/photo-1556740738-f6a46e114ece?auto=format&fit=crop&q=80&w=800",
        title: "Retail Space Design Experts",
        description: "Retail Space Design Experts services",
        tags: ["Retail", "Experts"],
        bullets: ["Strategic planning", "Customer flow", "Conversion optimization"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "retail-commercial-fitout",
        img: "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80&w=800",
        title: "Retail & Commercial Fitout",
        description: "Retail & Commercial Fitout services",
        tags: ["Commercial", "Fitout"],
        bullets: ["End-to-end execution", "Authority approvals", "Project management"],
        buttonText: "VIEW DETAILS →"
      }
    ]
  },
  "office-fitout": {
    title: "Ready to Transform Your Office?",
    tagline: "Expert office fitouts & retail showrooms by Metro.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    desc: ["We create modern, inspiring office interiors that boost productivity and reflect your corporate identity.", "From open-plan workspaces to luxury executive suites, we handle turnkey office fitouts."],
    stats: [
      { label: "Projects Completed", value: "200+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Design Experts", value: "20+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your workspace requirements." }, { "step": "Design & Planning", "desc": "Creating office layouts and 3D designs." }, { "step": "Execution Phase", "desc": "Our team executes the fitout flawlessly." }, { "step": "Final Handover", "desc": "Quality checks and handover." }],
    gallery: [
      {
        slug: "office-interior-design",
        img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
        title: "Office Interior Design",
        description: "Office Interior Design services",
        tags: ["Office", "Design"],
        bullets: ["Space planning", "Ergonomic furniture", "Lighting"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "modern-office-interior-design",
        img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
        title: "Modern Office Interior Design",
        description: "Modern Office Interior Design services",
        tags: ["Modern", "Office"],
        bullets: ["Contemporary aesthetics", "Smart tech integration", "Collaborative zones"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "commercial-office-design",
        img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800",
        title: "Commercial Office Design",
        description: "Commercial Office Design services",
        tags: ["Commercial", "Office"],
        bullets: ["Corporate identity", "Efficient layouts", "Acoustic solutions"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "corporate-office-interior",
        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
        title: "Corporate Office Interior",
        description: "Corporate Office Interior services",
        tags: ["Corporate", "Interior"],
        bullets: ["Executive suites", "Boardrooms", "Reception areas"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "turnkey-office-fitout",
        img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
        title: "Turnkey Office Fitout",
        description: "Turnkey Office Fitout services",
        tags: ["Turnkey", "Fitout"],
        bullets: ["End-to-end execution", "MEP & IT", "Joinery"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "office-renovation-services",
        img: "https://images.unsplash.com/photo-1531973486364-5fa64260d752?auto=format&fit=crop&q=80&w=800",
        title: "Office Renovation Services",
        description: "Office Renovation Services",
        tags: ["Renovation", "Office"],
        bullets: ["Workspace upgrades", "Minimal disruption", "Modernization"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "luxury-office-design",
        img: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=800",
        title: "Luxury Office Design",
        description: "Luxury Office Design services",
        tags: ["Luxury", "Office"],
        bullets: ["Premium materials", "Bespoke furniture", "Executive comfort"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "office-space-planning",
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
        title: "Office Space Planning",
        description: "Office Space Planning services",
        tags: ["Space Planning", "Office"],
        bullets: ["Workflow optimization", "Zoning", "Compliance"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "workspace-interior-solutions",
        img: "https://images.unsplash.com/photo-1582653291997-059a56958d4a?auto=format&fit=crop&q=80&w=800",
        title: "Workspace Interior Solutions",
        description: "Workspace Interior Solutions",
        tags: ["Workspace", "Solutions"],
        bullets: ["Flexible seating", "Wellness focus", "Biophilic design"],
        buttonText: "VIEW DETAILS →"
      }
    ]
  },
  "restaurant-fitout": {
    title: "Ready to Transform Your Restaurant?",
    tagline: "Metro Retail builds premium office & mall fitouts.",
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
    desc: ["We specialize in creating immersive F&B environments, from cozy cafes to luxury fine dining restaurants.", "Our turnkey restaurant fitout services cover everything from front-of-house aesthetics to commercial kitchen MEP."],
    stats: [
      { label: "Projects Completed", value: "100+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Design Experts", value: "20+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your culinary concept." }, { "step": "Design & Planning", "desc": "Creating layouts and 3D designs." }, { "step": "Execution Phase", "desc": "Our team executes the fitout flawlessly." }, { "step": "Final Handover", "desc": "Quality checks and handover." }],
    gallery: [
      {
        slug: "restaurant-interior-design",
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
        title: "Restaurant Interior Design",
        description: "Restaurant Interior Design services",
        tags: ["Restaurant", "Design"],
        bullets: ["Concept development", "Dining flow", "Lighting"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "cafe-interior-design-services",
        img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800",
        title: "Cafe Interior Design Services",
        description: "Cafe Interior Design Services",
        tags: ["Cafe", "Design"],
        bullets: ["Cozy atmosphere", "Counter design", "Seating layouts"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "restaurant-fitout-company",
        img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
        title: "Restaurant Fitout Company",
        description: "Restaurant Fitout Company services",
        tags: ["Fitout", "Restaurant"],
        bullets: ["Kitchen MEP", "Turnkey execution", "Joinery"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "fine-dining-interior-design",
        img: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800",
        title: "Fine Dining Interior Design",
        description: "Fine Dining Interior Design services",
        tags: ["Fine Dining", "Design"],
        bullets: ["Luxury finishes", "Acoustic comfort", "Ambient lighting"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "luxury-restaurant-design",
        img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
        title: "Luxury Restaurant Design",
        description: "Luxury Restaurant Design services",
        tags: ["Luxury", "Restaurant"],
        bullets: ["Premium materials", "Bespoke furniture", "Exclusive atmosphere"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "fast-food-restaurant-design",
        img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
        title: "Fast Food Restaurant Design",
        description: "Fast Food Restaurant Design services",
        tags: ["Fast Food", "Design"],
        bullets: ["High traffic flow", "Durable materials", "Vibrant branding"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "food-court-interior-design",
        img: "https://images.unsplash.com/photo-1525648199593-ce5cafe386d8?auto=format&fit=crop&q=80&w=800",
        title: "Food Court Interior Design",
        description: "Food Court Interior Design services",
        tags: ["Food Court", "Design"],
        bullets: ["Space optimization", "Shared seating", "Vendor integration"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "restaurant-renovation-experts",
        img: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=800",
        title: "Restaurant Renovation Experts",
        description: "Restaurant Renovation Experts",
        tags: ["Renovation", "Restaurant"],
        bullets: ["Quick turnaround", "Concept refresh", "Kitchen upgrades"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "f-b-interior-design",
        img: "https://images.unsplash.com/photo-1551632436-421b5b4cc601?auto=format&fit=crop&q=80&w=800",
        title: "F&B Interior Design",
        description: "F&B Interior Design services",
        tags: ["F&B", "Design"],
        bullets: ["Beverage stations", "Bar design", "Dining flow"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "turnkey-restaurant-fitout",
        img: "https://images.unsplash.com/photo-1528605248644-14bf524458f3?auto=format&fit=crop&q=80&w=800",
        title: "Turnkey Restaurant Fitout",
        description: "Turnkey Restaurant Fitout services",
        tags: ["Turnkey", "Fitout"],
        bullets: ["End-to-end solutions", "Authority approvals", "Project management"],
        buttonText: "VIEW DETAILS →"
      }
    ]
  },
  "commercial-contractors": {
    title: "Ready for your Turnkey Project?",
    tagline: "Expert retail fitout works for showrooms and malls.",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
    desc: ["We offer complete turnkey interior solutions and commercial contracting for a seamless project delivery.", "From concept to handover, our team ensures quality, compliance, and timely execution."],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Design Experts", value: "20+", icon: ShieldCheck }
    ],
    process: [{ "step": "Initial Consultation", "desc": "Understanding your project scope." }, { "step": "Design & Planning", "desc": "Creating layouts and engineering plans." }, { "step": "Execution Phase", "desc": "Our team executes the fitout flawlessly." }, { "step": "Final Handover", "desc": "Quality checks and handover." }],
    gallery: [
      {
        slug: "commercial-interior-design",
        img: "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?auto=format&fit=crop&q=80&w=800",
        title: "Commercial Interior Design",
        description: "Commercial Interior Design services",
        tags: ["Commercial", "Design"],
        bullets: ["Space planning", "Aesthetics", "Functionality"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "commercial-fitout-company",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
        title: "Commercial Fitout Company",
        description: "Commercial Fitout Company services",
        tags: ["Fitout", "Commercial"],
        bullets: ["Turnkey execution", "MEP works", "Joinery"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "interior-design-build",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
        title: "Interior Design & Build",
        description: "Interior Design & Build services",
        tags: ["Design", "Build"],
        bullets: ["Single point of contact", "Seamless delivery", "Cost control"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "turnkey-interior-solutions",
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
        title: "Turnkey Interior Solutions",
        description: "Turnkey Interior Solutions",
        tags: ["Turnkey", "Solutions"],
        bullets: ["End-to-end management", "Procurement", "Installation"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "commercial-interior-contractors",
        img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
        title: "Commercial Interior Contractors",
        description: "Commercial Interior Contractors services",
        tags: ["Contractors", "Commercial"],
        bullets: ["Civil works", "MEP", "Quality assurance"],
        buttonText: "VIEW DETAILS →"
      }
    ]
  }
};

Object.assign(NESTED_SERVICE_DATA, {
  "texture-paints": {
    title: "Ready to Add Texture to Your Walls?",
    tagline: "Metro Retail delivers office and showroom fitouts.",
    heroImage: "/images/decorative_paint_r2/services_decorative_paint_texture_paints_stucco_finishes.webp",
    contentTitle: "Luxury Textured Finishes",
    contentDesc: "Add depth, movement, and visual character to premium interiors with our luxury textured finishes.",
    gallery: [
      {
        img: "/images/decorative_paint_r2/services_decorative_paint_texture_paints_stucco_finishes.webp",
        title: "Texture Paints",
        tags: ["Sand Texture", "Stucco Finish"]
      }
    ]
  },
  "venetian-plasters": {
    title: "Ready to Apply Venetian Plaster?",
    tagline: "Metro Retail creates premium offices and showrooms.",
    heroImage: "/images/decorative_paint_r2/textured_venetian.webp",
    contentTitle: "Timeless Italian Elegance",
    contentDesc: "Smooth polished plaster finishes that bring timeless Italian elegance to any space.",
    gallery: [
      {
        img: "/images/decorative_paint_r2/textured_venetian.webp",
        title: "Venetian Plasters",
        tags: ["Marmo Plaster", "Polished Plaster"]
      }
    ]
  },
  "feature-walls-paint": {
    title: "Ready to Create a Feature Wall?",
    tagline: "Expert retail and office fitouts by Metro Retail!",
    heroImage: "/images/decorative_paint_r2/services_decorative_paint_lime_wash_feature_wall_lime_wash.webp",
    contentTitle: "Statement Feature Walls",
    contentDesc: "Statement feature walls designed to anchor and elevate residential and commercial interiors.",
    gallery: [
      {
        img: "/images/decorative_paint_r2/services_decorative_paint_lime_wash_feature_wall_lime_wash.webp",
        title: "Feature Walls",
        tags: ["Accent Wall", "Statement Wall"]
      }
    ]
  },
  "limewash": {
    title: "Ready to Apply Limewash?",
    tagline: "Metro Retail specializes in office & mall fitouts.",
    heroImage: "/images/decorative_paint_r2/colored_lime_wash.webp",
    contentTitle: "Soft Matte Limewash Finishes",
    contentDesc: "Soft matte limewash finishes with natural tone variation and warmth for organic aesthetics.",
    gallery: [
      {
        img: "/images/decorative_paint_r2/colored_lime_wash.webp",
        title: "Limewash",
        tags: ["Limewash Paint", "Matte Lime"]
      }
    ]
  },
  "brick-finish": {
    title: "Ready for a Brick Finish?",
    tagline: "Premium retail showrooms & office fitouts by Metro.",
    heroImage: "/images/decorative_paint_r2/services_decorative_paint_brick_finishes_colored_brick.webp",
    contentTitle: "Decorative Brick-Effect Finishes",
    contentDesc: "Decorative brick-effect finishes that add raw texture and urban charm to interiors.",
    gallery: [
      {
        img: "/images/decorative_paint_r2/services_decorative_paint_brick_finishes_colored_brick.webp",
        title: "Brick Finish",
        tags: ["Exposed Brick", "Faux Brick"]
      }
    ]
  },
  "stencil-painting": {
    title: "Ready for Stencil Painting?",
    tagline: "Metro Retail: Expert office and retail fitout works.",
    heroImage: "/images/decorative_paint_r2/custom_stencils.webp",
    contentTitle: "Custom Stencil Patterns",
    contentDesc: "Custom stencil patterns for artistic walls with precise repeat detailing and visual impact.",
    gallery: [
      {
        img: "/images/decorative_paint_r2/custom_stencils.webp",
        title: "Stencil Painting",
        tags: ["Geometric Stencil", "Moroccan Pattern"]
      }
    ]
  },
  "pearl-finish": {
    title: "Ready for a Pearl Finish?",
    tagline: "Delivering premium retail showrooms & office fitouts.",
    heroImage: "/images/decorative_paint_r2/soft_pearl.webp",
    contentTitle: "Subtle Pearl Sheen",
    contentDesc: "Subtle pearl sheen that creates elegant light play and sophistication on walls.",
    gallery: [
      {
        img: "/images/decorative_paint_r2/soft_pearl.webp",
        title: "Pearl Finish",
        tags: ["Pearl Sheen", "Iridescent Finish"]
      }
    ]
  },
  "artistic-finishes": {
    title: "Ready for Artistic Finishes?",
    tagline: "Metro Retail specializes in office & showroom fitouts.",
    heroImage: "/images/decorative_paint_r2/artistic_patterns.webp",
    contentTitle: "Bespoke Decorative Finishes",
    contentDesc: "Bespoke decorative finishes crafted by artisan painters for unique premium interiors.",
    gallery: [
      {
        img: "/images/decorative_paint_r2/artistic_patterns.webp",
        title: "Artistic Finishes",
        tags: ["Hand Painted", "Faux Finish"]
      }
    ]
  },
  "custom-consoles": {
    title: "Ready to Create Custom Consoles?",
    tagline: "Expert office fitouts & retail showrooms by Metro.",
    heroImage: "/images/customised_furniture_dubai_r2/tv-units-3.webp",
    contentTitle: "Custom Consoles for Every Sector",
    contentDesc: "We design and manufacture premium custom consoles tailored to your exact requirements, from retail cash counters and cafe service stations to luxury residential TV and sofa consoles.",
    gallery: [
      {
        img: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80",
        title: "Display Consoles (Retail)",
        description: "Premium display consoles crafted for retail environments.",
        tags: ["Retail", "Display"],
        bullets: ["Retail display units", "Premium finish", "Custom sizing"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
        title: "Retail Cash Counter",
        description: "Bespoke cash counters that blend functionality with brand identity.",
        tags: ["Retail", "Counters"],
        bullets: ["POS integration", "Durable materials", "Brand matching"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
        title: "Office Storage Consoles",
        description: "Elegant office storage consoles that maximize organization and aesthetics.",
        tags: ["Commercial", "Storage"],
        bullets: ["Ergonomic design", "Secure storage", "Modern aesthetics"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1556910103-1c02745a8728?auto=format&fit=crop&q=80",
        title: "Cafe Service Counter",
        description: "Custom cafe service counters built for high traffic and aesthetic appeal.",
        tags: ["Restaurant", "Counters"],
        bullets: ["Equipment integration", "Hygienic surfaces", "Custom layouts"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1572116469696-31de0f17ce67?auto=format&fit=crop&q=80",
        title: "Bar Console",
        description: "Luxury bar consoles for restaurants and hospitality venues.",
        tags: ["Restaurant", "Bar"],
        bullets: ["Premium materials", "Lighting integration", "Bespoke joinery"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80",
        title: "Showroom Display Console",
        description: "Efficient and stylish display stations for showroom environments.",
        tags: ["Commercial", "Service"],
        bullets: ["Hidden storage", "Durable worktops", "Custom finishes"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "/images/customised_furniture_dubai_r2/tv-units-3.webp",
        title: "Sofa Console",
        description: "Elegant sofa consoles designed to complement luxury residential interiors.",
        tags: ["Residential", "Furniture"],
        bullets: ["Custom dimensions", "Premium veneers", "Seamless design"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "/images/joinery_tv_units_r2/tv_unit_led_backlight.jpg",
        title: "TV Console",
        description: "Bespoke TV consoles with integrated cable management and modern styling.",
        tags: ["Residential", "Media"],
        bullets: ["Cable management", "Floating options", "Integrated lighting"],
        buttonText: "VIEW DETAILS →"
      }
    ]
  },
  "custom-doors": {
    title: "Ready to Create Custom Doors?",
    tagline: "Metro Retail builds premium office & mall fitouts.",
    heroImage: "/images/customised_furniture_dubai_r2/Door3.jpg",
    contentTitle: "Custom Doors for Every Sector",
    contentDesc: "We design and manufacture premium custom doors tailored to your exact requirements, from luxury villa entrances to corporate boardroom glass doors.",
    gallery: [
      {
        img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80",
        title: "Boutique Entrance Door",
        description: "Premium entrance doors crafted for high-end retail environments.",
        tags: ["Retail", "Doors"],
        bullets: ["Brand matching", "Premium finish", "Custom sizing"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
        title: "Retail Storefront Door",
        description: "Bespoke storefront doors that blend security with brand identity.",
        tags: ["Retail", "Doors"],
        bullets: ["High visibility", "Durable materials", "Security integration"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80",
        title: "Corporate Office Door",
        description: "Elegant office doors that maximize privacy and aesthetics.",
        tags: ["Commercial", "Doors"],
        bullets: ["Soundproofing", "Secure access", "Modern aesthetics"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
        title: "Boardroom Glass Door",
        description: "Custom glass doors built for corporate boardrooms and meeting spaces.",
        tags: ["Commercial", "Glass"],
        bullets: ["Acoustic seals", "Frosted options", "Premium hardware"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
        title: "Restaurant Main Entrance",
        description: "Luxury entrance doors for restaurants and hospitality venues.",
        tags: ["Restaurant", "Entrance"],
        bullets: ["Premium materials", "Welcoming design", "Bespoke joinery"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80",
        title: "Kitchen Saloon Doors",
        description: "Efficient and stylish saloon doors for restaurant kitchens.",
        tags: ["Restaurant", "Service"],
        bullets: ["Two-way swing", "Durable finish", "Kick plates"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "/images/customised_furniture_dubai_r2/Door3.jpg",
        title: "Luxury Villa Entrance Door",
        description: "Elegant main entrance doors designed to complement luxury residential homes.",
        tags: ["Residential", "Entrance"],
        bullets: ["Custom dimensions", "Solid wood", "High security"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
        title: "Bedroom Solid Wood Door",
        description: "Bespoke interior doors with premium styling and sound reduction.",
        tags: ["Residential", "Interior"],
        bullets: ["Acoustic core", "Custom finishes", "Luxury hardware"],
        buttonText: "VIEW DETAILS →"
      }
    ]
  },
  "custom-sofas": {
    title: "Ready to Create Custom Sofas?",
    tagline: "Expert retail fitout works for showrooms and malls.",
    heroImage: "/images/customised_furniture_dubai_r2/sofa.png",
    contentTitle: "Custom Sofas for Every Sector",
    contentDesc: "We design and manufacture premium custom sofas tailored to your exact requirements, from executive lounges to luxury residential sectionals.",
    gallery: [
      {
        img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80",
        title: "Boutique Lounge Sofa",
        description: "Premium lounge sofas crafted for luxury retail environments.",
        tags: ["Retail", "Lounge"],
        bullets: ["Brand matching fabrics", "Premium comfort", "Custom sizing"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
        title: "Fitting Room Seating",
        description: "Bespoke seating that blends comfort with boutique identity.",
        tags: ["Retail", "Seating"],
        bullets: ["Compact design", "Durable upholstery", "Brand aesthetics"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80",
        title: "Office Reception Sofa",
        description: "Elegant reception sofas that maximize comfort and corporate aesthetics.",
        tags: ["Commercial", "Reception"],
        bullets: ["Ergonomic design", "High-traffic fabrics", "Modern styling"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80",
        title: "Executive Lounge Sofa",
        description: "Custom lounge sofas built for corporate boardrooms and VIP spaces.",
        tags: ["Commercial", "Executive"],
        bullets: ["Premium leather", "Deep seating", "Luxury finish"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
        title: "Cafe Banquette Seating",
        description: "Custom banquette seating for restaurants and cafes.",
        tags: ["Restaurant", "Banquette"],
        bullets: ["Space optimization", "Easy-clean fabrics", "Bespoke joinery"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80",
        title: "Restaurant Booth Sofa",
        description: "Comfortable and stylish booth seating for dining environments.",
        tags: ["Restaurant", "Booth"],
        bullets: ["Privacy design", "Durable foam", "Custom layouts"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "/images/customised_furniture_dubai_r2/sofa.png",
        title: "Living Room Sectional Sofa",
        description: "Elegant sectional sofas designed to complement luxury residential interiors.",
        tags: ["Residential", "Sectional"],
        bullets: ["Custom dimensions", "Premium textiles", "Modular design"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80",
        title: "Bedroom Chaise Lounge",
        description: "Bespoke chaise lounges with premium styling and absolute comfort.",
        tags: ["Residential", "Lounge"],
        bullets: ["Ergonomic curves", "Custom upholstery", "Luxury detailing"],
        buttonText: "VIEW DETAILS →"
      }
    ]
  },
  "custom-tables": {
    title: "Ready to Create Custom Tables?",
    tagline: "Metro Retail delivers office and showroom fitouts.",
    heroImage: "/images/customised_furniture_dubai_r2/customized_table.png",
    contentTitle: "Custom Tables for Every Sector",
    contentDesc: "We design and manufacture premium custom tables tailored to your exact requirements, from retail display tables to luxury dining tables.",
    gallery: [
      {
        img: "https://images.unsplash.com/photo-1441984904996-e0b6edfe0b14?auto=format&fit=crop&q=80",
        title: "Retail Display Table",
        description: "Premium display tables crafted for high-end retail environments.",
        tags: ["Retail", "Display"],
        bullets: ["Brand matching", "Premium finish", "Custom sizing"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
        title: "Boutique Merchandising Table",
        description: "Bespoke merchandising tables that blend functionality with brand identity.",
        tags: ["Retail", "Merchandising"],
        bullets: ["Tiered display", "Durable materials", "Integrated lighting"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80",
        title: "Office Conference Table",
        description: "Elegant conference tables that maximize productivity and aesthetics.",
        tags: ["Commercial", "Conference"],
        bullets: ["Power integration", "Cable management", "Modern aesthetics"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
        title: "Executive Desk Table",
        description: "Custom executive desks built for corporate leaders and VIP spaces.",
        tags: ["Commercial", "Executive"],
        bullets: ["Premium veneers", "Leather inserts", "Bespoke joinery"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
        title: "Restaurant Dining Table",
        description: "Luxury dining tables for restaurants and hospitality venues.",
        tags: ["Restaurant", "Dining"],
        bullets: ["Premium materials", "Durable finish", "Custom sizing"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80",
        title: "Cafe Bistro Table",
        description: "Efficient and stylish bistro tables for cafe environments.",
        tags: ["Restaurant", "Cafe"],
        bullets: ["Metal bases", "Marble tops", "Outdoor options"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "/images/customised_furniture_dubai_r2/customized_table.png",
        title: "Luxury Dining Table",
        description: "Elegant dining tables designed to complement luxury residential homes.",
        tags: ["Residential", "Dining"],
        bullets: ["Custom dimensions", "Solid wood/marble", "Statement design"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
        title: "Living Room Coffee Table",
        description: "Bespoke coffee tables with premium styling and functional art appeal.",
        tags: ["Residential", "Living"],
        bullets: ["Mixed materials", "Custom finishes", "Unique silhouettes"],
        buttonText: "VIEW DETAILS →"
      }
    ]
  },
  "custom-beds": {
    title: "Ready to Create Custom Beds?",
    tagline: "Metro Retail creates premium offices and showrooms.",
    heroImage: "/images/customised_furniture_dubai_r2/customized-bed.png",
    contentTitle: "Custom Beds for Every Sector",
    contentDesc: "We design and manufacture premium custom beds tailored to your exact requirements, from luxury hotel suites to master bedroom statements.",
    gallery: [
      {
        img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80",
        title: "Furniture Showroom Display Bed",
        description: "Premium display beds crafted for high-end retail environments.",
        tags: ["Retail", "Display"],
        bullets: ["Brand matching", "Premium finish", "Showroom focus"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80",
        title: "Boutique Retail Bed",
        description: "Bespoke retail beds that blend styling with brand identity.",
        tags: ["Retail", "Boutique"],
        bullets: ["Visual merchandising", "Durable frame", "Custom headboards"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80",
        title: "Luxury Hotel Suite Bed",
        description: "Elegant suite beds that maximize guest comfort and room aesthetics.",
        tags: ["Commercial", "Hospitality"],
        bullets: ["Integrated lighting", "Power outlets", "Commercial durability"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80",
        title: "Boutique Hotel Platform Bed",
        description: "Custom platform beds built for modern boutique hotels.",
        tags: ["Commercial", "Hospitality"],
        bullets: ["Floating design", "Minimalist aesthetic", "Bespoke joinery"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
        title: "Beach Club Cabana Daybed",
        description: "Luxury daybeds for resorts and hospitality venues.",
        tags: ["Restaurant", "Hospitality"],
        bullets: ["Outdoor fabrics", "Weather resistant", "Oversized comfort"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80",
        title: "Lounge VIP Sunbed",
        description: "Efficient and stylish sunbeds for poolside environments.",
        tags: ["Restaurant", "Lounge"],
        bullets: ["Premium teak/metal", "Quick-dry foam", "Custom finishes"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "/images/customised_furniture_dubai_r2/customized-bed.png",
        title: "Master Bedroom King Bed",
        description: "Elegant king beds designed to complement luxury residential homes.",
        tags: ["Residential", "Bedroom"],
        bullets: ["Custom dimensions", "Oversized headboards", "Premium upholstery"],
        buttonText: "VIEW DETAILS →"
      },
      {
        img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80",
        title: "Upholstered Guest Bed",
        description: "Bespoke guest beds with premium styling and welcoming comfort.",
        tags: ["Residential", "Bedroom"],
        bullets: ["Storage options", "Custom fabrics", "Space-saving design"],
        buttonText: "VIEW DETAILS →"
      }
    ]
  },
  "microcement-flooring-services": {
    title: "Ready for Microcement Flooring?",
    tagline: "Expert retail and office fitouts by Metro Retail!",
    heroImage: "https://images.unsplash.com/photo-1612404730960-5c71577fca11?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Microcement Flooring Services",
    contentDesc: "Seamless microcement flooring for premium aesthetics.",
    gallery: [
      {
        img: "https://images.unsplash.com/photo-1612404730960-5c71577fca11?auto=format&fit=crop&q=80&w=800",
        title: "Microcement Flooring",
        tags: ["Microcement", "Flooring"]
      }
    ]
  },
  "retail-store-design": {
    title: "Ready for Retail Store Design?",
    tagline: "Metro Retail specializes in office & mall fitouts.",
    heroImage: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Retail Store Design",
    contentDesc: "Retail Store Design services",
    gallery: [{ img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800", title: "Retail Store Design" }]
  },
  "luxury-retail-interior-design": {
    title: "Ready for Luxury Retail Interior Design?",
    tagline: "Premium retail showrooms & office fitouts by Metro.",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Luxury Retail Interior Design",
    contentDesc: "Luxury Retail Interior Design services",
    gallery: [{ img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800", title: "Luxury Retail Interior Design" }]
  },
  "store-fitout-company": {
    title: "Ready for a Store Fitout Company?",
    tagline: "Metro Retail: Expert office and retail fitout works.",
    heroImage: "https://images.unsplash.com/photo-1555529902-5261145633bf?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Store Fitout Company",
    contentDesc: "Store Fitout Company services",
    gallery: [{ img: "https://images.unsplash.com/photo-1555529902-5261145633bf?auto=format&fit=crop&q=80&w=800", title: "Store Fitout Company" }]
  },
  "retail-fitout-services": {
    title: "Ready for Retail Fitout Services?",
    tagline: "Delivering premium retail showrooms & office fitouts.",
    heroImage: "https://images.unsplash.com/photo-1581373449483-374456832f05?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Retail Fitout Services",
    contentDesc: "Retail Fitout Services",
    gallery: [{ img: "https://images.unsplash.com/photo-1581373449483-374456832f05?auto=format&fit=crop&q=80&w=800", title: "Retail Fitout Services" }]
  },
  "boutique-interior-design": {
    title: "Ready for Boutique Interior Design?",
    tagline: "Metro Retail specializes in office & showroom fitouts.",
    heroImage: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Boutique Interior Design",
    contentDesc: "Boutique Interior Design services",
    gallery: [{ img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800", title: "Boutique Interior Design" }]
  },
  "flagship-store-design": {
    title: "Ready for Flagship Store Design?",
    tagline: "Expert office fitouts & retail showrooms by Metro.",
    heroImage: "https://images.unsplash.com/photo-1558769132-cb1fac08b14b?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Flagship Store Design",
    contentDesc: "Flagship Store Design services",
    gallery: [{ img: "https://images.unsplash.com/photo-1558769132-cb1fac08b14b?auto=format&fit=crop&q=80&w=800", title: "Flagship Store Design" }]
  },
  "pop-up-store-design-services": {
    title: "Ready for Pop-Up Store Design Services?",
    tagline: "Metro Retail builds premium office & mall fitouts.",
    heroImage: "https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Pop-Up Store Design Services",
    contentDesc: "Pop-Up Store Design Services",
    gallery: [{ img: "https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?auto=format&fit=crop&q=80&w=800", title: "Pop-Up Store Design Services" }]
  },
  "retail-space-design-experts": {
    title: "Ready for Retail Space Design Experts?",
    tagline: "Expert retail fitout works for showrooms and malls.",
    heroImage: "https://images.unsplash.com/photo-1556740738-f6a46e114ece?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Retail Space Design Experts",
    contentDesc: "Retail Space Design Experts services",
    gallery: [{ img: "https://images.unsplash.com/photo-1556740738-f6a46e114ece?auto=format&fit=crop&q=80&w=800", title: "Retail Space Design Experts" }]
  },
  "retail-commercial-fitout": {
    title: "Ready for Retail & Commercial Fitout?",
    tagline: "Metro Retail delivers office and showroom fitouts.",
    heroImage: "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Retail & Commercial Fitout",
    contentDesc: "Retail & Commercial Fitout services",
    gallery: [{ img: "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80&w=800", title: "Retail & Commercial Fitout" }]
  },
  "office-interior-design": {
    title: "Ready for Office Interior Design?",
    tagline: "Metro Retail creates premium offices and showrooms.",
    heroImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Office Interior Design",
    contentDesc: "Office Interior Design services",
    gallery: [{ img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800", title: "Office Interior Design" }]
  },
  "modern-office-interior-design": {
    title: "Ready for Modern Office Interior Design?",
    tagline: "Expert retail and office fitouts by Metro Retail!",
    heroImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Modern Office Interior Design",
    contentDesc: "Modern Office Interior Design services",
    gallery: [{ img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800", title: "Modern Office Interior Design" }]
  },
  "commercial-office-design": {
    title: "Ready for Commercial Office Design?",
    tagline: "Metro Retail specializes in office & mall fitouts.",
    heroImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Commercial Office Design",
    contentDesc: "Commercial Office Design services",
    gallery: [{ img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800", title: "Commercial Office Design" }]
  },
  "corporate-office-interior": {
    title: "Ready for Corporate Office Interior?",
    tagline: "Premium retail showrooms & office fitouts by Metro.",
    heroImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Corporate Office Interior",
    contentDesc: "Corporate Office Interior services",
    gallery: [{ img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800", title: "Corporate Office Interior" }]
  },
  "turnkey-office-fitout": {
    title: "Ready for Turnkey Office Fitout?",
    tagline: "Metro Retail: Expert office and retail fitout works.",
    heroImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Turnkey Office Fitout",
    contentDesc: "Turnkey Office Fitout services",
    gallery: [{ img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800", title: "Turnkey Office Fitout" }]
  },
  "office-renovation-services": {
    title: "Ready for Office Renovation Services?",
    tagline: "Delivering premium retail showrooms & office fitouts.",
    heroImage: "https://images.unsplash.com/photo-1531973486364-5fa64260d752?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Office Renovation Services",
    contentDesc: "Office Renovation Services",
    gallery: [{ img: "https://images.unsplash.com/photo-1531973486364-5fa64260d752?auto=format&fit=crop&q=80&w=800", title: "Office Renovation Services" }]
  },
  "luxury-office-design": {
    title: "Ready for Luxury Office Design?",
    tagline: "Metro Retail specializes in office & showroom fitouts.",
    heroImage: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Luxury Office Design",
    contentDesc: "Luxury Office Design services",
    gallery: [{ img: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=800", title: "Luxury Office Design" }]
  },
  "office-space-planning": {
    title: "Ready for Office Space Planning?",
    tagline: "Expert office fitouts & retail showrooms by Metro.",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Office Space Planning",
    contentDesc: "Office Space Planning services",
    gallery: [{ img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", title: "Office Space Planning" }]
  },
  "workspace-interior-solutions": {
    title: "Ready for Workspace Interior Solutions?",
    tagline: "Metro Retail builds premium office & mall fitouts.",
    heroImage: "https://images.unsplash.com/photo-1582653291997-059a56958d4a?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Workspace Interior Solutions",
    contentDesc: "Workspace Interior Solutions",
    gallery: [{ img: "https://images.unsplash.com/photo-1582653291997-059a56958d4a?auto=format&fit=crop&q=80&w=800", title: "Workspace Interior Solutions" }]
  },
  "restaurant-interior-design": {
    title: "Ready for Restaurant Interior Design?",
    tagline: "Expert retail fitout works for showrooms and malls.",
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Restaurant Interior Design",
    contentDesc: "Restaurant Interior Design services",
    gallery: [{ img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800", title: "Restaurant Interior Design" }]
  },
  "cafe-interior-design-services": {
    title: "Ready for Cafe Interior Design Services?",
    tagline: "Metro Retail delivers office and showroom fitouts.",
    heroImage: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Cafe Interior Design Services",
    contentDesc: "Cafe Interior Design Services",
    gallery: [{ img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800", title: "Cafe Interior Design Services" }]
  },
  "restaurant-fitout-company": {
    title: "Ready for a Restaurant Fitout Company?",
    tagline: "Metro Retail creates premium offices and showrooms.",
    heroImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Restaurant Fitout Company",
    contentDesc: "Restaurant Fitout Company services",
    gallery: [{ img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800", title: "Restaurant Fitout Company" }]
  },
  "fine-dining-interior-design": {
    title: "Ready for Fine Dining Interior Design?",
    tagline: "Expert retail and office fitouts by Metro Retail!",
    heroImage: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Fine Dining Interior Design",
    contentDesc: "Fine Dining Interior Design services",
    gallery: [{ img: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800", title: "Fine Dining Interior Design" }]
  },
  "luxury-restaurant-design": {
    title: "Ready for Luxury Restaurant Design?",
    tagline: "Metro Retail specializes in office & mall fitouts.",
    heroImage: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Luxury Restaurant Design",
    contentDesc: "Luxury Restaurant Design services",
    gallery: [{ img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800", title: "Luxury Restaurant Design" }]
  },
  "fast-food-restaurant-design": {
    title: "Ready for Fast Food Restaurant Design?",
    tagline: "Premium retail showrooms & office fitouts by Metro.",
    heroImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Fast Food Restaurant Design",
    contentDesc: "Fast Food Restaurant Design services",
    gallery: [{ img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800", title: "Fast Food Restaurant Design" }]
  },
  "food-court-interior-design": {
    title: "Ready for Food Court Interior Design?",
    tagline: "Metro Retail: Expert office and retail fitout works.",
    heroImage: "https://images.unsplash.com/photo-1525648199593-ce5cafe386d8?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Food Court Interior Design",
    contentDesc: "Food Court Interior Design services",
    gallery: [{ img: "https://images.unsplash.com/photo-1525648199593-ce5cafe386d8?auto=format&fit=crop&q=80&w=800", title: "Food Court Interior Design" }]
  },
  "restaurant-renovation-experts": {
    title: "Ready for Restaurant Renovation Experts?",
    tagline: "Delivering premium retail showrooms & office fitouts.",
    heroImage: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Restaurant Renovation Experts",
    contentDesc: "Restaurant Renovation Experts",
    gallery: [{ img: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=800", title: "Restaurant Renovation Experts" }]
  },
  "f-b-interior-design": {
    title: "Ready for F&B Interior Design?",
    tagline: "Metro Retail specializes in office & showroom fitouts.",
    heroImage: "https://images.unsplash.com/photo-1551632436-421b5b4cc601?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "F&B Interior Design",
    contentDesc: "F&B Interior Design services",
    gallery: [{ img: "https://images.unsplash.com/photo-1551632436-421b5b4cc601?auto=format&fit=crop&q=80&w=800", title: "F&B Interior Design" }]
  },
  "turnkey-restaurant-fitout": {
    title: "Ready for Turnkey Restaurant Fitout?",
    tagline: "Expert office fitouts & retail showrooms by Metro.",
    heroImage: "https://images.unsplash.com/photo-1528605248644-14bf524458f3?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Turnkey Restaurant Fitout",
    contentDesc: "Turnkey Restaurant Fitout services",
    gallery: [{ img: "https://images.unsplash.com/photo-1528605248644-14bf524458f3?auto=format&fit=crop&q=80&w=800", title: "Turnkey Restaurant Fitout" }]
  },
  "commercial-interior-design": {
    title: "Ready for Commercial Interior Design?",
    tagline: "Metro Retail builds premium office & mall fitouts.",
    heroImage: "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Commercial Interior Design",
    contentDesc: "Commercial Interior Design services",
    gallery: [{ img: "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?auto=format&fit=crop&q=80&w=800", title: "Commercial Interior Design" }]
  },
  "commercial-fitout-company": {
    title: "Ready for a Commercial Fitout Company?",
    tagline: "Expert retail fitout works for showrooms and malls.",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Commercial Fitout Company",
    contentDesc: "Commercial Fitout Company services",
    gallery: [{ img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800", title: "Commercial Fitout Company" }]
  },
  "interior-design-build": {
    title: "Ready for Interior Design & Build?",
    tagline: "Metro Retail delivers office and showroom fitouts.",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Interior Design & Build",
    contentDesc: "Interior Design & Build services",
    gallery: [{ img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800", title: "Interior Design & Build" }]
  },
  "turnkey-interior-solutions": {
    title: "Ready for Turnkey Interior Solutions?",
    tagline: "Metro Retail creates premium offices and showrooms.",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Turnkey Interior Solutions",
    contentDesc: "Turnkey Interior Solutions",
    gallery: [{ img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800", title: "Turnkey Interior Solutions" }]
  },
  "commercial-interior-contractors": {
    title: "Ready for Commercial Interior Contractors?",
    tagline: "Expert retail and office fitouts by Metro Retail!",
    heroImage: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Commercial Interior Contractors",
    contentDesc: "Commercial Interior Contractors services",
    gallery: [{ img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800", title: "Commercial Interior Contractors" }]
  }
});

Object.assign(NESTED_SERVICE_DATA, {
  "marble-flooring": {
    title: "Ready for Marble Flooring?",
    tagline: "Metro Retail specializes in office & mall fitouts.",
    heroImage: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Marble Flooring Services",
    contentDesc: "We provide expert marble flooring installation, ensuring seamless joints and perfect leveling for luxury spaces.",
    gallery: [{ img: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&q=80&w=800", title: "Marble Flooring" }]
  },
  "marble-wall-cladding": {
    title: "Ready for Marble Wall Cladding?",
    tagline: "Premium retail showrooms & office fitouts by Metro.",
    heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Marble Wall Cladding",
    contentDesc: "Elevate your interiors with stunning bookmatched marble walls and mechanically fixed stone cladding.",
    gallery: [{ img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800", title: "Marble Wall Cladding" }]
  },
  "custom-marble-counters": {
    title: "Ready for Custom Marble Counters?",
    tagline: "Metro Retail: Expert office and retail fitout works.",
    heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200",
    contentTitle: "Custom Marble Counters",
    contentDesc: "Precision fabricated marble countertops for kitchens, bathrooms, and reception desks.",
    gallery: [{ img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800", title: "Custom Marble Counters" }]
  }
});

Object.assign(SUBCATEGORY_DATA, {
  "retail-fitout": NESTED_SERVICE_DATA["retail-fitout"],
  "office-fitout": NESTED_SERVICE_DATA["office-fitout"],
  "restaurant-fitout": NESTED_SERVICE_DATA["restaurant-fitout"],
  "commercial-contractors": NESTED_SERVICE_DATA["commercial-contractors"],
  "marble-installation": {
    title: "Marble Installation",
    tagline: "Delivering premium retail showrooms & office fitouts.",
    heroImage: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&q=80",
    desc: [
      "Our specialized marble installation team delivers flawless stone work for floors, walls, and bespoke features.",
      "From bookmatched marble cladding to intricate waterjet patterns and custom countertops, we ensure precision and luxury in every detail."
    ],
    stats: [
      { label: "Projects Completed", value: "300+", icon: Award }, { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }, { label: "Expert Craftsmen", value: "45+", icon: ShieldCheck }
    ],
    process: [
      { step: "Initial Consultation", desc: "Material selection and site assessment." }, 
      { step: "Design & Planning", desc: "Detailed shop drawings and pattern layouts." }, 
      { step: "Execution Phase", desc: "Precision cutting and flawless installation." }, 
      { step: "Final Handover", desc: "Polishing, sealing, and final quality checks." }
    ],
    gallery: [
      {
        slug: "marble-flooring",
        img: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&q=80",
        title: "Marble Flooring",
        description: "Premium marble flooring installation.",
        tags: ["Flooring", "Marble"],
        bullets: ["Large format slabs", "Bookmatched designs", "Seamless joints"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "marble-wall-cladding",
        img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
        title: "Marble Wall Cladding",
        description: "Bespoke marble wall features.",
        tags: ["Wall Cladding", "Marble"],
        bullets: ["Feature walls", "Bathroom cladding", "Mechanical fixing"],
        buttonText: "VIEW DETAILS →"
      },
      {
        slug: "custom-marble-counters",
        img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80",
        title: "Custom Marble Counters",
        description: "Bespoke marble counters and vanities.",
        tags: ["Counters", "Marble"],
        bullets: ["Kitchen islands", "Bathroom vanities", "Reception desks"],
        buttonText: "VIEW DETAILS →"
      }
    ]
  }
});
