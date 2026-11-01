const rounds=[
{section:'Political History',name:'Round 1 · Type it',mode:'text',points:1,q:[
['Who was the first President of the United States?','George Washington'],['In what year did the Berlin Wall fall?','1989'],['What ancient city was the capital of the Roman Empire?','Rome'],['Which British prime minister was nicknamed the Iron Lady?','Margaret Thatcher'],['What is the name of the 1215 English charter limiting royal power?','Magna Carta'],['Who led the Soviet Union during the Cuban Missile Crisis?','Nikita Khrushchev'],['Which country was ruled by Nelson Mandela as president from 1994?','South Africa'],['Who was the first woman to serve as UK prime minister?','Margaret Thatcher'],["Who was the first emperor of Rome?","Augustus"],["Which South African leader was imprisoned on Robben Island for many years?","Nelson Mandela"],["Who was the British monarch when the Spanish Armada was defeated in 1588?","Elizabeth I"],["Which US president resigned in 1974?","Richard Nixon"]]},
{section:'Political History',name:'Round 2 · Four options',mode:'choice',points:1,q:[
['Which revolution began in 1789?','French Revolution',['American Revolution','French Revolution','Russian Revolution','Glorious Revolution']],['Who was US president during most of the American Civil War?','Abraham Lincoln',['Ulysses S. Grant','Andrew Johnson','Abraham Lincoln','James Buchanan']],['Which treaty formally ended World War I with Germany?','Treaty of Versailles',['Treaty of Paris','Treaty of Versailles','Treaty of Utrecht','Treaty of Tordesillas']],['The ancient democracy of Athens developed in which modern country?','Greece',['Italy','Greece','Turkey','Egypt']],['Who was the first chancellor of a unified Germany in 1871?','Otto von Bismarck',['Konrad Adenauer','Otto von Bismarck','Willy Brandt','Helmut Kohl']],['Which country gained independence from Britain in 1947?','India',['Kenya','India','Nigeria','Malaysia']],['Who issued the Emancipation Proclamation?','Abraham Lincoln',['Thomas Jefferson','George Washington','Abraham Lincoln','Theodore Roosevelt']],['In which city was the UN Charter signed in 1945?','San Francisco',['Geneva','New York','London','San Francisco']],['Which empire was led by Suleiman the Magnificent?','Ottoman Empire',['Mongol Empire','Ottoman Empire','Austro-Hungarian Empire','Mughal Empire']],["Which document was adopted by the United Nations General Assembly in 1948?","Universal Declaration of Human Rights",["Geneva Convention", "Universal Declaration of Human Rights", "Magna Carta", "Treaty of Rome"]],["Who was the US president during the Cuban Missile Crisis?","John F. Kennedy",["Lyndon B. Johnson", "John F. Kennedy", "Dwight Eisenhower", "Richard Nixon"]],["Which empire was ruled by the Habsburg dynasty until 1918?","Austro-Hungarian Empire",["Ottoman Empire", "British Empire", "Austro-Hungarian Empire", "Russian Empire"]]]},
{section:'Political History',name:'Round 3 · Closest wins',mode:'closest',points:3,q:[
['In which year was the Magna Carta sealed?',1215],['In what year did the French Revolution begin?',1789],['In what year did the United Nations officially begin?',1945],['In which year was the US Declaration of Independence adopted?',1776],['In what year was Nelson Mandela released from prison?',1990],['In what year did the Soviet Union dissolve?',1991],["In which year was the Russian October Revolution?",1917],["In which year did India become independent?",1947],["In which year was the Berlin Wall built?",1961],["In which year did the first modern Olympic Games take place?",1896]]},
{section:'Football',name:'Round 1 · Elimination',mode:'text',points:1,q:[
['Which nation won the first FIFA World Cup in 1930?','Uruguay'],['Which English club plays home matches at Anfield?','Liverpool'],['How many players start on the pitch for one football team?','11'],['What colour card sends a player off?','Red'],['Which country hosted the 2010 FIFA World Cup?','South Africa'],['What is the name of FC Barcelona’s famous stadium?','Camp Nou'],['Which nation won the 2014 FIFA World Cup?','Germany'],['Which French footballer scored twice in the 1998 World Cup final?','Zinedine Zidane'],["Which country won the UEFA Euro 2016 tournament?","Portugal"],["Which legendary Brazilian footballer was nicknamed O Rei (The King)?","Pelé"],["Which club did Steven Gerrard captain for most of his senior career?","Liverpool"],["What is the term for three goals scored by one player in a match?","Hat-trick"]]},
{section:'Football',name:'Final · Four options',mode:'choice',points:1,q:[
['Which club won the first Premier League title in 1992–93?','Manchester United',['Arsenal','Blackburn Rovers','Manchester United','Liverpool']],['Which country won the 2022 men’s FIFA World Cup?','Argentina',['France','Argentina','Brazil','Croatia']],['What does VAR stand for?','Video Assistant Referee',['Video Assistant Referee','Virtual Action Review','Verified Assistant Replay','Video Analysis Room']],['Which club is nicknamed the Rossoneri?','AC Milan',['Inter Milan','Juventus','AC Milan','Napoli']],['Which player is famously known as “The Egyptian King” by Liverpool fans?','Mohamed Salah',['Sadio Mané','Mohamed Salah','Roberto Firmino','Virgil van Dijk']],['What is the maximum number of points from a win in a league match?','3',['1','2','3','4']],['What is a clean sheet?','Conceding no goals',['Scoring three goals','Winning away','Conceding no goals','No yellow cards']],['What is Liverpool FC’s home stadium?','Anfield',['Old Trafford','Goodison Park','Anfield','Stamford Bridge']],["Which nation won UEFA Euro 2020, played in 2021?","Italy",["England", "Italy", "Spain", "France"]],["Which Italian club plays its home matches at the Stadio Diego Armando Maradona?","Napoli",["Roma", "Lazio", "Napoli", "Atalanta"]],["Which goalkeeper won the Golden Glove at the 2022 men’s World Cup?","Emiliano Martínez",["Hugo Lloris", "Thibaut Courtois", "Emiliano Martínez", "Yassine Bounou"]],["Which player scored the winning goal in the 2014 men’s World Cup final?","Mario Götze",["Thomas Müller", "Mario Götze", "André Schürrle", "Miroslav Klose"]]]},
{section:'Football',name:'Final · Closest wins',mode:'closest',points:3,q:[
['In which year was Liverpool FC founded?',1892],['How many teams competed at the 2022 men’s FIFA World Cup?',32],['In which year was the Premier League founded?',1992],['How many minutes is regular time in a professional football match?',90],['In which year did England win the men’s World Cup?',1966],['How many World Cups had Brazil won by the end of 2022?',5],["In which year did the first men’s FIFA World Cup take place?",1930],["How many teams played at the 2018 men’s FIFA World Cup?",32],["How many goals did France score in the 2018 men’s World Cup final?",4],["In which year was the first UEFA European Championship held?",1960]]}
];
// Expanded question sets: 20 questions per round (two independent games).
rounds[0].q.push(
 ['Who was the leader of the Indian independence movement known for nonviolent resistance?','Mahatma Gandhi'],
 ['Which US president delivered the Gettysburg Address?','Abraham Lincoln'],
 ['What is the surname of the French emperor defeated at Waterloo?','Napoleon'],
 ['Who became the first president of independent Ghana in 1960?','Kwame Nkrumah'],
 ['Which Egyptian queen formed alliances with Julius Caesar and Mark Antony?','Cleopatra'],
 ['Who was the first President of the Russian Federation after the Soviet Union dissolved?','Boris Yeltsin'],
 ['Which queen ruled the United Kingdom for most of the nineteenth century?','Queen Victoria'],
 ['Which civil rights leader delivered the I Have a Dream speech in 1963?','Martin Luther King Jr.']
);
rounds[1].q.push(
 ['Which US president launched the New Deal?','Franklin D. Roosevelt',['Harry S. Truman','Franklin D. Roosevelt','Herbert Hoover','Calvin Coolidge']],
 ['Who became the first woman chancellor of Germany in 2005?','Angela Merkel',['Ursula von der Leyen','Angela Merkel','Annalena Baerbock','Hannelore Kraft']],
 ['Which country was the site of the 1979 Islamic Revolution?','Iran',['Iraq','Egypt','Iran','Turkey']],
 ['Which politician became president of Poland in 1990 after leading Solidarity?','Lech Wałęsa',['Wojciech Jaruzelski','Lech Wałęsa','Aleksander Kwaśniewski','Donald Tusk']],
 ['In which city did the 1917 Bolshevik Revolution take place?','Petrograd',['Moscow','Kyiv','Petrograd','Minsk']],
 ['Which document declared the thirteen American colonies independent in 1776?','Declaration of Independence',['Bill of Rights','Articles of Confederation','Declaration of Independence','Federalist Papers']],
 ['Which British prime minister served during the Suez Crisis of 1956?','Anthony Eden',['Winston Churchill','Harold Wilson','Anthony Eden','Clement Attlee']],
 ['Which African nation was formerly called the Gold Coast?','Ghana',['Kenya','Ghana','Zambia','Uganda']]
);
rounds[2].q.push(
 ['In what year did the Battle of Waterloo take place?',1815],
 ['In what year was the US Constitution signed?',1787],
 ['In what year did the Suez Crisis begin?',1956],
 ['In what year did the Republic of Ghana gain independence?',1957],
 ['In what year did the Cuban Missile Crisis occur?',1962],
 ['In what year did the Ottoman Empire officially end?',1922],
 ['In what year did the United Kingdom join the European Economic Community?',1973],
 ['In what year did the Tiananmen Square protests take place?',1989],
 ['In what year did the Rwandan genocide occur?',1994],
 ['In what year was the first woman elected prime minister of New Zealand?',1997]
);
rounds[3].q.push(
 ['Which country won the 2006 men’s FIFA World Cup?','Italy'],
 ['Which club is known as the Red Devils and plays at Old Trafford?','Manchester United'],
 ['Who scored the Hand of God goal at the 1986 men’s World Cup?','Diego Maradona'],
 ['Which country won the 2018 men’s FIFA World Cup?','France'],
 ['What is the name for a match between two rival teams from the same city or region?','Derby'],
 ['Which country won the inaugural UEFA European Championship in 1960?','Soviet Union'],
 ['Which Portuguese forward wore number 7 at Real Madrid and Manchester United?','Cristiano Ronaldo'],
 ['Which German club plays home matches at the Allianz Arena?','Bayern Munich']
);
rounds[4].q.push(
 ['Which club won the 2005 UEFA Champions League final after trailing 3–0?','Liverpool',['AC Milan','Liverpool','Chelsea','Barcelona']],
 ['Which nation won the 2002 men’s FIFA World Cup?','Brazil',['Germany','Argentina','Brazil','Italy']],
 ['Who won the 2018 Ballon d’Or?','Luka Modrić',['Cristiano Ronaldo','Lionel Messi','Luka Modrić','Antoine Griezmann']],
 ['Which London club plays at Stamford Bridge?','Chelsea',['Arsenal','Tottenham Hotspur','Chelsea','West Ham United']],
 ['Which country hosted the 1994 men’s FIFA World Cup?','United States',['Italy','Mexico','United States','France']],
 ['Which footballer was known as El Niño?','Fernando Torres',['David Villa','Fernando Torres','Sergio Ramos','Xabi Alonso']],
 ['Which Spanish club is nicknamed Los Blancos?','Real Madrid',['Atlético Madrid','Sevilla','Real Madrid','Valencia']],
 ['Who scored the only goal in the 2010 men’s FIFA World Cup final?','Andrés Iniesta',['David Villa','Xavi','Andrés Iniesta','Fernando Torres']]
);
rounds[5].q.push(
 ['In which year did Liverpool win the UEFA Champions League final in Istanbul?',2005],
 ['How many goals did Miroslav Klose score in men’s FIFA World Cup tournaments?',16],
 ['In which year did the first Premier League season begin?',1992],
 ['How many teams participated in the 1998 men’s FIFA World Cup?',32],
 ['In which year did the FIFA Women’s World Cup first take place?',1991],
 ['How many European Cups / UEFA Champions League titles had Real Madrid won by the end of the 2023–24 season?',15],
 ['In which year did Leicester City win the Premier League?',2016],
 ['How many goals were scored in the 2022 men’s FIFA World Cup final before the penalty shootout?',6],
 ['In which year did Mohamed Salah first sign for Liverpool FC?',2017],
 ['How many points did Manchester City earn in the 2017–18 Premier League season?',100]
);

module.exports=rounds;
