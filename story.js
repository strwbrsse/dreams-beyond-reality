/* Story data: each scene has speaker, location, text, and optional choices.
   Choice effects are applied to persistent state; conditionals can inspect the state. */
window.STORY = [
{id:"prologue",title:"The Girl Nobody Remembers",desc:"A forgotten face appears at the edge of an ordinary school day.",scenes:[
{speaker:"NARRATION",loc:"MINEGAHARA STATION",text:"The first thing you learn about the coast is that the sea never keeps a secret. It throws every hidden thing back onto the shore eventually.\n\nYour first morning at Minegahara High begins with salt on the wind, a train running late, and a girl in a black jacket standing where no one seems to notice her."},
{speaker:"MAI",loc:"STATION PLATFORM",text:"You're staring. If it's the uniform, I assure you it comes with no special powers." ,effects:{meetMai:true}},
{speaker:"YOU",loc:"STATION PLATFORM",text:"I was trying to work out why everyone keeps walking around you like you're a lamp post."},
{speaker:"MAI",loc:"STATION PLATFORM",text:"That's a remarkably rude way to say hello.\n\nShe smiles, but her eyes follow a passing commuter who looks straight through her. For half a second, the smile slips." ,choices:[
{text:"Ask Mai what she saw.",effects:{mai: {trust:1,understanding:1},clues:["The Unnoticed Girl"],promises:["Ask Mai directly"]},next:4},
{text:"Pretend you didn't notice; give her privacy.",effects:{mai:{trust:1},playerConfidence:1},next:5},
{text:"Call out to the commuter and test the strange effect.",effects:{clues:["Selective Blindness"],playerConfidence:1},next:6}
]},
{speaker:"NARRATION",loc:"STATION PLATFORM",text:"The train doors close. In the glass, Mai's reflection remains for a fraction of a second after she has stepped away. Then the platform is ordinary again."},
{speaker:"MAI",loc:"STATION STAIRS",text:"You really can see me, can't you? Don't answer too quickly. I might decide you're a hallucination with good hair."},
{speaker:"NARRATION",loc:"STATION STAIRS",text:"You let the question rest between you. Mai looks relieved by the absence of pressure, though she pretends not to be."},
{speaker:"NARRATION",loc:"STATION PLATFORM",text:"The commuter turns at your voice, confused. He apologizes for blocking the way—then looks directly at Mai and asks whether you are talking to yourself."},
{speaker:"SAKUTA",loc:"SCHOOL GATE",text:"A transfer student who talks to empty space. Either you've adapted quickly, or this school has already started working on you.\n\nSakuta Azusagawa falls into step beside you, hands in his pockets." ,effects:{meetSakuta:true}},
{speaker:"SAKUTA",loc:"SCHOOL GATE",text:"People forget what they can't fit into the version of the world they've agreed to believe. That's the theory, anyway. The other theory is that teenagers are weird."},
{speaker:"NARRATION",loc:"EMPTY CLASSROOM",text:"That night, you dream of a classroom with no windows. A girl sits at the far desk, drawing a shoreline on the blackboard. Every time you try to read her name, the chalk dust rises like snow."},
{speaker:"UNKNOWN GIRL",loc:"THE DREAM CLASSROOM",text:"If you remember me tomorrow, please don't tell me I'm only a dream."},
{speaker:"NARRATION",loc:"THE DREAM CLASSROOM",text:"You wake with chalk on your fingertips. Outside, dawn colors the ocean pink. A message waits on your phone from an unknown number: DON'T LET THE AFTERNOON HAPPEN AGAIN." ,effects:{dreams:1,clues:["Chalk on Your Fingers"],unlockNext:true}}
]},
{id:"ch1",title:"A World Out of Focus",desc:"The new student discovers that being seen and being known are not the same thing.",scenes:[
{speaker:"SAKUTA",loc:"CLASSROOM 2-B",text:"Welcome to the club nobody officially formed. Our membership requirements are simple: notice something impossible, then be annoying enough to investigate it."},
{speaker:"RIO",loc:"SCIENCE ROOM",text:"Adolescence Syndrome is a convenient label for experiences people can't explain. It is not an explanation itself. Keep that distinction clear and I may tolerate you." ,effects:{meetRio:true}},
{speaker:"MAI",loc:"ROOFTOP",text:"Everyone has a version of me in their head. The actress, the rumor, the girl from a poster. The problem starts when the real person can't get through the crowd."},
{speaker:"YOU",loc:"ROOFTOP",text:"When I saw you at the station, I didn't know who you were. I only knew you were there." ,choices:[
{text:"Tell Mai you want to know the person, not the image.",effects:{mai:{trust:1,affection:1,understanding:1},promises:["See Mai as herself"]},next:4},
{text:"Ask Sakuta to help test the phenomenon.",effects:{sakuta:{trust:1},clues:["Visibility Fades Under Attention"]},next:5},
{text:"Investigate the dream classroom on your own.",effects:{clues:["Room 2-B Has No Window"],dreams:1,playerConfidence:1},next:6}
]},
{speaker:"MAI",loc:"ROOFTOP",text:"Careful. If you keep saying things like that, I might start expecting you to mean them.\n\nFor once, she doesn't turn the moment into a joke."},
{speaker:"SAKUTA",loc:"LIBRARY",text:"We tested it. People don't fail to see Mai exactly. They edit the moment before it reaches memory. Like a bad cut in a film."},
{speaker:"NARRATION",loc:"DREAM CLASSROOM",text:"The desk at the back has your name carved into it—though you have never been in this room. Beneath it, someone has scratched three words: THE SEA REMEMBERS." ,effects:{clues:["The Sea Remembers"],dreams:1}},
{speaker:"NARRATION",loc:"SCHOOL GATE",text:"By sunset, you understand the first rule: the dream is not a place you visit. It is a place that visits you. And something there knows what you choose." ,effects:{unlockNext:true}}
]},
{id:"ch2",title:"The Looping Afternoon",desc:"A single afternoon repeats until someone stops pretending everything is fine.",scenes:[
{speaker:"NARRATION",loc:"SCHOOL CORRIDOR",text:"At 3:17 p.m., the bell rings. A paper cup tips over. Someone laughs in the courtyard. Then the lights flicker—and the clock returns to 3:17."},
{speaker:"TOMOE",loc:"COURTYARD",text:"Okay, don't freak out, but I think I've lived this exact afternoon three times. Unless I have a really boring destiny." ,effects:{meetTomoe:true}},
{speaker:"RIO",loc:"SCIENCE ROOM",text:"A loop needs a boundary condition. Something repeats because the system cannot settle. What emotional variable is refusing to resolve?"},
{speaker:"NARRATION",loc:"COURTYARD",text:"Tomoe keeps checking her phone. Every loop, a message from her friends appears, then disappears before she can answer. She laughs louder each time." ,choices:[
{text:"Ask Tomoe what she is afraid to say.",effects:{tomoe:{trust:1,understanding:2},clues:["Unsent Message"],promises:["Listen without judging"]},next:4},
{text:"Use the loop to gather precise evidence with Rio.",effects:{rio:{trust:1},clues:["3:17 Repeats"],playerConfidence:1},next:5},
{text:"Tell everyone to stop acting like this is normal.",effects:{sakuta:{trust:1},tomoe:{trust:-1},playerConfidence:1},next:6}
]},
{speaker:"TOMOE",loc:"EMPTY GYM",text:"I keep agreeing with people because I'm scared the second I don't, they'll find someone easier to be friends with. I know it's stupid. I just don't know how to stop."},
{speaker:"RIO",loc:"SCIENCE ROOM",text:"The loop resets around the unsent message. Not proof of causation, but it gives us a humane hypothesis: the phenomenon is holding the moment open until she can choose honestly."},
{speaker:"SAKUTA",loc:"COURTYARD",text:"Yelling at a supernatural event is a strategy. Not a good one, but it does make you memorable."},
{speaker:"NARRATION",loc:"COURTYARD",text:"The clock reaches 3:17 again. This time, Tomoe types a reply that isn't designed to please anyone. The bell rings once. The afternoon finally moves forward." ,effects:{clues:["The Loop Breaks with Honesty"],unlockNext:true}}
]},
{id:"ch3",title:"The Girl in the Empty Classroom",desc:"The missing student in your dreams leaves traces in the waking world.",scenes:[
{speaker:"NARRATION",loc:"OLD CLASSROOM",text:"The classroom exists on the school map, but the door opens onto a storage closet. In dreams, the windows look out over an ocean that should be miles away."},
{speaker:"SAKUTA",loc:"LIBRARY",text:"Three people remember a girl called Natsume. None agree on her face. That's a terrible witness statement and a pretty good reason to keep looking."},
{speaker:"MAI",loc:"OLD CLASSROOM",text:"Maybe she doesn't need someone to prove she existed. Maybe she needs someone to stop treating her like a puzzle."},
{speaker:"YOU",loc:"OLD CLASSROOM",text:"How do we help someone nobody can find?",choices:[
{text:"Collect ordinary details: handwriting, habits, small kindnesses.",effects:{clues:["Natsume's Paper Crane","A Seat Kept Empty"],understanding:1},next:4},
{text:"Ask Rio to map every inconsistency.",effects:{rio:{trust:1},clues:["Map of Missing Details"]},next:5},
{text:"Enter the dream and ask Natsume what she wants.",effects:{dreams:1,clues:["Natsume's Request"],playerConfidence:1},next:6}
]},
{speaker:"NARRATION",loc:"LIBRARY",text:"A folded paper crane sits inside a returned book. On one wing, in careful handwriting: 'I liked the sound of people being happy in the next room.'"},
{speaker:"RIO",loc:"SCIENCE ROOM",text:"The missing details cluster around moments when people chose not to include someone. The phenomenon may be turning social invisibility into literal absence."},
{speaker:"NATSUME",loc:"THE DREAM CLASSROOM",text:"I didn't want everyone to love me. I wanted one person to notice when I stopped showing up."},
{speaker:"NARRATION",loc:"SEASIDE PATH",text:"You leave a crane on the classroom windowsill. In the next morning's attendance sheet, a new name appears in pale ink: Natsume. No one remembers writing it. Several people feel they should have." ,effects:{clues:["Natsume's Name Returns"],dreams:1,unlockNext:true}}
]},
{id:"ch4",title:"Reflections of Another Self",desc:"Nodoka and Rio confront the distance between an image and a life.",scenes:[
{speaker:"NODOKA",loc:"DRESSING ROOM",text:"When everyone compares you to someone they adore, you learn to hate the mirror for being accurate. I know that sounds dramatic. It's also true." ,effects:{meetNodoka:true}},
{speaker:"RIO",loc:"SCIENCE ROOM",text:"Two conflicting accounts of the same person are appearing in photographs. One is the person everyone expects. The other is the person she believes she ought to be."},
{speaker:"NODOKA",loc:"MUSIC ROOM",text:"My sister can be kind and I can still feel jealous. Those facts don't cancel each other out. I hate that I need them both to be true."},
{speaker:"YOU",loc:"MUSIC ROOM",text:"What would you choose if nobody were keeping score?",choices:[
{text:"Tell Nodoka she doesn't have to imitate anyone.",effects:{nodoka:{trust:2,understanding:1},clues:["The Unscored Reflection"]},next:4},
{text:"Ask Rio to compare the two sets of evidence.",effects:{rio:{trust:1},clues:["Mirror Image Pattern"]},next:5},
{text:"Admit you've also performed a version of yourself for others.",effects:{nodoka:{trust:1},playerConfidence:1,understanding:1},next:6}
]},
{speaker:"NODOKA",loc:"MUSIC ROOM",text:"I don't need you to tell me I'm better. I need to believe I can be different without becoming less. Maybe that's a smaller wish, but it's mine."},
{speaker:"RIO",loc:"SCIENCE ROOM",text:"The reflection disappears when Nodoka describes herself without comparison. The supernatural part is real enough to study. The hurt underneath it was real first."},
{speaker:"SAKUTA",loc:"SCHOOL ROOFTOP",text:"A mirror is a terrible judge. It only knows how to repeat what stands in front of it."},
{speaker:"NARRATION",loc:"SCHOOL ROOFTOP",text:"The two photographs now show the same girl. Not a perfect girl. A girl in motion, looking away from the camera." ,effects:{clues:["One Person, Many Truths"],unlockNext:true}}
]},
{id:"ch5",title:"The Memory Between Us",desc:"Kaede asks for support that leaves room for her own pace.",scenes:[
{speaker:"KAEDE",loc:"AZUSAGAWA HOME",text:"I made a list of things I'd like to try. It's not a very brave list. Mostly small things. But I wrote it myself, so I think it counts." ,effects:{meetKaede:true}},
{speaker:"SAKUTA",loc:"AZUSAGAWA HOME",text:"It counts. You don't have to turn recovery into a performance for anyone. Including me."},
{speaker:"NARRATION",loc:"SEASIDE PATH",text:"Your dream shows a hallway lined with doors. Behind each one is a memory someone has chosen not to open. A door marked KAEDE glows softly, but the handle is on her side."},
{speaker:"YOU",loc:"AZUSAGAWA HOME",text:"How should I help?",choices:[
{text:"Offer to accompany Kaede on one small goal, at her pace.",effects:{kaede:{trust:2,understanding:1},clues:["Kaede's List"],promises:["Respect Kaede's pace"]},next:4},
{text:"Ask if she wants quiet company instead of advice.",effects:{kaede:{trust:1,understanding:2},promises:["Respect Kaede's pace"]},next:5},
{text:"Try to solve the dream-door mystery immediately.",effects:{clues:["The Door with No Handle"],dreams:1,playerConfidence:1},next:6}
]},
{speaker:"KAEDE",loc:"BOOKSTORE",text:"Will you walk with me to the bookstore? I might not go inside today. I just want to get as far as the sign.\n\nYou walk beside her. At the sign, she decides to take one more step."},
{speaker:"KAEDE",loc:"LIVING ROOM",text:"You don't have to say anything. It's nice when silence doesn't feel like a test."},
{speaker:"NARRATION",loc:"THE DREAM HALLWAY",text:"You leave the glowing door closed. It opens a little anyway—not because you forced it, but because someone on the other side felt safe enough to turn the handle." ,effects:{clues:["A Door Opens Inward"],dreams:1,unlockNext:true}}
]},
{id:"ch6",title:"The Dream That Predicts Tomorrow",desc:"Shoko reveals that every possible future asks something of the present.",scenes:[
{speaker:"SHOKO",loc:"SHICHIRIGAHAMA BEACH",text:"You look tired. Dreams can be heavy when you try to carry every version of tomorrow at once." ,effects:{meetShoko:true}},
{speaker:"YOU",loc:"SHICHIRIGAHAMA BEACH",text:"Who are you? And why do my dreams feel like memories I haven't earned?"},
{speaker:"SHOKO",loc:"SHICHIRIGAHAMA BEACH",text:"I'm someone who learned that a possible future can leave a shadow. You aren't seeing one fixed tomorrow. You're seeing the places where people might still choose differently."},
{speaker:"RIO",loc:"BEACH STAIRWAY",text:"Your dream reports match events that haven't happened yet—but only when the people involved have unresolved choices. This is not prediction as certainty. It's sensitivity to possibility."},
{speaker:"SHOKO",loc:"BEACH",text:"Every time you enter someone else's dream, you leave a little of your own certainty behind. Soon you may not remember which feelings began as yours." ,choices:[
{text:"Accept the cost, but set a limit on how often you enter.",effects:{shoko:{trust:1},clues:["Dreams Have a Cost"],promises:["Keep your own memories"],dreams:1},next:5},
{text:"Refuse to enter another dream until you understand the rules.",effects:{rio:{trust:1},clues:["A Boundary for the Dreamer"],playerConfidence:1},next:6},
{text:"Ask Shoko what future she is trying to prevent.",effects:{shoko:{trust:2},clues:["The Future Shoko Fears"],dreams:1},next:7}
]},
{speaker:"SHOKO",loc:"BEACH",text:"The future I'm afraid of is the one where everyone is remembered as a problem to solve, and no one is allowed to be a person."},
{speaker:"NARRATION",loc:"DREAM OCEAN",text:"You wake with seawater on your sleeve, though your room is dry. For the first time, your own childhood memory is blurry: the face of the person who taught you to fold paper cranes."},
{speaker:"SAKUTA",loc:"TRAIN PLATFORM",text:"Then we don't let you do this alone. A power that takes something from you isn't a debt you have to pay in silence." ,effects:{clues:["The Dreamer Is Not a Vessel"],unlockNext:true}}
]},
{id:"ch7",title:"The Day Reality Broke",desc:"Every missing detail returns to one place: a future built from everyone's silence.",scenes:[
{speaker:"NARRATION",loc:"MINEGAHARA HIGH",text:"At noon, the school bell rings thirteen times. Students pause mid-sentence. Every window reflects the empty classroom, even the ones facing the sea."},
{speaker:"RIO",loc:"SCIENCE ROOM",text:"The clues form a pattern. The dreams connect where people have hidden the same fear: that being truly known will make them easier to reject."},
{speaker:"MAI",loc:"SCHOOL CORRIDOR",text:"I spent years believing that if I controlled the image, I could protect the person. All I did was make the distance look elegant."},
{speaker:"SAKUTA",loc:"SCHOOL CORRIDOR",text:"The dream is building a world where nobody can be hurt by being forgotten. The price is that nobody can change, either."},
{speaker:"SHOKO",loc:"EMPTY CLASSROOM",text:"The first dream began before you transferred here. Someone wished for a place where the people they loved would never disappear. Your mind gave that wish a door."},
{speaker:"YOU",loc:"EMPTY CLASSROOM",text:"Then what do we do?",choices:[
{text:"Gather everyone and tell the truth, even if it hurts.",effects:{clues:["Truth Shared"],promises:["Keep your own memories"],playerConfidence:2,mai:{trust:1},sakuta:{trust:1}},next:6},
{text:"Protect everyone's private stories and close the dream quietly.",effects:{kaede:{trust:1},nodoka:{trust:1},promises:["Respect Kaede's pace"],playerConfidence:1},next:7},
{text:"Use every clue to enter the center of the dream yourself.",effects:{dreams:2,clues:["Entered the Dream's Center"],playerConfidence:2},next:8}
]},
{speaker:"NATSUME",loc:"THE DREAM CLASSROOM",text:"I wasn't the first person to disappear. I was just the first one the dream could make a room for. Everyone left a little silence behind. The silence learned to speak."},
{speaker:"MAI",loc:"SCHOOL CORRIDOR",text:"We don't have to tell the world every secret. But we can't keep using secrecy as a substitute for trust."},
{speaker:"NARRATION",loc:"THE DREAM'S CENTER",text:"At the center is a paper crane made from a page of your old notebook. The handwriting is yours. The date is from years before you came to this town." ,effects:{clues:["The First Crane"],dreams:1,unlockNext:true}}
]},
{id:"ch8",title:"Beyond the Dream",desc:"The group must decide what it means to remember someone without trapping them in a story.",scenes:[
{speaker:"NARRATION",loc:"THE DREAM'S CENTER",text:"The classroom floor gives way to a shoreline beneath a violet sky. Every person you've met stands at the edge of the water, each holding a small light: a memory they chose to share."},
{speaker:"RIO",loc:"DREAM SHORE",text:"The phenomenon has no single owner now. It's become a feedback loop of unspoken fears. To end it, we need a choice that doesn't erase the feelings that created it."},
{speaker:"SAKUTA",loc:"DREAM SHORE",text:"You can close the door. You can leave it open. Or you can stop treating it like a door that only you have to hold."},
{speaker:"MAI",loc:"DREAM SHORE",text:"Whatever you choose, don't turn yourself into the price. I won't call that noble. I'll call it a tragedy with good lighting."},
{speaker:"YOU",loc:"DREAM SHORE",text:"I know what I want to do.",choices:[
{text:"Share the truth and let everyone choose what to remember.",effects:{clues:["Truth Shared"],playerConfidence:2,mai:{trust:1,affection:1},sakuta:{trust:1},shoko:{trust:1}},ending:"true"},
{text:"Choose Mai, and promise to meet the future together.",effects:{mai:{trust:2,affection:3,understanding:1},promises:["See Mai as herself"],playerConfidence:1},ending:"romance"},
{text:"Trust the whole group to carry the memories together.",effects:{tomoe:{trust:1},rio:{trust:1},kaede:{trust:1},nodoka:{trust:1},sakuta:{trust:1},clues:["Shared Burden"],playerConfidence:1},ending:"friendship"},
{text:"Close the dream by giving up your clearest memory of home.",effects:{dreams:2,clues:["Memory Given to the Sea"]},ending:"bittersweet"}
],secret:{text:"Fold the first crane and ask who made it.",effects:{clues:["Origin Remembered"],dreams:1},ending:"secret",requires:{clues:["The First Crane","Chalk on Your Fingers","The Sea Remembers"]}}}
]},
{id:"epilogue",title:"When Spring Returns",desc:"The world is ordinary again, but ordinary no longer means unchanged.",scenes:[
{speaker:"NARRATION",loc:"MINEGAHARA STATION",text:"Spring arrives without a miracle. The trains run on time. The school bell rings the correct number of times. The sea continues its old argument with the shore."},
{speaker:"MAI",loc:"STATION PLATFORM",text:"People remember me today. Not everyone remembers everything. But I can live with being a person instead of a perfect image."},
{speaker:"KAEDE",loc:"SCHOOL GATE",text:"I went inside the bookstore yesterday. I bought a notebook. I don't know what I'll write in it yet, but I like that it's waiting."},
{speaker:"SAKUTA",loc:"SCHOOL GATE",text:"So, transfer student. Do you think you've learned anything?"},
{speaker:"YOU",loc:"SCHOOL GATE",text:"That remembering someone isn't the same as deciding who they are. And that I don't have to carry every dream alone."},
{speaker:"NARRATION",loc:"SEASIDE PATH",text:"A paper crane rests on the railing. It lifts in the sea wind, then settles again. This time, you don't need to chase it to know it was there." ,effects:{complete:true}}
]}
];