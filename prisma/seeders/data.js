const EVENTS = [
  {
    id: 1,
    name: 'DJ Practice Session',
    slug: 'dj-practice-session',
    city: 'Austin',
    location: '720 Congress Ave, Austin, TX 78701', // ACL Live at The Moody Theater
    startDateTime: '2025-10-12T13:30:00.000Z',
    endDateTime: '2025-11-12T19:00:00.000Z',
    organizerName: 'DJ Inc.',
    imageUrl:
      'https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100',
    description:
      "Join us for an immersive DJ practice session at the DJ Beats Workshop! Whether you're a beginner aspiring to spin the decks or an experienced DJ looking to refine your skills, this event is tailored just for you. Dive into the world of beats, mixes, and electronic rhythms under the guidance of seasoned DJs and music producers. Showcase your skills during our open decks session. Share your favorite tracks, experiment with live remixing, and receive applause and feedback from a supportive audience.",
  },
  {
    id: 2,
    name: 'Harmony Festival',
    slug: 'harmony-festival',
    city: 'Austin',
    location: '500 E Cesar Chavez St, Austin, TX 78701', // Austin Convention Center
    startDateTime: '2025-07-11T08:00:00.000Z',
    endDateTime: '2025-09-16T16:30:00.000Z',
    organizerName: 'Music Enthusiasts LLC',
    imageUrl:
      'https://images.pexels.com/photos/3801118/pexels-photo-3801118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Harmony Festival is a celebration of all music genres, bringing together musicians, artists, and music enthusiasts from around the world. Experience a day filled with live performances, interactive workshops, and a vibrant atmosphere of creativity and harmony. Join us for an unforgettable musical journey!',
  },
  {
    id: 3,
    name: '3D Animation Workshop',
    slug: '3d-animation-workshop',
    city: 'Austin',
    location: '701 W Riverside Dr, Austin, TX 78704', // Austin Central Library
    startDateTime: '2025-06-08T10:00:00.000Z', // 10:00 AM CDT
    endDateTime: '2025-12-08T17:00:00.000Z', // 4:00 PM CDT
    organizerName: '3D Animators Inc.',
    imageUrl:
      'https://images.pexels.com/photos/19987744/pexels-photo-19987744/free-photo-of-black-device-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      "Dive into the captivating world of 3D animation at our exclusive 3D Animation Masterclass! Whether you're an aspiring animator, a student studying animation, or a professional looking to enhance your skills, this workshop offers a unique opportunity to learn from industry experts and elevate your animation prowess.",
  },
  {
    id: 4,
    name: 'Rock the City Concert',
    slug: 'rock-the-city-concert',
    city: 'Austin',
    location: '310 Willie Nelson Blvd, Austin, TX 78701', // Austin City Limits Live
    startDateTime: '2025-08-18T16:00:00.000Z',
    endDateTime: '2025-09-19T23:00:00.000Z',
    organizerName: 'Rock On Productions',
    imageUrl:
      'https://images.pexels.com/photos/6270262/pexels-photo-6270262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Get ready to rock out at Rock the City Concert! Experience electrifying performances by top rock bands, enjoy high-energy music, and immerse yourself in an unforgettable night of pure rock and roll.',
  },
  {
    id: 5,
    name: 'Artisan Craft Fair',
    slug: 'artisan-craft-fair',
    city: 'Seattle',
    location: '705 Pike St, Seattle, WA 98101', // Washington State Convention Center
    startDateTime: '2025-09-01T09:00:00.000Z',
    endDateTime: '2025-09-07T17:00:00.000Z',
    organizerName: 'Craftsmanship Guild',
    imageUrl:
      'https://images.pexels.com/photos/17836853/pexels-photo-17836853/free-photo-of-wicker-baskets-on-a-stall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Discover unique handmade crafts and artworks at the Artisan Craft Fair. Meet talented artisans, shop for one-of-a-kind items, and support local craftsmanship. Join us for a day of creativity and craftsmanship.',
  },
  {
    id: 6,
    name: 'Jazz Fusion Night',
    slug: 'jazz-fusion-night',
    city: 'Austin',
    location: '617 Red River St, Austin, TX 78701', // Stubb's BBQ (music venue)
    startDateTime: '2025-10-09T17:30:00.000Z',
    endDateTime: '2025-11-30T22:00:00.000Z',
    organizerName: 'Groove Masters Productions',
    imageUrl:
      'https://images.pexels.com/photos/9419232/pexels-photo-9419232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Indulge in the smooth melodies and rhythmic beats of jazz fusion at Jazz Fusion Night. Experience world-class jazz performances, savor delicious cocktails, and immerse yourself in the soulful ambiance of live jazz music.',
  },
  {
    id: 7,
    name: 'Indie Music Showcase',
    slug: 'indie-music-showcase',
    city: 'Austin',
    location: '2015 E Riverside Dr, Austin, TX 78741', // The Far Out Lounge
    startDateTime: '2025-11-25T16:00:00.000Z',
    endDateTime: '2025-11-30T21:00:00.000Z',
    organizerName: 'Indie Vibes Records',
    imageUrl:
      'https://images.pexels.com/photos/11372430/pexels-photo-11372430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Discover the next big indie artists at the Indie Music Showcase. Experience live performances by emerging talents, support independent music, and be part of a vibrant community of music enthusiasts and artists.',
  },
  {
    id: 8,
    name: 'Global Food Festival',
    slug: 'global-food-festival',
    city: 'Seattle',
    location: '1301 Alaskan Way, Seattle, WA 98101', // Pier 57 (Miners Landing)
    startDateTime: '2025-09-30T10:00:00.000Z',
    endDateTime: '2025-10-21T16:00:00.000Z',
    organizerName: 'Foodie Ventures Inc.',
    imageUrl:
      'https://images.pexels.com/photos/18488304/pexels-photo-18488304/free-photo-of-panjiri.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Embark on a culinary journey around the world at the Global Food Festival. Delight your taste buds with international cuisines, cooking demonstrations, and food tastings. Experience the flavors of different cultures in one delicious event.',
  },
  {
    id: 9,
    name: 'Tech Innovators Summit',
    slug: 'tech-innovators-summit',
    city: 'Seattle',
    location: '800 Convention Pl, Seattle, WA 98101', // Seattle Convention Center
    startDateTime: '2025-08-15T08:00:00.000Z',
    endDateTime: '2025-08-30T17:00:00.000Z',
    organizerName: 'InnovateTech Inc.',
    imageUrl:
      'https://images.pexels.com/photos/9001341/pexels-photo-9001341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'The Tech Innovators Summit is where visionaries, entrepreneurs, and tech enthusiasts converge. Explore the latest technological advancements, attend insightful keynotes from industry leaders, and participate in hands-on workshops. Connect with innovators, pitch your ideas, and be a part of shaping the future of technology.',
  },
  {
    id: 10,
    name: 'Enchanted Garden Gala',
    slug: 'enchanted-garden-gala',
    city: 'Austin',
    location: '823 Congress Ave, Austin, TX 78701', // The Contemporary Austin - Jones Center
    startDateTime: '2025-12-02T17:15:00.000Z',
    endDateTime: '2025-12-03T22:00:00.000Z',
    organizerName: 'Cultural Garden Society',
    imageUrl:
      'https://images.pexels.com/photos/6779235/pexels-photo-6779235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Step into a world of wonder at the Enchanted Garden Gala, a magical evening of art, music, and fantasy. Explore enchanting garden installations, experience live performances by world-class musicians and dancers, and indulge in gourmet delicacies. Dress in your most glamorous attire and immerse yourself in a night of elegance and enchantment.',
  },
  {
    id: 11,
    name: 'Comedy Extravaganza',
    slug: 'comedy-extravaganza',
    city: 'Austin',
    location: '213 W 5th St, Austin, TX 78701', // Esther's Follies
    startDateTime: '2025-09-06T17:30:00.000Z',
    endDateTime: '2025-10-07T20:00:00.000Z',
    organizerName: 'Laugh Productions',
    imageUrl:
      'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Prepare for a night of laughter with top comedians from around the world. Enjoy stand-up, improv, and sketches that will have you in stitches!',
  },
  {
    id: 12,
    name: 'Science and Space Expo',
    slug: 'science-space-expo',
    city: 'Seattle',
    location: '400 Broad St, Seattle, WA 98109', // Pacific Science Center
    startDateTime: '2025-10-29T09:00:00.000Z',
    endDateTime: '2025-11-02T16:00:00.000Z',
    organizerName: 'Cosmic Explorers Society',
    imageUrl:
      'https://images.pexels.com/photos/32400899/pexels-photo-32400899/free-photo-of-spectacular-view-of-the-milky-way-galaxy.jpeg',
    description:
      'Explore the wonders of science and space at this interactive expo. Engage in hands-on experiments, meet scientists, and learn about the mysteries of the universe.',
  },
  {
    id: 13,
    name: 'Fashion Runway',
    slug: 'fashion-runway',
    city: 'Austin',
    location: '6406 N I-35 #3100, Austin, TX 78752', // The Domain (North Austin)
    startDateTime: '2025-11-12T15:00:00.000Z',
    endDateTime: '2025-11-13T20:00:00.000Z',
    organizerName: 'Chic Trends Agency',
    imageUrl:
      'https://images.pexels.com/photos/7202906/pexels-photo-7202906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Witness the latest trends on the runway. Top designers will showcase their collections, setting the stage for the future of fashion.',
  },
  {
    id: 14,
    name: 'Culinary Masterclass',
    slug: 'culinary-masterclass',
    city: 'Seattle',
    location: '2000 4th Ave, Seattle, WA 98121', // Hot Stove Society
    startDateTime: '2025-12-02T10:00:00.000Z',
    endDateTime: '2025-12-14T15:00:00.000Z',
    organizerName: 'Gourmet Chefs Society',
    imageUrl:
      'https://images.pexels.com/photos/29683253/pexels-photo-29683253/free-photo-of-elegant-pastry-display-with-gourmet-desserts.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Join renowned chefs for a culinary journey. Learn cooking techniques, taste exquisite dishes, and elevate your skills in the art of gastronomy.',
  },
  {
    id: 15,
    name: 'Film Buffs Symposium',
    slug: 'film-buffs-symposium',
    city: 'Austin',
    location: '6259 Middle Fiskville Rd, Austin, TX 78752', // Austin Studios
    startDateTime: '2025-11-08T11:00:00.000Z',
    endDateTime: '2025-11-15T19:00:00.000Z',
    organizerName: 'Cinema Society',
    imageUrl:
      'https://images.pexels.com/photos/30916053/pexels-photo-30916053/free-photo-of-empty-movie-theater-seats-with-popcorn-bucket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'A gathering for film enthusiasts! Screen classic movies, engage in discussions with filmmakers, and gain insights into the world of cinema.',
  },
  {
    id: 16,
    name: 'Literary Salon',
    slug: 'literary-salon',
    city: 'Seattle',
    location: '1000 4th Ave, Seattle, WA 98104', // Seattle Central Library
    startDateTime: '2025-10-02T11:00:00.000Z',
    endDateTime: '2025-10-29T15:00:00.000Z',
    organizerName: 'Words Society',
    imageUrl:
      'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Celebrate the written word at this literary gathering. Listen to readings by acclaimed authors, participate in book discussions, and embrace the magic of storytelling.',
  },
  {
    id: 17,
    name: 'Wellness Expo',
    slug: 'wellness-expo',
    city: 'Austin',
    location: '500 E Cesar Chavez St, Austin, TX 78701', // Austin Convention Center
    startDateTime: '2025-11-30T10:00:00.000Z',
    endDateTime: '2025-12-29T18:00:00.000Z',
    organizerName: 'Wellness Warriors Inc.',
    imageUrl:
      'https://images.pexels.com/photos/30431320/pexels-photo-30431320/free-photo-of-ginger-lemon-tea-with-fresh-ingredients.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Immerse yourself in the world of fitness and well-being. Attend fitness classes, learn about nutrition, and explore holistic approaches to health.',
  },
  {
    id: 18,
    name: 'Digital Art Symposium',
    slug: 'digital-art-symposium',
    city: 'Seattle',
    location: '325 5th Ave N, Seattle, WA 98109', // Seattle Art Museum
    startDateTime: '2025-09-01T10:00:00.000Z',
    endDateTime: '2025-09-16T16:00:00.000Z',
    organizerName: 'Tech Creatives Collective',
    imageUrl:
      'https://images.pexels.com/photos/19110325/pexels-photo-19110325/free-photo-of-abstract-pattern-with-spinning-light.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Discover the intersection of technology and art. Experience digital art installations, attend VR workshops, and meet digital artists pushing creative boundaries.',
  },
  {
    id: 19,
    name: 'Dance Fusion Festival',
    slug: 'dance-fusion-festival',
    city: 'Austin',
    location: '1500 Barton Springs Rd, Austin, TX 78704', // Zilker Park
    startDateTime: '2025-11-25T11:00:00.000Z',
    endDateTime: '2025-11-29T19:00:00.000Z',
    organizerName: 'Rhythm Revolution',
    imageUrl:
      'https://images.pexels.com/photos/13377486/pexels-photo-13377486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Experience a blend of dance styles from around the world. Participate in dance workshops, watch electrifying performances, and dance the night away.',
  },
  {
    id: 20,
    name: 'Urban Photography Workshop',
    slug: 'urban-photography-workshop',
    city: 'Chicago',
    location: '111 S Michigan Ave, Chicago, IL 60603', // Art Institute of Chicago
    startDateTime: '2025-04-15T13:00:00.000Z',
    endDateTime: '2025-04-15T18:00:00.000Z',
    organizerName: 'Lens Masters Collective',
    imageUrl:
      'https://images.pexels.com/photos/3856041/pexels-photo-3856041.jpeg',
    description:
      'Capture the essence of urban landscapes in this hands-on photography workshop. Learn composition techniques and editing skills from professional photographers.',
  },
  {
    id: 21,
    name: 'Vintage Car Exhibition',
    slug: 'vintage-car-exhibition',
    city: 'Detroit',
    location: '315 E Warren Ave, Detroit, MI 48201', // Detroit Historical Museum
    startDateTime: '2025-05-20T14:00:00.000Z',
    endDateTime: '2025-05-25T20:00:00.000Z',
    organizerName: 'Classic Auto Society',
    imageUrl:
      'https://images.pexels.com/photos/17169450/pexels-photo-17169450.jpeg',
    description:
      'Marvel at beautifully restored vintage automobiles from different eras. Meet collectors and learn about automotive history.',
  },
  {
    id: 22,
    name: 'Marine Biology Conference',
    slug: 'marine-biology-conference',
    city: 'San Diego',
    location: '2300 Expedition Way, San Diego, CA 92106', // Scripps Institution of Oceanography
    startDateTime: '2025-06-10T16:00:00.000Z',
    endDateTime: '2025-06-12T21:00:00.000Z',
    organizerName: 'Oceanic Research Foundation',
    imageUrl:
      'https://images.pexels.com/photos/17975649/pexels-photo-17975649.jpeg',
    description:
      'Explore the latest discoveries in marine science with leading researchers. Includes lab tours and underwater robotics demonstrations.',
  },
  {
    id: 23,
    name: 'Indie Game Developers Expo',
    slug: 'indie-game-developers-expo',
    city: 'San Francisco',
    location: '747 Howard St, San Francisco, CA 94103', // Yerba Buena Center for the Arts
    startDateTime: '2025-07-22T15:00:00.000Z',
    endDateTime: '2025-07-24T22:00:00.000Z',
    organizerName: 'Pixel Pioneers',
    imageUrl:
      'https://images.pexels.com/photos/19012063/pexels-photo-19012063.jpeg',
    description:
      'Playtest upcoming indie games and meet the creators behind them. Panel discussions on game design and industry trends.',
  },
  {
    id: 24,
    name: 'Sustainable Architecture Tour',
    slug: 'sustainable-architecture-tour',
    city: 'Portland',
    location: '2 SW Main St, Portland, OR 97204', // Portland Center for Architecture
    startDateTime: '2025-08-05T17:00:00.000Z',
    endDateTime: '2025-08-07T19:00:00.000Z',
    organizerName: 'Green Build Initiative',
    imageUrl:
      'https://images.pexels.com/photos/1850593/pexels-photo-1850593.jpeg',
    description:
      "Guided tours of Portland's most innovative sustainable buildings. Learn about eco-friendly design principles and materials.",
  },
  {
    id: 25,
    name: 'Aviation History Symposium',
    slug: 'aviation-history-symposium',
    city: 'Dayton',
    location: '1100 Spaatz St, Dayton, OH 45433', // National Museum of the U.S. Air Force
    startDateTime: '2025-09-18T13:00:00.000Z',
    endDateTime: '2025-09-20T17:00:00.000Z',
    organizerName: 'Wings of History',
    imageUrl:
      'https://images.pexels.com/photos/12236230/pexels-photo-12236230.jpeg',
    description:
      'Celebrate milestones in aviation with historians and pilots. Includes rare aircraft displays and flight simulations.',
  },
  {
    id: 26,
    name: 'Neon Art Installation',
    slug: 'neon-art-installation',
    city: 'Las Vegas',
    location: '1017 S Main St, Las Vegas, NV 89101', // The Neon Museum
    startDateTime: '2025-10-03T20:00:00.000Z',
    endDateTime: '2025-10-31T23:00:00.000Z',
    organizerName: 'Luminous Arts Collective',
    imageUrl:
      'https://images.pexels.com/photos/6419628/pexels-photo-6419628.jpeg',
    description:
      'Interactive neon light exhibits that transform after dark. Meet the artists behind these glowing masterpieces.',
  },
  {
    id: 27,
    name: 'Molecular Gastronomy Workshop',
    slug: 'molecular-gastronomy-workshop',
    city: 'New York',
    location: '11 Madison Ave, New York, NY 10010', // Institute of Culinary Education
    startDateTime: '2025-11-07T18:00:00.000Z',
    endDateTime: '2025-11-09T21:00:00.000Z',
    organizerName: 'Culinary Alchemists',
    imageUrl:
      'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
    description:
      'Transform ordinary ingredients into extraordinary dishes using scientific techniques. Hands-on cooking sessions with expert chefs.',
  },
  {
    id: 28,
    name: 'Antique Book Fair',
    slug: 'antique-book-fair',
    city: 'Boston',
    location: '700 Boylston St, Boston, MA 02116', // Boston Public Library
    startDateTime: '2025-12-01T10:00:00.000Z',
    endDateTime: '2025-12-03T18:00:00.000Z',
    organizerName: 'Literary Treasures Society',
    imageUrl:
      'https://images.pexels.com/photos/1926988/pexels-photo-1926988.jpeg',
    description:
      'Browse rare first editions and antique manuscripts. Appraisal services available from rare book experts.',
  },
  {
    id: 29,
    name: 'Winter Light Festival',
    slug: 'winter-light-festival',
    city: 'Denver',
    location: '2001 Colorado Blvd, Denver, CO 80205', // Denver Botanic Gardens
    startDateTime: '2026-01-15T22:00:00.000Z',
    endDateTime: '2026-01-31T23:00:00.000Z',
    organizerName: 'Luminary Arts',
    imageUrl:
      'https://images.pexels.com/photos/15273792/pexels-photo-15273792.jpeg',
    description:
      'Magical light installations transform the gardens into a winter wonderland. Hot cocoa and seasonal treats available.',
  },
  {
    id: 30,
    name: 'Robotics Competition',
    slug: 'robotics-competition',
    city: 'Pittsburgh',
    location: '1 Allegheny Ave, Pittsburgh, PA 15212', // Carnegie Science Center
    startDateTime: '2026-02-10T08:00:00.000Z',
    endDateTime: '2026-02-12T20:00:00.000Z',
    organizerName: 'Tech Innovators League',
    imageUrl:
      'https://images.pexels.com/photos/8566623/pexels-photo-8566623.jpeg',
    description:
      'Watch student-built robots complete complex challenges. Meet engineering mentors and try hands-on activities.',
  },
  {
    id: 30,
    name: 'Ice Sculpture Festival',
    slug: 'ice-sculpture-festival',
    city: 'Anchorage',
    location: '555 W 5th Ave, Anchorage, AK 99501', // Alaska Center for the Performing Arts
    startDateTime: '2026-01-10T17:00:00.000Z',
    endDateTime: '2026-01-20T22:00:00.000Z',
    organizerName: 'Arctic Artisans Guild',
    imageUrl:
      'https://images.pexels.com/photos/776389/pexels-photo-776389.jpeg',
    description:
      'Witness master sculptors transform blocks of ice into stunning artworks. Try ice carving in beginner workshops.',
  },
  {
    id: 31,
    name: 'AI Tech Summit',
    slug: 'ai-tech-summit',
    city: 'San Jose',
    location: '150 W San Carlos St, San Jose, CA 95113', // San Jose McEnery Convention Center
    startDateTime: '2025-09-05T16:00:00.000Z',
    endDateTime: '2025-09-07T20:00:00.000Z',
    organizerName: 'Silicon Valley AI Collective',
    imageUrl:
      'https://images.pexels.com/photos/17484901/pexels-photo-17484901.png',
    description:
      'Explore cutting-edge artificial intelligence applications with industry leaders. Hands-on coding sessions included.',
  },
  {
    id: 32,
    name: 'Historic Tea Ceremony',
    slug: 'historic-tea-ceremony',
    city: 'Charleston',
    location: '161 Church St, Charleston, SC 29401', // Charleston Museum
    startDateTime: '2025-04-22T15:00:00.000Z',
    endDateTime: '2025-04-22T18:00:00.000Z',
    organizerName: 'Southern Traditions Society',
    imageUrl:
      'https://images.pexels.com/photos/31199970/pexels-photo-31199970.jpeg',
    description:
      'Experience authentic 19th century tea service with period-accurate etiquette and recipes.',
  },
  {
    id: 33,
    name: 'Astronomy Night',
    slug: 'astronomy-night',
    city: 'Flagstaff',
    location: '1400 W Mars Hill Rd, Flagstaff, AZ 86001', // Lowell Observatory
    startDateTime: '2025-08-12T02:00:00.000Z',
    endDateTime: '2025-08-12T06:00:00.000Z',
    organizerName: 'Cosmic Wonders Foundation',
    imageUrl:
      'https://images.pexels.com/photos/28858796/pexels-photo-28858796.jpeg',
    description:
      'Peer through professional telescopes at planets and galaxies with astronomer guidance.',
  },
  {
    id: 34,
    name: 'Craft Beer Festival',
    slug: 'craft-beer-festival',
    city: 'Portland',
    location: '2 Naito Pkwy, Portland, OR 97209', // Tom McCall Waterfront Park
    startDateTime: '2025-07-18T17:00:00.000Z',
    endDateTime: '2025-07-20T22:00:00.000Z',
    organizerName: 'Hop Masters Alliance',
    imageUrl:
      'https://images.pexels.com/photos/15138579/pexels-photo-15138579.jpeg',
    description:
      'Sample hundreds of craft brews from Pacific Northwest breweries. Live music and food pairings.',
  },
  {
    id: 35,
    name: 'Medieval Faire',
    slug: 'medieval-faire',
    city: 'Bristol',
    location: '30 Memorial Blvd, Bristol, RI 02809', // Colt State Park
    startDateTime: '2025-06-05T13:00:00.000Z',
    endDateTime: '2025-06-08T20:00:00.000Z',
    organizerName: 'Kingdom of Historical Arts',
    imageUrl:
      'https://images.pexels.com/photos/334068/pexels-photo-334068.jpeg',
    description:
      'Jousting tournaments, artisan markets, and Renaissance performances transport you to the Middle Ages.',
  },
  {
    id: 36,
    name: 'Underground Music Showcase',
    slug: 'underground-music-showcase',
    city: 'Denver',
    location: '4401 W Colfax Ave, Denver, CO 80204', // Oriental Theater
    startDateTime: '2025-09-25T19:00:00.000Z',
    endDateTime: '2025-09-28T23:00:00.000Z',
    organizerName: 'Indie Sound Collective',
    imageUrl:
      'https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg',
    description:
      "Discover emerging artists across 20+ venues in Denver's vibrant music scene.",
  },
  {
    id: 37,
    name: 'Glassblowing Workshop',
    slug: 'glassblowing-workshop',
    city: 'Corning',
    location: '1 Museum Way, Corning, NY 14830', // Corning Museum of Glass
    startDateTime: '2025-05-15T14:00:00.000Z',
    endDateTime: '2025-05-17T18:00:00.000Z',
    organizerName: 'Flame Workers Guild',
    imageUrl:
      'https://images.pexels.com/photos/220990/pexels-photo-220990.jpeg',
    description:
      "Create your own glass artwork under master artisans' guidance. Includes museum access.",
  },
  {
    id: 38,
    name: 'Desert Botanical Tour',
    slug: 'desert-botanical-tour',
    city: 'Phoenix',
    location: '1201 N Galvin Pkwy, Phoenix, AZ 85008', // Desert Botanical Garden
    startDateTime: '2025-04-10T07:00:00.000Z',
    endDateTime: '2025-04-10T11:00:00.000Z',
    organizerName: 'Arid Flora Society',
    imageUrl:
      'https://images.pexels.com/photos/305827/pexels-photo-305827.jpeg',
    description:
      'Guided sunrise walk through rare cacti collections with expert horticulturists.',
  },
  {
    id: 39,
    name: 'Silent Film Festival',
    slug: 'silent-film-festival',
    city: 'Los Angeles',
    location: '6712 Hollywood Blvd, Los Angeles, CA 90028', // Egyptian Theatre
    startDateTime: '2025-11-08T18:00:00.000Z',
    endDateTime: '2025-11-12T22:00:00.000Z',
    organizerName: 'Cinema Heritage Foundation',
    imageUrl:
      'https://images.pexels.com/photos/7991182/pexels-photo-7991182.jpeg',
    description:
      'Classic silent films with live orchestral accompaniment. Costume contest and vintage photo booth.',
  },
  {
    id: 40,
    name: 'Hot Air Balloon Fiesta',
    slug: 'hot-air-balloon-fiesta',
    city: 'Albuquerque',
    location: '5000 Balloon Fiesta Pkwy, Albuquerque, NM 87113', // Balloon Fiesta Park
    startDateTime: '2025-10-04T12:00:00.000Z',
    endDateTime: '2025-10-13T22:00:00.000Z',
    organizerName: 'Sky Adventures Inc.',
    imageUrl:
      'https://images.pexels.com/photos/13568212/pexels-photo-13568212.jpeg',
    description:
      'Mass ascensions of colorful balloons with night glow shows and fireworks.',
  },
  {
    id: 41,
    name: 'Antique Clock Exhibition',
    slug: 'antique-clock-exhibition',
    city: 'Philadelphia',
    location: '526 Market St, Philadelphia, PA 19106', // National Liberty Museum
    startDateTime: '2025-03-15T10:00:00.000Z',
    endDateTime: '2025-03-30T17:00:00.000Z',
    organizerName: 'Horological Society',
    imageUrl:
      'https://images.pexels.com/photos/8327534/pexels-photo-8327534.jpeg',
    description:
      'Rare timepieces from the 16th-19th centuries with working demonstrations.',
  },
  {
    id: 42,
    name: 'Coastal Birdwatching',
    slug: 'coastal-birdwatching',
    city: 'Cape May',
    location: '701 E Lake Dr, Cape May, NJ 08204', // Cape May Bird Observatory
    startDateTime: '2025-05-08T06:00:00.000Z',
    endDateTime: '2025-05-10T10:00:00.000Z',
    organizerName: 'Avian Research Center',
    imageUrl:
      'https://images.pexels.com/photos/32924554/pexels-photo-32924554.jpeg',
    description:
      'Guided tours to spot migratory birds with expert ornithologists.',
  },
  {
    id: 43,
    name: 'Historic Ship Tours',
    slug: 'historic-ship-tours',
    city: 'Baltimore',
    location: '501 E Pratt St, Baltimore, MD 21202', // Inner Harbor
    startDateTime: '2025-06-20T09:00:00.000Z',
    endDateTime: '2025-06-22T18:00:00.000Z',
    organizerName: 'Maritime Heritage Foundation',
    imageUrl:
      'https://images.pexels.com/photos/9526851/pexels-photo-9526851.jpeg',
    description:
      'Board restored tall ships and submarines with costumed interpreters.',
  },
  {
    id: 44,
    name: 'Cajun Cooking Class',
    slug: 'cajun-cooking-class',
    city: 'New Orleans',
    location: '524 St Louis St, New Orleans, LA 70130', // New Orleans School of Cooking
    startDateTime: '2025-04-05T16:00:00.000Z',
    endDateTime: '2025-04-05T20:00:00.000Z',
    organizerName: 'Bayou Culinary Arts',
    imageUrl:
      'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg',
    description: 'Hands-on gumbo and jambalaya workshop with local chefs.',
  },
  {
    id: 45,
    name: 'Mural Arts Tour',
    slug: 'mural-arts-tour',
    city: 'Philadelphia',
    location: '1727-29 Mt Vernon St, Philadelphia, PA 19130', // Mural Arts Philadelphia
    startDateTime: '2025-09-12T11:00:00.000Z',
    endDateTime: '2025-09-14T16:00:00.000Z',
    organizerName: 'Urban Canvas Project',
    imageUrl:
      'https://images.pexels.com/photos/2891225/pexels-photo-2891225.jpeg',
    description:
      "Walking tours of the city's famous murals with the artists who created them.",
  },
  {
    id: 46,
    name: 'Lighthouse Festival',
    slug: 'lighthouse-festival',
    city: 'Portland',
    location: '12 Captain Strout Cir, Portland, ME 04101', // Portland Head Light
    startDateTime: '2025-08-07T10:00:00.000Z',
    endDateTime: '2025-08-10T20:00:00.000Z',
    organizerName: 'Coastal Beacons Society',
    imageUrl:
      'https://images.pexels.com/photos/32730065/pexels-photo-32730065.jpeg',
    description:
      'Tour historic lighthouses and learn about maritime navigation history.',
  },
  {
    id: 47,
    name: 'Renaissance Music Concert',
    slug: 'renaissance-music-concert',
    city: 'Boston',
    location: '280 The Fenway, Boston, MA 02115', // Isabella Stewart Gardner Museum
    startDateTime: '2025-11-14T19:30:00.000Z',
    endDateTime: '2025-11-14T22:00:00.000Z',
    organizerName: 'Early Music Ensemble',
    imageUrl:
      'https://images.pexels.com/photos/7521293/pexels-photo-7521293.jpeg',
    description:
      'Period instruments perform 15th-16th century compositions in historic courtyard.',
  },
  {
    id: 48,
    name: 'Geology Field Trip',
    slug: 'geology-field-trip',
    city: 'Moab',
    location: '2282 SW Resource Blvd, Moab, UT 84532', // Canyonlands Field Institute
    startDateTime: '2025-10-03T08:00:00.000Z',
    endDateTime: '2025-10-05T17:00:00.000Z',
    organizerName: 'Rock Science Adventures',
    imageUrl:
      'https://images.pexels.com/photos/7600061/pexels-photo-7600061.jpeg',
    description:
      'Hands-on examination of unique rock formations with professional geologists.',
  },
  {
    id: 49,
    name: 'Victorian Tea Party',
    slug: 'victorian-tea-party',
    city: 'Newport',
    location: '424 Bellevue Ave, Newport, RI 02840', // The Elms mansion
    startDateTime: '2025-05-30T15:00:00.000Z',
    endDateTime: '2025-05-30T18:00:00.000Z',
    organizerName: 'Gilded Age Society',
    imageUrl:
      'https://images.pexels.com/photos/8172874/pexels-photo-8172874.jpeg',
    description:
      'Afternoon tea in historic mansion with period etiquette lessons.',
  },
  {
    id: 50,
    name: 'Astrophotography Workshop',
    slug: 'astrophotography-workshop',
    city: 'Sedona',
    location: '525 Boynton Canyon Rd, Sedona, AZ 86336', // Sedona Rouge Hotel
    startDateTime: '2025-09-20T02:00:00.000Z',
    endDateTime: '2025-09-22T06:00:00.000Z',
    organizerName: 'Night Sky Photographers',
    imageUrl:
      'https://images.pexels.com/photos/32880873/pexels-photo-32880873.png',
    description:
      'Capture stunning Milky Way photos with professional guidance in dark sky country.',
  },
  {
    id: 51,
    name: 'Sushi Masterclass',
    slug: 'sushi-masterclass',
    city: 'Los Angeles',
    location: '123 Astronaut E S Onizuka St #205, Los Angeles, CA 90012', // Sushi Gen
    startDateTime: '2025-07-11T18:00:00.000Z',
    endDateTime: '2025-07-11T21:00:00.000Z',
    organizerName: 'Pacific Rim Culinary Arts',
    imageUrl:
      'https://images.pexels.com/photos/26161236/pexels-photo-26161236.jpeg',
    description:
      'Learn authentic sushi techniques from master chefs using premium ingredients.',
  },
  {
    id: 52,
    name: 'Historic Baseball Exhibition',
    slug: 'historic-baseball-exhibition',
    city: 'Cooperstown',
    location: '25 Main St, Cooperstown, NY 13326', // Baseball Hall of Fame
    startDateTime: '2025-06-14T09:00:00.000Z',
    endDateTime: '2025-06-16T18:00:00.000Z',
    organizerName: 'Diamond Legends Society',
    imageUrl:
      'https://images.pexels.com/photos/11950078/pexels-photo-11950078.jpeg',
    description:
      'Rare memorabilia and interactive exhibits celebrating baseball history.',
  },
  {
    id: 53,
    name: 'Fiber Arts Retreat',
    slug: 'fiber-arts-retreat',
    city: 'Asheville',
    location: '67 Haywood St, Asheville, NC 28801', // Southern Highland Craft Guild
    startDateTime: '2025-10-17T10:00:00.000Z',
    endDateTime: '2025-10-19T16:00:00.000Z',
    organizerName: 'Mountain Weavers Collective',
    imageUrl:
      'https://images.pexels.com/photos/4219652/pexels-photo-4219652.jpeg',
    description:
      'Workshops in weaving, knitting, and dyeing with natural materials.',
  },
  {
    id: 54,
    name: 'Viking Festival',
    slug: 'viking-festival',
    city: 'Duluth',
    location: '506 W Michigan St, Duluth, MN 55802', // Lake Superior Maritime Visitor Center
    startDateTime: '2025-08-08T11:00:00.000Z',
    endDateTime: '2025-08-10T20:00:00.000Z',
    organizerName: 'Nordic Heritage Alliance',
    imageUrl:
      'https://images.pexels.com/photos/10547071/pexels-photo-10547071.jpeg',
    description:
      'Longship displays, axe throwing, and traditional Norse crafts demonstrations.',
  },
  {
    id: 55,
    name: 'Tropical Butterfly Exhibit',
    slug: 'tropical-butterfly-exhibit',
    city: 'Miami',
    location: '1801 Old Cutler Rd, Coral Gables, FL 33156', // Fairchild Tropical Botanic Garden
    startDateTime: '2025-03-01T09:00:00.000Z',
    endDateTime: '2025-03-31T17:00:00.000Z',
    organizerName: 'Winged Wonders Foundation',
    imageUrl:
      'https://images.pexels.com/photos/30563216/pexels-photo-30563216.jpeg',
    description:
      'Walk-through greenhouse with thousands of free-flying exotic butterflies.',
  },
  {
    id: 56,
    name: 'Blacksmithing Workshop',
    slug: 'blacksmithing-workshop',
    city: 'Colonial Williamsburg',
    location: '101 Visitor Center Dr, Williamsburg, VA 23185', // Colonial Williamsburg
    startDateTime: '2025-04-12T09:00:00.000Z',
    endDateTime: '2025-04-14T16:00:00.000Z',
    organizerName: 'Iron Heritage Guild',
    imageUrl:
      'https://images.pexels.com/photos/32960616/pexels-photo-32960616.jpeg',
    description:
      'Learn 18th century metalworking techniques using traditional forges.',
  },
  {
    id: 57,
    name: 'Polar Plunge',
    slug: 'polar-plunge',
    city: 'Chicago',
    location: '600 E Grand Ave, Chicago, IL 60611', // North Avenue Beach
    startDateTime: '2026-01-01T12:00:00.000Z',
    endDateTime: '2026-01-01T15:00:00.000Z',
    organizerName: 'Great Lakes Winter Society',
    imageUrl:
      'https://images.pexels.com/photos/28751534/pexels-photo-28751534.jpeg',
    description:
      'Charity event where brave participants dive into icy Lake Michigan waters.',
  },
  {
    id: 58,
    name: 'Historic Train Ride',
    slug: 'historic-train-ride',
    city: 'Durango',
    location: '479 Main Ave, Durango, CO 81301', // Durango & Silverton Narrow Gauge Railroad
    startDateTime: '2025-09-05T08:30:00.000Z',
    endDateTime: '2025-09-05T17:00:00.000Z',
    organizerName: 'Railway Preservation Society',
    imageUrl:
      'https://images.pexels.com/photos/12510292/pexels-photo-12510292.jpeg',
    description:
      'Scenic journey through mountain canyons on restored steam locomotives.',
  },
  {
    id: 59,
    name: 'Secret Speakeasy Night',
    slug: 'secret-speakeasy-night',
    city: 'New York',
    location: '102 Norfolk St, New York, NY 10002', // Please Don't Tell (PDT)
    startDateTime: '2025-12-05T21:00:00.000Z',
    endDateTime: '2025-12-06T02:00:00.000Z',
    organizerName: 'Prohibition Era Society',
    imageUrl:
      'https://images.pexels.com/photos/25882126/pexels-photo-25882126.jpeg',
    description:
      '1920s cocktails in a hidden bar with live jazz and vintage dress encouraged.',
  },
  {
    id: 60,
    name: 'Mountain Photography Expedition',
    slug: 'mountain-photography-expedition',
    city: 'Jackson Hole',
    location: '532 N Cache St, Jackson, WY 83001', // Jackson Hole Historical Society
    startDateTime: '2025-07-08T05:00:00.000Z',
    endDateTime: '2025-07-11T20:00:00.000Z',
    organizerName: 'Peak Shots Collective',
    imageUrl:
      'https://images.pexels.com/photos/127902/pexels-photo-127902.jpeg',
    description:
      'Guided hikes to scenic vistas with professional photography instruction.',
  },
  {
    id: 61,
    name: 'Historic Garden Tour',
    slug: 'historic-garden-tour',
    city: 'Charleston',
    location: '4 Meeting St, Charleston, SC 29401', // Nathaniel Russell House
    startDateTime: '2025-04-18T09:00:00.000Z',
    endDateTime: '2025-04-20T16:00:00.000Z',
    organizerName: 'Southern Horticultural Society',
    imageUrl:
      'https://images.pexels.com/photos/9988851/pexels-photo-9988851.jpeg',
    description:
      'Private access to antebellum gardens with expert horticulturists.',
  },
  {
    id: 62,
    name: 'Glass Bottom Boat Tour',
    slug: 'glass-bottom-boat-tour',
    city: 'Key Largo',
    location: '102601 Overseas Hwy, Key Largo, FL 33037', // John Pennekamp Coral Reef State Park
    startDateTime: '2025-06-22T10:00:00.000Z',
    endDateTime: '2025-06-22T15:00:00.000Z',
    organizerName: 'Marine Discovery Tours',
    imageUrl:
      'https://images.pexels.com/photos/3831085/pexels-photo-3831085.jpeg',
    description:
      'View vibrant coral reefs and tropical fish without getting wet.',
  },
  {
    id: 63,
    name: 'Historic Chocolate Making',
    slug: 'historic-chocolate-making',
    city: 'Colonial Williamsburg',
    location: '326 W Duke of Gloucester St, Williamsburg, VA 23185', // Raleigh Tavern
    startDateTime: '2025-02-14T11:00:00.000Z',
    endDateTime: '2025-02-16T16:00:00.000Z',
    organizerName: 'Colonial Confectioners',
    imageUrl:
      'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg',
    description:
      '18th century chocolate preparation techniques using authentic tools.',
  },
  {
    id: 64,
    name: 'Lunar New Year Festival',
    slug: 'lunar-new-year-festival',
    city: 'San Francisco',
    location: '965 Clay St, San Francisco, CA 94108', // Chinatown
    startDateTime: '2026-01-24T10:00:00.000Z',
    endDateTime: '2026-01-26T22:00:00.000Z',
    organizerName: 'Asian Cultural Association',
    imageUrl:
      'https://images.pexels.com/photos/24701047/pexels-photo-24701047.jpeg',
    description:
      'Dragon dances, lantern displays, and traditional food celebrating the Year of the Horse.',
  },
  {
    id: 65,
    name: 'Cave Exploration Tour',
    slug: 'cave-exploration-tour',
    city: 'Carlsbad',
    location: '727 Carlsbad Caverns Hwy, Carlsbad, NM 88220', // Carlsbad Caverns
    startDateTime: '2025-08-15T08:00:00.000Z',
    endDateTime: '2025-08-15T14:00:00.000Z',
    organizerName: 'Subterranean Adventures',
    imageUrl:
      'https://images.pexels.com/photos/16997736/pexels-photo-16997736.jpeg',
    description:
      'Guided descent into spectacular underground chambers with expert geologists.',
  },
  {
    id: 66,
    name: 'Historic Ghost Walk',
    slug: 'historic-ghost-walk',
    city: 'Savannah',
    location: '303 Martin Luther King Jr Blvd, Savannah, GA 31401', // Savannah History Museum
    startDateTime: '2025-10-24T19:00:00.000Z',
    endDateTime: '2025-10-31T23:00:00.000Z',
    organizerName: 'Southern Spirits Tours',
    imageUrl:
      'https://images.pexels.com/photos/162389/lost-places-old-decay-ruin-162389.jpeg',
    description: 'Evening tour of haunted sites with costumed storytellers.',
  },
  {
    id: 67,
    name: 'Wildflower Hike',
    slug: 'wildflower-hike',
    city: 'Aspen',
    location: '100 Puppy Smith St, Aspen, CO 81611', // Aspen Center for Environmental Studies
    startDateTime: '2025-06-12T07:00:00.000Z',
    endDateTime: '2025-06-12T12:00:00.000Z',
    organizerName: 'Mountain Flora Society',
    imageUrl:
      'https://images.pexels.com/photos/9567499/pexels-photo-9567499.jpeg',
    description:
      'Guided alpine wildflower identification in peak bloom season.',
  },
  {
    id: 68,
    name: 'Historic Tattoo Exhibit',
    slug: 'historic-tattoo-exhibit',
    city: 'New York',
    location: '226 5th Ave, New York, NY 10001', // Tattoo Museum
    startDateTime: '2025-07-01T11:00:00.000Z',
    endDateTime: '2025-07-31T19:00:00.000Z',
    organizerName: 'Body Art Historical Society',
    imageUrl:
      'https://images.pexels.com/photos/4577718/pexels-photo-4577718.jpeg',
    description:
      'Rare artifacts tracing 5,000 years of tattoo history worldwide.',
  },
  {
    id: 69,
    name: 'Native American Pottery Workshop',
    slug: 'native-american-pottery-workshop',
    city: 'Santa Fe',
    location: '710 Camino Lejo, Santa Fe, NM 87505', // Museum of Indian Arts & Culture
    startDateTime: '2025-05-22T10:00:00.000Z',
    endDateTime: '2025-05-24T16:00:00.000Z',
    organizerName: 'Southwest Clay Arts',
    imageUrl:
      'https://images.pexels.com/photos/4706134/pexels-photo-4706134.jpeg',
    description:
      'Traditional coil-building techniques taught by master Pueblo potters.',
  },
  {
    id: 70,
    name: 'Victorian Séance Experience',
    slug: 'victorian-seance-experience',
    city: 'Salem',
    location: '131 Essex St, Salem, MA 01970', // Salem Witch Museum
    startDateTime: '2025-10-25T19:00:00.000Z',
    endDateTime: '2025-10-31T23:00:00.000Z',
    organizerName: 'Spiritualist Historical Society',
    imageUrl:
      'https://images.pexels.com/photos/7267079/pexels-photo-7267079.jpeg',
    description:
      'Authentic 19th century spiritualism demonstration in period setting.',
  },
  {
    id: 71,
    name: 'Historic Lighthouse Overnight',
    slug: 'historic-lighthouse-overnight',
    city: 'Mackinaw City',
    location: '500 N Huron Ave, Mackinaw City, MI 49701', // Old Mackinac Point Lighthouse
    startDateTime: '2025-08-15T16:00:00.000Z',
    endDateTime: '2025-08-16T10:00:00.000Z',
    organizerName: 'Great Lakes Lighthouse Keepers',
    imageUrl:
      'https://images.pexels.com/photos/32947373/pexels-photo-32947373.jpeg',
    description:
      "Spend the night in a restored lighthouse keeper's quarters with guided tours.",
  },
  {
    id: 72,
    name: 'Antique Map Fair',
    slug: 'antique-map-fair',
    city: 'Washington D.C.',
    location: '101 Independence Ave SE, Washington, DC 20540', // Library of Congress
    startDateTime: '2025-04-05T09:00:00.000Z',
    endDateTime: '2025-04-07T17:00:00.000Z',
    organizerName: 'Cartographic Heritage Society',
    imageUrl:
      'https://images.pexels.com/photos/2127869/pexels-photo-2127869.jpeg',
    description:
      'Rare maps from the 15th-19th centuries with expert appraisals available.',
  },
  {
    id: 73,
    name: 'Historic Baseball Game',
    slug: 'historic-baseball-game',
    city: 'Cooperstown',
    location: '25 Main St, Cooperstown, NY 13326', // Doubleday Field
    startDateTime: '2025-07-12T13:00:00.000Z',
    endDateTime: '2025-07-12T16:00:00.000Z',
    organizerName: 'Vintage Base Ball Association',
    imageUrl:
      'https://images.pexels.com/photos/26890864/pexels-photo-26890864.jpeg',
    description:
      '1860s rules game played with reproduction equipment and uniforms.',
  },
  {
    id: 74,
    name: 'Wild West Reenactment',
    slug: 'wild-west-reenactment',
    city: 'Tombstone',
    location: '326 E Allen St, Tombstone, AZ 85638', // OK Corral
    startDateTime: '2025-10-26T12:00:00.000Z',
    endDateTime: '2025-10-26T17:00:00.000Z',
    organizerName: 'Frontier Days Society',
    imageUrl:
      'https://images.pexels.com/photos/10547072/pexels-photo-10547072.jpeg',
    description: 'Gunfight demonstrations and 1880s frontier life recreations.',
  },
  {
    id: 75,
    name: 'Historic Tea Clipper Tour',
    slug: 'historic-tea-clipper-tour',
    city: 'San Francisco',
    location: '2905 Hyde St, San Francisco, CA 94109', // Hyde Street Pier
    startDateTime: '2025-09-06T10:00:00.000Z',
    endDateTime: '2025-09-06T16:00:00.000Z',
    organizerName: 'Maritime Heritage Foundation',
    imageUrl:
      'https://images.pexels.com/photos/2178920/pexels-photo-2178920.jpeg',
    description:
      'Board the 1886 square-rigger Balclutha with costumed interpreters.',
  },
  {
    id: 76,
    name: 'Gilded Age Mansion Tour',
    slug: 'gilded-age-mansion-tour',
    city: 'Newport',
    location: '44 Ochre Point Ave, Newport, RI 02840', // The Breakers
    startDateTime: '2025-05-15T10:00:00.000Z',
    endDateTime: '2025-05-17T16:00:00.000Z',
    organizerName: 'Preservation Society of Newport',
    imageUrl:
      'https://images.pexels.com/photos/16160766/pexels-photo-16160766.jpeg',
    description:
      'Behind-the-scenes access to Vanderbilt summer cottage with conservators.',
  },
  {
    id: 77,
    name: 'Historic Printmaking Workshop',
    slug: 'historic-printmaking-workshop',
    city: 'Philadelphia',
    location: '520 Chestnut St, Philadelphia, PA 19106', // Benjamin Franklin Museum
    startDateTime: '2025-06-20T13:00:00.000Z',
    endDateTime: '2025-06-22T17:00:00.000Z',
    organizerName: 'Colonial Arts Society',
    imageUrl:
      'https://images.pexels.com/photos/16566150/pexels-photo-16566150.jpeg',
    description:
      '18th century printing press techniques using replica equipment.',
  },
  {
    id: 78,
    name: 'Underground Railroad Tour',
    slug: 'underground-railroad-tour',
    city: 'Cincinnati',
    location: '50 E Freedom Way, Cincinnati, OH 45202', // National Underground Railroad Center
    startDateTime: '2025-02-10T10:00:00.000Z',
    endDateTime: '2025-02-16T16:00:00.000Z',
    organizerName: 'Freedom Trail Foundation',
    imageUrl:
      'https://images.pexels.com/photos/1057858/pexels-photo-1057858.jpeg',
    description:
      'Interactive exhibits and guided tours of historic safe houses.',
  },
  {
    id: 79,
    name: 'Historic Clockmaking Workshop',
    slug: 'historic-clockmaking-workshop',
    city: 'Philadelphia',
    location: '143 S 3rd St, Philadelphia, PA 19106', // Independence National Park
    startDateTime: '2025-03-15T10:00:00.000Z',
    endDateTime: '2025-03-17T16:00:00.000Z',
    organizerName: 'Early American Clockmakers',
    imageUrl:
      'https://images.pexels.com/photos/29268632/pexels-photo-29268632.jpeg',
    description:
      'Build a working reproduction of an 18th century tall case clock.',
  },
  {
    id: 80,
    name: 'Colonial Ice Cream Parlor',
    slug: 'colonial-ice-cream-parlor',
    city: 'Boston',
    location: '206 Washington St, Boston, MA 02109', // Old State House
    startDateTime: '2025-07-18T13:00:00.000Z',
    endDateTime: '2025-07-20T18:00:00.000Z',
    organizerName: 'Revolutionary Desserts Society',
    imageUrl:
      'https://images.pexels.com/photos/20683666/pexels-photo-20683666.jpeg',
    description:
      "Discover how ice cream was made in the 18th century using revolutionary-era techniques. Sample flavors like lavender-honey and spruce tip while learning about this frozen treat's surprising colonial origins. Costumed interpreters demonstrate period-correct churning methods.",
  },
  {
    id: 81,
    name: 'Victorian Photography Studio',
    slug: 'victorian-photography-studio',
    city: 'Rochester',
    location: '900 East Ave, Rochester, NY 14607', // George Eastman Museum
    startDateTime: '2025-05-08T10:00:00.000Z',
    endDateTime: '2025-05-10T16:00:00.000Z',
    organizerName: 'Historic Photographic Arts',
    imageUrl:
      'https://images.pexels.com/photos/4266487/pexels-photo-4266487.jpeg',
    description:
      'Have your portrait taken using 19th century wet plate collodion process.',
  },
  {
    id: 82,
    name: 'Historic Shipwright Workshop',
    slug: 'historic-shipwright-workshop',
    city: 'Mystic',
    location: '75 Greenmanville Ave, Mystic, CT 06355', // Mystic Seaport
    startDateTime: '2025-07-18T09:00:00.000Z',
    endDateTime: '2025-07-20T16:00:00.000Z',
    organizerName: 'Maritime Crafts Guild',
    imageUrl:
      'https://images.pexels.com/photos/15369673/pexels-photo-15369673.jpeg',
    description:
      'Learn traditional wooden boat building techniques from master craftsmen.',
  },
  {
    id: 83,
    name: 'Gold Rush Days',
    slug: 'gold-rush-days',
    city: 'Sacramento',
    location: '101 I St, Sacramento, CA 95814', // Old Sacramento
    startDateTime: '2025-09-05T10:00:00.000Z',
    endDateTime: '2025-09-07T18:00:00.000Z',
    organizerName: '49ers Historical Society',
    imageUrl:
      'https://images.pexels.com/photos/20637296/pexels-photo-20637296.jpeg',
    description: 'Living history encampments and gold panning demonstrations.',
  },
  {
    id: 84,
    name: 'Historic Mill Tour',
    slug: 'historic-mill-tour',
    city: 'Wilmington',
    location: '200 Hagley Creek Rd, Wilmington, DE 19807', // Hagley Museum
    startDateTime: '2025-06-12T10:00:00.000Z',
    endDateTime: '2025-06-14T16:00:00.000Z',
    organizerName: 'Industrial Heritage Foundation',
    imageUrl:
      'https://images.pexels.com/photos/15018559/pexels-photo-15018559.jpeg',
    description:
      'Working demonstrations of 19th century water-powered machinery.',
  },
  {
    id: 85,
    name: 'Colonial Apothecary Workshop',
    slug: 'colonial-apothecary-workshop',
    city: 'Williamsburg',
    location: '326 W Duke of Gloucester St, Williamsburg, VA 23185', // Raleigh Tavern
    startDateTime: '2025-04-10T11:00:00.000Z',
    endDateTime: '2025-04-12T16:00:00.000Z',
    organizerName: 'Historic Medical Society',
    imageUrl:
      'https://images.pexels.com/photos/5480153/pexels-photo-5480153.jpeg',
    description:
      'Prepare 18th century remedies using period tools and ingredients.',
  },
  {
    id: 86,
    name: 'Historic Lighthouse Climb',
    slug: 'historic-lighthouse-climb',
    city: 'Portland',
    location: '12 Captain Strout Cir, Portland, ME 04101', // Portland Head Light
    startDateTime: '2025-08-07T10:00:00.000Z',
    endDateTime: '2025-08-10T16:00:00.000Z',
    organizerName: 'Coastal Beacons Society',
    imageUrl:
      'https://images.pexels.com/photos/1077325/pexels-photo-1077325.jpeg',
    description: "Climb to the top of historic lighthouses with keeper's tour.",
  },
  {
    id: 87,
    name: 'Victorian Flower Arranging',
    slug: 'victorian-flower-arranging',
    city: 'Newport',
    location: '424 Bellevue Ave, Newport, RI 02840', // The Elms mansion
    startDateTime: '2025-05-22T14:00:00.000Z',
    endDateTime: '2025-05-24T17:00:00.000Z',
    organizerName: 'Gilded Age Society',
    imageUrl:
      'https://images.pexels.com/photos/15935557/pexels-photo-15935557.jpeg',
    description:
      'Learn 19th century floral design techniques in historic mansion.',
  },
  {
    id: 88,
    name: 'Historic Blacksmithing',
    slug: 'historic-blacksmithing',
    city: 'Colonial Williamsburg',
    location: '101 Visitor Center Dr, Williamsburg, VA 23185', // Colonial Williamsburg
    startDateTime: '2025-04-15T10:00:00.000Z',
    endDateTime: '2025-04-17T16:00:00.000Z',
    organizerName: 'Iron Heritage Guild',
    imageUrl:
      'https://images.pexels.com/photos/9811497/pexels-photo-9811497.jpeg',
    description:
      '18th century metalworking techniques using traditional forges.',
  },
  {
    id: 89,
    name: 'Antique Quilt Exhibition',
    slug: 'antique-quilt-exhibition',
    city: 'Lancaster',
    location: '501 Museum Rd, Lancaster, PA 17602', // Lancaster Quilt & Textile Museum
    startDateTime: '2025-03-01T10:00:00.000Z',
    endDateTime: '2025-03-31T17:00:00.000Z',
    organizerName: 'Textile Heritage Society',
    imageUrl:
      'https://images.pexels.com/photos/15501683/pexels-photo-15501683.jpeg',
    description:
      'Rare 18th-19th century quilts with conservation demonstrations.',
  },
  {
    id: 90,
    name: 'Historic Tinsmithing',
    slug: 'historic-tinsmithing',
    city: 'Colonial Williamsburg',
    location: '101 Visitor Center Dr, Williamsburg, VA 23185', // Colonial Williamsburg
    startDateTime: '2025-05-08T10:00:00.000Z',
    endDateTime: '2025-05-10T16:00:00.000Z',
    organizerName: 'Early American Crafts',
    imageUrl:
      'https://images.pexels.com/photos/9786241/pexels-photo-9786241.jpeg',
    description:
      'Create reproduction tinware using 18th century tools and techniques.',
  },
  {
    id: 91,
    name: 'Historic Cooking Class',
    slug: 'historic-cooking-class',
    city: 'Plymouth',
    location: '137 Warren Ave, Plymouth, MA 02360', // Plimoth Patuxet Museums
    startDateTime: '2025-11-15T11:00:00.000Z',
    endDateTime: '2025-11-17T16:00:00.000Z',
    organizerName: 'Colonial Culinary Arts',
    imageUrl:
      'https://images.pexels.com/photos/15484967/pexels-photo-15484967.jpeg',
    description: 'Prepare 17th century recipes in authentic hearth kitchen.',
  },
  {
    id: 92,
    name: 'Victorian Seamstress Workshop',
    slug: 'victorian-seamstress-workshop',
    city: 'Newport',
    location: '424 Bellevue Ave, Newport, RI 02840', // The Elms mansion
    startDateTime: '2025-06-05T10:00:00.000Z',
    endDateTime: '2025-06-07T16:00:00.000Z',
    organizerName: 'Gilded Age Society',
    imageUrl:
      'https://images.pexels.com/photos/2973392/pexels-photo-2973392.jpeg',
    description: 'Learn 19th century sewing techniques in historic mansion.',
  },
  {
    id: 93,
    name: 'Historic Broom Making',
    slug: 'historic-broom-making',
    city: 'Colonial Williamsburg',
    location: '101 Visitor Center Dr, Williamsburg, VA 23185', // Colonial Williamsburg
    startDateTime: '2025-04-18T10:00:00.000Z',
    endDateTime: '2025-04-20T16:00:00.000Z',
    organizerName: 'Early American Crafts',
    imageUrl:
      'https://images.pexels.com/photos/8241748/pexels-photo-8241748.jpeg',
    description: 'Traditional broom crafting using 18th century methods.',
  },
  {
    id: 94,
    name: 'Antique Clock Repair',
    slug: 'antique-clock-repair',
    city: 'Philadelphia',
    location: '143 S 3rd St, Philadelphia, PA 19106', // Independence National Park
    startDateTime: '2025-03-20T10:00:00.000Z',
    endDateTime: '2025-03-22T16:00:00.000Z',
    organizerName: 'Horological Society',
    imageUrl:
      'https://images.pexels.com/photos/8327717/pexels-photo-8327717.jpeg',
    description:
      'Learn to repair 18th-19th century clocks with master horologists.',
  },
  {
    id: 95,
    name: 'Historic Candle Making',
    slug: 'historic-candle-making',
    city: 'Plymouth',
    location: '137 Warren Ave, Plymouth, MA 02360', // Plimoth Patuxet Museums
    startDateTime: '2025-12-05T11:00:00.000Z',
    endDateTime: '2025-12-07T16:00:00.000Z',
    organizerName: 'Colonial Crafts Society',
    imageUrl:
      'https://images.pexels.com/photos/7233963/pexels-photo-7233963.jpeg',
    description: '17th century tallow candle dipping and mold techniques.',
  },
  {
    id: 96,
    name: 'Victorian Etiquette Tea',
    slug: 'victorian-etiquette-tea',
    city: 'Newport',
    location: '424 Bellevue Ave, Newport, RI 02840', // The Elms mansion
    startDateTime: '2025-05-30T15:00:00.000Z',
    endDateTime: '2025-05-30T18:00:00.000Z',
    organizerName: 'Gilded Age Society',
    imageUrl:
      'https://images.pexels.com/photos/30767475/pexels-photo-30767475.jpeg',
    description: 'Afternoon tea with proper 19th century manners instruction.',
  },
  {
    id: 97,
    name: 'Historic Weaving Workshop',
    slug: 'historic-weaving-workshop',
    city: 'Williamsburg',
    location: '101 Visitor Center Dr, Williamsburg, VA 23185', // Colonial Williamsburg
    startDateTime: '2025-07-10T10:00:00.000Z',
    endDateTime: '2025-07-12T16:00:00.000Z',
    organizerName: 'Early American Crafts',
    imageUrl:
      'https://images.pexels.com/photos/9552186/pexels-photo-9552186.jpeg',
    description:
      '18th century loom weaving techniques with reproduction equipment.',
  },
  {
    id: 98,
    name: 'Antique Tool Exhibition',
    slug: 'antique-tool-exhibition',
    city: 'Cooperstown',
    location: '5798 NY-80, Cooperstown, NY 13326', // Farmers' Museum
    startDateTime: '2025-08-15T10:00:00.000Z',
    endDateTime: '2025-08-17T16:00:00.000Z',
    organizerName: 'Rural Heritage Society',
    imageUrl:
      'https://images.pexels.com/photos/27491014/pexels-photo-27491014.jpeg',
    description:
      '19th century farm and craft tools with working demonstrations.',
  },
  {
    id: 99,
    name: 'Historic Basketry Workshop',
    slug: 'historic-basketry-workshop',
    city: 'Plymouth',
    location: '137 Warren Ave, Plymouth, MA 02360', // Plimoth Patuxet Museums
    startDateTime: '2025-09-12T10:00:00.000Z',
    endDateTime: '2025-09-14T16:00:00.000Z',
    organizerName: 'Colonial Crafts Society',
    imageUrl:
      'https://images.pexels.com/photos/26692157/pexels-photo-26692157.jpeg',
    description:
      'Traditional Native American and colonial basket weaving techniques.',
  },
  {
    id: 100,
    name: 'Victorian Magic Lantern Show',
    slug: 'victorian-magic-lantern-show',
    city: 'Rochester',
    location: '900 East Ave, Rochester, NY 14607', // George Eastman Museum
    startDateTime: '2025-10-30T19:00:00.000Z',
    endDateTime: '2025-10-31T22:00:00.000Z',
    organizerName: 'Historic Photographic Arts',
    imageUrl:
      'https://images.pexels.com/photos/16929597/pexels-photo-16929597.jpeg',
    description:
      '19th century optical entertainment with original projection devices.',
  },
  {
    id: 101,
    name: 'Historic Ghost Tour',
    slug: 'historic-ghost-tour',
    city: 'Savannah',
    location: '303 Martin Luther King Jr Blvd, Savannah, GA 31401', // Savannah History Museum
    startDateTime: '2026-10-28T19:00:00.000Z',
    endDateTime: '2026-10-31T23:00:00.000Z',
    organizerName: 'Southern Spirits Tours',
    imageUrl:
      'https://images.pexels.com/photos/27818330/pexels-photo-27818330.jpeg',
    description:
      "Walk through Savannah's haunted history with expert guides. Hear chilling tales from the city's past.",
  },
];

export { EVENTS };
