"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {

};

// Define the notifications used in the game
let notifications = {

};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
	"Cafe_Day": "Cafe_day.jpg",
	"Cafe_Night": "Cafe_night.jpg",
	"Classroom": "Classroom.jpg",
	"Hall": "Hall.jpg",
	"Park": "Park.png",
	"Risa_Room": "Risa_room.jpg",
	"Room": "Room.jpg",
	"Screen": "Screen.png"

};

// Define the Characters
const characters = {
	"n": {
		"Name": " ",
		"Color": "#5bcaff",
	},
	"s": {
		"Name": "Seigi",
		"Color": "#EE1414",
		"Images" : {
			"IMG": "Seigi.png"
		}
	},
	"r": {
		"Name": "Risa",
		"Color": "#FD85ED",
		"Images" : {
			"Happy": "Risa 1.png",
			"Serious": "Risa 2.png"
		}
	},
	"c": {
		"Name": "Reiner",
		"Color": "#44DE2F",
		"Images" : {
			"IMG": "Reiner.png"
		}
	},
	"f": {
		"Name": "Nomikata Sr.",
		"Color": "#6327EB",
		"Images" : {
			"IMG": "Nomikata Sr.png"
		}
	},
	"lec": {
		"Name": "Lecturer",
		"Color": "#A7A6A6",
	},
	"q": {
		"Name": "???",
		"Color": "#FFFFFF",
	},
};

let script = {
	// The game starts here.
	"Start": [
		"scene rgb(0,0,0)",
		"n My awakening is dull.",
		"n I don't really seem to dream much these days, but all I seem to recall from the night is shards. I don't know why, but it's always shards. Whether it be a single sliver rotating, an endless torrent falling upon me or a glass wall shattering around me, I am always alone in darkness surrounded by them.",
		"n Perhaps as a Magus, shards are a fundamental part of my being. Now as far as I can recall there are no climactic point in my life involving these things thus far. ",
		"n Perhaps it's a part of my Origin or what have you, but I haven't seen it reflected in my craft at all. Perhaps that’s a good things, as I can't imaging splintering and shattering into pieces to be a good thing in any scenario-",

		"scene Room with fadeIn",
		"s Hmm?",

		"n The sunlight of early spring is passing through the windows into my face. Pulling myself out of my daze, I realise what it is that's wrong. Sunlight shouldn't even be waking me up in the first place.", 
		"n Gazing over to my alarm clock, I can see no light at all. My roommate must have unplugged it at some point last night.",

		"s What a Prick.",

		"n Anyways. Reaching over to my bedside, I pick up my wrist watch. According to it, it's 9:04am. I've already missed my first lecture. A part of me is fine with that as I'd just have the elite look down on me quite literally. ",
		"n Then again, they'll probably insult me for being too lazy to attend. Those stuck up oafs don't seem to realise not everyone has the privilege of being born into money and power.",
		"n So I weigh my options. What will I, Seigi Nomikata, do?",

		{"Choice":{
			"Lecture":{
				"Text": "Try and save face by going to the lecture.",
				"Do": "jump Class"
			},
			"Skip":{
				"Text": "Skip Class.",
				"Do": "jump Skip"
			},
		}}

	],

	"Skip": [
		"n There's no point in going now. I'd only be shamed if I show my face.",
		"n Just thinking about the sneering snickers of the elite as I enter the room fills me with anger. That's a big no thank you from me.",
		"n Well, I'll look on the bright side and just consider this a rare day off...",

		"scene Cafe_Day with fadeInDown",

		"n I decide to waste the day away at the local Cafe Aldabert. It's a popular hangout and locale for magi students like me. I don't actually have money for fancy coffee, but the old store owner's nice enough to let me hang out here regardless.",
		"n I have an important meeting to attend tonight, but until then I wax the hours away chilling in the serene atmosphere of the rustic cafe...",

		"show r Serious with fadeIn",
		"q Oh?",
		"s Ah.",
		"n That is, until I see a familiar face.",

		"show r Happy with fadeIn",
		"q Heya, Nomikata. Playing hooky today?",
		"n The girl greets me cheerfully.",
		"s Uh, yeah. Something like that.",
		"n This is Risa Mol-Undi. She's a fellow student and although I quite don't recall how it happened, we help each other out when we sit next to each other in class.",
		"n I don't know much about her since our conversations have been strictly academic for the most part. In fact... this might be our first time conversing outside of the classroom.",

		"r I have to admit, you've got guts cutting lecture. Guess you'll be needing these?",
		"n She flashes a notebook in front of me. I give a nod before passing her a chocolate bar as familiar payment. Fortunately for me, the sweet girl has a powerful sweet tooth as well as a powerful brain.",
		"n While I start to copy down her notes, she sits next to me and starts eating. It's a familiar scene, but it feels weird to be doing this outside the classroom.",
		"r Reiner and his cronies again?",
		"s ...mn.",

		"hide r",
		"n Picking up that I didn't want to talk about it, she takes out another bar from her stash and just keeps eating.",
		"n Thanks to Ms Mol-Undi's notes, I'm able to quickly catch up on today's lesson about in depth Thaumaturgy Foundation and how it is affected by inherent Sorcery Traits.",
		"n There were a few complex nuances but Risa managed to simplify it so I didn't have to spend ages writing everything down. Probably a better job than the lecturer did, clever girl.",
		"n Once I'm done, I hand the notes back to her and our little exchange is over.",
		"n Speaking of which, it's gotten pretty late while I was copying her notes. I better get going if I don't want to be late. But...",

		{"Choice":{
			"Thanks":{
				"Text": "Give Risa a proper thank you for her help",
				"Do": "jump Bond_1"
			},
			"Meeting":{
				"Text": "Head to the meeting",
				"Do": "jump Prep_1"
			},
		}}
	],

	"Bond_1": [
		"n Risa has done good by me. She has had no reason to be and she could have used my failings here and there to ruin me. But she hasn't. A debt is clearly owed here.",

		"s Hey, Risa.",
		"show r Happy with fadeIn",
		"r Yeah Nomikata?",
		"s I just wanted to say thanks for everything you've done for me, it's appreciated.",
		"r ...",
		"show r Happy with tada",
		"r Ha ha ha! Thanks.",
		"r Nothing wrong in doing a good deed. Especially as you don't seem like the backstabbing type.",
		"s What makes you say that?",
		"r You have a chip on your shoulder and want to prove yourself. Resentment of the Nobles shows you don't care for the basis of legacy and you care for the talent of the individual. Betrayal isn't your shtick.",
		"n How did she manage to deduce all that from a few conversations? Am I really so unsubtle?",
		"s How do you know that? Or am I just so easy to read?",
		"r Well Seigi, you have a tendency to rant about how everyone looks down on you for the lack of lineage. For what it's worth, all Magi have issues, it's how our pyramidal society seems to be structured.",
		"s Including yourself?",

		"show r Serious bottom center",
		"r ...",
		"n Shit, that question just came out. I didn't mean it. What kind of person asks another what their issues and complexes are?",
		"n I brace myself in preparation of her anger, but...",

		"show r Happy bottom center with fadeIn",
		"r I don't just kiss and tell, if you wanna get to know me then you can at least make me dinner.",
		"s ... So your place or mine?",

		"hide r",

		"scene Risa_Room with fadeInLeft",
		"n After making our way to her apartment, we both realise we have no cash in hand to go out to a restaurant, we make do with what we have in her accommodation.",
		"n Her maintenance of the place is decidedly… messy. It's clearly usually worse than this, I know this kind of mess - it's the 'Push Everything To The Side' mess which only holds the worst back for a day or so.",
		"n After raiding her stocks we end up splitting what little she had and end up with a mug of Pea and Ham soup between us. It's not particularly flavourful but it's warm, filling and there's just something comforting about a mug of soup. I eat mine hastily while Risa write down a few more notes.",
		"show r Serious with fadeIn",
		"r So, you know that most Magi only have one kid, right?",
		"s Right. Mages only teach everything to one person because only one can hold the families crest.",
		"r And what happens when they have multiple kids who want the knowledge?",
		"s ...Teach one, keep the other as a spare?",
		"r That's me, the spare. Took what I could and sold it to pay for my tuition. As far as my family care, I'm dead to them so we all have to make do.",
		"s Is… Risa even your real name?",
		"r Regardless of my past life, it's who I am now. Anyways, us redhead social outcasts need to stick together, right?",
		{"Choice":{
			"Yes":{
				"Text": "Agree",
				"Do": "jump Yes"
			},
			"Abstain":{
				"Text": "Don't answer",
				"Do": "jump Not"
			},
		}}
	],

	"Prep_1": [
		"n I can always thank Risa later, but I can't undo a failed meeting.",
		"n With that in mind, I give the notes back to Risa and give her my farewells.",
		"show r Happy",
		"r See ya, tomorrow, Nomikata.",
		"s Yeah, later.",
		"hide r",

		"n I leave the cafe and head for my meeting with destiny.",
		"jump On_Time"
	],

	"Class": [
		"n Screw it, I'll swallow my pride and show up.",
		"n They’ll insult me no matter what I do so I may as well try and make the best of it. I just wish this didn't happen today of all days. I've things to do. Important things.",
		
		"scene Classroom with fadeInDown",
		"n I arrive at the classroom, grit my teeth, and walk in.",
		"n There is nothing but silence as everyone stares at me.",

		"lec Mister Nomikata, may I ask as to why you are so late?",
		"n It's not like I'm in a situation where I can say anything and he clearly knows it, so I just give off a defensive shrug and resume my normal seating position. I can hear him saying stuff about how my family will never grow unless I put in the work for future generations.",
		"n Another reminder that I won't compare to my peers because I wasn't born in an old family. But regardless, I put up with it - the future of the family name rests with me after all.",

		"show r Happy bottom center with fadeIn",
		"q Heya, wanna share my notes?",
		"n The girl sitting next to me softly whispers into my ear.",
		"n She already knows my answer. I give a nod before passing her a chocolate bar as familiar payment under the table and start catching up while she starts eating.",
		"n This is Risa Mol-Undi. She's a fellow student and although I quite don't recall how we got into this little 'routine' of ours, we help each other out when we sit next to each other in class.",
		"n Fortunately for me, the sweet girl has a powerful sweet tooth as well. That's all I really know about her as our conversation has been strictly academic aside from her obsession with chocolate.",

		"r Reiner and his cronies again?",
		"s ...mn.",

		"n Picking up that I didn't want to walk about it, she takes out another bar from her stash and just keeps eating.",
		"n Thanks to Ms Mol-Undi's notes, I'm able to quickly catch up on what was said about in depth Thaumaturgy Foundation before we move on to how it is affected by inherent Sorcery Traits.",
		"n There were a few complex nuances but Risa managed to simplify it so I didn't have to spend ages writing everything down. Certainly a better job than the lecturer did, clever girl.",

		"scene Classroom with fadeIn",
		"n The lecture ends and we all pack our bags to leave.",
		"n There's a mandatory meeting I have to attend tonight, but I have some time before that, so...",

		{"Choice":{
			"Thanks":{
				"Text": "Give Risa a proper thank you for her help",
				"Do": "jump Bond"
			},
			"Preparation":{
				"Text": "Prepare for the meeting",
				"Do": "jump Prep"
			},
		}}
	],

	"Bond": [
		"n Risa has done good by me. She has had no reason to be and she could have used my failings here and there to ruin me. But she hasn't. A debt is clearly owed here.",

		"scene Hall with fadeInRight",
		"s Hey, Risa!",
		"show r Happy with fadeIn",
		"r Yeah Nomikata?",
		"s I just wanted to say thanks for everything you've done for me, it's appreciated.",
		"r ...",
		"show r Happy with tada",
		"r Ha ha ha! Thanks.",
		"n As she makes the most innocent giggle, it occurs to me that this will be the first time we've conversed outside of a classroom.",
		"n She keeps walking down the corridor and I naturally follow her.",
		"r Nothing wrong in doing a good deed. Especially as you don't seem like the backstabbing type.",
		"s What makes you say that?",
		"r You have a chip on your shoulder and want to prove yourself. Resentment of the Nobles shows you don't care for the basis of legacy and you care for the talent of the individual. Betrayal isn't your shtick.",
		"n How did she manage to deduce all that from a few conversations? Am I really so unsubtle?",
		"s How do you know that? Or am I just so easy to read?",
		"r Well Seigi, you have a tendency to rant about how everyone looks down on you for the lack of lineage. For what it's worth, all Magi have issues, it's how our pyramidal society seems to be structured.",
		"s Including yourself?",

		"show r Serious bottom center with fadeIn",
		"r ...",
		"n Shit, that question just came out. I didn't mean it. What kind of person asks another what their issues and complexes are?",
		"n I brace myself in preparation of her anger, but...",

		"show r Happy bottom center with fadeIn",
		"r I don't just kiss and tell, if you wanna get to know me then you can at least make me dinner.",
		"s ... So your place or mine?",

		"hide r",

		"scene Risa_Room with fadeInLeft",
		"n After making our way to her apartment, we both realise we have no cash in hand to go out to a restaurant, we make do with what we have in her accommodation.",
		"n Her maintenance of the place is decidedly… messy. It's clearly usually worse than this, I know this kind of mess - it's the 'Push Everything To The Side' mess which only holds the worst back for a day or so.",
		"n After raiding her stocks we end up splitting what little she had and end up with a mug of Pea and Ham soup between us. It's not particularly flavourful but it's warm, filling and there's just something comforting about a mug of soup. I eat mine hastily while Risa write down a few more notes.",
		"show r Serious with fadeIn",
		"r So, you know that most Magi only have one kid, right?",
		"s Right. Mages only teach everything to one person because only one can hold the families crest.",
		"r And what happens when they have multiple kids who want the knowledge?",
		"s ...Teach one, keep the other as a spare?",
		"r That's me, the spare. Took what I could and sold it to pay for my tuition. As far as my family care, I'm dead to them so we all have to make do.",
		"s Is… Risa even your real name?",
		"r Regardless of my past life, it's who I am now. Anyways, us redhead social outcasts need to stick together, right?",

		{"Choice":{
			"Yes":{
				"Text": "Agree",
				"Do": "jump Yes"
			},
			"Abstain":{
				"Text": "Don't answer",
				"Do": "jump Not"
			},
		}}
	],

	"Yes": [
		"s Yeah, that's right. So, if you ever need anything, you can just ask me.",
		"show r Happy bottom center with fadeIn",
		"r ...thanks, Seigi.",
		"hide r",
		"n Her innocent smile returns to her face, and I feel a weight release from my heart.",
		"n She avoided my earlier question and I'm not sure what she's thinking, but I accept her response nevertheless.",
		"n She decided to trust and confide in me, so I can't just betray her trust. If there's something I can do for her, I want to do so...",
		"jump Snuggle"
	],

	"Not": [
		"s ...",
		"n There's nothing I can say to her. Her problems aren't something I can solve with my abilities or words.",
		"n Most of all, I don't want to make any empty promises. After she confided in me, I can't be dishonest or lie.",
		"n I manage to change the subject and we continue our meager dinner. And as the night drags on, her words hang solemnly in the air...",
		"jump Snuggle"
	],

	"Snuggle": [
		"scene scene rgb(0,0,0) with fadeIn",
		"wait 2000",
		"scene Risa_Room with fadeIn",
		"n Dinner ends.", 
		"n As I help clean up, I feel the hairs on my arms prick up. Without the heat of dinner, we both look around to conserve warmth as we begin to feel the cold briskness of the room.",
		"n Risa manages to find a blanket and pulls me under alongside her with surprising strength, snuggling up to me tight. It doesn't seem to take her long to drift off and I find the cosiness so enticing.",
		"n She seems to need someone here, why else would she tell me all this? Telling anyone else all this would be considered a costly mistake by others. ",
		"n I need to weigh my options here...",

		{"Choice":{
			"Stay":{
				"Text": "Stay with Risa",
				"Do": "jump Stay"
			},
			"Go":{
				"Text": "Didn't I have a meeting to go to?",
				"Do": "jump Late"
			},
		}}

	],

	"Stay": [
		"n I can't leave Risa.",
		"n She needs me by her side, right now. After she confided in me, I can't just abandon her.",
		"n Screw the meeting. I know I'll get in trouble later, but I don't care. Right now, the only thing that matters is the warmth snuggled next to me.",
		"n My eyes grow weary. Perhaps it was the cold air or having just eaten dinner, but I also start to drift off.",
		"n Before I do, I take one last look at Risa's sleeping face. Innocent and defenseless... you wouldn't think it belonged to such a clever girl.",
		"n Looking back, I'm sure that was the moment that I swore to myself: No matter what happens in the future, no matter what danger we face, I'd always come back to protect this smile.",
		"scene rgb(0,0,0) with fadeIn",
		"n And so we went to sleep, unaware of the grim future before us. For a brief moment, I solely savored this ephemeral warmth.",
		"n Whatever the future has in store for me, I know for a fact that I can handle it as long as I have her by my side...",
		"jump End"
	],

	"Late": [
		"n I have a job to do.",
		"n Although it is breezy in here and I understand why Risa wants my company as a snuggle buddy as a result, I've no idea why Risa has decided to unload all this on me. Perhaps we just need some space from each other perhaps? Truth is, I don't know. As she said, we all have our issues. It's a job requirement as a mage. But anyways, obligations are obligations.",
		"n As I carefully maneuver myself out of her warm and tight embrace, I pull the blanket up to make sure no draft gets in there. I also leave a note saying that I had to leave. She'll understand.",
		"n As I make my way to the doorway, I feel a spark in the distance. Back on the dinner table, Risa left a book. The book she carried around all day.",
		"n Out of curiosity, I walk to if and reach out a hand only for it to give out a jolt of electricity to keep me away. Personal property should best be left alone I guess.",

		"scene Park with fadeInDown",
		"n I leave Risa's room and the Clocktower premises entirely, until I reached the agreed upon meeting spot.",
		"n Only one other person is here: my father.",
		"show f IMG bottom right with fadeIn",
		"f Why are you late?",
		"n That’s it. No ‘Hello son, great to see you.’ Not even acknowledgement that it’s been years since we last saw each other?",
		"s ...",
		"n I keep quiet. It’s not like I could tell him I nearly fell asleep at the house of an acquaintance.",
		"jump Meet"
	],

	"Prep": [
		"n I can always thank Risa later, but I can't undo a failed meeting.",
		"n With that in mind, I head back to my room to clean myself up and mentally prepare.",

		"scene Room with fadeInDown",
		"wait 2000",
		"show c IMG bottom left with fadeIn",
		"c Peasant.",
		"s Bloody Hell...",
		"n I whisper under my breath as I see the one person I didn't want to see today of all days.",
		"n Dammit, why didn't I think this through? Of course he'd be here. It's his room too.",
		"n Like him or not, this is Reiner Corvella, my roomate, aristocrat, and general a-hole. ",
		"n Best to just ignore him and go on with my day.",

		"c What, peasant? Do you not have the manners to return a greeting?",
		"s ... What do you want, Reiner?",
		"c Hmph, there's nothing I would require from someone like you.",
		"s Great. Then I'm just gonna drop off my stuff and go.",
		"c Very well. I'll allow it.",
		"n I'll allow it? What kind of entitled- Wait, that's right. It's his fault I was late to class.",
		"n I feel my anger double.",

		"s Oi, Reiner. Did you touch my alarm clock this morning?",
		"c I don't particularly care for that tone of voice, peasant.",
		"s Answer the question.",
		"c Hmph, I don't know what you're talking about.",
		"n Oh, playing dumb are we? Fine, have it your way, prick.",
		"hide c with fadeOut",
		"n I quietly get my preparations in order and leave without a word. Likewise, Reiner doesn't even acknowledge my departure.",
		"n One day, I'm gonna have to settle the score with this dickwad. One day...",
		"jump On_Time"

	],

	"On_Time": [
		"scene Park with fadeInDown",
		"n I arrive at the predetermined location, hidden away by bounded fields. Only one other person is here: my father.",
		"show f IMG bottom right with fadeIn",
		"f Hmph, you're on time for once.",
		"n That’s it. No ‘Hello son, great to see you.’ Not even acknowledgement that it’s been years since we last saw each other?",
		"s ...",
		"n I keep quiet. There's nothing I want to say to him either.",
		"jump Meet"
	],

	"Meet": [
		"f Sit.",
		"n I look around and see no chairs.",
		"s But there's no-",
		"f I said sit.",
		"s ... understood.",
		"n I swallow my dignity and kneel down as my father starts to walk in circles around me.",
		"f What have you achieved, pray tell? Nothing. I have watched you and all you have done is squabble and make excuses.",
		"n I presume he is referring to this morning. But he is correct, fath... I mean Master Nomikata was a most excellent student and a benefactor to the schools of Spiritual Evocation & Surgery, ever since the head of the Archibald family perished abruptly leaving a power vacuum which allowed father to take as much power as possible before that noble family propped the ‘Velvet’ individual at the end to stabilise the situation.",
		"n But his face remains the same as it had been all his life, likely the same as it had been since our family moved from the east.",
		"f Now if I had any more heirs, we could have simply recycled your circuits to them but as you know they’re weaker than first generation apprentices and hold no interest for the craft – it would be a waste. The angry brat before me is all we can rely upon.",
		"s The family... is falling already?",
		"f Yes, I would say that it is the fault of your mother’s family being poisoned earth for us to bury our seed but I can tell I have some blame for raising impatient fools.",
		"f Now normally I would remove you for private study before implanting the crest fully but new opportunities have arisen.",
		"f Now tell me boy, what do you know about the Holy Grail War?",
		"s The Holy Grail War is the worst kept secret among magi. A ritual that involves summoning heroic spirits in order to reach The Root, but it has never been accomplished as all the participants end up dead.",
		"f Heh, you’re smarter than you look boy. Now, you are going to lead us in the ritual.",
		"n Wait, did he just say what I heard him say?",
		"s B-but you say I’m not worthy. How can I win something even the greatest of magi are slaughtered in? Won’t I die?",
		"f Fool. A Magus walks with death. In order to achieve greatest, we must be willing to risk equal or greater loss and The Root is everything.",
		"f The ritual begins in two months. I will grant you one month to find a suitable catalyst for the summoning to prove yourself followed by a month of intensive training with myself before we set off.",
		"s ...",
		"n I silently nod to him. The apprentice must always obey the master no matter what.",
		"n  I fail to understand why he is betting the families hopes on this when there are alternative means to protect the lineage but I dare not ask, I cannot question him as he is. Procuring a catalyst from other Clocktower members would be difficult but what is worse will likely be his ‘training.’",
		"f “I am loathe to admit it but this ritual is the best way to attain our goals as we currently stand. Now, I bid you leave.”",
		"hide f with fadeOut",
		"n I arise and bow before him. Although I stand with my father, I find myself more alone than anything else.",

		"scene rgb(0,0,0) with fadeIn",
		"n The Holy Grail War. The greatest battle known to Magi. Now, I must fight in this death match.",
		"n Dammit. No matter how I look at it, my future seems grim.",
		"n What trials and tribulations will await me? Only time will tell...",
		"jump End"
	],

	"End": [
		"wait 3000",
		"scene Screen",
		"wait 3000",
		"Thank you for playing the demo of Quest of Fate.",
		"To continue the story, remember to purchase the full game upon release.",
		"That or bug Hermes.",
		"end"
		
	]

};