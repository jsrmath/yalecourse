var terms = ['Valuation','Propaganda','Ideology','Democracy','Medicine','Race','Representation','Poverty','Politics','Policy','Zombies','Pirates','Ghosts','Witches','Affect','Cinema','Inequality','Slavery','Abolition','Citizenship','Belonging','Myth','Imperialism','Insurgency','Development','Research','Society','Urbanism','Documentary','Food','Migration','Trauma','Gender','Culture','Resistance','Revolt','Seniors','Families','Photography','Class','Capitalism','Context','Pilgrimage','Applications','Ethnohistory','Evolution','Language','Identity','Intersectionality','Masculinity','Dependency','Genocide','Iconography','Technology','Devices','Rivers','Civilization','Books','Architecture','Illusion','Methods','Form','Words','Pictures','Directing','Structure','Sequence','Performance','Abstraction','Editing','Interpretation','Networks','Transactions','Video','Planets','Stars','Gravity','Astrophysics','Cosmology','Astrostatistics','Biotransport','Kinetics','Images','Innovation','Biotechnology','BioMEMS','Biochemistry','Biophysics','Genetics','Anglo-Saxons','Vikings','Landscape','Mining','Modeling','Separation','Animals','Minds','Brains','Machines','Chemistry','Forensics','Materials','Thermodynamics','Molecules','Mechanisms','Laboratory','Theory','Literacy','Play','Disease','Life','Death','Genre','Philosophy','Art','Media','Television','Control','Privacy','Apps','Software','Entrepreneurship','Synthesis','Leadership','Power','Places','Things','Transition','Organizing','Agriculture','Practice','Law','Labor','Discussion','Drama','Plants','People','Ecology','Behavior','Rotations','Nation','Nature','Anime','State','Economic','Econometrics','Challenges','Trade','Economics','Institutions','Incentives','Cities','Suburbs','Psychopathology','Project','Circuits','Signals','Systems','Scientists','Logic','Energy','Fiction','Consciousness','Histories','Practices','Tragedies','Emerson','Dickinson','Melville','Modernism','Poetics','Beowulf','Studies','Modernity','Attention','Distraction','Sex','Self-Interest','Markets','Ethics','Health','History','Ethnicity','Nationalism','Change','Community','Yield','Waste','Frontiers','Justice','Climate','Environment','Function','Ecophysiology','Operations','Management','Pests','Pathogens','Parasites','Thought','Business','Advocacy','Family','Truth','Information','Disinformation','Misinformation','Conversation','Petrology','Mineralogy','Epidemiology','Responses','Cybersecurity','Cyberwar','Purpose','Citizens','Regulation','Stability','Hermeneutics','Revolutions','Christians','Muslims','Runaways','Rebels','Wenches','Rogues','Yale','Jefferson','Communism','Anticommunism','Quebec','Religion','Socialism','Sexuality','Time','Place','Jews','Reformers','Revolutionaries','India','Narratives','Authority','British','Problems','Issues','Anthropology','Theories','Writing','Governance','Children','Finance','Meaning','Mobility','Dislocation','Museum','Liturgy','Shakespeare','Music','Romances','Self-Knowledge','Rhetoric','Acting','Al-Ghazali','Maimonides','Literature','Stylistics','Morphology','Tolstoy','Dostoevsky','Estimation','Error','Fields','Approximation','Bacteria','Immunology','Microbes','Implementation','Organizations','Sufism','Analysis','Hearing','Conducting','Service','Loops','Drones','Composition','Renaissance','Drugs','Brain','Statistics','Pathophysiology','Science','Scholarship','Self-Management','Schelling','Frege','Morals','Hume','Reid','Computability','Disagreement','Teleology','Mechanism','Psychology','Optics','Conflict','Elections','Courts','Judges','Controversies','Persuasion','Bioethics','Referendums','Diversity','Mood','Love','Prophecy','War','Violence','Christ','Flourishing','Work','Ecclesiology','Ministry','Polity','Faith','Christianity','Care','Evangelism','Yoga','Meditation','Hindus','Persecution','Deviance','Caste','Norms','Neighborhoods','Schools','Choreography','Method','Hip-Hop','Empire','Africa','Plantation','Prison','Ghetto','Dance','Egypt','Government','Decolonization','Independence','Furniture','Film','Space','Poetry','Humanities','Antiracism','Freedom','Rebellion','Collaboration','Hormones','Fantasies','Eurasia','Paleoclimate','Hubs','Mobilities','Invisible','Drawing','Hierarchy','Organization','Motion','Sound','Conventions','Experiments','Production','Galaxies','Origins','Discovery','Design','Biosensing','Application','Nutrition','Education','Learning','Displays','Programming','Verification','Cryptography','Exiles','Migrants','Espionage','Heroes','Villains','Communications','Construction','Lyme','Homology','Evolutionary','Women','Crime','Wealth','Firms','Competition','Communication','Employment','Discrimination','Macroeconomics','Growth','Immigration','Mind','Improvement','Computation','Photonics','Water','Sanitation','Engines','Mass','Weather','Selfhood','Desire','Domesticity','Sensibility','Chaucer','Reporting','Portraiture','Criticism','Europe','Liberty','Money','Influence','Sustainability','Distribution','Ross','Responsibility','Borders','Earth','Resources','Atmosphere','Dendrology','Ecosystems','Landscapes','Minerals','Anatomy','Physiology','Forest','Biogeochemistry','Pollution','Conservation','Hydrology','Strategy','Wine','Herzog','Haneke','Radio','Mediation','Orientalism','Peace','Intelligence','Diplomacy','Counter-Messaging','Theology','Fashion','Oil','Foxes','Hedgehogs','Russia','Venice','Stuarts','Dissidence','Generation','Memory','Islam','Conquest','Conversion','Surveillance','Cartography','Territory','Identification','Historiography','Documents','Degeneration','Decay','Decision-Making','Painting','Byzantium','Italy','Grief','Endangerment','Integration','Deformation','Immunity','Contagion','Sinners','Past','Present','Fundamentalism','Text','Narrative','Jazz','Creativity','Conductors','Sets','Geometries','Seamanship','Process','Taxes','Globalization','Regimes','Bureaucracy','Corruption','Order','Attraction','Relationships','Bounty','Creation','Body','Land','Christology','Witchcraft','Witch-hunting','Counseling','Models','Principles','Rationality','Gods','Theater','Probability','Aging','Stigma','Computers','Populism','Composing','Bodies','Pleasures','Genders','Knowledge'];
var contexts = ['Art since 1945', 'the Slave Trade', 'the American City', 'the United States', 'Latino and Latin America', 'Context', 'the American Imaginary', 'the Atlantic World', 'Post-Emancipation Americas', 'Contemporary Africa', 'Developing Economies I', 'the Middle East and North Africa', 'Africa', 'the Great Lakes Region of Africa', 'the United States after World War II', 'the North American Imagination', 'Modern American Fiction', 'United States Society', 'American Film and Television', 'Popular Culture', 'South Asian America', 'Early America', 'the American Imagination', 'the Americas', 'American Studies', 'U.S. Urban History', 'Twentieth-Century United States', 'Recent U.S. History', 'Public Humanities', 'Applied Mathematics', 'Machine Learning and Data Mining', 'Biology', 'Japan', 'Social Context', 'Anthropology', 'the Ancient and Premodern World', 'Asian Archaeology', 'Ethnology and Social Anthropology', 'Linguistics', 'Archaeology and Prehistory', 'Biological Anthropology', 'Research for Physical Scientists', 'Optics and Quantum Electronics', 'Ancient Rome', 'Archaeology', 'Architecture', 'Design', 'Architecture II', 'Analog Photography', 'Graphic Design', 'Contemporary Photography', 'Astronomy', 'Human Investigation', 'Multicenter Clinical Trials', 'Human Genetics', 'England', 'Molecular Medicine, Pharmacology, and Physiology', 'Biomedical Informatics', 'Cell Biology', 'Biomedical Research', 'Chronic Disease Epidemiology', 'Perinatal Epidemiology', 'Epidemiology', 'Public Health', 'the Adolescent Brain', 'Cognitive Science', 'Chemistry', 'Chemical Biology', 'Organic Chemistry', 'Instrument Design and the Mechanical Arts', 'Inorganic Chemistry', 'Modern Chinese Fiction', 'the Ancient World', 'Ancient Athens', 'Classical Civilization', 'Classics', 'Computing and the Arts', 'Renaissance Love Poetry', 'Law and Literature', 'Sinophone and Chinese Studies', 'Computer Science', 'the Digital Age', 'the Digital Humanities', 'a Connected World', 'Computer Graphics', 'Computer Science and Law', 'Numerical Computation', 'Literature and Film', 'America', 'Ancient Societies', 'Early Adulthood', 'the City', 'Residence', 'Sound Design', 'Ecology and Evolutionary Biology', 'Conservation and Biodiversity Science', 'Systematics', 'Russian Foreign Policy', 'the Post-Communist Region', 'Chinese Literature', 'the World', 'Classical Chinese Poetry', 'Premodern Japanese Literature', 'Early Chinese Literature', 'East Asian Traditions', 'Post-Socialist China', 'Modern Korea, 1800 to the Present', 'India', 'Economics', 'Latin America and Beyond', 'China', 'Economic Development', 'Cooperative Game Theory', 'Macroeconomics', 'Econometrics', 'Industrial Organization', 'Labor Economics and Public Finance', 'Development', 'Education Studies', 'Environmental Health', 'Systems Biology', 'Occupational and Environmental Medicine', 'Epidemiology of Microbial Diseases', 'Infectious Diseases', 'Global Health', 'Tropical Parasitic Diseases', 'Interdisciplinary Research', 'Modern Literature', 'English Poetry II', 'American Literature', 'Comparative World English Literatures', 'the European Literary Tradition', 'Old Norse Poetry and Prose: Chronicles of the Vikings', 'Transatlantic Literature, 1819 to the Present', 'Literature', 'Movies', 'the Era of Tyrannies 1919-1960', 'Writing', 'Sound and Voice', 'Climate Change, Sustainability, and Public Health', 'Latin America', 'Iraq and Afghanistan', 'the Medieval Mediterranean', 'the Environmental Humanities', 'Practice: An International Perspective', 'Natural and Managed Systems', 'Cultural Diversity, Environmental Politics, and Social Change', 'the Global Era', 'Transition', 'Global Legal Systems', 'Research Analysis and Communication', 'Greek Literature and Film', 'Nineteenth-Century Paris', 'Global Context', 'French', 'Modern Europe', 'Geology and Geophysics', 'Climate and Energy', 'Paleobiology', 'Sedimentology', 'Political Science', 'Global Politics', 'Developing Countries', 'Data Analysis Using Stata', 'Government and Society', 'Conflict and Transition', 'the 21st Century', 'Global Development', 'Central and Eastern Europe', 'Text and Film', 'Medieval German Literature', 'Germanic Languages and Literatures', 'German Literature', 'Literature and Religion', 'Hebrew', 'American History', 'the Age of Revolutions', 'the Arab World', 'Social and Cultural History', 'America, 1793 to the Present', 'Modern America', 'the Twentieth-Century United States', 'Russia', 'Historical Context', 'Political Thought', 'Early Modern England', 'Islam', 'the Preindustrial World', 'Asia', 'the Middle East and Balkans, 1910-1925', 'Africa and the Americas', 'Muslim Lands from the Seventh to the Sixteenth Centuries', 'the Global South', 'Late Antiquity and the Middle Ages', 'Medieval Societies', 'Pre-Industrial Europe', 'Modern Mexican History: People, State, and Nation', 'Tang, Song, and Yuan Dynasties', 'Modern Chinese History', 'Japanese Documents', 'Japanese History', 'History of Science & Medicine', 'the History of Science', 'Modern Political Philosophy', 'Independence and Post-Independence', 'Modeling Health Care Decisions', 'Health Policy', 'the Ancient Americas', 'Renaissance Florence', 'the Seventeenth Century', 'Jamaica', 'the Age of Exploration', 'a World Context', 'Gothic Europe', 'Society', 'Latin American Culture', 'Statecraft', 'the Humanities', 'Clinical Research, Part III', 'Indonesian', 'Human Neuroscience', 'Neuroscience', 'the Middle Ages', 'Italian Literature', 'Literary Japanese', 'Early Christian Sources', 'Judaism and Christianity', 'American Jewish History', 'Muslim Spain', 'Babylonian Aramaic Texts', 'Spanish Literature II', 'Latin Language and Literature', 'Translation', 'U.S. English', 'Analysis', 'Quantum Groups and Representation Theory', 'STEM', 'Molecular Biology', 'Biochemistry and Biophysics', 'Molecular and Cellular Biology', 'Biophysics', 'Molecular Genetics', 'Biochemistry', 'Progress', 'Cellular Biology', 'Biochemistry and Genetics', 'Iran', 'Piano Literature and Interpretation', 'the 1730s', 'the Twentieth Century', 'American Minimalist Music', 'Early Cities, 700–1700', 'European Orchestral Music, 1950 to the Present', 'Music, Multimedia Art, and Technology', 'Composition', 'Musical Theater Composition', 'Christian Arabic Texts', 'Early Islamic History', 'Behavioral Neuroscience', 'Nursing', 'Maternal-Newborn Nursing', 'Medical-Surgical Nursing', 'Pediatric Nursing', 'Psychiatric–Mental Health Nursing', 'Diabetes Care and Management', 'Children and Adolescents', 'Care of People with Cancer or at Risk for Cancer and Their Families', 'Healthcare', 'Experimental Pathology', 'Epistemology', 'Physics', 'American Politics', 'Dialogue', 'New Haven', 'Law and Politics', 'Turkey', 'Quantitative American Politics', 'Portuguese', 'Social Decision Making', 'Human Development', 'Cognition', 'Behavior, Genetics, and Neuroscience', 'Developmental Psychology', 'Social Psychology and Personality', 'Clinical Science and Practice', 'Clinical Psychology', 'Infant Cognition', 'Child and Adolescent Therapy', 'Cognition, Emotion, and Psychopathology', 'Clinical Neuroscience', 'Human Cooperation', 'Language and Cognition', 'Cognition and Development', 'Thinking and Reasoning', 'Stereotyping and Prejudice', 'Clinical and Affective Neuroscience', 'Emotion and Relationships', 'Philosophical Psychology', 'Disinhibitory Psychopathology', 'the Fundamentals of Adolescent Brain and Behavior', 'Social Neuroscience and Behavior', 'Cognitive Neuroscience', 'Child Psychology', 'Ministerial Relationships', 'the Hebrew Bible: English Exegesis of Esther, Daniel, and Ezra-Nehemiah', 'Hellenistic Jewish Literature', 'Christian Ethics', 'and through Film', 'the American West', 'Modern American Judaism', 'Modern Poetry and Fiction', 'Early Christianity and the Middle Ages', 'the Context of Mission and World Christianity', 'South Asia and Beyond', 'Indian Religions', 'South Asian Religions', 'South Asia', 'the West', 'Indian Texts', 'Late Antiquity', 'Russian', 'Russian Literature', 'Slavic Literature', 'Statistical Decision Theory', 'Social and Behavioral Sciences', 'Science', 'Slavic Languages and Literatures', 'Contemporary Social Theory', 'Quantitative Sociology', 'Cultural Sociology', 'Spanish', 'Twenty-First-Century Spanish American Narrative', 'Kiswahili Literature', 'Motion', 'Performance', 'Musical Theater', 'Practice and Theory', 'Theater Studies', 'Vietnamese', 'Yorùbá Literature and Culture', 'America and the Black Freedom Struggle', 'American Cities', 'the Archives', 'the Church and World', 'New Orleans', 'Urban Ethnography', 'Developing Economies', 'World Music', 'South Africa', 'African Studies', 'Literature since 1800', 'Modern Latin America', 'Early National America', 'Cultural Anthropology', 'Contemporary Russia', 'West Africa', 'Evolutionary Theory', 'Sociocultural Anthropology: Design and Methods', 'the Contemporary Middle East', 'Ancient China', 'Science and Finance', 'Nanophotonics', 'Race, Gender, Class, and Queerness', 'Photography', 'the Universe', 'Astrophysics', 'Cancer Biology', 'Biomedical Engineering', 'Molecular Cell Biology', 'Epidemiology and Public Health', 'the Physical Sciences I', 'Liquids', 'Contemporary Chinese Fiction', 'Antiquity', 'Modernity', 'Greco-Roman Egypt', 'Greek and Latin Literature', 'Progress Colloquium', 'Book History: The Early Modern Book', 'the Real World', '3-D Design and Fabrication', 'Literature and Film', '20th Century British Theater History', 'Film and Literature', 'Traditional China', 'Medieval China', 'East Asian Literature and Film', 'Modern Japanese Literature', 'Modern China', 'East Asia and Beyond', 'Law, Theory, and Practice', 'Empirical Economics and Public Policy', 'American Education', 'Education', 'the Community', 'Engineering', 'Ancient Egypt', 'the American Classroom', 'Resource-Limited Settings', 'Low- and Middle-Income Countries', 'Biophysics and Biochemistry', 'Network Science', 'English Poetry I', 'Transatlantic Literature, 1688–1818', 'Literature and Theory', 'the Nineteenth Century', 'Politics, Markets, and Society', 'Politics', 'Comparative Perspective', 'the Portuguese Diaspora', 'Haiti', 'the Twenty-First Century', 'the Environmental Sciences', 'Practice', 'the Sustainable Food System', 'Postwar German Film, 1945-2007', 'Europe', 'the 1920s and 1930s', 'the Western World', 'French Literature and Art', 'Global Health Research', 'Northern Ireland', 'American Foreign Policy', 'Authoritarian Countries', 'Public Leadership', 'Northern Syria “Post-Isis”', 'Kleist, Kafka, and Arendt', 'London and Paris, 1750 to the Present', 'America since 1880', 'Britain, 1780-1914', 'Modern Russia, 1853-1953', 'Early Modern Spain and its Empire', 'Central Europe', 'South Asia, 1750-2000', 'History', 'the History of Technology', 'Medieval Europe', 'the Social and Cultural History of Britain, 1500-1750', 'the Early Modern Period', 'European Cultural History', 'the Age of Peter the Great', 'the History of Global Capitalism', 'Ottoman History', 'Japanese History to 1850', 'the History of Medicine and Public Health', 'Medicine and Public Health', 'the Modern Middle East', 'Islamic Art', 'Nineteenth-Century Sculpture', 'Art History', 'the Later Middle Ages', 'Investigative Medicine', 'Early Jewish Sources', 'Biblical Interpretation', 'Spanish Literature I', 'Contemporary Spanish American Narrative', 'Historical Linguistics', 'Real and Harmonic Analysis', 'Molecular Medicine', 'Biological Research', 'Plant Molecular Biology', 'the Middle East', 'the Arab Spring', 'Program Music, 1650–1900', 'Vienna after World War I', 'the Sixteenth Century', 'Music: Creating Value through Innovative Artistic Projects', 'the Long 1960s', 'American Culture', 'Nazi Germany', 'American Culture and Counterculture', 'Psychiatric–Mental Health Nursing Seminar', 'Adult/Gerontology Acute Care', 'Acute Care Seminar', 'Bioethics', 'Modern War', 'Cognition and Emotion', 'Infant Studies', 'Cognition and Emotion', 'Computation and Cognition', 'Gender and Psychology', 'Reformed Creeds and Confessions', 'Early Modern Europe and America', 'the American Sunday School', 'Contemporary American Short Fiction', 'History and Culture', 'Urdu Texts', 'Early Christianity', 'the Second and Third Centuries', 'the History of Israelite Religion', 'Modern Theory and Fiction', 'Mental Health and Illness', 'the Age of Xi Jinping', 'the Spanish American Short Story', 'Iberian and Latin American Studies'];

var getRandomTerm = function () {
  return terms[Math.floor(Math.random() * terms.length)];
};

var getRandomContext = function () {
  return contexts[Math.floor(Math.random() * contexts.length)];
};

var generate = function () {
  var type = Math.floor(Math.random() * 3);
  var course;

  if (type === 0) {
    course = getRandomTerm() + ' and ' + getRandomTerm() + ' in ' + getRandomContext();
  }
  else if (type === 1) {
    course = getRandomTerm() + ', ' + getRandomTerm() + ', and ' + getRandomTerm();
  }
  else {
    course = getRandomTerm() + ', ' + getRandomTerm() + ', and ' + getRandomTerm() + ' in ' + getRandomContext();
  }

  document.getElementById('courseName').innerHTML = course;
};

generate();
document.getElementById('regenerate').onclick = generate;