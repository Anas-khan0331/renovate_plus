// ─────────────────────────────────────────────────────────────────────────────
// CLIENT CONFIG — Edit this file for each new client.
// Every page, component, and piece of metadata auto-populates from here.
// Set any service to false to hide it from the site entirely.
// ─────────────────────────────────────────────────────────────────────────────

const clientConfig = {
  // ── Business Identity ──────────────────────────────────────────────────────
  businessName: "Renovate+",
  logoMain: "Renovate", // white text in header/footer logo
  logoAccent: "+", // gold text in header/footer logo
  aboutBrief:
    "Austin's most trusted renovation partner since 2004. We transform homes into the spaces families deserve.",
  tagline: "Austin's Premier Home Renovation Company",
  city: "Austin",
  state: "TX",
  phone: "(512) 555-0100",
  email: "hello@renovateplus.com",
  address: "2400 S Congress Ave, Suite 200",
  zipCode: "78704",
  website: "https://renovateplus.com",

  // ── Brand Numbers ──────────────────────────────────────────────────────────
  foundedYear: 2004,
  projectsCompleted: 150,
  satisfactionRate: 98, // shown as X%
  hiddenFees: 0, // shown as $X

  // ── Hero Copy ──────────────────────────────────────────────────────────────
  heroHeadline: "Transform Your Home Into A Masterpiece",
  heroSubtext: "Austin's 5-Star Renovation Company — Free Design Consultations",

  // ── About Paragraph ────────────────────────────────────────────────────────
  aboutStory:
    "In 2004, Marcus Holloway started Renovate+ with one truck, two tools, and a conviction " +
    "that Austin homeowners deserved better than the unreliable contractors they'd been settling " +
    "for. Today we're Austin's most trusted renovation team — 150+ projects, 20 years of craft.",

  // ── Active Services ────────────────────────────────────────────────────────
  // Set any to false to remove it from every page automatically.
  services: {
    kitchenRemodeling: true,
    bathroomRenovation: true,
    basementFinishing: true,
    homeAdditions: true,
    outdoorLiving: true,
    fullHomeRenovation: true,
  },

  // ── Service Areas ──────────────────────────────────────────────────────────
  serviceAreas: [
    "Austin",
    "Round Rock",
    "Cedar Park",
    "Pflugerville",
    "West Lake Hills",
    "Lakeway",
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
      name: "Marcus Holloway",
      role: "Founder & CEO",
      yearsExperience: 22,
      photo: null,
      bio: "Marcus founded Renovate+ in 2004 after 8 years as a licensed general contractor. His vision: a renovation company where craftsmanship and client experience are equally non-negotiable.",
    },
    {
      name: "Elena Vasquez",
      role: "Head of Design",
      yearsExperience: 14,
      photo: null,
      bio: "Elena brings an editorial eye to every project. A graduate of UT Austin's interior design program, she has been featured in Texas Monthly's Home & Garden edition.",
    },
    {
      name: "James Carrington",
      role: "Senior Project Manager",
      yearsExperience: 11,
      photo: null,
      bio: "James has personally managed over 80 renovation projects. Homeowners consistently cite his communication and problem-solving as the highlight of their experience.",
    },
    {
      name: "Priya Nair",
      role: "Lead Architect",
      yearsExperience: 16,
      photo: null,
      bio: "A licensed architect with a specialty in residential design, Priya ensures every structural decision serves both beauty and long-term durability.",
    },
    {
      name: "Tony Reyes",
      role: "Master Carpenter",
      yearsExperience: 19,
      photo: null,
      bio: "Tony's custom cabinetry and millwork have been installed in over 200 Austin homes. His standard: if it goes in the home, it has to be perfect.",
    },
    {
      name: "Sarah Mitchell",
      role: "Client Relations Director",
      yearsExperience: 8,
      photo: null,
      bio: "Sarah ensures every homeowner feels informed, respected, and genuinely excited throughout their renovation.",
    },
  ],

  // ── Reviews ────────────────────────────────────────────────────────────────
  // Paste Yelp / Google reviews here. photo is optional — leave null for avatar.
  reviews: [
    {
      text: "Renovate+ delivered everything they promised — on time, on budget, and with craftsmanship that exceeded our expectations. Our kitchen is now the heart of our home.",
      author: "Jennifer & Mark T.",
      location: "Westlake Hills, Austin",
      rating: 5,
      project: "Kitchen Remodel",
      date: "March 2024",
      photo: null,
    },
    {
      text: "I've worked with multiple contractors over the years. Renovate+ is in a different league. Their communication is excellent and the finished product speaks for itself.",
      author: "David P.",
      location: "Mueller, Austin",
      rating: 5,
      project: "Home Addition",
      date: "January 2024",
      photo: null,
    },
    {
      text: "From the first consultation to the final walk-through, the experience was genuinely enjoyable. They treated our home with respect and delivered something beautiful.",
      author: "Melissa R.",
      location: "Barton Hills, Austin",
      rating: 5,
      project: "Master Bathroom",
      date: "February 2024",
      photo: null,
    },
    {
      text: "Our basement was just wasted space for 12 years. Renovate+ turned it into the most-used room in the house. The project management was flawless.",
      author: "Robert S.",
      location: "Travis Heights, Austin",
      rating: 5,
      project: "Basement Finish",
      date: "December 2023",
      photo: null,
    },
    {
      text: "Three companies gave us quotes. Renovate+ wasn't the cheapest, but they were the most thorough and the most confident in their process. They earned our trust — and delivered.",
      author: "Carlos & Diana M.",
      location: "Tarrytown, Austin",
      rating: 5,
      project: "Outdoor Kitchen",
      date: "November 2023",
      photo: null,
    },
    {
      text: "The full home renovation was a major undertaking and Renovate+ managed it beautifully. Our project manager felt like a true partner throughout.",
      author: "Patricia W.",
      location: "Hyde Park, Austin",
      rating: 5,
      project: "Full Home Renovation",
      date: "October 2023",
      photo: null,
    },
    {
      text: "They finished two weeks ahead of schedule and still hit every detail on our wishlist. Remarkable team. We've already referred them to three friends.",
      author: "Michael & Lisa A.",
      location: "Allandale, Austin",
      rating: 5,
      project: "Kitchen & Bath",
      date: "September 2023",
      photo: null,
    },
    {
      text: "Our bathroom renovation turned out so stunning we've had guests ask if we moved. The quality of materials and workmanship is on another level.",
      author: "Tanya H.",
      location: "Cherrywood, Austin",
      rating: 5,
      project: "Bathroom Renovation",
      date: "August 2023",
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
