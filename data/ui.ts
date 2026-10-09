import type { L } from "@/lib/i18n";

// All fixed website text (buttons, headings, labels) in English and Hindi.
export const ui = {
  nav: {
    home: { en: "Home", hi: "होम" } as L,
    projects: { en: "Projects", hi: "प्रोजेक्ट" } as L,
    gallery: { en: "Gallery", hi: "गैलरी" } as L,
    videos: { en: "Videos", hi: "वीडियो" } as L,
    contact: { en: "About Me", hi: "मेरे बारे में" } as L,
    quote: { en: "Get a quote", hi: "कोटेशन पाएँ" } as L,
    menu: { en: "Toggle menu", hi: "मेन्यू खोलें या बंद करें" } as L,
    switchTo: { en: "हिंदी", hi: "English" } as L,
    switchAria: { en: "Switch to Hindi", hi: "Switch to English" } as L,
  },

  hero: {
    title: {
      en: "I build the tanks and plants that the chemical industry runs on.",
      hi: "मैं वे टैंक और प्लांट बनाता हूँ जिन पर केमिकल उद्योग चलता है।",
    } as L,

    years: {
      en: "{n} years of experience across Punjab, Haryana, and Gujarat.",
      hi: "पंजाब, हरियाणा, और गुजरात में {n} वर्षों का अनुभव।",
    } as L,

    seeProjects: { en: "See my projects", hi: "मेरे प्रोजेक्ट देखें" } as L,
    chat: { en: "Chat on WhatsApp", hi: "WhatsApp पर चैट करें" } as L,
    builtByUs: { en: "Built by me", hi: "मेरे द्वारा बनाया गया" } as L,
    location: { en: "Location", hi: "स्थान" } as L,
    capacity: { en: "Capacity", hi: "क्षमता" } as L,
    year: { en: "Year", hi: "वर्ष" } as L,
    show: { en: "Show", hi: "दिखाएँ" } as L,
  },

  home: {
    builtTitle: {
      en: "Plants I have worked on",
      hi: "मेरे द्वारा किए गए प्लांट प्रोजेक्ट",
    } as L,

    builtSub: {
      en: "A selection of completed tank farms, process plants and treatment units from my work experience.",
      hi: "मेरे कार्य अनुभव के अंतर्गत पूर्ण किए गए टैंक फार्म, प्रोसेस प्लांट और ट्रीटमेंट यूनिट का चयन।",
    } as L,

    viewAll: { en: "View all projects", hi: "सभी प्रोजेक्ट देखें" } as L,

    videoTitle: {
      en: "See my work on site",
      hi: "साइट पर मेरा काम देखें",
    } as L,

    videoSub: {
      en: "Short videos from my fabrication work and project sites. Tap to play full screen.",
      hi: "मेरे फैब्रिकेशन कार्य और प्रोजेक्ट साइट के छोटे वीडियो। फुल स्क्रीन में चलाने के लिए टैप करें।",
    } as L,

    allVideos: { en: "All videos", hi: "सभी वीडियो" } as L,

    ctaTitle: {
      en: "Planning a tank or a plant?",
      hi: "टैंक या प्लांट लगाने की योजना है?",
    } as L,

    ctaSub: {
      en: "Send me the capacity and location on WhatsApp. I will discuss your requirements and provide the next steps.",
      hi: "क्षमता और स्थान मुझे WhatsApp पर भेजें। मैं आपकी आवश्यकताओं पर चर्चा करूँगा और आगे की प्रक्रिया बताऊँगा।",
    } as L,

    talk: { en: "Talk to me", hi: "मुझसे बात करें" } as L,
  },

  reviews: {
    title: {
      en: "What my clients say",
      hi: "मेरे ग्राहक क्या कहते हैं",
    } as L,

    sub: {
      en: "Feedback from plant owners and project managers I have worked with.",
      hi: "जिन प्लांट मालिकों और प्रोजेक्ट मैनेजरों के साथ मैंने काम किया, उनकी राय।",
    } as L,

    avg: {
      en: "average from {n} reviews",
      hi: "{n} समीक्षाओं का औसत",
    } as L,

    project: { en: "Project:", hi: "प्रोजेक्ट:" } as L,

    stars: {
      en: "{r} out of 5 stars",
      hi: "5 में से {r} स्टार",
    } as L,
  },

   gallery: {
     title: {
      en: "My projects",
      hi: "मेरे प्रोजेक्ट",
    } as L,

    sub: {
      en: "Every plant shown here was designed, fabricated and commissioned through my work.",
      hi: "यहाँ दिखाया गया प्रत्येक प्लांट मेरे कार्य अनुभव के माध्यम से डिज़ाइन, निर्माण और कमीशन किया गया है।",
    } as L,

    all: { en: "All", hi: "सभी" } as L,
    photosTitle: { en: "Photo gallery", hi: "फ़ोटो गैलरी" } as L,
    photosSub: { en: "Tap a photo to view it full size.", hi: "फ़ोटो को बड़ा देखने के लिए उस पर टैप करें।" } as L,
    open: { en: "Open photo:", hi: "फ़ोटो खोलें:" } as L,
    close: { en: "Close", hi: "बंद करें" } as L,
    prev: { en: "Previous photo", hi: "पिछली फ़ोटो" } as L,
    next: { en: "Next photo", hi: "अगली फ़ोटो" } as L,
  },

  videosPage: {
    title: { en: "Videos", hi: "वीडियो" } as L,

    sub: {
      en: "Tap a video to watch it full screen. Press Esc to close.",
      hi: "वीडियो को फुल स्क्रीन में देखने के लिए टैप करें। बंद करने के लिए Esc दबाएँ।",
    } as L,

    close: {
      en: "Close video",
      hi: "वीडियो बंद करें",
    } as L,
  },

  contact: {
    title: {
      en: "Tell me what you need built",
      hi: "बताइए, आपको क्या बनवाना है",
    } as L,

    sub: {
      en: "Send me your requirements on WhatsApp or call me directly to discuss your project.",
      hi: "अपनी आवश्यकताएँ मुझे WhatsApp पर भेजें या अपने प्रोजेक्ट पर चर्चा करने के लिए मुझे सीधे कॉल करें।",
    } as L,

    name: { en: "Your name", hi: "आपका नाम" } as L,
    phone: { en: "Phone number", hi: "फ़ोन नंबर" } as L,
    need: { en: "What do you need?", hi: "आपको क्या चाहिए?" } as L,
    details: { en: "Project details", hi: "प्रोजेक्ट का विवरण" } as L,

    placeholder: {
      en: "Capacity, location, material, deadline...",
      hi: "क्षमता, स्थान, सामग्री, समय-सीमा...",
    } as L,

    send: {
      en: "Send on WhatsApp",
      hi: "WhatsApp पर भेजें",
    } as L,

    hello: { en: "Hello", hi: "नमस्ते" } as L,

    lookingFor: {
      en: "Looking for",
      hi: "ज़रूरत",
    } as L,
  },

  about: {
    title: {
      en: "About Me",
      hi: "मेरे बारे में",
    } as L,

    sub: {
      en: "With 25 years of hands-on experience in industrial production and 8 years of specialized experience in plant installation and execution, I bring extensive practical knowledge to every project. My experience in both production and plant execution comes from the same industrial field, allowing me to understand projects not only from an installation perspective but also from the actual production and operational requirements of a plant.",

      hi: "औद्योगिक उत्पादन के क्षेत्र में 25 वर्षों के व्यावहारिक अनुभव और प्लांट इंस्टॉलेशन एवं निष्पादन में 8 वर्षों के विशेष अनुभव के साथ, मैं प्रत्येक परियोजना में व्यापक व्यावहारिक ज्ञान प्रदान करता हूँ। उत्पादन और प्लांट निष्पादन दोनों क्षेत्रों में मेरा अनुभव एक ही औद्योगिक क्षेत्र से जुड़ा हुआ है, जिससे मैं किसी भी परियोजना को केवल इंस्टॉलेशन के दृष्टिकोण से ही नहीं, बल्कि प्लांट की वास्तविक उत्पादन एवं संचालन आवश्यकताओं को ध्यान में रखते हुए समझने और निष्पादित करने में सक्षम हूँ।",
    } as L,

    experience: {
      en: "My expertise covers complete industrial plant development, from initial infrastructure planning and engineering to equipment and tank installation, fabrication, process piping, structural work, utility integration, electrical and instrumentation systems, plant integration, commissioning, and production readiness. I also undertake specialized work such as rubber lining, acid-proof brick lining, maintenance, shutdown activities, and other plant-related execution requirements.",

      hi: "मेरी विशेषज्ञता संपूर्ण औद्योगिक प्लांट विकास में है, जिसमें प्रारंभिक इंफ्रास्ट्रक्चर प्लानिंग एवं इंजीनियरिंग से लेकर उपकरण एवं टैंक इंस्टॉलेशन, फैब्रिकेशन, प्रोसेस पाइपिंग, स्ट्रक्चरल कार्य, यूटिलिटी इंटीग्रेशन, इलेक्ट्रिकल एवं इंस्ट्रूमेंटेशन सिस्टम, प्लांट इंटीग्रेशन, कमीशनिंग तथा उत्पादन हेतु तैयारी तक का कार्य शामिल है। इसके साथ ही मैं रबर लाइनिंग, एसिड-प्रूफ ईंट लाइनिंग, मेंटेनेंस, शटडाउन गतिविधियों तथा अन्य प्लांट-संबंधित निष्पादन कार्य भी करता हूँ।",
    } as L,

    approach: {
      en: "My production experience helps me plan and execute installations with a clear understanding of process requirements, equipment performance, plant operation, and production objectives. This combination of production knowledge and installation expertise enables me to deliver practical, efficient, and reliable solutions tailored to the specific requirements of each industrial project.",

      hi: "मेरा उत्पादन अनुभव मुझे प्रक्रिया संबंधी आवश्यकताओं, उपकरणों के प्रदर्शन, प्लांट संचालन तथा उत्पादन लक्ष्यों की स्पष्ट समझ के साथ इंस्टॉलेशन कार्य की योजना बनाने और उसे निष्पादित करने में सहायता करता है। उत्पादन संबंधी ज्ञान और प्लांट इंस्टॉलेशन विशेषज्ञता का यह संयोजन मुझे प्रत्येक औद्योगिक परियोजना की विशिष्ट आवश्यकताओं के अनुसार व्यावहारिक, प्रभावी और विश्वसनीय समाधान प्रदान करने में सक्षम बनाता है।",
    } as L,

    commitment: {
      en: "I am committed to delivering quality workmanship, safe execution, timely project completion, and dependable plant performance. From project planning and fabrication to installation, commissioning, and production support, my focus remains on providing complete end-to-end industrial solutions.",

      hi: "मैं गुणवत्तापूर्ण कार्य, सुरक्षित निष्पादन, समय पर परियोजना पूर्णता तथा विश्वसनीय प्लांट प्रदर्शन के लिए प्रतिबद्ध हूँ। परियोजना की योजना और फैब्रिकेशन से लेकर इंस्टॉलेशन, कमीशनिंग तथा उत्पादन सहायता तक, मेरा मुख्य उद्देश्य संपूर्ण एंड-टू-एंड औद्योगिक समाधान प्रदान करना है।",
    } as L,
  },

  footer: {
    services: {
      en: "Services",
      hi: "सेवाएँ",
    } as L,

    pages: {
      en: "Pages",
      hi: "पेज",
    } as L,

    contact: {
      en: "About Me",
      hi: "मेरे बारे में",
    } as L,

    msgUs: {
      en: "Message me on WhatsApp",
      hi: "WhatsApp पर मुझे संदेश भेजें",
    } as L,

    rights: {
      en: "All rights reserved.",
      hi: "सर्वाधिकार सुरक्षित।",
    } as L,

    whatsappAria: {
      en: "Chat with me on WhatsApp",
      hi: "WhatsApp पर मुझसे चैट करें",
    } as L,
  },
};