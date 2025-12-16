
import { Scenario, MythReality, QuizLevel, EmergencyType, Translation, Symptom } from './types';

export const APP_INFO = {
  name: "GorilX",
  developer: "Piyush Joshi",
  company: "RashmiOS",
  helpline: "1930"
};

export const UI_TEXT: Translation = {
  home: { en: "Home", hi: "होम" },
  learn: { en: "Learn", hi: "सिखें" },
  quiz: { en: "Quiz", hi: "क्विज़" },
  tools: { en: "Tools", hi: "टूल्स" },
  emergency: { en: "Emergency", hi: "आपातकालीन" },
  panicMode: { en: "Panic Mode", hi: "पैनिक मोड" },
  welcome: { en: "Welcome to GorilX", hi: "GorilX में आपका स्वागत है" },
  subtitle: { en: "Your shield against digital threats", hi: "डिजिटल खतरों के खिलाफ आपकी ढाल" },
  startLearning: { en: "Start Learning", hi: "सीखना शुरू करें" },
  passwordChecker: { en: "Password Checker", hi: "पासवर्ड चेकर" },
  checkStrength: { en: "Check Strength", hi: "ताकत जांचें" },
  strong: { en: "Strong", hi: "मजबूत" },
  weak: { en: "Weak", hi: "कमजोर" },
  moderate: { en: "Moderate", hi: "मध्यम" },
  mythVsReality: { en: "Myth vs Reality", hi: "मिथक बनाम वास्तविकता" },
  didYouKnow: { en: "Did you know?", hi: "क्या आप जानते हैं?" },
  cyberHelpline: { en: "National Helpline: 1930", hi: "राष्ट्रीय हेल्पलाइन: 1930" },
  xp: { en: "XP", hi: "XP" },
  locked: { en: "Locked", hi: "बंद है" },
  completed: { en: "Completed", hi: "पूरा हुआ" },
  play: { en: "Play", hi: "खेलें" },
  certificate: { en: "Certificate", hi: "प्रमाण पत्र" },
  generateCertificate: { en: "Get Certificate", hi: "प्रमाण पत्र प्राप्त करें" },
  enterName: { en: "Enter your name", hi: "अपना नाम दर्ज करें" },
  download: { en: "Download", hi: "डाउनलोड" },
  safetyScenarios: { en: "Safety Scenarios", hi: "सुरक्षा परिदृश्य" },
  dos: { en: "Do's", hi: "क्या करें" },
  donts: { en: "Don'ts", hi: "क्या न करें" },
  emergencyHelp: { en: "Emergency Help", hi: "आपातकालीन सहायता" },
  selectIssue: { en: "Select your issue", hi: "अपनी समस्या चुनें" },
  immediateAction: { en: "Immediate Actions", hi: "तत्काल कार्रवाई" },
  evidenceNeeded: { en: "Collect Evidence", hi: "सबूत इकट्ठा करें" },
  callHelpline: { en: "Call 1930 Now", hi: "अभी 1930 पर कॉल करें" },
  disclaimer: { en: "Educational purpose only.", hi: "केवल शैक्षिक उद्देश्य के लिए।" },
  next: { en: "Next", hi: "अगला" },
  submit: { en: "Submit", hi: "जमा करें" },
  retry: { en: "Retry", hi: "पुनः प्रयास करें" },
  correct: { en: "Correct!", hi: "सही!" },
  incorrect: { en: "Incorrect", hi: "गलत" },
  symptomChecker: { en: "Symptom Checker", hi: "लक्षण जाँचकर्ता" },
  checkSymptoms: { en: "Check Signs & Symptoms", hi: "संकेत और लक्षण जांचें" },
  amIHacked: { en: "Am I Hacked?", hi: "क्या मैं हैक हो गया हूँ?" },
  howToCheck: { en: "How to confirm?", hi: "पुष्टि कैसे करें?" },
  solution: { en: "Solution / Fix", hi: "समाधान / ठीक करें" },
};

export const SYMPTOMS: Symptom[] = [
  {
    id: 'otp-bombing',
    iconName: 'MessageSquareWarning',
    title: { en: "Getting Too Many OTPs", hi: "बहुत सारे OTP प्राप्त हो रहे हैं" },
    indication: { 
      en: "You are receiving a flood of OTP SMS for apps you are not trying to log in to (Zomato, Flipkart, Uber, etc.).", 
      hi: "आपको उन ऐप्स के लिए बहुत सारे OTP एसएमएस मिल रहे हैं जिनमें आप लॉग इन करने का प्रयास नहीं कर रहे हैं (Zomato, Flipkart, Uber, आदि)।" 
    },
    confirmation: {
      en: ["Check if money is deducted from your bank.", "Check if you received any suspicious emails along with SMS.", "If it stops after 10-20 minutes, it's likely 'SMS Bombing' prank."],
      hi: ["जांचें कि क्या आपके बैंक से पैसे कटे हैं।", "जांचें कि क्या आपको एसएमएस के साथ कोई संदिग्ध ईमेल मिला है।", "यदि यह 10-20 मिनट के बाद बंद हो जाता है, तो यह 'SMS बॉम्बिंग' प्रैंक हो सकता है।"]
    },
    action: {
      en: ["DO NOT share any OTP with anyone.", "Enable 'Do Not Disturb' (DND) on your number.", "Install truecaller/spam blocker apps.", "Ignore them if no money is lost; it is usually a distraction tactic."],
      hi: ["किसी के साथ कोई OTP साझा न करें।", "अपने नंबर पर 'डू नॉट डिस्टर्ब' (DND) सक्षम करें।", "ट्रूकॉलर/स्पैम ब्लॉकर ऐप इंस्टॉल करें।", "यदि कोई पैसा नहीं खोया है तो उन्हें अनदेखा करें; यह आमतौर पर ध्यान भटकाने की चाल होती है।"]
    }
  },
  {
    id: 'phone-slow',
    iconName: 'Thermometer',
    title: { en: "Phone Overheating / Slow", hi: "फोन गर्म होना / धीमा होना" },
    indication: {
      en: "Your phone feels hot even when idle, battery drains very fast, and apps are lagging.",
      hi: "आपका फोन बेकार पड़े रहने पर भी गर्म लगता है, बैटरी बहुत तेजी से खत्म होती है, और ऐप्स लैग कर रहे हैं।"
    },
    confirmation: {
      en: ["Check Battery Usage settings to see which app is using the most power.", "Check Data Usage for unusually high background data.", "Look for apps you don't remember installing."],
      hi: ["यह देखने के लिए बैटरी उपयोग सेटिंग जांचें कि कौन सा ऐप सबसे अधिक पावर का उपयोग कर रहा है।", "असामान्य रूप से उच्च पृष्ठभूमि डेटा के लिए डेटा उपयोग की जाँच करें।", "उन ऐप्स को देखें जिन्हें आपको इंस्टॉल करना याद नहीं है।"]
    },
    action: {
      en: ["Uninstall suspicious/unknown apps immediately.", "Run a virus scan.", "If persistent, backup photos/contacts and Factory Reset the phone."],
      hi: ["संदेहजनक/अज्ञात ऐप्स को तुरंत अनइंस्टॉल करें।", "वायरस स्कैन चलाएं।", "यदि यह बना रहता है, तो फ़ोटो/संपर्क का बैकअप लें और फ़ोन को फ़ैक्टरी रीसेट करें।"]
    }
  },
  {
    id: 'popups',
    iconName: 'AlertOctagon',
    title: { en: "Random Pop-up Ads", hi: "रैंडम पॉप-अप विज्ञापन" },
    indication: {
      en: "Full-screen ads appear suddenly on your home screen or over other apps (WhatsApp, Settings).",
      hi: "फुल-स्क्रीन विज्ञापन अचानक आपकी होम स्क्रीन पर या अन्य ऐप्स (व्हाट्सएप, सेटिंग्स) के ऊपर दिखाई देते हैं।"
    },
    confirmation: {
      en: ["Go to Settings > Apps. Look for an app with NO NAME and NO ICON (usually at the top or bottom).", "Check recently installed apps."],
      hi: ["सेटिंग्स > ऐप्स पर जाएं। बिना नाम और बिना आइकन वाले ऐप की तलाश करें (आमतौर पर ऊपर या नीचे)।", "हाल ही में इंस्टॉल किए गए ऐप्स जांचें।"]
    },
    action: {
      en: ["Uninstall the app with no name/icon.", "Clear Cache of your Chrome/Browser.", "Avoid downloading 'Mod' or 'Cracked' games."],
      hi: ["बिना नाम/आइकन वाले ऐप को अनइंस्टॉल करें।", "अपने क्रोम/ब्राउज़र का कैश साफ़ करें।", "'Mod' या 'Cracked' गेम डाउनलोड करने से बचें।"]
    }
  },
  {
    id: 'ghost-touch',
    iconName: 'Touchpad',
    title: { en: "Ghost Touch / Phone Controlling Itself", hi: "घोस्ट टच / फोन खुद चल रहा है" },
    indication: {
      en: "Apps open automatically, typing happens without you touching the screen.",
      hi: "ऐप्स अपने अपने आप खुलते हैं, स्क्रीन को छुए बिना टाइपिंग होती है।"
    },
    confirmation: {
      en: ["Turn off internet immediately.", "Check if 'Accessibility' permission is given to any unknown app."],
      hi: ["इंटरनेट तुरंत बंद करें।", "जांचें कि क्या किसी अज्ञात ऐप को 'एक्सेसिबिलिटी' की अनुमति दी गई है।"]
    },
    action: {
      en: ["Revoke Accessibility permissions.", "Uninstall recent apps.", "Restart in Safe Mode to check if it's hardware or software issue."],
      hi: ["एक्सेसिबिलिटी अनुमति रद्द करें।", "हाल के ऐप्स अनइंस्टॉल करें।", "यह जांचने के लिए सेफ मोड में रीस्टार्ट करें कि यह हार्डवेयर या सॉफ्टवेयर समस्या है।"]
    }
  },
  {
    id: 'spam-messages',
    iconName: 'UserX',
    title: { en: "Friends Receiving Spam From You", hi: "दोस्तों को आपसे स्पैम मिल रहा है" },
    indication: {
      en: "Your friends say they received weird links or money requests from your account, but you didn't send them.",
      hi: "आपके दोस्त कहते हैं कि उन्हें आपके खाते से अजीब लिंक या पैसे के अनुरोध मिले, लेकिन आपने उन्हें नहीं भेजा।"
    },
    confirmation: {
      en: ["Check 'Login Activity' in Instagram/Facebook/WhatsApp settings.", "Check if you can still log in."],
      hi: ["Instagram/Facebook/WhatsApp सेटिंग्स में 'लॉगिन गतिविधि' जांचें।", "जांचें कि क्या आप अभी भी लॉग इन कर सकते हैं।"]
    },
    action: {
      en: ["Change your social media password immediately.", "Enable Two-Factor Authentication (2FA).", "Post a status warning your friends not to click any links."],
      hi: ["अपना सोशल मीडिया पासवर्ड तुरंत बदलें।", "टू-फैक्टर ऑथेंटिकेशन (2FA) सक्षम करें।", "एक स्टेटस डालकर अपने दोस्तों को लिंक पर क्लिक न करने की चेतावनी दें।"]
    }
  }
];

export const SCENARIOS: Scenario[] = [
  {
    id: 'digital-arrest',
    iconName: 'Siren',
    title: { en: "Digital Arrest / Fedex Scam", hi: "डिजिटल अरेस्ट / फेडेक्स स्कैम" },
    description: {
      en: "Calls claiming a parcel with drugs/passport in your name is seized. Fake 'Police' interrogate you via video call and demand money to avoid arrest.",
      hi: "फोन आता है कि आपके नाम का ड्रग्स/पासपोर्ट वाला पार्सल जब्त हो गया है। नकली 'पुलिस' वीडियो कॉल पर पूछताछ करती है और गिरफ्तारी से बचने के लिए पैसे मांगती है।"
    },
    dos: {
      en: ["Disconnect immediately", "Police never interrogate via video call"],
      hi: ["तुरंत फोन काट दें", "पुलिस कभी वीडियो कॉल पर पूछताछ नहीं करती"]
    },
    donts: {
      en: ["Don't stay on line out of fear", "Don't transfer money for 'verification'"],
      hi: ["डर के मारे लाइन पर न रहें", "'सत्यापन' के लिए पैसे ट्रांसफर न करें"]
    }
  },
  {
    id: 'upi',
    iconName: 'Smartphone',
    title: { en: "UPI & Payment Fraud", hi: "UPI और भुगतान धोखाधड़ी" },
    description: { 
      en: "Scammers ask you to scan a QR code or enter a PIN to 'receive' money. Remember, PIN is only for sending money.", 
      hi: "स्कैमर्स आपको पैसे 'प्राप्त' करने के लिए क्यूआर कोड स्कैन करने या पिन दर्ज करने के लिए कहते हैं। याद रखें, पिन केवल पैसे भेजने के लिए होता है।" 
    },
    dos: {
      en: ["Verify receiver's name before payment", "Use official apps only"],
      hi: ["भुगतान से पहले प्राप्तकर्ता के नाम की पुष्टि करें", "केवल आधिकारिक ऐप्स का उपयोग करें"]
    },
    donts: {
      en: ["Never share UPI PIN to receive money", "Don't accept unknown collect requests"],
      hi: ["पैसे प्राप्त करने के लिए कभी भी UPI पिन साझा न करें", "अज्ञात कलेक्ट अनुरोध स्वीकार न करें"]
    }
  },
  {
    id: 'quishing',
    iconName: 'Smartphone',
    title: { en: "QR Code Phishing (Quishing)", hi: "क्यूआर कोड फिशिंग (Quishing)" },
    description: {
      en: "You find a QR code on a parking meter or receive one via email to 'verify' an account. It leads to a fake website stealing your data.",
      hi: "आपको पार्किंग मीटर पर या ईमेल द्वारा खाते को 'सत्यापित' करने के लिए एक क्यूआर कोड मिलता है। यह डेटा चुराने वाली नकली वेबसाइट पर ले जाता है।"
    },
    dos: {
      en: ["Inspect physical QR codes for stickers over original ones", "Check URL after scanning"],
      hi: ["असली के ऊपर चिपकाए गए स्टिकर के लिए भौतिक क्यूआर कोड की जाँच करें", "स्कैन करने के बाद URL जांचें"]
    },
    donts: {
      en: ["Don't scan random codes in public", "Don't enter sensitive data on QR links"],
      hi: ["सार्वजनिक रूप से यादृच्छिक कोड स्कैन न करें", "QR लिंक पर संवेदनशील डेटा दर्ज न करें"]
    }
  },
  {
    id: 'voice-clone',
    iconName: 'Phone',
    title: { en: "AI Voice Cloning Scam", hi: "एआई वॉयस क्लोनिंग स्कैम" },
    description: {
      en: "You get a call sounding exactly like a family member in distress (crying, asking for money), but it's an AI-generated voice.",
      hi: "आपको बिल्कुल परिवार के किसी सदस्य जैसी आवाज में कॉल आती है जो संकट में है (रो रहा है, पैसे मांग रहा है), लेकिन यह एआई-जनित आवाज है।"
    },
    dos: {
      en: ["Cut the call and call them back on their real number", "Establish a secret code word with family"],
      hi: ["कॉल काटें और उनके असली नंबर पर वापस कॉल करें", "परिवार के साथ एक गुप्त कोड शब्द बनाएं"]
    },
    donts: {
      en: ["Don't panic and transfer money instantly", "Don't trust the voice alone"],
      hi: ["घबराकर तुरंत पैसे ट्रांसफर न करें", "केवल आवाज पर भरोसा न करें"]
    }
  },
  {
    id: 'gaming-fraud',
    iconName: 'Monitor',
    title: { en: "Online Gaming Fraud", hi: "ऑनलाइन गेमिंग धोखाधड़ी" },
    description: {
      en: "Scammers in game chats offer 'free skins', 'gems', or 'cheat codes' in exchange for your login details or parent's card info.",
      hi: "गेम चैट में स्कैमर्स आपके लॉगिन विवरण या माता-पिता के कार्ड की जानकारी के बदले 'फ्री स्किन', 'जवाहरात' या 'चीट कोड' की पेशकश करते हैं।"
    },
    dos: {
      en: ["Buy items only from the official game store", "Enable 2FA on game accounts"],
      hi: ["केवल आधिकारिक गेम स्टोर से आइटम खरीदें", "गेम खातों पर 2FA सक्षम करें"]
    },
    donts: {
      en: ["Never share passwords for 'rank boosting'", "Don't click links in global chat"],
      hi: ["'रैंक बूस्टिंग' के लिए कभी पासवर्ड साझा न करें", "ग्लोबल चैट में लिंक पर क्लिक न करें"]
    }
  },
  {
    id: 'romance',
    iconName: 'UserX',
    title: { en: "Romance Scam", hi: "रोमांस स्कैम" },
    description: {
      en: "Someone you met online professes love quickly, then claims a medical emergency or travel issue and asks for money.",
      hi: "ऑनलाइन मिला कोई व्यक्ति जल्दी प्यार का इजहार करता है, फिर मेडिकल इमरजेंसी या यात्रा की समस्या बताकर पैसे मांगता है।"
    },
    dos: {
      en: ["Video call to verify identity", "Do a reverse image search of their profile photo"],
      hi: ["पहचान सत्यापित करने के लिए वीडियो कॉल करें", "उनकी प्रोफाइल फोटो का रिवर्स इमेज सर्च करें"]
    },
    donts: {
      en: ["Never send money to someone you haven't met", "Don't share intimate photos"],
      hi: ["जिसे आप नहीं मिले उसे कभी पैसे न भेजें", "अंतरंग तस्वीरें साझा न करें"]
    }
  },
  {
    id: 'kyc-fraud',
    iconName: 'CreditCard',
    title: { en: "KYC / SIM Block Fraud", hi: "KYC / सिम ब्लॉक धोखाधड़ी" },
    description: {
      en: "SMS threatening that your Bank Account or SIM will be blocked within 24 hours unless you update KYC via a link.",
      hi: "एसएमएस आता है कि आपका बैंक खाता या सिम 24 घंटे में ब्लॉक हो जाएगा जब तक कि आप लिंक के माध्यम से केवाईसी अपडेट नहीं करते।"
    },
    dos: {
      en: ["Visit your local bank branch", "Check official app for notifications"],
      hi: ["अपनी स्थानीय बैंक शाखा पर जाएं", "सूचनाओं के लिए आधिकारिक ऐप देखें"]
    },
    donts: {
      en: ["Don't click links in SMS/WhatsApp", "Don't call numbers provided in the SMS"],
      hi: ["SMS/WhatsApp में लिंक पर क्लिक न करें", "SMS में दिए गए नंबरों पर कॉल न करें"]
    }
  },
  {
    id: 'screen-sharing',
    iconName: 'Monitor',
    title: { en: "Screen Sharing Scam", hi: "स्क्रीन शेयरिंग स्कैम" },
    description: {
      en: "Fraudsters ask you to download apps like AnyDesk, TeamViewer, or QuickSupport to 'fix' an issue or process a refund, giving them full control of your phone.",
      hi: "धोखेबाज 'समस्या ठीक करने' या 'रिफंड' के लिए AnyDesk, TeamViewer या QuickSupport जैसे ऐप डाउनलोड करवाते हैं, जिससे उन्हें आपके फोन का पूरा नियंत्रण मिल जाता है।"
    },
    dos: {
      en: ["Uninstall such apps if downloaded", "Disconnect call immediately"],
      hi: ["यदि डाउनलोड किया है तो ऐसे ऐप्स को अनइंस्टॉल करें", "तुरंत कॉल काट दें"]
    },
    donts: {
      en: ["Never share 9-digit code", "Don't grant accessibility permissions"],
      hi: ["कभी भी 9-अंकीय कोड साझा न करें", "एक्सेसिबिलिटी अनुमति न दें"]
    }
  },
  {
    id: 'sextortion',
    iconName: 'Video',
    title: { en: "Sextortion / Video Call", hi: "सेक्सटॉर्शन / वीडियो कॉल स्कैम" },
    description: {
      en: "You answer a video call from an unknown number. A nude person appears, takes a screenshot with your face, and threatens to share it with friends unless paid.",
      hi: "आप अनजान नंबर से वीडियो कॉल उठाते हैं। एक नग्न व्यक्ति दिखाई देता है, आपके चेहरे के साथ स्क्रीनशॉट लेता है, और पैसे न देने पर दोस्तों के साथ साझा करने की धमकी देता है।"
    },
    dos: {
      en: ["Cover front camera if suspicious", "Block and Report to 1930"],
      hi: ["संदेह होने पर फ्रंट कैमरा ढक लें", "ब्लॉक करें और 1930 पर रिपोर्ट करें"]
    },
    donts: {
      en: ["Don't pay (they will demand more)", "Don't answer video calls from unknowns"],
      hi: ["पैसे न दें (वे और मांगेंगे)", "अज्ञात लोगों की वीडियो कॉल न उठाएं"]
    }
  },
  {
    id: 'fake-helpline',
    iconName: 'Phone',
    title: { en: "Fake Customer Care", hi: "फर्जी कस्टमर केयर" },
    description: {
      en: "You Google a customer care number (e.g., for a flight refund or bank). The number belongs to a scammer who steals your card details.",
      hi: "आप कस्टमर केयर नंबर (जैसे, फ्लाइट रिफंड या बैंक) गूगल करते हैं। नंबर एक स्कैमर का होता है जो आपके कार्ड का विवरण चुरा लेता है।"
    },
    dos: {
      en: ["Find numbers only in official App", "Check official website URL carefully"],
      hi: ["केवल आधिकारिक ऐप में नंबर खोजें", "आधिकारिक वेबसाइट URL को ध्यान से देखें"]
    },
    donts: {
      en: ["Don't trust Google Search results blindly", "Never share OTP on call"],
      hi: ["गूगल खोज परिणामों पर आंख मूंदकर भरोसा न करें", "कॉल पर कभी भी OTP साझा न करें"]
    }
  },
  {
    id: 'courier',
    iconName: 'Package',
    title: { en: "Fake Courier Scam", hi: "फर्जी कूरियर स्कैम" },
    description: { 
      en: "You receive a message that your package is stuck and need to pay a small fee (Rs. 5) to clear it.", 
      hi: "आपको एक संदेश मिलता है कि आपका पैकेज अटक गया है और इसे क्लियर करने के लिए छोटा शुल्क (5 रुपये) देना होगा।" 
    },
    dos: {
      en: ["Check tracking on official website", "Ignore links in SMS from unknown numbers"],
      hi: ["आधिकारिक वेबसाइट पर ट्रैकिंग की जाँच करें", "अज्ञात नंबरों से आए SMS में लिंक को अनदेखा करें"]
    },
    donts: {
      en: ["Don't click generic short links (bit.ly)", "Don't make small payments to verify"],
      hi: ["जेनेरिक शॉर्ट लिंक (bit.ly) पर क्लिक न करें", "सत्यापन के लिए छोटे भुगतान न करें"]
    }
  },
  {
    id: 'loan-apps',
    iconName: 'Banknote',
    title: { en: "Illegal Loan Apps", hi: "अवैध लोन ऐप्स" },
    description: {
      en: "Instant loan apps offer easy money but hack your contacts and gallery. They morph your photos and harass your contacts for blackmail.",
      hi: "इंस्टेंट लोन ऐप्स आसान पैसे देते हैं लेकिन आपके संपर्क और गैलरी हैक कर लेते हैं। वे आपकी तस्वीरों को मॉर्फ करते हैं और ब्लैकमेल के लिए संपर्कों को परेशान करते हैं।"
    },
    dos: {
      en: ["Use only RBI registered apps", "Check app permissions before installing"],
      hi: ["केवल RBI पंजीकृत ऐप्स का उपयोग करें", "इंस्टॉल करने से पहले ऐप अनुमतियां जांचें"]
    },
    donts: {
      en: ["Don't give Gallery/Contact permission", "Don't download apps from APK sites"],
      hi: ["गैलरी/संपर्क अनुमति न दें", "APK साइटों से ऐप डाउनलोड न करें"]
    }
  },
  {
    id: 'job',
    iconName: 'Briefcase',
    title: { en: "Job & Internship Scam", hi: "नौकरी और इंटर्नशिप स्कैम" },
    description: {
      en: "Offers for high paying 'Part-time' jobs just for liking videos or rating hotels on Maps. They ask for a deposit to withdraw 'earnings'.",
      hi: "केवल वीडियो लाइक करने या मैप्स पर होटल रेटिंग देने के लिए उच्च भुगतान वाली 'पार्ट-टाइम' नौकरियों के ऑफर। वे 'कमाई' निकालने के लिए जमा राशि मांगते हैं।"
    },
    dos: {
      en: ["Verify company on LinkedIn/Glassdoor", "Ask for official offer letter via email"],
      hi: ["लिंक्डइन/ग्लासडोर पर कंपनी की पुष्टि करें", "ईमेल के माध्यम से आधिकारिक ऑफर लेटर मांगें"]
    },
    donts: {
      en: ["Never pay money to get a job", "Don't share bank details via WhatsApp"],
      hi: ["नौकरी पाने के लिए कभी पैसे न दें", "व्हाट्सएप के माध्यम से बैंक विवरण साझा न करें"]
    }
  },
  {
    id: 'investment',
    iconName: 'TrendingUp',
    title: { en: "Crypto/Investment Scam", hi: "क्रिप्टो/निवेश स्कैम" },
    description: {
      en: "WhatsApp/Telegram groups promising to double your money in 3 days. They show fake profit screenshots but block you when you try to withdraw.",
      hi: "व्हाट्सएप/टेलीग्राम समूह 3 दिनों में आपके पैसे दोगुना करने का वादा करते हैं। वे नकली लाभ स्क्रीनशॉट दिखाते हैं लेकिन जब आप निकालने की कोशिश करते हैं तो ब्लॉक कर देते हैं।"
    },
    dos: {
      en: ["Check SEBI registration", "Trust only regulated platforms"],
      hi: ["सेबी पंजीकरण की जाँच करें", "केवल विनियमित प्लेटफार्मों पर भरोसा करें"]
    },
    donts: {
      en: ["Don't trust 'tips' from strangers", "Don't invest based on screenshots"],
      hi: ["अजनबियों के 'टिप्स' पर भरोसा न करें", "स्क्रीनशॉट के आधार पर निवेश न करें"]
    }
  },
  {
    id: 'juice-jacking',
    iconName: 'PlugZap',
    title: { en: "Juice Jacking (USB)", hi: "जूस जैकिंग (USB)" },
    description: {
      en: "Charging your phone at public USB charging stations (airports/stations) can allow hackers to steal data or install malware via the cable.",
      hi: "सार्वजनिक यूएसबी चार्जिंग स्टेशनों (हवाई अड्डों/स्टेशनों) पर अपना फोन चार्ज करने से हैकर्स डेटा चुरा सकते हैं या केबल के माध्यम से मैलवेयर इंस्टॉल कर सकते हैं।"
    },
    dos: {
      en: ["Use your own power bank or AC adapter", "Use a data-blocker USB adapter"],
      hi: ["अपने खुद के पावर बैंक या एसी एडाप्टर का उपयोग करें", "डेटा-ब्लॉकर USB एडाप्टर का उपयोग करें"]
    },
    donts: {
      en: ["Don't use public USB ports directly", "Don't trust connected computers"],
      hi: ["सीधे सार्वजनिक USB पोर्ट का उपयोग न करें", "जुड़े कंप्यूटरों पर भरोसा न करें"]
    }
  }
];

export const MYTHS: MythReality[] = [
  {
    id: 'm1',
    myth: { en: "Incognito mode makes me invisible.", hi: "इनकोग्निटो मोड मुझे अदृश्य बनाता है।" },
    reality: { en: "It only stops browser history. ISP and websites can still track you.", hi: "यह केवल ब्राउज़र इतिहास को रोकता है। ISP और वेबसाइट अभी भी आपको ट्रैक कर सकते हैं।" }
  },
  {
    id: 'm2',
    myth: { en: "Mac/iPhone cannot get viruses.", hi: "मैक/आईफोन में वायरस नहीं आ सकता।" },
    reality: { en: "Any device can be compromised via phishing or bad apps.", hi: "फिशिंग या खराब ऐप्स के जरिए किसी भी डिवाइस से छेड़छाड़ की जा सकती है।" }
  },
  {
    id: 'm3',
    myth: { en: "HTTPS means a website is 100% safe.", hi: "HTTPS का मतलब है कि वेबसाइट 100% सुरक्षित है।" },
    reality: { en: "HTTPS only means the connection is encrypted. A scam site can also have HTTPS.", hi: "HTTPS का मतलब केवल यह है कि कनेक्शन एन्क्रिप्टेड है। एक स्कैम साइट में भी HTTPS हो सकता है।" }
  },
  {
    id: 'm4',
    myth: { en: "I don't need antivirus if I am careful.", hi: "अगर मैं सावधान हूं तो मुझे एंटीवायरस की जरूरत नहीं है।" },
    reality: { en: "Drive-by downloads can infect devices just by visiting a webpage.", hi: "ड्राइव-बाय डाउनलोड केवल वेबपेज पर जाने से डिवाइस को संक्रमित कर सकते हैं।" }
  },
  {
    id: 'm5',
    myth: { en: "Deleting a file removes it forever.", hi: "फ़ाइल हटाने से वह हमेशा के लिए हट जाती है।" },
    reality: { en: "Deleted files can often be recovered. Use 'shred' or factory reset to wipe data.", hi: "हटाए गए फ़ाइलों को अक्सर पुनर्प्राप्त किया जा सकता है। डेटा मिटाने के लिए 'श्रेड' या फ़ैक्टरी रीसेट का उपयोग करें।" }
  },
  {
    id: 'm6',
    myth: { en: "Hackers only target rich people.", hi: "हैकर्स केवल अमीर लोगों को निशाना बनाते हैं।" },
    reality: { en: "Most attacks are automated and target anyone with data or money.", hi: " अधिकांश हमले स्वचालित होते हैं और डेटा या पैसे वाले किसी भी व्यक्ति को निशाना बनाते हैं।" }
  },
  {
    id: 'm7',
    myth: { en: "Public Wi-Fi is safe if it has a password.", hi: "पब्लिक वाई-फाई सुरक्षित है अगर उसमें पासवर्ड है।" },
    reality: { en: "No. Anyone with the password (like at a cafe) can snoop on your traffic.", hi: "नहीं। पासवर्ड वाला कोई भी व्यक्ति (जैसे कैफे में) आपके ट्रैफिक की जासूसी कर सकता है।" }
  },
  {
    id: 'm8',
    myth: { en: "I should change my password every month.", hi: "मुझे हर महीने अपना पासवर्ड बदलना चाहिए।" },
    reality: { en: "Frequent changes often lead to weaker passwords (e.g., Summer2024, Autumn2024). Use a long, unique one instead.", hi: "बार-बार बदलाव अक्सर कमजोर पासवर्ड की ओर ले जाते हैं। इसके बजाय एक लंबा, अद्वितीय पासवर्ड उपयोग करें।" }
  },
  {
    id: 'm9',
    myth: { en: "Apps on Play Store / App Store are 100% safe.", hi: "प्ले स्टोर / ऐप स्टोर पर ऐप्स 100% सुरक्षित हैं।" },
    reality: { en: "Malicious apps often slip through checks. Always check reviews and permissions.", hi: "दुर्भावनापूर्ण ऐप्स अक्सर जांच से बच निकलते हैं। हमेशा समीक्षाएं और अनुमतियां जांचें।" }
  },
  {
    id: 'm10',
    myth: { en: "My data is not valuable to hackers.", hi: "मेरा डेटा हैकर्स के लिए मूल्यवान नहीं है।" },
    reality: { en: "Your identity, phone number, and contacts are sold on the dark web for fraud.", hi: "आपकी पहचान, फोन नंबर और संपर्क धोखाधड़ी के लिए डार्क वेब पर बेचे जाते हैं।" }
  }
];

export const EMERGENCIES: EmergencyType[] = [
  {
    id: 'financial',
    title: { en: "Money Deducted / UPI Fraud", hi: "पैसे कट गए / UPI धोखाधड़ी" },
    steps: {
      en: ["Call 1930 immediately within 1 hour (Golden Hour)", "Block your bank account via app/call", "Change UPI PIN"],
      hi: ["1 घंटे (गोल्डन ऑवर) के भीतर तुरंत 1930 पर कॉल करें", "ऐप/कॉल के जरिए अपना बैंक खाता ब्लॉक करें", "UPI पिन बदलें"]
    },
    evidence: {
      en: ["Transaction ID / SMS Screenshot", "Date and Time of incident", "Bank Account Statement"],
      hi: ["लेनदेन आईडी / एसएमएस स्क्रीनशॉट", "घटना की तारीख और समय", "बैंक खाता विवरण"]
    }
  },
  {
    id: 'digital-arrest',
    title: { en: "Fake Police / Digital Arrest", hi: "नकली पुलिस / डिजिटल अरेस्ट" },
    steps: {
      en: ["Disconnect the call immediately", "Do not pay any money or transfer funds", "Real Police/CBI never interrogate via video call"],
      hi: ["तुरंत फोन काट दें", "कोई पैसा न दें और न ही फंड ट्रांसफर करें", "असली पुलिस/सीबीआई कभी वीडियो कॉल पर पूछताछ नहीं करती"]
    },
    evidence: {
      en: ["Screenshot of the video call", "Phone number of the caller", "Any ID card shared by them"],
      hi: ["वीडियो कॉल का स्क्रीनशॉट", "कॉलर का फोन नंबर", "उनके द्वारा साझा किया गया कोई भी आईडी कार्ड"]
    }
  },
  {
    id: 'sextortion',
    title: { en: "Blackmail / Sextortion", hi: "ब्लैकमेल / सेक्सटॉर्शन" },
    steps: {
      en: ["DO NOT PAY money (They will never stop demanding)", "Lock your social media profile privacy", "Report account to the platform"],
      hi: ["पैसे न दें (वे कभी मांगना बंद नहीं करेंगे)", "अपनी सोशल मीडिया प्रोफाइल गोपनीयता लॉक करें", "प्लेटफ़ॉर्म पर खाते की रिपोर्ट करें"]
    },
    evidence: {
      en: ["Screenshots of chat/demands", "Profile URL of blackmailer", "Video call screenshot"],
      hi: ["चैट/मांगों के स्क्रीनशॉट", "ब्लैकमेलर का प्रोफ़ाइल URL", "वीडियो कॉल स्क्रीनशॉट"]
    }
  },
  {
    id: 'loan-app',
    title: { en: "Loan App Harassment", hi: "लोन ऐप उत्पीड़न" },
    steps: {
      en: ["Revoke all app permissions immediately", "Uninstall the app", "Inform your contacts that your phone was hacked", "Do not pay extortion money"],
      hi: ["तुरंत सभी ऐप अनुमतियां रद्द करें", "ऐप अनइंस्टॉल करें", "अपने संपर्कों को सूचित करें कि आपका फोन हैक हो गया था", "जबरन वसूली का पैसा न दें"]
    },
    evidence: {
      en: ["Screenshots of threatening messages", "App Name and Play Store Link", "UPI ID used for payment"],
      hi: ["धमकी भरे संदेशों के स्क्रीनशॉट", "ऐप का नाम और प्ले स्टोर लिंक", "भुगतान के लिए उपयोग की गई UPI आईडी"]
    }
  },
  {
    id: 'hacked',
    title: { en: "Social Media Hacked", hi: "सोशल मीडिया हैक हो गया" },
    steps: {
      en: ["Try 'Forgot Password' immediately", "Check email for login alerts", "Enable Two-Factor Authentication (2FA)", "Inform friends not to click links sent by you"],
      hi: ["तुरंत 'फॉरगॉट पासवर्ड' का प्रयास करें", "लॉगिन अलर्ट के लिए ईमेल चेक करें", "टू-फैक्टर ऑथेंटिकेशन (2FA) सक्षम करें", "दोस्तों को सूचित करें कि आपके द्वारा भेजे गए लिंक पर क्लिक न करें"]
    },
    evidence: {
      en: ["Screenshot of profile changes", "Email notifications from the platform"],
      hi: ["प्रोफ़ाइल परिवर्तनों का स्क्रीनशॉट", "प्लेटफ़ॉर्म से ईमेल सूचनाएं"]
    }
  },
  {
    id: 'job-fraud',
    title: { en: "Job / Task Fraud", hi: "नौकरी / टास्क धोखाधड़ी" },
    steps: {
      en: ["Stop paying immediately", "Do not try to 'recover' money by paying more", "Report telegram/whatsapp groups"],
      hi: ["तुरंत भुगतान करना बंद करें", "अधिक भुगतान करके पैसे 'वापस' पाने की कोशिश न करें", "टेलीग्राम/व्हाट्सएप समूहों की रिपोर्ट करें"]
    },
    evidence: {
      en: ["Transaction receipts", "Chat screenshots", "Website URL of the task portal"],
      hi: ["लेनदेन रसीदें", "चैट स्क्रीनशॉट", "टास्क पोर्टल का वेबसाइट URL"]
    }
  },
  {
    id: 'courier-fraud',
    title: { en: "Courier / Customs Fraud", hi: "कूरियर / सीमा शुल्क धोखाधड़ी" },
    steps: {
      en: ["Do not transfer money for 'clearance'", "Disconnect the call", "Verify tracking number on official website manually"],
      hi: ["'क्लीयरेंस' के लिए पैसे ट्रांसफर न करें", "कॉल डिस्कनेक्ट करें", "आधिकारिक वेबसाइट पर ट्रैकिंग नंबर मैन्युअल रूप से सत्यापित करें"]
    },
    evidence: {
      en: ["Phone number of caller", "Fake documents shared"],
      hi: ["कॉलर का फोन नंबर", "साझा किए गए नकली दस्तावेज"]
    }
  },
  {
    id: 'investment',
    title: { en: "Investment / Crypto Scam", hi: "निवेश / क्रिप्टो स्कैम" },
    steps: {
      en: ["Stop investing new funds", "Report website to cybercrime.gov.in", "Contact bank to freeze transfers"],
      hi: ["नए फंड का निवेश बंद करें", "cybercrime.gov.in पर वेबसाइट की रिपोर्ट करें", "ट्रांसफर फ्रीज करने के लिए बैंक से संपर्क करें"]
    },
    evidence: {
      en: ["Website/App URL", "Screenshots of dashboard/profits", "Transaction history"],
      hi: ["वेबसाइट/ऐप URL", "डैशबोर्ड/लाभ के स्क्रीनशॉट", "लेनदेन इतिहास"]
    }
  },
  {
    id: 'impersonation',
    title: { en: "Fake Profile / Impersonation", hi: "फर्जी प्रोफाइल / प्रतिरूपण" },
    steps: {
      en: ["Report the profile using 'Report' button", "Ask friends to report it too", "Post a status clarifying it's not you"],
      hi: ["'रिपोर्ट' बटन का उपयोग करके प्रोफ़ाइल की रिपोर्ट करें", "दोस्तों को भी रिपोर्ट करने के लिए कहें", "यह स्पष्ट करते हुए एक स्टेटस पोस्ट करें कि यह आप नहीं हैं"]
    },
    evidence: {
      en: ["URL of the fake profile", "Screenshots"],
      hi: ["फर्जी प्रोफाइल का URL", "स्क्रीनशॉट"]
    }
  },
  {
    id: 'sim-swap',
    title: { en: "SIM Swap / Mobile Lost", hi: "सिम स्वैप / मोबाइल खो गया" },
    steps: {
      en: ["Call mobile operator to block SIM immediately", "Contact bank to disable net banking/UPI", "Change passwords of email linked to phone"],
      hi: ["सिम ब्लॉक करने के लिए तुरंत मोबाइल ऑपरेटर को कॉल करें", "नेट बैंकिंग/UPI को अक्षम करने के लिए बैंक से संपर्क करें", "फोन से जुड़े ईमेल के पासवर्ड बदलें"]
    },
    evidence: {
      en: ["Last known location", "IMEI Number (if lost)"],
      hi: ["अंतिम ज्ञात स्थान", "IMEI नंबर (यदि खो गया है)"]
    }
  }
];

export const QUIZ_LEVELS: QuizLevel[] = [
  {
    id: 'beginner',
    title: { en: "Beginner: Digital Rookie", hi: "शुरुआती: डिजिटल रूकी" },
    xpPerQuestion: 10,
    minScoreToPass: 8,
    questions: [
      {
        id: 1,
        question: { en: "What should you do if a stranger asks for an OTP?", hi: "यदि कोई अजनबी ओटीपी मांगता है तो आपको क्या करना चाहिए?" },
        options: { en: ["Share it immediately", "Never share it", "Ask why they need it"], hi: ["तुरंत साझा करें", "कभी साझा न करें", "पूछें कि उन्हें इसकी आवश्यकता क्यों है"] },
        correctIndex: 1,
        explanation: { en: "OTPs are like digital keys. Never share them.", hi: "ओटीपी डिजिटल चाबियों की तरह होते हैं। उन्हें कभी साझा न करें।" }
      },
      {
        id: 2,
        question: { en: "To receive money on UPI, do you need to enter a PIN?", hi: "UPI पर पैसे प्राप्त करने के लिए, क्या आपको पिन दर्ज करने की आवश्यकता है?" },
        options: { en: ["Yes, always", "No, never", "Sometimes"], hi: ["हाँ, हमेशा", "नहीं, कभी नहीं", "कभी कभी"] },
        correctIndex: 1,
        explanation: { en: "UPI PIN is ONLY used to send money.", hi: "UPI पिन का उपयोग केवल पैसे भेजने के लिए किया जाता है।" }
      },
      {
        id: 3,
        question: { en: "Which password is strongest?", hi: "कौन सा पासवर्ड सबसे मजबूत है?" },
        options: { en: ["password123", "Piyush@123", "Tr0ub4dor&3"], hi: ["password123", "Piyush@123", "Tr0ub4dor&3"] },
        correctIndex: 2,
        explanation: { en: "Mix of letters, numbers, and symbols is best.", hi: "अक्षरों, संख्याओं और प्रतीकों का मिश्रण सबसे अच्छा है।" }
      },
      {
        id: 4,
        question: { en: "Is it important to have a screen lock (PIN/Pattern) on your phone?", hi: "क्या आपके फोन पर स्क्रीन लॉक (पिन/पैटर्न) होना महत्वपूर्ण है?" },
        options: { en: ["No, it takes time to unlock", "Yes, always", "Only when travelling"], hi: ["नहीं, अनलॉक करने में समय लगता है", "हाँ, हमेशा", "केवल यात्रा करते समय"] },
        correctIndex: 1,
        explanation: { en: "Screen locks prevent unauthorized access if your phone is lost or stolen.", hi: "फोन खो जाने या चोरी हो जाने पर स्क्रीन लॉक अनधिकृत पहुंच को रोकता है।" }
      },
      {
        id: 5,
        question: { en: "You receive an SMS claiming you won a lottery with a link. What do you do?", hi: "आपको एक एसएमएस मिलता है जिसमें दावा किया गया है कि आपने लिंक के साथ लॉटरी जीती है। आप क्या करेंगे?" },
        options: { en: ["Click the link to check", "Delete/Ignore it", "Forward to friends"], hi: ["जांच करने के लिए लिंक पर क्लिक करें", "हटाएं/अनदेखा करें", "दोस्तों को फॉरवर्ड करें"] },
        correctIndex: 1,
        explanation: { en: "Unexpected lottery wins are always scams to steal data or money.", hi: "अनपेक्षित लॉटरी जीत हमेशा डेटा या पैसा चुराने के लिए घोटाले होते हैं।" }
      },
      {
        id: 6,
        question: { en: "What is Two-Factor Authentication (2FA)?", hi: "टू-फैक्टर ऑथेंटिकेशन (2FA) क्या है?" },
        options: { en: ["A second password", "Double security (Password + OTP)", "Sharing password with a friend"], hi: ["दूसरा पासवर्ड", "दोहरी सुरक्षा (पासवर्ड + ओटीपी)", "दोस्त के साथ पासवर्ड साझा करना"] },
        correctIndex: 1,
        explanation: { en: "2FA adds an extra layer of security beyond just a password.", hi: "2FA केवल पासवर्ड से परे सुरक्षा की एक अतिरिक्त परत जोड़ता है।" }
      },
      {
        id: 7,
        question: { en: "Should you save passwords in your browser on a public computer?", hi: "क्या आपको सार्वजनिक कंप्यूटर पर अपने ब्राउज़र में पासवर्ड सहेजना चाहिए?" },
        options: { en: ["Yes, for convenience", "No, never", "Only for Facebook"], hi: ["हाँ, सुविधा के लिए", "नहीं, कभी नहीं", "केवल फेसबुक के लिए"] },
        correctIndex: 1,
        explanation: { en: "Others can easily access your saved passwords on a shared device.", hi: "अन्य लोग साझा डिवाइस पर आपके सहेजे गए पासवर्ड आसानी से एक्सेस कर सकते हैं।" }
      },
      {
        id: 8,
        question: { en: "A friend asks for money urgently on WhatsApp from a new number.", hi: "एक दोस्त नए नंबर से व्हाट्सएप पर तत्काल पैसे मांगता है।" },
        options: { en: ["Send money immediately", "Call their old number to verify", "Block them"], hi: ["तुरंत पैसे भेजें", "सत्यापन के लिए उनके पुराने नंबर पर कॉल करें", "उन्हें ब्लॉक करें"] },
        correctIndex: 1,
        explanation: { en: "Always verify identity via voice call before sending money.", hi: "पैसे भेजने से पहले हमेशा वॉयस कॉल के जरिए पहचान सत्यापित करें।" }
      },
      {
        id: 9,
        question: { en: "Is it safe to share your birth date and address publicly on social media?", hi: "क्या सोशल मीडिया पर सार्वजनिक रूप से अपनी जन्म तिथि और पता साझा करना सुरक्षित है?" },
        options: { en: ["Yes, everyone does it", "No, it aids identity theft", "Only to friends"], hi: ["हाँ, हर कोई ऐसा करता है", "नहीं, यह पहचान की चोरी में मदद करता है", "केवल दोस्तों को"] },
        correctIndex: 1,
        explanation: { en: "Personal details can be used to answer security questions and hack accounts.", hi: "व्यक्तिगत विवरण का उपयोग सुरक्षा प्रश्नों के उत्तर देने और खातों को हैक करने के लिए किया जा सकता है।" }
      },
      {
        id: 10,
        question: { en: "What does the 'S' in HTTPS stand for?", hi: "HTTPS में 'S' का क्या अर्थ है?" },
        options: { en: ["Super", "Secure", "Speed"], hi: ["सुपर", "सुरक्षित (Secure)", "गति"] },
        correctIndex: 1,
        explanation: { en: "It means the communication with the website is encrypted.", hi: "इसका मतलब है कि वेबसाइट के साथ संचार एन्क्रिप्टेड है।" }
      },
      {
        id: 11,
        question: { en: "You find a USB drive on the street. What should you do?", hi: "आपको सड़क पर एक यूएसबी ड्राइव मिलती है। आपको क्या करना चाहिए?" },
        options: { en: ["Plug it in to find owner", "Throw it away/Destroy it", "Format and use it"], hi: ["मालिक को खोजने के लिए इसे प्लग इन करें", "इसे फेंक दें/नष्ट कर दें", "प्रारूपित करें और इसका उपयोग करें"] },
        correctIndex: 1,
        explanation: { en: "Unknown USBs can contain malware that installs instantly.", hi: "अज्ञात USB में मैलवेयर हो सकता है जो तुरंत इंस्टॉल हो जाता है।" }
      },
      {
        id: 12,
        question: { en: "Can a bank employee ask for your ATM PIN?", hi: "क्या बैंक कर्मचारी आपका एटीएम पिन मांग सकता है?" },
        options: { en: ["Yes, to fix issues", "No, never", "Only the manager"], hi: ["हाँ, समस्याओं को ठीक करने के लिए", "नहीं, कभी नहीं", "केवल प्रबंधक"] },
        correctIndex: 1,
        explanation: { en: "No bank official will ever ask for your PIN or Password.", hi: "कोई भी बैंक अधिकारी कभी भी आपसे आपका पिन या पासवर्ड नहीं मांगेगा।" }
      },
      {
        id: 13,
        question: { en: "What is a 'Strong' PIN for your phone?", hi: "आपके फोन के लिए 'मजबूत' पिन क्या है?" },
        options: { en: ["1234", "0000", "Random non-sequential numbers"], hi: ["1234", "0000", "यादृच्छिक गैर-अनुक्रमिक संख्याएं"] },
        correctIndex: 2,
        explanation: { en: "Avoid easy patterns like 1234, 1111, or your birth year.", hi: "1234, 1111, या अपने जन्म वर्ष जैसे आसान पैटर्न से बचें।" }
      },
      {
        id: 14,
        question: { en: "If you get a suspicious email from 'Netflix', what should you check first?", hi: "यदि आपको 'नेटफ्लिक्स' से कोई संदिग्ध ईमेल मिलता है, तो आपको सबसे पहले क्या जांचना चाहिए?" },
        options: { en: ["The content", "The sender's email address", "Click the link"], hi: ["सामग्री", "प्रेषक का ईमेल पता", "लिंक पर क्लिक करें"] },
        correctIndex: 1,
        explanation: { en: "Scammers often use addresses like netflix-support@gmail.com instead of @netflix.com.", hi: "स्कैमर्स अक्सर @netflix.com के बजाय netflix-support@gmail.com जैसे पतों का उपयोग करते हैं।" }
      },
      {
        id: 15,
        question: { en: "Is it safe to accept friend requests from strangers?", hi: "क्या अजनबियों से मित्र अनुरोध स्वीकार करना सुरक्षित है?" },
        options: { en: ["Yes", "No, they might be scammers", "Only if they look nice"], hi: ["हाँ", "नहीं, वे स्कैमर हो सकते हैं", "केवल अगर वे अच्छे दिखते हैं"] },
        correctIndex: 1,
        explanation: { en: "Strangers often use fake profiles to gather info or scam you.", hi: "अजनबी अक्सर जानकारी इकट्ठा करने या आपको धोखा देने के लिए नकली प्रोफाइल का उपयोग करते हैं।" }
      }
    ]
  },
  {
    id: 'intermediate',
    title: { en: "Intermediate: Cyber Shield", hi: "मध्यम: साइबर शील्ड" },
    xpPerQuestion: 20,
    minScoreToPass: 10,
    questions: [
      {
        id: 1,
        question: { en: "What is 'Phishing'?", hi: "'फिशिंग' क्या है?" },
        options: { en: ["Fishing for fish", "Fake emails tricking you", "A computer virus"], hi: ["मछली पकड़ना", "फर्जी ईमेल जो आपको धोखा देते हैं", "एक कंप्यूटर वायरस"] },
        correctIndex: 1,
        explanation: { en: "Phishing uses fake identities to steal data.", hi: "फिशिंग डेटा चोरी करने के लिए नकली पहचान का उपयोग करता है।" }
      },
      {
        id: 2,
        question: { en: "Is public Wi-Fi safe for banking?", hi: "क्या बैंकिंग के लिए सार्वजनिक वाई-फाई सुरक्षित है?" },
        options: { en: ["Yes, if password protected", "No, avoid it", "Yes, at airports only"], hi: ["हाँ, यदि पासवर्ड सुरक्षित है", "नहीं, इससे बचें", "हाँ, केवल हवाई अड्डों पर"] },
        correctIndex: 1,
        explanation: { en: "Public Wi-Fi can be intercepted. Use mobile data.", hi: "सार्वजनिक वाई-फाई को इंटरसेप्ट किया जा सकता है। मोबाइल डेटा का उपयोग करें।" }
      },
      {
        id: 3,
        question: { en: "What does HTTPS mean?", hi: "HTTPS का क्या अर्थ है?" },
        options: { en: ["Secure connection", "Fast internet", "Broken site"], hi: ["सुरक्षित कनेक्शन", "तेज इंटरनेट", "टूटी हुई साइट"] },
        correctIndex: 0,
        explanation: { en: "The 'S' stands for Secure (Encrypted).", hi: "'S' का मतलब सुरक्षित (एन्क्रिप्टेड) है।" }
      },
      {
        id: 4,
        question: { en: "A 'bank official' asks you to install 'AnyDesk' to fix a problem. What do you do?", hi: "एक 'बैंक अधिकारी' आपको समस्या ठीक करने के लिए 'AnyDesk' इंस्टॉल करने के लिए कहता है। आप क्या करेंगे?" },
        options: { en: ["Install it immediately", "Hang up immediately", "Ask for their ID"], hi: ["इसे तुरंत इंस्टॉल करें", "तुरंत फोन काट दें", "उनकी आईडी मांगें"] },
        correctIndex: 1,
        explanation: { en: "Banks never ask you to install remote access apps like AnyDesk.", hi: "बैंक कभी भी आपको AnyDesk जैसे रिमोट एक्सेस ऐप इंस्टॉल करने के लिए नहीं कहते हैं।" }
      },
      {
        id: 5,
        question: { en: "Is it safe to trust customer care numbers found directly on Google Search?", hi: "क्या Google खोज पर सीधे मिले कस्टमर केयर नंबरों पर भरोसा करना सुरक्षित है?" },
        options: { en: ["Yes, Google checks them", "No, scammers can edit them", "Only if it starts with 1800"], hi: ["हाँ, Google उनकी जाँच करता है", "नहीं, स्कैमर्स उन्हें संपादित कर सकते हैं", "केवल यदि यह 1800 से शुरू होता है"] },
        correctIndex: 1,
        explanation: { en: "Scammers often post fake numbers on Google Maps and Search.", hi: "स्कैमर्स अक्सर Google मैप्स और सर्च पर फर्जी नंबर पोस्ट करते हैं।" }
      },
      {
        id: 6,
        question: { en: "You receive a video call from an unknown number and see a nude person. What next?", hi: "आपको एक अनजान नंबर से वीडियो कॉल आती है और एक नग्न व्यक्ति दिखाई देता है। आगे क्या?" },
        options: { en: ["Talk to them", "Block and Report", "Pay them money"], hi: ["उनसे बात करें", "ब्लॉक करें और रिपोर्ट करें", "उन्हें पैसे दें"] },
        correctIndex: 1,
        explanation: { en: "This is Sextortion. Never pay, just block and report.", hi: "यह सेक्सटॉर्शन है। कभी भुगतान न करें, बस ब्लॉक करें और रिपोर्ट करें।" }
      },
      {
        id: 7,
        question: { en: "Caller claims to be Police and says you are under 'Digital Arrest' via video call.", hi: "कॉलर पुलिस होने का दावा करता है और कहता है कि आप वीडियो कॉल के जरिए 'डिजिटल अरेस्ट' के तहत हैं।" },
        options: { en: ["Panic and pay", "Follow their instructions", "Disconnect, it's a scam"], hi: ["घबराएं और भुगतान करें", "उनके निर्देशों का पालन करें", "कॉल काटें, यह एक स्कैम है"] },
        correctIndex: 2,
        explanation: { en: "Real Police/CBI never interrogate or arrest via video call.", hi: "असली पुलिस/सीबीआई कभी भी वीडियो कॉल के जरिए पूछताछ या गिरफ्तारी नहीं करती है।" }
      },
      {
        id: 8,
        question: { en: "A job offer asks you to pay a registration fee before the interview.", hi: "एक नौकरी का प्रस्ताव आपसे साक्षात्कार से पहले पंजीकरण शुल्क का भुगतान करने के लिए कहता है।" },
        options: { en: ["Pay if amount is small", "It is likely a scam", "Pay to get the job"], hi: ["राशि कम होने पर भुगतान करें", "यह संभवतः एक स्कैम है", "नौकरी पाने के लिए भुगतान करें"] },
        correctIndex: 1,
        explanation: { en: "Legitimate companies never ask for money to hire you.", hi: "वैध कंपनियां आपको नौकरी देने के लिए कभी पैसे नहीं मांगती हैं।" }
      },
      {
        id: 9,
        question: { en: "What is 'Vishing'?", hi: "'विशिंग' क्या है?" },
        options: { en: ["Video Phishing", "Voice Phishing (Phone calls)", "Visual Hacking"], hi: ["वीडियो फिशिंग", "वॉयस फिशिंग (फोन कॉल)", "विजुअल हैकिंग"] },
        correctIndex: 1,
        explanation: { en: "Vishing is phishing done over voice calls.", hi: "विशिंग वॉयस कॉल पर की जाने वाली फिशिंग है।" }
      },
      {
        id: 10,
        question: { en: "Should you grant 'Contacts' permission to a Torch/Calculator app?", hi: "क्या आपको टॉर्च/कैलकुलेटर ऐप को 'संपर्क' की अनुमति देनी चाहिए?" },
        options: { en: ["Yes", "No", "Maybe"], hi: ["हाँ", "नहीं", "शायद"] },
        correctIndex: 1,
        explanation: { en: "Simple utility apps do not need access to your private data.", hi: "साधारण उपयोगिता ऐप्स को आपके निजी डेटा तक पहुंच की आवश्यकता नहीं होती है।" }
      },
      {
        id: 11,
        question: { en: "How can you check if a website link is safe before clicking?", hi: "क्लिक करने से पहले आप कैसे जांच सकते हैं कि वेबसाइट लिंक सुरक्षित है या नहीं?" },
        options: { en: ["Click and see", "Hover over it to see actual URL", "Ask a friend"], hi: ["क्लिक करें और देखें", "वास्तविक URL देखने के लिए उस पर होवर करें", "किसी मित्र से पूछें"] },
        correctIndex: 1,
        explanation: { en: "Hovering (or long-pressing on mobile) reveals the true destination.", hi: "होवरिंग (या मोबाइल पर लॉन्ग-प्रेस) वास्तविक गंतव्य को प्रकट करता है।" }
      },
      {
        id: 12,
        question: { en: "What is a 'Clickbait'?", hi: "'क्लिकबेट' क्या है?" },
        options: { en: ["A fishing tool", "Sensational headline to get clicks", "A virus"], hi: ["एक मछली पकड़ने का उपकरण", "क्लिक पाने के लिए सनसनीखेज शीर्षक", "एक वायरस"] },
        correctIndex: 1,
        explanation: { en: "Clickbait lures you in, often leading to spam or scams.", hi: "क्लिकबेट आपको लुभाता है, जो अक्सर स्पैम या घोटालों की ओर ले जाता है।" }
      },
      {
        id: 13,
        question: { en: "Can scanning a QR code hack your bank account?", hi: "क्या QR कोड स्कैन करने से आपका बैंक खाता हैक हो सकता है?" },
        options: { en: ["Yes, immediately", "No, never", "It can lead to a phishing site"], hi: ["हाँ, तुरंत", "नहीं, कभी नहीं", "यह एक फिशिंग साइट पर ले जा सकता है"] },
        correctIndex: 2,
        explanation: { en: "The code itself doesn't hack, but it can open a malicious site requesting your PIN.", hi: "कोड अपने आप हैक नहीं होता है, लेकिन यह एक दुर्भावनापूर्ण साइट खोल सकता है जो आपके पिन का अनुरोध करती है।" }
      },
      {
        id: 14,
        question: { en: "What is the safest way to update an app?", hi: "किसी ऐप को अपडेट करने का सबसे सुरक्षित तरीका क्या है?" },
        options: { en: ["Through a pop-up link", "Play Store / App Store", "Third-party website"], hi: ["पॉप-अप लिंक के माध्यम से", "प्ले स्टोर / ऐप स्टोर", "थर्ड-पार्टी वेबसाइट"] },
        correctIndex: 1,
        explanation: { en: "Always update via official stores to avoid malware.", hi: "मैलवेयर से बचने के लिए हमेशा आधिकारिक स्टोर के माध्यम से अपडेट करें।" }
      },
      {
        id: 15,
        question: { en: "What does 'Encrypted' mean in WhatsApp?", hi: "व्हाट्सएप में 'एन्क्रिप्टेड' का क्या मतलब है?" },
        options: { en: ["Hidden message", "Only sender and receiver can read it", "Deleted message"], hi: ["छिपा हुआ संदेश", "केवल भेजने वाला और प्राप्तकर्ता इसे पढ़ सकते हैं", "हटाया गया संदेश"] },
        correctIndex: 1,
        explanation: { en: "End-to-end encryption prevents intermediaries from reading your chats.", hi: "एंड-टू-एंड एन्क्रिप्शन बिचौलियों को आपकी चैट पढ़ने से रोकता है।" }
      }
    ]
  },
  {
    id: 'advanced',
    title: { en: "Advanced: Cyber Guardian", hi: "उन्नत: साइबर रक्षक" },
    xpPerQuestion: 30,
    minScoreToPass: 12,
    questions: [
      {
        id: 1,
        question: { en: "Malware that locks your files and demands money to unlock them is called?", hi: "मैलवेयर जो आपकी फ़ाइलों को लॉक करता है और उन्हें अनलॉक करने के लिए पैसे मांगता है, उसे क्या कहा जाता है?" },
        options: { en: ["Spyware", "Ransomware", "Adware"], hi: ["स्पाइवेयर", "रैंसमवेयर", "एडवेयर"] },
        correctIndex: 1,
        explanation: { en: "Ransomware takes your data hostage for a ransom.", hi: "रैंसमवेयर आपके डेटा को फिरौती के लिए बंधक बना लेता है।" }
      },
      {
        id: 2,
        question: { en: "What is 'Juice Jacking'?", hi: "'जूस जैकिंग' क्या है?" },
        options: { en: ["Stealing fruit juice", "Hacking via public USB chargers", "Overclocking a CPU"], hi: ["फलों का रस चोरी करना", "सार्वजनिक USB चार्जर के माध्यम से हैकिंग", "CPU को ओवरक्लॉक करना"] },
        correctIndex: 1,
        explanation: { en: "Data can be stolen through USB cables at public charging stations.", hi: "सार्वजनिक चार्जिंग स्टेशनों पर USB केबल के माध्यम से डेटा चोरी किया जा सकता है।" }
      },
      {
        id: 3,
        question: { en: "What is the National Cyber Crime Reporting Helpline number in India?", hi: "भारत में राष्ट्रीय साइबर अपराध रिपोर्टिंग हेल्पलाइन नंबर क्या है?" },
        options: { en: ["100", "1930", "112"], hi: ["100", "1930", "112"] },
        correctIndex: 1,
        explanation: { en: "1930 is the dedicated helpline for financial cyber fraud.", hi: "1930 वित्तीय साइबर धोखाधड़ी के लिए समर्पित हेल्पलाइन है।" }
      },
      {
        id: 4,
        question: { en: "AI-generated realistic videos used to impersonate people are called?", hi: "लोगों का प्रतिरूपण करने के लिए उपयोग किए जाने वाले AI-जनित यथार्थवादी वीडियो को क्या कहा जाता है?" },
        options: { en: ["Smart Videos", "Deepfakes", "Virtual Reality"], hi: ["स्मार्ट वीडियो", "डीपफेक", "आभासी वास्तविकता"] },
        correctIndex: 1,
        explanation: { en: "Deepfakes use AI to replace likeness, often used in scams.", hi: "डीपफेक समानता को बदलने के लिए AI का उपयोग करते हैं, अक्सर घोटालों में उपयोग किए जाते हैं।" }
      },
      {
        id: 5,
        question: { en: "Your phone network suddenly disappears for hours. What could it be?", hi: "आपका फोन नेटवर्क अचानक घंटों के लिए गायब हो जाता है। यह क्या हो सकता है?" },
        options: { en: ["Bad weather", "SIM Swap Fraud", "Phone battery low"], hi: ["खराब मौसम", "सिम स्वैप धोखाधड़ी", "फोन की बैटरी कम"] },
        correctIndex: 1,
        explanation: { en: "Attackers may have cloned your SIM to get your OTPs.", hi: "हो सकता है कि हमलावरों ने आपके ओटीपी प्राप्त करने के लिए आपके सिम का क्लोन बना लिया हो।" }
      },
      {
        id: 6,
        question: { en: "A flashlight app asks for 'Contact' and 'Location' permission. What should you do?", hi: "एक फ्लैशलाइट ऐप 'संपर्क' और 'स्थान' की अनुमति मांगता है। आपको क्या करना चाहिए?" },
        options: { en: ["Allow it", "Deny and Uninstall", "Allow only Location"], hi: ["अनुमति दें", "अस्वीकार करें और अनइंस्टॉल करें", "केवल स्थान की अनुमति दें"] },
        correctIndex: 1,
        explanation: { en: "Flashlight apps don't need contacts. It's likely spyware.", hi: "फ्लैशलाइट ऐप्स को संपर्कों की आवश्यकता नहीं होती है। यह संभवतः स्पाइवेयर है।" }
      },
      {
        id: 7,
        question: { en: "Someone offers you commission to let them transfer money through your bank account.", hi: "कोई आपको आपके बैंक खाते के माध्यम से पैसे ट्रांसफर करने के लिए कमीशन देता है।" },
        options: { en: ["Accept it", "Refuse (Mule Account fraud)", "Ask for more commission"], hi: ["स्वीकार करें", "अस्वीकार करें (Mule खाता धोखाधड़ी)", "अधिक कमीशन मांगें"] },
        correctIndex: 1,
        explanation: { en: "This makes you a 'Money Mule' for laundering stolen money.", hi: "यह आपको चोरी के पैसे को वैध बनाने के लिए 'मनी म्यूल' बनाता है।" }
      },
      {
        id: 8,
        question: { en: "Hacking a human by manipulating them into revealing information is called?", hi: "जानकारी प्रकट करने के लिए किसी इंसान को हेरफेर करके हैक करना क्या कहलाता है?" },
        options: { en: ["Brute Force", "Social Engineering", "Coding"], hi: ["ब्रूट फोर्स", "सोशल इंजीनियरिंग", "कोडिंग"] },
        correctIndex: 1,
        explanation: { en: "It exploits human psychology rather than technical flaws.", hi: "यह तकनीकी खामियों के बजाय मानव मनोविज्ञान का शोषण करता है।" }
      },
      {
        id: 9,
        question: { en: "What is the benefit of Two-Factor Authentication (2FA)?", hi: "टू-फैक्टर ऑथेंटिकेशन (2FA) का क्या लाभ है?" },
        options: { en: ["Faster login", "Adds a second security layer", "No password needed"], hi: ["तेजी से लॉगिन", "दूसरी सुरक्षा परत जोड़ता है", "पासवर्ड की आवश्यकता नहीं"] },
        correctIndex: 1,
        explanation: { en: "Even if password is stolen, they need the second factor (OTP).", hi: "भले ही पासवर्ड चोरी हो जाए, उन्हें दूसरे कारक (OTP) की आवश्यकता होती है।" }
      },
      {
        id: 10,
        question: { en: "Does 'Factory Reset' completely remove all data permanently?", hi: "क्या 'फ़ैक्टरी रीसेट' पूरी तरह से सभी डेटा को स्थायी रूप से हटा देता है?" },
        options: { en: ["Yes, always", "Not always (Data can be recovered)", "Only pictures"], hi: ["हाँ, हमेशा", "हमेशा नहीं (डेटा पुनर्प्राप्त किया जा सकता है)", "केवल चित्र"] },
        correctIndex: 1,
        explanation: { en: "Basic reset allows recovery. Encrypt phone before resetting to sell.", hi: "बेसिक रीसेट पुनर्प्राप्ति की अनुमति देता है। बेचने के लिए रीसेट करने से पहले फोन को एन्क्रिप्ट करें।" }
      },
      {
        id: 11,
        question: { en: "What is a 'Zero-Day' vulnerability?", hi: "'जीरो-डे' भेद्यता क्या है?" },
        options: { en: ["A virus that lasts 0 days", "A flaw unknown to the developer", "No vulnerability"], hi: ["एक वायरस जो 0 दिन तक रहता है", "डेवलपर के लिए अज्ञात एक दोष", "कोई भेद्यता नहीं"] },
        correctIndex: 1,
        explanation: { en: "It is a software flaw that hackers find before the developers do.", hi: "यह एक सॉफ्टवेयर खामी है जिसे डेवलपर्स से पहले हैकर्स ढूंढ लेते हैं।" }
      },
      {
        id: 12,
        question: { en: "Which of these is a sign of a secure website for payments?", hi: "इनमें से कौन भुगतान के लिए सुरक्षित वेबसाइट का संकेत है?" },
        options: { en: ["Bright colors", "Padlock icon in address bar", "Lots of ads"], hi: ["चमकीले रंग", "एड्रेस बार में पैडलॉक आइकन", "बहुत सारे विज्ञापन"] },
        correctIndex: 1,
        explanation: { en: "The padlock indicates an encrypted connection (SSL/TLS).", hi: "पैडलॉक एक एन्क्रिप्टेड कनेक्शन (SSL/TLS) को इंगित करता है।" }
      },
      {
        id: 13,
        question: { en: "What is a 'Botnet'?", hi: "'बॉटनेट' क्या है?" },
        options: { en: ["A robot network helper", "Network of infected devices controlled by hackers", "Fast internet"], hi: ["एक रोबोट नेटवर्क हेल्पर", "हैकर्स द्वारा नियंत्रित संक्रमित उपकरणों का नेटवर्क", "तेज इंटरनेट"] },
        correctIndex: 1,
        explanation: { en: "Botnets are used to launch massive attacks like DDoS.", hi: "बॉटनेट का उपयोग DDoS जैसे बड़े पैमाने पर हमले करने के लिए किया जाता है।" }
      },
      {
        id: 14,
        question: { en: "What is 'Keystroke Logging'?", hi: "'कीस्ट्रोक लॉगिंग' क्या है?" },
        options: { en: ["Recording music", "Recording keys pressed on a keyboard", "Writing a log book"], hi: ["संगीत रिकॉर्ड करना", "कीबोर्ड पर दबाई गई कुंजियों को रिकॉर्ड करना", "लॉग बुक लिखना"] },
        correctIndex: 1,
        explanation: { en: "It is spyware used to steal passwords as you type them.", hi: "यह एक स्पाइवेयर है जिसका उपयोग आपके द्वारा टाइप करते समय पासवर्ड चुराने के लिए किया जाता है।" }
      },
      {
        id: 15,
        question: { en: "Is VPN (Virtual Private Network) 100% anonymous?", hi: "क्या VPN (वर्चुअल प्राइवेट नेटवर्क) 100% गुमनाम है?" },
        options: { en: ["Yes, always", "No, VPN provider can see traffic", "Yes, even from ISP"], hi: ["हाँ, हमेशा", "नहीं, VPN प्रदाता ट्रैफ़िक देख सकता है", "हाँ, ISP से भी"] },
        correctIndex: 1,
        explanation: { en: "While it hides traffic from ISP, the VPN provider itself can see it.", hi: "हालांकि यह ISP से ट्रैफ़िक छिपाता है, VPN प्रदाता स्वयं इसे देख सकता है।" }
      }
    ]
  }
];
