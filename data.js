const clubs = [
  {
    name: "Exemplary Student Research Group",
    location: "328",
    schedule: "Weekly",
    day: "Monday",
    time: "3:20-4:30 PM",
    sponsors: ["T. Banas", "N. Dille"],
    description: "A collaborative group dedicated to advanced student-led research projects across multiple academic disciplines.",
    tags: ["Academic", "Research"]
  },
  {
    name: "HOSA",
    location: "314",
    schedule: "Weekly",
    day: "Monday",
    time: "7:00-7:30 AM",
    sponsors: ["K. Smith"],
    description: "Health Occupations Students of America prepares future health professionals through competitions, service, and skill development.",
    tags: ["Medical", "Leadership"]
  },
  {
    name: "Jazz Studio Orchestra Combo",
    location: "83",
    schedule: "Weekly",
    day: "Monday",
    time: "3:30-5:00 PM",
    sponsors: ["D. Alstadt"],
    description: "A jazz ensemble focused on developing advanced musicianship through performance and improvisation.",
    tags: ["Music", "Performing Arts"]
  },
  {
    name: "Literary Magazine",
    location: "Learning Commons",
    schedule: "Fall: every other week, Spring: every week",
    day: "Monday",
    time: "3:30 PM",
    sponsors: ["J. Hayward"],
    description: "Publishes student writing and art, fostering creativity and literary appreciation within the school.",
    tags: ["Writing", "Arts"]
  },
  {
    name: "National Honor Society",
    location: "Main Auditorium",
    schedule: "Once a month",
    day: "Monday",
    time: "7:05 AM",
    sponsors: ["A. Hastings", "S. Rauen"],
    description: "Recognizes outstanding high school students for scholarship, leadership, service, and character.",
    tags: ["Honor Society", "Leadership"]
  },
  {
    name: "Redhawk Media (Central Times and Flight Yearbook)",
    location: "216 (CT), 218 (yearbook)",
    schedule: "Weekly",
    day: "Monday",
    time: "3:30 PM",
    sponsors: ["N. Weiss", "S. Albiniak", "K. Carlson"],
    description: "Produces the school’s newspaper and yearbook, providing opportunities in journalism, design, and photography.",
    tags: ["Media", "Writing"]
  },
  {
    name: "Redhawk Songbirds",
    location: "84",
    schedule: "Weekly",
    day: "Monday",
    time: "7:10-7:30 AM",
    sponsors: ["L. Berryhill"],
    description: "A vocal performance group dedicated to harmonies and ensemble singing.",
    tags: ["Music", "Vocal", "Performing Arts"]
  },
  {
    name: "Treble A Capella",
    location: "84",
    schedule: "Twice Weekly",
    day: "Monday",
    time: "7:05-7:35 AM",
    sponsors: ["L. Berryhill"],
    description: "An a cappella group specializing in vocal-only performances of popular and classical music.",
    tags: ["Music", "Vocal", "Performing Arts"]
  },
  {
    name: "Vocal Jazz",
    location: "84",
    schedule: "Weekly",
    day: "Monday",
    time: "6:30-8:00 PM",
    sponsors: ["L. Berryhill"],
    description: "Combines vocal performance with jazz stylings and improvisation techniques.",
    tags: ["Music", "Vocal", "Performing Arts"]
  },
  {
    name: "Wallstreet",
    location: "39",
    schedule: "Twice Weekly",
    day: "Monday",
    time: "7:10 AM",
    sponsors: ["C. Bell"],
    description: "A finance-focused group exploring stock markets, investing strategies, and economic trends.",
    tags: ["Finance", "Business"]
  },
  {
    name: "Ultimate Frisbee",
    location: "Cafeteria",
    schedule: "Weekly",
    day: "Monday",
    time: "3:30-5:00 PM",
    sponsors: ["T. Lee", "L. Nolan"],
    description: "A casual yet competitive team sport emphasizing teamwork, agility, and sportsmanship.",
    tags: ["Sports", "Recreation", "Outdoor"]
  },
  {
    name: "Art Club",
    location: "75",
    schedule: "Weekly",
    day: "Tuesday",
    time: "3:20-4:30 PM",
    sponsors: ["C. Hodge"],
    description: "Encourages artistic creativity through various mediums, from painting to sculpture.",
    tags: ["Arts"]
  },
  {
    name: "Car Club",
    location: "50",
    schedule: "1st & 3rd of the month",
    day: "Tuesday",
    time: "3:15-5:00 PM",
    sponsors: ["C. Feid"],
    description: "Brings together automotive enthusiasts to discuss, display, and learn about cars.",
    tags: ["Recreation", "Technology"]
  },
  {
    name: "Chess Team",
    location: "Student Activities Conf. Room",
    schedule: "Tuesdays & Thursdays",
    day: "Tuesday",
    time: "3:15-5:30 PM",
    sponsors: ["M. Steger"],
    description: "Competitive chess players meet to practice strategy and compete in tournaments.",
    tags: ["Games", "Academic"]
  },
  {
    name: "Computer Science Club",
    location: "46",
    schedule: "Weekly",
    day: "Tuesday",
    time: "7:00-7:40 AM",
    sponsors: ["D. Miller"],
    description: "Explores programming, software development, and emerging technologies.",
    tags: ["Technology", "STEM"]
  },
  {
    name: "Culinary Club",
    location: "89A",
    schedule: "Every other week",
    day: "Tuesday",
    time: "3:15-4:15 PM",
    sponsors: ["A. Haiser"],
    description: "Hands-on cooking experiences that teach culinary skills and food culture.",
    tags: ["Cooking", "Culture"]
  },
  {
    name: "DECA",
    location: "42",
    schedule: "Weekly for all members; practices vary",
    day: "Tuesday",
    time: "7:05-7:40 AM",
    sponsors: ["C. Bell", "D. Ashton"],
    description: "Prepares emerging leaders and entrepreneurs in marketing, finance, and management.",
    tags: ["Business", "Leadership"]
  },
  {
    name: "Dynasty Step Team",
    location: "Little Theater",
    schedule: "Weekly on Tues and Thurs",
    day: "Tuesday",
    time: "3:20-4:30 PM",
    sponsors: ["D. Green"],
    description: "A performance group combining dance, rhythm, and step choreography.",
    tags: ["Dance", "Performing Arts"]
  },
  {
    name: "Freshman Class Council",
    location: "236",
    schedule: "1st & 3rd of the month",
    day: "Tuesday",
    time: "7:15-7:40 AM",
    sponsors: ["K. Tuggle", "R. O'Connor"],
    description: "Leadership group representing the freshman class in school events and decisions.",
    tags: ["Leadership", "Government"]
  }
    ,
  {
    name: "Girl Up",
    location: "40",
    schedule: "Weekly",
    day: "Tuesday",
    time: "3:30-4:10 PM",
    sponsors: ["N. Epstein"],
    description: "Empowers girls and allies to advocate for gender equality and education access worldwide.",
    tags: ["Leadership", "Social"]
  },
  {
    name: "HAWK TV",
    location: "54 (Film Lab)",
    schedule: "Weekly - Tuesday & Thursday",
    day: "Tuesday",
    time: "3:20-4:30 PM",
    sponsors: ["D. Goulson"],
    description: "Student-run video production team that creates school news, announcements, and creative projects.",
    tags: ["Media", "Technology"]
  },
  {
    name: "Hawkappella",
    location: "84",
    schedule: "Weekly",
    day: "Tuesday",
    time: "7:10-7:37 AM",
    sponsors: ["K. Mielcarz"],
    description: "A student-led vocal group performing contemporary a cappella music.",
    tags: ["Music", "Vocal", "Performing Arts"]
  },
  {
    name: "Jazz Studio Orchestra",
    location: "83",
    schedule: "Weekly",
    day: "Tuesday",
    time: "3:30-5:00 PM",
    sponsors: ["D. Alstadt"],
    description: "Large jazz ensemble performing advanced jazz literature for school and community events.",
    tags: ["Music", "Performing Arts"]
  },
  {
    name: "Marching Redhawks (Marching Band)",
    location: "83 & Practice Field",
    schedule: "Weekly",
    day: "Tuesday",
    time: "T/Th 3:30-6:00 PM, W 6-9 PM",
    sponsors: ["B. Estes"],
    description: "High-energy marching band that performs at games, parades, and competitions.",
    tags: ["Music", "Performing Arts", "Sports"]
  },
  {
    name: "Math Team",
    location: "300",
    schedule: "Weekly",
    day: "Tuesday",
    time: "3:25-4:30 PM",
    sponsors: ["M. Rakes", "N. Straka", "S. Yang"],
    description: "Competitive mathematics team preparing for local and state competitions.",
    tags: ["Academic", "STEM"]
  },
  {
    name: "Orchesis",
    location: "Dance Stage",
    schedule: "Weekly",
    day: "Tuesday",
    time: "3:30-5:30 PM",
    sponsors: ["M. Musgrave", "L. Swanson"],
    description: "Dance performance group showcasing various styles and choreography.",
    tags: ["Dance", "Performing Arts"]
  },
  {
    name: "PRISM",
    location: "227",
    schedule: "Weekly",
    day: "Tuesday",
    time: "3:30-4:30 PM",
    sponsors: ["R. Lugiai", "C. Krejca"],
    description: "Promotes inclusivity and support for LGBTQ+ students and allies.",
    tags: ["Social", "Leadership"]
  },
  {
    name: "Red Cross Club",
    location: "31",
    schedule: "Every other week",
    day: "Tuesday",
    time: "7:10-7:35 AM",
    sponsors: ["M. Bice"],
    description: "Partners with the American Red Cross to promote community service and blood drives.",
    tags: ["Community", "Medical"]
  },
  {
    name: "Robotics Club",
    location: "46",
    schedule: "Weekly",
    day: "Tuesday",
    time: "3:15-4:30 PM",
    sponsors: ["W. King", "F. Collier"],
    description: "Designs, builds, and programs robots for competitions and STEM outreach.",
    tags: ["Technology", "STEM"]
  },
  {
    name: "Scholastic Bowl",
    location: "325",
    schedule: "Weekly",
    day: "Tuesday",
    time: "3:15-4:30 PM",
    sponsors: ["C. Summy", "M. Brotan"],
    description: "Academic trivia team competing in quiz bowl tournaments.",
    tags: ["Academic", "STEM"]
  },
  {
    name: "Science Olympiad",
    location: "328",
    schedule: "Weekly",
    day: "Tuesday",
    time: "3:15-4:00 PM",
    sponsors: ["A. Damainides"],
    description: "Hands-on STEM competitions in topics ranging from biology to engineering.",
    tags: ["STEM", "Academic"]
  },
  {
    name: "Senior Class Council",
    location: "320",
    schedule: "Weekly",
    day: "Tuesday",
    time: "7:10 AM",
    sponsors: ["S. Cunningham", "J. Bentley"],
    description: "Leadership group planning senior events, fundraisers, and graduation activities.",
    tags: ["Leadership", "Government"]
  },
  {
    name: "Ski & Snowboard Club",
    location: "304",
    schedule: "Weekly",
    day: "Tuesday",
    time: "7:15-7:35 AM / 3:15-3:40 PM",
    sponsors: ["J. Danbom"],
    description: "Organizes ski and snowboard trips for recreational and competitive riders.",
    tags: ["Sports", "Outdoor", "Recreation"]
  },
  {
    name: "Sophomore Class Council",
    location: "75",
    schedule: "Weekly",
    day: "Tuesday",
    time: "7:10-7:35 AM",
    sponsors: ["D. Macaluso"],
    description: "Represents the sophomore class and plans events throughout the school year.",
    tags: ["Leadership", "Government"]
  },
  {
    name: "Spanish Club",
    location: "102",
    schedule: "Once a month",
    day: "Tuesday",
    time: "3:20-4:30 PM",
    sponsors: ["J. Franta", "A. Diaz"],
    description: "Celebrates Spanish language and culture through activities, games, and food.",
    tags: ["Language", "Culture"]
  },
  {
    name: "Speech Team",
    location: "238",
    schedule: "Weekly",
    day: "Tuesday",
    time: "3:30 PM",
    sponsors: ["E. Rigik"],
    description: "Competitive speech and acting team focusing on public speaking skills.",
    tags: ["Academic", "Performing Arts"]
  },
  {
    name: "Theatre Tech Crew",
    location: "Auditorium",
    schedule: "1st Tuesday of the month",
    day: "Tuesday",
    time: "7:10 AM",
    sponsors: ["N. France"],
    description: "Handles lighting, sound, and set construction for theater productions.",
    tags: ["Theater", "Technology"]
  },
  {
    name: "Ultimate Frisbee",
    location: "Cafeteria",
    schedule: "Weekly",
    day: "Tuesday",
    time: "3:30-5:00 PM",
    sponsors: ["T. Lee", "L. Nolan"],
    description: "A casual yet competitive team sport emphasizing teamwork, agility, and sportsmanship.",
    tags: ["Sports", "Recreation", "Outdoor"]
  }
   ,
  {
    name: "Architecture Club",
    location: "46",
    schedule: "2nd Wednesday of the month",
    day: "Wednesday",
    time: "3:20-4:30 PM",
    sponsors: ["G. Twietmeyer"],
    description: "Explores architectural design principles, model building, and careers in architecture.",
    tags: ["STEM", "Arts"]
  },
  {
    name: "Debate",
    location: "223",
    schedule: "Weekly",
    day: "Wednesday",
    time: "3:20-4:30 PM",
    sponsors: ["R. Smith", "R. Lugiai"],
    description: "Competitive debate team developing argumentation, critical thinking, and public speaking skills.",
    tags: ["Academic", "Debate"]
  },
  {
    name: "FFA",
    location: "65",
    schedule: "1st & 3rd of the month",
    day: "Wednesday",
    time: "3:15-4:30 PM",
    sponsors: ["S. Rauen"],
    description: "Future Farmers of America promotes leadership and agricultural education.",
    tags: ["Leadership", "STEM"]
  },
  {
    name: "Jazz Studio Orchestra",
    location: "83",
    schedule: "Weekly",
    day: "Wednesday",
    time: "3:30-5:00 PM",
    sponsors: ["D. Alstadt"],
    description: "Large jazz ensemble performing advanced jazz literature for school and community events.",
    tags: ["Music", "Performing Arts"]
  },
  {
    name: "Latin Club",
    location: "100",
    schedule: "Weekly for Certamen, monthly for events",
    day: "Wednesday",
    time: "3:15-4:00 PM",
    sponsors: ["S. Cunningham"],
    description: "Celebrates Latin language and culture while competing in Certamen trivia competitions.",
    tags: ["Language", "Culture", "Academic"]
  },
  {
    name: "Marching Redhawks (Marching Band)",
    location: "83 & Stadium",
    schedule: "Weekly",
    day: "Wednesday",
    time: "T/Th 3:30-6:00 PM, W 6-9 PM",
    sponsors: ["B. Estes"],
    description: "High-energy marching band that performs at games, parades, and competitions.",
    tags: ["Music", "Performing Arts", "Sports"]
  },
  {
    name: "Pickleball Club",
    location: "Knoch Park Pickleball Courts",
    schedule: "Weekly",
    day: "Wednesday",
    time: "3:20-4:30 PM",
    sponsors: ["A. Sprovieri"],
    description: "Recreational pickleball games for players of all skill levels.",
    tags: ["Sports", "Recreation", "Outdoor"]
  },
  {
    name: "Poetry Club",
    location: "200",
    schedule: "Weekly",
    day: "Wednesday",
    time: "3:20-4:00 PM",
    sponsors: ["J. Lin"],
    description: "Encourages creative expression through writing, sharing, and analyzing poetry.",
    tags: ["Writing", "Arts"]
  },
  {
    name: "Psychology Club",
    location: "42",
    schedule: "Every other week",
    day: "Wednesday",
    time: "3:15-4:00 PM",
    sponsors: ["K. Anderson"],
    description: "Explores human behavior, mental health, and psychological science.",
    tags: ["Academic", "Medical"]
  },
  {
    name: "R41N (Morning)",
    location: "Dance Studio",
    schedule: "Weekly",
    day: "Wednesday",
    time: "7:30-8:45 AM",
    sponsors: ["T. Cowart"],
    description: "Dance group focused on performance, choreography, and school spirit.",
    tags: ["Dance", "Performing Arts"]
  },
  {
    name: "R41N (Afternoon)",
    location: "Outside of Room 219",
    schedule: "Weekly",
    day: "Wednesday",
    time: "3:15-4:30 PM",
    sponsors: ["T. Cowart"],
    description: "Dance group focused on performance, choreography, and school spirit.",
    tags: ["Dance", "Performing Arts"]
  },
  {
    name: "SAC",
    location: "Little Theatre / Auditorium",
    schedule: "Monthly",
    day: "Wednesday",
    time: "Lunch hours",
    sponsors: ["M. Cosgrove", "R. Crawford"],
    description: "Student Advisory Council providing input on school policies and activities.",
    tags: ["Leadership", "Government"]
  },
  {
    name: "Science Bowl",
    location: "320",
    schedule: "Monthly",
    day: "Wednesday",
    time: "3:30-4:00 PM",
    sponsors: ["J. Bentley"],
    description: "Academic competition testing knowledge in physics, chemistry, biology, and math.",
    tags: ["Academic", "STEM"]
  },
  {
    name: "Theatre Central",
    location: "Auditorium",
    schedule: "1st Wednesday of each month",
    day: "Wednesday",
    time: "3:30-4:30 PM",
    sponsors: ["S. Johnson", "K. Vitello"],
    description: "Brings together students interested in acting, directing, and stagecraft.",
    tags: ["Theater", "Performing Arts"]
  },
  {
    name: "Woods Club",
    location: "45",
    schedule: "Weekly",
    day: "Wednesday",
    time: "3:15-5:00 PM",
    sponsors: ["W. King"],
    description: "Provides hands-on woodworking experience for beginners and advanced students.",
    tags: ["STEM", "Arts"]
  },
  {
    name: "Youth & Government",
    location: "NN 109 / NC 215",
    schedule: "Weekly",
    day: "Wednesday",
    time: "6:30-7:45 AM",
    sponsors: ["D. Mohn", "E. Barbino (NNHS)"],
    description: "Simulates government processes through mock legislature and civic engagement.",
    tags: ["Government", "Leadership"]
  }  ,
  {
    name: "Anime Club",
    location: "100",
    schedule: "Weekly",
    day: "Thursday",
    time: "3:20-4:15 PM",
    sponsors: ["S. Cunningham"],
    description: "A community for fans of anime and manga to watch, discuss, and share recommendations.",
    tags: ["Culture", "Arts", "Social"]
  },
  {
    name: "Auto Club",
    location: "Automotive Lab",
    schedule: "Weekly",
    day: "Thursday",
    time: "3:15-4:30 PM",
    sponsors: ["J. Waller"],
    description: "Hands-on learning about car maintenance, repair, and automotive technology.",
    tags: ["STEM", "Recreation"]
  },
  {
    name: "Best Buddies",
    location: "Forum Room",
    schedule: "Weekly",
    day: "Thursday",
    time: "3:20-4:30 PM",
    sponsors: ["M. Murphy", "A. Ciciora"],
    description: "Fosters one-to-one friendships between students with and without disabilities.",
    tags: ["Community", "Leadership", "Social"]
  },
  {
    name: "Book Club",
    location: "LC",
    schedule: "Weekly",
    day: "Thursday",
    time: "3:20-4:00 PM",
    sponsors: ["R. Krambeer"],
    description: "A casual group for reading and discussing a variety of books.",
    tags: ["Writing", "Arts", "Social"]
  },
  {
    name: "Chess Club",
    location: "106",
    schedule: "Weekly",
    day: "Thursday",
    time: "3:20-4:30 PM",
    sponsors: ["C. Sheehan"],
    description: "Students compete and practice strategy in casual and tournament chess games.",
    tags: ["Games", "Academic"]
  },
  {
    name: "Creative Writing Club",
    location: "200",
    schedule: "Weekly",
    day: "Thursday",
    time: "3:20-4:00 PM",
    sponsors: ["J. Lin"],
    description: "Encourages students to write, share, and improve their creative work.",
    tags: ["Writing", "Arts"]
  },
  {
    name: "Eco Club",
    location: "308",
    schedule: "Weekly",
    day: "Thursday",
    time: "3:15-4:15 PM",
    sponsors: ["D. Styers"],
    description: "Promotes environmental awareness through school and community projects.",
    tags: ["Environmental", "Community"]
  },
  {
    name: "Gamers Club",
    location: "108",
    schedule: "Weekly",
    day: "Thursday",
    time: "3:20-4:30 PM",
    sponsors: ["R. Smith"],
    description: "Casual club for video and tabletop gaming enthusiasts.",
    tags: ["Games", "Recreation"]
  },
  {
    name: "Interact",
    location: "102",
    schedule: "Weekly",
    day: "Thursday",
    time: "3:20-4:00 PM",
    sponsors: ["A. Sprovieri"],
    description: "Community service club connected to Rotary International.",
    tags: ["Community ", "Leadership"]
  },
  {
    name: "International Club",
    location: "216",
    schedule: "Weekly",
    day: "Thursday",
    time: "3:20-4:15 PM",
    sponsors: ["N. Dille"],
    description: "Celebrates cultural diversity and global awareness through events and discussions.",
    tags: ["Culture", "Leadership", "Social"]
  },
  {
    name: "Mu Alpha Theta",
    location: "309",
    schedule: "Weekly",
    day: "Thursday",
    time: "3:15-4:00 PM",
    sponsors: ["K. Buckman"],
    description: "National math honor society promoting excellence in mathematics.",
    tags: ["Academic", "Honor Society", "STEM"]
  },
  {
    name: "Scholastic Bowl",
    location: "320",
    schedule: "Weekly",
    day: "Thursday",
    time: "3:15-5:00 PM",
    sponsors: ["J. Bentley"],
    description: "Academic trivia competition covering history, science, literature, and more.",
    tags: ["Academic", "STEM"]
  },
  {
    name: "Speech Team",
    location: "210",
    schedule: "Weekly",
    day: "Thursday",
    time: "3:20-4:30 PM",
    sponsors: ["T. Garbe"],
    description: "Competitive team specializing in public speaking and performance events.",
    tags: ["Performing Arts", "Academic", "Leadership"]
  },
  {
    name: "Student Equity Advisory Committee",
    location: "201",
    schedule: "Weekly",
    day: "Thursday",
    time: "3:20-4:00 PM",
    sponsors: ["A. Hill"],
    description: "Advises on equity, diversity, and inclusion initiatives within the school.",
    tags: ["Leadership", "Culture", "Community "]
  },
  {
    name: "Tabletop RPG Club",
    location: "106",
    schedule: "Weekly",
    day: "Thursday",
    time: "3:20-4:30 PM",
    sponsors: ["C. Sheehan"],
    description: "Plays and designs tabletop role-playing games like Dungeons & Dragons.",
    tags: ["Games", "Social", "Arts"]
  },
  {
    name: "Tri-M Music Honor Society",
    location: "83",
    schedule: "Weekly",
    day: "Thursday",
    time: "3:15-3:45 PM",
    sponsors: ["B. Estes"],
    description: "Recognizes student musicians for academic and musical achievement.",
    tags: ["Music", "Honor Society", "Performing Arts"]
  }  ,
  {
    name: "Creative Arts Club",
    location: "Art Room",
    schedule: "Weekly",
    day: "Friday",
    time: "3:20-4:30 PM",
    sponsors: ["L. Huber"],
    description: "Explores various forms of visual arts, including painting, drawing, and mixed media projects.",
    tags: ["Arts", "Social"]
  },
  {
    name: "Debate Club",
    location: "210",
    schedule: "Weekly",
    day: "Friday",
    time: "3:20-4:30 PM",
    sponsors: ["T. Garbe"],
    description: "Students practice formal debating skills and compete in tournaments.",
    tags: ["Debate", "Leadership", "Academic"]
  },
  {
    name: "Drama Club",
    location: "Auditorium",
    schedule: "Weekly",
    day: "Friday",
    time: "3:15-4:30 PM",
    sponsors: ["S. Farrell"],
    description: "Prepares and performs stage productions, from acting to set design.",
    tags: ["Theater", "Performing Arts", "Arts"]
  },
  {
    name: "GSA (Gender & Sexuality Alliance)",
    location: "104",
    schedule: "Weekly",
    day: "Friday",
    time: "3:20-4:15 PM",
    sponsors: ["K. Buckman"],
    description: "A safe and supportive space for LGBTQ+ students and allies.",
    tags: ["Social", "Leadership", "Culture"]
  },
  {
    name: "Mathletes",
    location: "309",
    schedule: "Weekly",
    day: "Friday",
    time: "3:20-4:30 PM",
    sponsors: ["K. Buckman"],
    description: "Competitive math problem-solving team that participates in local contests.",
    tags: ["Academic", "STEM"]
  },
  {
    name: "Model UN",
    location: "102",
    schedule: "Weekly",
    day: "Friday",
    time: "3:15-4:15 PM",
    sponsors: ["A. Sprovieri"],
    description: "Simulates the United Nations by debating and resolving global issues.",
    tags: ["Leadership", "Government", "Culture"]
  },
  {
    name: "Photography Club",
    location: "Art Room",
    schedule: "Weekly",
    day: "Friday",
    time: "3:20-4:30 PM",
    sponsors: ["L. Huber"],
    description: "Students learn and practice photography techniques, both digital and film.",
    tags: ["Arts", "Recreation"]
  },
  {
    name: "Science Club",
    location: "308",
    schedule: "Weekly",
    day: "Friday",
    time: "3:15-4:30 PM",
    sponsors: ["D. Styers"],
    description: "Explores scientific concepts through experiments and discussions.",
    tags: ["STEM", "Academic"]
  },
  {
    name: "Student Council",
    location: "201",
    schedule: "Weekly",
    day: "Friday",
    time: "3:20-4:00 PM",
    sponsors: ["A. Hill"],
    description: "Student leaders organize school events and represent the student body.",
    tags: ["Leadership", "Government", "Community"]
  },
  {
    name: "Thespian Honor Society",
    location: "Auditorium",
    schedule: "Weekly",
    day: "Friday",
    time: "3:15-4:00 PM",
    sponsors: ["S. Farrell"],
    description: "Honors excellence in theater performance and production.",
    tags: ["Theater", "Honor Society", "Performing Arts"]
  },
  {
    name: "Yoga Club",
    location: "Gym",
    schedule: "Weekly",
    day: "Friday",
    time: "3:20-4:15 PM",
    sponsors: ["M. Murphy"],
    description: "Promotes physical and mental wellness through guided yoga sessions.",
    tags: ["Sports", "Recreation"]
  }

];
