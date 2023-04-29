/* VARIABLES */

/* ROOM */

const roomName = "🏆 3x3 Futsal ⚽ | Cola na humildade"; // nome sugerido: 🏆 3x3 Futsal ⚽ | Cola na humildade
const botName = "🤖";
const maxPlayers = 15;
const roomPublic = true;
const geo = [{ "lat": -23.646709, "lon": -46.730114, "code": "br" }, { "code": "FR", "lat": 46.2, "lon": 2.2 }, { "code": "PL", "lat": 51.9, "lon": 19.1 }, { "code": "GB", "lat": 55.3, "lon": -3.4 }, { "code": "PT", "lat": 39.3, "lon": -8.2 }];

const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[0] });

const scoreLimit = 3;
const timeLimit = 3;
room.setScoreLimit(scoreLimit);
room.setTimeLimit(timeLimit);
room.setTeamsLock(true);
var adminPassword = "true";
console.log("adminPassword : " + adminPassword);

/* STADIUM */

/*room.setCustomStadium(x3);*/
const playerRadius = 15;
var ballRadius = 10;
const triggerDistance = playerRadius + ballRadius + 0.01;

/* UNIFORMS */

const Uniform = [];
const ale = {'name': 'Alemanha', "type": Uniform, "emoji": '⚫🔴🟡', "angle": 90, "textcolor": 0x000000, "color1": 0xFFFFFF, "color2": 0xFFFFFF, "color3": 0xFFFFFF,};
const arg = {'name': 'Argentina', "type": Uniform, "emoji": '🔵⚪🔵', "angle": 90, "textcolor": 0x1F374B, "color1": 0x75AADB, "color2": 0xFFFFFF, "color3": 0x75AADB};
const bra = {'name': 'Brasil', "type": Uniform, "emoji": '🟢🟡🔵', "angle": 360, "textcolor": 0x27965A, "color1": 0xDBB71B, "color2": 0xDBB71B, "color3": 0xDBB71B};
const esp = {'name': 'Espanha', "type": Uniform, "emoji": '🔴🟡🔴', "angle": 90, "textcolor": 0xFFFF00, "color1": 0xFF0000, "color2": 0xFF0000, "color3": 0xFF0000};
const por = {'name': 'Portugal', "type": Uniform, "emoji": '🟢🔴🔴', "angle": 0, "textcolor": 0x289E1F, "color1": 0xFF0000, "color2": 0xFF0000, "color3": 0xFF0000};
const ita = {'name': 'Italia', "type": Uniform, "emoji": '🟢⚪🔴', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x3646A9, "color2": 0x3646A9, "color3": 0x3646A9};
const uru = {'name': 'Uruguai', "type": Uniform, "emoji": '⚪🔵⚪', "angle": 0, "textcolor": 0x212124, "color1": 0x66A5D4, "color2": 0x66A5D4, "color3": 0x66A5D4};
const fra = {'name': 'França', "type": Uniform, "emoji": '🔵⚪🔴', "angle": 90, "textcolor": 0xF5F9F6, "color1": 0x265ECF, "color2": 0x384355, "color3": 0x384355};
const ing = {'name': 'Inglaterra', "type": Uniform, "emoji": '⚪🔴⚪', "angle": 0, "textcolor": 0x0549A0, "color1": 0xDEDFE4, "color2": 0xDEDFE4, "color3": 0xDEDFE4};
const bel = {'name': 'Bélgica', "type": Uniform, "emoji": '⚫🔴🟡', "angle": 0, "textcolor": 0xCA9144, "color1": 0xC4212A, "color2": 0xC4212A, "color3": 0xC4212A};
const uniformIds = [ale, arg, bra, esp, por, ita, uru, fra, ing, bel];
let homeUniformIndex = Math.floor(Math.random() * uniformIds.length);
let guestUniformIndex = (homeUniformIndex + 3);
let homeUniformId = uniformIds[homeUniformIndex];
let guestUniformId = uniformIds[guestUniformIndex];
let nameHome = homeUniformId.name;
let emojiHome = homeUniformId.emoji;
let nameGuest = guestUniformId.name;
let emojiGuest = guestUniformId.emoji;
room.setTeamColors(1, homeUniformId.angle, homeUniformId.textcolor, [homeUniformId.color1, homeUniformId.color2, homeUniformId.color3]);
room.setTeamColors(2, guestUniformId.angle, guestUniformId.textcolor, [guestUniformId.color1, guestUniformId.color2, guestUniformId.color3]);

/* OPTIONS */

var drawTimeLimit = 1; //minutos
var maxTeamSize = 4;
var yellow = 0xffeb15;
var white = 0xFFFFFF;
var green = 0x19d459;
var red = 0xFF0000;
var blue = 0x0000FF;

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var players;
var teamR;
var teamB;
var teamS;

/* GAME */

var lastTeamTouched;
var lastPlayersTouched;
var goldenGoal = false;
var activePlay = false;
var muteList = [];

/* STATS */

var GKList = new Array(2 * maxPlayers).fill(0);
var Rposs = 0;
var Bposs = 0;
var point = [{ "x": 0, "y": 0 }, { "x": 0, "y": 0 }];
var ballSpeed;
var lastWinner = Team.SPECTATORS;
var streak = 0;
var goalsHome = [];
var goalsGuest = [];

/* AUXILIARY */

var checkTimeVariable = false;
var announced = false;

/* FUNCTIONS */

function getNextHomeUniform() {
    const uniformId = uniformIds[homeUniformIndex];
    homeUniformIndex = (homeUniformIndex + 1) % uniformIds.length;
    return uniformId;
};

function getNextGuestUniform() {
    const uniformId2 = uniformIds[guestUniformIndex];
    guestUniformIndex = (guestUniformIndex + 1) % uniformIds.length;
    return uniformId2;
};



function sendAnnouncement(announcement) {
    room.sendAnnouncement(announcement, null, white, "bold", 1);
};

function sendRandomAnnouncement(messages, color, fontWeight) {
    var randomIndex = Math.floor(Math.random() * messages.length);
    var randomMessage = messages[randomIndex];
    sendAnnouncement(randomMessage, white, "bold");
};

function centerText(string) {
    var space = parseInt((80 - string.length) * 0.8, 10);
    if (space <= 0) {
        return '';
    }
    return ' '.repeat(space) + string + ' '.repeat(space);
};

function docketFormat(string1, string2) {
    if (string1 !== undefined && string2 === undefined) {
        var space = 53 - (string1.length) * 0.8;
        return ' '.repeat(space) + string1
    } else if (string2 !== undefined && string1 === undefined) {
        return ' '.repeat(77) + string2
    } else if (string2 !== undefined && string1 !== undefined) {
        var space = 16 - (string1.length + 10 + string2.length)
        return ' '.repeat(12) + centerText(string1 + ' '.repeat(10) + string2)
    } else if (string1 === undefined && string2 === undefined) {
        return ''
    }
};

function getUniform(uniformStr) {
    if (uniforms.hasOwnProperty(uniformStr)) return uniformStr;
    for (const [key, value] of Object.entries(uniforms)) {
        for (let i = 0; i < value.aliases.length; i++) {
            if (value.aliases[i] === uniformStr) return key;
        }
    }
    return false;
};

function switchUniforms() {
    if (room.getScores() === null || room.getScores().length < 2) {
        return;
    }
    const scoreRed = room.getScores()[0];
    const scoreBlue = room.getScores()[1];
    var oldHomeUniformId = homeUniformId;
    var oldGuestUniformId = guestUniformId;
    do {
        randomIndex1 = Math.floor(Math.random() * uniformIds.length);
        randomIndex2 = Math.floor(Math.random() * uniformIds.length);
    } while (randomIndex1 === randomIndex2);
    homeUniformId = uniformIds[randomIndex1];
    guestUniformId = uniformIds[randomIndex2];
    while (homeUniformId === oldGuestUniformId || guestUniformId === oldHomeUniformId) {
        randomIndex1 = Math.floor(Math.random() * uniformIds.length);
        randomIndex2 = Math.floor(Math.random() * uniformIds.length);
        homeUniformId = uniformIds[randomIndex1];
        guestUniformId = uniformIds[randomIndex2];
    }
    if (scoreBlue > scoreRed) {
        room.setTeamColors(1, uniformIds[guestUniformId].angle, uniformIds[guestUniformId].textcolor, [uniformIds[guestUniformId].color1, uniformIds[guestUniformId].color2, uniformIds[guestUniformId].color3]);
        room.setTeamColors(2, uniformIds[homeUniformId].angle, uniformIds[homeUniformId].textcolor, [uniformIds[homeUniformId].color1, uniformIds[homeUniformId].color2, uniformIds[homeUniformId].color3]);
        homeUniformId = oldGuestUniformId;
        guestUniformId = oldHomeUniformId;
    } else if (scoreBlue < scoreRed) {
        // Se o time red venceu, só o uniforme do time blue será alterado
        room.setTeamColors(1, uniformIds[homeUniformId].angle, uniformIds[homeUniformId].textcolor, [uniformIds[homeUniformId].color1, uniformIds[homeUniformId].color2, uniformIds[homeUniformId].color3]);
        room.setTeamColors(2, uniformIds[oldGuestUniformId].angle, uniformIds[oldGuestUniformId].textcolor, [uniformIds[oldGuestUniformId].color1, uniformIds[oldGuestUniformId].color2, uniformIds[oldGuestUniformId].color3]);
        // Atualiza a variável global do uniforme do time blue
        guestUniformId = oldGuestUniformId;
    }
};

/* AUXILIARY FUNCTIONS */

function getRandomInt(max) { // return random number from 0 to max-1
    return Math.floor(Math.random() * Math.floor(max));
};

function arrayMin(arr) {
    var len = arr.length;
    var min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
};

function getTime() {
	const scores = room.getScores();
	var min = parseInt(scores.time / 60);
	var sec = parseInt(scores.time) - min * 60;
	return `[${min}' ${sec}"]`
}

function docketFormat(string1, string2) {
	if (string1 !== undefined && string2 === undefined) {
		var space = 53 - (string1.length) * 0.8;
		return ' '.repeat(space) + string1
	} else if (string2 !== undefined && string1 === undefined) {
		return ' '.repeat(77) + string2
	} else if (string2 !== undefined && string1 !== undefined) {
		var space = 16 - (string1.length + 10 + string2.length)
		return ' '.repeat(12) + centerText(string1 + ' '.repeat(10) + string2)
	} else if (string1 === undefined && string2 === undefined) {
		return ''
	}
}

function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
};

/* BUTTONS */

function topBtn() {
    if (teamS.length == 0) {
        return;
    }
    else {
        if (teamR.length == teamB.length) {
            if (teamS.length > 1) {
                room.setPlayerTeam(teamS[0].id, Team.RED);
                room.setPlayerTeam(teamS[1].id, Team.BLUE);
            }
            return;
        }
        else if (teamR.length < teamB.length) {
            room.setPlayerTeam(teamS[0].id, Team.RED);
        }
        else {
            room.setPlayerTeam(teamS[0].id, Team.BLUE);
        }
    }
};

function resetBtn() {
    resettingTeams = true;
    setTimeout(function () { resettingTeams = false; }, 100);
    if (teamR.length <= teamB.length) {
        for (var i = 0; i < teamR.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
        for (var i = teamR.length; i < teamB.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
        }
    }
    else {
        for (var i = 0; i < teamB.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
        for (var i = teamB.length; i < teamR.length; i++) {
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
    }
};

function blueToSpecBtn() {
    resettingTeams = true;
    setTimeout(function () { resettingTeams = false; }, 100);
    for (var i = 0; i < teamB.length; i++) {
        room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
    }
};

function redToSpecBtn() {
    resettingTeams = true;
    setTimeout(function () { resettingTeams = false; }, 100);
    for (var i = 0; i < teamR.length; i++) {
        room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
    }
};

function blueToRedBtn() {
    resettingTeams = true;
    setTimeout(() => { resettingTeams = false; }, 100);
    for (var i = 0; i < teamB.length; i++) {
        room.setPlayerTeam(teamB[i].id, Team.RED);
    }
};

/* GAME FUNCTIONS */

function checkTime() {
    const scores = room.getScores();
    if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
        if (scores.red != scores.blue) {
            if (checkTimeVariable == false) {
                checkTimeVariable = true;
                setTimeout(() => { checkTimeVariable = false; }, 3000);
                scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
                setTimeout(() => { room.stopGame(); }, 2000);
            }
            return;
        }
        goldenGoal = true;
        var messages = [
            "Se liga, a prorrogação é de " + drawTimeLimit * 60 + " segundos!",
            "Vou dar " + drawTimeLimit * 60 + " segundos de prorrogação, rapa!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        room.sendAnnouncement(centerText(announcement), null, yellow, "bold");
        var messagens = [
            "⚽ Primeiro GOL vence! ⚽",
            "⚽ Quem fizer leva! ⚽",
            "⚽ Boraa, decisivo! Fez, ganhou! ⚽",
        ];
        var randomIndex = Math.floor(Math.random() * messagens.length);
        var announcement = messagens[randomIndex];
        room.sendAnnouncement(centerText(announcement), null, white, "bold");
    }
    if (scores.time > scores.timeLimit + drawTimeLimit * 60 - 15 && scores.time <= scores.timeLimit + drawTimeLimit * 60) {
        if (checkTimeVariable == false && announced == false) {
            checkTimeVariable = true;
            announced = true;
            setTimeout(() => {
                checkTimeVariable = false;
            }, 10);
            room.sendAnnouncement(centerText("⌛ 15 segundos para o empate! ⌛"), null, yellow, "bold");
        }
    }
    if (scores.time > (scores.timeLimit + drawTimeLimit * 60)) {
        if (checkTimeVariable == false) {
            checkTimeVariable = true;
            setTimeout(() => { checkTimeVariable = false; }, 10);
            endGame(Team.SPECTATORS);
            room.stopGame();
            goldenGoal = false;
        }
    }
};

function endGame(winner) { // no stopGame() function in it
    const scores = room.getScores();
    Rposs = Rposs / (Rposs + Bposs);
    Bposs = 1 - Rposs;
    lastWinner = winner;
    if (winner == Team.RED) {
        streak++;
        room.sendAnnouncement(centerText(`🏆 FIM DE PARTIDA 🏆`), null, white, "bold", Notification.CHAT);
	    room.sendAnnouncement(centerText(`${emojiHome} ${nameHome} ${scores.red} - ${scores.blue} ${nameGuest} ${emojiGuest}`), null, white, "bold", 0);
	    room.sendAnnouncement(centerText(`${emojiHome} ` + (Hposs * 100).toPrecision(2).toString() + `%` + `  Posse de bola  ` + (Gposs * 100).toPrecision(2).toString() + `% ${emojiGuest}`), null, white, "bold", 0);
        if (scores.blue == 0) {
            room.sendAnnouncement(centerText(teamR[GKList.slice(0, maxPlayers).findIndex(p => p == Math.max(...GKList.slice(0, maxPlayers)))].name + " GK ponta firme!"), null, white, "bold");
        }
        for (var i = 0; i < 3; i++) {
            room.sendAnnouncement(docketFormat(goalsHome[i], goalsGuest[i]), null, white, "bold", 0);
        }
    }
    else if (winner == Team.BLUE) {
        streak = 1;
        room.sendAnnouncement(centerText(`🏆 FIM DE PARTIDA 🏆`), null, white, "bold", Notification.CHAT);
	    room.sendAnnouncement(centerText(`${emojiHome} ${nameHome} ${scores.red} - ${scores.blue} ${nameGuest} ${emojiGuest}`), null, white, "bold", 0);
	    room.sendAnnouncement(centerText(`${emojiHome} ` + (Hposs * 100).toPrecision(2).toString() + `%` + `  Posse de bola  ` + (Gposs * 100).toPrecision(2).toString() + `% ${emojiGuest}`), null, white, "bold", 0);
        if (scores.blue == 0) {
            room.sendAnnouncement(centerText(teamB[GKList.slice(0, maxPlayers).findIndex(p => p == Math.max(...GKList.slice(0, maxPlayers)))].name + " GK ponta firme!"), null, white, "bold");
        }
        for (var i = 0; i < 3; i++) {
            room.sendAnnouncement(docketFormat(goalsHome[i], goalsGuest[i]), null, white, "bold", 0);
        }
    }
    else {
        streak = 0;
        room.sendAnnouncement(centerText(`🏆 FIM DE PARTIDA 🏆`), null, white, "bold", Notification.CHAT);
	    room.sendAnnouncement(centerText(`${emojiHome} ${nameHome} ${scores.red} - ${scores.blue} ${nameGuest} ${emojiGuest}`), null, white, "bold", 0);
        if (scores.red == 0) {
            const teamBGKIndex = GKList.slice(maxPlayers, 2 * maxPlayers).findIndex(p => p == Math.max(...GKList.slice(maxPlayers, 2 * maxPlayers)));
            const teamBGKName = (teamBGKIndex >= 0 && teamBGKIndex < teamB.length) ? teamB[teamBGKIndex].name : "o GK do Real";
            const teamRGKIndex = GKList.slice(0, maxPlayers).findIndex(p => p == Math.max(...GKList.slice(0, maxPlayers)));
            const teamRGKName = (teamRGKIndex >= 0 && teamRGKIndex < teamR.length) ? teamR[teamRGKIndex].name : "O Gk do Barça";
            room.sendAnnouncement(centerText(teamRGKName + " e " + teamBGKName + " mandaram muito de GK! "), null, white, "bold");
        }
        for (var i = 0; i < 3; i++) {
            room.sendAnnouncement(docketFormat(goalsHome[i], goalsGuest[i]), null, white, "bold", 0);
        }
    }
    switchUniforms()
};

/* PLAYER FUNCTIONS */

function updateTeams() {
    players = room.getPlayerList().filter((player) => player.id != 0);
    teamR = players.filter(p => p.team === Team.RED);
    teamB = players.filter(p => p.team === Team.BLUE);
    teamS = players.filter(p => p.team === Team.SPECTATORS);
};

function updateAdmins() {
    if (players.length == 0 || players.find((player) => player.admin) != null) {
        return;
    }
    var copie = [];
    players.forEach(function (element) { copie.push(element.id); });
    room.setPlayerAdmin(arrayMin(copie), true); // Give admin to the player who's played the longest on the room
};

function updateList(number, team) {
    
    if (room.getScores() != null) {
        if (team == Team.RED) {
            GKList = GKList.slice(0, number).concat(GKList.slice(number + 1, maxPlayers)).concat(0).concat(GKList.slice(maxPlayers, GKList.length));

        }
        else if (team == Team.BLUE) {
            GKList = GKList.slice(0, maxPlayers + number).concat(GKList.slice(maxPlayers + number + 1, GKList.length).concat(0));
        }
    }
};

/* STATS FUNCTIONS */

function getLastTouchOfTheBall() {
    const ballPosition = room.getBallPosition();
    updateTeams();
    for (var i = 0; i < players.length; i++) {
        if (players[i].position != null) {
            var distanceToBall = pointDistance(players[i].position, ballPosition);
            if (distanceToBall < triggerDistance) {
                !activePlay ? activePlay = true : null;
                lastTeamTouched = players[i].team;
            }
        }
    }
};

function getStats() { // gives possession, ball speed and GK of each team
    if (activePlay) {
        updateTeams();
        lastTeamTouched == Team.RED ? Rposs++ : Bposs++;
        var ballPosition = room.getBallPosition();
        point[1] = point[0];
        point[0] = ballPosition;
        ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60) / 15000;
        var k = [-1, Infinity];
        for (var i = 0; i < teamR.length; i++) {
            if (teamR[i].position.x < k[1]) {
                k[0] = i;
                k[1] = teamR[i].position.x;
            }
        }
        GKList[k[0]]++;
        k = [-1, -Infinity];
        for (var i = 0; i < teamB.length; i++) {
            if (teamB[i].position.x > k[1]) {
                k[0] = i;
                k[1] = teamB[i].position.x;
            }
        }
        GKList[maxPlayers + k[0]]++;
    }
};

/* EVENTS */

/* PLAYER MOVEMENT */

room.onPlayerJoin = function (player) {
    var messages = [
        "👋 Salve, " + player.name + "!",
        "👋 Eae, " + player.name + "!",
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    updateTeams();
    updateAdmins();
    room.sendAnnouncement(centerText(announcement), null, white, "bold");
};

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    if (changedPlayer.id == 0) {
        room.setPlayerTeam(0, Team.SPECTATORS);
        return;
    }
    if (changedPlayer.team == Team.SPECTATORS) {
        updateList(Math.max(teamR.findIndex((p) => p.id == changedPlayer.id), teamB.findIndex((p) => p.id == changedPlayer.id), teamS.findIndex((p) => p.id == changedPlayer.id)), changedPlayer.team);
    }
    updateTeams();
};

room.onPlayerLeave = function (player) {
    updateList(Math.max(teamR.findIndex((p) => p.id == player.id), teamB.findIndex((p) => p.id == player.id), teamS.findIndex((p) => p.id == player.id)), player.team);
    updateTeams();
    updateAdmins();
    var messages = [
        "Vixi, " + player.name + " vazou!",
        "Voltaaaaaa, " + player.name + "!",
        "Aaaah, " + player.name + " arregou essas hora!",
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    room.sendAnnouncement(centerText(announcement), null, white, "bold");
};

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
};

/* PLAYER ACTIVITY */

room.onPlayerChat = function (player, message) {
    message = message.split(" ");
    if (["!help"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("Admin commands: !mute <R/B/S> <team position> <duration = 3>, !unmute all/<nick>, !clearbans", player.id), null, yellow, "normal");
    }
    else if (["!adm"].includes(message[0].toLowerCase())) {
        if (message[1] == adminPassword) {
            room.setPlayerAdmin(player.id, true);
            adminPassword = "true";
            console.log("adminPassword : " + adminPassword);
        }
    }
    else if (["!mute"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message.length == 3 || message.length == 4) {
                if (["R", "B", "S"].includes(message[1])) {
                    var timeOut;
                    if (message[1] == "R") {
                        if (!Number.isNaN(Number.parseInt(message[2]))) {
                            if (Number.parseInt(message[2]) <= teamR.length && Number.parseInt(message[2]) > 0) {
                                if (teamR[Number.parseInt(message[2]) - 1].admin || muteList.filter((p) => p == teamR[Number.parseInt(message[2]) - 1].name).length > 0) {
                                    return false;
                                }
                                if (message.length == 4) {
                                    if (!Number.isNaN(Number.parseInt(message[3]))) {
                                        if (Number.parseInt(message[3]) > 0) {
                                            timeOut = Number.parseInt(message[3]) * 60 * 1000;
                                        }
                                    }
                                }
                                else {
                                    timeOut = 3 * 60 * 1000;
                                }
                                setTimeout(function (name) { muteList = muteList.filter((p) => p != name) }, timeOut, teamR[Number.parseInt(message[2]) - 1].name);
                                muteList.push(teamR[Number.parseInt(message[2]) - 1].name);
                                room.sendAnnouncement(centerText(teamR[Number.parseInt(message[2]) - 1].name + " foi mutado por " + (timeOut / 60000) + " minutos !"), null, yellow, "normal");
                            }
                        }
                    }
                    if (message[1] == "B") {
                        if (!Number.isNaN(Number.parseInt(message[2]))) {
                            if (Number.parseInt(message[2]) <= teamB.length && Number.parseInt(message[2]) > 0) {
                                if (teamB[Number.parseInt(message[2]) - 1].admin || muteList.filter((p) => p == teamB[Number.parseInt(message[2]) - 1].name).length > 0) {
                                    return false;
                                }
                                if (message.length == 4) {
                                    if (!Number.isNaN(Number.parseInt(message[3]))) {
                                        if (Number.parseInt(message[3]) > 0) {
                                            timeOut = Number.parseInt(message[3]) * 60 * 1000;
                                        }
                                    }
                                }
                                else {
                                    timeOut = 3 * 60 * 1000;
                                }
                                setTimeout(function (name) { muteList = muteList.filter((p) => p != name) }, timeOut, teamB[Number.parseInt(message[2]) - 1].name);
                                muteList.push(teamB[Number.parseInt(message[2]) - 1].name);
                                room.sendAnnouncement(centerText(teamB[Number.parseInt(message[2]) - 1].name + " foi mutado por " + (timeOut / 60000) + " minutos !"), null, yellow, "normal");
                            }
                        }
                    }
                    if (message[1] == "S") {
                        if (!Number.isNaN(Number.parseInt(message[2]))) {
                            if (Number.parseInt(message[2]) <= teamS.length && Number.parseInt(message[2]) > 0) {
                                if (teamS[Number.parseInt(message[2]) - 1].admin || muteList.filter((p) => p == teamS[Number.parseInt(message[2]) - 1].name).length > 0) {
                                    return false;
                                }
                                if (message.length == 4) {
                                    if (!Number.isNaN(Number.parseInt(message[3]))) {
                                        if (Number.parseInt(message[3]) > 0) {
                                            timeOut = Number.parseInt(message[3]) * 60 * 1000;
                                        }
                                    }
                                }
                                else {
                                    timeOut = 3 * 60 * 1000;
                                }
                                setTimeout(function (name) { muteList = muteList.filter((p) => p != name) }, timeOut, teamS[Number.parseInt(message[2]) - 1].name);
                                muteList.push(teamS[Number.parseInt(message[2]) - 1].name);
                                room.sendAnnouncement(centerText(teamS[Number.parseInt(message[2]) - 1].name + " foi mutado por " + (timeOut / 60000) + " minutos !"), null, yellow, "normal");
                            }
                        }
                    }
                }
            }
        }
    }
    else if (["!unmute"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message.length == 2 && message[1] == "all") {
                muteList = [];
                room.sendAnnouncement(centerText("Desmutado."), null, yellow, "normal");
            }
            if (message.length >= 2) {
                var name = "";
                for (var i = 1; i < message.length; i++) {
                    name += message[i] + " ";
                }
                name = name.substring(0, name.length - 1);
                muteList.length != muteList.filter((p) => p != name).length ? room.sendAnnouncement(centerText(name + " foi desmutado.")) : null;
                muteList = muteList.filter((p) => p != name);
            }
        }
    }
    else if (["!clearbans"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            room.clearBans();
            room.sendAnnouncement(centerText("Banimentos apagados"), null, yellow, "normal");
        }
    }
    else if (["!bb, !bye, !cya, !gn"].includes(message[0].toLowerCase())) {
        room.kickPlayer(player.id, "Flw!", false);
    }
    if (message[0][0] == "!") {
        return false;
    }
    if (muteList.includes(player.name)) {
        room.sendAnnouncement(centerText("Você foi mutado.", player.id), null, yellow, "normal");
        return false;
    }
};

room.onPlayerActivity = function (player) {
};

room.onPlayerBallKick = function (player) {
    if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
        !activePlay ? activePlay = true : null;
        lastTeamTouched = player.team;
        lastPlayersTouched[1] = lastPlayersTouched[0];
        lastPlayersTouched[0] = player;
    }
};

/* GAME MANAGEMENT */

room.onGameStart = function (byPlayer) {
    GKList = new Array(2 * maxPlayers).fill(0);
    activePlay = false;
    Rposs = 0;
    Bposs = 0;
    lastPlayersTouched = [null, null];
    goldenGoal = false;
    room.sendAnnouncement(centerText(`🥅🥅 PARTIDA INICIANDO 🥅🥅`), null, yellow, "bold", Notification.CHAT);
	room.sendAnnouncement(centerText(`${emojiHome} ${nameHome} X ${nameGuest} ${emojiGuest}`), null, white, "bold", 0);
	if (streak !== 0) {
		room.sendAnnouncement(centerText(`     📢 ${nameHome} está invicto 📢`), null, white, "bold", 0);
		room.sendAnnouncement(centerText(`     📢 Sequência de ${streak} jogo(s) 📢`), null, white, "bold", 0);
	}
};

room.onGameStop = function (byPlayer) {
    if (byPlayer.id == 0) {
        updateTeams();
        if (lastWinner == Team.RED) {
            blueToSpecBtn();
        }
        else if (lastWinner == Team.BLUE) {
            redToSpecBtn();
            blueToRedBtn();
        }
        else {
            resetBtn();
        }
        setTimeout(() => { topBtn(); }, 100);
    }
};

room.onGamePause = function (byPlayer) {
    setTimeout(function () {
        var messages = [
            "Calma aê, vamo resolver e já voltamos. Não enche! kkk",
            "VAR ta analizando, calma... kk",
            "Calma aê, rapa. Rapidão já voltamos pro game."
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        room.sendAnnouncement(centerText(announcement), null, yellow, "bold");
    }, 1500);
};

room.onGameUnpause = function (byPlayer) {
    var messages = [
        "⚽ Bora pro jogo! ⚽",
        "⚽ Simboraaa! ⚽"
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    room.sendAnnouncement(centerText(announcement), null, white, "bold");
};

room.onTeamGoal = function (team) {
    const scores = room.getScores();
    activePlay = false;
    if (lastPlayersTouched[0].team === team) {
		room.sendAnnouncement(``, null, white, "bold", Notification.CHAT);
		room.sendAnnouncement(centerText(`TOCA A MÚÚSICAAA, É GOOOOOL!!!`), null, green, "bold", 0);
		room.sendAnnouncement(centerText(`⚽ Gol de ${lastPlayersTouched[0].name} ⚽`), null, white, "bold", 0);
		room.sendAnnouncement(centerText(`Velocidade do Chute: ${ballSpeed.toFixed()}km/h`), null, white, "bold", 0);
		if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
			room.sendAnnouncement(centerText(`👟 Assistência: ${lastPlayersTouched[1].name}👟`), null, white, "bold", 0);
			room.setPlayerAvatar(lastPlayersTouched[1].id, '👟');
			setTimeout(function () { room.setPlayerAvatar(lastPlayersTouched[1].id,); }, 2400);
		}
		if (team === 1) {
			goalsHome.push(`${lastPlayersTouched.name}  ${getTime(scores)}`);
		} else if (team === 2) {
			goalsGuest.push(`${lastPlayersTouched.name}  ${getTime(scores)}`);
		}
	} else {
		room.sendAnnouncement(``, null, white, "bold", Notification.CHAT);
		room.sendAnnouncement(centerText(`🤦‍♂️ É GOOOOOL CONTRA!! 🤦‍♂️`), null, yellow, "bold", 0);
		room.sendAnnouncement(centerText(`🤡 Gol de ${lastPlayersTouched[0].name} 🤡`), null, white, "bold", 0);
		room.sendAnnouncement(centerText(`Velocidade do Chute: ${ballSpeed.toFixed()}km/h`), null, white, "bold", 0);
        if (team === 1) {
			goalsHome.push(`${lastPlayersTouched[0].name}  ${getTime(scores)}`);
		} else if (team === 2) {
			goalsGuest.push(`${lastPlayersTouched[0].name}  ${getTime(scores)}`);
		}
	}
	room.sendAnnouncement(centerText(`${emojiHome} ${nameHome} ${scores.red} - ${scores.blue} ${nameGuest} ${emojiGuest}`), null, white, "bold", 0);
};

room.onPositionsReset = function () {
    lastPlayersTouched = [null, null];
};

/* MISCELLANEOUS */

room.onRoomLink = function (url) {
};

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
    if (muteList.includes(changedPlayer.name) && changedPlayer.admin) {
        room.sendAnnouncement(centerText(changedPlayer.name + " foi desmutado."), null, yellow, "normal");
        muteList = muteList.filter((p) => p != changedPlayer.name);
    }
};

room.onStadiumChange = function (newStadiumName, byPlayer) {
    var messages = [
        "Troca de Mapa pra ficar mais esquema.",
        "Mapa mudou, agora da jogão!",
        "Aquele não tava rolando né? Trocamo!"
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    room.sendAnnouncement(centerText(announcement), null, yellow, "bold");
};

room.onGameTick = function () {
    checkTime();
    getLastTouchOfTheBall();
    getStats();
};

/* ESTÁDIO 𝓕𝙪𝙩𝙨𝙖𝙡 𝒙3 */
/*var x3 =  {
    "name":"𝓕𝙪𝙩𝙨𝙖𝙡 𝒙3 : 𝓑𝔂 Malco❗",
    "width":420,
    "height":200,
    "bg":{
    "type":"hockey","width":368,"height":171,"kickOffRadius":65
    },
    "vertexes":[
        {"x":-368,"y":171,"cMask":["ball"]},
        {"x":-368,"y":65,"cMask":["ball"]},
        {"x":-368,"y":-65,"cMask":["ball"]},
        {"x":-368,"y":-171,"cMask":["ball"]},
        {"x":368,"y":171,"cMask":["ball"]},
        {"x":368,"y":65,"cMask":["ball"]},
        {"x":368,"y":-65,"cMask":["ball"]},
        {"x":368,"y":-171,"cMask":["ball"]},
        {"x":0,"y":65,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
        {"x":0,"y":-65,"bCoef":0,"cMask":[]},
        {"x":368,"y":171,"cMask":["ball"]},
        {"x":368,"y":-171,"cMask":["ball"]},
        {"x":0,"y":171,"bCoef":0,"cMask":[]},
        {"x":0,"y":-171,"bCoef":0,"cMask":[]},
        {"x":0,"y":65,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
        {"x":0,"y":-65,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]}, {"x":377,"y":-65,"cMask":["ball"]},
        {"x":377,"y":-171,"cMask":["ball"]},
        {"x":-377,"y":-65,"cMask":["ball"]},
        {"x":-377,"y":-171,"cMask":["ball"]},
        {"x":-377,"y":65,"cMask":["ball"]},
        {"x":-377,"y":171,"cMask":["ball"]},
        {"x":377,"y":65,"cMask":["ball"]},
        {"x":377,"y":171,"cMask":["ball"]},
        {"x":0,"y":199,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
        {"x":0,"y":65,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
        {"x":0,"y":-65,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
        {"x":0,"y":-199,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
        {"x":-368.53340356886,"y":-62.053454903872,"bCoef":0.1,"cMask":["red","blue","ball"]},
        {"x":-400.05760771891,"y":-62.053454903872,"bCoef":0.1,"cMask":["red","blue","ball"]},
        {"x":-400.05760771891,"y":64.043361696331,"bCoef":0.1,"cMask":["red","blue","ball"]},
        {"x":-368.53340356886,"y":64.043361696331,"bCoef":0.1,"cMask":["red","blue","ball"]},
        {"x":368.09926357786,"y":63.94882446641,"bCoef":0.1,"cMask":["red","blue","ball"]},
        {"x":400,"y":64,"bCoef":0.1,"cMask":["red","blue","ball"]},
        {"x":400,"y":-61.927767991658,"bCoef":0.1,"cMask":["red","blue","ball"]},
        {"x":368.9681846993,"y":-62.144998272018,"bCoef":0.1,"cMask":["red","blue","ball"]},
        {"x":-368,"y":-142.37229643041,"bCoef":0.1,"cMask":[]},
        {"x":-260.90035258157,"y":-50.168480548544,"bCoef":0.1,"cMask":[]},
        {"x":-368,"y":-160.81305960678,"bCoef":0.1,"cMask":[]},
        {"x":-358.5379338963,"y":-171,"bCoef":0.1,"cMask":[]},
        {"x":-368,"y":141.33175243687,"bCoef":0.1,"cMask":[]},
        {"x":-260.90035258157,"y":49.127936555002,"bCoef":0.1,"cMask":[]},
        {"x":-368,"y":159.77251561324,"bCoef":0.1,"cMask":[]},
        {"x":-358.5379338963,"y":171,"bCoef":0.1,"cMask":[]},
        {"x":368,"y":159.77251561324,"bCoef":0.1,"cMask":[]},
        {"x":358.36266315432,"y":171,"bCoef":0.1,"cMask":[]},
        {"x":368,"y":-160.81305960678,"bCoef":0.1,"cMask":[]},
        {"x":358.36266315432,"y":-171,"bCoef":0.1,"cMask":[]},
        {"x":368,"y":-142.37229643041,"bCoef":0.1,"cMask":[]},
        {"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"cMask":[]},
        {"x":368,"y":141.33175243687,"bCoef":0.1,"cMask":[]},
        {"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"cMask":[]},
        {"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"cMask":[]},
        {"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"cMask":[]},
        {"x":-250.86909422732,"y":-1.2295321189394,"bCoef":0.1,"cMask":[]},
        {"x":-250.86909422732,"y":0.18898812539692,"bCoef":0.1,"cMask":[]},
        {"x":-250.86909422732,"y":-2.6480523632758,"bCoef":0.1,"cMask":[]},
        {"x":-250.86909422732,"y":1.6075083697333,"bCoef":0.1,"cMask":[]},
        {"x":-250.86909422732,"y":0.89824824756514,"bCoef":0.1,"cMask":[]},
        {"x":-250.86909422732,"y":-1.9387922411076,"bCoef":0.1,"cMask":[]},
        {"x":-250.86909422732,"y":1.9621384308174,"bCoef":0.1,"cMask":[]},
        {"x":-250.86909422732,"y":-3.0026824243599,"bCoef":0.1,"cMask":[]},
        {"x":250.69382348534,"y":-1.2295321189394,"bCoef":0.1,"cMask":[]},
        {"x":250.69382348534,"y":0.18898812539692,"bCoef":0.1,"cMask":[]},
        {"x":250.69382348534,"y":-2.6480523632758,"bCoef":0.1,"cMask":[]},
        {"x":250.69382348534,"y":1.6075083697333,"bCoef":0.1,"cMask":[]},
        {"x":250.69382348534,"y":0.89824824756514,"bCoef":0.1,"cMask":[]},
        {"x":250.69382348534,"y":-1.9387922411076,"bCoef":0.1,"cMask":[]},
        {"x":250.69382348534,"y":1.9621384308174,"bCoef":0.1,"cMask":[]},
        {"x":250.69382348534,"y":-3.0026824243599,"bCoef":0.1,"cMask":[]},
        {"x":-185.66591492467,"y":-1.2295321189394,"bCoef":0.1,"cMask":[]},
        {"x":-185.66591492467,"y":0.18898812539692,"bCoef":0.1,"cMask":[]},
        {"x":-185.66591492467,"y":-2.6480523632758,"bCoef":0.1,"cMask":[]},
        {"x":-185.66591492467,"y":1.6075083697333,"bCoef":0.1,"cMask":[]},
        {"x":-185.66591492467,"y":0.89824824756514,"bCoef":0.1,"cMask":[]},
        {"x":-185.66591492467,"y":-1.9387922411076,"bCoef":0.1,"cMask":[]},
        {"x":-185.66591492467,"y":1.9621384308174,"bCoef":0.1,"cMask":[]},
        {"x":-185.66591492467,"y":-3.0026824243599,"bCoef":0.1,"cMask":[]},
        {"x":185.49064418269,"y":-1.2295321189394,"bCoef":0.1,"cMask":[]},
        {"x":185.49064418269,"y":0.18898812539692,"bCoef":0.1,"cMask":[]},
        {"x":185.49064418269,"y":-2.6480523632758,"bCoef":0.1,"cMask":[]},
        {"x":185.49064418269,"y":1.6075083697333,"bCoef":0.1,"cMask":[]},
        {"x":185.49064418269,"y":0.89824824756514,"bCoef":0.1,"cMask":[]},
        {"x":185.49064418269,"y":-1.9387922411076,"bCoef":0.1,"cMask":[]},
        {"x":185.49064418269,"y":1.9621384308174,"bCoef":0.1,"cMask":[]},
        {"x":185.49064418269,"y":-3.0026824243599,"bCoef":0.1,"cMask":[]},
        {"x":-160.58776903904,"y":-159.39453936245,"bCoef":0.1,"cMask":[]},
        {"x":-160.58776903904,"y":-182.09086327183,"bCoef":0.1,"cMask":[]},
        {"x":-80.337702205015,"y":-159.39453936245,"bCoef":0.1,"cMask":[]},
        {"x":-80.337702205015,"y":-182.09086327183,"bCoef":0.1,"cMask":[]},
        {"x":160.41249829706,"y":-159.39453936245,"bCoef":0.1,"cMask":[]},
        {"x":160.41249829706,"y":-182.09086327183,"bCoef":0.1,"cMask":[]},
        {"x":80.162431463036,"y":-159.39453936245,"bCoef":0.1,"cMask":[]},
        {"x":80.162431463036,"y":-182.09086327183,"bCoef":0.1,"cMask":[]},
        {"x":-254.88159756902,"y":-171,"bCoef":0.1,"cMask":[]},
        {"x":-254.88159756902,"y":-182.09086327183,"bCoef":0.1,"cMask":[]},
        {"x":-371.91294503531,"y":-87.759267023458,"bCoef":0.1,"cMask":[]},
        {"x":-384.61920561736,"y":-87.759267023458,"bCoef":0.1,"cMask":[]},
        {"x":371.73767429333,"y":-87.759267023458,"bCoef":0.1,"cMask":[]},
        {"x":384.44393487538,"y":-87.759267023458,"bCoef":0.1,"cMask":[]},
        {"x":-371.91294503531,"y":86.718723029916,"bCoef":0.1,"cMask":[]},
        {"x":-384.61920561736,"y":86.718723029916,"bCoef":0.1,"cMask":[]},
        {"x":371.73767429333,"y":86.718723029916,"bCoef":0.1,"cMask":[]},
        {"x":384.44393487538,"y":86.718723029916,"bCoef":0.1,"cMask":[]},
        {"x":-254.88159756902,"y":171,"bCoef":0.1,"cMask":[]},
        {"x":-254.88159756902,"y":181.05031927829,"bCoef":0.1,"cMask":[]},
        {"x":254.70632682704,"y":-171,"bCoef":0.1,"cMask":[]},
        {"x":254.70632682704,"y":-182.09086327183,"bCoef":0.1,"cMask":[]},
        {"x":254.70632682704,"y":171,"bCoef":0.1,"cMask":[]},
        {"x":254.70632682704,"y":181.05031927829,"bCoef":0.1,"cMask":[]},
        {"x":377,"y":-65,"cMask":["ball"]},
        {"x":377,"y":-171,"cMask":["ball"]},
        {"x":-377,"y":-65,"cMask":["ball"]},
        {"x":-377,"y":-171,"cMask":["ball"]},
        {"x":-377,"y":65,"cMask":["ball"]},
        {"x":-377,"y":171,"cMask":["ball"]},
        {"x":377,"y":65,"cMask":["ball"]},
        {"x":377,"y":171,"cMask":["ball"]},
        {"x":371,"y":-65,"bCoef":0,"cMask":["ball"]},
        {"x":371,"y":-171,"bCoef":0,"cMask":["ball"]},
        {"x":371,"y":65,"bCoef":0,"cMask":["ball"]},
        {"x":371,"y":171,"bCoef":0,"cMask":["ball"]},
        {"x":-371,"y":65,"bCoef":0,"cMask":["ball"]},
        {"x":-371,"y":171,"bCoef":0,"cMask":["ball"]},
        {"x":-371,"y":-65,"bCoef":0,"cMask":["ball"]},
        {"x":-371,"y":-171,"bCoef":0,"cMask":["ball"]}],
    "segments":[
        {"v0":0,"v1":1,"vis":false,"cMask":["ball"]},
        {"v0":2,"v1":3,"vis":false,"cMask":["ball"]},
        {"v0":4,"v1":5,"vis":false,"cMask":["ball"]},
        {"v0":6,"v1":7,"vis":false,"cMask":["ball"]},
        {"v0":8,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},
        {"v0":9,"v1":8,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},
        {"v0":1,"v1":0,"cMask":["ball"],"color":"FFFFFF"},
        {"v0":5,"v1":4,"cMask":["ball"],"color":"FFFFFF"},
        {"v0":2,"v1":3,"cMask":["ball"],"color":"FFFFFF"},
        {"v0":6,"v1":7,"cMask":["ball"],"color":"FFFFFF"},
        {"v0":0,"v1":10,"cMask":["ball"],"color":"FFFFFF"},
        {"v0":3,"v1":11,"cMask":["ball"],"color":"FFFFFF"},
        {"v0":12,"v1":13,"bCoef":0,"cMask":[],"color":"FFFFFF"},
        {"v0":8,"v1":9,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},
        {"v0":15,"v1":14,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},
        {"v0":2,"v1":1,"bCoef":0,"cMask":[],"color":"FFFFFF"},
        {"v0":6,"v1":5,"bCoef":0,"cMask":[],"color":"FFFFFF"},
        {"v0":16,"v1":17,"vis":false,"cMask":["ball"],"color":"FFFFFF"},
        {"v0":18,"v1":19,"vis":false,"cMask":["ball"],"color":"FFFFFF"},
        {"v0":20,"v1":21,"vis":false,"cMask":["ball"],"color":"FFFFFF"},
        {"v0":22,"v1":23,"vis":false,"cMask":["ball"],"color":"FFFFFF"},
        {"v0":24,"v1":25,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
        {"v0":26,"v1":27,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
        {"v0":28,"v1":29,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"F8F8F8"},
        {"v0":29,"v1":30,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"F8F8F8"},
        {"v0":30,"v1":31,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"F8F8F8"},
        {"v0":32,"v1":33,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"F8F8F8"},
        {"v0":33,"v1":34,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"F8F8F8"},
        {"v0":34,"v1":35,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"F8F8F8"},
        {"v0":36,"v1":37,"bCoef":0.1,"curve":94.0263701017,"curveF":0.9320849449101076,"cMask":[],"color":"F8F8F8"},
        {"v0":39,"v1":38,"bCoef":0.1,"curve":86.632306418889,"curveF":1.060575000344919,"cMask":[],"color":"F8F8F8"},
        {"v0":41,"v1":40,"bCoef":0.1,"curve":94.026370101699,"curveF":0.9320849449101238,"cMask":[],"color":"F8F8F8"},
        {"v0":37,"v1":41,"bCoef":0.1,"cMask":[],"color":"F8F8F8"},
        {"v0":42,"v1":43,"bCoef":0.1,"curve":86.632306418888,"curveF":1.0605750003449375,"cMask":[],"color":"F8F8F8"},
        {"v0":45,"v1":44,"bCoef":0.1,"curve":86.632306418884,"curveF":1.0605750003450118,"cMask":[],"color":"F8F8F8"},
        {"v0":46,"v1":47,"bCoef":0.1,"curve":86.632306418899,"curveF":1.0605750003447336,"cMask":[],"color":"F8F8F8"},
        {"v0":49,"v1":48,"bCoef":0.1,"curve":94.026370101699,"curveF":0.9320849449101238,"cMask":[],"color":"F8F8F8"},
        {"v0":50,"v1":51,"bCoef":0.1,"curve":94.026370101699,"curveF":0.9320849449101238,"cMask":[],"color":"F8F8F8"},
        {"v0":52,"v1":53,"bCoef":0.1,"cMask":[],"color":"F8F8F8"},
        {"v0":54,"v1":55,"bCoef":0.1,"curve":-179.99307079708004,"curveF":-0.000060468702819980624,"cMask":[],"color":"F8F8F8"},
        {"v0":55,"v1":54,"bCoef":0.1,"curve":-179.99781759386002,"curveF":-0.000019045086381751383,"cMask":[],"color":"F8F8F8"},
        {"v0":56,"v1":57,"bCoef":0.1,"curve":179.64823645332,"curveF":0.0030697256812038513,"cMask":[],"color":"F8F8F8"},
        {"v0":57,"v1":56,"bCoef":0.1,"curve":-179.64241331853003,"curveF":-0.003120542605465436,"cMask":[],"color":"F8F8F8"},
        {"v0":58,"v1":59,"bCoef":0.1,"curve":-179.97642676038004,"curveF":-0.00020571532626703233,"cMask":[],"color":"F8F8F8"},
        {"v0":59,"v1":58,"bCoef":0.1,"curve":-179.99075897601003,"curveF":-0.00008064314761547242,"cMask":[],"color":"F8F8F8"},
        {"v0":60,"v1":61,"bCoef":0.1,"curve":-179.93114244115003,"curveF":-0.0006008956307319741,"cMask":[],"color":"F8F8F8"},
        {"v0":61,"v1":60,"bCoef":0.1,"curve":-179.97051646743003,"curveF":-0.0002572923649102433,"cMask":[],"color":"F8F8F8"},
        {"v0":62,"v1":63,"bCoef":0.1,"curve":179.99869069543,"curveF":0.000011425837829318613,"cMask":[],"color":"F8F8F8"},
        {"v0":63,"v1":62,"bCoef":0.1,"curve":179.99939258776004,"curveF":0.000005300671752306162,"cMask":[],"color":"F8F8F8"},
        {"v0":64,"v1":65,"bCoef":0.1,"curve":-179.91173952837002,"curveF":-0.0007702180669602502,"cMask":[],"color":"F8F8F8"},
        {"v0":65,"v1":64,"bCoef":0.1,"curve":179.91186753664,"curveF":0.0007691009834080061,"cMask":[],"color":"F8F8F8"},
        {"v0":66,"v1":67,"bCoef":0.1,"curve":179.99528711105,"curveF":0.000041127714752444664,"cMask":[],"color":"F8F8F8"},
        {"v0":67,"v1":66,"bCoef":0.1,"curve":179.99743836358,"curveF":0.000022354494887865286,"cMask":[],"color":"F8F8F8"},
        {"v0":68,"v1":69,"bCoef":0.1,"curve":179.98626041101,"curveF":0.00011990053344777071,"cMask":[],"color":"F8F8F8"},
        {"v0":69,"v1":68,"bCoef":0.1,"curve":179.99175181595,"curveF":0.0000719789846157737,"cMask":[],"color":"F8F8F8"},
        {"v0":70,"v1":71,"bCoef":0.1,"curve":-179.95284437602004,"curveF":-0.0004115104728700557,"cMask":[],"color":"F8F8F8"},
        {"v0":71,"v1":70,"bCoef":0.1,"curve":179.95294709391,"curveF":0.0004106140900279739,"cMask":[],"color":"F8F8F8"},
        {"v0":72,"v1":73,"bCoef":0.1,"curve":179.95715750564,"curveF":0.0003738713105943949,"cMask":[],"color":"F8F8F8"},
        {"v0":73,"v1":72,"bCoef":0.1,"curve":179.89943871875,"curveF":0.0008775629541936324,"cMask":[],"color":"F8F8F8"},
        {"v0":74,"v1":75,"bCoef":0.1,"curve":179.94773754738,"curveF":0.0004560759683152962,"cMask":[],"color":"F8F8F8"},
        {"v0":75,"v1":74,"bCoef":0.1,"curve":179.98221351296,"curveF":0.0001552163818523414,"cMask":[],"color":"F8F8F8"},
        {"v0":76,"v1":77,"bCoef":0.1,"curve":-179.58482727820004,"curveF":-0.003623081332869217,"cMask":[],"color":"F8F8F8"},
        {"v0":77,"v1":76,"bCoef":0.1,"curve":179.58764458796,"curveF":0.0035984953466450956,"cMask":[],"color":"F8F8F8"},
        {"v0":78,"v1":79,"bCoef":0.1,"curve":-179.99913353641003,"curveF":-0.0000075613212472121415,"cMask":[],"color":"F8F8F8"},
        {"v0":79,"v1":78,"bCoef":0.1,"curve":-179.98034013624,"curveF":-0.00017156467823623532,"cMask":[],"color":"F8F8F8"},
        {"v0":80,"v1":81,"bCoef":0.1,"curve":-179.96467398611003,"curveF":-0.00030827763675859586,"cMask":[],"color":"F8F8F8"},
        {"v0":81,"v1":80,"bCoef":0.1,"curve":179.99380079,"curveF":0.000054098312814100194,"cMask":[],"color":"F8F8F8"},
        {"v0":82,"v1":83,"bCoef":0.1,"curve":-179.99555315480004,"curveF":-0.00003880604505256444,"cMask":[],"color":"F8F8F8"},
        {"v0":83,"v1":82,"bCoef":0.1,"curve":-179.98613220153004,"curveF":-0.00012101937224284073,"cMask":[],"color":"F8F8F8"},
        {"v0":84,"v1":85,"bCoef":0.1,"curve":-179.94841712437002,"curveF":-0.00045014553909957075,"cMask":[],"color":"F8F8F8"},
        {"v0":85,"v1":84,"bCoef":0.1,"curve":-179.98787776122,"curveF":-0.00010578649010659523,"cMask":[],"color":"F8F8F8"},
        {"v0":86,"v1":87,"bCoef":0.1,"cMask":[],"color":"F8F8F8"},
        {"v0":88,"v1":89,"bCoef":0.1,"cMask":[],"color":"F8F8F8"},
        {"v0":90,"v1":91,"bCoef":0.1,"cMask":[],"color":"F8F8F8"},
        {"v0":92,"v1":93,"bCoef":0.1,"cMask":[],"color":"F8F8F8"},
        {"v0":94,"v1":95,"bCoef":0.1,"cMask":[],"color":"F8F8F8"},
        {"v0":96,"v1":97,"bCoef":0.1,"cMask":[],"color":"F8F8F8"},
        {"v0":98,"v1":99,"bCoef":0.1,"cMask":[],"color":"F8F8F8"},
        {"v0":100,"v1":101,"bCoef":0.1,"cMask":[],"color":"F8F8F8"},
        {"v0":102,"v1":103,"bCoef":0.1,"cMask":[],"color":"F8F8F8"},
        {"v0":104,"v1":105,"bCoef":0.1,"cMask":[],"color":"F8F8F8"},
        {"v0":106,"v1":107,"bCoef":0.1,"cMask":[],"color":"F8F8F8"},
        {"v0":108,"v1":109,"bCoef":0.1,"cMask":[],"color":"F8F8F8"},
        {"v0":110,"v1":111,"vis":false,"cMask":["ball"],"color":"FFFFFF"},
        {"v0":112,"v1":113,"vis":false,"cMask":["ball"],"color":"FFFFFF"},
        {"v0":114,"v1":115,"vis":false,"cMask":["ball"],"color":"FFFFFF"},
        {"v0":116,"v1":117,"vis":false,"cMask":["ball"],"color":"FFFFFF"},
        {"v0":118,"v1":119,"bCoef":0,"vis":false,"cMask":["ball"],"color":"FFFFFF"},
        {"v0":120,"v1":121,"bCoef":0,"vis":false,"cMask":["ball"],"color":"FFFFFF"},
        {"v0":122,"v1":123,"bCoef":0,"vis":false,"cMask":["ball"],"color":"FFFFFF"},
        {"v0":124,"v1":125,"bCoef":0,"vis":false,"cMask":["ball"],"color":"FFFFFF"}
    ],
    "planes":[
        {"normal":[0,1],"dist":-171,"cMask":["ball"]},
        {"normal":[0,-1],"dist":-171,"cMask":["ball"]},
        {"normal":[0,1],"dist":-200,"bCoef":0.2},
        {"normal":[0,-1],"dist":-200,"bCoef":0.2},
        {"normal":[1,0],"dist":-420,"bCoef":0.2},
        {"normal":[-1,0],"dist":-420,"bCoef":0.2}
    ],
    "goals":[
        {"p0":[-374.25,-62.053454903872],"p1":[-374.25,64.043361696331],"team":"red"},
        {"p0":[374.25,62],"p1":[374.25,-62],"team":"blue"}
    ],
    "discs":[
        {"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FFCC00","cGroup":["ball","kick","score"]},
        {"pos":[-368.53340356886,64.043361696331],"radius":3.9405255187564,"bCoef":1,"invMass":0,"color":"6666CC"},
        {"pos":[-368.53340356886,-62.053454903872],"radius":3.9405255187564,"bCoef":1,"invMass":0,"color":"6666CC"},
        {"pos":[368.9681846993,-62.144998272018],"radius":3.9405255187564,"bCoef":1,"invMass":0,"color":"6666CC"},
        {"pos":[368.09926357786,63.94882446641],"radius":3.9405255187564,"bCoef":1,"invMass":0,"color":"6666CC"},
        {"pos":[-368,-171],"radius":3,"bCoef":0.1,"invMass":0,"color":"FFCC00","cMask":[]},
        {"pos":[-368,171],"radius":3,"bCoef":0.1,"invMass":0,"color":"FFCC00","cMask":[]},
        {"pos":[368,171],"radius":3,"bCoef":0.1,"invMass":0,"color":"FFCC00","cMask":[]},
        {"pos":[368,-171],"radius":3,"bCoef":0.1,"invMass":0,"color":"FFCC00","cMask":[]}
    ],
    "playerPhysics":{
        "bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083
    },
    "ballPhysics":"disc0",
    "spawnDistance":180
};*/