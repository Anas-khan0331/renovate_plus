// ─────────────────────────────────────────────────────────────────────────────
// CLIENT CONFIG — Edit this file for each new client.
// Every page, component, and piece of metadata auto-populates from here.
// Set any service to false to hide it from the site entirely.
// ─────────────────────────────────────────────────────────────────────────────

const clientConfig = {
  // ── Business Identity ──────────────────────────────────────────────────────
  businessName: "Grace Remodeling & Construction",
  // Logo: logoAccent (gold) renders FIRST, logoMain (white) renders second → "GRC"
  logoAccent: "G",
  logoMain: "RC",
  logoAccentFirst: true,
  aboutBrief:
    "Austin's trusted remodeling & construction team since 2015. We build spaces families are proud to call home.",
  tagline: "Austin's Trusted Remodeling & Construction Experts",
  city: "Austin",
  state: "TX",
  phone: "(512) 497-1529",
  email: "info@graceremodeling.com",
  address: "1205 E Ben White Blvd, Suite 104",
  zipCode: "78704",
  website: "https://graceremodeling.com",

  // ── Brand Numbers ──────────────────────────────────────────────────────────
  foundedYear: 2015,
  projectsCompleted: 120,
  satisfactionRate: 98,
  hiddenFees: 0,

  // ── Hero Copy ──────────────────────────────────────────────────────────────
  heroHeadline: "Austin Homes Transformed. Lives Elevated.",
  heroSubtext:
    "Licensed & insured remodeling since 2015 — kitchens, bathrooms, additions & full home renovations",

  // ── About Paragraph ────────────────────────────────────────────────────────
  aboutStory:
    "Grace Remodeling & Construction was founded by Grace Morales in 2015 with one mission: " +
    "deliver the craftsmanship and honest communication that Austin homeowners truly deserve. " +
    "After years working under larger contractors, Grace built her own company to prove it. " +
    "Today, our licensed team has completed 120+ projects across Austin and the surrounding area.",

  // ── Active Services ────────────────────────────────────────────────────────
  // Set any to false to remove it from every page automatically.
  services: {
    // ─ Remodeling ─
    kitchenRemodeling: true,
    bathroomRenovation: true,
    basementFinishing: true,
    homeAdditions: true,
    outdoorLiving: true,
    fullHomeRenovation: true,
    // ─ Construction ─
    newHomeConstruction: true,
    customBuilds: true,
    garagesAndADUs: true,
  },

  // ── Service Areas ──────────────────────────────────────────────────────────
  serviceAreas: [
    "Austin",
    "Round Rock",
    "Cedar Park",
    "Pflugerville",
    "Buda",
    "Kyle",
    "Georgetown",
  ],

  // ── Social / Review Links ──────────────────────────────────────────────────
  yelpUrl: "",
  facebookUrl: "",
  instagramUrl: "",
  houzzUrl: "",

  // ── Team Members ───────────────────────────────────────────────────────────
  // photo: local path or URL — leave null to show initials avatar instead.
  team: [
    {
      name: "Grace Morales",
      role: "Founder & General Contractor",
      yearsExperience: 18,
      photo: null,
      bio: "Grace founded the company in 2015 after a decade working for top Austin builders. Her hands-on approach and commitment to honest communication set the standard for every project we take on.",
    },
    {
      name: "Carlos Morales",
      role: "Operations Manager",
      yearsExperience: 14,
      photo: null,
      bio: "Carlos oversees scheduling, subcontractors, and materials procurement across all active projects. Clients consistently credit him with keeping jobs on time and on budget.",
    },
    {
      name: "Sandra Kim",
      role: "Interior Design Lead",
      yearsExperience: 9,
      photo: null,
      bio: "Sandra brings a sharp design eye to every renovation. She helps homeowners make confident decisions on materials, finishes, and layouts they'll love for decades.",
    },
    {
      name: "James Torres",
      role: "Senior Project Manager",
      yearsExperience: 12,
      photo: null,
      bio: "James has managed 60+ renovation projects from permit to punch list. His clients say the same thing every time: clear communication, zero surprises.",
    },
    {
      name: "Miguel Reyes",
      role: "Lead Carpenter & Finish Work",
      yearsExperience: 20,
      photo: null,
      bio: "Miguel's custom cabinetry and millwork can be found in over 150 Austin homes. Twenty years in, he still takes every detail personally.",
    },
    {
      name: "Ashley Park",
      role: "Client Relations Manager",
      yearsExperience: 6,
      photo: null,
      bio: "Ashley ensures every homeowner feels informed, respected, and genuinely excited about what we are building together.",
    },
  ],

  // ── Reviews ────────────────────────────────────────────────────────────────
  // Paste Yelp / Google reviews here. photo is optional — leave null for avatar.
  reviews: [
    {
      text: "Grace and her entire team were an absolute pleasure to work with. Our kitchen went from outdated and cramped to a beautiful open space we use every single day. On time, on budget, quality exceeded every expectation.",
      author: "Jennifer & Mark T.",
      location: "Westlake Hills, Austin",
      rating: 5,
      project: "Kitchen Remodel",
      date: "March 2025",
      photo: null,
    },
    {
      text: "I've hired several contractors over the years and Grace Remodeling & Construction is in a completely different league. Honest pricing, clear communication, and a finished product that speaks for itself.",
      author: "David P.",
      location: "Mueller, Austin",
      rating: 5,
      project: "Home Addition",
      date: "January 2025",
      photo: null,
    },
    {
      text: "Our master bathroom is now a full spa retreat. Grace's team listened to exactly what we wanted, guided us on materials, and executed it flawlessly. From first call to final walk-through — a genuinely great experience.",
      author: "Melissa R.",
      location: "Barton Hills, Austin",
      rating: 5,
      project: "Master Bathroom",
      date: "February 2025",
      photo: null,
    },
    {
      text: "We had an unfinished basement sitting empty for over a decade. Grace Remodeling & Construction turned it into the most-used room in our house. The project was managed perfectly — not a single surprise.",
      author: "Robert S.",
      location: "Travis Heights, Austin",
      rating: 5,
      project: "Basement Finish",
      date: "November 2024",
      photo: null,
    },
    {
      text: "We got three quotes. Grace was not the cheapest — but she was the most thorough, the most transparent, and the most confident. She earned our trust before we signed and delivered everything she promised.",
      author: "Carlos & Diana M.",
      location: "Tarrytown, Austin",
      rating: 5,
      project: "Outdoor Kitchen",
      date: "October 2024",
      photo: null,
    },
    {
      text: "A full home renovation is daunting but Grace Remodeling made it manageable. Our project manager James felt like a true partner — weekly updates, total transparency, and genuine care for the outcome.",
      author: "Patricia W.",
      location: "Hyde Park, Austin",
      rating: 5,
      project: "Full Home Renovation",
      date: "September 2024",
      photo: null,
    },
    {
      text: "They finished two weeks ahead of schedule and still hit every detail on our wishlist. Incredible team. Already referred them to three neighbors and every single one said the same thing.",
      author: "Michael & Lisa A.",
      location: "Allandale, Austin",
      rating: 5,
      project: "Kitchen & Bath",
      date: "August 2024",
      photo: null,
    },
    {
      text: "Our bathroom renovation came out so beautifully that guests ask if we remodeled the whole house. The craftsmanship from Grace Remodeling & Construction is genuinely remarkable. Worth every penny.",
      author: "Tanya H.",
      location: "Cherrywood, Austin",
      rating: 5,
      project: "Bathroom Renovation",
      date: "July 2024",
      photo: null,
    },
  ],

  // ── Projects / Portfolio ────────────────────────────────────────────────────
  // beforeImage / afterImage: URL or local path. Leave null for placeholders.
  projects: [
    {
      title: "The Westlake Kitchen Transformation",
      category: "Kitchen",
      shortDescription:
        "A complete gut-and-rebuild that turned a cramped 1990s galley into an open-concept chef's kitchen.",
      fullDescription:
        "The homeowners wanted a kitchen that could handle Sunday dinners for twelve. We demolished the existing wall, installed custom walnut cabinetry, Calacatta marble countertops, and a 10-foot waterfall island. Sub-Zero refrigeration, Wolf range, and Miele dishwasher complete the chef-grade suite.",
      beforeImage:
        "https://images.unsplash.com/photo-1556909075-c3b7d2c9a76a?w=800&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      materials: [
        "Calacatta Marble",
        "Walnut Cabinetry",
        "Sub-Zero",
        "Wolf Range",
        "Hardwood Floors",
      ],
      duration: "9 weeks",
      budget: "$85,000 – $95,000",
      featured: true,
      testimonial: {
        quote:
          "We cook together every night now. This kitchen changed our family life.",
        author: "Jennifer & Mark T.",
        location: "Westlake Hills, Austin",
        rating: 5,
      },
    },
    {
      title: "The Barton Hills Master Bath Retreat",
      category: "Bathroom",
      shortDescription:
        "A spa-inspired master bathroom with heated floors, a freestanding soaking tub, and walk-in steam shower.",
      fullDescription:
        "What was once a builder-grade bathroom became a 5-star hotel experience. We expanded the footprint, installed radiant floor heating, and custom-designed a floating dual-vanity in white oak with brushed brass hardware.",
      beforeImage:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
      materials: [
        "Limestone Tile",
        "White Oak Vanity",
        "Brushed Brass",
        "Radiant Heating",
        "Kohler Fixtures",
      ],
      duration: "6 weeks",
      budget: "$42,000 – $50,000",
      featured: true,
      testimonial: {
        quote:
          "I feel like I'm at a resort every morning. The attention to detail is extraordinary.",
        author: "Melissa R.",
        location: "Barton Hills, Austin",
        rating: 5,
      },
    },
    {
      title: "The Mueller Home Addition",
      category: "Home Addition",
      shortDescription:
        "A 650 sq ft first-floor addition creating a sunlit family room, mudroom, and guest suite.",
      fullDescription:
        "This growing family needed more space but loved their neighborhood too much to move. We built a seamless 650 sq ft addition with a vaulted-ceiling family room, functional mudroom, and private guest suite.",
      beforeImage:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      materials: [
        "Matching Brick",
        "White Oak Floors",
        "Anderson Windows",
        "Cedar Ceiling Beams",
      ],
      duration: "16 weeks",
      budget: "$145,000 – $165,000",
      featured: true,
      testimonial: {
        quote:
          "Our house feels completely new. Guests never believe the addition wasn't original.",
        author: "David & Claire P.",
        location: "Mueller, Austin",
        rating: 5,
      },
    },
    {
      title: "The Travis Heights Basement Finish",
      category: "Basement",
      shortDescription:
        "An unfinished basement transformed into a home theater, wet bar, gym, and bonus bedroom.",
      fullDescription:
        "This 1,200 sq ft basement was raw concrete. We created a multipurpose space: home theater with 4K laser projector, surround sound, adjacent wet bar, home gym, and bonus bedroom with egress window.",
      beforeImage:
        "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=800&q=80",
      materials: [
        "Acoustic Panels",
        "Quartz Countertops",
        "LVP Flooring",
        "Recessed Lighting",
      ],
      duration: "10 weeks",
      budget: "$65,000 – $78,000",
      featured: false,
      testimonial: {
        quote:
          "My kids never want to leave the house anymore. Best investment we've made.",
        author: "Robert & Amy S.",
        location: "Travis Heights, Austin",
        rating: 5,
      },
    },
    {
      title: "The Tarrytown Outdoor Living Oasis",
      category: "Outdoor Living",
      shortDescription:
        "A full outdoor kitchen, pergola, pool surround, and landscaping turning the backyard into a resort.",
      fullDescription:
        'We designed a covered outdoor kitchen with a 36" built-in grill, pizza oven, beverage refrigerators, and a 12-foot bar. A cedar pergola with string lighting creates the perfect dining ambiance.',
      beforeImage:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      materials: [
        "Cedar Pergola",
        "Limestone Pavers",
        "Lynx Grill",
        "Pizza Oven",
      ],
      duration: "8 weeks",
      budget: "$55,000 – $70,000",
      featured: false,
      testimonial: {
        quote:
          "We've hosted over 20 dinner parties since the renovation. Our backyard is everyone's favorite.",
        author: "Carlos & Diana M.",
        location: "Tarrytown, Austin",
        rating: 5,
      },
    },
    {
      title: "The Hyde Park Full Home Renovation",
      category: "Full Home",
      shortDescription:
        "A complete 1940s bungalow restoration: updated systems, opened floor plan, modernized throughout.",
      fullDescription:
        "This 1940s Hyde Park bungalow had original bones worth preserving but systems that needed complete replacement. We opened the floor plan, replaced all plumbing, electrical, and HVAC, and renovated all three bathrooms.",
      beforeImage:
        "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1618219944342-824e40a13285?w=800&q=80",
      materials: [
        "Restored Hardwood",
        "Quartz Countertops",
        "Subway Tile",
        "Custom Millwork",
      ],
      duration: "24 weeks",
      budget: "$220,000 – $265,000",
      featured: true,
      testimonial: {
        quote:
          "They honored the history of our home while making it perfect for modern life. Truly exceptional.",
        author: "Patricia & James W.",
        location: "Hyde Park, Austin",
        rating: 5,
      },
    },
    {
      title: "The South Lamar Powder Room Refresh",
      category: "Bathroom",
      shortDescription:
        "A dramatic powder room transformation with statement wallpaper, vessel sink, and gold fixtures.",
      fullDescription:
        "Small room, massive impact. Botanical wallpaper, custom floating vanity, vessel sink, and unlacquered brass fixtures turned a forgettable powder room into the most-photographed space in the house.",
      beforeImage:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80",
      materials: [
        "Botanical Wallpaper",
        "Marble Floors",
        "Brass Fixtures",
        "Vessel Sink",
      ],
      duration: "3 weeks",
      budget: "$12,000 – $18,000",
      featured: false,
      testimonial: {
        quote:
          "Every single guest comments on our powder room. It's a conversation starter at every dinner party.",
        author: "Sophie L.",
        location: "South Lamar, Austin",
        rating: 5,
      },
    },
    {
      title: "The Rollingwood Open Concept Kitchen",
      category: "Kitchen",
      shortDescription:
        "Structural wall removal and full kitchen rebuild creating a seamless open-concept living space.",
      fullDescription:
        "Structural wall removal between kitchen and living room. We installed a Calacatta Gold quartz waterfall island with seating for six, white shaker cabinetry to the ceiling, and a custom fireplace surround.",
      beforeImage:
        "https://images.unsplash.com/photo-1556909075-c3b7d2c9a76a?w=800&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      materials: [
        "Calacatta Gold Quartz",
        "Shaker Cabinetry",
        "Integrated Appliances",
        "White Oak Floors",
      ],
      duration: "11 weeks",
      budget: "$98,000 – $115,000",
      featured: false,
      testimonial: {
        quote:
          "The open concept completely changed how we use our home. Worth every penny.",
        author: "Kevin & Sarah B.",
        location: "Rollingwood, Austin",
        rating: 5,
      },
    },
  ],

  // ── Social Proof Toasts ────────────────────────────────────────────────────
  socialProofPeople: [
    { name: "Mike", city: "Austin" },
    { name: "Sarah", city: "Austin" },
    { name: "David & Claire", city: "Westlake" },
    { name: "Jennifer", city: "Austin" },
    { name: "Carlos", city: "South Austin" },
    { name: "The Williams family", city: "Austin" },
    { name: "Amanda", city: "Cedar Park" },
    { name: "Robert & Amy", city: "Austin" },
  ],
  socialProofActions: [
    "just booked a kitchen consultation",
    "got their free renovation estimate today",
    "are starting their home addition next month",
    "just scheduled a bathroom walkthrough",
    "signed their full home renovation contract",
    "just booked a basement consultation",
    "are getting a free outdoor kitchen design",
    "just submitted a project inquiry",
  ],
};

export default clientConfig;
