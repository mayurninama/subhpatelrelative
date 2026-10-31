/**
 * ============================================================================
 * MAITRI & ANUJ — WEDDING INVITATION CONFIGURATION
 * ============================================================================
 * Edit any names, dates, venues, event timings, RSVP contact numbers, or
 * asset paths here. Changes take effect immediately upon refreshing the page.
 */

const mapSearchUrl = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const mapEmbedUrl = (query) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

const VENUES = {
  mehndi: {
    name: "Narayan Exotica Society",
    address: "#15, Narayan Exotica Society, Anand-Bakrol Road, Anand, Gujarat",
    mapUrl: mapSearchUrl("Narayan Exotica Society, Anand-Bakrol Road, Anand, Gujarat"),
    embedUrl: mapEmbedUrl("Narayan Exotica Society, Anand-Bakrol Road, Anand, Gujarat"),
  },
  garba: {
    name: "Krishna Farm",
    address: "Krishna Farm, Lambhvel-Boriavi Road, Anand, Gujarat",
    mapUrl: mapSearchUrl("Krishna Farm, Lambhvel-Boriavi Road, Anand, Gujarat"),
    embedUrl: mapEmbedUrl("Krishna Farm, Lambhvel-Boriavi Road, Anand, Gujarat"),
  },
  haldi: {
    name: "Tulsi Banquet Hall",
    address: "Tulsi Banquet Hall, Vadtal Road, Anand, Gujarat",
    mapUrl: mapSearchUrl("Tulsi Banquet Hall, Vadtal Road, Anand, Gujarat"),
    embedUrl: mapEmbedUrl("Tulsi Banquet Hall, Vadtal Road, Anand, Gujarat"),
  },
  resort: {
    name: "Star Woods Resort",
    address: "Star Woods Resort, Nr. Dedarda, Anand-Borsad Road, Anand, Gujarat",
    mapUrl: mapSearchUrl("Star Woods Resort, Dedarda, Anand-Borsad Road, Anand, Gujarat"),
    embedUrl: mapEmbedUrl("Star Woods Resort, Dedarda, Anand-Borsad Road, Anand, Gujarat"),
  },
};

const DAYS = {
  d25: { id: "d25", day: "25", month: "January", year: "2027", weekday: "Monday" },
  d26: { id: "d26", day: "26", month: "January", year: "2027", weekday: "Tuesday" },
  d27: { id: "d27", day: "27", month: "January", year: "2027", weekday: "Wednesday" },
  d28: { id: "d28", day: "28", month: "January", year: "2027", weekday: "Thursday" },
};

const EVENTS = {
  mehndi: {
    id: "mehendi",
    title: "Mehndi",
    tag: "Mehndi Celebration",
    subtitle: "An Afternoon of Henna, Music & Joyful Beginnings",
    time: "4:00 PM onwards",
    venue: VENUES.mehndi,
    tone: "light",
    align: "top",
    media: {
      video: "assets/video/mehendi.mp4",
      poster: "assets/images/posters/mehendi.jpg",
    },
    dressCode: {
      title: "Festive Greens & Floral Pastels",
      description:
        "Celebrate the afternoon in joyful shades of mehendi green, pastel florals, or vibrant Indian festive wear.",
      attire: [
        { label: "Women", value: "Indo-Western, Lehenga, Anarkali, Saree" },
        { label: "Men", value: "Kurta Pajama, Festive Nehru Jacket" },
      ],
    },
  },
  garba: {
    id: "garba",
    title: "Rajwadi Raas",
    tag: "Garba Night",
    subtitle: "An Evening of Garba, Grace & Gujarati Tradition",
    time: "7:30 PM onwards",
    venue: VENUES.garba,
    tone: "light",
    align: "top",
    media: {
      video: "assets/video/garba.mp4",
      poster: "assets/images/posters/garba.jpg",
    },
    dressCode: {
      title: "Traditional Grandeur",
      description:
        "Come dressed in your finest traditional Gujarati attire and celebrate the night in timeless festive style.",
      attire: [
        { label: "Women", value: "Chaniya Choli, Traditional Saree" },
        { label: "Men", value: "Kurta, Kediyu & Koti" },
      ],
    },
  },
  haldi: {
    kind: "mangalik",
    id: "mangalik",
    tag: "Shubh Prasang",
    title: "Haldi & Ganesh Puja",
    subtitle: "An Auspicious Gujarati Tradition",
    whenLabel: "From 9:00 AM",
    venue: VENUES.haldi,
    items: [
      { label: "Ganesh Puja • Mandap Muhurat", time: "9:00 AM" },
      { label: "Haldi & Pithi Ceremony", time: "10:30 AM" },
      { label: "Grah Shanti", time: "11:30 AM" },
      { label: "Lunch", time: "12:30 PM" },
    ],
    dressCode: {
      title: "Sunkissed Hues",
      description:
        "Festive attire in any shade of yellow, from soft buttercream and lemon to vibrant marigold and golden hues.",
    },
    dressCodeLabel: "Haldi Dress Code",
    media: {
      video: "assets/video/varadh.mp4",
      poster: "assets/images/posters/haldi.webp",
    },
    tone: "dark",
    align: "top",
  },
  wedding: {
    kind: "combo",
    id: "wedding",
    moments: [
      { title: "Jaan Aagman", time: "6:00 PM" },
      { title: "The Wedding", time: "7:00 PM onwards" },
    ],
    venue: VENUES.resort,
    dressCode: {
      title: "Pastel & Champagne Elegance",
      description:
        "Dress in an elegant palette of soft pastels, champagne pearl, rose gold, or traditional royal silhouettes for our celebration of love and forever.",
      attire: [
        { label: "Women", value: "Sarees & Lehengas" },
        { label: "Men", value: "Sherwanis, Bandgalas & Suits" },
      ],
    },
    media: {
      video: "assets/video/wedding.mp4",
      poster: "assets/images/posters/wedding.jpg",
    },
    tone: "dark",
    align: "center",
  },
};

const RSVP_CONTACTS = [
  {
    name: "Alpesh Patel",
    display: "+91 98251 88818",
    tel: "+919825188818",
    whatsapp: "919825188818",
    highlight: false,
  },
  {
    name: "Manisha Patel",
    display: "+91 84017 02397",
    tel: "+918401702397",
    whatsapp: "918401702397",
    highlight: false,
  },
  {
    name: "Maitri Patel",
    display: "+1 647 309 7977",
    tel: "+16473097977",
    whatsapp: "16473097977",
    highlight: true,
  },
];

const RAIL = [
  { id: "mehendi-day", day: "25", label: "Mehndi" },
  { id: "garba-day", day: "26", label: "Garba" },
  { id: "mangalik-day", day: "27", label: "Haldi" },
  { id: "wedding-day", day: "28", label: "Wedding" },
];

const SECTIONS = [
  { day: DAYS.d25, cards: [{ kind: "feature", event: EVENTS.mehndi }] },
  { day: DAYS.d26, cards: [{ kind: "feature", event: EVENTS.garba }] },
  { day: DAYS.d27, cards: [EVENTS.haldi] },
  { day: DAYS.d28, cards: [EVENTS.wedding] },
];

window.WEDDING_CONFIG = {
  couple: {
    bride: "Maitri",
    groom: "Anuj",
    names: "Maitri & Anuj",
    tagline: "Shubh Aarambh",
    heading: "The Wedding Celebration of",
  },
  weddingDate: new Date("2027-01-28T19:00:00+05:30"),
  dateRange: {
    label: "25 January 2027 – 28 January 2027",
    short: "25 – 28 January 2027",
  },
  saveTheDate: {
    day: "28",
    monthYear: "January 2027",
    dayTime: "Thursday · 7:00 PM",
  },
  media: {
    envelopePoster: "assets/images/envelope/zoomenv.png",
    envelopeVideo: "assets/video/env2.mp4",
    backgroundMusic: "assets/audio/wedding-bgm.mp3",
    monogram: "assets/images/branding/logo-ma-maroon.webp",
    studioLogo: "assets/images/branding/studio-logo.webp",
    heroPhoto: "assets/images/gallery/hero.webp",
    gallery: [
      { src: "assets/images/gallery/lake.webp", alt: "Maitri and Anuj portrait 1" },
      { src: "assets/images/gallery/palace.webp", alt: "Maitri and Anuj portrait 2" },
      { src: "assets/images/gallery/stroll.webp", alt: "Maitri and Anuj portrait 3" },
      { src: "assets/images/gallery/convertible.webp", alt: "Maitri and Anuj portrait 4" },
      { src: "assets/images/gallery/jeep.webp", alt: "Maitri and Anuj portrait 5" },
      { src: "assets/images/gallery/horse.webp", alt: "Maitri and Anuj portrait 6" },
    ],
  },
  blessings: {
    mantra: {
      deva: "॥ श्री गणेशाय नमः ॥",
      english: "|| Shree Ganeshaya Namaha ||",
    },
    shloka: {
      deva: [
        "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः ।",
        "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
      ],
      english: [
        "Vakratunda Mahakaya Suryakoti Samaprabha",
        "Nirvighnam Kuru Me Deva Sarva-Karyeshu Sarvada",
      ],
    },
    blessing: "With the blessings of Lord Ganesha, a beautiful new chapter begins",
    requestLine: "joyfully invite you to celebrate the union of their beloved",
    occasion: "For their wedding celebrations",
  },
  venues: VENUES,
  rsvp: {
    heading: "RSVP",
    subtitle: "We hope to count on you",
    cardTitle: "R.S.V.P. (BRIDE'S FAMILY)",
    contacts: RSVP_CONTACTS,
  },
  schedules: {
    all: {
      studioLogo: false,
      contacts: RSVP_CONTACTS,
      wording: {
        hosts: "Mr. Alpesh F. Patel & Mrs. Manisha Patel",
        hostsNote: "Anand",
        child: "daughter",
        first: "Maitri",
        second: "Anuj",
        secondParents: "S/O Late Mr. Nanubhai Patel & Mrs. Sumitraben Patel (Ahmedabad)",
      },
      rail: RAIL,
      sections: SECTIONS,
    },
    groom: {
      studioLogo: false,
      contacts: RSVP_CONTACTS,
      wording: {
        hosts: "Mrs. Sumitraben Patel & Late Mr. Nanubhai Patel",
        hostsNote: "Ahmedabad",
        child: "son",
        first: "Anuj",
        second: "Maitri",
        secondParents: "D/O Mr. Alpesh F. Patel & Mrs. Manisha Patel (Anand)",
      },
      rail: RAIL,
      sections: SECTIONS,
    },
  },
};
