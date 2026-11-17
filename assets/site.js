const DEFAULT_LANG = "en";
const SUPPORTED_LANGS = ["en", "tr", "de", "es", "fr", "it", "pt", "ru", "uk", "ar"];

const LANG_NAMES = {
  en: "English",
  tr: "Türkçe",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  pt: "Português",
  ru: "Русский",
  uk: "Українська",
  ar: "العربية",
};

const t = {
  en: {
    home: "Home",
    privacy: "Privacy",
    support: "Support",
    heroEyebrow: "Berlin Wall Explorer",
    heroTitle: "Explore divided-city history around you",
    heroLead:
      "Berlin Wall Explorer uses GPS and map intelligence to instantly detect East/West side context, find nearby historical photos, and discover points of interest in Berlin.",
    ctaPrivacy: "Read Privacy Policy",
    ctaStart: "Explore Features",
    featuresTitle: "What the app does",
    featuresLead: "Built for walking through Berlin with historical context in real time.",
    f1Title: "Instant Side Detection",
    f1Body: "Uses your location to detect whether you are in East or West Berlin context.",
    f2Title: "Nearby Photos",
    f2Body: "Shows historical photographs near your position on the map.",
    f3Title: "Explore POIs",
    f3Body: "Lists museums, memorials, landmarks, and viewpoints around you.",
    f4Title: "Dynamic Themes",
    f4Body: "Switches visual theme based on Berlin side state.",
    screenshotsTitle: "App screenshots",
    screenshotsLead: "Real UI captures from the app.",
    footerText: "Berlin Wall Explorer - Web Presentation",
    privacyTitle: "Privacy Policy",
    privacyLead:
      "This page explains how Berlin Wall Explorer handles personal data, location data, and API requests.",
    pmTitle: "Policy Overview",
    pm1: "Product",
    pm1v: "Berlin Wall Explorer (mobile app)",
    pm2: "Controller",
    pm2v: "App publisher (thebarnapp)",
    pm3: "Coverage",
    pm3v: "In-app and web privacy pages",
    pm4: "Effective date",
    pm4v: "September 2026",
    pp1Title: "1) Location (GPS) Usage",
    pp1Body:
      "The app requests GPS access to determine your approximate position in Berlin. This is used for side detection (East/West), nearby photo matching, and nearby point discovery.",
    pp2Title: "2) Purposes of Processing",
    pp2Body:
      "We process data to provide core app functions, improve stability, localize your experience, and generate aggregated product and marketing insights.",
    pp2List1: "Determine East/West side context based on map position.",
    pp2List2: "Show nearby photos, museums, memorials, landmarks, and viewpoints.",
    pp2List3: "Persist language and basic app preferences and understand audience segments.",
    pp3Title: "3) API Calls and Third Parties",
    pp3Body: "Photos, places and their images are stored inside the app, so your location never leaves your phone and no mobile data is needed to show them. For anonymous usage statistics we use TelemetryDeck (TelemetryDeck GmbH, Germany). It receives which screens and features are used, never your location, name, contacts or photos.",
    pp4Title: "4) Data Categories",
    pp4Body:
      "The app limits collection to data needed for app operation and anonymized analytics.",
    pp4List1: "Approximate location (if location permission is granted).",
    pp4List2: "App language, device language, platform, and app version.",
    pp4List3: "In-app request parameters and technical response metadata.",
    pp5Title: "5) Retention and Security",
    pp5Body:
      "We apply reasonable technical and organizational safeguards. We store coarse location buckets (not exact coordinate history) and retain analytics only as long as required for service and legal obligations.",
    pp6Title: "6) Your Rights and Controls",
    pp6Body:
      "You can revoke location permission in your device settings anytime. Depending on your region, you may also have rights to access, correct, delete, or object to processing of your personal data. Analytics is used for product improvement, not ad tracking across apps.",
    pp7Title: "7) Children's Privacy",
    pp7Body:
      "The app is not directed to children under the minimum age required by local law. If you believe a child provided personal data, please contact us so we can review and remove it where applicable.",
    pp8Title: "8) Policy Updates",
    pp8Body:
      "We may update this Privacy Policy from time to time. Material changes are reflected on this page with a new effective date.",
    sourcesTitle: "9) Content Sources and Attributions",
    sourcesBody:
      "This app includes third-party map and photo content. Source pages and license links are provided below.",
    sourcePageLabel: "source page",
    pp9Title: "10) Contact",
    pp9Body: "For privacy questions or requests, email app@save-all.com.",
    supportTitle: "Support",
    supportLead: "Need help with Berlin Wall Explorer? Contact our support team.",
    supportContactTitle: "Contact Email",
    supportEmailLabel: "Support",
    supportContactBody:
      "Please include your device model, OS version, and a short description of the issue.",
    supportResponseTitle: "Response Time",
    supportResponseBody: "We usually respond within 1-2 business days.",
    updated: "Last updated: November 2026",
    pp4List4: "Anonymous usage statistics via TelemetryDeck: app language, which side of the Wall you are on (East, West, GDR, outside Berlin), roughly how far the Wall is, device model, system and app version, and once per installation whether this copy was bought in the store and roughly when (to count sales; never payment details). Your device is represented by a salted hash that cannot be traced back to you. No tracking across apps, no advertising.",
  },
  tr: {
    home: "Ana Sayfa",
    privacy: "Gizlilik",
    support: "Destek",
    heroEyebrow: "Berlin Wall Explorer",
    heroTitle: "Bölünmüş şehir tarihini bulunduğun yerde keşfet",
    heroLead:
      "Berlin Wall Explorer, GPS ve harita zekasıyla Doğu/Batı bağlamını anında algılar; yakınındaki tarihi fotoğrafları ve ilgi noktalarını gösterir.",
    ctaPrivacy: "Gizlilik Politikasını Oku",
    ctaStart: "Özellikleri İncele",
    featuresTitle: "Uygulama ne yapıyor",
    featuresLead: "Berlin'i gezerken tarihi bağlamı gerçek zamanlı sunmak için tasarlandı.",
    f1Title: "Anlık Taraf Tespiti",
    f1Body: "Konumunu kullanarak Doğu/Batı Berlin bağlamını belirler.",
    f2Title: "Yakın Fotoğraflar",
    f2Body: "Haritadaki konumuna yakın tarihi fotoğrafları gösterir.",
    f3Title: "POI Keşfi",
    f3Body: "Müze, anıt, simge ve manzara noktalarını listeler.",
    f4Title: "Dinamik Temalar",
    f4Body: "Berlin tarafına göre uygulama temasını değiştirir.",
    screenshotsTitle: "Uygulama ekran görüntüleri",
    screenshotsLead: "Uygulamadan alınmış gerçek ekranlar.",
    footerText: "Berlin Wall Explorer - Web Tanıtım",
    privacyTitle: "Gizlilik Politikası",
    privacyLead:
      "Bu sayfa, Berlin Wall Explorer'ın kişisel verileri, konum verisini ve API çağrılarını nasıl işlediğini açıklar.",
    pmTitle: "Politika Özeti",
    pm1: "Ürün",
    pm1v: "Berlin Wall Explorer (mobil uygulama)",
    pm2: "Veri sorumlusu",
    pm2v: "Uygulama yayıncısı (thebarnapp)",
    pm3: "Kapsam",
    pm3v: "Uygulama içi ve web gizlilik sayfaları",
    pm4: "Yürürlük tarihi",
    pm4v: "Eylül 2026",
    pp1Title: "1) Konum (GPS) Kullanımı",
    pp1Body:
      "Uygulama, Berlin'deki yaklaşık konumunuzu belirlemek için GPS izni ister. Bu bilgi Doğu/Batı tespiti, yakın fotoğraf eşleştirme ve yakın nokta keşfi için kullanılır.",
    pp2Title: "2) İşleme Amaçları",
    pp2Body:
      "Veriler; temel uygulama işlevlerini sağlamak, kararlılığı artırmak, deneyimi yerelleştirmek ve toplu ürün/pazarlama içgörüleri üretmek için işlenir.",
    pp2List1: "Harita konumuna göre Doğu/Batı bağlamını belirlemek.",
    pp2List2: "Yakındaki fotoğraf, müze, anıt, simge ve manzara noktalarını göstermek.",
    pp2List3: "Dil ve temel uygulama tercihlerini saklamak ve kitle segmentlerini anlamak.",
    pp3Title: "3) API Çağrıları ve Üçüncü Taraflar",
    pp3Body: "Fotoğraflar, mekânlar ve görselleri uygulamanın içinde saklanır; konumun telefonundan hiç çıkmaz ve bunları göstermek için mobil veri gerekmez. Anonim kullanım istatistikleri için TelemetryDeck (TelemetryDeck GmbH, Almanya) kullanıyoruz. Ona yalnızca hangi ekranların ve özelliklerin kullanıldığı gider; konumun, adın, kişilerin ya da fotoğrafların asla gitmez.",
    pp4Title: "4) Veri Kategorileri",
    pp4Body:
      "Uygulama, yalnızca hizmetin çalışması ve anonim analitik için gerekli olan verileri toplar ve işler.",
    pp4List1: "Yaklaşık konum bilgisi (konum izni verildiyse).",
    pp4List2: "Uygulama dili, cihaz dili, platform ve uygulama sürümü.",
    pp4List3: "Toplu biçimde uygulama içi istek parametreleri ve teknik yanıt metaverileri.",
    pp5Title: "5) Saklama Süresi ve Güvenlik",
    pp5Body:
      "Makul teknik ve organizasyonel güvenlik önlemleri uygulanır. Kesin konum geçmişi yerine kaba konum kovaları saklanır; veriler hizmet amacı ve hukuki yükümlülükler için gereken süre kadar tutulur.",
    pp6Title: "6) Haklarınız ve Kontrolleriniz",
    pp6Body:
      "Konum iznini cihaz ayarlarından istediğiniz zaman kaldırabilirsiniz. Bulunduğunuz bölgeye göre kişisel verilerinize erişim, düzeltme, silme veya işlemeye itiraz haklarına sahip olabilirsiniz. Analitik veriler ürün geliştirme için kullanılır; uygulamalar arası reklam takibi için kullanılmaz.",
    pp7Title: "7) Çocukların Gizliliği",
    pp7Body:
      "Uygulama, yerel mevzuatın belirlediği asgari yaşın altındaki çocuklara yönelik değildir. Bir çocuğun kişisel veri sağladığını düşünüyorsanız bizimle iletişime geçebilirsiniz.",
    pp8Title: "8) Politika Güncellemeleri",
    pp8Body:
      "Bu Gizlilik Politikası zaman zaman güncellenebilir. Önemli değişiklikler bu sayfada yeni yürürlük tarihiyle birlikte yayımlanır.",
    sourcesTitle: "9) İçerik Kaynakları ve Atıflar",
    sourcesBody:
      "Bu uygulama üçüncü taraf harita ve fotoğraf içerikleri içerir. Kaynak sayfaları ve lisans bağlantıları aşağıda verilmiştir.",
    sourcePageLabel: "kaynak sayfası",
    pp9Title: "10) İletişim",
    pp9Body: "Gizlilikle ilgili soru ve talepler için app@save-all.com adresine yazabilirsin.",
    supportTitle: "Destek",
    supportLead: "Berlin Wall Explorer için yardıma mı ihtiyacınız var? Destek ekibimizle iletişime geçin.",
    supportContactTitle: "İletişim E-postası",
    supportEmailLabel: "Destek",
    supportContactBody:
      "Lütfen cihaz modelinizi, işletim sistemi sürümünü ve sorunun kısa açıklamasını ekleyin.",
    supportResponseTitle: "Yanıt Süresi",
    supportResponseBody: "Genellikle 1-2 iş günü içinde yanıt veriyoruz.",
    updated: "Son güncelleme: Kasım 2026",
    pp4List4: "TelemetryDeck üzerinden anonim kullanım istatistikleri: uygulama dili, duvarın hangi tarafında olduğun (Doğu, Batı, DDR, Berlin dışı), duvara yaklaşık uzaklık, cihaz modeli, sistem ve uygulama sürümü; kurulum başına bir kez de bu kopyanın mağazadan satın alınıp alınmadığı ve kabaca ne zaman alındığı (satışları saymak için; ödeme bilgisi asla). Cihazın, sana geri izlenemeyen tuzlanmış bir özetle temsil edilir. Uygulamalar arası izleme yok, reklam yok.",
  },
  de: {
    home: "Startseite",
    privacy: "Datenschutz",
    heroEyebrow: "Berlin Wall Explorer",
    heroTitle: "Geschichte der geteilten Stadt in deiner Nahe entdecken",
    heroLead:
      "Berlin Wall Explorer nutzt GPS und Kartenlogik, um Ost/West-Kontext sofort zu erkennen, historische Fotos in der Nahe zu zeigen und POIs in Berlin zu finden.",
    ctaPrivacy: "Datenschutz lesen",
    ctaStart: "Funktionen ansehen",
    featuresTitle: "Was die App macht",
    featuresLead: "Fur Spaziergange durch Berlin mit historischem Kontext in Echtzeit.",
    f1Title: "Sofortige Seitenerkennung",
    f1Body: "Nutzt deinen Standort fur Ost/West-Kontext.",
    f2Title: "Fotos in der Nahe",
    f2Body: "Zeigt historische Fotos nahe deiner Position.",
    f3Title: "POIs entdecken",
    f3Body: "Listet Museen, Denkmaler und Sehenswurdigkeiten in der Nahe.",
    f4Title: "Dynamische Themen",
    f4Body: "Passt das Design je nach Ost/West-Zustand an.",
    screenshotsTitle: "App-Screenshots",
    screenshotsLead: "Echte Screens aus der App.",
    footerText: "Berlin Wall Explorer - Webprasentation",
    privacyTitle: "Datenschutzerklarung",
    privacyLead:
      "Diese Seite erklart, wie Berlin Wall Explorer Standortdaten und API-Anfragen verarbeitet.",
    p1Title: "1) Standortnutzung (GPS)",
    p1Body:
      "Die App fragt GPS an, um deine ungefahre Position in Berlin zu bestimmen. Das dient der Ost/West-Erkennung und dem Finden naher Inhalte.",
    p2Title: "2) API-Aufrufe",
    p2Body:
      "Kartenposition und Parameter werden an entfernte APIs gesendet, um historische Fotos und POIs abzurufen.",
    p3Title: "3) Verarbeitete Daten",
    p3Body:
      "Verarbeitet werden ungefahre Position, Sprachpraferenz und Anfrageparameter. Keine personenbezogenen Daten werden verkauft.",
    p4Title: "4) Kontrolle durch Nutzer",
    p4Body:
      "Standortfreigabe kann jederzeit in den Gerateeinstellungen deaktiviert werden. Dann funktionieren manche Funktionen nicht.",
    p5Title: "5) Kontakt",
    p5Body: "Bei Fragen zum Datenschutz kontaktiere den Herausgeber uber offizielle Kanale.",
    updated: "Zuletzt aktualisiert: September 2026",
  },
  es: {
    home: "Inicio",
    privacy: "Privacidad",
    heroEyebrow: "Berlin Wall Explorer",
    heroTitle: "Descubre la historia de la ciudad dividida cerca de ti",
    heroLead:
      "Berlin Wall Explorer usa GPS e inteligencia de mapa para detectar contexto Este/Oeste al instante, mostrar fotos historicas cercanas y encontrar POIs en Berlin.",
    ctaPrivacy: "Leer Politica de Privacidad",
    ctaStart: "Ver funciones",
    featuresTitle: "Que hace la app",
    featuresLead: "Disenada para recorrer Berlin con contexto historico en tiempo real.",
    f1Title: "Deteccion instantanea de lado",
    f1Body: "Usa tu ubicacion para contexto Este/Oeste.",
    f2Title: "Fotos cercanas",
    f2Body: "Muestra fotos historicas cerca de tu posicion.",
    f3Title: "Explorar POIs",
    f3Body: "Lista museos, monumentos y miradores cercanos.",
    f4Title: "Temas dinamicos",
    f4Body: "Cambia la apariencia segun el lado de Berlin.",
    screenshotsTitle: "Capturas de la app",
    screenshotsLead: "Pantallas reales de la aplicacion.",
    footerText: "Berlin Wall Explorer - Presentacion web",
    privacyTitle: "Politica de Privacidad",
    privacyLead:
      "Esta pagina explica como Berlin Wall Explorer gestiona datos de ubicacion y llamadas API.",
    p1Title: "1) Uso de ubicacion (GPS)",
    p1Body:
      "La app solicita GPS para determinar tu posicion aproximada en Berlin y habilitar deteccion de lado, fotos y puntos cercanos.",
    p2Title: "2) Llamadas API",
    p2Body:
      "La posicion del mapa y parametros se envian a APIs remotas para obtener fotos historicas y puntos de interes.",
    p3Title: "3) Datos procesados",
    p3Body:
      "Procesamos ubicacion aproximada, idioma y parametros de consulta. No vendemos datos personales.",
    p4Title: "4) Control del usuario",
    p4Body:
      "Puedes revocar el permiso de ubicacion en la configuracion del dispositivo en cualquier momento.",
    p5Title: "5) Contacto",
    p5Body: "Para dudas de privacidad, contacta al editor por canales oficiales.",
    updated: "Ultima actualizacion: septiembre de 2026",
  },
  fr: {
    home: "Accueil",
    privacy: "Confidentialite",
    heroEyebrow: "Berlin Wall Explorer",
    heroTitle: "Explorer l'histoire de la ville divisee autour de vous",
    heroLead:
      "Berlin Wall Explorer utilise le GPS et la carte pour detecter le contexte Est/Ouest, afficher des photos historiques proches et trouver des POI a Berlin.",
    ctaPrivacy: "Lire la politique de confidentialite",
    ctaStart: "Voir les fonctionnalites",
    featuresTitle: "Ce que fait l'application",
    featuresLead: "Concue pour marcher dans Berlin avec contexte historique en temps reel.",
    f1Title: "Detection instantanee du cote",
    f1Body: "Utilise votre position pour le contexte Est/Ouest.",
    f2Title: "Photos a proximite",
    f2Body: "Affiche des photos historiques proches de vous.",
    f3Title: "Explorer les POI",
    f3Body: "Liste musees, memorials et points de vue proches.",
    f4Title: "Themes dynamiques",
    f4Body: "Change le theme selon le cote de Berlin.",
    screenshotsTitle: "Captures d'ecran",
    screenshotsLead: "Captures reelles de l'app.",
    footerText: "Berlin Wall Explorer - Presentation web",
    privacyTitle: "Politique de confidentialite",
    privacyLead:
      "Cette page explique comment Berlin Wall Explorer utilise les donnees de localisation et les appels API.",
    p1Title: "1) Utilisation de la localisation (GPS)",
    p1Body:
      "L'application demande l'acces GPS pour determiner votre position approximative et activer les fonctions de decouverte.",
    p2Title: "2) Appels API",
    p2Body:
      "La position de la carte et des parametres sont envoyes a des API distantes pour recuperer photos historiques et POI.",
    p3Title: "3) Donnees traitees",
    p3Body:
      "Nous traitons position approximative, langue et parametres de requete. Nous ne vendons pas les donnees personnelles.",
    p4Title: "4) Controle utilisateur",
    p4Body:
      "Vous pouvez revoquer l'autorisation de localisation dans les reglages de l'appareil a tout moment.",
    p5Title: "5) Contact",
    p5Body: "Pour toute question, contactez l'editeur via les canaux officiels.",
    updated: "Derniere mise a jour : septembre 2026",
  },
  it: {
    home: "Home",
    privacy: "Privacy",
    heroEyebrow: "Berlin Wall Explorer",
    heroTitle: "Esplora la storia della citta divisa vicino a te",
    heroLead:
      "Berlin Wall Explorer usa GPS e mappa per rilevare subito il contesto Est/Ovest, mostrare foto storiche vicine e trovare POI a Berlino.",
    ctaPrivacy: "Leggi Privacy",
    ctaStart: "Scopri funzioni",
    featuresTitle: "Cosa fa l'app",
    featuresLead: "Pensata per camminare a Berlino con contesto storico in tempo reale.",
    f1Title: "Rilevamento lato istantaneo",
    f1Body: "Usa la posizione per il contesto Est/Ovest.",
    f2Title: "Foto vicine",
    f2Body: "Mostra foto storiche vicino alla tua posizione.",
    f3Title: "Esplora POI",
    f3Body: "Elenca musei, memoriali e punti panoramici vicini.",
    f4Title: "Temi dinamici",
    f4Body: "Cambia tema in base al lato di Berlino.",
    screenshotsTitle: "Screenshot app",
    screenshotsLead: "Schermate reali dell'app.",
    footerText: "Berlin Wall Explorer - Presentazione web",
    privacyTitle: "Informativa Privacy",
    privacyLead:
      "Questa pagina spiega come Berlin Wall Explorer gestisce dati di posizione e chiamate API.",
    p1Title: "1) Uso posizione (GPS)",
    p1Body:
      "L'app richiede il GPS per stimare la tua posizione a Berlino e abilitare rilevamento lato, foto e luoghi vicini.",
    p2Title: "2) Chiamate API",
    p2Body:
      "Posizione mappa e parametri vengono inviati ad API remote per ottenere foto storiche e punti di interesse.",
    p3Title: "3) Dati trattati",
    p3Body:
      "Trattiamo posizione approssimativa, lingua e parametri di ricerca. Non vendiamo dati personali.",
    p4Title: "4) Controllo utente",
    p4Body: "Puoi disattivare il permesso posizione nelle impostazioni del dispositivo in qualsiasi momento.",
    p5Title: "5) Contatto",
    p5Body: "Per domande privacy, contatta l'editore tramite canali ufficiali.",
    updated: "Ultimo aggiornamento: settembre 2026",
  },
  pt: {
    home: "Inicio",
    privacy: "Privacidade",
    heroEyebrow: "Berlin Wall Explorer",
    heroTitle: "Explore a historia da cidade dividida perto de voce",
    heroLead:
      "Berlin Wall Explorer usa GPS e inteligencia de mapa para detectar contexto Leste/Oeste, mostrar fotos historicas proximas e encontrar POIs em Berlim.",
    ctaPrivacy: "Ler Politica de Privacidade",
    ctaStart: "Ver recursos",
    featuresTitle: "O que o app faz",
    featuresLead: "Feito para caminhar por Berlim com contexto historico em tempo real.",
    f1Title: "Deteccao instantanea de lado",
    f1Body: "Usa sua localizacao para contexto Leste/Oeste.",
    f2Title: "Fotos proximas",
    f2Body: "Mostra fotos historicas perto da sua posicao.",
    f3Title: "Explorar POIs",
    f3Body: "Lista museus, memoriais e pontos turisticos por perto.",
    f4Title: "Temas dinamicos",
    f4Body: "Troca o tema conforme o lado de Berlim.",
    screenshotsTitle: "Capturas do app",
    screenshotsLead: "Telas reais do aplicativo.",
    footerText: "Berlin Wall Explorer - Apresentacao web",
    privacyTitle: "Politica de Privacidade",
    privacyLead:
      "Esta pagina explica como o Berlin Wall Explorer trata dados de localizacao e chamadas de API.",
    p1Title: "1) Uso de localizacao (GPS)",
    p1Body:
      "O app solicita GPS para identificar sua posicao aproximada em Berlim e habilitar deteccao de lado e descoberta de conteudo.",
    p2Title: "2) Chamadas de API",
    p2Body:
      "Posicao do mapa e parametros sao enviados para APIs remotas para buscar fotos historicas e pontos de interesse.",
    p3Title: "3) Dados processados",
    p3Body:
      "Processamos localizacao aproximada, idioma e parametros de consulta. Nao vendemos dados pessoais.",
    p4Title: "4) Controle do usuario",
    p4Body: "Voce pode revogar a permissao de localizacao nas configuracoes do dispositivo a qualquer momento.",
    p5Title: "5) Contato",
    p5Body: "Para duvidas de privacidade, contate o publicador pelos canais oficiais.",
    updated: "Ultima atualizacao: setembro de 2026",
  },
  ru: {
    home: "Glavnaya",
    privacy: "Konfidentsialnost",
    heroEyebrow: "Berlin Wall Explorer",
    heroTitle: "Issleduyte istoriyu razdelennogo goroda ryadom s vami",
    heroLead:
      "Berlin Wall Explorer ispolzuet GPS i karty, chtoby mgnovenno opredelyat kontekst Vostok/ Zapad, pokazyvat istoricheskie foto i POI ryadom.",
    ctaPrivacy: "Chitat politiku konfidentsialnosti",
    ctaStart: "Posmotret vozmozhnosti",
    featuresTitle: "Chto delaet prilozhenie",
    featuresLead: "Dlya progulok po Berlinu s istoricheskim kontekstom v realnom vremeni.",
    f1Title: "Mgnovennoe opredelenie storony",
    f1Body: "Ispolzuet geolokatsiyu dlya konteksta Vostok/Zapad.",
    f2Title: "Foto ryadom",
    f2Body: "Pokazyvaet istoricheskie foto ryadom s vashim mestopolozheniem.",
    f3Title: "Issledovat POI",
    f3Body: "Pokazyvaet muzeyi, memorialy i orientiry poblizosti.",
    f4Title: "Dinamicheskie temy",
    f4Body: "Menyayet temu v zavisimosti ot storony Berlina.",
    screenshotsTitle: "Skrinshoty prilozheniya",
    screenshotsLead: "Realnye snimki interfeisa.",
    footerText: "Berlin Wall Explorer - Veb-prezentatsiya",
    privacyTitle: "Politika konfidentsialnosti",
    privacyLead:
      "Eta stranitsa obyasnyaet, kak Berlin Wall Explorer obrabatyvaet dannye geolokatsii i API-zaprosy.",
    p1Title: "1) Ispolzovanie geolokatsii (GPS)",
    p1Body:
      "Prilozhenie zaprashivaet dostup k GPS dlya opredeleniya primernogo polozheniya v Berline i raboty funktsiy poiska.",
    p2Title: "2) API-zaprosy",
    p2Body:
      "Pozitsiya karty i parametry otpravlyayutsya v udalyonnye API dlya polucheniya foto i tochek interesa.",
    p3Title: "3) Obrabatyvaemye dannye",
    p3Body:
      "Obrabatyvayutsya primernoe mestopolozhenie, yazyk i parametry zaprosov. Lichnye dannye ne prodayutsya.",
    p4Title: "4) Kontrol polzovatelya",
    p4Body: "Vy mozhete otklyuchit dostup k geolokatsii v nastroikah ustroystva v lyuboy moment.",
    p5Title: "5) Kontakt",
    p5Body: "Po voprosam konfidentsialnosti obrashchaytes k izdatelyu po ofitsialnym kanalam.",
    updated: "Последнее обновление: сентябрь 2026",
  },
  uk: {
    home: "Golovna",
    privacy: "Konfidentsiynist",
    heroEyebrow: "Berlin Wall Explorer",
    heroTitle: "Doslidzhuyte istoriyu rozdilenogo mista poruch",
    heroLead:
      "Berlin Wall Explorer vykorystovuye GPS ta mapu dlya myttyevogo vyznachennya kontekstu Skhid/Zakhid, pokazuye istorichni foto ta POI poruch.",
    ctaPrivacy: "Chytaty polityku konfidentsiynosti",
    ctaStart: "Dyvytys funktsii",
    featuresTitle: "Shcho robyt zastosunok",
    featuresLead: "Stvoreno dlya prohulyanok Berlinom z istorychnym kontekstom u realnomu chasi.",
    f1Title: "Myttyeve vyznachennya storony",
    f1Body: "Vykorystovuye geolokatsiyu dlya kontekstu Skhid/Zakhid.",
    f2Title: "Foto poruch",
    f2Body: "Pokazuye istorychni foto poblyzu vas.",
    f3Title: "Doslidzhennya POI",
    f3Body: "Pokazuye muzei, memorialy ta pamyatky poruch.",
    f4Title: "Dynamichni temy",
    f4Body: "Zminyuye temu zalezhno vid storony Berlina.",
    screenshotsTitle: "Skrynshoty zastosunku",
    screenshotsLead: "Realni ekrany interfeisu.",
    footerText: "Berlin Wall Explorer - Veb-prezentatsiya",
    privacyTitle: "Polityka konfidentsiynosti",
    privacyLead:
      "Tsya storinka poyasnyuye, yak Berlin Wall Explorer obrablyaye dany geolokatsii ta API-zapyty.",
    p1Title: "1) Vykorystannya geolokatsii (GPS)",
    p1Body:
      "Zastosunok zapytuye dostup do GPS dlya vyznachennya pryblyznoho mistseznakhodzhennya v Berlyni ta roboty funktsiy poshuku.",
    p2Title: "2) API-zapyty",
    p2Body:
      "Pozytsiya mapy ta parametry nadsylautysya do viddalenykh API dlya otrymannya foto i tochek interesu.",
    p3Title: "3) Dani, yaki my obrablyayemo",
    p3Body:
      "Obroblyayutsya pryblyzne mistseznakhodzhennya, mova ta parametry zapytiv. Personalni dani ne prodayutsya.",
    p4Title: "4) Kontrol korystuvacha",
    p4Body: "Vy mozhete vymknuty dozvil na geolokatsiyu v nalashtuvannyakh prystroyu u bud-yakyy moment.",
    p5Title: "5) Kontakt",
    p5Body: "Z pytan konfidentsiynosti zvertaytesya do vydavtsya ofitsiynymy kanalami.",
    updated: "Останнє оновлення: вересень 2026",
  },
  ar: {
    home: "Alraisiya",
    privacy: "Alkhususiya",
    heroEyebrow: "Berlin Wall Explorer",
    heroTitle: "Iktashif tarikh almadina almuqasama min hawlak",
    heroLead:
      "Yastakhdim Berlin Wall Explorer alGPS wa alkhariTa liiktishaf siyaq sharq/gharb fawran wa ard alSuwar altarikhiyya wa nuqat alaihtimam alqariba.",
    ctaPrivacy: "Iqra siyasa alkhususiya",
    ctaStart: "Ird almazaya",
    featuresTitle: "Mada yafal altatbiq",
    featuresLead: "Musammam liltajawul fi Berlin maa siyaq tarikhi fawri.",
    f1Title: "Iktishaf aljanib fawran",
    f1Body: "Yastakhdim mawqik litahdid siyaq sharq/gharb.",
    f2Title: "Suwar qariba",
    f2Body: "Yuzhir suwar tarikhiya qariba min mawqik.",
    f3Title: "Iktashif POI",
    f3Body: "Yarud almatAhif wa almanasir alqariba.",
    f4Title: "Thimat mutaghayyira",
    f4Body: "Yubaddil althima hasab janib Berlin.",
    screenshotsTitle: "Suwar min altatbiq",
    screenshotsLead: "Luqatat haqiqiya min wajhat altatbiq.",
    footerText: "Berlin Wall Explorer - Ard web",
    privacyTitle: "Siyasa alkhususiya",
    privacyLead:
      "Tushrah hadhihi alSafha kayfiyat taamul Berlin Wall Explorer maa bayanat almawqi wa talabAt API.",
    p1Title: "1) Istikhdam almawqi (GPS)",
    p1Body:
      "Yatlub altatbiq idhn GPS litahdid mawqik altaqribi fi Berlin wa tafil khasais aliktishaf.",
    p2Title: "2) IstidAAat API",
    p2Body:
      "Yursil mawqi alkhariTa wa almuamalat ila API baida lijalb alsuwar altarikhiyya wa nuqat alaihtimam.",
    p3Title: "3) Albayanat allati nuAAalijuha",
    p3Body:
      "NuAAalij almawqi altaqribi wa tafdil allugha wa muamalat altalab. La nabii albayanat alshakhsiya.",
    p4Title: "4) Tahakkum almustakhdim",
    p4Body: "Yumkinuk ilgha idhn almawqi fi ay waqt min iidadat aljihaz.",
    p5Title: "5) Tawasul",
    p5Body: "Liayi asila hawl alkhususiya, tawasal maa nashir altatbiq min alqanaat alrasmiya.",
    updated: "آخر تحديث: سبتمبر 2026",
  },
};

function getLangFromQuery() {
  const url = new URL(window.location.href);
  const lang = url.searchParams.get("lang");
  return SUPPORTED_LANGS.includes(lang) ? lang : null;
}

function detectLang() {
  const queryLang = getLangFromQuery();
  if (queryLang) return queryLang;
  const saved = localStorage.getItem("bwe_lang");
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  const nav = (navigator.language || "").slice(0, 2).toLowerCase();
  if (SUPPORTED_LANGS.includes(nav)) return nav;
  return DEFAULT_LANG;
}

function setLang(lang) {
  const active = SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
  const dict = t[active] || t[DEFAULT_LANG];
  localStorage.setItem("bwe_lang", active);
  document.documentElement.lang = active;
  document.documentElement.dir = active === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    const value = dict[key] ?? t[DEFAULT_LANG][key];
    if (typeof value === "string") node.textContent = value;
  });

  const privacyHref = active === DEFAULT_LANG ? "/privacy/" : `/privacy/?lang=${active}`;
  const supportHref = active === DEFAULT_LANG ? "/support/" : `/support/?lang=${active}`;
  const homeHref = active === DEFAULT_LANG ? "/" : `/?lang=${active}`;
  const homeLinks = document.querySelectorAll("[data-link='home']");
  const privacyLinks = document.querySelectorAll("[data-link='privacy']");
  const supportLinks = document.querySelectorAll("[data-link='support']");
  homeLinks.forEach((a) => (a.href = homeHref));
  privacyLinks.forEach((a) => (a.href = privacyHref));
  supportLinks.forEach((a) => (a.href = supportHref));

  const select = document.getElementById("lang-select");
  if (select) select.value = active;
}

function setupLanguageSelector() {
  const select = document.getElementById("lang-select");
  if (!select) return;
  const options = SUPPORTED_LANGS.map((lang) => {
    const label = LANG_NAMES[lang] || lang.toUpperCase();
    return `<option value="${lang}">${label}</option>`;
  }).join("");
  select.innerHTML = options;
  select.addEventListener("change", (e) => {
    setLang(e.target.value);
    const url = new URL(window.location.href);
    if (e.target.value === DEFAULT_LANG) {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", e.target.value);
    }
    history.replaceState({}, "", url.toString());
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupLanguageSelector();
  setLang(detectLang());
});
