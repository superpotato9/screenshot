// API for get requests
//TODO: remove the answers
fetchRes = fetch(
  "https:/superpotato9.com/tvdle/data");
// fetchRes is the promise to resolve
// it by using.then() method
fetchRes.then(res =>
  res.json()).then(d => {
  //console.log(d)
  element = d
  console.log(element["title"]);
  release =  element["release"];
  title = element['title'];
  poster = element["poster"];

  console.log(release, title, poster);
  document.getElementById("main").src=poster;

  //document.getElementById("example").innerHTML =  element;




})


//this code below is for search i barely know how it works

var search_terms = ['11.22.63', 'csi: cyber', 'the stand', 'ted lasso', 'shake it up', 'patrick melrose', 'magnum p.i.', '9-1-2001', 'oz', 'deadly class', 'iron man: armored adventures', 'orange is the new black', 'las vegas', 'atlanta', 'vikings', 'foundation', 'intelligence', 'broad city', 'teen titans', 'preacher', 'bella and the bulldogs', 'the wonder years', 'heroes reborn', 'panic', 'taz-mania', "america's got talent", 'the newsroom', 'mike & molly', 'the kominsky method', 'zoey 101', 'weeds', 'the fresh prince of bel-air', 'charmed', "who's the boss?", 'the a-team', 'v', 'grimm', 'pandemic: how to prevent an outbreak', 'scooby-doo, where are you!', 'mayans m.c.', 'chowder', 'yasuke', 'warrior', '90210', 'the ellen degeneres show', "king solomon's mines", 'battlestar galactica', 'house of lies', 'tiny toon adventures', 'lucifer', 'daria', 'american horror story', 'fear itself', 'the x-files', 'sharp objects', 'sonic boom', 'last man standing', 'the magicians', 'i am not okay with this', 'blue bloods', 'young rock', 'six', "bob's burgers", 'touched by an angel', 'ginny & georgia', 'damages', 'automan', 'the universe', 'mad men', 'continuum', 'yellowstone', 'travelers', 'happy days', 'the huckleberry hound show', 'all in the family', 'ncis: los angeles', 'the alienist', 'beverly hills, 90210', 'brave new world', 'hawaii five-0', 'the dukes of hazzard', 'teen wolf', 'pac-man and the ghostly adventures', 'miracle workers', 'mars', 'teenage mutant ninja turtles', 'avatar: the last airbender', 'hoops', 'crazy ex-girlfriend', 'two and a half men', 'the good doctor', 'the love boat', 'aquarius', 'the triangle', 'the americans', 'bridgerton', 'the plot against america', 'the nevers', 'orphan black', 'spider-man and his amazing friends', 'burn notice', 'the addams family', "salem's lot", 'rectify', 'unbelievable', 'spider-man', 'my hero academia', 'the golden girls', 'clarissa explains it all', 'locke & key', 'doom patrol', 'the new pope', 'jeffrey epstein: filthy rich', 'batman: the brave and the bold', 'hemlock grove', 'siren', 'hannibal', 'hanna', 'the tick', '9-1-1: lone star', 'self made: inspired by the life of madam c.j. walker', 'inside job', 'pixar popcorn', 'emerald city', 'dash & lily', 'the terror', 'drake & josh', 'down to earth with zac efron', 'flight of the conchords', 'vikings: valhalla', 'the mosquito coast', 'danny phantom', 'creepshow', 'helix', 'santa clarita diet', 'too hot to handle', 'the ren & stimpy show', 'ally mcbeal', 'shameless', 'medium', 'unbreakable kimmy schmidt', 'impulse', '7th heaven', 'clarice', 'rome', 'tyrant', 'life after people: the series', 'king of the hill', '8 simple rules... for dating my teenage daughter', 'chicago p.d.', 'ben 10', '1883', 'the addams family', 'condor', 'the loud house', 'the haunting of hill house', 'silicon valley', 'suits', 'nathan for you', 'star wars: visions', 'the wonder years', 'madam secretary', 'blindspot', 'garfield and friends', 'the brink', 'wwe smackdown', 'anne with an e', 'warehouse 13', 'lonesome dove', 'amend: the fight for america', 'icarly', "marvel's daredevil", 'celebrity deathmatch', 'the equalizer', 'desperate housewives', 'ghostwriter', 'zorro', "foster's home for imaginary friends", 'get smart', 'the proud family', 'billions', 'american vandal', 'space force', 'haven', 'steven universe', 'police squad!', 'sneakerheads', 'true detective', 'night stalker: the hunt for a serial killer', 'you me her', 'kenan & kel', 'the mandalorian', 'bonanza', "marvel's spidey and his amazing friends", 'quarry', 'spinning out', 'johnny bravo', 'the voice', 'high score', 'afro samurai', 'bojack horseman', 'aj and the queen', 'johnny test', 'you', 'knight rider', 'awkward.', 'cobra kai', 'wilfred', 'manifest', 'the 100', 'everwood', 'madagascar: a little wild', 'captain planet and the planeteers', 'solar opposites', "kamp koral: spongebob's under years", 'new girl', 'blood & water', 'archer', 'cosmos: a personal voyage', 'i dream of jeannie', 'queer as folk', 'impractical jokers', 'lethal weapon', 'survivor', 'power', 'scrubs', 'supernatural', 'dirty money', 'the brady bunch', 'american horror stories', 'tru calling', 'invader zim', 'regular show', 'spartacus', 'unsolved mysteries', "dan brown's the lost symbol", 'galavant', 'halo 4: forward unto dawn', 'the lion guard', 'power book ii: ghost', 'utopia', 'barry', 'stripperella', "chip 'n' dale rescue rangers", 'v', 'cosmos', "dawson's creek", 'the whispers', 'chaotic', "the d'amelio show", 'freaks and geeks', 'grown-ish', 'dr. quinn, medicine woman', 'longmire', 'the little mermaid', 'heels', 'sex and the city', 'maid', 'frequency', 'the 4400', 'chance', 'perception', 'the rookie', 'whiskey cavalier', 'boston legal', 'brooklyn nine-nine', 'covert affairs', 'thundercats', 'love, victor', 'the wire', 'emergence', 'station 19', "l.a.'s finest", 'hell on wheels', 'rick and morty', 'eastbound & down', 'medabots', 'southland', 'ghost whisperer', 'glee', 'pacific rim: the black', "scooby's all-star laff-a-lympics", 'firefly', 'cruel summer', 'just shoot me!', "harper's island", 'monsters at work', 'ray donovan', 'russian doll', 'servant', 'pretty little liars', 'bag of bones', 'the adventures of super mario bros. 3', 'lost', 'real time with bill maher', 'the gifted', '24', 'the night of', 'the yogi bear show', 'family ties', 'the vampire diaries', 'v wars', 'tales from the loop', 'halt and catch fire', 'the flintstones', 'little house on the prairie', 'what / if', 'dungeons & dragons', 'el dragón: return of a warrior', 'we bare bears', 'she-ra and the princesses of power', 'saturday night live', 'walker', 'narcos', 'better call saul', 'teenage mutant ninja turtles', 'witches of east end', 'the legend of vox machina', 'good trouble', 'the i-land', 'primal', "disney's adventures of the gummi bears", 'bonnie & clyde', 'second chance', 'la doña', 'sonic the hedgehog', 'castle', 'masterchef', 'over the garden wall', 'switched at birth', 'beyond', 'the pillars of the earth', 'stalker', 'show me a hero', 'men in black: the series', 'superman: the animated series', 'spongebob squarepants', 'feud', 'k.c. undercover', 'tut', 'the bold and the beautiful', 'the stand', 'riverdale', 'rwby', 'grace and frankie', 'homeland', 'hart of dixie', 'friday night lights', 'young sheldon', 'salvation', 'the grim adventures of billy and mandy', 'blue mountain state', 'marlon', 'seven deadly sins', 'the returned', 'living with yourself', 'hung', 'the night shift', 'macgyver', 'person of interest', 'beavis and butt-head', "ned's declassified school survival guide", 'resident evil: infinite darkness', 'chilling adventures of sabrina', 'charmed', 'liv and maddie', 'krypton', 'incorporated', 'kevin can wait', 'friends', 'mystery science theater 3000', 'the kardashians', 'the sopranos', 'mickey mouse clubhouse', 'messiah', 'spin city', 'constantine', 'it', 'believe', 'the boys', 'gossip girl', 'bmf', "that '70s show", 'i know what you did last summer', 'nashville', 'stranger things', 'the cosby show', 'the twilight zone', 'bloodline', 'the twilight zone', 'genius', 'channel zero', 'lenox hill', 'the librarians', 'heroes', 'black summer', 'pushing daisies', 'the orville', 'quantico', 'the owl house', 'private practice', 'courage the cowardly dog', "ncis: hawai'i", 'jane the virgin', 'teenage bounty hunters', 'family guy', 'recess', 'mrs. fletcher', "late night with conan o'brien", 'the west wing', 'star trek: the next generation', 'scenes from a marriage', 'virgin river', 'for all mankind', 'a series of unfortunate events', 'the exorcist', 'secrets of sulphur springs', 'la femme nikita', 'inventing anna', 'the men who built america', 'into the badlands', 'high fidelity', 'ghost adventures', '2 broke girls', 'the croods: family tree', 'babylon 5', 'fast & furious spy racers', 'black sails', 'curb your enthusiasm', 'the dragon prince', 'sanctuary', 'the goldbergs', 'master of none', 'this is us', 'swamp thing', "rupaul's drag race", 'jessie', 'my name is earl', 'batman: the animated series', 'transformers: war for cybertron: siege', 'the young and the restless', 'we baby bears', 'kidding', 'wacky races', 'transparent', 'mildred pierce', 'the new adventures of winnie the pooh', 'perry mason', 'scream: the tv series', 'beast wars: transformers', 'jurassic world: camp cretaceous', 'two guys and a girl', 'falling skies', "da vinci's demons", 'batman beyond', 'last week tonight with john oliver', 'ben 10: alien force', 'the munsters', 'the big bang theory', 'evil', "the handmaid's tale", 'wynonna earp', 'catdog', 'star trek: deep space nine', 'startup', 'millennium', 'what if...?', 'without a trace', 'grand hotel', "marvel's luke cage", 'medical police', 'minority report', 'frasier', 'being human', 'fbi: most wanted', 'the wild thornberrys', 'terra nova', 'dead to me', 'duncanville', 'ravenswood', 'i love lucy', 'ncis', 'andromeda', 'the big show show', 'veep', 'haikyu!!', 'glow', "marvel's agents of s.h.i.e.l.d.: slingshot", 'the spanish princess', 'the twilight zone', "marvel's runaways", 'the walking dead', 'breaking bad', 'vinyl', 'dinotopia', 'sabrina, the teenage witch', 'your honor', 'the l word', 'the purge', 'the following', 'jimmy kimmel live!', 'the adventures of jimmy neutron: boy genius', 'one tree hill', 'buffy the vampire slayer', 'roswell, new mexico', 'scooby-doo and guess who?', 'mythbusters', 'tour of duty', 'married... with children', 'silverhawks', 'leaving neverland', 'the mist', 'monk', 'ballers', "frank herbert's children of dune", "tom clancy's jack ryan", "dc's legends of tomorrow", 'mom', 'f is for family', 'batwoman', 'crisis', 'lizzie mcguire', 'el chapo', 'freakazoid!', 'x-men: evolution', 'the unit', 'the transformers', 'the book of boba fett', "diff'rent strokes", 'house of cards', 'the lost room', 'prank encounters', 'cheer', 'scooby-doo! mystery incorporated', 'the dead zone', 'whose line is it anyway?', 'motherland: fort salem', 'teenage mutant ninja turtles', 'big time rush', 'loki', 'halo', 'one day at a time', 'star wars rebels', 'big mouth', 'the wilds', 'my life as a teenage robot', 'magnum, p.i.', "marvel's inhumans", 'power rangers', 'the o.c.', 'girl meets world', 'hey arnold!', 'first kill', 'kipo and the age of wonderbeasts', 'chicago med', 'the atom ant show', 'the expanse', 'timon & pumbaa', 'happy!', 'welcome to earth', 'the girlfriend experience', 'the flash', 'the legend of korra', 'for life', 'killing eve', 'corazon valiente', 'the ranch', 'the flash', 'the looney tunes show', 'the 10th kingdom', 'obi-wan kenobi', 'star', 'close enough', 'cold case', 'everything sucks!', "marvel's the punisher", 'alcatraz', 'ash vs evil dead', 'american crime story', 'generator rex', 'the politician', 'counterpart', 'the charlie brown and snoopy show', 'the woman in the house across the street from the girl in the window', 'lilo & stitch: the series', 'hit the floor', 'horror at the cecil hotel', 'battlestar galactica: blood & chrome', 'smallville', "dota: dragon's blood", 'ben 10: omniverse', 'the midnight gospel', 'deadwood', 'dug days', 'the man in the high castle', 'sons of anarchy', 'the suite life on deck', 'baby looney tunes', 'age of samurai: battle for japan', 'dallas', 'cursed', "schitt's creek", 'the last dance', '13 reasons why', 'the marvelous misadventures of flapjack', 'sonny with a chance', 'the resident', 'wet hot american summer: first day of camp', 'powerless', 'designated survivor', 'forged in fire', 'the fosters', 'the mentalist', 'beauty and the beast', "salem's lot", 'jericho', 'the liberator', 'numb3rs', 'senora acero', 'mickey mouse', 'macgyver', 'get smart', 'anger management', 'lab rats', 'killer inside: the mind of aaron hernandez', 'community', 'northern exposure', 'queen of hearts', 'the good fight', 'the cleveland show', 'roswell', 'archive 81', 'the bridge', 'the league', 'supergirl', 'darkwing duck', 'samurai jack', 'lost girl', 'swagger', 'future man', 'broken angel', 'everybody loves raymond', 'ozark', 'homecoming', 'star-crossed', 'the scent of passion', 'october faction', "frank herbert's dune", 'the 13 ghosts of scooby-doo', 'bones', 'gold rush', 'see', 'fargo', 'shaka zulu', 'legend of the seeker', 'star trek: lower decks', 'stargate sg-1', 'dangerous affairs', 'murder, she wrote', 'the venture bros.', 'solos', 'battlestar galactica', 'seinfeld', 'caprica', 'the third day', 'light as a feather', 'the penguins of madagascar', "marvel's avengers assemble", 'rookie blue', 'futurama', 'the event', 'into the unknown: making frozen ii', 'star wars: the clone wars', 'cougar town', 'the secret circle', 'top cat', 'looking for alaska', 'doug', 'mr. pickles', 'chapelwaite', 'codename: kids next door', 'the boondocks', 'insatiable', 'good girls', 'olive kitteridge', 'dark angel', 'the late show with stephen colbert', 'shadowhunters', 'avenue 5', 'a teacher', 'prison break', 'alexa & katie', 'united states of tara', 'mortal kombat: conquest', "tyler perry's the haves and the have nots", 'next', 'touch', 'dickinson', 'game of thrones', 'victoria', 'the path', 'party down', 'lie to me', 'danger force', 'how i met your mother', 'the walking dead: origins', 'the shield', 'animaniacs', 'godless', 'el juego de las llaves', 'rush', 'midnight, texas', 'star trek: enterprise', 'no ordinary family', 'blade runner: black lotus', 'seal team', 'nine perfect strangers', 'early edition', 'brand new cherry flavor', 'how to become a tyrant', 'adventure time: distant lands', 'the mick', 'the drew carey show', 'la brea', 'white collar', 'dreamworks dragons', 'dracula', 'wonder woman', 'containment', 'bonding', 'the six million dollar man', 'the affair', 'masters of sex', "marvel's m.o.d.o.k.", 'the flight attendant', 'rizzoli & isles', 'neverland', 'ms. marvel', 'i know this much is true', 'gilmore girls: a year in the life', 'rosewood', 'the originals', "breaking the magician's code: magic's biggest secrets finally revealed", 'helluva boss', 'alf', 'conan', 'phineas and ferb', 'izombie', 'rose red', 'deception', 'love, death & robots', '30 rock', 'american dad!', 'bosch', 'lovecraft country', 'true blood', 'wayne', 'gypsy', 'dexter', 'brothers and sisters', 'escape at dannemora', 'robot chicken', 'apb', 'the nanny', 'slugterra', 'will & grace', 'the white lotus', 'the oa', 'the curse of oak island', 'outcast', 'hi hi puffy amiyumi', 'joey', 'ancient aliens', "the queen's gambit", 'static shock', 'reno 911!', 'revolution', 'the baby-sitters club', 'catch-22', 'the new scooby-doo movies', "childhood's end", 'goosebumps', 'banshee', 'hercules', 'wolverine and the x-men', 'kim possible', 'chicago justice', 'from dusk till dawn: the series', 'raising hope', 'rescue me', 'spawn', '100 días para enamorarnos', 'better things', 'john adams', 'haunted', 'the marvelous mrs. maisel', 'salem', 'ӕon flux', 'legacies', 'awake', 'californication', 'tiger king', "marvel's agents of s.h.i.e.l.d.", 'wandavision', 'law & order', 'run coyote run', 'nancy drew', 'marco polo', 'the new scooby and scrappy-doo show', 'never have i ever', 'little fires everywhere', 'shadow and bone', 'unreal', 'taken', "rocko's modern life", "marvel's the defenders", 'the pretender', 'fbi', 'the blacklist', 'the jetsons', 'altered carbon', 'the morning show', 'lost in space', 'sex, explained', 'second chance', 'step by step', 'er', 'and just like that…', 'legion', 'broken trail', 'mission: impossible', 'once upon a time', 'knightfall', 'stitchers', "rosemary's baby", 'outsiders', 'spider-man: the new animated series', "dexter's laboratory", 'the young pope', 'south park', "dr. horrible's sing-along blog", 'fresh off the boat', "dc's stargirl", 'star trek: picard', 'a pup named scooby-doo', 'american gods', 'batman', 'big sky', 'shades of blue', 'marvel studios: legends', 'criminal minds', 'taxi', 'rocket power', 'the witcher', 'tiny pretty things', 'only murders in the building', 'the shannara chronicles', 'angel', 'terminator: the sarah connor chronicles', "marvel's iron fist", "turn: washington's spies", 'hawkeye', 'alphas', 'watchmen', 'just beyond', 'extant', 'baby daddy', 'quantum leap', 'all american', 'the carrie diaries', 'julie and the phantoms', '4400', 'good witch', 'we are who we are', 'zoo', 'project blue book', 'when they see us', 'the fairly oddparents', 'spider-man unlimited', 'animal kingdom', 'mythic quest', 'ben 10: ultimate alien', 'steven universe future', 'pucca', 'sofia the first', 'when calls the heart', 'the trials of gabriel fernandez', 'harry potter: hogwarts tournament of houses', 'penny dreadful: city of angels', "marvel's agent carter", 'chicago fire', 'sliders', 'faking it', 'full house', 'alfred hitchcock presents', 'young justice', 'the angry beavers', 'gotham', 'tales from the cryptkeeper', 'yu-gi-oh! capsule monsters', 'rubi', 'limitless', 'the outer limits', '1000 ways to die', 'the outer limits', 'loonatics unleashed', 'the haunting of bly manor', 'american housewife', 'the outsider', 'arcane', 'girls', 'pawn stars', 'infinity train', 'fear the walking dead', 'the act', 'storm of the century', 'jag', 'louie', 'sam & cat', 'daybreak', 'scandal', 'life', 'big shot', 'the river', 'silvana sin lana', 'csi: ny', 'happy endings', 'outlander', 'moon knight', 'the office', 'devious maids', 'van helsing', 'workaholics', 'the time tunnel', "zoey's extraordinary playlist", 'dc super hero girls', 'bates motel', 'the powerpuff girls', 'ugly americans', 'ingles', 'justice league', 'the batman', 'family matters', 'the sex lives of college girls', 'kung fu panda: the paws of destiny', 'xena: warrior princess', 'scream queens', "i'm in the band", "my babysitter's a vampire", 'through the wormhole', 'jackass', 'how to get away with murder', 'waco', 'queen of the south', "raven's home", 'trinkets', "kickin' it", 'the langoliers', 'the business of drugs', 'aqua teen hunger force', 'csi: crime scene investigation', 'the boss baby: back in business', "charlie's angels", 'shadow hunter', 'm*a*s*h', 'chuck', 'the mists of avalon', 'american dragon: jake long', 'the vietnam war', 'cowboy bebop', "grey's anatomy", 'the king of queens', 'p-valley', 'narcos: mexico', 'dollhouse', 'god friended me', 'the tomorrow people', 'goliath', 'the daily show with trevor noah', 'atypical', 'adventure time', 'amazing stories', 'all grown up!', 'the jinx: the life and deaths of robert durst', 'crime scene: the vanishing at the cecil hotel', 'home improvement', 'resident alien', 'big little lies', 'according to jim', 'the bible', 'dare me', 'the mighty ducks: game changers', 'the spectacular spider-man', 'harley quinn', 'entourage', 'hatfields & mccoys', 'reacher', 'scooby-doo and scrappy-doo', 'in the dark', 'midnight mass', 'moonlight', 'nurse jackie', "what's new, scooby-doo?", 'firefly lane', 'i am weasel', 'aaahh!!! real monsters', 'castle rock', 'el clon', 'fringe', "freddy's nightmares", 'my little pony: friendship is magic', 'the knick', 'the bold type', 'chucky', 'pasión prohibida', 'truth be told', 'maniac', 'dead like me', 'mozart in the jungle', 'happy tree friends', 'another life', 'the white princess', 'z nation', 'star wars: clone wars', 'pose', 'the suite life of zack & cody', "it's always sunny in philadelphia", 'the little lulu show', 'the pacific', 'law & order: criminal intent', "hell's kitchen", 'the new batman adventures', 'grand army', 'aladdin: the series', 'fraggle rock', 'looney tunes cartoons', 'robotech', 'godfather of harlem', 'carnivàle', 'lore', 'murdoch mysteries', 'superman & lois', 'ascension', 'insecure', 'the killing', 'the bugs bunny show', 'the society', 'the beatles: get back', 'the messengers', 'victorious', 'dinosaurs', 'alias', 'fate: the winx saga', 'star wars: the bad batch', 'masters of the universe: revelation', 'kung fu', 'trailer park boys', 'nikita', 'key & peele', 'tom and jerry in new york', 'halo: the fall of reach', 'roseanne', 'y: the last man', 'blood drive', 'stargate universe', 'disenchantment', 'star vs. the forces of evil', "blue's clues", 'high school musical: the musical: the series', 'baywatch', 'wild wild country', 'dopesick', 'blood of zeus', 'keeping up with the kardashians', 'kid vs. kat', 'pretty little liars: the perfectionists', 'sesame street', "marvel's ultimate spider-man", 'wayward pines', 'the falcon and the winter soldier', 'taken', 'in treatment', 'mindhunter', 'crossing jordan', 'the leftovers', 'helstrom', 'moonlighting', 'leverage', 'dharma & greg', 'rules of engagement', 'hercules: the legendary journeys', "marvel's spider-man", 'legends', 'the umbrella academy', 'modern family', 'airwolf', "you're the worst", 'cops', 'wu-tang: an american saga', 'justified', 'penny dreadful', 'the sinner', 'my wife and kids', 'the order', 'marvel studios: assembled', 'north and south', 'pup academy', 'arrested development', 'vice principals', 'the amazing race', 'defending jacob', "r. l. stine's the haunting hour", 'station eleven', 'late show with david letterman', 'tell me a story', 'ratched', 'manhunt', 'brickleberry', 'betty en ny', 'transformers: prime', 'sweet tooth', 'doogie kamealoha, m.d.', 'reaper', 'sneaky pete', 'animaniacs', 'the keepers', 'green lantern: the animated series', 'empire', 'austin & ally', 'the good wife', 'the borgias', 'paradise pd', 'hannah montana', 'raising dion', 'glitch techs', 'the last man on earth', 'parks and recreation', 'icarly', "that's so raven", 'kick buttowski: suburban daredevil', "marvel's cloak & dagger", "jupiter's legacy", 'ducktales', 'drop dead diva', 'undertaker: the last ride', 'sense8', 'suburgatory', 'final space', 'the scooby-doo/dynomutt hour', 'paw patrol', 'evil genius', 'kung fu', 'titans', 'dominion', 'hollywood', 'unforgettable', 'the real ghostbusters', 'modern love', 'eureka', 'defiance', 'revenge', 'the shining', 'wwe raw', 'love', 'parenthood', 'law & order: special victims unit', 'better off ted', 'the good place', 'yellowjackets', 'metalocalypse', 'the undoing', 'mad about you', 'miami vice', 'olaf presents', 'walker, texas ranger', 'resurrection', 'malcolm in the middle', 'selena: the series', 'pinky and the brain', 'brandy & mr. whiskers', 'scorpion', "chappelle's show", 'absentia', 'operación pacífico', 'fuller house', 'snowpiercer', 'dragons: the nine realms', 'star trek: voyager', 'the get down', 'home before dark', 'pennyworth', 'the tudors', 'black lightning', 'cow and chicken', 'ed, edd n eddy', 'royal pains', 'rugrats', '12 monkeys', 'free rein', 'acapulco', 'trollhunters: tales of arcadia', 'knight rider', 'dear white people', "gilligan's island", 'cheers', 'felix the cat', 'castlevania', 'nos4a2', 'bull', 'the tonight show starring jimmy fallon', 'the colbert report', 'barbie: life in the dreamhouse', 'roots', 'mr. robot', 'unsolved mysteries', 'prodigal son', 'warrior nun', 'the walking dead: world beyond', 'them', 'chernobyl', 'powers', 'lois & clark: the new adventures of superman', 'colony', 'the mindy project', 'highlander: the series', 'the wheel of time', 'roots', 'andi mack', 'mare of easttown', 'tales from the crypt', 'camelot', 'ben 10', 'the bionic woman', 'braindead', 'band of brothers', 'severance', 'katy keene', 'gossip girl', 'house', 'tin man', 'reign', 'the snoopy show', 'demon slayer: kimetsu no yaiba', 'jackie chan adventures', 'tiny world', 'nip/tuck', 'on my block', 'the deuce', '3rd rock from the sun', 'pearson', 'mad', 'dora the explorer', 'young & hungry', 'star trek: discovery', 'westworld', 'wizards of waverly place', 's.w.a.t.', 'snowfall', 'psych', 'shogun', 'mayday', 'shooter', 'upload', 'rugrats', 'ducktales', 'devs', 'small wonder', 'run', 'preso no. 1', 'making a murderer', 'bewitched', 'the story of god with morgan freeman', 'drawn together', 'generation kill', 'gravity falls', 'undone', 'days of our lives', 'mr. mercedes', 'amazing stories', 'treadstone', 'sex/life', 'the quintessential quintuplets', 'kitchen nightmares', 'justice league unlimited', 'teen titans go!', 'away', 'henry danger', 'the tom and jerry show', 'the return', 'angels in america', 'peacemaker', 'boardwalk empire', 'heartland', 'the closer', 'xiaolin showdown', 'almost human', 'last resort', 'beauty and the beast', 'flashforward', "don't f**k with cats: hunting an internet killer", 'the great', 'spider-man', 'dexter: new blood', 'mission: impossible', 'masters of horror', 'euphoria', 'timeless', 'everybody hates chris', 'dynasty', 'sweet magnolias', 'sleepy hollow', 'the simpsons', '24: legacy', 'the thundermans', 'ninjago: masters of spinjitzu', 'deadliest catch', 'third watch', 'csi: miami', 'raised by wolves', 'major crimes', "marvel's jessica jones", 'outer banks', 'what we do in the shadows', 'the strain', "the avengers: earth's mightiest heroes", 'are you afraid of the dark?', 'under the dome', 'the passage', 'dragons: race to the edge', 'land of honor', 'she-ra: princess of power', 'the outpost', 'superstore', 'black-ish', 'saved by the bell', 'emily in paris', 'the middle', 'x-men', 'ugly betty', 'star trek', 'he-man and the masters of the universe', 'talespin', 'falsa identidad', 'arrow', 'general hospital', 'hunters', 'the last ship', 'bored to death', 'wizards: tales of arcadia', 'mi corazón insiste en lola volcán', 'six feet under', 'new amsterdam', 'carnival row', 'turner & hooch', 'twin peaks', 'conversations with a killer: the ted bundy tapes', 'stargate atlantis', 'forever', 'columbo', 'ncis: new orleans', 'code black', 'kyle xy', 'the mask: animated series', "three's company", 'friday the 13th: the series', 'elementary', 'succession', "don't trust the b---- in apartment 23", 'veronica mars', 'csi: vegas', 'why women kill', 'popeye the sailor', 'younger', 'the incredible hulk', 'gilmore girls', 'man vs. wild', 'invasion', 'dennis the menace', 'invincible']

