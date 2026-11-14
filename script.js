const books = [
    {
        id: 1,
        title: "Harry Potter",
        author: "J.K. Rowling",
        category: "Fantasy",
        isbn: "9780590353427",
        description: "A young wizard discovers his magical identity and enters Hogwarts, where friendship, danger, and a mysterious past await him."
    },
    {
        id: 2,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        category: "Fantasy",
        isbn: "9780547928227",
        description: "Bilbo Baggins leaves his comfortable home and joins a dangerous adventure to help a group of dwarves reclaim their lost treasure."
    },
    {
        id: 3,
        title: "The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
        category: "Fantasy",
        isbn: "9780618640157",
        description: "A young hobbit inherits a powerful ring and begins a journey to prevent a dark force from taking control of Middle-earth."
    },
    {
        id: 4,
        title: "Percy Jackson",
        author: "Rick Riordan",
        category: "Fantasy",
        isbn: "9780786838653",
        description: "Percy discovers that Greek mythology is real and that he is connected to the ancient gods. His new world is full of monsters and adventures."
    },
    {
        id: 5,
        title: "The Chronicles of Narnia",
        author: "C.S. Lewis",
        category: "Fantasy",
        isbn: "9780066238500",
        description: "Four siblings discover a magical land beyond a wardrobe, where talking animals and an ancient struggle between good and evil await."
    },
    {
        id: 6,
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        category: "Fantasy",
        isbn: "9780756404741",
        description: "A mysterious musician tells the story of his extraordinary life, from a difficult childhood to his education in the arts of magic."
    },
    {
        id: 7,
        title: "Eragon",
        author: "Christopher Paolini",
        category: "Fantasy",
        isbn: "9780375826696",
        description: "A farm boy discovers a dragon egg and becomes part of a dangerous conflict that could change the future of his entire world."
    },
    {
        id: 8,
        title: "Alice in Wonderland",
        author: "Lewis Carroll",
        category: "Fantasy",
        isbn: "9780141439761",
        description: "Alice follows a mysterious rabbit into a strange world filled with unusual creatures, curious characters, and impossible adventures."
    },
    {
        id: 9,
        title: "1984",
        author: "George Orwell",
        category: "Fiction",
        isbn: "9780451524935",
        description: "In a society controlled by constant surveillance and propaganda, Winston Smith begins questioning the government and its version of reality."
    },
    {
        id: 10,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "Fiction",
        isbn: "9780743273565",
        description: "A mysterious millionaire throws extravagant parties while secretly hoping to reconnect with someone from his past."
    },
    {
        id: 11,
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Fiction",
        isbn: "9780061122415",
        description: "A young shepherd travels across the desert searching for treasure and discovers important lessons about dreams and life along the way."
    },
    {
        id: 12,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        category: "Fiction",
        isbn: "9780061120084",
        description: "Through the eyes of a young girl, a small town faces questions of justice, prejudice, courage, and human kindness."
    },
    {
        id: 13,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        category: "Fiction",
        isbn: "9780316769488",
        description: "Holden Caulfield recounts several days of confusion and reflection as he struggles to understand adulthood and the world around him."
    },
    {
        id: 14,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        category: "Fiction",
        isbn: "9780141439518",
        description: "Elizabeth Bennet navigates family expectations, social class, misunderstandings, and an unexpected relationship."
    },
    {
        id: 15,
        title: "The Little Prince",
        author: "Antoine de Saint-Exupery",
        category: "Fiction",
        isbn: "9780156012195",
        description: "A pilot meets a mysterious young traveler from another planet, whose stories reveal thoughtful lessons about friendship and human nature."
    },
    {
        id: 16,
        title: "Of Mice and Men",
        author: "John Steinbeck",
        category: "Fiction",
        isbn: "9780140177398",
        description: "Two traveling workers struggle through difficult times while holding onto a shared dream of building a better life."
    },
    {
        id: 17,
        title: "Sherlock Holmes",
        author: "Arthur Conan Doyle",
        category: "Mystery",
        isbn: "9780140439072",
        description: "The brilliant detective Sherlock Holmes and his companion Dr. Watson solve mysterious cases through observation and logical reasoning."
    },
    {
        id: 18,
        title: "Dracula",
        author: "Bram Stoker",
        category: "Mystery",
        isbn: "9780141439846",
        description: "A mysterious count from Transylvania arrives in England, bringing an unsettling secret that threatens the people around him."
    },
    {
        id: 19,
        title: "Murder on the Orient Express",
        author: "Agatha Christie",
        category: "Mystery",
        isbn: "9780062693662",
        description: "Detective Hercule Poirot investigates a murder aboard a train trapped by snow, where every passenger has something to hide."
    },
    {
        id: 20,
        title: "And Then There Were None",
        author: "Agatha Christie",
        category: "Mystery",
        isbn: "9780062073488",
        description: "Ten strangers arrive on an isolated island, where a mysterious host reveals that each visitor has a hidden secret."
    },
    {
        id: 21,
        title: "The Hound of the Baskervilles",
        author: "Arthur Conan Doyle",
        category: "Mystery",
        isbn: "9780140437867",
        description: "Holmes investigates a mysterious family legend involving a terrifying creature said to haunt the Baskerville family."
    },
    {
        id: 22,
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        category: "Mystery",
        isbn: "9780307454546",
        description: "A journalist and a talented hacker investigate the disappearance of a young woman from a wealthy family."
    },
    {
        id: 23,
        title: "The Big Sleep",
        author: "Raymond Chandler",
        category: "Mystery",
        isbn: "9780394758282",
        description: "Private detective Philip Marlowe takes a case involving a wealthy family and discovers a complicated web of secrets."
    },
    {
        id: 24,
        title: "The Maltese Falcon",
        author: "Dashiell Hammett",
        category: "Mystery",
        isbn: "9780679722649",
        description: "Private detective Sam Spade becomes involved in a dangerous search for a mysterious and valuable historical object."
    },
    {
        id: 25,
        title: "Dune",
        author: "Frank Herbert",
        category: "Science",
        isbn: "9780441013593",
        description: "On a desert planet where a valuable resource controls the universe, young Paul Atreides becomes part of an enormous political struggle."
    },
    {
        id: 26,
        title: "The Martian",
        author: "Andy Weir",
        category: "Science",
        isbn: "9780553418026",
        description: "An astronaut is accidentally left behind on Mars and must use science, creativity, and determination to survive."
    },
    {
        id: 27,
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        category: "Science",
        isbn: "9780345391803",
        description: "Arthur Dent unexpectedly escapes Earth's destruction and begins a bizarre journey through space with an unusual group of travelers."
    },
    {
        id: 28,
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        category: "Science",
        isbn: "9781451673319",
        description: "In a future where books are forbidden, a fireman responsible for destroying them begins questioning the society he serves."
    },
    {
        id: 29,
        title: "Brave New World",
        author: "Aldous Huxley",
        category: "Science",
        isbn: "9780060850524",
        description: "A futuristic society maintains stability through technology and conditioning, but not everyone accepts its definition of happiness."
    },
    {
        id: 30,
        title: "Foundation",
        author: "Isaac Asimov",
        category: "Science",
        isbn: "9780553293357",
        description: "A mathematician predicts the collapse of a galactic empire and creates a plan to preserve knowledge during the coming dark age."
    },
    {
        id: 31,
        title: "Cosmos",
        author: "Carl Sagan",
        category: "Science",
        isbn: "9780345539434",
        description: "Carl Sagan explores the universe, the history of scientific discovery, and humanity's place in the cosmos."
    },
    {
        id: 32,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        category: "Science",
        isbn: "9780553380163",
        description: "Stephen Hawking introduces major ideas about the universe, including black holes, space, time, and the origins of existence."
    },

    // =========================================================
    // 60 NEW REGULAR BOOKS
    // =========================================================

    {
        id: 33,
        title: "The Two Towers",
        author: "J.R.R. Tolkien",
        category: "Fantasy",
        isbn: "9780618346264",
        description: "The Fellowship is divided, and its members face separate dangers as the struggle against Sauron grows."
    },
    {
        id: 34,
        title: "The Return of the King",
        author: "J.R.R. Tolkien",
        category: "Fantasy",
        isbn: "9780618346257",
        description: "The final battle for Middle-earth approaches as Frodo and Sam continue their dangerous journey."
    },
    {
        id: 35,
        title: "The Silmarillion",
        author: "J.R.R. Tolkien",
        category: "Fantasy",
        isbn: "9780618391110",
        description: "The ancient legends and history of Middle-earth reveal the origins of its greatest conflicts."
    },
    {
        id: 36,
        title: "Mistborn: The Final Empire",
        author: "Brandon Sanderson",
        category: "Fantasy",
        isbn: "9780765311788",
        description: "A young street thief joins a crew planning to overthrow an immortal ruler using extraordinary magical abilities."
    },
    {
        id: 37,
        title: "The Way of Kings",
        author: "Brandon Sanderson",
        category: "Fantasy",
        isbn: "9780765326355",
        description: "On a world of violent storms, soldiers, scholars, and mysterious figures become connected by an approaching catastrophe."
    },
    {
        id: 38,
        title: "The Eye of the World",
        author: "Robert Jordan",
        category: "Fantasy",
        isbn: "9780812511819",
        description: "A young man's quiet village life changes when a mysterious woman arrives and reveals that a great danger is approaching."
    },
    {
        id: 39,
        title: "The Lies of Locke Lamora",
        author: "Scott Lynch",
        category: "Fantasy",
        isbn: "9780553588941",
        description: "A clever group of thieves attempts an ambitious con in a city filled with powerful criminals and political secrets."
    },
    {
        id: 40,
        title: "American Gods",
        author: "Neil Gaiman",
        category: "Fantasy",
        isbn: "9780062572110",
        description: "A man becomes involved in a hidden conflict between old gods and new forces in modern America."
    },
    {
        id: 41,
        title: "Good Omens",
        author: "Terry Pratchett and Neil Gaiman",
        category: "Fantasy",
        isbn: "9780060853983",
        description: "An angel and a demon attempt to prevent the apocalypse after becoming surprisingly comfortable with life on Earth."
    },
    {
        id: 42,
        title: "The Once and Future King",
        author: "T.H. White",
        category: "Fantasy",
        isbn: "9780441627400",
        description: "The story of King Arthur follows his childhood, rise to power, and the legendary world of Camelot."
    },
    {
        id: 43,
        title: "The Last Unicorn",
        author: "Peter S. Beagle",
        category: "Fantasy",
        isbn: "9780451450524",
        description: "A unicorn leaves her forest to discover what happened to the others of her kind."
    },
    {
        id: 44,
        title: "The Ocean at the End of the Lane",
        author: "Neil Gaiman",
        category: "Fantasy",
        isbn: "9780062459367",
        description: "An adult returns to his childhood home and remembers a strange series of events that changed his life."
    },
    {
        id: 45,
        title: "The Color of Magic",
        author: "Terry Pratchett",
        category: "Fantasy",
        isbn: "9780062225672",
        description: "A disastrous wizard and an unusual tourist travel across a strange and humorous fantasy world."
    },
    {
        id: 46,
        title: "The Princess Bride",
        author: "William Goldman",
        category: "Fantasy",
        isbn: "9780156035156",
        description: "A legendary adventure combines sword fights, unlikely heroes, humor, and a quest for true love."
    },
    {
        id: 47,
        title: "The Graveyard Book",
        author: "Neil Gaiman",
        category: "Fantasy",
        isbn: "9780060530921",
        description: "A young boy is raised by the supernatural residents of a graveyard and slowly discovers the world beyond it."
    },
    {
        id: 48,
        title: "The Giver",
        author: "Lois Lowry",
        category: "Fiction",
        isbn: "9780544336261",
        description: "A boy in a seemingly perfect society discovers the hidden memories and truths behind its controlled existence."
    },
    {
        id: 49,
        title: "Animal Farm",
        author: "George Orwell",
        category: "Fiction",
        isbn: "9780451526342",
        description: "A group of farm animals takes control of their farm, only to discover how power can change those who hold it."
    },
    {
        id: 50,
        title: "The Book Thief",
        author: "Markus Zusak",
        category: "Fiction",
        isbn: "9780375842207",
        description: "A young girl living in wartime Germany finds comfort and meaning through books and the people around her."
    },
    {
        id: 51,
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        category: "Fiction",
        isbn: "9781594631931",
        description: "A man reflects on friendship, family, and the choices that shaped his childhood in Afghanistan."
    },
    {
        id: 52,
        title: "The Road",
        author: "Cormac McCarthy",
        category: "Fiction",
        isbn: "9780307387899",
        description: "A father and son travel through a devastated world while trying to preserve hope and humanity."
    },
    {
        id: 53,
        title: "The Perks of Being a Wallflower",
        author: "Stephen Chbosky",
        category: "Fiction",
        isbn: "9780671027346",
        description: "Through letters, a teenager describes friendship, growing up, and discovering where he belongs."
    },
    {
        id: 54,
        title: "Little Women",
        author: "Louisa May Alcott",
        category: "Fiction",
        isbn: "9780147514011",
        description: "Four sisters grow up together, facing family challenges, personal ambitions, and changing relationships."
    },
    {
        id: 55,
        title: "Jane Eyre",
        author: "Charlotte Bronte",
        category: "Fiction",
        isbn: "9780141441146",
        description: "An independent young woman builds her own life while uncovering the secrets of a mysterious household."
    },
    {
        id: 56,
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        category: "Fiction",
        isbn: "9780141439570",
        description: "A young man becomes obsessed with preserving his appearance while a mysterious portrait reflects the consequences of his choices."
    },
    {
        id: 57,
        title: "The Old Man and the Sea",
        author: "Ernest Hemingway",
        category: "Fiction",
        isbn: "9780684801223",
        description: "An aging fisherman ventures far into the sea and faces a demanding struggle that tests his determination."
    },
    {
        id: 58,
        title: "The Count of Monte Cristo",
        author: "Alexandre Dumas",
        category: "Fiction",
        isbn: "9780140449266",
        description: "A young sailor is betrayed and imprisoned, then returns years later with a carefully planned quest for justice."
    },
    {
        id: 59,
        title: "Les Miserables",
        author: "Victor Hugo",
        category: "Fiction",
        isbn: "9780451419439",
        description: "A former prisoner attempts to build a new life while society, poverty, and the law challenge his path."
    },
    {
        id: 60,
        title: "The Secret Garden",
        author: "Frances Hodgson Burnett",
        category: "Fiction",
        isbn: "9780064401883",
        description: "A lonely girl discovers a neglected garden and gradually changes the lives of the people around her."
    },
    {
        id: 61,
        title: "The Fault in Our Stars",
        author: "John Green",
        category: "Fiction",
        isbn: "9780525478812",
        description: "Two teenagers meet through a support group and form a meaningful connection while navigating difficult circumstances."
    },
    {
        id: 62,
        title: "A Thousand Splendid Suns",
        author: "Khaled Hosseini",
        category: "Fiction",
        isbn: "9781594489501",
        description: "Two women from different generations develop a powerful friendship amid the changing history of Afghanistan."
    },
    {
        id: 63,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        category: "Mystery",
        isbn: "9781250301697",
        description: "A therapist becomes determined to understand why a famous painter stopped speaking after a shocking incident."
    },
    {
        id: 64,
        title: "Gone Girl",
        author: "Gillian Flynn",
        category: "Mystery",
        isbn: "9780307588371",
        description: "A woman's disappearance turns a marriage into a complicated mystery filled with conflicting stories."
    },
    {
        id: 65,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        category: "Mystery",
        isbn: "9780307474278",
        description: "A professor follows a trail of puzzles and historical clues after a mysterious event at the Louvre."
    },
    {
        id: 66,
        title: "The Thursday Murder Club",
        author: "Richard Osman",
        category: "Mystery",
        isbn: "9781984880987",
        description: "Four retirement-home residents investigate real crimes and discover that their unusual hobby has become serious."
    },
    {
        id: 67,
        title: "The Woman in the Window",
        author: "A.J. Finn",
        category: "Mystery",
        isbn: "9780062678416",
        description: "A woman who rarely leaves her home believes she has witnessed something disturbing in a neighboring house."
    },
    {
        id: 68,
        title: "The Adventures of Sherlock Holmes",
        author: "Arthur Conan Doyle",
        category: "Mystery",
        isbn: "9780140437717",
        description: "Sherlock Holmes and Dr. Watson investigate a collection of unusual cases using logic and careful observation."
    },
    {
        id: 69,
        title: "The Murder of Roger Ackroyd",
        author: "Agatha Christie",
        category: "Mystery",
        isbn: "9780062073563",
        description: "Hercule Poirot investigates a suspicious death in a quiet village where everyone has something to conceal."
    },
    {
        id: 70,
        title: "The Moonstone",
        author: "Wilkie Collins",
        category: "Mystery",
        isbn: "9780140434088",
        description: "A valuable diamond disappears from an English country house, leading to a complicated investigation."
    },
    {
        id: 71,
        title: "Rebecca",
        author: "Daphne du Maurier",
        category: "Mystery",
        isbn: "9780380730407",
        description: "A newly married woman arrives at a grand estate and finds herself surrounded by the memory of her husband's first wife."
    },
    {
        id: 72,
        title: "The Cuckoo's Calling",
        author: "Robert Galbraith",
        category: "Mystery",
        isbn: "9780316206846",
        description: "Private detective Cormoran Strike investigates the suspicious death of a famous model."
    },
    {
        id: 73,
        title: "In the Woods",
        author: "Tana French",
        category: "Mystery",
        isbn: "9780143113492",
        description: "A detective investigates a child's murder in a town connected to a mysterious event from his own childhood."
    },
    {
        id: 74,
        title: "The No. 1 Ladies' Detective Agency",
        author: "Alexander McCall Smith",
        category: "Mystery",
        isbn: "9781400034772",
        description: "A thoughtful detective opens an agency in Botswana and solves the everyday mysteries of her community."
    },
    {
        id: 75,
        title: "The ABC Murders",
        author: "Agatha Christie",
        category: "Mystery",
        isbn: "9780062073587",
        description: "Poirot receives mysterious letters announcing crimes in alphabetical order and must identify the person behind them."
    },
    {
        id: 76,
        title: "The Three-Body Problem",
        author: "Liu Cixin",
        category: "Science",
        isbn: "9780765382030",
        description: "A mysterious scientific project connects humanity to an extraordinary civilization beyond Earth."
    },
    {
        id: 77,
        title: "The Time Machine",
        author: "H.G. Wells",
        category: "Science",
        isbn: "9780141439976",
        description: "An inventor travels far into the future and discovers a civilization very different from his own."
    },
    {
        id: 78,
        title: "The War of the Worlds",
        author: "H.G. Wells",
        category: "Science",
        isbn: "9780141441030",
        description: "Humanity faces an unexpected invasion from Mars in this classic science-fiction story."
    },
    {
        id: 79,
        title: "Do Androids Dream of Electric Sheep?",
        author: "Philip K. Dick",
        category: "Science",
        isbn: "9780345404473",
        description: "A bounty hunter questions the meaning of humanity while tracking artificial beings in a damaged future."
    },
    {
        id: 80,
        title: "Neuromancer",
        author: "William Gibson",
        category: "Science",
        isbn: "9780441569595",
        description: "A former computer hacker is recruited for a dangerous mission in a world shaped by technology and artificial intelligence."
    },
    {
        id: 81,
        title: "Ender's Game",
        author: "Orson Scott Card",
        category: "Science",
        isbn: "9780812550702",
        description: "A gifted child enters a demanding military school designed to prepare humanity for a possible alien conflict."
    },
    {
        id: 82,
        title: "Ready Player One",
        author: "Ernest Cline",
        category: "Science",
        isbn: "9780307887443",
        description: "A teenager enters a vast virtual world to solve a series of puzzles left behind by its creator."
    },
    {
        id: 83,
        title: "Project Hail Mary",
        author: "Andy Weir",
        category: "Science",
        isbn: "9780593135204",
        description: "A lone astronaut wakes up far from Earth with no memory of his mission and must solve a threat to humanity."
    },
    {
        id: 84,
        title: "Contact",
        author: "Carl Sagan",
        category: "Science",
        isbn: "9781501197987",
        description: "A scientist discovers a signal from beyond Earth and becomes part of humanity's first attempt to make contact."
    },
    {
        id: 85,
        title: "The Left Hand of Darkness",
        author: "Ursula K. Le Guin",
        category: "Science",
        isbn: "9780441478125",
        description: "An envoy travels to a distant planet and must understand an unfamiliar society to complete his mission."
    },
    {
        id: 86,
        title: "The Dispossessed",
        author: "Ursula K. Le Guin",
        category: "Science",
        isbn: "9780061054884",
        description: "A physicist travels between two contrasting worlds while exploring freedom, society, and scientific discovery."
    },
    {
        id: 87,
        title: "The Forever War",
        author: "Joe Haldeman",
        category: "Science",
        isbn: "9780312536633",
        description: "A soldier experiences the strange effects of time and distance during an interstellar war."
    },
    {
        id: 88,
        title: "Rendezvous with Rama",
        author: "Arthur C. Clarke",
        category: "Science",
        isbn: "9780345333528",
        description: "A mysterious object enters the solar system, and a team of explorers investigates its extraordinary interior."
    },
    {
        id: 89,
        title: "The Illustrated Man",
        author: "Ray Bradbury",
        category: "Science",
        isbn: "9781451678189",
        description: "A collection of science-fiction stories explores technology, space, society, and the future of humanity."
    },
    {
        id: 90,
        title: "I, Robot",
        author: "Isaac Asimov",
        category: "Science",
        isbn: "9780553382563",
        description: "A series of connected stories explores robots, artificial intelligence, and the ethical questions surrounding them."
    },
    {
        id: 91,
        title: "The Foundation Trilogy",
        author: "Isaac Asimov",
        category: "Science",
        isbn: "9780385177256",
        description: "A vast science-fiction saga follows the attempt to preserve civilization after the collapse of a galactic empire."
    },
    {
        id: 92,
        title: "Childhood's End",
        author: "Arthur C. Clarke",
        category: "Science",
        isbn: "9780345347954",
        description: "Humanity enters a new era after mysterious visitors arrive on Earth and begin guiding its future."
    },

    // =========================================================
    // 10 LIGHT NOVELS
    // =========================================================

    {
        id: 93,
        title: "The Beginning After the End",
        author: "TurtleMe",
        category: "Light Novels",
        isbn: "9781975317574",
        description: "After being reborn in a world of magic, a former king begins a new life while carrying the memories and experience of his previous existence."
    },
    {
        id: 94,
        title: "Omniscient Reader's Viewpoint",
        author: "Sing Shong",
        category: "Light Novels",
        isbn: "9781975319844",
        description: "A reader discovers that the web novel he followed has become reality, and his knowledge may be the key to surviving its world."
    },
    {
        id: 95,
        title: "Mushoku Tensei: Jobless Reincarnation",
        author: "Rifujin na Magonote",
        category: "Light Novels",
        isbn: "9781642751383",
        description: "A man is reincarnated into a fantasy world and decides to make the most of his new life through magic, friendship, and adventure."
    },
    {
        id: 96,
        title: "Re:Zero - Starting Life in Another World",
        author: "Tappei Nagatsuki",
        category: "Light Novels",
        isbn: "9780316315303",
        description: "Subaru is transported to another world and discovers an unusual ability that changes how he faces its dangers."
    },
    {
        id: 97,
        title: "Overlord",
        author: "Kugane Maruyama",
        category: "Light Novels",
        isbn: "9780316272247",
        description: "When a virtual world shuts down, one player remains inside it as a powerful undead ruler surrounded by loyal followers."
    },
    {
        id: 98,
        title: "Sword Art Online",
        author: "Reki Kawahara",
        category: "Light Novels",
        isbn: "9780316371248",
        description: "Players become trapped inside a virtual reality game where clearing its challenges becomes essential to returning home."
    },
    {
        id: 99,
        title: "Spice and Wolf",
        author: "Isuna Hasekura",
        category: "Light Novels",
        isbn: "9780759531045",
        description: "A traveling merchant meets a wolf deity, and the two begin a journey filled with trade, economics, and unexpected companionship."
    },
    {
        id: 100,
        title: "Ascendance of a Bookworm",
        author: "Miya Kazuki",
        category: "Light Novels",
        isbn: "9781718350001",
        description: "A book-loving woman is reborn in a world where books are rare and decides to find a way to create them herself."
    },
    {
        id: 101,
        title: "Classroom of the Elite",
        author: "Shogo Kinugasa",
        category: "Light Novels",
        isbn: "9781642751376",
        description: "Students at an unusual academy compete through strategy, competition, and psychological challenges."
    },
    {
        id: 102,
        title: "86 - Eighty-Six",
        author: "Asato Asato",
        category: "Light Novels",
        isbn: "9781975303129",
        description: "A young officer commands a group of soldiers fighting a war that the rest of society refuses to acknowledge."
    }
];

/* =========================================================
   STORAGE (saved in this browser only)
========================================================= */

const KEYS = {
    loans: "bookhouseLoans",
    xp: "bookhouseXP",
    profile: "bookhouseProfile",
    stock: "bookhouseStock"
};

const XP_BORROW = 50;
const BASE_BORROW_PRICE = 1000;
const XP_RETURN = 10;
const MAX_LOAN_DAYS = 30;
const TOTAL_STEPS = 5;
const LATE_RETURN_PENALTY = 25;
const DEMO_CARD_NUMBER = "4242424242424242";

const LEVELS = [
    { name: "Newcomer", emoji: "🌱", min: 0, discount: 0 },
    { name: "Bookworm", emoji: "🐛", min: 100, discount: 5 },
    { name: "Page Turner", emoji: "📖", min: 250, discount: 10 },
    { name: "Bibliophile", emoji: "🦉", min: 500, discount: 15 },
    { name: "Librarian", emoji: "👑", min: 1000, discount: 20 }
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function readStorage(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw === null ? fallback : JSON.parse(raw);
    } catch (error) {
        return fallback;
    }
}

function writeStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        /* storage not available, the app still works for this visit */
    }
}

/* ---------- date helpers ---------- */

function toISO(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
}

function addDays(date, days) {
    const copy = new Date(date);
    copy.setDate(copy.getDate() + days);
    return copy;
}

function formatDate(iso) {
    return new Date(iso + "T00:00:00").toLocaleDateString(undefined, {
        month: "short",
        day: "numeric"
    });
}

const ISO_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

/* ---------- load saved data safely ---------- */

function cleanLoans(raw) {
    const clean = {};

    if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
        return clean;
    }

    Object.entries(raw).forEach(([id, loan]) => {
        const bookId = Number(id);

        if (!books.some(book => book.id === bookId)) return;
        if (!loan || typeof loan !== "object") return;

        const today = toISO(new Date());

        clean[bookId] = {
            name: String(loan.name || "").slice(0, 40),
            studentId: String(loan.studentId || "").slice(0, 15),
            contact: String(loan.contact || "").slice(0, 60),
            borrowedAt: ISO_PATTERN.test(loan.borrowedAt) ? loan.borrowedAt : today,
            dueDate: ISO_PATTERN.test(loan.dueDate) ? loan.dueDate : today,
            dueAt: Number.isFinite(Number(loan.dueAt)) && Number(loan.dueAt) > 0
                ? Number(loan.dueAt)
                : new Date((ISO_PATTERN.test(loan.dueDate) ? loan.dueDate : today) + "T23:59:59").getTime(),
            discountPercent: Math.max(0, Math.min(100, Number(loan.discountPercent) || 0)),
            basePrice: Number.isFinite(Number(loan.basePrice)) ? Number(loan.basePrice) : BASE_BORROW_PRICE,
            amountSaved: Math.max(0, Number(loan.amountSaved) || 0),
            finalPrice: Number.isFinite(Number(loan.finalPrice))
                ? Number(loan.finalPrice)
                : BASE_BORROW_PRICE - Math.round(BASE_BORROW_PRICE * (Number(loan.discountPercent) || 0) / 100),
            membershipLevel: String(loan.membershipLevel || "Newcomer")
        };
    });

    return clean;
}

let loans = cleanLoans(readStorage(KEYS.loans, {}));
let xp = Math.max(0, Number(readStorage(KEYS.xp, 0)) || 0);
let profile = readStorage(KEYS.profile, {});

if (!profile || typeof profile !== "object") profile = {};

/* ---------- stock (random starting copies, saved in this browser) ---------- */

const MIN_START_STOCK = 2;
const MAX_START_STOCK = 12;
const LOW_STOCK_LIMIT = 2;

function cleanStock(raw) {
    const saved = raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
    const clean = {};

    books.forEach(book => {
        const value = Number(saved[book.id]);

        if (saved[book.id] !== undefined && Number.isInteger(value) && value >= 0 && value <= 999) {
            clean[book.id] = value;
        } else {
            clean[book.id] = MIN_START_STOCK +
                Math.floor(Math.random() * (MAX_START_STOCK - MIN_START_STOCK + 1));
        }
    });

    return clean;
}

let stock = cleanStock(readStorage(KEYS.stock, {}));
writeStorage(KEYS.stock, stock);

function getStock(id) {
    return stock[id] || 0;
}

function hasStock(id) {
    return getStock(id) > 0;
}

function changeStock(id, amount) {
    stock[id] = Math.max(0, getStock(id) + amount);
    writeStorage(KEYS.stock, stock);
}

function stockLabel(id) {
    const count = getStock(id);

    if (count === 0) return { text: "Out of stock", level: "none" };
    if (count <= LOW_STOCK_LIMIT) return { text: `Only ${count} left`, level: "low" };

    return { text: `${count} in stock`, level: "ok" };
}

let selectedCategory = "All";
let selectedBook = null;

function isBorrowed(id) {
    return Object.prototype.hasOwnProperty.call(loans, id);
}

function borrowedCount() {
    return Object.keys(loans).length;
}

/* =========================================================
   DOM
========================================================= */

const el = id => document.getElementById(id);

const bookModal = el("bookModal");
const borrowModal = el("borrowModal");
const levelsModal = el("levelsModal");
const borrowForm = el("borrowForm");
const steps = [...document.querySelectorAll(".step")];
const chips = [...document.querySelectorAll(".chip")];

const fieldName = el("fieldName");
const fieldId = el("fieldId");
const fieldContact = el("fieldContact");
const fieldDate = el("fieldDate");
const fieldCardNumber = el("fieldCardNumber");
const fieldCardExpiry = el("fieldCardExpiry");
const fieldCardCvv = el("fieldCardCvv");

let selectedDueAt = null;
let wizardBook = null;
let wizardStep = 1;

/* =========================================================
   XP + LEVELS
========================================================= */

function getLevelIndex(points) {
    let index = 0;

    LEVELS.forEach((level, i) => {
        if (points >= level.min) index = i;
    });

    return index;
}

function updateXpPill() {
    const index = getLevelIndex(xp);
    const level = LEVELS[index];
    const next = LEVELS[index + 1];

    el("levelEmoji").textContent = level.emoji;
    el("levelName").textContent = level.name;

    if (next) {
        const progress = (xp - level.min) / (next.min - level.min);
        el("xpFill").style.width = Math.round(progress * 100) + "%";
        el("xpText").textContent = `${xp} / ${next.min} XP`;
    } else {
        el("xpFill").style.width = "100%";
        el("xpText").textContent = `${xp} XP · MAX`;
    }

    const xpPill = document.querySelector(".xp-pill");
    if (xpPill) xpPill.title = `${level.name}: ${level.discount}% borrowing discount. Click to see all levels`;

    if (levelsModal.classList.contains("show")) renderLevels();
}

/* ---------- levels screen ---------- */

function renderLevels() {
    const index = getLevelIndex(xp);
    const level = LEVELS[index];
    const next = LEVELS[index + 1];

    el("levelsCurrentEmoji").textContent = level.emoji;
    el("levelsCurrentName").textContent = level.name;

    if (next) {
        const progress = (xp - level.min) / (next.min - level.min);
        el("levelsXpFill").style.width = Math.round(progress * 100) + "%";
        el("levelsXpText").textContent =
            `${xp} / ${next.min} XP · ${next.min - xp} XP to ${next.name} ${next.emoji}`;
    } else {
        el("levelsXpFill").style.width = "100%";
        el("levelsXpText").textContent = `${xp} XP · Max level reached 🎉`;
    }

    el("levelsList").innerHTML = LEVELS.map((item, i) => {
        const upper = LEVELS[i + 1];
        const state = i < index ? "unlocked" : i === index ? "current" : "locked";

        let percent = 0;
        if (i < index) percent = 100;
        else if (i === index) percent = upper ? Math.round((xp - item.min) / (upper.min - item.min) * 100) : 100;

        const tag = state === "unlocked"
            ? "✓ Unlocked"
            : state === "current"
                ? "Current"
                : `🔒 ${item.min - xp} XP to go`;

        return `
            <div class="level-card ${state}">
                <span class="level-card-emoji">${item.emoji}</span>
                <div class="level-card-info">
                    <div class="level-card-top">
                        <strong>${item.name}</strong>
                        <span class="level-card-tag">${tag}</span>
                    </div>
                    <p>${item.min} XP · ${item.discount}% borrowing discount</p>
                    <div class="xp-bar"><div class="xp-fill" style="width: ${percent}%"></div></div>
                </div>
            </div>
        `;
    }).join("");
}

function openLevels() {
    renderLevels();
    levelsModal.classList.add("show");
    syncScrollLock();
}

function closeLevels() {
    levelsModal.classList.remove("show");
    syncScrollLock();
}

function currentDiscount() {
    return LEVELS[getLevelIndex(xp)].discount;
}

function renderBorrowPrice() {
    const index = getLevelIndex(xp);
    const level = LEVELS[index];
    const savings = Math.round(BASE_BORROW_PRICE * level.discount / 100);
    const finalPrice = BASE_BORROW_PRICE - savings;

    el("borrowDiscount").textContent = `${level.emoji} ${level.name} discount: ${level.discount}%`;
    el("basePrice").textContent = `${BASE_BORROW_PRICE.toLocaleString("en-US")} AMD`;
    el("priceDiscountLabel").textContent = `Your discount (${level.discount}%)`;
    el("priceSavings").textContent = `−${savings.toLocaleString("en-US")} AMD`;
    el("finalPrice").textContent = `${finalPrice.toLocaleString("en-US")} AMD`;

    el("levelDiscountList").innerHTML = LEVELS.map((item, i) => `
        <div class="level-discount-row ${i === index ? "current" : ""}">
            <span>${item.emoji} ${item.name}${i === index ? " · Current" : ""}</span>
            <strong>${item.discount}% off</strong>
        </div>
    `).join("");

    return {
        discountPercent: level.discount,
        savings,
        finalPrice,
        levelName: level.name
    };
}

function addXp(amount) {
    const before = getLevelIndex(xp);

    xp = Math.max(0, xp + amount);
    writeStorage(KEYS.xp, xp);
    updateXpPill();

    const after = getLevelIndex(xp);
    return after > before ? LEVELS[after] : null;
}

/* =========================================================
   SMALL UI HELPERS
========================================================= */

function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;

    el("toastRoot").appendChild(toast);

    setTimeout(() => {
        toast.classList.add("leaving");
        setTimeout(() => toast.remove(), 300);
    }, 2800);
}

function animateNumber(element, target) {
    const start = Number(element.textContent) || 0;

    if (start === target || reduceMotion.matches) {
        element.textContent = target;
        return;
    }

    const duration = 600;
    const startTime = performance.now();

    function frame(now) {
        const t = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);

        element.textContent = Math.round(start + (target - start) * eased);

        if (t < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
}

function syncScrollLock() {
    const anyOpen = document.querySelector(".modal-overlay.show");
    document.body.classList.toggle("modal-open", Boolean(anyOpen));
}

/* ---------- confetti ---------- */

const confettiCanvas = el("confetti");
const confettiCtx = confettiCanvas.getContext("2d");

let confettiPieces = [];
let confettiRunning = false;

function launchConfetti() {
    if (reduceMotion.matches) return;

    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    const colors = ["#a855f7", "#22d3ee", "#a3e635", "#f472b6", "#fb923c", "#ffffff"];

    for (let i = 0; i < 150; i++) {
        confettiPieces.push({
            x: window.innerWidth / 2 + (Math.random() - 0.5) * 240,
            y: window.innerHeight * 0.45,
            vx: (Math.random() - 0.5) * 18,
            vy: Math.random() * -17 - 4,
            size: 6 + Math.random() * 7,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            spin: (Math.random() - 0.5) * 14,
            life: 0
        });
    }

    if (!confettiRunning) {
        confettiRunning = true;
        requestAnimationFrame(confettiFrame);
    }
}

function confettiFrame() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    confettiPieces = confettiPieces.filter(
        piece => piece.y < confettiCanvas.height + 40 && piece.life < 260
    );

    confettiPieces.forEach(piece => {
        piece.vy += 0.4;
        piece.vx *= 0.99;
        piece.x += piece.vx;
        piece.y += piece.vy;
        piece.rotation += piece.spin;
        piece.life++;

        confettiCtx.save();
        confettiCtx.translate(piece.x, piece.y);
        confettiCtx.rotate((piece.rotation * Math.PI) / 180);
        confettiCtx.fillStyle = piece.color;
        confettiCtx.fillRect(-piece.size / 2, -piece.size / 4, piece.size, piece.size / 2);
        confettiCtx.restore();
    });

    if (confettiPieces.length > 0) {
        requestAnimationFrame(confettiFrame);
    } else {
        confettiRunning = false;
        confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
}

/* =========================================================
   BOOK GRID
========================================================= */

/* ---------- reliable book cover system ---------- */

/* default=false makes Open Library return an error (instead of a blank
   1x1 picture) when it has no cover, so we know to try the next source */
function getCover(book) {
    return `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg?default=false`;
}

/* covers that were found through a fallback source are remembered in this browser,
   so the next visit does not need to search for them again */
const COVER_CACHE_KEY = "bookhouseCovers";
let savedCovers = readStorage(COVER_CACHE_KEY, {});

if (!savedCovers || typeof savedCovers !== "object" || Array.isArray(savedCovers)) savedCovers = {};

function rememberCover(id, url) {
    savedCovers[id] = url;
    writeStorage(COVER_CACHE_KEY, savedCovers);
}

function forgetCover(id) {
    delete savedCovers[id];
    writeStorage(COVER_CACHE_KEY, savedCovers);
}

/* loads a picture off-screen to find out if it is a real cover */
function probeImage(url) {
    return new Promise(resolve => {
        const probe = new Image();

        const timer = setTimeout(() => {
            probe.onload = probe.onerror = null;
            resolve(false);
        }, 10000);

        probe.onload = () => {
            clearTimeout(timer);
            resolve(probe.naturalWidth >= 40 && probe.naturalHeight >= 60);
        };

        probe.onerror = () => {
            clearTimeout(timer);
            resolve(false);
        };

        probe.src = url;
    });
}

async function fetchJson(url) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);

    try {
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
            console.warn("Cover lookup failed (" + response.status + "):", url);
            return null;
        }

        return await response.json();
    } catch (error) {
        console.warn("Cover lookup error:", url);
        return null;
    } finally {
        clearTimeout(timer);
    }
}

const normalizeText = text => String(text || "").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();

function searchTitle(book) {
    return book.title.replace(/[:\-–—]+/g, " ").replace(/\s+/g, " ").trim();
}

/* "Re:Zero - Starting Life..." is matched on "re zero", so different editions still match */
function titleMatches(book, candidateTitle) {
    return normalizeText(candidateTitle).includes(normalizeText(book.title.split(/[:\-–—]/)[0]));
}

async function openLibraryCovers(book, withAuthor) {
    let url =
        "https://openlibrary.org/search.json?limit=10&fields=title,author_name,cover_i" +
        "&title=" + encodeURIComponent(searchTitle(book));

    if (withAuthor) url += "&author=" + encodeURIComponent(book.author);

    const data = await fetchJson(url);

    return ((data && data.docs) || [])
        .filter(doc => doc.cover_i && titleMatches(book, doc.title))
        .map(doc => `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg?default=false`)
        .slice(0, 4);
}

async function googleCovers(book, mode) {
    const query =
        mode === "isbn" ? `isbn:${book.isbn}`
        : mode === "title" ? searchTitle(book)
        : `${searchTitle(book)} ${book.author}`;

    const data = await fetchJson(
        "https://www.googleapis.com/books/v1/volumes?maxResults=10&printType=books&q=" +
        encodeURIComponent(query)
    );

    const urls = [];

    for (const item of (data && data.items) || []) {
        const info = item.volumeInfo || {};
        const images = info.imageLinks;

        if (!images) continue;
        if (mode !== "isbn" && !titleMatches(book, info.title)) continue;

        const link =
            images.extraLarge ||
            images.large ||
            images.medium ||
            images.thumbnail ||
            images.smallThumbnail;

        if (!link) continue;

        const clean = link.replace(/^http:/, "https:").replace("&edge=curl", "");

        urls.push(clean.replace("zoom=1", "zoom=2"), clean);
    }

    return [...new Set(urls)].slice(0, 4);
}

/* only a few searches at a time, so the free APIs never get flooded */
let activeLookups = 0;
const lookupQueue = [];

function runLookup(task) {
    return new Promise(resolve => {
        const run = async () => {
            activeLookups++;

            try {
                resolve(await task());
            } catch (error) {
                resolve([]);
            } finally {
                activeLookups--;
                const next = lookupQueue.shift();
                if (next) next();
            }
        };

        if (activeLookups < 3) run();
        else lookupQueue.push(run);
    });
}

const coverPromises = new Map();

/* finds the first working cover picture, or null if every source fails */
function resolveCover(book) {
    if (!coverPromises.has(book.id)) {
        coverPromises.set(book.id, (async () => {
            const saved = savedCovers[book.id];

            if (saved) {
                if (await probeImage(saved)) return saved;
                forgetCover(book.id);
            }

            const direct = getCover(book);
            if (await probeImage(direct)) return direct;

            const sources = [
                () => openLibraryCovers(book, true),
                () => googleCovers(book, "isbn"),
                () => googleCovers(book, "title+author"),
                () => openLibraryCovers(book, false),
                () => googleCovers(book, "title")
            ];

            for (const source of sources) {
                const urls = await runLookup(source);

                for (const url of urls) {
                    if (await probeImage(url)) {
                        rememberCover(book.id, url);
                        return url;
                    }
                }
            }

            return null;
        })());
    }

    return coverPromises.get(book.id);
}

function removeFallbackCover(image) {
    const old = image.parentElement.querySelector(".book-cover-fallback");
    if (old) old.remove();
}

function createFallbackCover(image, book) {
    image.style.display = "none";
    removeFallbackCover(image);

    const fallback = document.createElement("div");
    fallback.className = "book-cover-fallback";

    const label = document.createElement("span");
    label.className = "fallback-label";
    label.textContent = "BOOKHOUSE COLLECTION";

    const title = document.createElement("strong");
    title.className = "fallback-title";
    title.textContent = book.title;

    const author = document.createElement("span");
    author.className = "fallback-author";
    author.textContent = book.author;

    fallback.append(label, title, author);
    image.parentElement.appendChild(fallback);
}

async function loadBookCover(image, book) {
    /* reset anything left over from the previous book (the popup reuses one <img>) */
    removeFallbackCover(image);
    image.removeAttribute("src");
    image.style.display = "none";

    const token = book.id + "-" + Math.random();
    image.dataset.coverToken = token;

    const url = await resolveCover(book);

    /* ignore late results if the image has since moved on to another book */
    if (image.dataset.coverToken !== token) return;

    if (!url) {
        createFallbackCover(image, book);
        return;
    }

    image.onerror = () => {
        if (image.dataset.coverToken === token) createFallbackCover(image, book);
    };

    image.style.display = "block";
    image.src = url;
}

/* book cards only start looking for their cover when they are about to be seen */
const coverObserver = "IntersectionObserver" in window
    ? new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            coverObserver.unobserve(entry.target);

            const book = books.find(b => b.id === Number(entry.target.dataset.bookId));
            if (book) loadBookCover(entry.target, book);
        });
    }, { rootMargin: "400px" })
    : null;

function displayBooks(animate = true) {
    const grid = el("bookGrid");
    const search = el("searchInput").value.toLowerCase().trim();

    if (coverObserver) coverObserver.disconnect();

    grid.innerHTML = "";

    const filteredBooks = books.filter(book => {
        const matchesSearch =
            book.title.toLowerCase().includes(search) ||
            book.author.toLowerCase().includes(search);

        const matchesCategory =
            selectedCategory === "All" ||
            book.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    filteredBooks.forEach((book, index) => {
        const borrowedNow = isBorrowed(book.id);
        const loan = loans[book.id];
        const soldOut = !borrowedNow && !hasStock(book.id);
        const stockInfo = stockLabel(book.id);

        const card = document.createElement("div");
        card.className = "book-card" + (animate ? " pop" : "");
        card.style.setProperty("--i", Math.min(index, 12));
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `${book.title} by ${book.author}`);

        card.innerHTML = `
            <div class="book-cover">
                <span class="status ${borrowedNow || soldOut ? "out" : "in"}">
                    ${borrowedNow ? "Borrowed" : soldOut ? "Out of stock" : "Available"}
                </span>
                <img
                    alt="${book.title} book cover"
                    loading="lazy"
                >
            </div>
            <div class="book-info">
                <h3>${book.title}</h3>
                <p class="author">By ${book.author}</p>
                <p class="book-category">${book.category}</p>
                <p class="stock-info ${stockInfo.level}">📦 ${stockInfo.text}</p>
                ${borrowedNow ? `<p class="due">⏰ Due ${formatDate(loan.dueDate)}</p>` : ""}
                <button class="borrow-btn ${borrowedNow ? "return" : ""}" ${soldOut ? "disabled" : ""}>
                    ${borrowedNow ? "Return Book" : soldOut ? "Out of stock" : "Borrow Book"}
                </button>
            </div>
        `;

        card.addEventListener("click", () => {
            openBookDetails(book.id);
        });

        card.addEventListener("keydown", event => {
            if (event.key === "Enter" && event.target === card) {
                openBookDetails(book.id);
            }
        });

        card.querySelector(".borrow-btn").addEventListener("click", event => {
            event.stopPropagation();

            if (isBorrowed(book.id)) {
                returnBook(book.id);
            } else {
                openBorrow(book.id);
            }
        });

        const coverImage = card.querySelector("img");
        coverImage.dataset.bookId = book.id;

        if (coverObserver) coverObserver.observe(coverImage);
        else loadBookCover(coverImage, book);

        grid.appendChild(card);
    });

    el("emptyMessage").style.display =
        filteredBooks.length === 0 ? "block" : "none";

    updateStats();
}

function updateStats() {
    animateNumber(el("totalBooks"), books.length);
    animateNumber(el("borrowedBooks"), borrowedCount());
    animateNumber(
        el("availableBooks"),
        books.filter(book => !isBorrowed(book.id) && hasStock(book.id)).length
    );
}

/* =========================================================
   BOOK DETAILS POPUP
========================================================= */

function openBookDetails(id) {
    selectedBook = books.find(book => book.id === id);
    if (!selectedBook) return;

    const modalImage = el("modalImage");

    el("modalTitle").textContent = selectedBook.title;
    el("modalAuthor").textContent = "By " + selectedBook.author;
    el("modalCategory").textContent = selectedBook.category;
    el("modalDescription").textContent = selectedBook.description;

    modalImage.alt = selectedBook.title + " book cover";
    loadBookCover(modalImage, selectedBook);

    updateModalButton();

    bookModal.classList.add("show");
    syncScrollLock();
}

function closeBookDetails() {
    bookModal.classList.remove("show");
    selectedBook = null;
    syncScrollLock();
}

function updateModalButton() {
    if (!selectedBook) return;

    const button = el("modalBorrow");
    const borrowedNow = isBorrowed(selectedBook.id);

    const soldOut = !borrowedNow && !hasStock(selectedBook.id);
    const stockInfo = stockLabel(selectedBook.id);

    button.textContent = borrowedNow ? "Return Book" : soldOut ? "Out of stock" : "Borrow Book";
    button.disabled = soldOut;
    button.classList.toggle("return", borrowedNow);

    const modalStock = el("modalStock");
    modalStock.textContent = `📦 ${stockInfo.text}`;
    modalStock.className = `modal-stock ${stockInfo.level}`;
}

/* =========================================================
   RETURN A BOOK
========================================================= */

function returnBook(id) {
    const loan = loans[id];
    const book = books.find(b => b.id === id);

    if (!loan || !book) return;

    const onTime = Date.now() <= (
        Number(loan.dueAt) ||
        new Date(loan.dueDate + "T23:59:59").getTime()
    );

    delete loans[id];
    writeStorage(KEYS.loans, loans);
    changeStock(id, 1);

    let message = `📚 "${book.title}" returned. Thanks!`;

    if (onTime) {
        const levelUp = addXp(XP_RETURN);
        message = `✅ Returned on time! +${XP_RETURN} XP`;

        if (levelUp) {
            message += ` · Level up: ${levelUp.name} ${levelUp.emoji}`;
            launchConfetti();
        }
    } else {
        const previousLevel = getLevelIndex(xp);

        addXp(-LATE_RETURN_PENALTY);

        message = `⏰ Late return: -${LATE_RETURN_PENALTY} XP`;

        if (getLevelIndex(xp) < previousLevel) {
            message += " · Your level decreased";
        }
    }

    showToast(message);
    displayBooks(false);
    updateModalButton();
}

/* =========================================================
   BORROW WIZARD (5 small steps)
========================================================= */

function setReturnDays(days) {
    selectedDueAt = null;
    fieldDate.value = toISO(addDays(new Date(), days));
    syncChips();
}

function setReturnSeconds(seconds) {
    selectedDueAt = -seconds;
    fieldDate.value = toISO(new Date());
    syncChips();
}

function syncChips() {
    chips.forEach(chip => {
        const isTestChoice = chip.dataset.seconds && selectedDueAt !== null;

        const target = chip.dataset.days
            ? toISO(addDays(new Date(), Number(chip.dataset.days)))
            : null;

        chip.classList.toggle(
            "active",
            Boolean(isTestChoice || (!selectedDueAt && target && fieldDate.value === target))
        );
    });
}

function clearErrors() {
    steps.forEach(step => {
        step.querySelector(".field-error").textContent = "";

        const input = step.querySelector(".field");

        input.removeAttribute("aria-invalid");
        input.classList.remove("shake");
    });
}

function showStep(n) {
    wizardStep = n;

    steps.forEach(step => {
        step.classList.toggle("active", Number(step.dataset.step) === n);
    });

    el("progressBar").style.width = (n / TOTAL_STEPS) * 100 + "%";
    el("stepLabel").textContent = `Step ${n} of ${TOTAL_STEPS}`;
    el("backBtn").style.visibility = n === 1 ? "hidden" : "visible";
    el("nextBtn").textContent = n === TOTAL_STEPS ? "Borrow it! 🚀" : "Next →";

    const textInput = steps[n - 1].querySelector("input[type='text']");

    if (textInput) {
        setTimeout(() => textInput.focus({ preventScroll: true }), 60);
    }
}

function openBorrow(id) {
    const book = books.find(b => b.id === id);

    if (!book || isBorrowed(id)) return;

    if (!hasStock(id)) {
        showToast(`📭 "${book.title}" is out of stock right now`);
        return;
    }

    if (bookModal.classList.contains("show")) {
        closeBookDetails();
    }

    wizardBook = book;

    fieldName.value = String(profile.name || "").slice(0, 40);
    fieldId.value = String(profile.studentId || "").slice(0, 15);
    fieldContact.value = String(profile.contact || "").slice(0, 60);

    setReturnDays(7);

    fieldCardNumber.value = "4242 4242 4242 4242";
    fieldCardExpiry.value = "12/30";
    fieldCardCvv.value = "123";

    renderBorrowPrice();

    el("step2Title").textContent = "Your student ID?";
    el("wizardBookTitle").textContent = book.title;

    clearErrors();

    el("successScreen").hidden = true;
    el("wizardTop").hidden = false;
    borrowForm.hidden = false;

    borrowModal.classList.add("show");
    syncScrollLock();

    showStep(1);
}

function closeBorrow() {
    borrowModal.classList.remove("show");
    wizardBook = null;
    syncScrollLock();
}

function validateStep(n) {
    if (n === 1) {
        const value = fieldName.value.trim();

        if (!/^\p{L}[\p{L}\s.'-]{1,39}$/u.test(value)) {
            return {
                input: fieldName,
                message: "Tell us your name (at least 2 letters) 🙂"
            };
        }
    }

    if (n === 2) {
        const value = fieldId.value.trim();

        if (!/^[A-Za-z0-9-]{3,15}$/.test(value)) {
            return {
                input: fieldId,
                message: "3 to 15 letters or numbers, no spaces 🪪"
            };
        }
    }

    if (n === 3) {
        const value = fieldContact.value.trim();

        const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

        const looksLikePhone =
            /^\+?[\d\s()-]{7,20}$/.test(value) &&
            value.replace(/\D/g, "").length >= 7;

        if (!looksLikeEmail && !looksLikePhone) {
            return {
                input: fieldContact,
                message: "Enter a valid email or phone number 📬"
            };
        }
    }

    if (n === 4 && selectedDueAt === null) {
        const value = fieldDate.value;
        const tomorrow = toISO(addDays(new Date(), 1));
        const latest = toISO(addDays(new Date(), MAX_LOAN_DAYS));

        if (!ISO_PATTERN.test(value) || value < tomorrow || value > latest) {
            return {
                input: fieldDate,
                message: `Pick a date within the next ${MAX_LOAN_DAYS} days, or choose the 1-second test option 📅`
            };
        }
    }

    if (n === 5) {
        const number = fieldCardNumber.value.replace(/\s/g, "");

        if (number !== DEMO_CARD_NUMBER) {
            return {
                input: fieldCardNumber,
                message: "Use the demo number shown above. Real card details are not accepted."
            };
        }

        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(fieldCardExpiry.value.trim())) {
            return {
                input: fieldCardExpiry,
                message: "Use the demo expiry format MM/YY."
            };
        }

        if (!/^\d{3}$/.test(fieldCardCvv.value.trim())) {
            return {
                input: fieldCardCvv,
                message: "Enter the 3-digit demo CVV."
            };
        }
    }

    return null;
}

function showFieldError(problem) {
    const errorLine = problem.input.closest(".step").querySelector(".field-error");

    errorLine.textContent = problem.message;

    problem.input.setAttribute("aria-invalid", "true");
    problem.input.classList.remove("shake");

    void problem.input.offsetWidth;

    problem.input.classList.add("shake");

    if (problem.input.type === "text") {
        problem.input.focus({ preventScroll: true });
    }
}

function finishBorrow() {
    const book = wizardBook;

    if (!book || isBorrowed(book.id)) return;

    if (!hasStock(book.id)) {
        showToast(`📭 "${book.title}" is out of stock right now`);
        closeBorrow();
        displayBooks(false);
        return;
    }

    const price = renderBorrowPrice();

    const loan = {
        name: fieldName.value.trim(),
        studentId: fieldId.value.trim(),
        contact: fieldContact.value.trim(),
        borrowedAt: toISO(new Date()),

        dueDate: selectedDueAt !== null
            ? toISO(new Date(
                selectedDueAt < 0
                    ? Date.now() + Math.abs(selectedDueAt) * 1000
                    : selectedDueAt
            ))
            : fieldDate.value,

        dueAt: selectedDueAt !== null
            ? (
                selectedDueAt < 0
                    ? Date.now() + Math.abs(selectedDueAt) * 1000
                    : selectedDueAt
            )
            : new Date(fieldDate.value + "T23:59:59").getTime(),

        discountPercent: price.discountPercent,
        basePrice: BASE_BORROW_PRICE,
        amountSaved: price.savings,
        finalPrice: price.finalPrice,
        membershipLevel: price.levelName
    };

    loans[book.id] = loan;
    writeStorage(KEYS.loans, loans);
    changeStock(book.id, -1);

    profile = {
        name: loan.name,
        studentId: loan.studentId,
        contact: loan.contact
    };

    writeStorage(KEYS.profile, profile);

    const levelUp = addXp(XP_BORROW);

    displayBooks(false);
    showSuccess(book, loan, levelUp);
    launchConfetti();
}

function showSuccess(book, loan, levelUp) {
    el("wizardTop").hidden = true;
    borrowForm.hidden = true;

    el("successBook").textContent =
        `"${book.title}" is yours, ${loan.name.split(/\s+/)[0]}!`;

    const dueLabel = selectedDueAt !== null
        ? new Date(loan.dueAt).toLocaleString()
        : formatDate(loan.dueDate);

    el("successDue").textContent = `Bring it back by ${dueLabel} 📅`;
    el("successXp").textContent = `+${XP_BORROW} XP ⚡`;

    el("successDiscount").textContent =
        `${loan.membershipLevel || "Your level"} discount: ${loan.discountPercent}%`;

    el("successPrice").textContent =
        `Base: ${(loan.basePrice || BASE_BORROW_PRICE).toLocaleString("en-US")} AMD · Saved: ${(loan.amountSaved || 0).toLocaleString("en-US")} AMD · Paid: ${(loan.finalPrice ?? BASE_BORROW_PRICE - Math.round(BASE_BORROW_PRICE * (loan.discountPercent || 0) / 100)).toLocaleString("en-US")} AMD`;

    const levelLine = el("successLevel");

    if (levelUp) {
        levelLine.textContent =
            `🎊 Level up! You're now a ${levelUp.name} ${levelUp.emoji}`;

        levelLine.hidden = false;
    } else {
        levelLine.hidden = true;
    }

    el("successScreen").hidden = false;
}

/* ---------- wizard events ---------- */

borrowForm.addEventListener("submit", event => {
    event.preventDefault();

    const problem = validateStep(wizardStep);

    if (problem) {
        showFieldError(problem);
        return;
    }

    if (wizardStep < TOTAL_STEPS) {
        if (wizardStep === 1) {
            const firstName = fieldName.value.trim().split(/\s+/)[0];
            el("step2Title").textContent = `Nice, ${firstName}! Student ID?`;
        }

        showStep(wizardStep + 1);
    } else {
        finishBorrow();
    }
});

borrowForm.addEventListener("input", event => {
    const input = event.target;

    if (!input.classList.contains("field")) return;

    input.removeAttribute("aria-invalid");
    input.closest(".step").querySelector(".field-error").textContent = "";

    if (input === fieldDate) {
        selectedDueAt = null;
        syncChips();
    }
});

chips.forEach(chip => {
    chip.addEventListener("click", () => {
        if (chip.dataset.seconds) {
            setReturnSeconds(Number(chip.dataset.seconds));
        } else {
            setReturnDays(Number(chip.dataset.days));
        }

        clearErrors();
    });
});

el("backBtn").addEventListener("click", () => {
    if (wizardStep > 1) showStep(wizardStep - 1);
});

el("closeBorrow").addEventListener("click", closeBorrow);
el("doneBtn").addEventListener("click", closeBorrow);

/* =========================================================
   OTHER EVENTS
========================================================= */

el("searchInput").addEventListener("input", () => displayBooks(true));

document.querySelectorAll(".category").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector(".category.active").classList.remove("active");

        button.classList.add("active");
        selectedCategory = button.dataset.category;

        displayBooks(true);
    });
});

document.querySelectorAll(".surprise-btn").forEach(button => {
    button.addEventListener("click", () => {
        const available = books.filter(book => !isBorrowed(book.id) && hasStock(book.id));

        if (available.length === 0) {
            showToast("😮 Every book is borrowed right now!");
            return;
        }

        const pick = available[Math.floor(Math.random() * available.length)];

        showToast("🎲 How about this one?");
        openBookDetails(pick.id);
    });
});

el("closeModal").addEventListener("click", closeBookDetails);

bookModal.addEventListener("click", event => {
    if (event.target === bookModal) {
        closeBookDetails();
    }
});

el("modalBorrow").addEventListener("click", () => {
    if (!selectedBook) return;

    const id = selectedBook.id;

    if (isBorrowed(id)) {
        returnBook(id);
    } else {
        openBorrow(id);
    }
});

const xpPillButton = document.querySelector(".xp-pill");

xpPillButton.addEventListener("click", openLevels);

xpPillButton.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLevels();
    }
});

el("closeLevels").addEventListener("click", closeLevels);

levelsModal.addEventListener("click", event => {
    if (event.target === levelsModal) {
        closeLevels();
    }
});

document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;

    if (levelsModal.classList.contains("show")) {
        closeLevels();
    } else if (borrowModal.classList.contains("show")) {
        closeBorrow();
    } else if (bookModal.classList.contains("show")) {
        closeBookDetails();
    }
});

/* =========================================================
   START
========================================================= */

fieldDate.min = toISO(addDays(new Date(), 1));
fieldDate.max = toISO(addDays(new Date(), MAX_LOAN_DAYS));

updateXpPill();
displayBooks(true);
