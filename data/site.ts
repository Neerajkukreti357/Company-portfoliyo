import appImages from "@/constants/imageConstants";
import type { L } from "@/lib/i18n";
import { StaticImageData } from "next/image";

// ✏️ Edit company details, projects, videos and reviews here (English and Hindi side by side).

export const site = {
  name: {
    en: "FertiCraft FabTech",
    hi: "फर्टीक्राफ्ट फैबटेक",
  } as L,
  short: { en: "FertiCraft", hi: "फर्टीक्राफ्ट" } as L,
  tagline: {
    en: "We design, fabricate and commission chemical storage and process plants.",
    hi: "हम केमिकल स्टोरेज टैंक और प्रोसेस प्लांट का डिज़ाइन, निर्माण और कमीशनिंग करते हैं।",
  } as L,
  phone: "+91 96274209273",
  whatsapp: "9196274209273", // country code + number, no + or spaces
  address: {
    en: "House No. 105, Prateet Nagar, Raiwala, Dehradun, 249205",
    hi: "हाउस नंबर 105, प्रतीत नगर, रायवाला, देहरादून, 249205",
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
  image: StaticImageData;
  summary: L;
};

// Put your photos in /public/projects/ and match the file names here.
export const projects: Project[] = [
  {
    id: 1,
    title: {
      en: "Magnesium Sulfate Plant – Agricultural & Industrial Grade",
      hi: "मैग्नीशियम सल्फेट प्लांट – कृषि एवं औद्योगिक ग्रेड",
    },
    category: "plants",
    location: { en: "Gandhinagar ,Gujrat", hi: "गांधीनगर, गुजरात" },
    year: 2026,
    capacity: { en: "600 mt/month", hi: "600 मीट्रिक टन/माह" },
    image: appImages.umia1,
    summary: {
      en: "Infrastructure designed for efficient plant integration, including MS tank installation, full containment bunds, transfer piping, loading bay, and trial production facilities.",
      hi: "कुशल प्लांट इंटीग्रेशन के लिए डिज़ाइन किया गया इंफ्रास्ट्रक्चर, जिसमें MS टैंक इंस्टॉलेशन, पूर्ण कंटेनमेंट बंड, ट्रांसफर पाइपिंग, लोडिंग बे और ट्रायल प्रोडक्शन सुविधाएँ शामिल हैं।",
    },
  },
  {
    id: 2,
    title: {
      en: "Phosphorus Sulphate Plant – Industrial & Fertilizer Grade",
      hi: "फॉस्फोरस सल्फेट प्लांट – औद्योगिक एवं उर्वरक ग्रेड",
    },
    category: "plants",
    location: {
      en: "Modinagar, Ghaziabad",
      hi: "मोदीनगर, गाजियाबाद",
    },
    year: 2026,
    capacity: {
      en: "360 MT/month",
      hi: "360 मीट्रिक टन/माह",
    },
    image: appImages.krishna1,
    summary: {
      en: "Complete plant development covering infrastructure design, tank design and installation, rubber lining, acid-proof brick lining, and end-to-end plant integration through to production.",
      hi: "इंफ्रास्ट्रक्चर डिज़ाइन, टैंक डिज़ाइन एवं इंस्टॉलेशन, रबर लाइनिंग, एसिड-प्रूफ ईंट लाइनिंग तथा संपूर्ण प्लांट इंटीग्रेशन से लेकर उत्पादन तक का पूर्ण प्लांट विकास कार्य।",
    },
  },
  {
    id: 3,
    title: {
      en: "Magnesium Sulphate & Phosphorus Sulphate Fertilizer Grade Plant",
      hi: "मैग्नीशियम सल्फेट एवं फॉस्फोरस सल्फेट उर्वरक ग्रेड प्लांट",
    },
    category: "plants",
    location: {
      en: "Sirsa, Haryana",
      hi: "सिरसा, हरियाणा",
    },
    year: 2025,
    capacity: {
      en: "900 MT/month",
      hi: "900 मीट्रिक टन/माह",
    },
    image: appImages.annpurna1,
    summary: {
      en: "End-to-end plant development executed by our team, covering infrastructure planning and design, tank design and installation, rubber lining, acid-proof brick lining, complete plant integration, and commissioning for production.",
      hi: "हमारी टीम द्वारा किया गया संपूर्ण प्लांट विकास कार्य, जिसमें इंफ्रास्ट्रक्चर प्लानिंग एवं डिज़ाइन, टैंक डिज़ाइन एवं इंस्टॉलेशन, रबर लाइनिंग, एसिड-प्रूफ ईंट लाइनिंग, संपूर्ण प्लांट इंटीग्रेशन तथा उत्पादन हेतु कमीशनिंग शामिल है।",
    },
  },
  {
  id: 4,
  title: {
    en: "Magnesium Sulphate – Textile Grade Plant",
    hi: "मैग्नीशियम सल्फेट – टेक्सटाइल ग्रेड प्लांट",
  },
  category: "plants",
  location: {
    en: "Panipat, Haryana",
    hi: "पानीपत, हरियाणा",
  },
  year: 2026,
  capacity: {
    en: "600 MT/month",
    hi: "600 मीट्रिक टन/माह",
  },
  image: appImages.terra1,
  summary: {
    en: "Complete end-to-end plant execution by our team, covering infrastructure development, equipment and tank installation, process piping, electrical and instrumentation work, utility integration, plant commissioning, and production readiness.",
    hi: "हमारी टीम द्वारा किया गया संपूर्ण एंड-टू-एंड प्लांट कार्य, जिसमें इंफ्रास्ट्रक्चर विकास, उपकरण एवं टैंक इंस्टॉलेशन, प्रोसेस पाइपिंग, इलेक्ट्रिकल एवं इंस्ट्रूमेंटेशन कार्य, यूटिलिटी इंटीग्रेशन, प्लांट कमीशनिंग तथा उत्पादन हेतु तैयारी शामिल है।",
  },
},
];

export type Video = {
  id: number;
  title: {
    en: string;
    hi: string;
  };
  location: {
    en: string;
    hi: string;
  };
  duration: string;
  thumb: string;
  src: string;
};

// Videos: use a YouTube link OR a file in /public/videos/ (e.g. "/videos/tank-farm.mp4").
export const videos: Video[] = [
  {
    id: 1,
    title: {
      en: "Complete Plant Integration and Commissioning",
      hi: "संपूर्ण प्लांट इंटीग्रेशन एवं कमीशनिंग",
    },
    location: { en: "Gandhinagar ,Gujrat", hi: "गांधीनगर, गुजरात" },
    duration: "1:49",
    thumb: "",
    src: "/videos/umia/umia2.mp4",
  },
  {
    id: 2,
    title: {
      en: "Phosphorus Sulphate Plant – Industrial & Fertilizer Grade",
      hi: "फॉस्फोरस सल्फेट प्लांट – औद्योगिक एवं उर्वरक ग्रेड",
    },
    location: {
      en: "Modinagar, Ghaziabad",
      hi: "मोदीनगर, गाजियाबाद",
    },
    duration: "0.46",
    thumb: "",
    src: "/videos/krishna/krishna1.mp4",
  },
  {
    id: 3,
    title: {
      en: "Magnesium Sulphate & Phosphorus Sulphate Fertilizer Grade Plant",
      hi: "मैग्नीशियम सल्फेट एवं फॉस्फोरस सल्फेट उर्वरक ग्रेड प्लांट",
    },
    location: {
      en: "Sirsa, Haryana",
      hi: "सिरसा, हरियाणा",
    },
    duration: "3:26",
    thumb: "",
    src: "/videos/annapurna/annapurna1.mp4",
  },
  {
    id: 4,
    title: {
      en: "Magnesium Sulphate & Phosphorus Sulphate Fertilizer Grade Plant",
      hi: "मैग्नीशियम सल्फेट एवं फॉस्फोरस सल्फेट उर्वरक ग्रेड प्लांट",
    },
    location: {
      en: "Sirsa, Haryana",
      hi: "सिरसा, हरियाणा",
    },
    duration: "0:18",
    thumb: "",
    src: "/videos/terra/terra1.mp4",
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
    company: {
      en: "Managing Director, Northern Chemicals",
      hi: "मैनेजिंग डायरेक्टर, नॉर्दर्न केमिकल्स",
    },
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
    company: {
      en: "Plant Head, Himalaya Solvents",
      hi: "प्लांट हेड, हिमालया सॉल्वेंट्स",
    },
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
    company: {
      en: "Projects Manager, GreenFlow Industries",
      hi: "प्रोजेक्ट्स मैनेजर, ग्रीनफ्लो इंडस्ट्रीज़",
    },
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
