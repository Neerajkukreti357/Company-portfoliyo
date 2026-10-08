import type { L } from "@/lib/i18n";

// All fixed website text (buttons, headings, labels) in English and Hindi.
export const ui = {
  nav: {
    home: { en: "Home", hi: "होम" } as L,
    projects: { en: "Projects", hi: "प्रोजेक्ट" } as L,
    videos: { en: "Videos", hi: "वीडियो" } as L,
    contact: { en: "Contact", hi: "संपर्क" } as L,
    quote: { en: "Get a quote", hi: "कोटेशन पाएँ" } as L,
    menu: { en: "Toggle menu", hi: "मेन्यू खोलें या बंद करें" } as L,
    switchTo: { en: "हिंदी", hi: "English" } as L, // label shows the OTHER language
    switchAria: { en: "Switch to Hindi", hi: "Switch to English" } as L,
  },
  hero: {
    title: {
      en: "We build the tanks and plants that chemical industry runs on.",
      hi: "हम वे टैंक और प्लांट बनाते हैं जिन पर केमिकल उद्योग चलता है।",
    } as L,
    years: {
      en: "{n} years of work across Punjab, Haryana, Himachal and Gujarat.",
      hi: "पंजाब, हरियाणा, हिमाचल और गुजरात में {n} वर्षों का काम।",
    } as L,
    seeProjects: { en: "See our projects", hi: "हमारे प्रोजेक्ट देखें" } as L,
    chat: { en: "Chat on WhatsApp", hi: "WhatsApp पर चैट करें" } as L,
    builtByUs: { en: "Built by us", hi: "हमारे द्वारा बनाया गया" } as L,
    location: { en: "Location", hi: "स्थान" } as L,
    capacity: { en: "Capacity", hi: "क्षमता" } as L,
    year: { en: "Year", hi: "वर्ष" } as L,
    show: { en: "Show", hi: "दिखाएँ" } as L,
  },
  home: {
    builtTitle: { en: "Plants we have already built", hi: "हमारे बनाए हुए प्लांट" } as L,
    builtSub: {
      en: "A selection of completed tank farms, process plants and treatment units.",
      hi: "पूरे हो चुके टैंक फार्म, प्रोसेस प्लांट और ट्रीटमेंट यूनिट का चयन।",
    } as L,
    viewAll: { en: "View all projects", hi: "सभी प्रोजेक्ट देखें" } as L,
    videoTitle: { en: "See the work on site", hi: "साइट पर काम देखें" } as L,
    videoSub: {
      en: "Short videos from our fabrication yard and project sites. Tap to play full screen.",
      hi: "हमारे फैब्रिकेशन यार्ड और प्रोजेक्ट साइट के छोटे वीडियो। फुल स्क्रीन में चलाने के लिए टैप करें।",
    } as L,
    allVideos: { en: "All videos", hi: "सभी वीडियो" } as L,
    ctaTitle: { en: "Planning a tank or a plant?", hi: "टैंक या प्लांट लगाने की योजना है?" } as L,
    ctaSub: {
      en: "Send us the capacity and location on WhatsApp. We will reply with a site visit plan and a quote.",
      hi: "क्षमता और स्थान हमें WhatsApp पर भेजें। हम साइट विज़िट की योजना और कोटेशन के साथ जवाब देंगे।",
    } as L,
    talk: { en: "Talk to us", hi: "हमसे बात करें" } as L,
  },
  reviews: {
    title: { en: "What our clients say", hi: "हमारे ग्राहक क्या कहते हैं" } as L,
    sub: {
      en: "Feedback from plant owners and project managers we have worked with.",
      hi: "जिन प्लांट मालिकों और प्रोजेक्ट मैनेजरों के साथ हमने काम किया, उनकी राय।",
    } as L,
    avg: { en: "average from {n} reviews", hi: "{n} समीक्षाओं का औसत" } as L,
    project: { en: "Project:", hi: "प्रोजेक्ट:" } as L,
    stars: { en: "{r} out of 5 stars", hi: "5 में से {r} स्टार" } as L,
  },
  gallery: {
    title: { en: "Our projects", hi: "हमारे प्रोजेक्ट" } as L,
    sub: {
      en: "Every plant here was designed, fabricated and commissioned by our team.",
      hi: "यहाँ दिखाया हर प्लांट हमारी टीम ने डिज़ाइन, निर्माण और कमीशन किया है।",
    } as L,
    all: { en: "All", hi: "सभी" } as L,
  },
  videosPage: {
    title: { en: "Videos", hi: "वीडियो" } as L,
    sub: {
      en: "Tap a video to watch it full screen. Press Esc to close.",
      hi: "वीडियो को फुल स्क्रीन में देखने के लिए टैप करें। बंद करने के लिए Esc दबाएँ।",
    } as L,
    close: { en: "Close video", hi: "वीडियो बंद करें" } as L,
  },
  contact: {
    title: { en: "Tell us what you need built", hi: "बताइए, आपको क्या बनवाना है" } as L,
    sub: {
      en: "Fill in the form and it opens WhatsApp with your message ready to send. You can also call us directly.",
      hi: "फ़ॉर्म भरें, WhatsApp आपके तैयार संदेश के साथ खुल जाएगा। आप हमें सीधे फ़ोन भी कर सकते हैं।",
    } as L,
    name: { en: "Your name", hi: "आपका नाम" } as L,
    phone: { en: "Phone number", hi: "फ़ोन नंबर" } as L,
    need: { en: "What do you need?", hi: "आपको क्या चाहिए?" } as L,
    details: { en: "Project details", hi: "प्रोजेक्ट का विवरण" } as L,
    placeholder: {
      en: "Capacity, location, material, deadline...",
      hi: "क्षमता, स्थान, सामग्री, समय-सीमा...",
    } as L,
    send: { en: "Send on WhatsApp", hi: "WhatsApp पर भेजें" } as L,
    hello: { en: "Hello", hi: "नमस्ते" } as L,
    lookingFor: { en: "Looking for", hi: "ज़रूरत" } as L,
  },
  footer: {
    services: { en: "Services", hi: "सेवाएँ" } as L,
    pages: { en: "Pages", hi: "पेज" } as L,
    contact: { en: "Contact", hi: "संपर्क" } as L,
    msgUs: { en: "Message us on WhatsApp", hi: "WhatsApp पर संदेश भेजें" } as L,
    rights: { en: "All rights reserved.", hi: "सर्वाधिकार सुरक्षित।" } as L,
    whatsappAria: { en: "Chat on WhatsApp", hi: "WhatsApp पर चैट करें" } as L,
  },
};
