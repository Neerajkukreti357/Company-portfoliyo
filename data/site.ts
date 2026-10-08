import type { L } from "@/lib/i18n";

// ✏️ Edit company details, projects, videos and reviews here (English and Hindi side by side).

export const site = {
  name: { en: "Apex Process Engineering", hi: "एपेक्स प्रोसेस इंजीनियरिंग" } as L,
  short: { en: "Apex", hi: "एपेक्स" } as L,
  tagline: {
    en: "We design, fabricate and commission chemical storage and process plants.",
    hi: "हम केमिकल स्टोरेज टैंक और प्रोसेस प्लांट का डिज़ाइन, निर्माण और कमीशनिंग करते हैं।",
  } as L,
  phone: "+91 98765 43210",
  whatsapp: "919876543210", // country code + number, no + or spaces
  address: {
    en: "Plot 24, Industrial Area Phase II, Ludhiana, Punjab 141010",
    hi: "प्लॉट 24, इंडस्ट्रियल एरिया फेज़ II, लुधियाना, पंजाब 141010",
  } as L,
  hours: {
    en: "Mon to Sat, 9:00 am to 6:00 pm",
    hi: "सोमवार से शनिवार, सुबह 9:00 से शाम 6:00 बजे तक",
  } as L,
  yearsExperience: 18,
};

export const services: L[] = [
  { en: "Chemical storage tanks", hi: "केमिकल स्टोरेज टैंक" },
  { en: "Process plant setup", hi: "प्रोसेस प्लांट की स्थापना" },
  { en: "Piping and structural work", hi: "पाइपिंग और स्ट्रक्चरल कार्य" },
  { en: "Effluent treatment plants", hi: "एफ्लुएंट ट्रीटमेंट प्लांट" },
  { en: "Fabrication and welding", hi: "फैब्रिकेशन और वेल्डिंग" },
  { en: "Maintenance and shutdown jobs", hi: "मेंटेनेंस और शटडाउन कार्य" },
];

export type CatKey = "tanks" | "plants" | "structural" | "effluent";

export const categoryLabels: Record<CatKey, L> = {
  tanks: { en: "Storage Tanks", hi: "स्टोरेज टैंक" },
  plants: { en: "Process Plants", hi: "प्रोसेस प्लांट" },
  structural: { en: "Piping & Structural", hi: "पाइपिंग और स्ट्रक्चरल" },
  effluent: { en: "Effluent Treatment", hi: "एफ्लुएंट ट्रीटमेंट" },
};

export type Project = {
  id: number;
  title: L;
  category: CatKey;
  location: L;
  year: number;
  capacity: L;
  image: string;
  summary: L;
};

// Put your photos in /public/projects/ and match the file names here.
export const projects: Project[] = [
  {
    id: 1,
    title: { en: "Acid Storage Tank Farm", hi: "एसिड स्टोरेज टैंक फार्म" },
    category: "tanks",
    location: { en: "Panipat, Haryana", hi: "पानीपत, हरियाणा" },
    year: 2024,
    capacity: { en: "6 tanks, 250 KL each", hi: "6 टैंक, प्रत्येक 250 KL" },
    image: "/projects/project-1.jpg",
    summary: {
      en: "Rubber-lined MS tanks with a full containment bund, transfer piping and loading bay.",
      hi: "पूरे कंटेनमेंट बंड, ट्रांसफर पाइपिंग और लोडिंग बे के साथ रबर-लाइंड MS टैंक।",
    },
  },
  {
    id: 2,
    title: { en: "Solvent Recovery Plant", hi: "सॉल्वेंट रिकवरी प्लांट" },
    category: "plants",
    location: { en: "Baddi, Himachal Pradesh", hi: "बद्दी, हिमाचल प्रदेश" },
    year: 2023,
    capacity: { en: "12 KLPD", hi: "12 KLPD" },
    image: "/projects/project-2.jpg",
    summary: {
      en: "Turnkey distillation and recovery unit, from civil foundations to commissioning.",
      hi: "सिविल फाउंडेशन से कमीशनिंग तक, टर्नकी डिस्टिलेशन और रिकवरी यूनिट।",
    },
  },
  {
    id: 3,
    title: { en: "Reactor Block Structure", hi: "रिएक्टर ब्लॉक स्ट्रक्चर" },
    category: "structural",
    location: { en: "Ankleshwar, Gujarat", hi: "अंकलेश्वर, गुजरात" },
    year: 2023,
    capacity: { en: "4 floors, 380 MT steel", hi: "4 मंज़िल, 380 MT स्टील" },
    image: "/projects/project-3.jpg",
    summary: {
      en: "Structural steel and SS piping for a multi-floor reactor building.",
      hi: "बहुमंज़िला रिएक्टर बिल्डिंग के लिए स्ट्रक्चरल स्टील और SS पाइपिंग।",
    },
  },
  {
    id: 4,
    title: { en: "Effluent Treatment Plant", hi: "एफ्लुएंट ट्रीटमेंट प्लांट" },
    category: "effluent",
    location: { en: "Mohali, Punjab", hi: "मोहाली, पंजाब" },
    year: 2022,
    capacity: { en: "500 KLD", hi: "500 KLD" },
    image: "/projects/project-4.jpg",
    summary: {
      en: "Primary, secondary and tertiary treatment with automated dosing.",
      hi: "ऑटोमेटेड डोज़िंग के साथ प्राइमरी, सेकेंडरी और टर्शियरी ट्रीटमेंट।",
    },
  },
  {
    id: 5,
    title: { en: "Caustic Soda Storage", hi: "कॉस्टिक सोडा स्टोरेज" },
    category: "tanks",
    location: { en: "Rudrapur, Uttarakhand", hi: "रुद्रपुर, उत्तराखंड" },
    year: 2022,
    capacity: { en: "3 tanks, 100 KL each", hi: "3 टैंक, प्रत्येक 100 KL" },
    image: "/projects/project-5.jpg",
    summary: {
      en: "Heated and insulated tanks with level instrumentation and a transfer skid.",
      hi: "लेवल इंस्ट्रूमेंटेशन और ट्रांसफर स्किड के साथ हीटेड और इंसुलेटेड टैंक।",
    },
  },
  {
    id: 6,
    title: { en: "Pharma Utility Block", hi: "फार्मा यूटिलिटी ब्लॉक" },
    category: "plants",
    location: { en: "Nalagarh, Himachal Pradesh", hi: "नालागढ़, हिमाचल प्रदेश" },
    year: 2021,
    capacity: { en: "Steam, chilled water, N2", hi: "स्टीम, चिल्ड वॉटर, N2" },
    image: "/projects/project-6.jpg",
    summary: {
      en: "Complete utility piping, skids and supports for a bulk drug facility.",
      hi: "बल्क ड्रग फैसिलिटी के लिए पूरी यूटिलिटी पाइपिंग, स्किड और सपोर्ट।",
    },
  },
];

export type Video = {
  id: number;
  title: L;
  location: L;
  duration: string;
  thumb: string;
  src: string;
};

// Videos: use a YouTube link OR a file in /public/videos/ (e.g. "/videos/tank-farm.mp4").
export const videos: Video[] = [
  {
    id: 1,
    title: { en: "Tank farm erection, start to finish", hi: "टैंक फार्म का निर्माण, शुरू से अंत तक" },
    location: { en: "Panipat, Haryana", hi: "पानीपत, हरियाणा" },
    duration: "2:40",
    thumb: "/projects/project-1.jpg",
    src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: { en: "Solvent plant commissioning", hi: "सॉल्वेंट प्लांट की कमीशनिंग" },
    location: { en: "Baddi, Himachal Pradesh", hi: "बद्दी, हिमाचल प्रदेश" },
    duration: "3:15",
    thumb: "/projects/project-2.jpg",
    src: "/videos/solvent-plant.mp4",
  },
  {
    id: 3,
    title: { en: "Walkthrough of our fabrication yard", hi: "हमारे फैब्रिकेशन यार्ड का दौरा" },
    location: { en: "Ludhiana, Punjab", hi: "लुधियाना, पंजाब" },
    duration: "1:50",
    thumb: "/projects/project-3.jpg",
    src: "/videos/fabrication-yard.mp4",
  },
];

export type Review = {
  id: number;
  name: L;
  company: L;
  rating: number;
  projectId: number; // matches a project id above
  text: L;
};

export const reviews: Review[] = [
  {
    id: 1,
    name: { en: "Rajinder Singh", hi: "राजिंदर सिंह" },
    company: { en: "Managing Director, Northern Chemicals", hi: "मैनेजिंग डायरेक्टर, नॉर्दर्न केमिकल्स" },
    rating: 5,
    projectId: 1,
    text: {
      en: "The tanks were handed over a week before the date we agreed. Welding quality passed our third-party inspection on the first attempt.",
      hi: "टैंक तय तारीख से एक हफ़्ता पहले ही सौंप दिए गए। वेल्डिंग की गुणवत्ता पहली ही बार में हमारे थर्ड-पार्टी निरीक्षण में पास हो गई।",
    },
  },
  {
    id: 2,
    name: { en: "Anil Verma", hi: "अनिल वर्मा" },
    company: { en: "Plant Head, Himalaya Solvents", hi: "प्लांट हेड, हिमालया सॉल्वेंट्स" },
    rating: 5,
    projectId: 2,
    text: {
      en: "They looked after everything from foundation to commissioning. We only had to deal with one team, and the plant has run without problems since.",
      hi: "नींव से लेकर कमीशनिंग तक सब कुछ उन्होंने संभाला। हमें सिर्फ़ एक टीम से बात करनी पड़ी, और प्लांट तब से बिना किसी परेशानी के चल रहा है।",
    },
  },
  {
    id: 3,
    name: { en: "Meena Kapoor", hi: "मीना कपूर" },
    company: { en: "Projects Manager, GreenFlow Industries", hi: "प्रोजेक्ट्स मैनेजर, ग्रीनफ्लो इंडस्ट्रीज़" },
    rating: 4,
    projectId: 4,
    text: {
      en: "Good site discipline and clear communication. A few small punch-list items took time to close, but the team came back and finished them.",
      hi: "साइट पर अच्छा अनुशासन और साफ़ संवाद। कुछ छोटे बाकी कामों को पूरा करने में समय लगा, लेकिन टीम वापस आई और उन्हें पूरा किया।",
    },
  },
  {
    id: 4,
    name: { en: "Harpreet Gill", hi: "हरप्रीत गिल" },
    company: { en: "Owner, Gill Pharma Works", hi: "मालिक, गिल फार्मा वर्क्स" },
    rating: 5,
    projectId: 6,
    text: {
      en: "Fair pricing and honest advice. They told us which parts of the budget we could cut safely instead of just selling us more.",
      hi: "उचित दाम और ईमानदार सलाह। उन्होंने बताया कि बजट में कहाँ सुरक्षित रूप से कटौती हो सकती है, हमें बस ज़्यादा बेचने की कोशिश नहीं की।",
    },
  },
];
