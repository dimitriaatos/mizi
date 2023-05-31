const getBandcampLink = (album) =>
  `https://bandcamp.com/EmbeddedPlayer/album=${album}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/`;

export const works = [
  {
    category: "Music & Sound Works",
    title: "Music Behind Music",
    slug: "music-behind-music",
    images: ["/musicBehindMusic/musicBehindMusic.jpeg"],
    year: "2022",
    release: "Cassette tape and digital album release by ΤΟΠΟΤ label",
    medium:
      "Music for 4-track cassette recorder, various portable, cassette players, Turntable, Cut-up records, various circular surfaces on the turntable (paper plates, CDs, cardboard cut-outs etc.), CD-player, Contact mics, Electromagnetic coils, cassette loops, found tapes Mangled cassette tapes",
    documentation: {
      bandcamp: "https://tawpot.bandcamp.com/album/music-behind-music",
    },
    embed: getBandcampLink("1220015234"),
    description: [
      "“Music Behind Music” is based on the theoretical framework of media archaeology, extending and applying the ideas of the field on experimental music. The main music material is derived through the transmutation, extension, redefinition and cracking of obsolete recording media. “Music Behind Music” is a reflection on the unique properties of the media and the definition of information/noise; an invitation to listen to the music behind the music, a tribute to surface noise. Music Behind Music is comprised by 3 distinct works: Rummaging the Medium (15’39’’), 1973 (07’31’’), Variations on the Bells of Alexander Nevsky (10’35’’).",
    ],
  },
  {
    category: "Installations",
    title: "Radio Crawler",
    slug: "radio-crawler",
    images: [
      "/radioCrawler/radioCrawler1.jpeg",
      "/radioCrawler/radioCrawler2.jpeg",
    ],
    year: 2022,
    release:
      "Premiered at the Onassis Foundation as part of the Borderline Festival 11",
    medium:
      "A sound & visual installation for 4 groups of “wounded” radios, 4 micro-FM transmitters, custom open-source algorithmic software, 4 instances of SDR (software defined radio), 4-channel audio interface, monitor display, vinyl lettering.",
    documentation: {
      video: "https://www.youtube.com/watch?v=VbfQ4UekcFo",
      radio: "https://loskop.radio/shows/radiocrawler1/",
      code: "https://github.com/M1Z1/Radio-Crawler",
    },
    description: [
      "“Radio Crawler” is an ongoing, open-ended, experimental radio art project. It is a custom software framework and a multiform iterative piece that aims to explore and resurface the technology, concepts, and content of the declining medium of shortwave radio. The software algorithmically controls and mixes four instances of the online shortwave receiver located at the University of Twente.",

      "A meta-radio is generated live through the blending and mixing of the radio transmissions. The emergent radio is narrowcasted on four micro-FM transmitters and then received by an assortment of “wounded” analogue radios.",
      "The combination of the analog shortwave with the newer technology of SDR forms a unique, amalgamated medium with mixed properties. “Radio Crawler” probes the high frequency band revealing ham radio transmissions, Morse codes, NAVTEX, encrypted messages, commercial radio, jammers, and time-signals, among many other unique transmissions.",
    ],
  },
  {
    category: "Music & Sound Works",
    title: "Hard Drive Sniffing",
    slug: "hdd-sniffing",
    images: ["/musicBehindMusic/musicBehindMusic.jpeg"],
    year: 2022,
    release: "Part of Cities and Memory’s Obsolete Sounds project.",
    medium: "Computer hard drives and electomagnetic coils",
    documentation: {
      bandcamp: "https://mizithras.bandcamp.com/album/hard-drive-sniffing",
      website: "https://citiesandmemory.com/obsolete-sounds/",
    },
    embed: getBandcampLink("4009526048"),
    description: [
      "The original recording of an early 80's ST-251 Seagate hard disk initiates the powering up process of 6 different hard drives and the subsequent probing and exploration of their inner mechanisms and sounds. The original powering up sequence can be heard slightly manipulated at the very beginning of the piece, it is the cue for a stretched canon of hard drives spinning up to 7200 RPMs. The original recording functions as an extra disk, a phantom object treated in the digital domain, that becomes part of the hard drive instrumentarium.",
      "Through a slow and methodical use of electromagnetic coils each hard drive is meticulously scanned, and all the different sonic elements of the object are isolated: The tones and harmonics produced by the high rotational speed, the electromagnetic micro-noises of the mechanical head, the sonic artefacts of the hard disk controller and the USB data line. The minuscule phase differences of each disk’s rotation, provide a constant droning beating, that is prominent for most of the duration of the piece, until it is finally ousted by the noisier mechanisms and sounds of the drives.",
    ],
  },
  {
    category: "Music & Sound Works",
    title: "Media Rummaging",
    slug: "media-rummaging",
    images: ["/mediaRummaging/mediaRummaging.png"],
    year: 2023,
    release: "self-released video",
    medium: "Video music performance",
    documentation: { video: "https://www.youtube.com/watch?v=OSOaF8pxv4o" },
    description: [
      "Rummaging through some broken records and CDs, using my Augmented Turntable Max/MSP system alongside a Pioneer CDJ.",
      "Performed and recorded live at an undisclosed location, 27th of March 2023.",
      "Produced by Grigoris Panopoulos (http://makeyourownfilms.com/)",
    ],
  },
  {
    category: "Music & Sound Works",
    title: "Trigger Happy x Niki Krasaki - Buzzer",
    images: ["/buzzer/buzzer.jpeg"],
    slug: "buzzer",
    year: 2021,
    release:
      "Commissioned by the Onassis Foundation for the Composer Niki Krasaki and the experimental music ensemble Trigger Happy.",
    medium:
      "Video music performance for Various kid’s toys, portable cassette players, kid’s musical instruments, circuit-bent portable Casio keyboards.",
    documentation: {
      video:
        "https://www.youtube.com/watch?v=u1uWfg5cTUk&list=PL9LzXXuboQl1LHVGc7BRaNM7zSmrMMiCG&index=1",
    },
    description: [
      "Buzzer was commissioned by Onassis Stegi from the young composer Niki Krasaki. A rich palette of sounds drawn from toys, and from children’s musical instruments and objects, acted as the source of her inspiration, unleashing her imagination for the creation of a unique form of music notation that allows for improvisation. The piece is performed by Trigger Happy, an edgy four-piece improvisational contemporary music collective who play (with) phrases from well-known children’s melodies and fables, and with the rules of team games.",
      "Performed by Trigger Happy: Yorgos Stenos Fratzios - Yorgos Stavridis - Georgios Mizithras (MIZI) - Manthos Karas",
    ],
  },
  {
    category: "Web/Radio Sound Art",
    title: "LOW BIT RATE STREAMING",
    images: ["/lowBitRateStreaming/lbrs.png"],
    slug: "lbrs",
    year: 2020,
    release: "Performed as live-streaming on the Facebook platform",
    medium:
      "Live-streaming performance for OBS streaming software, video-delay, webcam, household objects",
    documentation: { video: "https://www.youtube.com/watch?v=yj6L2_ywIos" },
    description: [
      `LOW BIT RATE STREAMING is a web-based audiovisual performance that took place on the facebook platform 31 march of 2020 during the COVID-19 Greek state lockdown.", "The performance is based on an internal feedback loop of the stream and the principle of digital generation loss, hailing Alvin Lucier's "I'm Sitting in a Room".`,
      "Each feedback  loop repetition is subject to the stream's compression algorithm, each passing incrementally crushes the original material. Given enough passes the audio and video signal's symbolical and physical properties are transmutated into an array of compressed digital noise, losing bit by bit it's former state.",
      "LOW BIT RATE STREAMING is a communal act. Stream viewers were welcomed to send their own audio & video clips which were promptly played in real-time creating an environment for both collective and self-reflection. How accessible are our data? How do we perceive and handle content creation? How transparent is the medium?",
    ],
  },
  {
    category: "Music for Performing Arts",
    title: "Ancient Future Solo",
    images: ["/afs/afs.jpeg"],
    slug: "afs",
    year: "2020 - 2021",
    release:
      "A sound-choreography workshop for adolescents that produced 8 solo video-dance performances and a collective live performance. Produced by the Athens Epidaurus Festival 2021. Choreographer: Marianna Kavallieratos",
    medium: "Live electronics & fixed media for dance",
    documentation: {
      Website: "https://aefestival.gr/ancient-future-solo-the-workshop/",
    },
    description: [
      "Ancient Future Solo was a choreography-sound workshop that spanned for 9 sessions. Adolescents aged 14 to 17, were called to explore and create a solo dance piece. Antigone and Helen were chosen as a starting conceptual point, from there on, each participant, through guidance, made their own artistic decisions, composing a short sol dance piece. The music was made in collaboration with each participant, discussing, the form, sounds, textures and density that’d better corresponded to their piece. The 8 dance works were documented as video-dance performances due to COVID-restrictions. The temporary lift of the restrictions at the summer of 2021 lead to a live-performance, where all the participants worked intensively as a dance group creating a new piece, longer in form, and presenting it in-front of a live audience on September 2021.",
    ],
  },
  {
    category: "Music for Performing Arts",
    title: "John Cage’s Europeras 1 & 2 ",
    images: [
      "/europeras/europeras1.jpeg",
      "/europeras/europeras2.jpeg",
      "/europeras/europeras3.jpeg",
    ],
    slug: "europeras",
    year: 2020,
    release:
      "Greek Premiere at the Greek National Opera Alternative Stage Stavros Niarchos Foundation Cultural Center. Director: Zoe Hadjiantoniou",
    medium:
      "Music Theatre for Custom Max/MSP randomisation software, quadraphonic sound, 14 singers, 10 stage assistants, 24 musicians, 127 costumes, 72 archival images, 121 props, 101 excerpts from recordings, 112 scenes.",
    documentation: {
      website:
        "https://www.nationalopera.gr/en/alternative-stage/es-music-theater/item/2757-europeras-1-2",
    },
    description: [
      `For the purpose of the piece I've developed several randomization patches which imitate the original Andrew Culver's programs and also a Max/MSP patch consisting of a master stopwatch distributed in 7 display monitors as well as any mobile device through JavaScript and a local server. The patch also randomly triggers John Cage's "Truckera" which is the tape part of the piece, as well as audio fragments of the Greek National Opera archive. The audio is diffused in a random circular manner through a quadraphonic sound system.`,
    ],
  },
  {
    category: "Web/Radio Sound Art",
    title: "Deep Internet Cuts",
    images: ["/deepInternetCuts/deepInternetCuts.jpeg"],
    slug: "deep-internet-cuts",
    year: 2020,
    release: "Released as a podcast-style radio work at loskop.radio",
    medium: "Web-based radio-art",
    documentation: { Link: "https://loskop.radio/shows/deep-internet-cuts/" },
    description: [
      "A deep scan of the youtube sphere. Hidden gems and rare finds re-composed. A number of untitled videos, pronunciation videos, high school choir practices, accidental uploads and compression algorithm tests has been meticulously collected, edited and rearranged, resulting in an hour long “deep internet music” radio piece.",
      "Strictly under 20 views.",
    ],
  },
  {
    category: "Music & Sound Works",
    title: "Experimental Turntablism Workshop",
    images: ["/turntableWorkshop/turntableWorkshop.jpeg"],
    slug: "turntable-workshop",
    year: 2019,
    release: "N.Gallery 03/05/2019",
    medium:
      "Workshop for turntables, prepared records, cut-up records, various material",
    documentation: { Link: "https://www.youtube.com/watch?v=GrHAE0R--lM" },
    description: [
      "For the duration of the workshop the participants were called to experiment with the turntable and various records, cutting them up, preparing them, creating new surfaces and exploring new ways of interacting with the medium, ultimately turning it into a musical instrument.",
      "At the end of the workshop the participants had a chance to perform short improvised duets for two turntables. The night was concluded with a free improvisation performance of double-bass, cracked media duet KOHMA. There was also a soul kitchen intermission curated by the food alchemist and sound experimentalist Virginie Viel.",
    ],
  },
  {
    category: "Installations",
    title: "black_blank_loaded",
    images: ["/blackBlankLoaded/blank_black_loaded.png"],
    slug: "black-blank-loaded",
    year: 2016,
    release: "PACE Studio 2 open presentation",
    medium:
      "Audiovisual installation for 4 modified, computer-controlled slide projectors, contact microphones and quadraphonic sound and digital signal processing.",
    documentation: { Link: "https://vimeo.com/245371199" },
    description: [
      "black_blank_loaded is an attempt to transcend a technological object which has fallen out of use. The computer replaces the mechanical interface of the projector essentially creating a new post-digital object, which although heavyweight and very much tactile can only be controlled through the digital domain. The computer controlled slide projector becomes the medium, and as such it defines the compositional material, its parameters and their ranges. The projections consisting of darkness, projected light and images create an interplay on four walls which is sonified by means of amplification on the mechanical parts of the projectors and synthesised sounds, resulting in a spatial counterpoint. black_blank_loaded is an audiovisual experience of disorientating nature.",
      "Giorgos Stavridis, Giorgios Mizithras, Dimitri Aatos Ellinas, Altea Allesandrini",
    ],
  },
  {
    category: "Music & Sound Works",
    title: "Keeping/PACE",
    images: ["/keepingPace/keepingPace.jpeg"],
    slug: "keeping-pace",
    year: 2017,
    release: "Self-released digital album",
    medium:
      "Fixed-media and installation sound & music for stereo, 8 & 24 channels",
    documentation: {
      Link: "https://mizithras.bandcamp.com/album/keeping-pace",
    },
    embed: getBandcampLink("2372148630"),
    description: [
      "A collection of acousmatic music pieces created in the span of 2 years.",
      `Piano Reduction (15'36''):The sound materials of the piece are derived from a found instrument, a detached piano harp. The title as a classical music term,refers to a piano score reduced from an original orchestral score for analysis, performance, or practice purposes. In the compositional context the title indicates the reduction of multiple aspects of the piano: Physically, there's a transformation of the materiality of the object, which occurs through the decay of its original form, leading to a new kind of object with redefined musical properties, a new instrument in its own right. Perceptually, in the chasm that is created through electroacoustic means between the actual physical object and it's sound both in space and time, a body stripped from its sound, sounds stripped from their body. The realization of the piece wouldn't be possible without the help of my friend and colleague Georgios Stavridis, who played in all of the recordings.`,
      `Unstable Systems (10'42''): For 8 Loudspeakers (Stereo Reduction). The piece explores the transition of musical enviroments between stable and unstable states. With the introduction of enough musical elements a stable state is established which sets the range where the musical parameters usually fluctuate. When enough parameters exceed this certain threshold, the system becomes unstable, reaching a high entropy point. The musical elements aren't working in conjuction with one another rather they are "competing" for musical and acoustic space until the collapse of the system. The debris then form a new “stable” music enviroment and the cycle continues.`,
      `Microheat (9'00''): A stereo Piece made for the Amazing Noises contest in the midst of a summer heatwave in Athens.`,
      `Playgroup (06'56''): It is common knowledge that the remembrance of things past is subject to strong discontinuities and distortions. We cannot recall time as a linearly measured flow."(Curtis Roads, 2001) Playgroup is an exploration of temporal, timbral and spatial contrasts. An impression of a soundscape, part synthesized, part natural is juxtaposed with gestural sequences of sound objects made out of toys creating a narrative of a playgroup experience long gone.`,
    ],
  },
  {
    category: "Music & Sound Works",
    title: "KOHMA live at chimeres.space",
    images: ["/kohma/kohma.jpeg"],
    slug: "kohma",
    year: 2019,
    release: "Self-released cassette tape & digital album",
    medium:
      "G. Kokkinaris: double-bass MIZI: 0-input mixer, portable cassette players, 4-track cassette recorders, electromagnetic coils, contact microphones, toy flutes",
    documentation: {
      Link: "https://kohma.bandcamp.com/album/kohma-live-at-chimeres-space",
    },
    embed: getBandcampLink("3703978964"),
    description: [
      "The album is the debut release of the free improvisation duet KOHMA. As an introduction to the intuitive music of KOHMA, we've released a live set that took part at chimeres.space on 1st of December 2018 and captures the unadulterated essence of our sound. The B-side is split between solo pieces of KOHMA members: Four studies of electronic and electroacoustic music by MIZI and an improvisational piece revolving around the tragic murder of Mary Rose.",
    ],
  },
  {
    category: "Web/Radio Sound Art",
    title: "Sonic Weather Station",
    images: ["/sws/sws.png"],
    slug: "sws",
    year: "2022 - ongoing",
    release: "Comissioned by NEON to the artist Stavros Gasparatos",
    medium: "Procedurally generated sound for website",
    documentation: {
      Link: "https://sonicweatherstation.online",
    },
    description: [
      `The station is an online program that procedurally generates sonic output by receiving combined weather data from a physical weather station in Greece.`,
      `Music Composition: Stavros Gasparatos`,
      `Audio Implementation - Sonification: MIZI (Georgios Mizithras)`,
      `Programming - Software Development: Dimitri Aatos Ellinas`,
    ],
  },
];

export const bio = [
  `Georgios Mizithras aka "MIZI" is a musician, sound artist and creative	programmer. He is active both as a composer and a performer in a range	of fields, including acousmatic music, improvisation, sound art, music	for theatrical plays, audiovisual installations and radio art. His	current research revolves around the idea of “media rummaging”, the	constant intuitive exploration of different playback, recording and	transmission media, creating works based on the unique properties of	different sound media. He's part of the KEDiMouRa Collective and the	experimental music ensemble Trigger Happy. He's a curator and producer	of the radio art internet platform loskop.radio. His radio works have	been featured on the temporary art radio station "Radiophrenia".	Notably, he has performed at “Irtijal '19” Festival (Beirut, 2019),	“Borderline Festival” (Athens, 2019), “Rhubaba” Gallery (Edinburgh,	2018), “Klingt Gut” Festival (Hamburg, 2017).`,
  `He has studied at	De Montfort University's Music Technology and Innovation department	(Leicester), is a graduate of composition at the Music Studies	department of the Ionian University and holds a Master's degree in	Musicology: Music Technology from the National and Kapodistrian	University of Athens. He’s currently a PhD student at the Music Studies	department of the Ionian University.`,
  `gmizithras@gmail.com`,
];
