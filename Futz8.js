/* ROOM */

const botVersion = "Futz 8";
const roomName = "⚽ FutZ 3x3 🏆 | Cola na humildade 🎯";
/* NOMES SUGERIDOS:
1: 🏆 3x3 Futsal ⚽ | Cola na humildade
2: 🏆 SABOT | ⚽ 3x3 Futsal ⚽ | Cola na humildade
3: 🏆 FuteLab | ⚽ Futsal ⚽ | Cola na humildade
4: 🎯 SABOT | ⚽ Futsal ⚽ | Cola na humildade
5: 🎯 saBOT | ⚽ Futsal ⚽ | 3x3 | Cola na humildade
6: 🎯 FuteLab | ⚽ Futsal ⚽ | 3x3 | Cola na humildade
7: 🎯 Futsal ⚽ 3x3 🏆 | Cola na humildade
8: 🎯 Cola na humildade | ⚽ Futsal 3x3 🏆
9: ⚽ FutZ 3x3 🏆 | Cola na humildade 🎯
*/
const botName = "🏁 Áʀʙɪᴛʀᴏ ʙᴏᴛ 🤖";
let linkinho = "";
const maxPlayers = 20;
const roomPublic = true;
const geo = [{ "lat": -23.646709, "lon": -46.730114, "code": "br" }, { "code": "FR", "lat": 46.2, "lon": 2.2 }, { "code": "PL", "lat": 51.9, "lon": 19.1 }, { "code": "GB", "lat": 55.3, "lon": -3.4 }, { "code": "PT", "lat": 39.3, "lon": -8.2 }];

const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[0] });
const scoreLimit = 3;
const timeLimit = 3;
room.setScoreLimit(scoreLimit);
room.setTimeLimit(timeLimit);
room.setTeamsLock(true);
let keyCommand = generateRandomPassword();
var adminPassword = generateAdminRandomPassword();
console.log("adminPassword : " + adminPassword);

/* STADIUM */

const playerRadius = 15;
var ballRadius = 10;
const triggerDistance = playerRadius + ballRadius + 0.01;
const smallStadium = `{"name":"𝒙2 𝓑𝔂 Malco","width":420,"height":200,"bg":{"width":368,"height":171,"canBeStored":false,"kickOffRadius":65,"color":"1E472E"},
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
    {"x":0,"y":-65,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":377,"y":-65,"cMask":["ball"]},
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
    {"x":-371,"y":-171,"bCoef":0,"cMask":["ball"]}
],
"segments":[
    {"v0":0,"v1":1,"vis":false,"cMask":["ball"]},
    {"v0":2,"v1":3,"vis":false,"cMask":["ball"]},
    {"v0":4,"v1":5,"vis":false,"cMask":["ball"]},
    {"v0":6,"v1":7,"vis":false,"cMask":["ball"]},
    {"v0":8,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},
    {"v0":9,"v1":8,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},
    {"v0":1,"v1":0,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":5,"v1":4,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":2,"v1":3,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":6,"v1":7,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":0,"v1":10,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":3,"v1":11,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":12,"v1":13,"bCoef":0,"cMask":[],"color":"A3A3A3"},
    {"v0":8,"v1":9,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":15,"v1":14,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"A3A3A3"},
    {"v0":2,"v1":1,"bCoef":0,"cMask":[],"color":"A3A3A3"},
    {"v0":6,"v1":5,"bCoef":0,"cMask":[],"color":"A3A3A3"},
    {"v0":16,"v1":17,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":18,"v1":19,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":20,"v1":21,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":22,"v1":23,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":24,"v1":25,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"v0":26,"v1":27,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"v0":28,"v1":29,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"A3A3A3"},
    {"v0":29,"v1":30,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"A3A3A3"},
    {"v0":30,"v1":31,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"A3A3A3"},
    {"v0":32,"v1":33,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"A3A3A3"},
    {"v0":33,"v1":34,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"A3A3A3"},
    {"v0":34,"v1":35,"bCoef":0.1,"cMask":["red","blue","ball"],"color":"A3A3A3"},
    {"v0":36,"v1":37,"bCoef":0.1,"curve":94.0263701017,"curveF":0.9320849449101076,"cMask":[],"color":"A3A3A3"},
    {"v0":39,"v1":38,"bCoef":0.1,"curve":86.632306418889,"curveF":1.060575000344919,"cMask":[],"color":"A3A3A3"},
    {"v0":41,"v1":40,"bCoef":0.1,"curve":94.026370101699,"curveF":0.9320849449101238,"cMask":[],"color":"A3A3A3"},
    {"v0":37,"v1":41,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":42,"v1":43,"bCoef":0.1,"curve":86.632306418888,"curveF":1.0605750003449375,"cMask":[],"color":"A3A3A3"},
    {"v0":45,"v1":44,"bCoef":0.1,"curve":86.632306418884,"curveF":1.0605750003450118,"cMask":[],"color":"A3A3A3"},
    {"v0":46,"v1":47,"bCoef":0.1,"curve":86.632306418899,"curveF":1.0605750003447336,"cMask":[],"color":"A3A3A3"},
    {"v0":49,"v1":48,"bCoef":0.1,"curve":94.026370101699,"curveF":0.9320849449101238,"cMask":[],"color":"A3A3A3"},
    {"v0":50,"v1":51,"bCoef":0.1,"curve":94.026370101699,"curveF":0.9320849449101238,"cMask":[],"color":"A3A3A3"},
    {"v0":52,"v1":53,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":54,"v1":55,"bCoef":0.1,"curve":-179.99307079708004,"curveF":-0.000060468702819980624,"cMask":[],"color":"A3A3A3"},
    {"v0":55,"v1":54,"bCoef":0.1,"curve":-179.99781759386002,"curveF":-0.000019045086381751383,"cMask":[],"color":"A3A3A3"},
    {"v0":56,"v1":57,"bCoef":0.1,"curve":179.64823645332,"curveF":0.0030697256812038513,"cMask":[],"color":"A3A3A3"},
    {"v0":57,"v1":56,"bCoef":0.1,"curve":-179.64241331853003,"curveF":-0.003120542605465436,"cMask":[],"color":"A3A3A3"},
    {"v0":58,"v1":59,"bCoef":0.1,"curve":-179.97642676038004,"curveF":-0.00020571532626703233,"cMask":[],"color":"A3A3A3"},
    {"v0":59,"v1":58,"bCoef":0.1,"curve":-179.99075897601003,"curveF":-0.00008064314761547242,"cMask":[],"color":"A3A3A3"},
    {"v0":60,"v1":61,"bCoef":0.1,"curve":-179.93114244115003,"curveF":-0.0006008956307319741,"cMask":[],"color":"A3A3A3"},
    {"v0":61,"v1":60,"bCoef":0.1,"curve":-179.97051646743003,"curveF":-0.0002572923649102433,"cMask":[],"color":"A3A3A3"},
    {"v0":62,"v1":63,"bCoef":0.1,"curve":179.99869069543,"curveF":0.000011425837829318613,"cMask":[],"color":"A3A3A3"},
    {"v0":63,"v1":62,"bCoef":0.1,"curve":179.99939258776004,"curveF":0.000005300671752306162,"cMask":[],"color":"A3A3A3"},
    {"v0":64,"v1":65,"bCoef":0.1,"curve":-179.91173952837002,"curveF":-0.0007702180669602502,"cMask":[],"color":"A3A3A3"},
    {"v0":65,"v1":64,"bCoef":0.1,"curve":179.91186753664,"curveF":0.0007691009834080061,"cMask":[],"color":"A3A3A3"},
    {"v0":66,"v1":67,"bCoef":0.1,"curve":179.99528711105,"curveF":0.000041127714752444664,"cMask":[],"color":"A3A3A3"},
    {"v0":67,"v1":66,"bCoef":0.1,"curve":179.99743836358,"curveF":0.000022354494887865286,"cMask":[],"color":"A3A3A3"},
    {"v0":68,"v1":69,"bCoef":0.1,"curve":179.98626041101,"curveF":0.00011990053344777071,"cMask":[],"color":"A3A3A3"},
    {"v0":69,"v1":68,"bCoef":0.1,"curve":179.99175181595,"curveF":0.0000719789846157737,"cMask":[],"color":"A3A3A3"},
    {"v0":70,"v1":71,"bCoef":0.1,"curve":-179.95284437602004,"curveF":-0.0004115104728700557,"cMask":[],"color":"A3A3A3"},
    {"v0":71,"v1":70,"bCoef":0.1,"curve":179.95294709391,"curveF":0.0004106140900279739,"cMask":[],"color":"A3A3A3"},
    {"v0":72,"v1":73,"bCoef":0.1,"curve":179.95715750564,"curveF":0.0003738713105943949,"cMask":[],"color":"A3A3A3"},
    {"v0":73,"v1":72,"bCoef":0.1,"curve":179.89943871875,"curveF":0.0008775629541936324,"cMask":[],"color":"A3A3A3"},
    {"v0":74,"v1":75,"bCoef":0.1,"curve":179.94773754738,"curveF":0.0004560759683152962,"cMask":[],"color":"A3A3A3"},
    {"v0":75,"v1":74,"bCoef":0.1,"curve":179.98221351296,"curveF":0.0001552163818523414,"cMask":[],"color":"A3A3A3"},
    {"v0":76,"v1":77,"bCoef":0.1,"curve":-179.58482727820004,"curveF":-0.003623081332869217,"cMask":[],"color":"A3A3A3"},
    {"v0":77,"v1":76,"bCoef":0.1,"curve":179.58764458796,"curveF":0.0035984953466450956,"cMask":[],"color":"A3A3A3"},
    {"v0":78,"v1":79,"bCoef":0.1,"curve":-179.99913353641003,"curveF":-0.0000075613212472121415,"cMask":[],"color":"A3A3A3"},
    {"v0":79,"v1":78,"bCoef":0.1,"curve":-179.98034013624,"curveF":-0.00017156467823623532,"cMask":[],"color":"A3A3A3"},
    {"v0":80,"v1":81,"bCoef":0.1,"curve":-179.96467398611003,"curveF":-0.00030827763675859586,"cMask":[],"color":"A3A3A3"},
    {"v0":81,"v1":80,"bCoef":0.1,"curve":179.99380079,"curveF":0.000054098312814100194,"cMask":[],"color":"A3A3A3"},
    {"v0":82,"v1":83,"bCoef":0.1,"curve":-179.99555315480004,"curveF":-0.00003880604505256444,"cMask":[],"color":"A3A3A3"},
    {"v0":83,"v1":82,"bCoef":0.1,"curve":-179.98613220153004,"curveF":-0.00012101937224284073,"cMask":[],"color":"A3A3A3"},
    {"v0":84,"v1":85,"bCoef":0.1,"curve":-179.94841712437002,"curveF":-0.00045014553909957075,"cMask":[],"color":"A3A3A3"},
    {"v0":85,"v1":84,"bCoef":0.1,"curve":-179.98787776122,"curveF":-0.00010578649010659523,"cMask":[],"color":"A3A3A3"},
    {"v0":86,"v1":87,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":88,"v1":89,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":90,"v1":91,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":92,"v1":93,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":94,"v1":95,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":96,"v1":97,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":98,"v1":99,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":100,"v1":101,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":102,"v1":103,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":104,"v1":105,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":106,"v1":107,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":108,"v1":109,"bCoef":0.1,"cMask":[],"color":"A3A3A3"},
    {"v0":110,"v1":111,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":112,"v1":113,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":114,"v1":115,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":116,"v1":117,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":118,"v1":119,"bCoef":0,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":120,"v1":121,"bCoef":0,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":122,"v1":123,"bCoef":0,"vis":false,"cMask":["ball"],"color":"A3A3A3"},
    {"v0":124,"v1":125,"bCoef":0,"vis":false,"cMask":["ball"],"color":"A3A3A3"}
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
    {"p0":[374.25,62],"p1":[374.25,-62],"team":"blue"}],"discs":[{"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FFCC00","cGroup":["ball","kick","score"]},
    {"pos":[-368.53340356886,64.043361696331],"radius":3.9405255187564,"bCoef":1,"invMass":0,"color":"6666CC"},
    {"pos":[-368.53340356886,-62.053454903872],"radius":3.9405255187564,"bCoef":1,"invMass":0,"color":"6666CC"},
    {"pos":[368.9681846993,-62.144998272018],"radius":3.9405255187564,"bCoef":1,"invMass":0,"color":"6666CC"},
    {"pos":[368.09926357786,63.94882446641],"radius":3.9405255187564,"bCoef":1,"invMass":0,"color":"6666CC"},
    {"pos":[-368,-171],"radius":3,"bCoef":0.1,"invMass":0,"color":"FFCC00","cMask":[]},
    {"pos":[-368,171],"radius":3,"bCoef":0.1,"invMass":0,"color":"FFCC00","cMask":[]},
    {"pos":[368,171],"radius":3,"bCoef":0.1,"invMass":0,"color":"FFCC00","cMask":[]},
    {"pos":[368,-171],"radius":3,"bCoef":0.1,"invMass":0,"color":"FFCC00","cMask":[]}
],
"playerPhysics" : {
    "bCoef" : 0,
    "acceleration" : 0.11,
    "kickingAcceleration" : 0.13,
    "kickStrength" : 4.75,
    "kickback" : 1.80,
},
"ballPhysics":"disc0","spawnDistance":180}`
const mediumStadium = `{"name" : "𝒙3 𝓑𝔂 Malco", "width" : 620, "height" : 270,
	"bg" : { "width" : 550, "height" : 240, "canBeStored" : false, "kickOffRadius" : 80, "color" : "1E472E" },

	"vertexes" : [
		/* 0 */ { "x" : 550, "y" : 240, "cMask" : ["ball" ] },
		/* 1 */ { "x" : 550, "y" : -240, "cMask" : ["ball" ] },
		/* 2 */ { "x" : 0, "y" : 270, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 3 */ { "x" : 0, "y" : 80, "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 4 */ { "x" : 0, "y" : -80, "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 5 */ { "x" : 0, "y" : -270, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 6 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 7 */ { "x" : -590, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 8 */ { "x" : -590, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 9 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 10 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 11 */ { "x" : 590, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 12 */ { "x" : 590, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 13 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 14 */ { "x" : -550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 15 */ { "x" : -550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 16 */ { "x" : -550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 17 */ { "x" : -550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 18 */ { "x" : -550, "y" : 240, "cMask" : ["ball" ] },
		/* 19 */ { "x" : 550, "y" : 240, "cMask" : ["ball" ] },
		/* 20 */ { "x" : 550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 21 */ { "x" : 550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 22 */ { "x" : 550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 23 */ { "x" : 550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 24 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 25 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 26 */ { "x" : -550, "y" : -240, "cMask" : ["ball" ] },
		/* 27 */ { "x" : 550, "y" : -240, "cMask" : ["ball" ] },
		/* 28 */ { "x" : 0, "y" : -240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 29 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 30 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 31 */ { "x" : 0, "y" : 240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 32 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 33 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 34 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 35 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 36 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 37 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 38 */ { "x" : -557.5, "y" : 80, "cMask" : ["ball" ] },
		/* 39 */ { "x" : -557.5, "y" : 240, "cMask" : ["ball" ] },
		/* 40 */ { "x" : -557.5, "y" : -240, "cMask" : ["ball" ] },
		/* 41 */ { "x" : -557.5, "y" : -80, "cMask" : ["ball" ] },
		/* 42 */ { "x" : 557.5, "y" : -240, "cMask" : ["ball" ] },
		/* 43 */ { "x" : 557.5, "y" : -80, "cMask" : ["ball" ] },
		/* 44 */ { "x" : 557.5, "y" : 80, "cMask" : ["ball" ] },
		/* 45 */ { "x" : 557.5, "y" : 240, "cMask" : ["ball" ] },
		/* 46 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : [ ] },
		/* 47 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : [ ] },
		/* 48 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "cMask" : [ ] },
		/* 49 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "cMask" : [ ] },
		/* 50 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "cMask" : [ ] },
		/* 51 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "cMask" : [ ] },
		/* 52 */ { "x" : -240, "y" : 256, "bCoef" : 0.1, "cMask" : [ ] },
		/* 53 */ { "x" : -120, "y" : 256, "bCoef" : 0.1, "cMask" : [ ] },
		/* 54 */ { "x" : -240, "y" : -256, "bCoef" : 0.1, "cMask" : [ ] },
		/* 55 */ { "x" : -120, "y" : -224, "bCoef" : 0.1, "cMask" : [ ] },
		/* 56 */ { "x" : -120, "y" : -256, "bCoef" : 0.1, "cMask" : [ ] },
		/* 57 */ { "x" : 240, "y" : 256, "bCoef" : 0.1, "cMask" : [ ] },
		/* 58 */ { "x" : 120, "y" : 224, "bCoef" : 0.1, "cMask" : [ ] },
		/* 59 */ { "x" : 120, "y" : 256, "bCoef" : 0.1, "cMask" : [ ] },
		/* 60 */ { "x" : 240, "y" : -224, "bCoef" : 0.1, "cMask" : [ ] },
		/* 61 */ { "x" : 240, "y" : -256, "bCoef" : 0.1, "cMask" : [ ] },
		/* 62 */ { "x" : 120, "y" : -224, "bCoef" : 0.1, "cMask" : [ ] },
		/* 63 */ { "x" : 120, "y" : -256, "bCoef" : 0.1, "cMask" : [ ] },
		/* 64 */ { "x" : -381, "y" : 240, "bCoef" : 0.1, "cMask" : [ ] },
		/* 65 */ { "x" : -381, "y" : 256, "bCoef" : 0.1, "cMask" : [ ] },
		/* 66 */ { "x" : -550, "y" : 200, "bCoef" : 0.1, "cMask" : [ ] },
		/* 67 */ { "x" : -390, "y" : 70, "bCoef" : 0.1, "cMask" : [ ] },
		/* 68 */ { "x" : -550, "y" : 226, "bCoef" : 0.1, "cMask" : [ ] },
		/* 69 */ { "x" : -536, "y" : 240, "bCoef" : 0.1, "cMask" : [ ] },
		/* 70 */ { "x" : -550, "y" : -200, "bCoef" : 0.1, "cMask" : [ ] },
		/* 71 */ { "x" : -390, "y" : -70, "bCoef" : 0.1, "cMask" : [ ] },
		/* 72 */ { "x" : -550, "y" : -226, "bCoef" : 0.1, "cMask" : [ ] },
		/* 73 */ { "x" : -536, "y" : -240, "bCoef" : 0.1, "cMask" : [ ] },
		/* 74 */ { "x" : -556, "y" : 123, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 75 */ { "x" : -575, "y" : 123, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 76 */ { "x" : 556, "y" : 123, "bCoef" : 0.1, "cMask" : [ ] },
		/* 77 */ { "x" : 575, "y" : 123, "bCoef" : 0.1, "cMask" : [ ] },
		/* 78 */ { "x" : -556, "y" : -123, "bCoef" : 0.1, "cMask" : [ ] },
		/* 79 */ { "x" : -575, "y" : -123, "bCoef" : 0.1, "cMask" : [ ] },
		/* 80 */ { "x" : 556, "y" : -123, "bCoef" : 0.1, "cMask" : [ ] },
		/* 81 */ { "x" : 575, "y" : -123, "bCoef" : 0.1, "cMask" : [ ] },
		/* 82 */ { "x" : -381, "y" : -240, "bCoef" : 0.1, "cMask" : [ ] },
		/* 83 */ { "x" : -381, "y" : -256, "bCoef" : 0.1, "cMask" : [ ] },
		/* 84 */ { "x" : 381, "y" : 240, "bCoef" : 0.1, "cMask" : [ ] },
		/* 85 */ { "x" : 381, "y" : 256, "bCoef" : 0.1, "cMask" : [ ] },
		/* 86 */ { "x" : 381, "y" : -240, "bCoef" : 0.1, "cMask" : [ ] },
		/* 87 */ { "x" : 381, "y" : -256, "bCoef" : 0.1, "cMask" : [ ] },
		/* 88 */ { "x" : 550, "y" : -226, "bCoef" : 0.1, "cMask" : [ ] },
		/* 89 */ { "x" : 536, "y" : -240, "bCoef" : 0.1, "cMask" : [ ] },
		/* 90 */ { "x" : 550, "y" : 226, "bCoef" : 0.1, "cMask" : [ ] },
		/* 91 */ { "x" : 536, "y" : 240, "bCoef" : 0.1, "cMask" : [ ] },
		/* 92 */ { "x" : 550, "y" : 200, "bCoef" : 0.1, "cMask" : [ ] },
		/* 93 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "cMask" : [ ] },
		/* 94 */ { "x" : 550, "y" : -200, "bCoef" : 0.1, "cMask" : [ ] },
		/* 95 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "cMask" : [ ] },
		/* 96 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "cMask" : [ ] },
		/* 97 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "cMask" : [ ] },
		/* 98 */ { "x" : -375, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 99 */ { "x" : -375, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 100 */ { "x" : -375, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 101 */ { "x" : -375, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 102 */ { "x" : -375, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 103 */ { "x" : -375, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 104 */ { "x" : -375, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 105 */ { "x" : -375, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 106 */ { "x" : 375, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 107 */ { "x" : 375, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 108 */ { "x" : 375, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 109 */ { "x" : 375, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 110 */ { "x" : 375, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 111 */ { "x" : 375, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 112 */ { "x" : 375, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 113 */ { "x" : 375, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 114 */ { "x" : -277.5, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 115 */ { "x" : -277.5, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 116 */ { "x" : -277.5, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 117 */ { "x" : -277.5, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 118 */ { "x" : -277.5, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 119 */ { "x" : -277.5, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 120 */ { "x" : -277.5, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 121 */ { "x" : -277.5, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 122 */ { "x" : 277.5, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 123 */ { "x" : 277.5, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 124 */ { "x" : 277.5, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 125 */ { "x" : 277.5, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 126 */ { "x" : 277.5, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 127 */ { "x" : 277.5, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 128 */ { "x" : 277.5, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 129 */ { "x" : 277.5, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 130 */ { "x" : 25.579573607945424, "y" : 14.195040368438034, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 131 */ { "x" : 4.201509890157475, "y" : 12.87543637949374, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 132 */ { "x" : 5.341759182723941, "y" : 12.670346245438841, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 133 */ { "x" : 25.96401843837808, "y" : 2.8478034359732387, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 134 */ { "x" : 26.946568393638618, "y" : 2.275816964371094, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 135 */ { "x" : 6.199302025074452, "y" : 1.5862087375256149, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 136 */ { "x" : 12.617571551172052, "y" : -4.505254539784554, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 137 */ { "x" : -7.075693944935857, "y" : -6.403356627892302, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 138 */ { "x" : -1.0427572602601387, "y" : 17.612126539108537, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 139 */ { "x" : 2.6928475096579874, "y" : -7.138752477236759, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 140 */ { "x" : -15.00084982955459, "y" : 15.453428718385643, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 141 */ { "x" : -17.779209203615643, "y" : 1.7447096619565254, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 142 */ { "x" : -7.1118750286323476, "y" : 14.667336793230836, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 143 */ { "x" : -5.703088049367786, "y" : 2.112407586628782, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 144 */ { "x" : -6.906489877079544, "y" : 13.564243019214237, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 145 */ { "x" : -15.510907273085827, "y" : 14.137031077941364, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 146 */ { "x" : -22.412718682934063, "y" : 18.29201678989272, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 147 */ { "x" : -27.083470104666425, "y" : -19.229302199734327, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 148 */ { "x" : 28.9972652788045, "y" : -13.878648020520368, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 149 */ { "x" : -28.18736546580805, "y" : -18.283106175898673, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 150 */ { "x" : -8.377477662704827, "y" : -6.309079829834966, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 151 */ { "x" : -28.660463477725877, "y" : -3.9324664810574834, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 }

	],

	"segments" : [
		{ "v0" : 6, "v1" : 7, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 7, "v1" : 8, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 8, "v1" : 9, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 10, "v1" : 11, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 11, "v1" : 12, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 12, "v1" : 13, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 2, "v1" : 3, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 3, "v1" : 4, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 4, "v1" : 3, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 4, "v1" : 5, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 14, "v1" : 15, "color" : "A3A3A3", "bCoef" : 1.15, "cMask" : ["ball" ] },
		{ "v0" : 16, "v1" : 17, "color" : "A3A3A3", "bCoef" : 1.15, "cMask" : ["ball" ] },
		{ "v0" : 18, "v1" : 19, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 20, "v1" : 21, "color" : "A3A3A3", "bCoef" : 1.15, "cMask" : ["ball" ] },
		{ "v0" : 22, "v1" : 23, "color" : "A3A3A3", "bCoef" : 1.15, "cMask" : ["ball" ] },
		{ "v0" : 24, "v1" : 25, "color" : "A3A3A3", "bCoef" : 0, "cMask" : ["ball" ] },
		{ "v0" : 26, "v1" : 27, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 28, "v1" : 29, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 30, "v1" : 31, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 38, "v1" : 39, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 40, "v1" : 41, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 42, "v1" : 43, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 44, "v1" : 45, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 48, "v1" : 49, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 50, "v1" : 51, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 64, "v1" : 65, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 67, "v1" : 66, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 68, "v1" : 69, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 70, "v1" : 71, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 67, "v1" : 71, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 73, "v1" : 72, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 74, "v1" : 75, "curve" : 0, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 76, "v1" : 77, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 78, "v1" : 79, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 80, "v1" : 81, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 82, "v1" : 83, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 84, "v1" : 85, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 86, "v1" : 87, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 88, "v1" : 89, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 91, "v1" : 90, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 92, "v1" : 93, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 95, "v1" : 94, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 96, "v1" : 97, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 99, "v1" : 98, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 98, "v1" : 99, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 101, "v1" : 100, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 100, "v1" : 101, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 103, "v1" : 102, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 102, "v1" : 103, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 105, "v1" : 104, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 104, "v1" : 105, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 107, "v1" : 106, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 106, "v1" : 107, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 109, "v1" : 108, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 108, "v1" : 109, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 111, "v1" : 110, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 110, "v1" : 111, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 113, "v1" : 112, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 112, "v1" : 113, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 115, "v1" : 114, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 114, "v1" : 115, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 117, "v1" : 116, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 116, "v1" : 117, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 119, "v1" : 118, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 118, "v1" : 119, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 121, "v1" : 120, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 120, "v1" : 121, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 123, "v1" : 122, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 122, "v1" : 123, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 125, "v1" : 124, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 124, "v1" : 125, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 127, "v1" : 126, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 126, "v1" : 127, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 129, "v1" : 128, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 128, "v1" : 129, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 130, "v1" : 131, "curve" : 20.51603897282983, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 132, "v1" : 133, "curve" : -26.84377023884017, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 134, "v1" : 135, "curve" : -19.98953381650154, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 136, "v1" : 137, "curve" : -13.914554464444254, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 138, "v1" : 139, "curve" : -0.5701201075717648, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 140, "v1" : 141, "curve" : 25.56149861163487, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 142, "v1" : 143, "curve" : -21.374955486010695, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 144, "v1" : 145, "curve" : 169.5038403318501, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 146, "v1" : 147, "curve" : 36.73684782636961, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 148, "v1" : 149, "curve" : -31.559116150341154, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 150, "v1" : 151, "curve" : -19.785231526942916, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -240, "cMask" : ["ball" ] },
		{ "normal" : [0,-1 ], "dist" : -240, "cMask" : ["ball" ] },
		{ "normal" : [0,1 ], "dist" : -270, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -270, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1, "cMask" : ["ball" ] },
		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1, "cMask" : ["ball" ] }

	],

	"goals" : [
		{ "p0" : [-557.5,-80 ], "p1" : [-557.5,80 ], "team" : "red" },
		{ "p0" : [557.5,80 ], "p1" : [557.5,-80 ], "team" : "blue" }

	],

	"discs" : [
		{ "radius" : 6.25, "invMass" : 1.5, "pos" : [0,0 ], "color" : "FFCC00", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 5, "invMass" : 0, "pos" : [-550,80 ], "color" : "FF6666" },
		{ "radius" : 5, "invMass" : 0, "pos" : [-550,-80 ], "color" : "FF6666" },
		{ "radius" : 5, "invMass" : 0, "pos" : [550,80 ], "color" : "6666FF" },
		{ "radius" : 5, "invMass" : 0, "pos" : [550,-80 ], "color" : "6666FF" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] },
		{ "radius" : 3, "invMass" : 0, "pos" : [-550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] },
		{ "radius" : 3, "invMass" : 0, "pos" : [550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] },
		{ "radius" : 3, "invMass" : 0, "pos" : [550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] }

	],

	"playerPhysics" : {
		"bCoef" : 0,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.13,
		"kickStrength" : 4.75,
        "kickback" : 1.80,
 	},

	"ballPhysics" : "disc0",

	"spawnDistance" : 350,

	"traits" : {
		

	},

	"joints" : [
		

	],

	"redSpawnPoints" : [
		

	],

	"blueSpawnPoints" : [
		

	]
}`
const mediumBlue = `{"name" : "𝒙3 𝓑𝔂 Malco", "width" : 620, "height" : 270,
"bg" : { "width" : 550, "height" : 240, "canBeStored" : false, "kickOffRadius" : 80, "color" : "1E472E" },

"vertexes" : [
    /* 0 */ { "x" : 550, "y" : 240, "cMask" : ["ball" ] },
    /* 1 */ { "x" : 550, "y" : -240, "cMask" : ["ball" ] },
    /* 2 */ { "x" : 0, "y" : 270, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 3 */ { "x" : 0, "y" : 80, "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 4 */ { "x" : 0, "y" : -80, "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 5 */ { "x" : 0, "y" : -270, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 6 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    /* 7 */ { "x" : -590, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    /* 8 */ { "x" : -590, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    /* 9 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    /* 10 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    /* 11 */ { "x" : 590, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    /* 12 */ { "x" : 590, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    /* 13 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    /* 14 */ { "x" : -550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ] },
    /* 15 */ { "x" : -550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ] },
    /* 16 */ { "x" : -550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ] },
    /* 17 */ { "x" : -550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ] },
    /* 18 */ { "x" : -550, "y" : 240, "cMask" : ["ball" ] },
    /* 19 */ { "x" : 550, "y" : 240, "cMask" : ["ball" ] },
    /* 20 */ { "x" : 550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ] },
    /* 21 */ { "x" : 550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ] },
    /* 22 */ { "x" : 550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ] },
    /* 23 */ { "x" : 550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ] },
    /* 24 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ] },
    /* 25 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ] },
    /* 26 */ { "x" : -550, "y" : -240, "cMask" : ["ball" ] },
    /* 27 */ { "x" : 550, "y" : -240, "cMask" : ["ball" ] },
    /* 28 */ { "x" : 0, "y" : -240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 29 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 30 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 31 */ { "x" : 0, "y" : 240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 32 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 33 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 34 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 35 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 36 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 37 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 38 */ { "x" : -557.5, "y" : 80, "cMask" : ["ball" ] },
    /* 39 */ { "x" : -557.5, "y" : 240, "cMask" : ["ball" ] },
    /* 40 */ { "x" : -557.5, "y" : -240, "cMask" : ["ball" ] },
    /* 41 */ { "x" : -557.5, "y" : -80, "cMask" : ["ball" ] },
    /* 42 */ { "x" : 557.5, "y" : -240, "cMask" : ["ball" ] },
    /* 43 */ { "x" : 557.5, "y" : -80, "cMask" : ["ball" ] },
    /* 44 */ { "x" : 557.5, "y" : 80, "cMask" : ["ball" ] },
    /* 45 */ { "x" : 557.5, "y" : 240, "cMask" : ["ball" ] },
    /* 46 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : [ ] },
    /* 47 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : [ ] },
    /* 48 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "cMask" : [ ] },
    /* 49 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "cMask" : [ ] },
    /* 50 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "cMask" : [ ] },
    /* 51 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "cMask" : [ ] },
    /* 52 */ { "x" : -240, "y" : 256, "bCoef" : 0.1, "cMask" : [ ] },
    /* 53 */ { "x" : -120, "y" : 256, "bCoef" : 0.1, "cMask" : [ ] },
    /* 54 */ { "x" : -240, "y" : -256, "bCoef" : 0.1, "cMask" : [ ] },
    /* 55 */ { "x" : -120, "y" : -224, "bCoef" : 0.1, "cMask" : [ ] },
    /* 56 */ { "x" : -120, "y" : -256, "bCoef" : 0.1, "cMask" : [ ] },
    /* 57 */ { "x" : 240, "y" : 256, "bCoef" : 0.1, "cMask" : [ ] },
    /* 58 */ { "x" : 120, "y" : 224, "bCoef" : 0.1, "cMask" : [ ] },
    /* 59 */ { "x" : 120, "y" : 256, "bCoef" : 0.1, "cMask" : [ ] },
    /* 60 */ { "x" : 240, "y" : -224, "bCoef" : 0.1, "cMask" : [ ] },
    /* 61 */ { "x" : 240, "y" : -256, "bCoef" : 0.1, "cMask" : [ ] },
    /* 62 */ { "x" : 120, "y" : -224, "bCoef" : 0.1, "cMask" : [ ] },
    /* 63 */ { "x" : 120, "y" : -256, "bCoef" : 0.1, "cMask" : [ ] },
    /* 64 */ { "x" : -381, "y" : 240, "bCoef" : 0.1, "cMask" : [ ] },
    /* 65 */ { "x" : -381, "y" : 256, "bCoef" : 0.1, "cMask" : [ ] },
    /* 66 */ { "x" : -550, "y" : 200, "bCoef" : 0.1, "cMask" : [ ] },
    /* 67 */ { "x" : -390, "y" : 70, "bCoef" : 0.1, "cMask" : [ ] },
    /* 68 */ { "x" : -550, "y" : 226, "bCoef" : 0.1, "cMask" : [ ] },
    /* 69 */ { "x" : -536, "y" : 240, "bCoef" : 0.1, "cMask" : [ ] },
    /* 70 */ { "x" : -550, "y" : -200, "bCoef" : 0.1, "cMask" : [ ] },
    /* 71 */ { "x" : -390, "y" : -70, "bCoef" : 0.1, "cMask" : [ ] },
    /* 72 */ { "x" : -550, "y" : -226, "bCoef" : 0.1, "cMask" : [ ] },
    /* 73 */ { "x" : -536, "y" : -240, "bCoef" : 0.1, "cMask" : [ ] },
    /* 74 */ { "x" : -556, "y" : 123, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
    /* 75 */ { "x" : -575, "y" : 123, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
    /* 76 */ { "x" : 556, "y" : 123, "bCoef" : 0.1, "cMask" : [ ] },
    /* 77 */ { "x" : 575, "y" : 123, "bCoef" : 0.1, "cMask" : [ ] },
    /* 78 */ { "x" : -556, "y" : -123, "bCoef" : 0.1, "cMask" : [ ] },
    /* 79 */ { "x" : -575, "y" : -123, "bCoef" : 0.1, "cMask" : [ ] },
    /* 80 */ { "x" : 556, "y" : -123, "bCoef" : 0.1, "cMask" : [ ] },
    /* 81 */ { "x" : 575, "y" : -123, "bCoef" : 0.1, "cMask" : [ ] },
    /* 82 */ { "x" : -381, "y" : -240, "bCoef" : 0.1, "cMask" : [ ] },
    /* 83 */ { "x" : -381, "y" : -256, "bCoef" : 0.1, "cMask" : [ ] },
    /* 84 */ { "x" : 381, "y" : 240, "bCoef" : 0.1, "cMask" : [ ] },
    /* 85 */ { "x" : 381, "y" : 256, "bCoef" : 0.1, "cMask" : [ ] },
    /* 86 */ { "x" : 381, "y" : -240, "bCoef" : 0.1, "cMask" : [ ] },
    /* 87 */ { "x" : 381, "y" : -256, "bCoef" : 0.1, "cMask" : [ ] },
    /* 88 */ { "x" : 550, "y" : -226, "bCoef" : 0.1, "cMask" : [ ] },
    /* 89 */ { "x" : 536, "y" : -240, "bCoef" : 0.1, "cMask" : [ ] },
    /* 90 */ { "x" : 550, "y" : 226, "bCoef" : 0.1, "cMask" : [ ] },
    /* 91 */ { "x" : 536, "y" : 240, "bCoef" : 0.1, "cMask" : [ ] },
    /* 92 */ { "x" : 550, "y" : 200, "bCoef" : 0.1, "cMask" : [ ] },
    /* 93 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "cMask" : [ ] },
    /* 94 */ { "x" : 550, "y" : -200, "bCoef" : 0.1, "cMask" : [ ] },
    /* 95 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "cMask" : [ ] },
    /* 96 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "cMask" : [ ] },
    /* 97 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "cMask" : [ ] },
    /* 98 */ { "x" : -375, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },
    /* 99 */ { "x" : -375, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },
    /* 100 */ { "x" : -375, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },
    /* 101 */ { "x" : -375, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },
    /* 102 */ { "x" : -375, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },
    /* 103 */ { "x" : -375, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },
    /* 104 */ { "x" : -375, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },
    /* 105 */ { "x" : -375, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },
    /* 106 */ { "x" : 375, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },
    /* 107 */ { "x" : 375, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },
    /* 108 */ { "x" : 375, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },
    /* 109 */ { "x" : 375, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },
    /* 110 */ { "x" : 375, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },
    /* 111 */ { "x" : 375, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },
    /* 112 */ { "x" : 375, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },
    /* 113 */ { "x" : 375, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },
    /* 114 */ { "x" : -277.5, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },
    /* 115 */ { "x" : -277.5, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },
    /* 116 */ { "x" : -277.5, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },
    /* 117 */ { "x" : -277.5, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },
    /* 118 */ { "x" : -277.5, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },
    /* 119 */ { "x" : -277.5, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },
    /* 120 */ { "x" : -277.5, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },
    /* 121 */ { "x" : -277.5, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },
    /* 122 */ { "x" : 277.5, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },
    /* 123 */ { "x" : 277.5, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },
    /* 124 */ { "x" : 277.5, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },
    /* 125 */ { "x" : 277.5, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },
    /* 126 */ { "x" : 277.5, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },
    /* 127 */ { "x" : 277.5, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },
    /* 128 */ { "x" : 277.5, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },
    /* 129 */ { "x" : 277.5, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },
    /* 130 */ { "x" : 25.579573607945424, "y" : 14.195040368438034, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
    /* 131 */ { "x" : 4.201509890157475, "y" : 12.87543637949374, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
    /* 132 */ { "x" : 5.341759182723941, "y" : 12.670346245438841, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
    /* 133 */ { "x" : 25.96401843837808, "y" : 2.8478034359732387, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
    /* 134 */ { "x" : 26.946568393638618, "y" : 2.275816964371094, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
    /* 135 */ { "x" : 6.199302025074452, "y" : 1.5862087375256149, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
    /* 136 */ { "x" : 12.617571551172052, "y" : -4.505254539784554, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
    /* 137 */ { "x" : -7.075693944935857, "y" : -6.403356627892302, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
    /* 138 */ { "x" : -1.0427572602601387, "y" : 17.612126539108537, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
    /* 139 */ { "x" : 2.6928475096579874, "y" : -7.138752477236759, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
    /* 140 */ { "x" : -15.00084982955459, "y" : 15.453428718385643, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
    /* 141 */ { "x" : -17.779209203615643, "y" : 1.7447096619565254, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
    /* 142 */ { "x" : -7.1118750286323476, "y" : 14.667336793230836, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
    /* 143 */ { "x" : -5.703088049367786, "y" : 2.112407586628782, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
    /* 144 */ { "x" : -6.906489877079544, "y" : 13.564243019214237, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
    /* 145 */ { "x" : -15.510907273085827, "y" : 14.137031077941364, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
    /* 146 */ { "x" : -22.412718682934063, "y" : 18.29201678989272, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
    /* 147 */ { "x" : -27.083470104666425, "y" : -19.229302199734327, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
    /* 148 */ { "x" : 28.9972652788045, "y" : -13.878648020520368, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
    /* 149 */ { "x" : -28.18736546580805, "y" : -18.283106175898673, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
    /* 150 */ { "x" : -8.377477662704827, "y" : -6.309079829834966, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
    /* 151 */ { "x" : -28.660463477725877, "y" : -3.9324664810574834, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 }

],

"segments" : [
    { "v0" : 6, "v1" : 7, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    { "v0" : 7, "v1" : 8, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    { "v0" : 8, "v1" : 9, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    { "v0" : 10, "v1" : 11, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    { "v0" : 11, "v1" : 12, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    { "v0" : 12, "v1" : 13, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    { "v0" : 2, "v1" : 3, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    { "v0" : 3, "v1" : 4, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 4, "v1" : 3, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 4, "v1" : 5, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    { "v0" : 14, "v1" : 15, "color" : "A3A3A3", "bCoef" : 1.15, "cMask" : ["ball" ] },
    { "v0" : 16, "v1" : 17, "color" : "A3A3A3", "bCoef" : 1.15, "cMask" : ["ball" ] },
    { "v0" : 18, "v1" : 19, "color" : "A3A3A3", "cMask" : ["ball" ] },
    { "v0" : 20, "v1" : 21, "color" : "A3A3A3", "bCoef" : 1.15, "cMask" : ["ball" ] },
    { "v0" : 22, "v1" : 23, "color" : "A3A3A3", "bCoef" : 1.15, "cMask" : ["ball" ] },
    { "v0" : 24, "v1" : 25, "color" : "A3A3A3", "bCoef" : 0, "cMask" : ["ball" ] },
    { "v0" : 26, "v1" : 27, "color" : "A3A3A3", "cMask" : ["ball" ] },
    { "v0" : 28, "v1" : 29, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    { "v0" : 30, "v1" : 31, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    { "v0" : 38, "v1" : 39, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
    { "v0" : 40, "v1" : 41, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
    { "v0" : 42, "v1" : 43, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
    { "v0" : 44, "v1" : 45, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
    { "v0" : 48, "v1" : 49, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 50, "v1" : 51, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 64, "v1" : 65, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 67, "v1" : 66, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
    { "v0" : 68, "v1" : 69, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
    { "v0" : 70, "v1" : 71, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
    { "v0" : 67, "v1" : 71, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 73, "v1" : 72, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
    { "v0" : 74, "v1" : 75, "curve" : 0, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 76, "v1" : 77, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 78, "v1" : 79, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 80, "v1" : 81, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 82, "v1" : 83, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 84, "v1" : 85, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 86, "v1" : 87, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 88, "v1" : 89, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
    { "v0" : 91, "v1" : 90, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
    { "v0" : 92, "v1" : 93, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
    { "v0" : 95, "v1" : 94, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
    { "v0" : 96, "v1" : 97, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 99, "v1" : 98, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 98, "v1" : 99, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 101, "v1" : 100, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 100, "v1" : 101, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 103, "v1" : 102, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 102, "v1" : 103, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 105, "v1" : 104, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 104, "v1" : 105, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 107, "v1" : 106, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 106, "v1" : 107, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 109, "v1" : 108, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 108, "v1" : 109, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 111, "v1" : 110, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 110, "v1" : 111, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 113, "v1" : 112, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 112, "v1" : 113, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 115, "v1" : 114, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 114, "v1" : 115, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 117, "v1" : 116, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 116, "v1" : 117, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 119, "v1" : 118, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 118, "v1" : 119, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 121, "v1" : 120, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 120, "v1" : 121, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 123, "v1" : 122, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 122, "v1" : 123, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 125, "v1" : 124, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 124, "v1" : 125, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 127, "v1" : 126, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 126, "v1" : 127, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 129, "v1" : 128, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 128, "v1" : 129, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 130, "v1" : 131, "curve" : 20.51603897282983, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 132, "v1" : 133, "curve" : -26.84377023884017, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 134, "v1" : 135, "curve" : -19.98953381650154, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 136, "v1" : 137, "curve" : -13.914554464444254, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 138, "v1" : 139, "curve" : -0.5701201075717648, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 140, "v1" : 141, "curve" : 25.56149861163487, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 142, "v1" : 143, "curve" : -21.374955486010695, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 144, "v1" : 145, "curve" : 169.5038403318501, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 146, "v1" : 147, "curve" : 36.73684782636961, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 148, "v1" : 149, "curve" : -31.559116150341154, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 150, "v1" : 151, "curve" : -19.785231526942916, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] }

],

"planes" : [
    { "normal" : [0,1 ], "dist" : -240, "cMask" : ["ball" ] },
    { "normal" : [0,-1 ], "dist" : -240, "cMask" : ["ball" ] },
    { "normal" : [0,1 ], "dist" : -270, "bCoef" : 0.1 },
    { "normal" : [0,-1 ], "dist" : -270, "bCoef" : 0.1 },
    { "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1 },
    { "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1 },
    { "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1, "cMask" : ["ball" ] },
    { "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1, "cMask" : ["ball" ] }

],

"goals" : [
    { "p0" : [-557.5,-80 ], "p1" : [-557.5,80 ], "team" : "red" },
    { "p0" : [557.5,80 ], "p1" : [557.5,-80 ], "team" : "blue" }

],

"discs" : [
    { "radius" : 6.25, "invMass" : 1.5, "pos" : [0,0 ], "color" : "FFCC00", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ] },
    { "radius" : 5, "invMass" : 0, "pos" : [-550,80 ], "color" : "FF6666" },
    { "radius" : 5, "invMass" : 0, "pos" : [-550,-80 ], "color" : "FF6666" },
    { "radius" : 5, "invMass" : 0, "pos" : [550,80 ], "color" : "6666FF" },
    { "radius" : 5, "invMass" : 0, "pos" : [550,-80 ], "color" : "6666FF" },
    { "radius" : 3, "invMass" : 0, "pos" : [-550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] },
    { "radius" : 3, "invMass" : 0, "pos" : [-550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] },
    { "radius" : 3, "invMass" : 0, "pos" : [550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] },
    { "radius" : 3, "invMass" : 0, "pos" : [550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] }

],

"playerPhysics" : {
    "bCoef" : 0,
    "acceleration" : 0.11,
    "kickingAcceleration" : 0.15,
    "kickStrength" : 4.75,
    "kickback" : 1.80,
    "kickingDamping" : 1.0  
 },

"ballPhysics" : "disc0",

"spawnDistance" : 350,

"traits" : {
    

},

"joints" : [
    

],

"redSpawnPoints" : [
    

],

"blueSpawnPoints" : [
    

]
}`
const bigStadium = `{"name":"𝒙5 𝓑𝔂 Malco","width":900,"height":460,"bg":{"kickOffRadius":80,"color":"1E472E"},
"vertexes":[
    {"x":0,"y":420,"cMask":["wall"]},
    {"x":0,"y":-420,"cMask":["wall"]},
    {"x":0,"y":-80,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":80,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":-800,"y":90,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-800,"y":-90,"cMask":["ball"],"cGroup":["ball"]},
    {"x":800,"y":-90,"cMask":["ball"],"cGroup":["ball"]},
    {"x":800,"y":90,"cMask":["ball"],"cGroup":["ball"]},
    {"x":0,"y":460,"cMask":[],"cGroup":[]},
    {"x":0,"y":-460,"cMask":[],"cGroup":[]},
    {"x":450,"y":-276,"cMask":["wall"]},
    {"x":450,"y":276,"cMask":["wall"]},
    {"x":-800,"y":-421,"cMask":["ball"],"cGroup":["ball"]},
    {"x":800,"y":-421,"cMask":["ball"],"cGroup":["ball"]},
    {"x":800,"y":421,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-800,"y":421,"cMask":["ball"],"cGroup":["ball"]},
    {"x":0,"y":80,"cMask":["wall"]},
    {"x":0,"y":-80,"cMask":["wall"]},
    {"x":-801,"y":-90,"cMask":["wall"]},
    {"x":-801,"y":90,"cMask":["wall"]},
    {"x":-798,"y":-90,"cMask":["wall"]},
    {"x":-798,"y":90,"cMask":["wall"]},
    {"x":798,"y":-90,"cMask":["wall"]},
    {"x":798,"y":90,"cMask":["wall"]},
    {"x":801,"y":-90,"cMask":["wall"]},
    {"x":801,"y":90,"cMask":["wall"]},
    {"x":801,"y":420,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-801,"y":420,"cMask":["ball"],"cGroup":["ball"]},
    {"x":801,"y":-420,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-801,"y":-420,"cMask":["ball"],"cGroup":["ball"]},
    {"x":803,"y":-422,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-803,"y":-422,"cMask":["ball"],"cGroup":["ball"]},
    {"x":803,"y":422,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-803,"y":422,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-802,"y":-90,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-802,"y":-423,"cMask":["ball"],"cGroup":["ball"]},
    {"x":802,"y":-90,"cMask":["ball"],"cGroup":["ball"]},
    {"x":802,"y":-423,"cMask":["ball"],"cGroup":["ball"]},
    {"x":802,"y":90,"cMask":["ball"],"cGroup":["ball"]},
    {"x":802,"y":423,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-802,"y":90,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-802,"y":423,"cMask":["ball"],"cGroup":["ball"]},
    {"x":0,"y":-82,"cMask":["wall"]},
    {"x":0,"y":82,"cMask":["wall"]},
    {"x":1,"y":-420,"cMask":["wall"]},
    {"x":1,"y":420,"cMask":["wall"]},
    {"x":-1,"y":-420,"cMask":["wall"]},
    {"x":-1,"y":420,"cMask":["wall"]},
    {"x":449,"y":-275,"cMask":["wall"]},
    {"x":800,"y":-275,"cMask":["wall"]},
    {"x":-450,"y":-276,"cMask":["wall"]},
    {"x":-450,"y":276,"cMask":["wall"]},
    {"x":449,"y":275,"cMask":["wall"]},
    {"x":800,"y":275,"cMask":["wall"]},
    {"x":452,"y":-274,"cMask":["wall"]},
    {"x":452,"y":274,"cMask":["wall"]},
    {"x":451,"y":-273,"cMask":["wall"]},
    {"x":800,"y":-273,"cMask":["wall"]},
    {"x":451,"y":273,"cMask":["wall"]},
    {"x":800,"y":273,"cMask":["wall"]},
    {"x":599,"y":-160,"cMask":["wall"]},
    {"x":800,"y":-160,"cMask":["wall"]},
    {"x":599,"y":160,"cMask":["wall"]},
    {"x":800,"y":160,"cMask":["wall"]},
    {"x":600,"y":-161,"cMask":["wall"]},
    {"x":600,"y":161,"cMask":["wall"]},
    {"x":601,"y":-158,"cMask":["wall"]},
    {"x":800,"y":-158,"cMask":["wall"]},
    {"x":601,"y":158,"cMask":["wall"]},
    {"x":800,"y":158,"cMask":["wall"]},
    {"x":602,"y":159,"cMask":["wall"]},
    {"x":602,"y":-159,"cMask":["wall"]},
    {"x":450,"y":90,"cMask":["wall"]},
    {"x":450,"y":-90,"cMask":["wall"]},
    {"x":450,"y":92,"cMask":["wall"]},
    {"x":450,"y":-92,"cMask":["wall"]},
    {"x":-450,"y":90,"cMask":["wall"]},
    {"x":-450,"y":-90,"cMask":["wall"]},
    {"x":-450,"y":92,"cMask":["wall"]},
    {"x":-450,"y":-92,"cMask":["wall"]},
    {"x":-452,"y":-274,"cMask":["wall"]},
    {"x":-452,"y":274,"cMask":["wall"]},
    {"x":-800,"y":275,"cMask":["wall"]},
    {"x":-449,"y":275,"cMask":["wall"]},
    {"x":-800,"y":273,"cMask":["wall"]},
    {"x":-451,"y":273,"cMask":["wall"]},
    {"x":-800,"y":-273,"cMask":["wall"]},
    {"x":-451,"y":-273,"cMask":["wall"]},
    {"x":-800,"y":-275,"cMask":["wall"]},
    {"x":-449,"y":-275,"cMask":["wall"]},
    {"x":-800,"y":-160,"cMask":["wall"]},
    {"x":-599,"y":-160,"cMask":["wall"]},
    {"x":-800,"y":-158,"cMask":["wall"]},
    {"x":-601,"y":-158,"cMask":["wall"]},
    {"x":-800,"y":158,"cMask":["wall"]},
    {"x":-601,"y":158,"cMask":["wall"]},
    {"x":-800,"y":160,"cMask":["wall"]},
    {"x":-599,"y":160,"cMask":["wall"]},
    {"x":-600,"y":-161,"cMask":["wall"]},
    {"x":-600,"y":161,"cMask":["wall"]},
    {"x":-602,"y":-159,"cMask":["wall"]},
    {"x":-602,"y":159,"cMask":["wall"]},
    {"x":0,"y":-5,"cMask":["wall"]},
    {"x":0,"y":5,"cMask":["wall"]},
    {"x":530,"y":-5,"cMask":["wall"]},
    {"x":530,"y":5,"cMask":["wall"]},
    {"x":-530,"y":-5,"cMask":["wall"]},
    {"x":-530,"y":5,"cMask":["wall"]},
    {"x":-799,"y":-90,"cMask":["wall"]},
    {"x":-799,"y":90,"cMask":["wall"]},
    {"x":799,"y":-90,"cMask":["wall"]},
    {"x":799,"y":90,"cMask":["wall"]}
],
"segments":[
    {"v0":13,"v1":6,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":7,"v1":14,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":15,"v1":4,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":5,"v1":12,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":2,"v1":9,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"A3A3A3"},
    {"v0":3,"v1":8,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"A3A3A3"},
    {"v0":2,"v1":3,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["redKO"],"color":"A3A3A3"},
    {"v0":3,"v1":2,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"A3A3A3"},
    {"v0":11,"v1":10,"bCoef":0,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":5,"v1":4,"bCoef":0,"cMask":[],"color":"A3A3A3"},
    {"v0":6,"v1":7,"bCoef":0,"cMask":[],"color":"A3A3A3"},
    {"v0":0,"v1":16,"vis":false,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":1,"v1":17,"vis":false,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":18,"v1":19,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":24,"v1":25,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":26,"v1":27,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":28,"v1":29,"bias":10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":30,"v1":31,"bias":10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":32,"v1":33,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":34,"v1":35,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":37,"v1":36,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":38,"v1":39,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":41,"v1":40,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":42,"v1":43,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":43,"v1":42,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":45,"v1":44,"bCoef":0,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":47,"v1":46,"bCoef":0,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":48,"v1":49,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":51,"v1":50,"bCoef":0,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":52,"v1":53,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":54,"v1":55,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":56,"v1":57,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":58,"v1":59,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":60,"v1":61,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":62,"v1":63,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":64,"v1":65,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":66,"v1":67,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":68,"v1":69,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":70,"v1":71,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":72,"v1":73,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":74,"v1":75,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":77,"v1":76,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":79,"v1":78,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":81,"v1":80,"bCoef":0,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":82,"v1":83,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":84,"v1":85,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":86,"v1":87,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":88,"v1":89,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":90,"v1":91,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":92,"v1":93,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":94,"v1":95,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":96,"v1":97,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":98,"v1":99,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":100,"v1":101,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":102,"v1":103,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":102,"v1":103,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":103,"v1":102,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":102,"v1":103,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":103,"v1":102,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":102,"v1":103,"curve":59.99999999999999,"curveF":1.7320508075688774,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":103,"v1":102,"curve":59.99999999999999,"curveF":1.7320508075688774,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":104,"v1":105,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":104,"v1":105,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":105,"v1":104,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":104,"v1":105,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":105,"v1":104,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":104,"v1":105,"curve":59.99999999999999,"curveF":1.7320508075688774,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":105,"v1":104,"curve":59.99999999999999,"curveF":1.7320508075688774,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":106,"v1":107,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":106,"v1":107,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":107,"v1":106,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":106,"v1":107,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":107,"v1":106,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":106,"v1":107,"curve":59.99999999999999,"curveF":1.7320508075688774,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":107,"v1":106,"curve":59.99999999999999,"curveF":1.7320508075688774,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":108,"v1":109,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":110,"v1":111,"cMask":["wall"],"color":"A3A3A3"}
],
"planes":[
    {"normal":[0,1],"dist":-460,"bCoef":0},
    {"normal":[0,-1],"dist":-460,"bCoef":0},
    {"normal":[1,0],"dist":-900,"bCoef":0,"cMask":["red","blue"],"cGroup":["red","blue"]},
    {"normal":[-1,0],"dist":-900,"bCoef":0,"cMask":["red","blue"],"cGroup":["red","blue"]}
],
"goals":[
    {"p0":[-805.8,90],"p1":[-805.8,-90],"team":"red"},
    {"p0":[805.8,90],"p1":[805.8,-90],"team":"blue"}
],
"discs":[
    {"radius":5.8,"bCoef":0.474,"invMass":1.5,"cGroup":["ball","kick","score"]},
    {"pos":[-800,-90],"radius":5,"bCoef":1,"invMass":0},
    {"pos":[-800,90],"radius":5,"bCoef":1,"invMass":0},
    {"pos":[800,-90],"radius":5,"bCoef":1,"invMass":0},
    {"pos":[800,90],"radius":5,"bCoef":1,"invMass":0},
    {"pos":[-807,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-814,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-821,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-828,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-835,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-90],"radius":0,"bCoef":1,"invMass":0,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-83],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-76],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-69],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-62],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-55],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-41],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-48],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-34],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-27],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-20],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-13],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-6],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,1],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,8],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,15],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,22],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,29],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,36],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,43],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,50],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,57],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,64],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,71],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,78],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,85],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,90],"radius":0,"bCoef":1,"invMass":0,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-835,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-828,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-821,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-814,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-807,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[807.4789317507418,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[814.4830860534125,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[821.4872403560831,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[828.4913946587537,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[835.4955489614243,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,90],"radius":0,"bCoef":1,"invMass":0,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,83],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,76],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,69],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,62],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,55],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,41],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,48],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,34],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,27],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,20],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,13],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,6],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-1],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-8],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-15],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-22],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-29],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-36],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-43],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-50],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-57],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-64],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-71],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-78],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-85],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-90],"radius":0,"bCoef":1,"invMass":0,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[835.4955489614243,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[828.4913946587537,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[821.4872403560831,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[814.4830860534125,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[807.4789317507418,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]}
],
"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.75},
"ballPhysics":"disc0",
"joints":[
    {"d0":1,"d1":5,"length":7,"color":"A3A3A3"},
    {"d0":5,"d1":6,"length":7,"color":"A3A3A3"},
    {"d0":6,"d1":7,"length":7,"color":"A3A3A3"},
    {"d0":7,"d1":8,"length":7,"color":"A3A3A3"},
    {"d0":8,"d1":9,"length":7,"color":"A3A3A3"},
    {"d0":9,"d1":10,"length":7,"color":"A3A3A3"},
    {"d0":10,"d1":11,"length":7,"color":"A3A3A3"},
    {"d0":11,"d1":12,"length":7,"color":"A3A3A3"},
    {"d0":12,"d1":13,"length":7,"color":"A3A3A3"},
    {"d0":13,"d1":14,"length":7,"color":"A3A3A3"},
    {"d0":14,"d1":15,"length":7,"color":"A3A3A3"},
    {"d0":15,"d1":17,"length":7,"color":"A3A3A3"},
    {"d0":16,"d1":17,"length":7,"color":"A3A3A3"},
    {"d0":16,"d1":18,"length":7,"color":"A3A3A3"},
    {"d0":18,"d1":19,"length":7,"color":"A3A3A3"},
    {"d0":19,"d1":20,"length":7,"color":"A3A3A3"},
    {"d0":20,"d1":21,"length":7,"color":"A3A3A3"},
    {"d0":21,"d1":22,"length":7,"color":"A3A3A3"},
    {"d0":22,"d1":23,"length":7,"color":"A3A3A3"},
    {"d0":23,"d1":24,"length":7,"color":"A3A3A3"},
    {"d0":24,"d1":25,"length":7,"color":"A3A3A3"},
    {"d0":25,"d1":26,"length":7,"color":"A3A3A3"},
    {"d0":26,"d1":27,"length":7,"color":"A3A3A3"},
    {"d0":27,"d1":28,"length":7,"color":"A3A3A3"},
    {"d0":28,"d1":29,"length":7,"color":"A3A3A3"},
    {"d0":29,"d1":30,"length":7,"color":"A3A3A3"},
    {"d0":30,"d1":31,"length":7,"color":"A3A3A3"},
    {"d0":31,"d1":32,"length":7,"color":"A3A3A3"},
    {"d0":32,"d1":33,"length":7,"color":"A3A3A3"},
    {"d0":33,"d1":34,"length":7,"color":"A3A3A3"},
    {"d0":34,"d1":35,"length":7,"color":"A3A3A3"},
    {"d0":35,"d1":36,"length":5,"color":"A3A3A3"},
    {"d0":36,"d1":37,"length":7,"color":"A3A3A3"},
    {"d0":37,"d1":38,"length":7,"color":"A3A3A3"},
    {"d0":38,"d1":39,"length":7,"color":"A3A3A3"},
    {"d0":39,"d1":40,"length":7,"color":"A3A3A3"},
    {"d0":40,"d1":41,"length":7,"color":"A3A3A3"},
    {"d0":2,"d1":41,"length":7,"color":"A3A3A3"},
    {"d0":3,"d1":78,"length":7.478931750741822,"color":"A3A3A3"},
    {"d0":77,"d1":78,"length":7.004154302670713,"color":"A3A3A3"},
    {"d0":76,"d1":77,"length":7.0041543026705995,"color":"A3A3A3"},
    {"d0":75,"d1":76,"length":7.0041543026705995,"color":"A3A3A3"},
    {"d0":74,"d1":75,"length":7.0041543026705995,"color":"A3A3A3"},
    {"d0":73,"d1":74,"length":7.004154302670713,"color":"A3A3A3"},
    {"d0":72,"d1":73,"length":5,"color":"A3A3A3"},
    {"d0":71,"d1":72,"length":7,"color":"A3A3A3"},
    {"d0":70,"d1":71,"length":7,"color":"A3A3A3"},
    {"d0":69,"d1":70,"length":7,"color":"A3A3A3"},
    {"d0":68,"d1":69,"length":7,"color":"A3A3A3"},
    {"d0":67,"d1":68,"length":7,"color":"A3A3A3"},
    {"d0":66,"d1":67,"length":7,"color":"A3A3A3"},
    {"d0":65,"d1":66,"length":7,"color":"A3A3A3"},
    {"d0":64,"d1":65,"length":7,"color":"A3A3A3"},
    {"d0":63,"d1":64,"length":7,"color":"A3A3A3"},
    {"d0":62,"d1":63,"length":7,"color":"A3A3A3"},
    {"d0":61,"d1":62,"length":7,"color":"A3A3A3"},
    {"d0":60,"d1":61,"length":7,"color":"A3A3A3"},
    {"d0":59,"d1":60,"length":7,"color":"A3A3A3"},
    {"d0":58,"d1":59,"length":7,"color":"A3A3A3"},
    {"d0":57,"d1":58,"length":7,"color":"A3A3A3"},
    {"d0":56,"d1":57,"length":7,"color":"A3A3A3"},
    {"d0":55,"d1":56,"length":7,"color":"A3A3A3"},
    {"d0":53,"d1":55,"length":7,"color":"A3A3A3"},
    {"d0":53,"d1":54,"length":7,"color":"A3A3A3"},
    {"d0":52,"d1":54,"length":7,"color":"A3A3A3"},
    {"d0":51,"d1":52,"length":7,"color":"A3A3A3"},
    {"d0":50,"d1":51,"length":7,"color":"A3A3A3"},
    {"d0":49,"d1":50,"length":7,"color":"A3A3A3"},
    {"d0":48,"d1":49,"length":7,"color":"A3A3A3"},
    {"d0":47,"d1":48,"length":7,"color":"A3A3A3"},
    {"d0":46,"d1":47,"length":7.004154302670713,"color":"A3A3A3"},
    {"d0":45,"d1":46,"length":7.0041543026705995,"color":"A3A3A3"},
    {"d0":44,"d1":45,"length":7.0041543026705995,"color":"A3A3A3"},
    {"d0":43,"d1":44,"length":7.0041543026705995,"color":"A3A3A3"},
    {"d0":42,"d1":43,"length":7.004154302670713,"color":"A3A3A3"},
    {"d0":4,"d1":42,"length":7.478931750741822,"color":"A3A3A3"}
],
"kickOffReset":"full"}`
room.setCustomStadium(mediumStadium);

/* UNIFORMS */ 

const Uniform = {};
// Clubes Sulamericanos
const cor = {"name": 'Corinthians', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x000000, "color2": 0x000000, "color3": 0x000000};
const spfc = {"name": 'São Paulo', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0xBF0505, "color2": 0x000000, "color3": 0xFFFFFF};
const pal = {"name": 'Palmeiras', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x117D31, "color2": 0x117D31, "color3": 0x117D31};
const sfc = {"name": 'Santos', "type": Uniform, "angle": 0, "textcolor": 0x827E09, "color1": 0xFFFFFF, "color2": 0x000000, "color3": 0xFFFFFF};
const fla = {"name": 'Flamengo', "type": Uniform, "angle": 90, "textcolor": 0xFFFFFF, "color1": 0xD10404, "color2": 0x000000, "color3": 0xD10404};
const vas = {"name": 'Vasco', "type": Uniform, "angle": 50, "textcolor": 0xA86428, "color1": 0x000000, "color2": 0xFFFFFF, "color3": 0x000000};
const flu = {"name": 'Fluminense', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0xC70808, "color2": 0x0D7722, "color3": 0xC70808};
const gre = {"name": 'Grêmio', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x12A3C7, "color2": 0x000000, "color3": 0x12A3C7};
const int = {"name": 'Internacional', "type": Uniform, "angle": 0, "textcolor": 0xE00000, "color1": 0xFF0D0D, "color2": 0xFFFFFF, "color3": 0xFF0D0D};
const cru = {"name": 'Cruzeiro', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x0000CD, "color2": 0x0000CD, "color3": 0x0000CD};
const boc = {"name": 'Boca Juniors', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x190AF2, "color2": 0xF2D61F, "color3": 0x190AF2};
const riv = {"name": 'River Plate', "type": Uniform, "angle": 50, "textcolor": 0x000000, "color1": 0xFFFFFF, "color2": 0xF20000, "color3": 0xFFFFFF};
// Clubes Europeus
const rea = { "name": 'Real Madrid', "type": Uniform, "angle": 0, "textcolor": 0x0246CF, "color1": 0xFFFAFA, "color2": 0xFFFAFA, "color3": 0xFFFAFA};
const bar = {"name": 'Barcelona', "type": Uniform, "angle": 360, "textcolor": 0xFFD700, "color1": 0x00008B, "color2": 0x8B0000, "color3": 0x00008B};
const juv = {"name": 'Juventus', "type": Uniform, "angle": 180, "textcolor": 0x000000, "color1": 0x5E5E5E, "color2": 0xD9D9D9, "color3": 0x5E5E5E};
const bay = {"name": 'Bayern de Munique', "type": Uniform, "angle": 90, "textcolor": 0xFFFFFF, "color1": 0xFF0F0F, "color2": 0x0505FF, "color3": 0xFF0F0F};
const psg = {"name": 'Paris Saint-Germain', "type": Uniform, "angle": 180, "textcolor": 0xFFFFFF, "color1": 0x00004A, "color2": 0xB22222, "color3": 0x00004A};
const liv = {"name": 'Liverpool', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0xFF1819, "color2": 0xFF1819, "color3": 0xFF1819};
const mci = {"name": 'Manchester City', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x2B87FF, "color2": 0x2B87FF, "color3": 0x2B87FF};
const atm = {"name": 'Atlético de Madrid', "type": Uniform, "angle": 0, "textcolor": 0x0F1FFF, "color1": 0xFFFFFF, "color2": 0xF00A0A, "color3": 0xFFFFFF};
const bor = {"name": 'Borussia Dortmund', "type": Uniform, "angle": 0, "textcolor": 0x000000, "color1": 0xF0FF19, "color2": 0xF0FF19, "color3": 0xF0FF19};
const mil = {"name": 'Milan', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x850000, "color2": 0x000000, "color3": 0x850000};
const intM = {"name": 'Inter de Milão', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x00008F, "color2": 0x000000, "color3": 0x00008F};
const che = {"name": 'Chelsea', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x0000CD, "color2": 0xFFFFFF, "color3": 0x0000CD};
const mia = { "name": '𝐈𝐧𝐭𝐞𝐫 𝐌𝐢𝐚𝐦𝐢', "type": Uniform, "angle": 45, "textcolor": 0xFCA4B6, "color1": 0x141414, "color2": 0x141414, "color3": 0x141414};
const mia2 = { "name": '𝐈𝐧𝐭𝐞𝐫 𝐌𝐢𝐚𝐦𝐢', "type": Uniform, "angle": 45, "textcolor": 0x141414, "color1": 0xFCA4B6, "color2": 0xFCA4B6, "color3": 0xFCA4B6};
// Seleções
const ale = {'name': 'Alemanha', "type": Uniform, "angle": 90, "textcolor": 0x000000, "color1": 0xFFFFFF, "color2": 0xFFFFFF, "color3": 0xFFFFFF};
const arg = {'name': 'Argentina', "type": Uniform, "angle": 90, "textcolor": 0x1F374B, "color1": 0x75AADB, "color2": 0xFFFFFF, "color3": 0x75AADB};
const bra = {'name': 'Brasil', "type": Uniform, "angle": 360, "textcolor": 0x0C822F, "color1": 0xFFDA1F, "color2": 0xFFDA1F, "color3": 0xFFDA1F};
const esp = {'name': 'Espanha', "type": Uniform, "angle": 90, "textcolor": 0xFFFF00, "color1": 0xFF0000, "color2": 0xFF0000, "color3": 0xFF0000};
const por = {'name': 'Portugal', "type": Uniform, "angle": 0, "textcolor": 0x289E1F, "color1": 0xFF0000, "color2": 0xFF0000, "color3": 0xFF0000};
const ita = {'name': 'Itália', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x3646A9, "color2": 0x3646A9, "color3": 0x3646A9};
const uru = {'name': 'Uruguai', "type": Uniform, "angle": 0, "textcolor": 0x212124, "color1": 0x66A5D4, "color2": 0x66A5D4, "color3": 0x66A5D4};
const fra = {'name': 'França', "type": Uniform, "angle": 90, "textcolor": 0xf13b40, "color1": 0x204290, "color2": 0x25284c, "color3": 0x204290};
const ing = {'name': 'Inglaterra', "type": Uniform, "angle": 0, "textcolor": 0x0549A0, "color1": 0xDEDFE4, "color2": 0xDEDFE4, "color3": 0xDEDFE4};
const bel = {'name': 'Bélgica', "type": Uniform, "angle": 0, "textcolor": 0xCA9144, "color1": 0xC4212A, "color2": 0xC4212A, "color3": 0xC4212A};
const hol = {'name': 'Holanda', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0xF25100, "color2": 0xF25100, "color3": 0xF25100};
// clubes de zueira
const girl = { "name": '👩🏻‍🦰 𝔅𝔞𝔯𝔟𝔦𝔢𝔰 👱🏻‍♀️', "type": Uniform, "angle": 60, "textcolor": 0xFFFFFF, "color1": 0xF2B3FF, "color2": 0xCAABFF, "color3": 0xCAABFF};
const inv = { "name": '🟨 Iηvicŧus 🟨', "type": Uniform, "angle": 60, "textcolor": 0xFFE042, "color1": 0x213366, "color2": 0x2F64A1, "color3": 0x2F64A1};
const vik = { "name": '[̲̅V̲̅i̲̅k̲̅i̲̅и̲̅g̲̅ร̲̅]', "type": Uniform, "angle": 60, "textcolor": 0x28231d, "color1": 0xa9957b, "color2": 0xa9957b, "color3": 0x756855};
const v1 = { "name": '👑 Søbєrαηøs 👑', "type": Uniform, "angle": 60, "textcolor": 0x990DA8, "color1": 0x5E0061, "color2": 0x000000, "color3": 0x000000};
const v2 = { "name": '🔸 🅽🅴🅾🅽 🔹', "type": Uniform, "angle": 60, "textcolor": 0xFFFFFF, "color1": 0x3DFF1F, "color2": 0xE1E809, "color3": 0x00FF11};
const v3 = { "name": 'Vip 3', "type": Uniform, "angle": 45, "textcolor": 0x42FFFF, "color1": 0xA8ABA9, "color2": 0xA3A3A3, "color3": 0x969696};
const v4 = { "name": 'Vip 4', "type": Uniform, "angle": 1, "textcolor": 0x42FFFF, "color1": 0x000000, "color2": 0x781861, "color3": 0xDAFFC3};
const v5 = { "name": 'Bambobees', "type": Uniform, "angle": 180, "textcolor": 0x42FFFF, "color1": 0x474747, "color2": 0xFFDD00, "color3": 0x474747};
// GOL comemoração
const gol1 = {"angle": 0, "textcolor": 0x0a5e11, "color1": 0x42f56f, "color2": 0xFFFFFF, "color3": 0xFFFFFF};
const gol12 = {"angle": 0, "textcolor": 0x0a5e11, "color1": 0x42f56f, "color2": 0xFFFFFF, "color3": 0x2ebdff};
const gol2 = {"angle": 0, "textcolor": 0x0a5e11, "color1": 0x2ebdff, "color2": 0x42f56f, "color3": 0xFFFFFF};
const gol3 = {"angle": 0, "textcolor": 0x0a5e11, "color1": 0xFFFFFF, "color2": 0x2ebdff, "color3": 0x42f56f};
const gol4 = {"angle": 0, "textcolor": 0x0a5e11, "color1": 0x42f56f, "color2": 0x42f56f, "color3": 0x42f56f};
const gol5 = {"angle": 0, "textcolor": 0x0a5e11, "color1": 0xFFFFFF, "color2": 0xFFFFFF, "color3": 0xFFFFFF};
//
const seleçoes = [ale, arg, bra, esp, por, ita, uru, fra, ing, bel, hol];
const euroClubes = [rea, bar, che, juv, bay, psg, liv, mci, bor, atm, mil, intM, mia];
const sulaClubes = [cor, spfc, sfc, pal, gre, cru, fla, flu, vas, int, boc, riv];
const allClubes = [rea, bar, che, juv, bay, psg, liv, mci, bor, atm, mil, intM, cor, spfc, sfc, pal, gre, cru, fla, flu, vas, int, boc, riv, mia];
var defaultHome = bar
var defaultGuest = rea
var nameHome = defaultHome.name;
var acronymHome = bar;
var nameGuest = defaultGuest.name;
var acronymGuest = rea;
room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);

/* OPTIONS */

var afkLimit = 1;
var drawTimeLimit = 1; //minutos
var maxTeamSize = 3;
var yellow = 0xffeb15;
var offYellow = 0xffdd8c;
var indigo = 0x6351dd;
var white = 0xFFFFFF;
var green = 0x32f073;
var red = 0xfc383b;
var blue = 0x03adfc;
var warn = 0xff9966;
var lightgrey = 0x9ca6b1;
var chatInvisble = 0x4b5b50;
var staffChatColor = 0xd1ff5f;

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var extendedP = [];
const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6 };
const Ss = { GA: 0, WI: 1, DR: 2, LS: 3, WR: 4, GL: 5, AS: 6, GK: 7, CS: 8, CP: 9, RL: 10, NK: 11 }
var player;
var players;
var teamR;
var teamB;
var teamS;
let lastPlayerJoinedID = "";
let lastPlayerJoinedNAME = "";
let playertoban = "";
let redp1 = "";
let redp2 = "";
let redp3 = "";
let bluep1 = "";
let bluep2 = "";
let bluep3 = "";
let soberboID = "";
let badassID = "";
var supervisorsID = [];
const soberbo = ['3137392E3235302E33322E3537']; // soberbo
const badass = ['3230302E3135382E3235302E313230']; // malco
const supervisors = ['3138392E33302E38342E323335', '3138392E33342E31372E313539']; // Chiquinho, ɪɴᴛ┃𝕃 . 𝕄𝕖𝕤𝕤𝕚™
const blacklistnames = ["Arthur MM - ᱦiᱮ∀Ʀd - Schneider - Alcione III - MACACO"];
const blacklistconn = [
    '3137372E35372E3135302E313736','3136372E3234392E39332E313135', '3137372E37362E3232342E3730', '3137392E3231382E32312E323337'
]; // Arthur MM, ᱦiᱮ∀Ʀd, Schneider, Alcione III, MACACO
const cartaoamarelo = ['3138392E38352E32392E3736']; // 𝘿𝙄𝘼𝙕
var lodiazCONN = "3138392E38352E32392E3736"; // conn do 𝘿𝙄𝘼𝙕
var lanocheCONN = "3138392E33342E31372E313539"; // conn do 𝕃 . 𝕄𝕖𝕤𝕤𝕚™
var lodiaz = []; // id do 𝘿𝙄𝘼𝙕
var lanoche = []; // id do 𝕃 . 𝕄𝕖𝕤𝕤𝕚™
var blacklist = [
    {Nick: "Arthur MM", Auth: "YD0Jm8MmB9G9YJCwJEEoIcC1SvD3Q2811xT9T-NTmVw", Conn: "3137372E35372E3135302E313736"},
    {Nick: "ᱦiᱮ∀Ʀd", Auth: "YJINpE0p70-sAT-nTx10vI5VvHyQ-jkZ1C-zi6dI2us", Conn: "3136372E3234392E39332E313135"},
    {Nick: "Schneider", Auth: "_nsAyl-n61ELIOJghIDiHojx-parT0N19K374jqygqo", Conn: "3137372E37362E3232342E3730"},
    {Nick: "Alcione III", Auth: "l6CTEtHr4eiv6xwCfvFow6dqEkTxuKRKhWUWgVkmFzY", Conn: "3137392E3231382E32312E323337"},
    {Nick: "MACACO", Auth: "aPIbu-KVDln_AP66WDgrgZYP7QdNWvDsvNQ6WU8whbA", Conn: "3138372E36302E3231372E313934"},
    {Nick: "", Auth: "", Conn: ""},
    {Nick: "", Auth: "", Conn: ""},
    {Nick: "", Auth: "", Conn: ""},
    {Nick: "", Auth: "", Conn: ""},
];
var blacklistconnID = [];
var pendurados = [];
var playerList = [];
var conns = [];
var playerConn = [];
var mn = [];

/* GAME */

var lastTeamTouched;
var lastPlayersTouched;
var goldenGoal = false;
var activePlay = false;
var muteList = [];
let muted = false;
let capchat = false;
let redChat = true;
let blueChat = true;
let specChat = true;
var banList = [];
var GKListname = [];
var countAFK = false; // Created to get better track of activity
var SMSet = new Set(); // Set created to get slow mode which is useful in chooseMode
let rr = false; // serve para restartar o game com o comnado rr

// WELL BEING

let forbid = ['macaco', 'adolf hitler', 'nazismo', 'cuzao', 'cuzão', 'autista', 'cu', 'hitler', 'Manco', 'Malco', 'manco', 'malco', 'Macaco', 'Hitler', 'mancos', 'Mancos', "Pênis"];
let trava = ["㧫璧 觭䢜潇ကᩨ쀡ఈ泄찉넾﫤㏭ 緺", "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓", "㧫", "璧", "懈౩䊀脁潡䣚⾤㸼짠ब", "뗲᭾ 띀急蔹⹉ꆣせㆉ였鷀Ú錘陈搳窇㉕"];

let regex = ["fdp", "cu", "carai", "cuzao", "porra", "arrombado", "cu preto", "lixo", "autista", "lixeira", "verme", "Horrível", "seu merda", "filho da puta", "vsfd",
"caralho", "seu gordo", "cuzão", "vadia", "sua mãe", "seu fdp", "cala a boca", "puta", "fudido", "krl", "f d p", "vtnc", "vai tomar no cu", "crl", "cadeirante", "caderante",
"nigga", "prr", "CARALHO", "PORRA", "CARAI", "CUZAO", "CUZÃO", "FDP", "FILHO DA PUTA", "Cu", "CU", "CÚ", "PORR", "porr", "PRRA", "fodido", "FODIDO", "CRALHO", "CARLHO"];

let xingo = ["seu preto", "seu macaco", "macaco", "seu negro", "pretinho", "resto de aborto", "seu mcc", "Negrinho", "carvão", "nazista", "Nazista"];
let malcorage = ["Manco", "manco", "Malco lixo", "malco lixo", "Malco ruim", "malco ruim", "malco fudido", "manko"];
let chorao = ["mds", "meudeus"];
let confuso = ["?", "q", "qq", "qe"];
let seacha = ["ez", "facil", "fácil", "easy", "ganhamos", "ganhamo", "ganhamu"];
let naoconfia = ["perdemos", "perdemo"];
let sorry = ["mb", "mals", "foi mal", "desculpa", "chapei", "mosquei", "vacilei", "malz"];
let agradece = ["gg", "boa"];
let porpouco = ["u", "uu", "uuu", "U", "quase"];
let raivaquase = ["a", "aa", "merda", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "A", "AA", "AAA", "AAAA", "aaa", "ah", "AH"];
let xis = ["x", "xx", "X", "XX"];
let perdidao = ["ue", "ué"];
let lagadao = ["mto lag", "tolagado", "to lagado", "to lag", "lag demais", "lag dmais", "lagou", "mt lag", "tolag", "lag"];
let relaxado = ["rlx", "relaxa", "acontece", "dboa", "de boa", "suave", "suav"];
let humilhante = ["oe", "ole", "tomou", "mamou"];
let humilhado = ["tomei", "levei", "mamei", "MAMEI"];

function nameForbid(player) {
    if (forbid.includes(player.name)) { room.kickPlayer(player.id, 'nick proibido nessa sala', false) }
};

function banBlackListed(player) {
    if (blacklistconnID.includes(player.id) || player.id.includes(blacklistconnID)) { banidao = true; room.kickPlayer(player.id, 'Você está na BLACKLIST, saiba mais em https://discord.gg/AR7ypuzJG8', true) }
};

/* STATS */

var game = "";
var GKList = new Array(2 * maxPlayers).fill(0);
var Rposs = 0;
var Bposs = 0;
var point = [{ "x": 0, "y": 0 }, { "x": 0, "y": 0 }];
var ballSpeed;
var lastWinner = Team.SPECTATORS;
var streak = 0;
// goals count
var goalsRp1 = 0;
var goalsRp2 = 0;
var goalsRp3 = 0;
var goalsBp1 = 0;
var goalsBp2 = 0;
var goalsBp3 = 0;
// assists count
var assistsRp1 = 0;
var assistsRp2 = 0;
var assistsRp3 = 0;
var assistsBp1 = 0;
var assistsBp2 = 0;
var assistsBp3 = 0;
//
let scoreb = 0;
let scorer = 0;
let increes = "";
var goalsHome = [];
var goalsGuest = [];
var allBlues = []; // This is to count the players who should be counted for the stats. This includes players who left after the game has started, doesn't include those who came too late or ...
var allReds = []; // ... those who came in a very unequal game.

/* AUXILIARY */

var checkTimeVariable = false;
var announced = false;
let choose = true;
let redFirst = false;
var statNumber = 0; // This allows the room to be given stat information every X minutes
var endGameVariable = false; // This variable with the one below helps distinguish the cases where games are stopped because they have finished to the ones where games are stopped due to player movements or resetting teams
var resettingTeams = false;
var statInterval = 6;
let banidao = false;

/* DISCORD */

var Intervalo_mensagens;
var help_mensagens;
var var_mensage;
var Intervalo_msgs = 1000 * 60 * 5; // 1000 * 60 * 15 = irá mandar a mensagem a cada 15 minutos
var Intervalo_msgs2 = 1000 * 60 * 3; // 1000 * 60 * 15 = irá mandar a mensagem a cada X minutos
var Intervalo_msgs3 = 1000 * 60 * 8;

Intervalo_mensagens = setInterval(() => {
const msgs1 = ["▒█▀▀▄ ▀█▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▄"];
const msgs2 = ["▒█░▒█ ▒█░ ░▀▀▀▄▄ ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█░▒█"];
const msgs3 = ["▒█▄▄▀ ▄█▄ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▀"];
const msgs4 = ["https://discord.gg/AR7ypuzJG8"];
sendRoomLinkToDiscord(roomName + "\n" + linkinho);
room.sendAnnouncement(centerText(msgs1), null, white, "bold", 0);
room.sendAnnouncement(centerText(msgs2), null, white, "bold", 0);
room.sendAnnouncement(centerText(msgs3), null, white, "bold", 0);
room.sendAnnouncement(centerText(msgs4), null, white, "italic", 1);
}, Intervalo_msgs);

help_mensagens = setInterval(() => {
room.sendAnnouncement(centerText("「📣」 𝘂𝘀𝗲 !𝗵𝗲𝗹𝗽 𝗽𝗮𝗿𝗮 𝘃𝗲𝗿 𝗼𝘀 𝗰𝗼𝗺𝗮𝗻𝗱𝗼𝘀"), null, yellow, "italic", 1);
}, Intervalo_msgs2);

var_mensage = setInterval(() => {
    room.sendAnnouncement(centerText("「📹」Se algo estiver errado, chame o 'var'!"), null, white, "italic", 1);
}, Intervalo_msgs3);

function joinDiscord(url) {
    const janelinhaNova = window.open(url, "_blank");
    janelinhaNova.focus()
};

/* Sistema data e hora */
  
function dataehora() {
   let data = new Date(),
   dia=data.getDate().toString().padStart(2, '0'),
    mes=(data.getMonth()+1).toString().padStart(2, '0'),
    ano=data.getFullYear(),
    horas=data.getHours().toString().padStart(2, '0'),
    minutos=data.getMinutes().toString().padStart(2, '0');
    return `${dia}/${mes} ás ${horas}:${minutos}`;
};
  
function getDateInfo() {
    let data = new Date(),
    dia=data.getDate().toString().padStart(2, '0'),
    mes=(data.getMonth()+1).toString().padStart(2, '0'),
    ano=data.getFullYear(),
    horas=data.getHours().toString().padStart(2, '0'),
    minutos=data.getMinutes().toString().padStart(2, '0');
    return `${dia}/${mes}/${ano} ás ${horas}:${minutos}`;
};

/* DATA STORAGE */

//autocontrole
function generateAdminRandomPassword() {
    const passwordLength = 4; // comprimento da senha
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomDigit = Math.floor(Math.random() * 10); // gera um número aleatório entre 0 e 9
      password += randomDigit.toString(); // adiciona o número à senha como uma string
    }
    sendAdminCommandsToDiscord('Senha: ' + password);
    return password;
};
function generateRandomPassword() {
    const passwordLength = 4; // comprimento da senha
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomDigit = Math.floor(Math.random() * 10); // gera um número aleatório entre 0 e 9
      password += randomDigit.toString(); // adiciona o número à senha como uma string
    }
    sendKeyToDiscord("  \n                  Howto:\n set <game> <goal> <assist> <hattrick> <key>\n add <number> <gols/assists/hats/jogos> <key>\n \n Last Key:   " + password + "    \n  ");
    return password;
};
function golzin(gols, player) {
    const playerName = player.name;
    const key = `goals_${playerName}`;
    localStorage.setItem(key, parseInt(gols)); // Armazenar o novo valor no localStorage
};
function assistizinha(assists, player) {
    const playerName = player.name;
    const key = `assists_${playerName}`;
    localStorage.setItem(key, parseInt(assists)); // Armazenar o novo valor no localStorage
};
function hatzinho(hatTricks, player) {
    const playerName = player.name;
    const key = `hattrick_${playerName}`;
    localStorage.setItem(key, parseInt(hatTricks)); // Armazenar o novo valor no localStorage
};
function joguin(joguins, player) {
    const playerName = player.name;
    const key = `jogos_${playerName}`;
    localStorage.setItem(key, parseInt(joguins)); // Armazenar o novo valor no localStorage
};
// THE GOAT
function findPlayerWithMostHatTricks(players) {
    let maxHatTricks = 0;
    let playerWithMostHatTricks = null;
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        const playerName = player.name;
        const key = `hattrick_${playerName}`;
        const hatTricks = parseInt(localStorage.getItem(key)) || 0;
        if (hatTricks > maxHatTricks) {
            maxHatTricks = hatTricks;
            playerWithMostHatTricks = player.name;
        }
    }
    return playerWithMostHatTricks;
};
function getBiggestGoaler(players) {
    let maxGoals = 0;
    let biggestGoaler = null;
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        const goals = getStoredGoals(player);
        if (goals > maxGoals) {
            maxGoals = goals;
            biggestGoaler = player.name;
        }
    }
    return biggestGoaler;
};
function getBiggestAssistant(players) {
    let biggestAssistPlayer = null;
    let biggestAssists = -1;
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        const assists = getStoredAssists(player);
        if (assists > biggestAssists) {
            biggestAssists = assists;
            biggestAssistPlayer = player.name;
        }
    }
    return biggestAssistPlayer;
};
function getPlayerWithMostWins(players) {
    let maxWins = 0;
    let playerWithMostWins = null;
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        const playerName = player.name;
        const key = `vitórias_${playerName}`;
        const wins = parseInt(localStorage.getItem(key)) || 0;
        if (wins > maxWins) {
            maxWins = wins;
            playerWithMostWins = player.name;
        }
    }
    return playerWithMostWins;
};
function ddd(playerName) {
    const key = `vitórias_${playerName}`;
    const wins = localStorage.getItem(key);
    return parseInt(wins) || 0; // Retorna 0 se não houver vitórias armazenadas
};
function ccc(playerName) {
    const key = `hattrick_${playerName}`;
    const value = localStorage.getItem(key);
    // Exibe mensagem no console informando o Hat Trick feito pelo jogador
    return parseInt(value) || 0;
};
function aaa(playerName) {
    const key = `goals_${playerName}`;
    const goals = localStorage.getItem(key);
    return parseInt(goals) || 0;
};
function bbb(playerName) {
    const key = `assists_${playerName}`;
    const assists = localStorage.getItem(key);
    return parseInt(assists) || 0; // Retorna 0 se não houver assistências armazenadas
}
// ZOEIRAS
function namoradosfieis(goaler, assistant) {
    if (goaler.id === lodiaz && assistant.id === lanoche) {
        var messages = [
            "Que lindo esse casal!",
            goaler.name + " + " + assistant.name + " = Amor Eterno ❤️",
            "Não dá pra julgar o amor deles quando fazem gols, né?"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 3000);
    }
    if (goaler.id === lanoche && assistant.id === lodiaz) {
        var messages = [
            "Que lindo esse casal!",
            goaler.name + " + " + assistant.name + " = Amor Eterno ❤️",
            "Não dá pra julgar o amor deles quando fazem gols, né?"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 3000);
    }
};
function igodnesses(goaler, assistant) {
    if (goaler.id === badassID) {
        var messages = [
            "Bela, " + goaler.name + "! ❌",
            goaler.name + " não faz muito, mas faz bonito! kk",
            "Respeita o " + goaler.name + ", chat! ❌",
            "Merecido! Sou fã desse cara... Quem mais?"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 3000);
    }
    if (assistant.id === badassID) {
        var messages = [
            "Que passe, pae! ❌",
            goaler.name + " deve se sentir honrado...\nEsse passe do " + assistant.name + " garantiu o gol! ❌",
            goaler.name + " ficou fácil com esse passe do " + assistant.name + "... ❌",
            assistant.name + " tá pra jogo? Acho que sim, com uns passes desses...",
            "Aiin, com um passe desses não tem como errar, pô!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 3000);
    }
};
function soberbagem(goaler, assistant) {
    if (goaler.id === soberboID) {
        var messages = [
            "Bela, " + goaler.name + "! 🍫",
            goaler.name + " não se contradiz! kk",
            "Respeita o " + goaler.name + ", chat! 🍫",
            "Merecido! Sou fã desse cara... Quem mais?"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 3000);
    }
    if (assistant.id === soberboID) {
        var messages = [
            "Que passe, pae! 🍫",
            goaler.name + " ficou fácil com esse passe do " + assistant.name + "... 🍫",
            assistant.name + " tá pra jogo? Acho que sim, com uns passes desses...",
            "Aiin, com um passe desses não tem como errar, pô!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 3000);
    }
};
function golcontra(goaler) {
    var messages = [
        "Se deu mal, " + goaler.name + "! 🤡",
        goaler.name + " aí não, pô! 🤡",
        "Calma " + goaler.name + ", não tá fácil pra ninguém...",
        "Dica pro " + goaler.name + ": Na próxima... NÃO MIRA NO SEU GOL!!",
        goaler.name + " tentou, quem sou eu pra julgar?"
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    setTimeout(function () {
        room.sendAnnouncement(centerText(announcement), null, white, "bold");
    }, 3000);
};
function goldelanoche(goaler, assistant) {
    if (goaler.id === lanoche) {
        var messages = [
            "Ankara, ankara, " + goaler.name + "! 🐐",
            "kk 🐐🐐🐐🐐 " + goaler.name + " o GOAT cantou! 🐐🐐🐐🐐 kk",
            "Respeita o " + goaler.name + ", chat! 🐐",
            "Respeita o GOAT, chat! 🐐",
            "Merecido! Sou fã desse cara... Quem mais?",
            "Golzinho mixuruca, em " + goaler.name + "? kkkkkk Zuera",
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 3000);
    }
    if (assistant.id === lanoche) {
        var messages = [
            "Que passe, pae! 🐐",
            goaler.name + " ficou fácil com esse passe do " + assistant.name + "... 🐐",
            assistant.name + " tá pra jogo? Acho que sim, com uns passes desses..."
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 3000);
    }
};
//
function storeHatTrick(player) {
    const playerName = player.name;
    const key = `hattrick_${playerName}`;
    const currentHatTricks = getHatTrick(player);
    const newHatTricks = currentHatTricks + 1;
    localStorage.setItem(key, newHatTricks);
    room.sendAnnouncement(centerText(`O jogador ${playerName} fez um Hat Trick! Total de Hat Tricks: ${newHatTricks}`), null, green, "bold");
};
function getHatTrick(player) {
    const playerName = player.name;
    const key = `hattrick_${playerName}`;
    const value = localStorage.getItem(key);
    // Exibe mensagem no console informando o Hat Trick feito pelo jogador
    return parseInt(value) || 0;
};
function storeGoals(player) {
    const playerName = player.name;
    const key = `goals_${playerName}`;
    const currentGoals = getStoredGoals(player); // Obter o valor atual de gols do jogador
    const newGoals = currentGoals + 1; // Incrementar em 1
    localStorage.setItem(key, newGoals.toString()); // Armazenar o novo valor no localStorage
};
function getStoredGoals(player) {
    const playerName = player.name;
    const key = `goals_${playerName}`;
    const goals = localStorage.getItem(key);
    return parseInt(goals) || 0;
};
function storeAssist(player) {
    const playerName = player.name;
    const key = `assists_${playerName}`;
    const currentAssists = getStoredAssists(player); // Obter o valor atual de assistências do jogador
    const newAssists = currentAssists + 1; // Incrementar em 1
    localStorage.setItem(key, newAssists.toString()); // Armazenar o novo valor no localStorage
};
function getStoredAssists(player) {
    const playerName = player.name;
    const key = `assists_${playerName}`;
    const assists = localStorage.getItem(key);
    return parseInt(assists) || 0; // Retorna 0 se não houver assistências armazenadas
};
function countGames() {
    if (teamR.length === 3 && teamB.length === 3) {
        incrementGames(teamR[0]);
        incrementGames(teamR[1]);
        incrementGames(teamR[2]);
        incrementGames(teamB[0]);
        incrementGames(teamB[1]);
        incrementGames(teamB[2]);
    }
    if (teamR.length === 2 && teamB.length === 2) {
        incrementGames(teamR[0]);
        incrementGames(teamR[1]);
        incrementGames(teamB[0]);
        incrementGames(teamB[1]);
    }
};
function incrementGames(player) {
    const playerName = player.name;
    const key = `jogos_${playerName}`;
    const currentGames = getStoredGames(player); // Obter o valor atual de jogos do jogador
    const newGames = currentGames + 1; // Incrementar em 1
    localStorage.setItem(key, newGames.toString()); // Armazenar o novo valor no localStorage
};
function getStoredGames(player) {
    const playerName = player.name;
    const key = `jogos_${playerName}`;
    const games = localStorage.getItem(key);
    return parseInt(games) || 0; // Retorna 0 se não houver jogos armazenados
};
function countWinsTeamR() {
    if (teamR.length === 3) {
        incrementWins(teamR[0]);
        incrementWins(teamR[1]);
        incrementWins(teamR[2]);
    }
    if (teamR.length === 2) {
        incrementWins(teamR[0]);
        incrementWins(teamR[1]);
    }
};
function countWinsTeamB() {
    if (teamB.length === 3) {
        incrementWins(teamB[0]);
        incrementWins(teamB[1]);
        incrementWins(teamB[2]);
    }
    if (teamB.length === 2) {
        incrementWins(teamB[0]);
        incrementWins(teamB[1]);
    }
};
function incrementWins(player) {
    const playerName = player.name;
    const key = `vitórias_${playerName}`;
    const currentWins = parseInt(localStorage.getItem(key)) || 0; // Obter o valor atual de vitórias do jogador
    const newWins = currentWins + 1; // Incrementar em 1
    localStorage.setItem(key, newWins.toString()); // Armazenar o novo valor no localStorage
};
function getStoredWins(player) {
    const playerName = player.name;
    const key = `vitórias_${playerName}`;
    const wins = localStorage.getItem(key);
    return parseInt(wins) || 0; // Retorna 0 se não houver vitórias armazenadas
};
function countLossesTeamR() {
    if (teamR.length === 3) {
        incrementLosses(teamR[0]);
        incrementLosses(teamR[1]);
        incrementLosses(teamR[2]);
    }
    if (teamR.length === 2) {
        incrementLosses(teamR[0]);
        incrementLosses(teamR[1]);
    }
};
function countLossesTeamB() {
    if (teamB.length === 3) {
        incrementLosses(teamB[0]);
        incrementLosses(teamB[1]);
        incrementLosses(teamB[2]);
    }
    if (teamB.length === 2) {
        incrementLosses(teamB[0]);
        incrementLosses(teamB[1]);
    }
};
function incrementLosses(player) {
    const playerName = player.name;
    const key = `derrotas_${playerName}`;
    const currentLosses = getStoredLosses(player); // Obter o valor atual de derrotas do jogador
    const newLosses = currentLosses + 1; // Incrementar em 1
    localStorage.setItem(key, newLosses.toString()); // Armazenar o novo valor no localStorage
};
function getStoredLosses(player) {
    const playerName = player.name;
    const key = `derrotas_${playerName}`;
    const losses = localStorage.getItem(key);
    return parseInt(losses) || 0; // Retorna 0 se não houver derrotas armazenadas
};
function calculateWinPercentage(player) {
    const wins = getStoredWins(player);
    const losses = getStoredLosses(player);
    const totalGames = wins + losses;
    const winPercentage = (wins / totalGames) * 100;
    const winPercentageString = parseInt(winPercentage.toFixed(2)).toString();
    return winPercentageString;
};

/* WEBHOOKS */ 

function sendAnnouncementToDiscord(message) {
    var request = new XMLHttpRequest();
    request.open("POST","https://discord.com/api/webhooks/1113511065309937764/vuBov9U--5L4S_lNoWToMiH_Prd9rq1q1180bZKCYCBtpyoA3-4llbqhz-ZNTsekQV3c"); // Webhook Link
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        avatar_url: 'https://cdn.discordapp.com/icons/1108404626014871633/39f9e5007c336295e78937769194251a.png?size=2048', // Avatar WEBHOOK
        username: 'Info. Players', // Nome WEBHOOK
        content: message
    };
    request.send(JSON.stringify(params));
};

function chatlogsenddiscord(mensagem) {
    var chamar = new XMLHttpRequest();
    chamar.open("POST","https://discord.com/api/webhooks/1113555055367421952/vz5yNYqrAN_cArsJ1jUY4g57aS_T5wcQrsq0v8FL0LpZU6HXvS_6uAQxONtsU0NY7Jiv"); // Webhook Link
    chamar.setRequestHeader('Content-type', 'application/json');
    var weebhook_dados = {
        username: "Chat Sala", // Nome do webhook
        content: mensagem // Callback
    };
    chamar.send(JSON.stringify(weebhook_dados));
};

function sendRoomLinkToDiscord(message) {
    var request = new XMLHttpRequest();
    request.open("POST","https://discord.com/api/webhooks/1113813588252053644/2ZjXGA_l2e3EtLaVpqrz3JCuHd7T7OO60QLngZspMzS4Xrq0yx8bkFqDRkQ-n8wVMHQ7"); // Webhook Link
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        avatar_url: 'https://cdn.discordapp.com/attachments/1113830556967379064/1113830882818666588/image.png', // Avatar WEBHOOK
        username: 'Malco', // Nome WEBHOOK
        content: message
    };
    request.send(JSON.stringify(params));
};

function sendScoresToDiscord(message) {
    var request = new XMLHttpRequest();
    request.open("POST","https://discord.com/api/webhooks/1114638025956265994/fidIiOSGdvOsMEpk-9HHjmKcyZwcWHuIbCWOxtDsJRctUxHrzFboKyTh5uAn9XBAl336"); // Webhook Link
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        avatar_url: 'https://cdn.discordapp.com/attachments/1113830556967379064/1113881527181398087/image.png', // Avatar WEBHOOK
        username: 'Soberbo', // Nome WEBHOOK
        content: message
    };
    request.send(JSON.stringify(params));
};

function sendHattricksToDiscord(message) {
    var request = new XMLHttpRequest();
    request.open("POST","https://discord.com/api/webhooks/1119855439295819776/IQzj6ICC9p0vxXQQwE7rRjvRXELnH90NvJzXB7DNxx8H2KvY1EpQ1ieDdKWx3Qj9M1cj"); // Webhook Link
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        avatar_url: 'https://cdn.discordapp.com/attachments/1113830556967379064/1119854937241813002/image.png', // Avatar WEBHOOK
        username: 'Hat Trick Counter', // Nome WEBHOOK
        content: message
    };
    request.send(JSON.stringify(params));
};

function sendCountsToDiscord(message) {
    var request = new XMLHttpRequest();
    request.open("POST","https://discord.com/api/webhooks/1120552694415892552/iUCLCLI-YntRYafE1RFq2KP_plUvuh9XFWNmKq11luFNKlR5rupOV_iOCJPP9dwTbkTs"); // Webhook Link
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        avatar_url: 'https://cdn.discordapp.com/attachments/1113830556967379064/1119854937241813002/image.png', // Avatar WEBHOOK
        username: 'Data Counter', // Nome WEBHOOK
        content: message
    };
    request.send(JSON.stringify(params));
};

function sendKeyToDiscord(message) {
    var request = new XMLHttpRequest();
    request.open("POST","https://discord.com/api/webhooks/1120737971189067776/QLqVNa0RR7Of3XgcFfWRuXrQhoMIm8wFAsrZfDyjOG20fz9n9N2BFOyg2rKax-Lr7NPL"); // Webhook Link
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        avatar_url: 'https://cdn.discordapp.com/attachments/1113830556967379064/1120758521735172137/image.png', // Avatar WEBHOOK
        username: 'secret-key', // Nome WEBHOOK
        content: message
    };
    request.send(JSON.stringify(params));
};

function sendCommandsToDiscord(message) {
    var request = new XMLHttpRequest();
    request.open("POST","https://discord.com/api/webhooks/1121138526021488651/IXWaKqLJpbAbBa5jQuyk4lk1-K_4VuI1loqqXrLXAynvdspIllo4bkePy15SACT_Z8iA"); // Webhook Link
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        avatar_url: 'https://cdn.discordapp.com/attachments/1113830556967379064/1121137833982304327/image.png', // Avatar WEBHOOK
        username: 'Player Commands', // Nome WEBHOOK
        content: message
    };
    request.send(JSON.stringify(params));
};

function sendAdminCommandsToDiscord(message) {
    var request = new XMLHttpRequest();
    request.open("POST","https://discord.com/api/webhooks/1121137538879475842/vy43P0kqYM2n5ArOygOH8Nd5cArsVIss2y7nva2z5vPW1ybbnlbS2EUof_cvftOdrsAq"); // Webhook Link
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        avatar_url: 'https://cdn.discordapp.com/attachments/1113830556967379064/1121137833982304327/image.png', // Avatar WEBHOOK
        username: 'Admin Commands', // Nome WEBHOOK
        content: message
    };
    request.send(JSON.stringify(params));
};


/* FUNCTIONS */

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

function getTime(scores) {
    return "[" + Math.floor(Math.floor(scores.time / 60) / 10).toString() + Math.floor(Math.floor(scores.time / 60) % 10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) / 10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) % 10).toString() + "]"
};

function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
};

/* BUTTONS */

function alwaysOnTeam() {
    if (teamS.length == 0) {
        return;
    }
    else {
        if (teamR.length == 0) {
            if (teamS.length > 1) {
                room.setPlayerTeam(teamS[0].id, Team.RED);
            }
            return;
        }
        if (teamB.length == 0) {
            if (teamS.length > 1) {
                room.setPlayerTeam(teamS[0].id, Team.BLUE);
            }
            return;
        }
    }
};

function IIIx() {
    if (teamS.length === 0) {
        return;
    }
    else {
        if (teamR.length === 1) {
            if (teamS.length > 3) {
                room.sendAnnouncement(centerText("Opa!! Chagou gente, vamos ajustar e reiniciar"), null, white, "bold");
                setTimeout(function () {
                    room.setPlayerTeam(teamS[0].id, Team.RED);
                    room.setPlayerTeam(teamS[1].id, Team.RED);
                    rr = true;
                    setTimeout(function () {
                        room.stopGame();
                        checkTeamSizeAndChangeMap();
                        setTimeout(function () {
                        room.startGame();
                        }, 5);
                    }, 5);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("Agora melhorou!"), null, white, "bold");
                        rr = false;
                    }, 800);
                }, 300);
            }
            if (teamS.length > 2) {
                room.sendAnnouncement(centerText("Opa!! Chagou gente, vamos ajustar e reiniciar"), null, white, "bold");
                setTimeout(function () {
                    room.setPlayerTeam(teamS[0].id, Team.RED);
                    rr = true;
                    setTimeout(function () {
                        room.stopGame();
                        checkTeamSizeAndChangeMap();
                        setTimeout(function () {
                        room.startGame();
                        }, 5);
                    }, 5);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("Agora melhorou!"), null, white, "bold");
                        rr = false;
                    }, 800);
                }, 300);
            }
            return;
        }
        if (teamR.length === 2) {
            if (teamS.length > 2) {
                room.sendAnnouncement(centerText("Opa!! Chagou gente, vamos ajustar e reiniciar"), null, white, "bold");
                setTimeout(function () {
                    room.setPlayerTeam(teamS[0].id, Team.RED);
                    rr = true;
                    setTimeout(function () {
                        room.stopGame();
                        checkTeamSizeAndChangeMap();
                        setTimeout(function () {
                        room.startGame();
                        }, 5);
                    }, 5);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("Agora melhorou!"), null, white, "bold");
                        rr = false;
                    }, 800);
                }, 300);
            }
            return;
        }
        if (teamB.length === 1) {
            if (teamS.length > 3) {
                room.sendAnnouncement(centerText("Opa!! Chagou gente, vamos ajustar e reiniciar"), null, white, "bold");
                setTimeout(function () {
                    room.setPlayerTeam(teamS[0].id, Team.BLUE);
                    room.setPlayerTeam(teamS[1].id, Team.BLUE);
                    rr = true;
                    setTimeout(function () {
                        room.stopGame();
                        checkTeamSizeAndChangeMap();
                        setTimeout(function () {
                        room.startGame();
                        }, 5);
                    }, 5);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("Agora melhorou!"), null, white, "bold");
                        rr = false;
                    }, 800);
                }, 300);
            }
            if (teamS.length > 2) {
                room.sendAnnouncement(centerText("Opa!! Chagou gente, vamos ajustar e reiniciar"), null, white, "bold");
                setTimeout(function () {
                    room.setPlayerTeam(teamS[0].id, Team.BLUE);
                    rr = true;
                    setTimeout(function () {
                        room.stopGame();
                        checkTeamSizeAndChangeMap();
                        setTimeout(function () {
                        room.startGame();
                        }, 5);
                    }, 5);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("Agora melhorou!"), null, white, "bold");
                        rr = false;
                    }, 800);
                }, 300);
            }
            return;
        }
        if (teamB.length === 2) {
            if (teamS.length > 2) {
                room.sendAnnouncement(centerText("Opa!! Chagou gente, vamos ajustar e reiniciar"), null, white, "bold");
                setTimeout(function () {
                    room.setPlayerTeam(teamS[0].id, Team.BLUE);
                    rr = true;
                    setTimeout(function () {
                        room.stopGame();
                        checkTeamSizeAndChangeMap();
                        setTimeout(function () {
                        room.startGame();
                        }, 5);
                    }, 5);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("Agora melhorou!"), null, white, "bold");
                        rr = false;
                    }, 800);
                }, 300);
            }
            return;
        }
    }
};

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

function getPlayer(playerId) {
// Itera sobre os jogadores na playerList para encontrar o jogador com o ID correspondente
    for (const player of playerList) {
        if (player.id === playerId) {
            return player;
        }
    }
    // Retorna null se o jogador não for encontrado
    return null;
};

function getPlayerObjectByName(playerName) {
    for (const player of playerList) {
      if (player.nome === playerName) {
        return player;
      }
    }
    return null;
};

function checkAndStartGame() {
    if (teamS.length <= 2) {
        if (teamR.length === 2 && teamB.length === 2) {
            setTimeout(function () {
                room.sendAnnouncement(centerText("🤖 -- INÍCIO AUTOMÁTICO -- 🤖"), null, yellow, "bold");
                capchat = false;
                choose = false;
            }, 10);
            setTimeout(function () {
                room.sendAnnouncement(centerText("Atenção players!"), null, white, "normal", 2);
            }, 600);
            setTimeout(function () {
                room.sendAnnouncement(centerText("PLAY!"), null, green, "bold");
            }, 1500);
            setTimeout(function () {
                room.startGame();
                room.pauseGame(false);
            }, 2500);
        }
        if (teamR.length === 1 && teamB.length === 1) {
            setTimeout(function () {
                room.sendAnnouncement(centerText("🤖 -- INÍCIO AUTOMÁTICO -- 🤖"), null, yellow, "bold");
                capchat = false;
                choose = false;
            }, 10);
            setTimeout(function () {
                room.sendAnnouncement(centerText("Atenção players!"), null, white, "normal", 2);
            }, 600);
            setTimeout(function () {
                room.sendAnnouncement(centerText("PLAY!"), null, green, "bold");
            }, 1500);
            setTimeout(function () {
                room.startGame();
                room.pauseGame(false);
            }, 2500);
        }
    }
    if (teamR.length === 3 && teamB.length === 3) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("🤖 -- INÍCIO AUTOMÁTICO -- 🤖"), null, yellow, "bold");
            capchat = false;
            choose = false;
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Atenção players!"), null, white, "normal", 2);
        }, 600);
        setTimeout(function () {
            room.sendAnnouncement(centerText("PLAY!"), null, green, "bold");
        }, 1500);
        setTimeout(function () {
            room.startGame();
            room.pauseGame(false);
        }, 2500);
    }
};

function checkAndPauseGame() {
    if (teamR.length !== teamB.length) {
      setTimeout(() => { room.pauseGame(true); }, 500);
    }
};

function checkAndResumeGame() {
    if (teamR.length === teamB.length) {
        setTimeout(() => { room.pauseGame(false); }, 500);
    }
};

function checkTeamSizeAndChangeMap() {
    if (teamR.length === 1 && teamB.length === 1) {
      room.setCustomStadium(smallStadium);
    } else if (teamR.length >= 2 && teamB.length >= 2) {
      room.setCustomStadium(mediumStadium);
    }
};

function checkTeamSizeLimit() {
    if (teamR.length === 4) {
        room.setPlayerTeam(teamR[3].id, Team.SPECTATORS);
        room.sendAnnouncement(centerText("Reduzindo time " + nameHome + "."), null, warn, "italic");
        room.sendAnnouncement(centerText("Máximo suportado: 3 players por equipe"), null, warn, "normal");
    }
    if (teamB.length === 4) {
        room.setPlayerTeam(teamB[3].id, Team.SPECTATORS);
        room.sendAnnouncement(centerText("Reduzindo time " + nameGuest + "."), null, warn, "italic");
        room.sendAnnouncement(centerText("Máximo suportado: 3 players por equipe"), null, warn, "normal");
    }
};

function registrarStreak() {
    var playerNames = [];
    var playerNamestext = [];
    if (teamR.length === 3) {
        playerNames = [teamR[0].name, teamR[1].name, teamR[2].name];
        playerNamestext = ["🏴‍☠️ Cap --> " + teamR[0].name + ", --> " + teamR[1].name + " e --> " + teamR[2].name];
        var key = "streak_" + playerNames.join("_");
        localStorage.setItem(key, streak);
        localStorage.setItem(key + "_players", JSON.stringify(playerNamestext));
    }
};
  
function obterRecordeStreak() {
    var maxStreak = 0;
    var playersInRecordStreak = [];
    var streakCount = [];
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key.startsWith("streak_")) {
        streakCount = parseInt(localStorage.getItem(key));
        if (streakCount > maxStreak) {
          maxStreak = streakCount;
          playersInRecordStreak = JSON.parse(localStorage.getItem(key + "_players"));
        }
      }
    }
    return { streakers: maxStreak, jogadores: playersInRecordStreak };
};

function verificarQuebraRecorde(streak) {
    var streakRecord = obterRecordeStreak().streakers;
    if (streak > streakRecord) {
        room.sendAnnouncement(centerText("🏆⚽ -- " + nameHome + " faz história na FUTZ! -- ⚽🏆"), null, yellow, "normal");
        room.sendAnnouncement(centerText("Novo record de STREAk"), null, white, "bold");
        room.sendAnnouncement(centerText(obterRecordeStreak().jogadores), null, white, "bold");
        room.sendAnnouncement(centerText("Estão à " + obterRecordeStreak().streakers + " sem perder!"), null, white, "bold");
        sendScoresToDiscord("🏆⚽ Record de STREAK (partidas sem perder)\n.\n" + "🏴‍☠️ Cap --> " + teamR[0].name + ", --> " + teamR[1].name + " e --> " + teamR[2].name + "\nStreak; " + streak)
        return true; // O recorde de streak foi quebrado
    } else {
        return false; // O recorde de streak não foi quebrado
    }
};

// Função para obter nome do jogador pelo ID
function getPlayerName(playerId) {
    const player = getPlayer(playerId);
    if (player) {
    return player.nome;
    }
    return null;
}

function getPlayersList() {
    if (teamR.length == 1) {
        redp1 = teamR[0].name;
        redp2 = " ";
        redp3 = " ";
    }
    if (teamR.length == 2) {
        redp1 = teamR[0].name;
        redp2 = teamR[1].name;
        redp3 = " ";
    }
    if (teamR.length == 3) {
        redp1 = teamR[0].name;
        redp2 = teamR[1].name;
        redp3 = teamR[2].name;
    }
    if (teamB.length == 1) {
        bluep1 = teamB[0].name;
        bluep2 = " ";
        bluep3 = " ";
    }
    if (teamB.length == 2) {
        bluep1 = teamB[0].name;
        bluep2 = teamB[1].name;
        bluep3 = " ";
    }
    if (teamB.length == 3) {
        bluep1 = teamB[0].name;
        bluep2 = teamB[1].name;
        bluep3 = teamB[2].name;
    }
};

function getPlayersGoalCount() {
    if (teamR.length == 1) {
        if (lastPlayersTouched[0].id == teamR[0].id) {goalsRp1++;}
    }
    if (teamR.length == 2) {
        if (lastPlayersTouched[0].id == teamR[0].id) {goalsRp1++;}
        if (lastPlayersTouched[0].id == teamR[1].id) {goalsRp2++;}
    }
    if (teamR.length == 3) {
        if (lastPlayersTouched[0].id == teamR[0].id) {goalsRp1++;}
        if (lastPlayersTouched[0].id == teamR[1].id) {goalsRp2++;}
        if (lastPlayersTouched[0].id == teamR[2].id) {goalsRp3++;}
    }
    if (teamB.length == 1) {
        if (lastPlayersTouched[0].id == teamB[0].id) {goalsBp1++;}
    }
    if (teamB.length == 2) {
        if (lastPlayersTouched[0].id == teamB[0].id) {goalsBp1++;}
        if (lastPlayersTouched[0].id == teamB[1].id) {goalsBp2++;}
    }
    if (teamB.length == 3) {
        if (lastPlayersTouched[0].id == teamB[0].id) {goalsBp1++;}
        if (lastPlayersTouched[0].id == teamB[1].id) {goalsBp2++;}
        if (lastPlayersTouched[0].id == teamB[2].id) {goalsBp3++;}
    }
};

function getPlayersGoalContra() {
    if (teamR.length == 1) {
        if (lastPlayersTouched[0].id == teamR[0].id) {goalsRp1--;}
    }
    if (teamR.length == 2) {
        if (lastPlayersTouched[0].id == teamR[0].id) {goalsRp1--;}
        if (lastPlayersTouched[0].id == teamR[1].id) {goalsRp2--;}
    }
    if (teamR.length == 3) {
        if (lastPlayersTouched[0].id == teamR[0].id) {goalsRp1--;}
        if (lastPlayersTouched[0].id == teamR[1].id) {goalsRp2--;}
        if (lastPlayersTouched[0].id == teamR[2].id) {goalsRp3--;}
    }
    if (teamB.length == 1) {
        if (lastPlayersTouched[0].id == teamB[0].id) {goalsBp1--;}
    }
    if (teamB.length == 2) {
        if (lastPlayersTouched[0].id == teamB[0].id) {goalsBp1--;}
        if (lastPlayersTouched[0].id == teamB[1].id) {goalsBp2--;}
    }
    if (teamB.length == 3) {
        if (lastPlayersTouched[0].id == teamB[0].id) {goalsBp1--;}
        if (lastPlayersTouched[0].id == teamB[1].id) {goalsBp2--;}
        if (lastPlayersTouched[0].id == teamB[2].id) {goalsBp3--;}
    }
};

function getPlayersAssistCount() {
    if (teamR.length == 1) {
        if (lastPlayersTouched[1].id == teamR[0].id) {assistsRp1++;}
    }
    if (teamR.length == 2) {
        if (lastPlayersTouched[1].id == teamR[0].id) {assistsRp1++;}
        if (lastPlayersTouched[1].id == teamR[1].id) {assistsRp2++;}
    }
    if (teamR.length == 3) {
        if (lastPlayersTouched[1].id == teamR[0].id) {assistsRp1++;}
        if (lastPlayersTouched[1].id == teamR[1].id) {assistsRp2++;}
        if (lastPlayersTouched[1].id == teamR[2].id) {assistsRp3++;}
    }
    if (teamB.length == 1) {
        if (lastPlayersTouched[1].id == teamB[0].id) {assistsBp1++;}
    }
    if (teamB.length == 2) {
        if (lastPlayersTouched[1].id == teamB[0].id) {assistsBp1++;}
        if (lastPlayersTouched[1].id == teamB[1].id) {assistsBp2++;}
    }
    if (teamB.length == 3) {
        if (lastPlayersTouched[1].id == teamB[0].id) {assistsBp1++;}
        if (lastPlayersTouched[1].id == teamB[1].id) {assistsBp2++;}
        if (lastPlayersTouched[1].id == teamB[2].id) {assistsBp3++;}
    }
};

function hatTrickCount() {
    if (goalsRp1 === 3 && teamR.length === 3) {
        storeHatTrick(teamR[0]);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🏆⚽ -- Mais um entra pra história da FUTZ! -- ⚽🏆"), null, yellow, "normal");
            room.sendAnnouncement(centerText("HAT-TRICK do brabo!"), null, green, "bold");
            room.sendAnnouncement(centerText(teamR[0].name + " agora tem " + getHatTrick(teamR[0]) + " hat-tricks"), null, white, "normal");
        }, 3000);
        sendHattricksToDiscord("____________________\n🏆⚽ -- HAT TRICK -- ⚽🏆\n____________________" + "\n" + " " + "\n" + " É TRÊS pra conta dessa lenda!\n" + teamR[0].name + " entra pra HISTÓRIA da FUTZ!\n💱 Totalizando " + getHatTrick(teamR[0]) + " Hat-tricks 💱\n" + " " + "\n" + 
        nameHome + " " + scorer + "  -  " + scoreb + " " + nameGuest + "\n" + dataehora());
    }
    if (goalsRp2 === 3 && teamR.length === 3) {
        storeHatTrick(teamR[1]);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🏆⚽ -- Mais um entra pra história da FUTZ! -- ⚽🏆"), null, yellow, "normal");
            room.sendAnnouncement(centerText("HAT-TRICK do brabo!"), null, green, "bold");
            room.sendAnnouncement(centerText(teamR[1].name + " agora tem " + getHatTrick(teamR[1]) + " hat-tricks"), null, white, "normal");
        }, 3000);
        sendHattricksToDiscord("____________________\n🏆⚽ -- HAT TRICK -- ⚽🏆\n____________________" + "\n" + " " + "\n" + " É TRÊS pra conta dessa lenda!\n" + teamR[1].name + " entra pra HISTÓRIA da FUTZ!\n💱 Totalizando " + getHatTrick(teamR[1]) + " Hat-tricks 💱\n" + " " + "\n" + 
        nameHome + " " + scorer + "  -  " + scoreb + " " + nameGuest + "\n" + dataehora());
    }
    if (goalsRp2 === 3 && teamR.length === 3) {
        storeHatTrick(teamR[2]);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🏆⚽ -- Mais um entra pra história da FUTZ! -- ⚽🏆"), null, yellow, "normal");
            room.sendAnnouncement(centerText("HAT-TRICK do brabo!"), null, green, "bold");
            room.sendAnnouncement(centerText(teamR[2].name + " agora tem " + getHatTrick(teamR[2]) + " hat-tricks"), null, white, "normal");
        }, 3000);
        sendHattricksToDiscord("____________________\n🏆⚽ -- HAT TRICK -- ⚽🏆\n____________________" + "\n" + " " + "\n" + " É TRÊS pra conta dessa lenda!\n" + teamR[2].name + " entra pra HISTÓRIA da FUTZ!\n💱 Totalizando " + getHatTrick(teamR[2]) + " Hat-tricks 💱\n" + " " + "\n" + 
        nameHome + " " + scorer + "  -  " + scoreb + " " + nameGuest + "\n" + dataehora());
    }
    if (goalsBp1 === 3 && teamB.length === 3) {
        storeHatTrick(teamB[0]);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🏆⚽ -- Mais um entra pra história da FUTZ! -- ⚽🏆"), null, yellow, "normal");
            room.sendAnnouncement(centerText("HAT-TRICK do brabo!"), null, green, "bold");
            room.sendAnnouncement(centerText(teamB[0].name + " agora tem " + getHatTrick(teamB[0]) + " hat-tricks"), null, white, "normal");
        }, 3000);
        sendHattricksToDiscord("____________________\n🏆⚽ -- HAT TRICK -- ⚽🏆\n____________________" + "\n" + " " + "\n" + " É TRÊS pra conta dessa lenda!\n" + teamB[0].name + " entra pra HISTÓRIA da FUTZ!\n💱 Totalizando " + getHatTrick(teamB[0]) + " Hat-tricks 💱\n" + " " + "\n" + 
        nameHome + " " + scorer + "  -  " + scoreb + " " + nameGuest + "\n" + dataehora());
    }
    if (goalsBp2 === 3 && teamB.length === 3) {
        storeHatTrick(teamB[1]);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🏆⚽ -- Mais um entra pra história da FUTZ! -- ⚽🏆"), null, yellow, "normal");
            room.sendAnnouncement(centerText("HAT-TRICK do brabo!"), null, green, "bold");
            room.sendAnnouncement(centerText(teamB[1].name + " agora tem " + getHatTrick(teamB[1]) + " hat-tricks"), null, white, "normal");
        }, 3000);
        sendHattricksToDiscord("____________________\n🏆⚽ -- HAT TRICK -- ⚽🏆\n____________________" + "\n" + " " + "\n" + " É TRÊS pra conta dessa lenda!\n" + teamB[1].name + " entra pra HISTÓRIA da FUTZ!\n💱 Totalizando " + getHatTrick(teamB[1]) + " Hat-tricks 💱\n" + " " + "\n" + 
        nameHome + " " + scorer + "  -  " + scoreb + " " + nameGuest + "\n" + dataehora());
    }
    if (goalsBp3 === 3 && teamB.length === 3) {
        storeHatTrick(teamB[2]);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🏆⚽ -- Mais um entra pra história da FUTZ! -- ⚽🏆"), null, yellow, "normal");
            room.sendAnnouncement(centerText("HAT-TRICK do brabo!"), null, green, "bold");
            room.sendAnnouncement(centerText(teamB[2].name + " agora tem " + getHatTrick(teamB[2]) + " hat-tricks"), null, white, "normal");
        }, 3000);
        sendHattricksToDiscord("____________________\n🏆⚽ -- HAT TRICK -- ⚽🏆\n____________________" + "\n" + " " + "\n" + " É TRÊS pra conta dessa lenda!\n" + teamB[2].name + " entra pra HISTÓRIA da FUTZ!\n💱 Totalizando " + getHatTrick(teamB[2]) + " Hat-tricks 💱\n" + " " + "\n" + 
        nameHome + " " + scorer + "  -  " + scoreb + " " + nameGuest + "\n" + dataehora());
    }
};

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
        room.sendAnnouncement(centerText("PRORROGAÇÃO"), null, yellow, "bold");
        goldenGoal = true;
        var messages = [
            drawTimeLimit * 60 + " segundos para o final!",
            "Vou dar " + drawTimeLimit * 60 + " segundos!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        room.sendAnnouncement(centerText(announcement), null, yellow, "normal");
        var messagens = [
            "⚽ Primeiro GOL vence! ⚽",
            "⚽ GOL DE OURO ativado ⚽",
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
    hatTrickCount();
    if (winner == Team.RED) {
        streak++;
        registrarStreak();
        verificarQuebraRecorde(streak);
        room.sendAnnouncement(centerText("🏆 FIM DE PARTIDA 🏆"), null, yellow, "bold");
        room.sendAnnouncement(centerText(nameHome + " " + scores.red + " - " + scores.blue + " " + nameGuest), null, white, "bold");
        room.sendAnnouncement(centerText((Rposs * 100).toPrecision(3).toString() + "% | Posse de bola | " + (Bposs * 100).toPrecision(3).toString() + "% "), null, white, "bold");
        for (var i = 0; i < 3; i++) {
            room.sendAnnouncement(docketFormat(goalsHome[i], goalsGuest[i]), null, white, "normal");
        }
        sendScoresToDiscord("____________________\n🏆-- FIM DE PARTIDA -- 🏆\n____________________" + "\n" + " " + "\n" + 
        "🔴 " + nameHome + " " + scores.red + "  -  " + scores.blue + " " + nameGuest + " 🔵\n" + 
        (Rposs * 100).toPrecision(3).toString() + "% | Posse de bola | " + 
        (Bposs * 100).toPrecision(3).toString() + "% " + "\n" + "Partidas sem perder: " + streak + "\n" + "\n" + 
        "🔴 Escalação " + nameHome + " :\n" + "\n" + redp1 + " - " + goalsRp1 + " gol(s), " + assistsRp1 + " assist(s)\n"
         + redp2 + " - " + goalsRp2 + " gol(s), " + assistsRp2 + " assist(s)\n" + redp3 + " - " + goalsRp3 + " gol(s), " + assistsRp3 + " assist(s)\n" +  "\n" + 
        "🔵 Escalação " + nameGuest + " :\n" + "\n" + bluep1 + " - " + goalsBp1 + " gol(s), " + assistsBp1 + " assist(s)\n"
         + bluep2 + " - " + goalsBp2 + " gol(s), " + assistsBp2 + " assist(s)\n" + bluep3 + " - " + goalsBp3 + " gol(s), " + assistsBp3 + " assist(s)");
        countWinsTeamR();
        countLossesTeamB();
        setTimeout(function () {
            room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
            room.sendAnnouncement(centerText("Você escolhe, " + teamB[0].name), null, white, "bold");
            room.sendAnnouncement(centerText("Nº, nome, auto (fila) ou rand (aleatório)"), teamB[0].id, white, "normal");
            room.sendAnnouncement(centerText("Obs* digite 'lista' para ver a fila"), teamB[0].id, yellow, "italic");
            setTimeout(function () {
                room.sendAnnouncement(centerText(teamB[0].name + " , você é o capitão da equipe."), teamB[0].id, yellow, "italic");
                room.sendAnnouncement(centerText("Escolha o uniforme digitando o acrônimo do time. Ex.: Digite 'bar' ou 'rea'."), teamB[0].id, yellow, "italic");
                room.sendAnnouncement(centerText(teamR[0].name + " , você é o capitão da equipe."), teamR[0].id, yellow, "italic");
                room.sendAnnouncement(centerText("Escolha o uniforme digitando o acrônimo do time. Ex.: Digite 'bar' ou 'rea'."), teamR[0].id, yellow, "italic");
            }, 4000);
            choose = true;
            setTimeout(function () {
            capchat = true;
                room.sendAnnouncement(centerText("*** 20segundos de inatividade voltará para a fila e o próx. escolhe ***"), null, warn, "italic");
                setTimeout(function () {
                    if (teamB.length == 1) {
                        blueToSpecBtn();
                        setTimeout(function () {
                            setTimeout(function () {
                                room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
                                room.sendAnnouncement(centerText("Você escolhe, " + teamB[0].name), null, white, "bold");
                                room.sendAnnouncement(centerText("Nº, nome, auto (fila) ou rand (aleatório)"), teamB[0].id, white, "normal");
                                room.sendAnnouncement(centerText("Obs* digite 'lista' para ver a fila"), teamB[0].id, yellow, "italic");
                            }, 600);
                        }, 300);
                    }
                }, 21000);
            }, 1000);
        }, 4000);
    }
    else if (winner == Team.BLUE) {
        streak = 1;
        registrarStreak();
        room.sendAnnouncement(centerText("🏆 FIM DE PARTIDA 🏆"), null, yellow, "bold");
        room.sendAnnouncement(centerText(nameHome + " " + scores.red + " - " + scores.blue + " " + nameGuest), null, white, "bold");
        room.sendAnnouncement(centerText((Rposs * 100).toPrecision(3).toString() + "% | Posse de bola | " + (Bposs * 100).toPrecision(3).toString() + "% "), null, white, "bold");
        for (var i = 0; i < 3; i++) {
            room.sendAnnouncement(docketFormat(goalsHome[i], goalsGuest[i]), null, white, "normal");
        }
        sendScoresToDiscord("____________________\n🏆-- FIM DE PARTIDA -- 🏆\n____________________" + "\n" + " " + "\n" + 
        "🔴 " + nameHome + " " + scores.red + "  -  " + scores.blue + " " + nameGuest + " 🔵\n" + 
        (Rposs * 100).toPrecision(3).toString() + "% | Posse de bola | " + 
        (Bposs * 100).toPrecision(3).toString() + "% " + "\n" + "Partidas sem perder: " + streak + "\n" + "\n" + 
        "🔴 Escalação " + nameHome + " :\n" + "\n" + redp1 + " - " + goalsRp1 + " gol(s), " + assistsRp1 + " assist(s)\n"
         + redp2 + " - " + goalsRp2 + " gol(s), " + assistsRp2 + " assist(s)\n" + redp3 + " - " + goalsRp3 + " gol(s), " + assistsRp3 + " assist(s)\n" +  "\n" + 
        "🔵 Escalação " + nameGuest + " :\n" + "\n" + bluep1 + " - " + goalsBp1 + " gol(s), " + assistsBp1 + " assist(s)\n"
         + bluep2 + " - " + goalsBp2 + " gol(s), " + assistsBp2 + " assist(s)\n" + bluep3 + " - " + goalsBp3 + " gol(s), " + assistsBp3 + " assist(s)");
        countWinsTeamB();
        countLossesTeamR();
        setTimeout(function () {
            capchat = true;
            room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
            room.sendAnnouncement(centerText("Você escolhe, " + teamB[0].name), null, white, "bold");
            room.sendAnnouncement(centerText("Nº, nome, auto (fila) ou rand (aleatório)"), teamB[0].id, white, "normal");
            room.sendAnnouncement(centerText("Obs* digite 'lista' para ver a fila"), teamB[0].id, yellow, "italic");
            setTimeout(function () {
                room.sendAnnouncement(centerText(teamB[0].name + " , você é o capitão da equipe."), teamB[0].id, yellow, "italic");
                room.sendAnnouncement(centerText("Escolha o uniforme digitando o acrônimo do time. Ex.: Digite 'bar' ou 'rea'."), teamB[0].id, yellow, "italic");
                room.sendAnnouncement(centerText(teamR[0].name + " , você é o capitão da equipe."), teamR[0].id, yellow, "italic");
                room.sendAnnouncement(centerText("Escolha o uniforme digitando o acrônimo do time. Ex.: Digite 'bar' ou 'rea'."), teamR[0].id, yellow, "italic");
            }, 4000);
            choose = true;
            setTimeout(function () {
                room.sendAnnouncement(centerText("*** 20segundos de inatividade voltará para a fila e o próx. escolhe ***"), null, warn, "italic");
                setTimeout(function () {
                    if (teamB.length == 1) {
                        blueToSpecBtn();
                        setTimeout(function () {
                            setTimeout(function () {
                                room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
                                room.sendAnnouncement(centerText("Você escolhe, " + teamB[0].name), null, white, "bold");
                                room.sendAnnouncement(centerText("Nº, nome, auto (fila) ou rand (aleatório)"), teamB[0].id, white, "normal");
                                room.sendAnnouncement(centerText("Obs* digite 'lista' para ver a fila"), teamB[0].id, yellow, "italic");
                            }, 600);
                        }, 300);
                    }
                }, 21000);
            }, 1000);
        }, 4000);
    }
    else {
        streak = 0;
        room.sendAnnouncement(centerText("💤 Limite de TEMPO! 💤"), null, yellow, "bold");
        room.sendAnnouncement(centerText(nameHome + " " + scores.red + " - " + scores.blue + " " + nameGuest), null, white, "bold");
        room.sendAnnouncement(centerText((Rposs * 100).toPrecision(3).toString() + "% | Posse de bola | " + (Bposs * 100).toPrecision(3).toString() + "% "), null, white, "bold");
        for (var i = 0; i < 3; i++) {
            room.sendAnnouncement(docketFormat(goalsHome[i], goalsGuest[i]), null, white, "normal");
        }
        sendScoresToDiscord("____________________\n💤-- Limite de TEMPO -- 💤\n____________________" + "\n" + " " + "\n" + 
        "🔴 " + nameHome + " " + scores.red + "  -  " + scores.blue + " " + nameGuest + " 🔵\n" + 
        (Rposs * 100).toPrecision(3).toString() + "% | Posse de bola | " + 
        (Bposs * 100).toPrecision(3).toString() + "% " + "\n" + "Partidas sem perder: " + streak + "\n" + "\n" + 
        "🔴 Escalação " + nameHome + " :\n" + "\n" + redp1 + " - " + goalsRp1 + " gol(s), " + assistsRp1 + " assist(s)\n"
         + redp2 + " - " + goalsRp2 + " gol(s), " + assistsRp2 + " assist(s)\n" + redp3 + " - " + goalsRp3 + " gol(s), " + assistsRp3 + " assist(s)\n" +  "\n" + 
        "🔵 Escalação " + nameGuest + " :\n" + "\n" + bluep1 + " - " + goalsBp1 + " gol(s), " + assistsBp1 + " assist(s)\n"
         + bluep2 + " - " + goalsBp2 + " gol(s), " + assistsBp2 + " assist(s)\n" + bluep3 + " - " + goalsBp3 + " gol(s), " + assistsBp3 + " assist(s)")
        setTimeout(function () {
            room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
            room.sendAnnouncement(centerText(teamR[0].name + " e " + teamB[0].name + "escolhem"), null, white, "bold");
            room.sendAnnouncement(centerText("Para escolher digite Nº do player na fila, auto (fila) ou rand (aleatório)"), teamR[0].id, white, "italic");
            room.sendAnnouncement(centerText("Obs* digite 'lista' para ver a fila"), teamR[0].id, yellow, "italic");
            room.sendAnnouncement(centerText(nameHome + " escolhe primeiro!"), null, warn, "bold");
            setTimeout(function () {
                room.sendAnnouncement(centerText(teamB[0].name + " , você é o capitão da equipe."), teamB[0].id, yellow, "italic");
                room.sendAnnouncement(centerText("Escolha o uniforme digitando o acrônimo do time. Ex.: Digite 'bar' ou 'rea'."), teamB[0].id, yellow, "italic");
                room.sendAnnouncement(centerText(teamR[0].name + " , você é o capitão da equipe."), teamR[0].id, yellow, "italic");
                room.sendAnnouncement(centerText("Escolha o uniforme digitando o acrônimo do time. Ex.: Digite 'bar' ou 'rea'."), teamR[0].id, yellow, "italic");
            }, 4000);
            choose = true;
            redFirst = true;
            setTimeout(function () {
                room.sendAnnouncement(centerText("*** 20segundos e a vez de escolha será de " + teamB[0].name + " ***"), null, warn, "italic");
            }, 1000);
        }, 4000);
        setTimeout(function () {
            redFirst = false;
            room.sendAnnouncement(centerText("*** " + teamB[0].name + " está liberado para escolher ***"), null, yellow, "italic");
            room.sendAnnouncement(centerText("Obs* digite 'lista' para ver a fila"), teamB[0].id, yellow, "italic");
        }, 20000);
    }
};

function getActivity(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT] : null;
};

function setActivity(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.ACT] = value);
};

function handleInactivity() {
    if ((teamR.length + teamB.length) > 1) {
        for (var i = 0; i < teamR.length; i++) {
            setActivity(teamR[i], getActivity(teamR[i]) + 1);
        }
        for (var i = 0; i < teamB.length; i++) {
            setActivity(teamB[i], getActivity(teamB[i]) + 1);
        }
    }
    for (var i = 0; i < extendedP.length; i++) {
        if (extendedP[i][eP.ACT] == 20 * 60 * (2 / 3 * afkLimit)) {
            room.sendAnnouncement(centerText("⛔ ¡@" + room.getPlayer(extendedP[i][eP.ID]).name + ", se mova ou fale no Chat em " + Math.floor(afkLimit / 3) + " segundos ou irá para a fila!", extendedP[i][eP.ID]), null, green, "bold"); 
        }
        if (extendedP[i][eP.ACT] >= 20 * 60 * afkLimit) {
            extendedP[i][eP.ACT] = 0;
            if (room.getScores().time <= afkLimit - 0.5) {
                setTimeout(() => {room.stopGame();}, 10);
            }
            room.setPlayerTeam(extendedP[i][eP.ID], Team.SPECTATORS);
        }
    }
};

function getAFK(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK] : null;
};

function setAFK(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.AFK] = value);
};

function getGK(player) {
return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.GK] : null;
};

function setGK(player, value) {
extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.GK] = value);
};

function getMute(player) {
return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.MUTE] : null;
};

function setMute(player, value) {
extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.MUTE] = value);
};

/* PLAYER FUNCTIONS */

function updateTeams() {
    players = room.getPlayerList().filter((player) => player.id != 0);
    teamR = players.filter(p => p.team === Team.RED);
    teamB = players.filter(p => p.team === Team.BLUE);
    teamS = players.filter(p => p.team === Team.SPECTATORS);
    if (choose === true) {
        checkAndStartGame();
        alwaysOnTeam();
    }
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

function isBlacklisted(player){
    return blacklist.filter(b => b.Auth == player.auth || b.Conn == player.conn).length > 0;
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

function updateStats() { // Função atualizar STATUS a cada fim de jogo.
    if (players.length >= 2 * maxTeamSize && (game.scores.time >= (5 / 6) * game.scores.timeLimit || game.scores.red == game.scores.
    scoreLimit || game.scores.blue == game.scores.scoreLimit) && allReds.length >= maxTeamSize && allBlues.length >= maxTeamSize) {
    var stats;
    for (var i = 0; i < allReds.length; i++) {
    localStorage.getItem(getAuth(allReds[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allReds[i]))) : stats = [0,
    0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allReds[i].name]; stats[Ss.GA]++;
    lastWinner == Team.RED ? stats[Ss.WI]++ : lastWinner == Team.BLUE ? stats[Ss.LS]++ : stats[Ss.DR]++;
    stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
    localStorage.setItem(getAuth(allReds[i]), JSON.stringify(stats));
    }
    for (var i = 0; i < allBlues.length; i++) {
    localStorage.getItem(getAuth(allBlues[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allBlues[i]))) : stats =
    [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allBlues[i].name]; stats[Ss.GA]++;
    lastWinner == Team.BLUE ? stats[Ss.WI]++ : lastWinner == Team.RED ? stats[Ss.LS]++ : stats[Ss.DR]++;
    stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
    localStorage.setItem(getAuth(allBlues[i]), JSON.stringify(stats));
    }
    for (var i = 0; i < game.goals.length; i++) {
    if (game.goals[i].striker != null) {
    if ((allBlues.concat(allReds)).findIndex((player) => player.id == game.goals[i].striker.id) != -1) {
    stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].striker)));
    stats[Ss.GL]++;
    localStorage.setItem(getAuth(game.goals[i].striker), JSON.stringify(stats));
    }
    }
    if (game.goals[i].assist != null) {
    if ((allBlues.concat(allReds)).findIndex((player) => player.name == game.goals[i].assist.name) != -1) {
    stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].assist)));
    stats[Ss.AS]++;
    localStorage.setItem(getAuth(game.goals[i].assist), JSON.stringify(stats));
    }
    }
    }
    if (allReds.findIndex((player) => player.id == GKList[0].id) != -1) {
    stats = JSON.parse(localStorage.getItem(getAuth(GKList[0])));
    stats[Ss.GK]++;
    game.scores.blue == 0 ? stats[Ss.CS]++ : null;
    stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
    localStorage.setItem(getAuth(GKList[0]), JSON.stringify(stats));
    }
    if (allBlues.findIndex((player) => player.id == GKList[1].id) != -1) {
    stats = JSON.parse(localStorage.getItem(getAuth(GKList[1])));
    stats[Ss.GK]++;
    game.scores.red == 0 ? stats[Ss.CS]++ : null;
    stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
    localStorage.setItem(getAuth(GKList[1]), JSON.stringify(stats));
    }
    }
};
  
function findGK() { // Função que procura o GK da partida.
    var tab = [[-1, ""], [-1, ""]];
    for (var i = 0; i < extendedP.length; i++) {
        if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.RED) {
            if (tab[0][0] < extendedP[i][eP.GK]) {
                tab[0][0] = extendedP[i][eP.GK];
                tab[0][1] = room.getPlayer(extendedP[i][eP.ID]);
            }
        }
        else if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.BLUE) {
            if (tab[1][0] < extendedP[i][eP.GK]) {
                tab[1][0] = extendedP[i][eP.GK];
                tab[1][1] = room.getPlayer(extendedP[i][eP.ID]);
            }
        }
    }
    GKList = [tab[0][1], tab[1][1]];
};

/* EVENTS */

/* PLAYER MOVEMENT */

room.onPlayerJoin = function (player) {
    nameForbid(player);
    var messages = [
        "👋 Salve, " + player.name + "!",
        "👋 Eae, " + player.name + "!",
    ];
    if(badass.includes(player.conn)) {
        room.setPlayerAdmin(player.id, true);
        badassID = player.id;
        room.sendAnnouncement(centerText("O DONO da sala entrou!"), null, green, "bold"); 
    }
    if(soberbo.includes(player.conn)) {
        room.setPlayerAdmin(player.id, true);
        soberboID = player.id;
        room.sendAnnouncement(centerText("Saúdem o Soberano " + player.name + "!"), null, green, "bold"); 
    }
    if(supervisors.includes(player.conn)) {
        supervisorsID.push(player.id);
        room.sendAnnouncement(centerText("O Supervisor " + player.name + " entrou na sala!"), null, green, "bold");
        setTimeout(function () {
            room.sendAnnouncement(centerText("Se Malco e/ou Soberbo estiverem na sala é PROIBIDO pegar adm"), player.id, warn, "normal");
        }, 1000);
    }
    if(blacklistconn.includes(player.conn)) {
        room.sendAnnouncement(centerText("Ae, rapa... Se despeçam do " + player.name + ". Ele ta de saída!"), null, white, "bold");
        room.sendAnnouncement(centerText("você está na blacklist e será banido!"), player.id, warn, "italic");
        blacklistconnID.push(player.id);
        banBlackListed(player);
    }
    if(cartaoamarelo.includes(player.conn)) {
        let forkedPlayer = player.name;
        pendurados.push(" 🟨 " + forkedPlayer);
        room.sendAnnouncement(centerText("🟨 O player " + forkedPlayer + " está pendurado! 🟨"), null, warn, "normal");
        setTimeout(function () {
            room.sendAnnouncement(centerText("você levou cartão amarelo 🟨 na sua ultima estadia na sala!"), player.id, warn, "italic");
            room.sendAnnouncement(centerText("SUJEITO À BAN temporário"), player.id, warn, "normal");
        }, 1000);
    }
    if(lodiazCONN.includes(player.conn)) {
        lodiaz = player.id;
    }
    if(lanocheCONN.includes(player.conn)) {
        lanoche = player.id;
    }
    var conn = player.conn
    var ipv4 = conn.match(/.{1,2}/g).map(function(v){
    return String.fromCharCode(parseInt(v, 16));
    }).join('');
    sendAnnouncementToDiscord("```"+"📝Informações do jogador, conn, auth, IP e data ⏰" + "\n" + "🛸 Nick: " + player.name +"\n" + 
    "🌐 Conn: " + player.conn + "\n" + "🔥 Auth: "+ player.auth + "\n" + "🌏 Ipv4: " + (ipv4) + "\n" + "📅 Data: " + `${getDateInfo()}` +"```");
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    sendCountsToDiscord(".  \n📄   Nome: " + player.name + "\n🎮   Jogos: " + getStoredGames(player) + "\n⚽️   Gols: " + getStoredGoals(player) + "\n👟   Assistências: " + getStoredAssists(player) + "\n🏆   Hat-tricks: " + getHatTrick(player));
    updateTeams();
    updateAdmins();
    setTimeout(function () {
        alwaysOnTeam();
        IIIx();
        IIIx();
    }, 1000);
    room.sendAnnouncement(centerText(announcement), null, white, "bold");
    playerList.push({"object": player, "nome": player.name, "id": player.id});
    extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
    lastPlayerJoinedID = player.id;
    lastPlayerJoinedNAME = player.name;
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
    checkTeamSizeAndChangeMap();
    checkTeamSizeLimit();
};

room.onPlayerLeave = function (player) {
    updateList(Math.max(teamR.findIndex((p) => p.id == player.id), teamB.findIndex((p) => p.id == player.id), teamS.findIndex((p) => p.id == player.id)), player.team);
    updateTeams();
    updateAdmins();
    checkAndPauseGame();
    if (banidao == false) {
        room.sendAnnouncement(centerText(player.name + " vazou!"), null, white, "bold");
    }
};

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
    updateTeams();
    checkAndPauseGame();
    let jowbownathanCONN = kickedPlayer.conn;
    let jowbownathanAUTH = kickedPlayer.auth;
    if (ban == true) {
        banList.push([kickedPlayer.name, kickedPlayer.id]);
        room.sendAnnouncement(centerText(kickedPlayer.name + " levou ban!"), null, white, "bold");
        room.sendAnnouncement(centerText("Banido por não seguir as REGRAS!"), null, warn, "italic");
        setTimeout(function () {
            banidao = false;
        }, 20);
        console.log("ban list : " + banList);
        sendAdminCommandsToDiscord("🔴 Jogador Banido:" + "\n"+
        "🛸 Nick: " + kickedPlayer.name + "\n" +
        "🌐 Conn: " + jowbownathanCONN + "\n" +
        "🔥 Auth:  " + jowbownathanAUTH + "\n" +
        "📅 Data: " + `${getDateInfo()}`);
    }
};

/* PLAYER ACTIVITY */

room.onPlayerChat = function (player, message) {
    chatlogsenddiscord(`${dataehora()}` + " - " + player.name + ': ' + message); 
    var mensagem = message;
    message = message.split(" ");
    if (["!help"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("Comandos:"), player.id, yellow, "bold");
        room.sendAnnouncement(centerText("!me, !goat, !streak, !help, !tag, !uniforme, !gklist, !regras, !discord,\n!list, !vs, !verdade, !bb, !bye, !flw"), null, yellow, "normal");
        room.sendAnnouncement(centerText("Comemorações:"), player.id, yellow, "bold");
        room.sendAnnouncement(centerText("!gol, !ain, !chupa, !lenda, !smith, !gk, !brabo"), player.id, yellow, "normal");
        room.sendAnnouncement(centerText("Uniformes:"), player.id, yellow, "bold");
        room.sendAnnouncement(centerText("!seleçoes, !clubes, !euro, !sula"), player.id, yellow, "normal");
        if (player.admin) {
            room.sendAnnouncement(centerText("Admin Commands:"), player.id, yellow, "bold");
            room.sendAnnouncement(centerText("rr, go/play/bora, !who <r/b/rb>, !ban <nome>, !clearbans,\n!comofaz, !clean, !limpar, !size <r1/b1> <big/normal/small>,\n!mute <red/blue/spec> <30/1>, !list <red/blue/spec>"), player.id, yellow, "normal");
            room.sendAnnouncement(centerText("Mapas:"), player.id, yellow, "bold");
            room.sendAnnouncement(centerText("!2x, !3x <blue>, !5x"), player.id, yellow, "normal");
            room.sendAnnouncement(centerText("Choose Mode:"), player.id, yellow, "bold");
            room.sendAnnouncement(centerText("!choose <on/off>, !redfirst <on/off>"), player.id, yellow, "normal");
            room.sendAnnouncement(centerText("Troca de uniforme:"), player.id, yellow, "bold");
            room.sendAnnouncement(centerText("!uni (acronimo de !uniforme), !rand <red/blue> (clubes), !selecrand <red/blue>"), player.id, yellow, "normal");
            room.sendAnnouncement(centerText("Zueras:"), player.id, yellow, "bold");
            room.sendAnnouncement(centerText("Times: vip (Soberanos), Inv (Invictus), girl"), player.id, yellow, "normal");
        }
    }
    if (["!clearbans", "!limparbans"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            room.clearBans();
            room.sendAnnouncement(centerText(player.name + " limpou a lista de banimentos."), null, warn, "normal");
            console.log("ban list : " + banList);
        }
    }
    if (["!ban", "ban"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message[1] != null) {
                getPlayerNameByID(message[1])
                room.sendAnnouncement(centerText("Pronto!\nUsuário" + playertoban.name + "banido"), player.id, warn, "italic");
                room.kickPlayer(playertoban.id,"Você foi banido, saiba mais em https://discord.gg/AR7ypuzJG8 ",true);
                banList.push(playertoban.name, playertoban.id);
                sendAdminCommandsToDiscord("🔴 Jogador Banido:" + "\n"+
                "🛸 Nick: " + playertoban.name + "\n" +
                "🌐 Conn: " + playertoban.conn + "\n" +
                "🔥 Auth:  " + playertoban.auth + "\n" +
                "📅 Data: " + `${getDateInfo()}`);
                console.log("ban list : " + banList);
            }
            if (message[1] == "last") {
                room.sendAnnouncement(centerText("Pronto!\nUsuário" + lastPlayerJoinedNAME + "banido"), player.id, warn, "italic");
                room.kickPlayer(lastPlayerJoinedID,"Você foi banido, saiba mais em https://discord.gg/AR7ypuzJG8", true);
                banList.push(lastPlayerJoinedNAME, lastPlayerJoinedID);
                sendAdminCommandsToDiscord("🔴 Jogador Banido:" + "\n"+
                "🛸 Nick: " + bannedName + "\n" +
                "🌐 Conn: " + bannedId.conn + "\n" +
                "🔥 Auth:  " + bannedId.auth + "\n" +
                "📅 Data: " + `${getDateInfo()}`);
                console.log("ban list : " + banList);
            }
        }
        return false;
    }
    if (["!me", "!eu", "stats"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement("[📄] " + player.name + " stats:  🎮 Jogos: " + getStoredGames(player) + " ⚽️ Gols: " + getStoredGoals(player) + ", 👟 Assistências: " + getStoredAssists(player) + ", 🏆 Hat-tricks: " + getHatTrick(player) + ", ✅ Vitórias: " + getStoredWins(player) + ", ❌ Derrotas: " + getStoredLosses(player) + ", Taxa de vitórias: " + calculateWinPercentage(player) + "%", null, white, "bold"); 
        /*
        var stats;
        localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"]; 
        room.sendAnnouncement("[📄] Seus stats: 🎮 Jogos: " + stats[Ss.GA] + ", ✅ Vitórias: " + stats[Ss.WI] + ", ❌ Derrotas: " + stats[Ss.LS] + ", 🏆 Taxa de vitórias: " + stats[Ss.WR] + "%, ⚽️ Gols: " + stats[Ss.GL] + ", 👟 Assistências: " + stats[Ss.AS] + ", 🧤 GK: " + stats[Ss.GK] + ", 🤚 CS: " + stats[Ss.CS] + ", 🤚 CS%: " + stats[Ss.CP] + "%", player.id, white, "normal"); 
        */
        return false;
    }
    if (["!goat", "goat", "!best"].includes(message[0].toLowerCase())) {
        let maisgols = getBiggestGoaler(players);
        let maisassists = getBiggestAssistant(players);
        let maishats =findPlayerWithMostHatTricks(players);
        let maiswins = getPlayerWithMostWins(players);
        room.sendAnnouncement(centerText("🐐 THE GOAT 🐐"), null, white, "bold");
        room.sendAnnouncement(centerText("top players ranking"), null, yellow, "italic");
        room.sendAnnouncement(centerText("MAIS GOLS ⚽ --> " + maisgols + " ("+ aaa(maisgols) + ")"), null, white, "bold");
        room.sendAnnouncement(centerText("MAIS ASSISTS 👟 --> " + maisassists + " ("+ bbb(maisassists) + ")"), null, white, "bold");
        room.sendAnnouncement(centerText("MAIS HAT-TRICKS 🏆 --> " + maishats + " ("+ ccc(maishats) + ")"), null, white, "bold");
        room.sendAnnouncement(centerText("MAIS VITÓRIAS ✅ --> " + maiswins + " ("+ ddd(maiswins) + ")"), null, white, "bold");
        return false;
    }
    if (["!streak", "streak"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("🏆⚽ -- MELHOR TRIO DA FUTZ -- ⚽🏆"), null, yellow, "bold", 0);
        room.sendAnnouncement(centerText(obterRecordeStreak().jogadores), null, white, "bold", 0);
        room.sendAnnouncement(centerText("Com o record de " + obterRecordeStreak().streakers + " vitórias consecutivas!"), null, white, "bold");
        return false;
    }
    if (["!record", "record"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("Record Atual: " + obterRecordeStreak().streakers + " vitórias consecutivas!"), null, white, "bold");
        room.sendAnnouncement(centerText("Faltam " + (obterRecordeStreak().streakers - streak) + " vitórias para " + nameHome + " alcançar"), null, white, "bold", 0);
        return false;
    }
    if (["!stats"].includes(message[0].toLowerCase())) { // mostra suas atuais estatisticas, mostra para todos da sala.
        room.sendAnnouncement(centerText("Esta função ainda não está disponível. Lamento"), player.id, warn, "italic");
        /*
        var stats;
        localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"]; 
        room.sendAnnouncement("[📄] Stats de " + player.name + ": 🎮 Partidas Jogadas: " + stats[Ss.GA] + ", ✅ Vitórias: " + stats[Ss.WI] + ", ❌ Derrotas: " + stats[Ss.LS] + ", Taxa: " + stats[Ss.WR] + "%, ⚽️ Gols: " + stats[Ss.GL] + ", 👟 Asistências: " +stats[Ss.AS] + ", 🧤 GK: " + stats[Ss.GK] + ", 🤚 Invictas: " + stats[Ss.CS] + ", 🤚 CS%: " + stats[Ss.CP] + "%", null, white, "normal"); 
        */
        return false;
    }
    if (["!choose", "choose", "chose"].includes(message[0].toLowerCase())) {
        if (message[1] == "on") {
            room.sendAnnouncement(centerText("Choose Mode Ativado"), null, green, "bold");
            choose = true;
        }
        else if (message[1] == "off") {
            room.sendAnnouncement(centerText("Choose Mode Desativado"), null, green, "bold");
            choose = false;
        }
    }
    if (["!redfirst"].includes(message[0].toLowerCase())) {
        if (message[1] == "on") {
            room.sendAnnouncement(centerText("RedFirst Ativado"), null, green, "bold");
            redFirst = true;
        }
        else if (message[1] == "off") {
            room.sendAnnouncement(centerText("RedFirst Desativado"), null, green, "bold");
            redFirst = false;
        }
    }
    if (["!who"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message[1] == "r") {
                room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
                room.sendAnnouncement(centerText("Você escolhe, " + teamR[0].name), null, white, "bold");
                room.sendAnnouncement(centerText("Para escolher digite Nº do player na fila, auto (fila) ou rand (aleatório)"), null, white, "italic");
                room.sendAnnouncement(centerText("Obs* digite 'lista' para ver a fila"), null, yellow, "italic");
                setTimeout(function () {
                    room.sendAnnouncement(centerText("*** 20segundos de inatividade voltará para a fila e o próx. escolhe ***"), null, warn, "italic");
                }, 1000);
            }
            else if (message[1] == "b") {
                room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
                room.sendAnnouncement(centerText("Você escolhe, " + teamB[0].name), null, white, "bold");
                room.sendAnnouncement(centerText("Para escolher digite Nº do player na fila, auto (fila) ou rand (aleatório)"), null, white, "italic");
                room.sendAnnouncement(centerText("Obs* digite 'lista' para ver a fila"), null, yellow, "italic");
                setTimeout(function () {
                    room.sendAnnouncement(centerText("*** 20segundos de inatividade voltará para a fila e o próx. escolhe ***"), null, warn, "italic");
                }, 1000);
            }
            else if (message[1] == "rb") {
                room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
                room.sendAnnouncement(centerText(teamR[0].name + " e " + teamB[0].name + "escolhem"), null, white, "bold");
                room.sendAnnouncement(centerText("Para escolher digite Nº do player na fila, auto (fila) ou rand (aleatório)"), null, white, "italic");
                room.sendAnnouncement(centerText("Obs* digite 'lista' para ver a fila"), null, yellow, "italic");
                room.sendAnnouncement(centerText(nameHome + " escolhe primeiro!"), null, warn, "bold");
                choose = true;
                redFirst = true;
                setTimeout(function () {
                    room.sendAnnouncement(centerText("*** 20segundos e a vez de escolha será de " + teamB[0].name + " ***"), null, warn, "italic");
                }, 1000);
                setTimeout(function () {
                    redFirst = false;
                    room.sendAnnouncement(centerText("*** " + teamB[0].name + " está liberado para escolher ***"), null, yellow, "italic");
                }, 20000);
            }
            else if (message[1] == null) {
                room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
                room.sendAnnouncement(centerText("Escolha seu time"), null, white, "bold");
                room.sendAnnouncement(centerText("Nº, nome, auto (fila) ou rand (aleatório)"), null, white, "normal");
                room.sendAnnouncement(centerText("Obs* digite 'lista' para ver a fila"), null, yellow, "italic");
                setTimeout(function () {
                    room.sendAnnouncement(centerText("*** 20segundos de inatividade voltará para a fila e o próx. escolhe ***"), null, warn, "italic");
                }, 1000);
            }
        }
    }
    if (["auto", "fila"].includes(message[0].toLowerCase())) {
        if (choose === true && teamS.length > 1) {    
            if (player.id === teamR[0].id) {
                if (teamR.length == 1) {
                    room.sendAnnouncement(centerText(teamR[0].name + " escolheu AUTO"), null, white, "bold");
                    room.sendAnnouncement(centerText("Os escalados foram " + teamS[0].name + " e " + teamS[1].name), null, white, "normal");
                    room.setPlayerTeam(teamS[0].id, Team.RED);
                    room.setPlayerTeam(teamS[1].id, Team.RED);
                }
                else if (teamR.length == 2) {
                    room.sendAnnouncement(centerText(teamR[0].name + " escolheu AUTO"), null, white, "bold");
                    room.sendAnnouncement(centerText("O escalado é " + teamS[0].name), null, white, "normal");
                    room.setPlayerTeam(teamS[0].id, Team.RED);
                }
            }
            if (player.id == teamB[0].id && redFirst === false) {
                if (teamB.length == 1) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escolheu AUTO"), null, white, "bold");
                    room.sendAnnouncement(centerText("Os escalados foram " + teamS[0].name + " e " + teamS[1].name), null, white, "normal");
                    room.setPlayerTeam(teamS[0].id, Team.BLUE);
                    room.setPlayerTeam(teamS[1].id, Team.BLUE);
                }
                else if (teamB.length == 2) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escolheu AUTO"), null, white, "bold");
                    room.sendAnnouncement(centerText("O escalado é " + teamS[0].name), null, white, "normal");
                    room.setPlayerTeam(teamS[0].id, Team.BLUE);
                }
            }
            else if (player.id === teamB[0].id && redFirst === true) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else {return false;}
        }
        else if (player.id === (teamR[0].id || teamB[0].id) && choose === false) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
        else {return false;}
        return false;
    }
    if (["rand", "random"].includes(message[0].toLowerCase())) {
        var randred1 = Math.floor(Math.random() * teamS.length);
        var randred2 = Math.floor(Math.random() * teamS.length);
        var randblue1 = Math.floor(Math.random() * teamS.length);
        var randblue2 = Math.floor(Math.random() * teamS.length);
        if (choose == true && teamS.length > 2) {    
            if (player.id == teamR[0].id) {
                if (teamR.length == 1) {
                    room.sendAnnouncement(centerText(teamR[0].name + " escolheu RAND"), null, white, "bold");
                    room.sendAnnouncement(centerText("Os escalados foram " + teamS[randred1].name + " e " + teamS[randred2].name), null, white, "normal");
                    room.setPlayerTeam(teamS[randred1].id, Team.RED);
                    room.setPlayerTeam(teamS[randred2].id, Team.RED);
                }
                else if (teamR.length == 2) {
                    room.sendAnnouncement(centerText(teamR[0].name + " escolheu RAND"), null, white, "bold");
                    room.sendAnnouncement(centerText("O escalado é " + teamS[0].name), null, white, "normal");
                    room.setPlayerTeam(teamS[randred1].id, Team.RED);
                }
            }
            if (player.id == teamB[0].id && redFirst == false) {
                if (teamB.length == 1) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escolheu RAND"), null, white, "bold");
                    room.sendAnnouncement(centerText("Os escalados foram " + teamS[randblue1].name + " e " + teamS[randblue2].name), null, white, "normal");
                    room.setPlayerTeam(teamS[randblue1].id, Team.BLUE);
                    room.setPlayerTeam(teamS[randblue2].id, Team.BLUE);
                }
                else if (teamB.length == 2) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escolheu RAND"), null, white, "bold");
                    room.sendAnnouncement(centerText("O escalado é " + teamS[randblue1].name), null, white, "normal");
                    room.setPlayerTeam(teamS[randblue1].id, Team.BLUE);
                }
            }
            if (player.id == (teamR[0].id || teamB[0].id) && choose === false) {
                room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
            }
            if (player.id == teamB[0].id && redFirst == true) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else {return false;}
        }
        else if (player.id == (teamR[0].id || teamB[0].id) && teamS.length < 2) {
            room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
        }
        else {return false;}
        return false;
    }
    if (["1"].includes(message[0].toLowerCase()) && teamS.length >= 1) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[0].name), null, white, "bold");
                room.setPlayerTeam(teamS[0].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[0].name), null, white, "bold");
                    room.setPlayerTeam(teamS[0].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[0].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
        else if (choose == false) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    }
    if (["2"].includes(message[0].toLowerCase()) && teamS.length >= 2) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[1].name), null, white, "bold");
                room.setPlayerTeam(teamS[1].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[1].name), null, white, "bold");
                    room.setPlayerTeam(teamS[1].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[1].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else if (choose == false) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    }
    if (["3"].includes(message[0].toLowerCase()) && teamS.length >= 3) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[2].name), null, white, "bold");
                room.setPlayerTeam(teamS[2].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[2].name), null, white, "bold");
                    room.setPlayerTeam(teamS[2].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[2].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else if (choose == false) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    }
    if (["4"].includes(message[0].toLowerCase()) && teamS.length >= 4) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[3].name), null, white, "bold");
                room.setPlayerTeam(teamS[3].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[3].name), null, white, "bold");
                    room.setPlayerTeam(teamS[3].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[3].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else if (choose == false) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    }
    if (["5"].includes(message[0].toLowerCase()) && teamS.length >= 5) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[4].name), null, white, "bold");
                room.setPlayerTeam(teamS[4].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[4].name), null, white, "bold");
                    room.setPlayerTeam(teamS[4].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[4].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else if (choose == false) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    }
    if (["6"].includes(message[0].toLowerCase()) && teamS.length >= 6) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[5].name), null, white, "bold");
                room.setPlayerTeam(teamS[5].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[5].name), null, white, "bold");
                    room.setPlayerTeam(teamS[5].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[5].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else if (choose == false) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    }
    if (["7"].includes(message[0].toLowerCase()) && teamS.length >= 7) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[6].name), null, white, "bold");
                room.setPlayerTeam(teamS[6].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[6].name), null, white, "bold");
                    room.setPlayerTeam(teamS[6].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[6].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else if (choose == false) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    }
    if (["8"].includes(message[0].toLowerCase()) && teamS.length >= 8) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[7].name), null, white, "bold");
                room.setPlayerTeam(teamS[7].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[7].name), null, white, "bold");
                    room.setPlayerTeam(teamS[7].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[7].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
        else if (choose == false) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    }
    if (["9"].includes(message[0].toLowerCase()) && teamS.length >= 9) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[8].name), null, white, "bold");
                room.setPlayerTeam(teamS[8].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[8].name), null, white, "bold");
                    room.setPlayerTeam(teamS[8].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[8].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else if (choose == false) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    }
    if (["10"].includes(message[0].toLowerCase()) && teamS.length >= 10) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[9].name), null, white, "bold");
                room.setPlayerTeam(teamS[9].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[9].name), null, white, "bold");
                    room.setPlayerTeam(teamS[9].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[9].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else if (choose == false) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    }
    if (["11"].includes(message[0].toLowerCase()) && teamS.length >= 11) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[10].name), null, white, "bold");
                room.setPlayerTeam(teamS[10].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[10].name), null, white, "bold");
                    room.setPlayerTeam(teamS[10].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[10].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else if (choose == false) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    }
    if (["12"].includes(message[0].toLowerCase()) && teamS.length >= 12) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[11].name), null, white, "bold");
                room.setPlayerTeam(teamS[11].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[11].name), null, white, "bold");
                    room.setPlayerTeam(teamS[11].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[11].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else if (choose == false) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    }
    if (["13"].includes(message[0].toLowerCase()) && teamS.length >= 13) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[12].name), null, white, "bold");
                room.setPlayerTeam(teamS[12].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[12].name), null, white, "bold");
                    room.setPlayerTeam(teamS[12].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[12].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else if (choose == false) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    }
    if (["14"].includes(message[0].toLowerCase()) && teamS.length >= 14) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[13].name), null, white, "bold");
                room.setPlayerTeam(teamS[13].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[13].name), null, white, "bold");
                    room.setPlayerTeam(teamS[13].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[13].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else if (choose == false) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    }
    if (["15"].includes(message[0].toLowerCase()) && teamS.length >= 15) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[14].name), null, white, "bold");
                room.setPlayerTeam(teamS[14].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[14].name), null, white, "bold");
                    room.setPlayerTeam(teamS[14].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[14].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else if (choose == false) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    }
    if (["16"].includes(message[0].toLowerCase()) && teamS.length >= 16) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[15].name), null, white, "bold");
                room.setPlayerTeam(teamS[15].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[15].name), null, white, "bold");
                    room.setPlayerTeam(teamS[15].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[1].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else if (choose == false) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    }
    if (["17"].includes(message[0].toLowerCase()) && teamS.length >= 17) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[16].name), null, white, "bold");
                room.setPlayerTeam(teamS[16].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[16].name), null, white, "bold");
                    room.setPlayerTeam(teamS[16].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[16].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else if (choose == false) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    }
    if (["18"].includes(message[0].toLowerCase()) && teamS.length >= 18) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[17].name), null, white, "bold");
                room.setPlayerTeam(teamS[17].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[17].name), null, white, "bold");
                    room.setPlayerTeam(teamS[17].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[17].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else if (choose == false) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    }
    if (["19"].includes(message[0].toLowerCase()) && teamS.length >= 19) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[18].name), null, white, "bold");
                room.setPlayerTeam(teamS[18].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[18].name), null, white, "bold");
                    room.setPlayerTeam(teamS[18].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[18].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else if (choose == false) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    }
    if (["20"].includes(message[0].toLowerCase()) && teamS.length >= 20) {
        if (choose == true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[19].name), null, white, "bold");
                room.setPlayerTeam(teamS[19].id, Team.RED);
            }
            else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[19].name), null, white, "bold");
                    room.setPlayerTeam(teamS[19].id, Team.BLUE);
                }
            }
            else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            }
            else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[19].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else if (choose == false) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    }
    if (["2x"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message[1] == null) {
                room.setCustomStadium(smallStadium);
            }
            else {return false}
        }
        return false;
    }
    if (["3x"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message[1] == null) {
            room.setCustomStadium(mediumStadium);
            }
            else if (message[1] == "blue") {
                room.setCustomStadium(mediumBlue);
            }
        }
        return false;
    }
    if (["5x"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message[1] == null) {
            room.setCustomStadium(bigStadium);
            }
        }
        return false;
    }
    if (["!comofaz"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("Trocar Uniforme:"), player.id, yellow, "bold");
        room.sendAnnouncement(centerText("Com !uniforme escolha qual uniforme deseja."), player.id, white, "normal");
        room.sendAnnouncement(centerText("Decore o acronimo dele que estará entre <>. Exemplo Barcelona <bar>"), player.id, white, "normal");
        room.sendAnnouncement(centerText("Veja qual time deseja atribuir o uniforme. RED ou BLUE"), player.id, white, "normal");
        room.sendAnnouncement(centerText("sendo assim, o comando será:"), player.id, white, "normal");
        room.sendAnnouncement(centerText("!uni red bar"), player.id, white, "bold");
        room.sendAnnouncement(centerText("Uniformes Aleatórios:"), player.id, yellow, "bold");
        room.sendAnnouncement(centerText("Com !rand setamos uniformes aleatórios para todos os times."), player.id, white, "normal");
        room.sendAnnouncement(centerText("Para alterar apenas o uniforme de RED:"), player.id, white, "normal");
        room.sendAnnouncement(centerText("!rand red"), player.id, white, "bold");
        room.sendAnnouncement(centerText("Para alterar apenas o uniforme de RED:"), player.id, white, "normal");
        room.sendAnnouncement(centerText("!rand blue"), player.id, white, "bold");
    }
    if (["!tag"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("Player Tags:"), null, yellow, "bold");
        room.sendAnnouncement(centerText("!malco, !soberbo, !soberano, !messi, !noob,\n!pepe, !abob, !onlyway, !chiq, !diaz, !two"), null, yellow, "normal");
        room.sendAnnouncement(centerText("Team Tags:"), null, yellow, "bold");
        room.sendAnnouncement(centerText("!bar, !rea"), null, yellow, "normal");
        setTimeout(function () {
            room.sendAnnouncement(centerText("called by " + player.name), null, chatInvisble, "italic");
        }, 100);
    }
    if (["!afk"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("comando !AFK indisponível"), player.id, warn, "italic");
    }
    if (["!uniforme"].includes(message[0].toLowerCase())) {
        if (message[1] == null) {
            room.sendAnnouncement("_______________________________________", null, yellow, "bold");
            room.sendAnnouncement("Seleções:", null, yellow, "bold");
            room.sendAnnouncement("Brasil <bra> Alemanha <ale> Argentina <arg> Espanha <esp> Portugal <por>", null, white, "normal");
            room.sendAnnouncement("Itália <ita> Uruguai <uru> França <fra> Inglaterra <ing> Bélgica <bel>, Holanda <hol>", null, white, "normal");
            room.sendAnnouncement("_______________________________________", null, yellow, "bold");
            room.sendAnnouncement("Times Sulamericanos:", null, yellow, "bold");
            room.sendAnnouncement("Corinthians <cor>, São Paulo <spfc>, Palmeiras <pal>, Santos <sfc>, Flamengo <fla>, Grêmio <gre>", null, white, "normal");
            room.sendAnnouncement("Vasco <vas>, Fluminense <flu>, Internacional <int>, Cruzeiro <cru>, Boca Juniors <boc>, River Plate <riv>", null, white, "normal");
            room.sendAnnouncement("_______________________________________", null, yellow, "bold");
            room.sendAnnouncement("Times Europeus:", null, yellow, "bold");
            room.sendAnnouncement("Manchester City <mci>, Borussia Dortmund <bor>, Paris Saint-Germain <psg>, Real Madrid <rea>, Inter de Milão <intM>", null, white, "normal");
            room.sendAnnouncement("Barcelona <bar>, Atlético de Madrid <atm>, Liverpool <liv>, Chelsea <che>, Juventus <juv>, Bayern de Munique <bay>, Milan <mil>", null, white, "normal");
            room.sendAnnouncement("_______________________________________", null, yellow, "bold");
        }
    }
    if (["!uni", "uni"].includes(message[0].toLowerCase())) {
        if (message[1] == "red") {
            if (message[2] == "bar") {
                nameHome = bar.name;
                acronymHome = bar;
            }
            else if (message[2] == "rea") {
                nameHome = rea.name;
                acronymHome = rea;
            }
            else if (message[2] == "mci") {
                nameHome = mci.name;
                acronymHome = mci;
            }
            else if (message[2] == "atm") {
                nameHome = atm.name;
                acronymHome = atm;
            }
            else if (message[2] == "psg") {
                nameHome = psg.name;
                acronymHome = psg;
            }
            else if (message[2] == "liv") {
                nameHome = liv.name;
                acronymHome = liv;
            }
            else if (message[2] == "che") {
                nameHome = che.name;
                acronymHome = che;
            }
            else if (message[2] == "juv") {
                nameHome = juv.name;
                acronymHome = juv;
            }
            else if (message[2] == "bay") {
                nameHome = bay.name;
                acronymHome = bay;
            }
            else if (message[2] == "bra") {
                nameHome = bra.name;
                acronymHome = bra;
            }
            else if (message[2] == "ale") {
                nameHome = ale.name;
                acronymHome = ale;
            }
            else if (message[2] == "arg") {
                nameHome = arg.name;
                acronymHome = arg;
            }
            else if (message[2] == "esp") {
                nameHome = esp.name;
                acronymHome = esp;
            }
            else if (message[2] == "por") {
                nameHome = por.name;
                acronymHome = por;
            }
            else if (message[2] == "ita") {
                nameHome = ita.name;
                acronymHome = ita;
            }
            else if (message[2] == "uru") {
                nameHome = uru.name;
                acronymHome = uru;
            }
            else if (message[2] == "fra") {
                nameHome = fra.name;
                acronymHome = fra;
            }
            else if (message[2] == "ing") {
                nameHome = ing.name;
                acronymHome = ing;
            }
            else if (message[2] == "bel") {
                nameHome = bel.name;
                acronymHome = bel;
            }
            else if (message[2] == "bor") {
                nameHome = bor.name;
                acronymHome = bor;
            }
            else if (message[2] == "mil") {
                nameHome = mil.name;
                acronymHome = mil;
            }
            else if (message[2] == "intM") {
                nameHome = intM.name;
                acronymHome = intM;
            }
            else if (message[2] == "hol") {
                nameHome = hol.name;
                acronymHome = hol;
            }
            else if (message[2] == "cor") {
                nameHome = cor.name;
                acronymHome = cor;
            }
            else if (message[2] == "spfc") {
                nameHome = spfc.name;
                acronymHome = spfc;
            }
            else if (message[2] == "pal") {
                nameHome = pal.name;
                acronymHome = pal;
            }
            else if (message[2] == "sfc") {
                nameHome = sfc.name;
                acronymHome = sfc;
            }
            else if (message[2] == "fla") {
                nameHome = fla.name;
                acronymHome = fla;
            }
            else if (message[2] == "vas") {
                nameHome = vas.name;
                acronymHome = vas;
            }
            else if (message[2] == "flu") {
                nameHome = flu.name;
                acronymHome = flu;
            }
            else if (message[2] == "gre") {
                nameHome = gre.name;
                acronymHome = gre;
            }
            else if (message[2] == "int") {
                nameHome = int.name;
                acronymHome = int;
            }
            else if (message[2] == "cru") {
                nameHome = cru.name;
                acronymHome = cru;
            }
            else if (message[2] == "boc") {
                nameHome = boc.name;
                acronymHome = boc;
            }
            else if (message[2] == "riv") {
                nameHome = riv.name;
                acronymHome = riv;
            }
            else if (message[2] == "girl") {
                nameHome = girl.name;
                acronymHome = girl;
            }
            else if (message[2] == "inv") {
                nameHome = inv.name;
                acronymHome = inv;
            }
            else if (message[2] == "mia") {
                nameHome = mia.name;
                acronymHome = mia;
            }
            else if (message[2] == "mia2") {
                nameHome = mia2.name;
                acronymHome = mia2;
            }
            else if (message[2] == "v1") {
                nameHome = v1.name;
                acronymHome = v1;
            }
            else if (message[2] == "v2") {
                nameHome = v2.name;
                acronymHome = v2;
            }
            else if (message[2] == "v3") {
                nameHome = v3.name;
                acronymHome = v3;
            }
            else if (message[2] == "v4") {
                nameHome = v4.name;
                acronymHome = v4;
            }
            else if (message[2] == "v5") {
                nameHome = v5.name;
                acronymHome = v5;
            }
            else if (message[2] == "vik") {
                nameHome = vik.name;
                acronymHome = vik;
            }
            room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_____troca_de_uniformes_____"), null, yellow, "italic");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
            }, 500);
        }
        if (message[1] == "blue") {
            if (message[2] == "bar") {
                nameGuest = bar.name;
                acronymGuest = bar;
            }
            else if (message[2] == "rea") {
                nameGuest = rea.name;
                acronymGuest = rea;
            }
            else if (message[2] == "mci") {
                nameGuest = mci.name;
                acronymGuest = mci;
            }
            else if (message[2] == "atm") {
                nameGuest = atm.name;
                acronymGuest = atm;
            }
            else if (message[2] == "psg") {
                nameGuest = psg.name;
                acronymGuest = psg;
            }
            else if (message[2] == "liv") {
                nameGuest = liv.name;
                acronymGuest = liv;
            }
            else if (message[2] == "che") {
                nameGuest = che.name;
                acronymGuest = che;
            }
            else if (message[2] == "juv") {
                nameGuest = juv.name;
                acronymGuest = juv;
            }
            else if (message[2] == "bay") {
                nameGuest = bay.name;
                acronymGuest = bay;
            }
            else if (message[2] == "bra") {
                nameGuest = bra.name;
                acronymGuest = bra;
            }
            else if (message[2] == "ale") {
                nameGuest = ale.name;
                acronymGuest = ale;
            }
            else if (message[2] == "arg") {
                nameGuest = arg.name;
                acronymGuest = arg;
            }
            else if (message[2] == "esp") {
                nameGuest = esp.name;
                acronymGuest = esp;
            }
            else if (message[2] == "por") {
                nameGuest = por.name;
                acronymGuest = por;
            }
            else if (message[2] == "ita") {
                nameGuest = ita.name;
                acronymGuest = ita;
            }
            else if (message[2] == "uru") {
                nameGuest = uru.name;
                acronymGuest = uru;
            }
            else if (message[2] == "fra") {
                nameGuest = fra.name;
                acronymGuest = fra;
            }
            else if (message[2] == "ing") {
                nameGuest = ing.name;
                acronymGuest = ing;
            }
            else if (message[2] == "bel") {
                nameGuest = bel.name;
                acronymGuest = bel;
            }
            else if (message[2] == "bor") {
                nameGuest = bor.name;
                acronymGuest = bor;
            }
            else if (message[2] == "mil") {
                nameGuest = mil.name;
                acronymGuest = mil;
            }
            else if (message[2] == "intM") {
                nameGuest = intM.name;
                acronymGuest = intM;
            }
            else if (message[2] == "hol") {
                nameGuest = hol.name;
                acronymGuest = hol;
            }
            else if (message[2] == "cor") {
                nameGuest = cor.name;
                acronymGuest = cor;
            }
            else if (message[2] == "spfc") {
                nameGuest = spfc.name;
                acronymGuest = spfc;
            }
            else if (message[2] == "pal") {
                nameGuest = pal.name;
                acronymGuest = pal;
            }
            else if (message[2] == "sfc") {
                nameGuest = sfc.name;
                acronymGuest = sfc;
            }
            else if (message[2] == "fla") {
                nameGuest = fla.name;
                acronymGuest = fla;
            }
            else if (message[2] == "vas") {
                nameGuest = vas.name;
                acronymGuest = vas;
            }
            else if (message[2] == "flu") {
                nameGuest = flu.name;
                acronymGuest = flu;
            }
            else if (message[2] == "gre") {
                nameGuest = gre.name;
                acronymGuest = gre;
            }
            else if (message[2] == "int") {
                nameGuest = int.name;
                acronymGuest = int;
            }
            else if (message[2] == "cru") {
                nameGuest = cru.name;
                acronymGuest = cru;
            }
            else if (message[2] == "boc") {
                nameGuest = boc.name;
                acronymGuest = boc;
            }
            else if (message[2] == "riv") {
                nameGuest = riv.name;
                acronymGuest = riv;
            }
            else if (message[2] == "girl") {
                nameGuest = girl.name;
                acronymGuest = girl;
            }
            else if (message[2] == "inv") {
                nameGuest = inv.name;
                acronymGuest = inv;
            }
            else if (message[2] == "mia") {
                nameGuest = mia.name;
                acronymGuest = mia;
            }
            else if (message[2] == "mia2") {
                nameGuest = mia2.name;
                acronymGuest = mia2;
            }
            else if (message[2] == "v1") {
                nameGuest = v1.name;
                acronymGuest = v1;
            }
            else if (message[2] == "v2") {
                nameGuest = v2.name;
                acronymGuest = v2;
            }
            else if (message[2] == "v3") {
                nameGuest = v3.name;
                acronymGuest = v3;
            }
            else if (message[2] == "v4") {
                nameGuest = v4.name;
                acronymGuest = v4;
            }
            else if (message[2] == "v5") {
                nameGuest = v5.name;
                acronymGuest = v5;
            }
            else if (message[2] == "vik") {
                nameGuest = vik.name;
                acronymGuest = vik;
            }
            room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_____troca_de_uniformes_____"), null, yellow, "italic");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
            }, 500);
        }
        if (message[1] == null) {
            room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
            room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
            room.sendAnnouncement(centerText("_____uniformes_destravados_____"), null, yellow, "italic");
        }
        return false;
    }
    if (["unix"].includes(message[0].toLowerCase())) {
        const allClubes = [rea, bar, che, juv, bay, psg, liv, mci, bor, atm, mil, intM, cor, spfc, sfc, pal, gre, cru, fla, flu, vas, int, boc, riv];
        var randHome = Math.floor(Math.random() * allClubes.length);
        var randGuest = Math.floor(Math.random() * allClubes.length);
        if (message[1] == null) {
            nameHome = allClubes[randHome].name;
            acronymHome = allClubes[randHome];
            nameGuest = allClubes[randGuest].name;
            acronymGuest = allClubes[randGuest];
            room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
            room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_____troca_de_uniformes_____"), null, yellow, "italic");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold")
            }, 500);
        }
        else if (message[1] == "red") {
            nameHome = allClubes[randHome].name;
            acronymHome = allClubes[randHome];
            room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_____troca_de_uniformes_____"), null, yellow, "italic");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold")
            }, 500);
        }
        else if (message[1] == "blue") {
            nameGuest = allClubes[randGuest].name;
            acronymGuest = allClubes[randGuest];
            room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_____troca_de_uniformes_____"), null, yellow, "italic");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold")
            }, 500);
        }
        return false;
    }
    if (["!selecrand", "selecrand"].includes(message[0].toLowerCase())) {
        const seleçoes = [ale, arg, bra, esp, por, ita, uru, fra, ing, bel, hol];
        var randHome = Math.floor(Math.random() * seleçoes.length);
        var randGuest = Math.floor(Math.random() * seleçoes.length);
        if (message[1] == null) {
            nameHome = seleçoes[randHome].name;
            acronymHome = seleçoes[randHome];
            nameGuest = seleçoes[randGuest].name;
            acronymGuest = seleçoes[randGuest];
            room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
            room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_________________________________"), null, white, "bold");
                room.sendAnnouncement(centerText("Uniformes atualizados"), null, yellow, "bold");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, yellow, "bold");
                room.sendAnnouncement(centerText("_________________________________"), null, white, "bold");
            }, 500);
        }
        else if (message[1] == "red") {
            nameHome = seleçoes[randHome].name;
            acronymHome = seleçoes[randHome];
            room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
                room.sendAnnouncement(centerText("Uniforme do time RED foi atualizado. Agora é " + nameHome), null, yellow, "bold");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
            }, 500);
        }
        else if (message[1] == "blue") {
            nameGuest = seleçoes[randGuest].name;
            acronymGuest = seleçoes[randGuest];
            room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
                room.sendAnnouncement(centerText("Uniforme do time BLUE foi atualizado. Agora é " + nameGuest), null, yellow, "bold");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
            }, 500);
        }
    }
    if (["!vs", "vs"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
        return false;
    }
    if (["!seleçoes"].includes(message[0].toLowerCase())) {
            room.sendAnnouncement("_______________________________________", null, yellow, "bold");
            room.sendAnnouncement("Seleções:", null, yellow, "bold");
            room.sendAnnouncement("Brasil <bra> Alemanha <ale> Argentina <arg> Espanha <esp> Portugal <por>", null, white, "normal");
            room.sendAnnouncement("Itália <ita> Uruguai <uru> França <fra> Inglaterra <ing> Bélgica <bel>, Holanda <hol>", null, white, "normal");
            room.sendAnnouncement("_______________________________________", null, yellow, "bold");
            setTimeout(function () {
                room.sendAnnouncement(centerText("called by " + player.name), null, chatInvisble, "italic");
            }, 100);
    }
    if (["!euro"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement("_______________________________________", null, yellow, "bold");
        room.sendAnnouncement("Times Europeus:", null, yellow, "bold");
        room.sendAnnouncement("Manchester City <mci>, Borussia Dortmund <bor>, Paris Saint-Germain <psg>, Real Madrid <rea>, Inter de Milão <intM>", null, white, "normal");
        room.sendAnnouncement("Barcelona <bar>, Atlético de Madrid <atm>, Liverpool <liv>, Chelsea <che>, Juventus <juv>, Bayern de Munique <bay>, Milan <mil>", null, white, "normal");
        room.sendAnnouncement("_______________________________________", null, yellow, "bold");
    }
    if (["!sula"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement("_______________________________________", null, yellow, "bold");
        room.sendAnnouncement("Times Sulamericanos:", null, yellow, "bold");
        room.sendAnnouncement("Corinthians <cor>, São Paulo <spfc>, Palmeiras <pal>, Santos <sfc>, Flamengo <fla>, Grêmio <gre>", null, white, "normal");
        room.sendAnnouncement("Vasco <vas>, Fluminense <flu>, Internacional <int>, Cruzeiro <cru>, Boca Juniors <boc>, River Plate <riv>", null, white, "normal");
        room.sendAnnouncement("_______________________________________", null, yellow, "bold");
    }
    if (["!regras"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("REGRAS DE JOGO"), null, white, "bold");
        room.sendAnnouncement(centerText("3x3 por 3minutos + 1minuto de prorrogação"), null, yellow, "normal");
        room.sendAnnouncement(centerText("FAIR PLAY pra ficar dahora"), null, yellow, "normal");
        room.sendAnnouncement(centerText("Capitão do time é o player1"), null, yellow, "normal");
        room.sendAnnouncement(centerText("Capitão escolhe o time com número da fila ou nome"), null, yellow, "normal");
        room.sendAnnouncement(centerText("Uma vez escolhido fica até o final"), null, yellow, "normal");
        room.sendAnnouncement(centerText("AFK vai pro final da fila e pausamos pro cap escolher outro"), null, yellow, "normal");
    }
    if (["!discord" , "discord"].includes(message[0].toLowerCase())) {
        sendRoomLinkToDiscord(roomName + "\n" + linkinho);
        room.sendAnnouncement(centerText("▒█▀▀▄ ▀█▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▄"), null, white, "bold", 0);
        room.sendAnnouncement(centerText("▒█░▒█ ▒█░ ░▀▀▀▄▄ ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█░▒█"), null, white, "bold", 0);
        room.sendAnnouncement(centerText("▒█▄▄▀ ▄█▄ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▀"), null, white, "bold", 0);
        room.sendAnnouncement(centerText(" https://discord.gg/AR7ypuzJG8 "), null, white, "bold", 1);
    }
    if (["!join" , "join"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("VoCê será redirecionado para o discord"), null, green, "italic");
        setTimeout(function () {
            joinDiscord("https://discord.gg/AR7ypuzJG8");
            window.open("https://discord.gg/AR7ypuzJG8");
        }, 500);
    }
    if (["lenda"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("🥴 LENDA 🥴"), null, white, "bold");
        }, 20);
    }
    if (["lendario", "lendário"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("🥴 LENDÁRIO 🥴"), null, white, "bold");
        }, 20);
    }
    if (["lendas"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("🥴 LENDAS 🥴"), null, white, "bold");
        }, 20);
    }
    if (["!bar"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎶 Todo o estádio, é um só clamor 🎵"), null, white, "normal");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎵 Azul-grená ao vento, um grito valente 🎶"), null, white, "normal");
        }, 1250);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎶 Temos um nome, que todos conhecem 🎵"), null, white, "normal");
        }, 2500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎵 Barça, Barça, Barça! 🎶"), null, white, "normal");
        }, 3750);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🔵🔴🔵...🔵🔴🔵...🔵🔴🔵"), null, white, "normal");
        }, 5000);
    }
    if (["!rea"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎶 Já corre a flecha 🎵"), null, white, "normal");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎵 Já ataca o meu Madrid 🎶"), null, white, "normal");
        }, 1250);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎶 O grito que aprendi 🎵"), null, white, "normal");
        }, 2500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎵 Madrid, Madrid, Madrid 🎶"), null, white, "normal");
        }, 3750);
        setTimeout(function () {
            room.sendAnnouncement(centerText("⚪🟡⚪...⚪🟡⚪...⚪🟡⚪"), null, white, "normal");
        }, 5000);
    }
    if (["!malco"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("❌"), null, white, "normal");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎵 Vai, malco! 🎶"), null, white, "normal");
        }, 1250);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎶 Vai, malco! 🎵"), null, white, "normal");
        }, 2500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎵 Vai, malco! 🎶"), null, white, "normal");
        }, 3750);
        setTimeout(function () {
            room.sendAnnouncement(centerText("❌"), null, white, "normal");
        }, 5000);
    }
    if (["!diaz"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("Se éres Tarde..."), null, white, "normal");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("UN MITO!"), null, white, "bold");
        }, 1250);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Se éres Noche..."), null, white, "normal");
        }, 2500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("UNA Lenda!"), null, white, "bold");
        }, 3750);
        setTimeout(function () {
            room.sendAnnouncement(centerText("𝘿𝙄𝘼𝙕"), null, yellow, "bold");
        }, 5000);
    }
    if (["!soberano", "soberano"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("👑 SOBERANO é rei 👑"), null, white, "bold");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("soberbo. soberbo, soberbo"), null, chatInvisble, "normal");
        }, 1250);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🏙️ SUBURBANO, a lei 🌆"), null, white, "bold");
        }, 1260);
        setTimeout(function () {
            room.sendAnnouncement(centerText("soberbo. soberbo, soberbo"), null, chatInvisble, "normal");
        }, 2500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("pra qualquer um, não tem"), null, white, "normal");
        }, 2510);
        setTimeout(function () {
            room.sendAnnouncement(centerText("soberbo. soberbo, soberbo"), null, chatInvisble, "normal");
        }, 3750);
        setTimeout(function () {
            room.sendAnnouncement(centerText("<< Soberania Soberbo >>"), null, yellow, "bold");
        }, 3760);
        setTimeout(function () {
            room.sendAnnouncement(centerText("soberbo. soberbo, soberbo"), null, chatInvisble, "normal");
        }, 5000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🍫 🍫 🍫 🍫 🍫 🍫 🍫"), null, yellow, "bold");
        }, 5010);
    }
    if (["!two"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("one-----------"), null, white, "normal");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("---TWO--------"), null, white, "normal");
        }, 1000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("------three-----"), null, white, "normal");
        }, 2000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("----------four"), null, white, "normal");
        }, 3000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("one-----------"), null, white, "normal");
        }, 4000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("-<-TWO->------"), null, yellow, "bold");
        }, 5000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🔥 🔥 🔥 🔥 🔥"), null, yellow, "bold");
        }, 6000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("TWO TWO TWO TWO TWO"), null, chatInvisble, "bold");
        }, 7000);
    }
    if (["!onlyway"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("ONLY FANS?"), null, yellow, "bold");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Não..."), null, yellow, "bold");
        }, 1250);
        setTimeout(function () {
            room.sendAnnouncement(centerText("THE..."), null, yellow, "bold");
        }, 2500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("...ONLY..."), null, yellow, "bold");
        }, 3750);
        setTimeout(function () {
            room.sendAnnouncement(centerText("...WAY!"), null, yellow, "bold");
        }, 5000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("THEONLYWAY"), null, white, "bold");
        }, 5000);
    }
    if (["!chiq"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("Chiquinho ... 😈 ... Chiquinho"), null, yellow, "bold");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("😈 CHIQUIN DA PENHA 😈"), null, yellow, "bold");
        }, 1250);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Chiquinho ... 😈 ... Chiquinho"), null, yellow, "bold");
        }, 2500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("😈 CHIQUIN DA PENHA 😈"), null, yellow, "bold");
        }, 3750);
    }
    if (["!smith"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("eu sou a LENDA!"), null, yellow, "bold");
        room.sendAnnouncement(centerText("by " + player.name), null, white, "italic");
    }
    if (["!messi"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("Messi, Messi, messi!"), null, white, "bold");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Ankara, Messi"), null, white, "bold");
        }, 1500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Ankara, Messi"), null, white, "bold");
        }, 3500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Gol, gol, gol!!!"), null, white, "bold");
        }, 6000);
    }
    if (["!mess"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("de cobertura!!"), null, yellow, "bold");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("📢 SHOOOOW!! 🎯"), null, white, "bold");
        }, 1000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("📢 SHOOOOW!! 🎯"), null, lightgrey, "bold");
        }, 1500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("👽🪐 ELE NÃO É DESSE PLANETA, MESMO🪐👽"), null, white, "bold");
        }, 2000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("𝕃 . 𝕄𝕖𝕤𝕤𝕚™"), null, indigo, "bold");
        }, 3000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("𝕃 . 𝕄𝕖𝕤𝕤𝕚™"), null, lightgrey, "bold");
        }, 3500);
    }
    if (["!abob"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("Abobrinha, que nunca falha..."), null, white, "bold");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Abobrinha, atacante de raça..."), null, white, "bold");
        }, 2000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Abobrinha que canta e vibraaaaa!"), null, white, "bold");
        }, 4000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("ABOBRINHA, THE GOAT"), null, yellow, "bold");
        }, 6000);
    }
    if (["!noob"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎶 Olê, olê, olê, olê! 🎶" ), c, white, "normal");
        }, 50);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎶 é o NooB! 🎶" ), null, white, "normal");
        }, 2500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("o NooB MaSteR!!" ), null, white, "bold");
        }, 4000);
    }
    if (["!pepe"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("PÊEEPÊ NELES!"), null, white, "bold");
    }
    if (["!soberbo"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("🍫"), null, white, "normal");
        }, 25);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🍫...🍫"), null, white, "normal");
        }, 1000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🍫...🍫...🍫"), null, white, "normal");
        }, 2250);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🍫... SOBEEEERBOOOOOOO! ...🍫"), null, white, "normal");
        }, 3500);
    }
    if (["var"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText(player.name + " chamou o VAR"), null, yellow, "normal");
        setTimeout(function () {
            room.sendAnnouncement(centerText(" VAR 📹 --> analizando..."), null, white, "bold");
            setTimeout(function () { checkAndPauseGame(); IIIx(); alwaysOnTeam(); IIIx(); checkAndStartGame(); IIIx(); checkAndResumeGame(); }, 50);
            if (teamB.length == 0) {topBtn();}
            if (teamB.length == 2) {topBtn();}
        }, 300);
        return false;
    }
    if (["!gk"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("GOLEIROOO!"), null, white, "bold");
    }
    if (["gk"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText(player.name + " vai de gk!"), null, white, "bold");
        }, 20);
        setTimeout(function () {
            room.setPlayerAvatar(player.id, "GK")
            setTimeout(function () {
                room.setPlayerAvatar(player.id, "☢️")
                setTimeout(function () {
                    room.setPlayerAvatar(player.id, "GK")
                    setTimeout(function () {
                        room.setPlayerAvatar(player.id, "☢️")
                        setTimeout(function () {
                            room.setPlayerAvatar(player.id, null)
                        }, 1800);
                    }, 1800);
                }, 1200);
            }, 600);
        }, 10);
        if (GKListname.includes(player.name)) {}
        else {GKListname.push(" " + player.name);}
    }
    if (["gk?", "gklist", "gklista"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement("☢️ Gks disponiveis: ", null, white, "bold");
            room.sendAnnouncement(GKListname.toString(), null, yellow, "normal");
        }, 20);
        if (["clean", "clear", "rr"].includes(message[1].toLowerCase())) {
            room.sendAnnouncement(centerText("Lista de GKs foi esvaziada"), null, yellow, "itallc");
        }
    }
    if (["!brabo", "brabo"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText(player.name + " é braboooo!"), null, white, "bold");
    }
    if (["!ain", "ain"].includes(message[0].toLowerCase())) {
        var messages = [
            "AINN, PAI PARAAA!",
            "AIN, ZÉ DA MANGA!",
            "AIN, ZÉ DA MANGA!",
            "AIN, ZÉ DA MANGA!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        room.sendAnnouncement(player.name + ": " + announcement, null, yellow, "bold");
        return false;
    }
    if (["!gol", "gol"].includes(message[0].toLowerCase())) {
        var messages = [
            "LAAAAÇO! ⚽",
            "GOLAAAAÇO! ⚽",
            "É GOOOOL! ⚽",
            "OLHA O GOL, OLHA O GOL, OLHA O GOL!",
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        room.sendAnnouncement(player.name + ": " + announcement, null, white, "bold");
        return false;
    }
    if (["!chupa", "chupa"].includes(message[0].toLowerCase())) {
        var messages = [
            "Chupaaa!",
            "Chupaaa!",
            "Chupaaa!",
            "Chupaaa!",
            "Chupaaa!",
            "Chupaaa, Lady Gaga! 👱‍♀️",
            "Chupaaa, imperatriz! 🧞‍♂️",
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        room.sendAnnouncement(player.name + ": " + announcement, null, white, "bold");
        return false;
    }
    if (["!verdade"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText(player.name + " é ruim pra caramba!"), null, yellow, "bold");
    }
    if (["!sedex", "sedex", "!carteiro", "!correios", "carteiro", "correios"].includes(message[0].toLowerCase())) {
        function repeatAction(action, times) {
            for (var i = 0; i < times; i++) {
                action(); // Executa a ação
            }
        }
        function blank() {
            room.sendAnnouncement(" ", null, white, "normal", 0);
        }
        setTimeout(function () {
        repeatAction(blank, 10);
        room.sendAnnouncement("                                        🚚", null, white, "normal", 0);
        repeatAction(blank, 2);
        }, 10);
        setTimeout(function () {
        repeatAction(blank, 10);
        room.sendAnnouncement("                                     🚚💨_", null, white, "normal", 0);
        repeatAction(blank, 2);
        }, 300);
        setTimeout(function () {
        repeatAction(blank, 10);
        room.sendAnnouncement("                           🚚_-__𝐒𝐄𝐃𝐄𝐗__-_", null, white, "normal", 0);
        repeatAction(blank, 2);
        }, 600);
        setTimeout(function () {
        repeatAction(blank, 10);
        room.sendAnnouncement("                 🚚_-__𝐒𝐄𝐃𝐄𝐗__-__𝐒𝐄𝐃𝐄𝐗__-_", null, white, "normal", 0);
        repeatAction(blank, 2);
        }, 900);
        setTimeout(function () {
        repeatAction(blank, 10);
        room.sendAnnouncement("       🚚_-__𝐒𝐄𝐃𝐄𝐗__-__𝐒𝐄𝐃𝐄𝐗__-__𝐒𝐄𝐃𝐄𝐗__-_", null, white, "normal", 0);
        repeatAction(blank, 2);
        }, 1200);
        setTimeout(function () {
        repeatAction(blank, 10);
        room.sendAnnouncement(" 🚚𝐒𝐄𝐃𝐄𝐗__-__𝐒𝐄𝐃𝐄𝐗__-__𝐒𝐄𝐃𝐄𝐗__-__𝐒𝐄𝐃𝐄𝐗__-_", null, white, "normal", 0);
        repeatAction(blank, 2);
        }, 1500);
    }
    if (["!admin", "adm", "admin"].includes(message[0].toLowerCase())) {
        if (message[1] == adminPassword) {
            room.setPlayerAdmin(player.id, true);
            adminPassword = generateAdminRandomPassword();
            console.log("adminPassword : " + adminPassword);
            return false;
        }
        if (message[1] == "reset") {
            adminPassword = generateAdminRandomPassword();
            console.log("adminPassword : " + adminPassword);
            return false;
        }
    }
    if (["!bb", "!bye", "!flw"].includes(message[0].toLowerCase())) {
        room.kickPlayer(player.id, "Até a próxima!", false);
        room.sendAnnouncement(centerText(player.name + " deu AUTO KICK!"), null, warn, "normal");
        return false;
    }
    if (["!clean", "!limpar", "!clear"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            function repeatAction(action, times) {
                for (var i = 0; i < times; i++) {
                    action(); // Executa a ação
                }
            }
            function blankedAnnouncement() {
                room.sendAnnouncement(" ", null, white, "normal", 0);
            }
            repeatAction(blankedAnnouncement, 50); // Envia o anúncio 5 vezes
            setTimeout(function () {
                room.sendAnnouncement(centerText(player.name + " limpou o chat"), null, yellow, "italic");
            }, 500);
        }
        return false;
    }
    if (["rr", "!rr"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            rr = true;
            setTimeout(function () {
                room.stopGame();
                setTimeout(function () {
                    IIIx();
                    checkTeamSizeAndChangeMap();
                    setTimeout(function () {
                    room.startGame();
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("A Partida foi reniciada"), null, warn, "bold")
                        }, 5);
                    }, 5);
                }, 5);
            }, 50);
            setTimeout(function () {
                rr = false;
            }, 100);
        }
        return false;
    }
    if (["go", "play", "bora"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            room.startGame();
        }
        return false;
    }
    if (["stop"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            room.stopGame();
        }
        return false;
    }
    if (["!timeout", "!javolto"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            redChat = false;
            blueChat = false;
            specChat = false;
            room.pauseGame(true);
            room.sendAnnouncement(centerText(" "), null, white, "bold", 0);
            setTimeout(() => {
                room.sendAnnouncement(centerText(" "), null, white, "bold", 0);
                room.sendAnnouncement(centerText(" "), null, white, "bold", 0);
                room.sendAnnouncement(centerText("TEREMOS UMA ATUALIZAÇÃO"), null, yellow, "bold", 2);
                setTimeout(() => {
                    room.sendAnnouncement(centerText("A sala será derrubada e logo voltaremos!"), null, warn, "bold");
                }, 100);
            }, 500);
        }
        return false;
    }
    if (["!xau", "!adeus","!fechar"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            redChat = false;
            blueChat = false;
            specChat = false;
            room.pauseGame(true);
            room.sendAnnouncement(centerText(" "), null, white, "bold", 0);
            setTimeout(() => {
                room.sendAnnouncement(centerText(" "), null, white, "bold", 0);
                room.sendAnnouncement(centerText(" "), null, white, "bold", 0);
                room.sendAnnouncement(centerText("POR HOJE É ISSO, RAPA"), null, yellow, "bold", 2);
                setTimeout(() => {
                    room.sendAnnouncement(centerText("A sala será derrubada agora!"), null, warn, "bold");
                }, 100);
            }, 500);
        }
        return false;
    }
    if (["!pendurados", "pendurados"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("Jogadores Pendurados"), player.id, white, "bold");
        room.sendAnnouncement(centerText(pendurados), player.id, white, "normal");
    }
    if (["!avatar", "avatar"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message[2] == "null") {
                const pID = parseInt(message[1]);
                room.setPlayerAvatar(pID, null);
            }
            else {
                const pID = parseInt(message[1]);
                room.setPlayerAvatar(pID, message[2]);
            }
        }
        return false;
    }
    if (["!list", "list", "!lista", "lista"].includes(message[0].toLowerCase())) {
        if (message[1] == "red") {
            if (teamR.length == 1) {
                room.sendAnnouncement(teamR[0].name + ": ID -> " + teamR[0].id + ", Acrônimo -> r1", null, white, "normal", 2);
            }
            else if (teamR.length == 2) {
                room.sendAnnouncement(teamR[0].name + ": ID -> " + teamR[0].id + ", Acrônimo -> r1", null, white, "normal", 0);
                room.sendAnnouncement(teamR[1].name + ": ID -> " + teamR[1].id + ", Acrônimo -> r2", null, white, "normal", 2);
            }
            else if (teamR.length == 3) {
                room.sendAnnouncement(teamR[0].name + ": ID -> " + teamR[0].id + ", Acrônimo -> r1", null, white, "normal", 0);
                room.sendAnnouncement(teamR[1].name + ": ID -> " + teamR[1].id + ", Acrônimo -> r2", null, white, "normal", 0);
                room.sendAnnouncement(teamR[2].name + ": ID -> " + teamR[2].id + ", Acrônimo -> r3", null, white, "normal", 2);
            }
        }
        if (message[1] == "blue") {
            if (teamB.length == 1) {
                room.sendAnnouncement(teamB[0].name + ": ID -> " + teamB[0].id + ", Acrônimo -> b1", null, white, "normal", 2);
            }
            else if (teamB.length == 2) {
                room.sendAnnouncement(teamB[0].name + ": ID -> " + teamB[0].id + ", Acrônimo -> b1", null, white, "normal", 0);
                room.sendAnnouncement(teamB[1].name + ": ID -> " + teamB[1].id + ", Acrônimo -> b2", null, white, "normal", 2);
            }
            else if (teamB.length == 3) {
                room.sendAnnouncement(teamB[0].name + ": ID -> " + teamB[0].id + ", Acrônimo -> b1", null, white, "normal", 0);
                room.sendAnnouncement(teamB[1].name + ": ID -> " + teamB[1].id + ", Acrônimo -> b2", null, white, "normal", 0);
                room.sendAnnouncement(teamB[2].name + ": ID -> " + teamB[2].id + ", Acrônimo -> b3", null, white, "normal", 2);
            }
        }
        if (message[1] == null) {
            if (teamS.length == 1) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 2);
            }
            else if (teamS.length == 2) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 2);
            }
            else if (teamS.length == 3) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 2);
            }
            else if (teamS.length == 4) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 2);
            }
            else if (teamS.length == 5) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
            }
            else if (teamS.length == 6) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
            }
            else if (teamS.length == 7) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
            }
            else if (teamS.length == 8) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
            }
            else if (teamS.length == 9) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[8].name + " ---> Nº 9 --- | ID - " + teamS[8].id, null, white, "normal", 0);
            }
            else if (teamS.length == 10) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[8].name + " ---> Nº 9 --- | ID - " + teamS[8].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[9].name + " ---> Nº 10 --- | ID - " + teamS[9].id, null, white, "normal", 0);
            }
            else if (teamS.length == 11) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[8].name + " ---> Nº 9 --- | ID - " + teamS[8].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[9].name + " ---> Nº 10 --- | ID - " + teamS[9].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[10].name + " ---> Nº 11 --- | ID - " + teamS[10].id, null, white, "normal", 0);
            }
            else if (teamS.length == 12) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[8].name + " ---> Nº 9 --- | ID - " + teamS[8].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[9].name + " ---> Nº 10 --- | ID - " + teamS[9].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[10].name + " ---> Nº 11 --- | ID - " + teamS[10].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[11].name + " ---> Nº 12 --- | ID - " + teamS[11].id, null, white, "normal", 0);
            }
            else if (teamS.length == 13) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[8].name + " ---> Nº 9 --- | ID - " + teamS[8].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[9].name + " ---> Nº 10 --- | ID - " + teamS[9].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[10].name + " ---> Nº 11 --- | ID - " + teamS[10].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[11].name + " ---> Nº 12 --- | ID - " + teamS[11].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[12].name + " ---> Nº 13 --- | ID - " + teamS[12].id, null, white, "normal", 0);
            }
            else if (teamS.length == 14) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[8].name + " ---> Nº 9 --- | ID - " + teamS[8].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[9].name + " ---> Nº 10 --- | ID - " + teamS[9].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[10].name + " ---> Nº 11 --- | ID - " + teamS[10].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[11].name + " ---> Nº 12 --- | ID - " + teamS[11].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[12].name + " ---> Nº 13 --- | ID - " + teamS[12].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[13].name + " ---> Nº 14 --- | ID - " + teamS[13].id, null, white, "normal", 0);
            }
            else if (teamS.length == 15) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[8].name + " ---> Nº 9 --- | ID - " + teamS[8].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[9].name + " ---> Nº 10 --- | ID - " + teamS[9].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[10].name + " ---> Nº 11 --- | ID - " + teamS[10].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[11].name + " ---> Nº 12 --- | ID - " + teamS[11].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[12].name + " ---> Nº 13 --- | ID - " + teamS[12].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[13].name + " ---> Nº 14 --- | ID - " + teamS[13].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[14].name + " ---> Nº 15 --- | ID - " + teamS[14].id, null, white, "normal", 0);
            }
            else if (teamS.length == 16) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[8].name + " ---> Nº 9 --- | ID - " + teamS[8].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[9].name + " ---> Nº 10 --- | ID - " + teamS[9].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[10].name + " ---> Nº 11 --- | ID - " + teamS[10].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[11].name + " ---> Nº 12 --- | ID - " + teamS[11].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[12].name + " ---> Nº 13 --- | ID - " + teamS[12].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[13].name + " ---> Nº 14 --- | ID - " + teamS[13].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[14].name + " ---> Nº 15 --- | ID - " + teamS[14].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[15].name + " ---> Nº 16 --- | ID - " + teamS[15].id, null, white, "normal", 0);
            }
            else if (teamS.length == 17) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[8].name + " ---> Nº 9 --- | ID - " + teamS[8].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[9].name + " ---> Nº 10 --- | ID - " + teamS[9].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[10].name + " ---> Nº 11 --- | ID - " + teamS[10].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[11].name + " ---> Nº 12 --- | ID - " + teamS[11].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[12].name + " ---> Nº 13 --- | ID - " + teamS[12].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[13].name + " ---> Nº 14 --- | ID - " + teamS[13].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[14].name + " ---> Nº 15 --- | ID - " + teamS[14].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[15].name + " ---> Nº 16 --- | ID - " + teamS[15].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[16].name + " ---> Nº 17 --- | ID - " + teamS[16].id, null, white, "normal", 0);
            }
            else if (teamS.length == 18) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[8].name + " ---> Nº 9 --- | ID - " + teamS[8].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[9].name + " ---> Nº 10 --- | ID - " + teamS[9].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[10].name + " ---> Nº 11 --- | ID - " + teamS[10].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[11].name + " ---> Nº 12 --- | ID - " + teamS[11].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[12].name + " ---> Nº 13 --- | ID - " + teamS[12].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[13].name + " ---> Nº 14 --- | ID - " + teamS[13].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[14].name + " ---> Nº 15 --- | ID - " + teamS[14].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[15].name + " ---> Nº 16 --- | ID - " + teamS[15].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[16].name + " ---> Nº 17 --- | ID - " + teamS[16].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[17].name + " ---> Nº 18 --- | ID - " + teamS[17].id, null, white, "normal", 0);
            }
            else if (teamS.length == 19) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[8].name + " ---> Nº 9 --- | ID - " + teamS[8].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[9].name + " ---> Nº 10 --- | ID - " + teamS[9].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[10].name + " ---> Nº 11 --- | ID - " + teamS[10].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[11].name + " ---> Nº 12 --- | ID - " + teamS[11].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[12].name + " ---> Nº 13 --- | ID - " + teamS[12].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[13].name + " ---> Nº 14 --- | ID - " + teamS[13].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[14].name + " ---> Nº 15 --- | ID - " + teamS[14].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[15].name + " ---> Nº 16 --- | ID - " + teamS[15].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[16].name + " ---> Nº 17 --- | ID - " + teamS[16].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[17].name + " ---> Nº 18 --- | ID - " + teamS[17].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[18].name + " ---> Nº 19 --- | ID - " + teamS[18].id, null, white, "normal", 0);
            }
            else if (teamS.length == 20) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[8].name + " ---> Nº 9 --- | ID - " + teamS[8].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[9].name + " ---> Nº 10 --- | ID - " + teamS[9].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[10].name + " ---> Nº 11 --- | ID - " + teamS[10].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[11].name + " ---> Nº 12 --- | ID - " + teamS[11].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[12].name + " ---> Nº 13 --- | ID - " + teamS[12].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[13].name + " ---> Nº 14 --- | ID - " + teamS[13].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[14].name + " ---> Nº 15 --- | ID - " + teamS[14].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[15].name + " ---> Nº 16 --- | ID - " + teamS[15].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[16].name + " ---> Nº 17 --- | ID - " + teamS[16].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[17].name + " ---> Nº 18 --- | ID - " + teamS[17].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[18].name + " ---> Nº 19 --- | ID - " + teamS[18].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[19].name + " ---> Nº 20 --- | ID - " + teamS[19].id, null, white, "normal", 0);
            }
        }
        return false;
    }
    if (["set"].includes(message[0].toLowerCase())) {
        if (message[5] == keyCommand) {
            let joguins = parseInt(message[1]);
            let gols = parseInt(message[2]);
            let assists = parseInt(message[3]);
            let hatTricks = parseInt(message[4]);
            for (let i = 0; i < gols; i++) {
                joguin(joguins, player);
            }
            for (let i = 0; i < gols; i++) {
                golzin(gols, player);
            }
            for (let i = 0; i < assists; i++) {
                assistizinha(assists, player);
            }
            for (let i = 0; i < hatTricks; i++) {
                hatzinho(hatTricks, player);
            }
            room.sendAnnouncement("[📄] " + player.name + " stats:  🎮 Jogos: " + getStoredGames(player) + " ⚽️ Gols: " + getStoredGoals(player) + ", 👟 Assistências: " + getStoredAssists(player) + ", 🏆 Hat-tricks: " + getHatTrick(player) + ", ✅ Vitórias: " + getStoredWins(player) + ", ❌ Derrotas: " + getStoredLosses(player), null, white, "bold"); 
            keyCommand = generateRandomPassword();
        }
        return false;
    }
    if (["add"].includes(message[0].toLowerCase())) {
        if (message[3] == keyCommand) {
            let vezes = parseInt(message[1]);
            if (message[2] == "gols") {
                for (let i = 0; i < vezes; i++) {
                    storeGoals(player);
                }
            }
            if (message[2] == "assists") {
                for (let i = 0; i < vezes; i++) {
                    storeAssist(player);
                }
            }
            if (message[2] == "hats") {
                for (let i = 0; i < vezes; i++) {
                    storeHatTrick(player);
                }
            }
            if (message[2] == "jogos") {
                for (let i = 0; i < vezes; i++) {
                    incrementGames(player);
                }
            }
            if (message[2] == "win") {
                for (let i = 0; i < vezes; i++) {
                    incrementWins(player);
                }
            }
            if (message[2] == "loss") {
                for (let i = 0; i < vezes; i++) {
                    incrementLosses(player);
                }
            }
            room.sendAnnouncement("[📄] " + player.name + " | 🎮 Jogos: " + getStoredGames(player) + " ⚽️ Gols: " + getStoredGoals(player) + ", 👟 Assistências: " + getStoredAssists(player) + ", 🏆 Hat-tricks: " + getHatTrick(player) + ", ✅ Vitórias: " + getStoredWins(player) + ", ❌ Derrotas: " + getStoredLosses(player) + ", Taxa de vitórias: " + calculateWinPercentage(player) + "%", null, white, "bold"); 
            keyCommand = generateRandomPassword();
        }
        return false;
    }
    if (["size"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message[1] == "r1") {
                if (message[2] == "big") {
                    room.setPlayerDiscProperties(teamR[0].id, {radius: 17, invMass: 30 / 30});
                }
                else if (message[2] == "normal") {
                    room.setPlayerDiscProperties(teamR[0].id, {radius: 15, invMass: 30 / 30});
                }
                else if (message[2] == "small") {
                    room.setPlayerDiscProperties(teamR[0].id, {radius: 12, invMass: 30 / 30});
                }
                else if (message[2] == "nano") {
                    room.setPlayerDiscProperties(teamR[0].id, {radius: 5, invMass: 30 / 30});
                }
                else if (message[2] == "hulk") {
                    room.setPlayerDiscProperties(teamR[0].id, {radius: 25, invMass: 30 / 30});
                }
            }
            else if (message[1] == "r2") {
                if (message[2] == "big") {
                    room.setPlayerDiscProperties(teamR[1].id, {radius: 17, invMass: 30 / 30});
                }
                else if (message[2] == "normal") {
                    room.setPlayerDiscProperties(teamR[1].id, {radius: 15, invMass: 30 / 30});
                }
                else if (message[2] == "small") {
                    room.setPlayerDiscProperties(teamR[1].id, {radius: 12, invMass: 30 / 30});
                }
                else if (message[2] == "nano") {
                    room.setPlayerDiscProperties(teamR[1].id, {radius: 5, invMass: 30 / 30});
                }
                else if (message[2] == "hulk") {
                    room.setPlayerDiscProperties(teamR[1].id, {radius: 25, invMass: 30 / 30});
                }
            }
            else if (message[1] == "r3") {
                if (message[2] == "big") {
                    room.setPlayerDiscProperties(teamR[2].id, {radius: 17, invMass: 30 / 30});
                }
                else if (message[2] == "normal") {
                    room.setPlayerDiscProperties(teamR[2].id, {radius: 15, invMass: 30 / 30});
                }
                else if (message[2] == "small") {
                    room.setPlayerDiscProperties(teamR[2].id, {radius: 12, invMass: 30 / 30});
                }
                else if (message[2] == "nano") {
                    room.setPlayerDiscProperties(teamR[2].id, {radius: 5, invMass: 30 / 30});
                }
                else if (message[2] == "hulk") {
                    room.setPlayerDiscProperties(teamR[2].id, {radius: 25, invMass: 30 / 30});
                }
            }
            else if (message[1] == "b1") {
                if (message[2] == "big") {
                    room.setPlayerDiscProperties(teamB[0].id, {radius: 17, invMass: 30 / 30});
                }
                else if (message[2] == "normal") {
                    room.setPlayerDiscProperties(teamB[0].id, {radius: 15, invMass: 30 / 30});
                }
                else if (message[2] == "small") {
                    room.setPlayerDiscProperties(teamB[0].id, {radius: 12, invMass: 30 / 30});
                }
                else if (message[2] == "nano") {
                    room.setPlayerDiscProperties(teamB[0].id, {radius: 5, invMass: 30 / 30});
                }
                else if (message[2] == "hulk") {
                    room.setPlayerDiscProperties(teamB[0].id, {radius: 25, invMass: 30 / 30});
                }
            }
            else if (message[1] == "b2") {
                if (message[2] == "big") {
                    room.setPlayerDiscProperties(teamB[1].id, {radius: 17, invMass: 30 / 30});
                }
                else if (message[2] == "normal") {
                    room.setPlayerDiscProperties(teamB[1].id, {radius: 15, invMass: 30 / 30});
                }
                else if (message[2] == "small") {
                    room.setPlayerDiscProperties(teamB[1].id, {radius: 12, invMass: 30 / 30});
                }
                else if (message[2] == "nano") {
                    room.setPlayerDiscProperties(teamB[1].id, {radius: 5, invMass: 30 / 30});
                }
                else if (message[2] == "hulk") {
                    room.setPlayerDiscProperties(teamB[1].id, {radius: 25, invMass: 30 / 30});
                }
            }
            else if (message[1] == "b3") {
                if (message[2] == "big") {
                    room.setPlayerDiscProperties(teamB[2].id, {radius: 17, invMass: 30 / 30});
                }
                else if (message[2] == "normal") {
                    room.setPlayerDiscProperties(teamB[2].id, {radius: 15, invMass: 30 / 30});
                }
                else if (message[2] == "small") {
                    room.setPlayerDiscProperties(teamB[2].id, {radius: 12, invMass: 30 / 30});
                }
                else if (message[2] == "nano") {
                    room.setPlayerDiscProperties(teamB[2].id, {radius: 5, invMass: 30 / 30});
                }
                else if (message[2] == "hulk") {
                    room.setPlayerDiscProperties(teamB[2].id, {radius: 25, invMass: 30 / 30});
                }
            }
            else if (message[1] == "red") {
                if (message[2] == "hulk") {
                    if (teamR.length == 1) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 25, invMass: 30 / 30});
                    }
                    else if (teamR.length == 2) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 25, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[1].id, {radius: 25, invMass: 30 / 30});
                    }
                    else if (teamR.length == 3) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 25, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[1].id, {radius: 25, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[2].id, {radius: 25, invMass: 30 / 30});
                    }
                }
                if (message[2] == "big") {
                    if (teamR.length == 1) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 17, invMass: 30 / 30});
                    }
                    else if (teamR.length == 2) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 17, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[1].id, {radius: 17, invMass: 30 / 30});
                    }
                    else if (teamR.length == 3) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 17, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[1].id, {radius: 17, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[2].id, {radius: 17, invMass: 30 / 30});
                    }
                }
                else if (message[2] == "normal") {
                    if (teamR.length == 1) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 15, invMass: 30 / 30});
                    }
                    else if (teamR.length == 2) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 15, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[1].id, {radius: 15, invMass: 30 / 30});
                    }
                    else if (teamR.length == 3) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 15, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[1].id, {radius: 15, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[2].id, {radius: 15, invMass: 30 / 30});
                    }
                }
                else if (message[2] == "small") {
                    if (teamR.length == 1) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 12, invMass: 30 / 30});
                    }
                    else if (teamR.length == 2) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 12, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[1].id, {radius: 12, invMass: 30 / 30});
                    }
                    else if (teamR.length == 3) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 12, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[1].id, {radius: 12, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[2].id, {radius: 12, invMass: 30 / 30});
                    }
                }
                else if (message[2] == "nano") {
                    if (teamR.length == 1) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 5, invMass: 30 / 30});
                    }
                    else if (teamR.length == 2) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 5, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[1].id, {radius: 5, invMass: 30 / 30});
                    }
                    else if (teamR.length == 3) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 5, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[1].id, {radius: 5, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[2].id, {radius: 5, invMass: 30 / 30});
                    }
                }
            }
            else if (message[1] == "blue") {
                if (message[2] == "hulk") {
                    if (teamB.length == 1) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 25, invMass: 30 / 30});
                    }
                    else if (teamB.length == 2) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 25, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[1].id, {radius: 25, invMass: 30 / 30});
                    }
                    else if (teamB.length == 3) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 25, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[1].id, {radius: 25, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[2].id, {radius: 25, invMass: 30 / 30});
                    }
                }
                else if (message[2] == "big") {
                    if (teamB.length == 1) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 17, invMass: 30 / 30});
                    }
                    else if (teamB.length == 2) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 17, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[1].id, {radius: 17, invMass: 30 / 30});
                    }
                    else if (teamB.length == 3) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 17, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[1].id, {radius: 17, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[2].id, {radius: 17, invMass: 30 / 30});
                    }
                }
                else if (message[2] == "normal") {
                    if (teamB.length == 1) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 15, invMass: 30 / 30});
                    }
                    else if (teamB.length == 2) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 15, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[1].id, {radius: 15, invMass: 30 / 30});
                    }
                    else if (teamB.length == 3) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 15, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[1].id, {radius: 15, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[2].id, {radius: 15, invMass: 30 / 30});
                    }
                }
                else if (message[2] == "small") {
                    if (teamB.length == 1) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 12, invMass: 30 / 30});
                    }
                    else if (teamB.length == 2) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 12, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[1].id, {radius: 12, invMass: 30 / 30});
                    }
                    else if (teamB.length == 3) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 12, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[1].id, {radius: 12, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[2].id, {radius: 12, invMass: 30 / 30});
                    }
                }
                else if (message[2] == "nano") {
                    if (teamB.length == 1) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 5, invMass: 30 / 30});
                    }
                    else if (teamB.length == 2) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 5, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[1].id, {radius: 5, invMass: 30 / 30});
                    }
                    else if (teamB.length == 3) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 5, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[1].id, {radius: 5, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[2].id, {radius: 5, invMass: 30 / 30});
                    }
                }
            }
        }
        return false;
    }
    if (["!hulk"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            room.setPlayerDiscProperties(player.id, {radius: 25, invMass: 30 / 30});
        }
        return false;
    }
    if (["!crescer", "gordão", "gordao"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            room.setPlayerDiscProperties(player.id, {radius: 17, invMass: 30 / 30});
        }
        return false;
    }
    if (["!normal", "normal"].includes(message[0].toLowerCase())) {
        room.setPlayerDiscProperties(player.id, {radius: 15, invMass:  20 / 30});
        return false;
    }
    if (["!blacklist", "blacklist"].includes(message[0].toLowerCase())) {
        setTimeout(() => {
            room.sendAnnouncement(centerText("☢️ --- BLACK LIST --- ☢️"), null, warn, "bold", 0);
            room.sendAnnouncement(centerText(blacklistnames), null, white, "italic");
        }, 300);
    }
    if (["!diminuir", "anao", "anão"].includes(message[0].toLowerCase())) {
        room.setPlayerDiscProperties(player.id, {radius: 12, invMass:  20 / 30});
        return false;
    }
    if (["!mute", "mute"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message[1] == "red") {
                if (message[2] == "30") {
                redChat = false;
                room.sendAnnouncement(centerText("O time " + nameHome + " foi mutado por 30 segundos"), null, warn, "italic");
                setTimeout(function () {
                    redChat = true;
                    room.sendAnnouncement(centerText("Fim do MUTE para " + nameHome), null, warn, "italic");
                }, 30000);
                }
                else if (message[2] == "1") {
                    redChat = false;
                    room.sendAnnouncement(centerText("O time " + nameHome + " foi mutado por 1 minuto"), null, warn, "italic");
                    setTimeout(function () {
                        redChat = true;
                        room.sendAnnouncement(centerText("Fim do MUTE para " + nameHome), null, warn, "italic");
                    }, 60000);
                }
                else {
                    if (redChat == true) {
                        redChat = false;
                        room.sendAnnouncement(centerText("O time " + nameHome + " foi mutado"), null, warn, "italic");
                    }
                    else if (redChat == false) {
                        redChat = true;
                        room.sendAnnouncement(centerText("Fim do MUTE para " + nameHome), null, warn, "italic");
                    }
                    
                }
            }
            if (message[1] == "blue") {
                if (message[2] == "30") {
                blueChat = false;
                room.sendAnnouncement(centerText("O time " + nameGuest + " foi mutado por 30 segundos"), null, warn, "italic");
                setTimeout(function () {
                    blueChat = true;
                    room.sendAnnouncement(centerText("Fim do MUTE para " + nameGuest), null, warn, "italic");
                }, 30000);
                }
                else if (message[2] == "1") {
                    blueChat = false;
                    room.sendAnnouncement(centerText("O time " + nameGuest + " foi mutado por 1 minuto"), null, warn, "italic");
                    setTimeout(function () {
                        blueChat = true;
                        room.sendAnnouncement(centerText("Fim do MUTE para " + nameGuest), null, warn, "italic");
                    }, 60000);
                }
                else {
                    if (blueChat == true) {
                        blueChat = false;
                        room.sendAnnouncement(centerText("O time " + nameGuest + " foi mutado"), null, warn, "italic");
                    }
                    else if (blueChat == false) {
                        blueChat = true;
                        room.sendAnnouncement(centerText("Fim do MUTE para " + nameGuest), null, warn, "italic");
                    }
                }
            }
            if (message[1] == "spec") {
                if (message[2] == "30") {
                specChat = false;
                room.sendAnnouncement(centerText("Espectadores foram mutados por 30 segundos"), null, warn, "italic");
                setTimeout(function () {
                    specChat = true;
                    room.sendAnnouncement(centerText("Fim do MUTE para Espectadores"), null, warn, "italic");
                }, 30000);
                }
                else if (message[2] == "1") {
                    specChat = false;
                    room.sendAnnouncement(centerText("Espectadores foram mutados por 1 minuto"), null, warn, "italic");
                    setTimeout(function () {
                        specChat = true;
                        room.sendAnnouncement(centerText("Fim do MUTE para Espectadores"), null, warn, "italic");
                    }, 60000);
                }
                else {
                    if (specChat == true) {
                        specChat = false;
                        room.sendAnnouncement(centerText("Espectadores foram mutados"), null, warn, "italic");
                    }
                    else if (specChat == false) {
                        specChat = true;
                        room.sendAnnouncement(centerText("Fim do MUTE para Espectadores"), null, warn, "italic");
                    }
                    
                }
            }
            if (message[1] == null) {
                if (muted == false) {
                    redChat = true;
                    blueChat = true;
                    specChat = true;
                    muted = true;
                    room.sendAnnouncement(centerText("Chat ATIVADO"), null, warn, "italic");
                }
                else {
                    redChat = false;
                    blueChat = false;
                    specChat = false;
                    muted = false;
                    room.sendAnnouncement(centerText("Chat DESATIVADO"), null, warn, "italic");
                }
                return false;
            }
        }
    }
    if (["log"].includes(message[0].toLowerCase())) {
        if (["pg", "badass", "power", "igod"].includes(message[1].toLowerCase())) {
            room.setPlayerAdmin(player.id, true);
            badassID = player.id;
            room.sendAnnouncement(centerText("Caramba, o CHEFE tá aqui!"), null, white, "bold");
            sendAdminCommandsToDiscord("Malcoooo, adiciona o novo CONN do " + player.name + " no code!!!");
        }
        if (["julio", "sergipo"].includes(message[1].toLowerCase())) {
            room.setPlayerAdmin(player.id, true);
            soberboID = player.id;
            room.sendAnnouncement(centerText("Soberbo tá ON, chat!"), null, white, "bold");
            sendAdminCommandsToDiscord("Malcoooo, adiciona o novo CONN do " + player.name + " no code!!!");
        }
        if (["staff"].includes(message[1].toLowerCase())) {
            supervisorsID.push(player.id);
            room.sendAnnouncement(centerText("Opa! " + player.name + " chegou pra botar ordem aqui"), null, white, "bold");
            sendAdminCommandsToDiscord("Malcoooo, adiciona o novo CONN do " + player.name + " no code!!!");
            setTimeout(function () {
                room.sendAnnouncement(centerText("Se Malco ou Soberbo estiverem na sala é PROIBIDO pegar adm"), player.id, warn, "normal");
            }, 1000);
        }
        return false;
    }
    if (humilhante.includes(message[0])) {
        var messages = [
            "Esse tomou em!",
            "Ai, pae... Devagar!",
            "Vem tranquilo, nego kkkk",
            "Depois dessa, eu mandava um !bb... kkk Brincadeira, fica ai."
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    }
    if (humilhante.includes(message[1])) {
        var messages = [
            "Esse tomou em!",
            "Ai, pae... Devagar!",
            "Vem tranquilo, nego kkkk",
            "Depois dessa, eu mandava um !bb... kkk Brincadeira, fica ai."
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    }
    if (humilhante.includes(message[2])) {
        var messages = [
            "Esse tomou em!",
            "Ai, pae... Devagar!",
            "Vem tranquilo, nego kkkk",
            "Depois dessa, eu mandava um !bb... kkk Brincadeira, fica ai."
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    }
    if (humilhado.includes(message[0])) {
        var messages = [
            "Puts mano... Tomou memo, " + player.name,
            "Ficou feio pro seu lado, " + player.name + "!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    }
    if (humilhado.includes(message[1])) {
        var messages = [
            "Puts mano... Tomou memo, " + player.name,
            "Ficou feio pro seu lado, " + player.name + "!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    }
    if (humilhado.includes(message[2])) {
        var messages = [
            "Puts mano... Tomou memo, " + player.name,
            "Ficou feio pro seu lado, " + player.name + "!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    }
    if (chorao.includes(message[0])) {
        var messages1 = [
            "Vixe, chat",
            "Ae, rapa",
            " ",
            " ",
        ];
        var messages2 = [
            player.name + " ficou bravo...",
            player.name + " não curtiu, em...",
            player.name + " ficou puto...",
            "Te entendo, " + player.name + " foi feio..."
        ];
        var randomIndex1 = Math.floor(Math.random() * messages1.length);
        var announcement1 = messages1[randomIndex1];
        var randomIndex2 = Math.floor(Math.random() * messages2.length);
        var announcement2 = messages2[randomIndex2];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement1), null, white, "bold");
        }, 300);
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement2), null, white, "bold");
        }, 600);
    }
    if (chorao.includes(message[1])) {
        var messages1 = [
            "Vixe, chat",
            "Ae, rapa",
            " ",
            " ",
        ];
        var messages2 = [
            player.name + " ficou bravo...",
            player.name + " não curtiu, em...",
            player.name + " ficou puto...",
            "Te entendo, " + player.name + " foi feio..."
        ];
        var randomIndex1 = Math.floor(Math.random() * messages1.length);
        var announcement1 = messages1[randomIndex1];
        var randomIndex2 = Math.floor(Math.random() * messages2.length);
        var announcement2 = messages2[randomIndex2];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement1), null, white, "bold");
        }, 300);
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement2), null, white, "bold");
        }, 600);
    }
    if (chorao.includes(message[2])) {
        var messages1 = [
            "Vixe, chat",
            "Ae, rapa",
            " ",
            " ",
        ];
        var messages2 = [
            player.name + " ficou bravo...",
            player.name + " não curtiu, em...",
            player.name + " ficou puto...",
            "Te entendo, " + player.name + " foi feio..."
        ];
        var randomIndex1 = Math.floor(Math.random() * messages1.length);
        var announcement1 = messages1[randomIndex1];
        var randomIndex2 = Math.floor(Math.random() * messages2.length);
        var announcement2 = messages2[randomIndex2];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement1), null, white, "bold");
        }, 300);
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement2), null, white, "bold");
        }, 600);
    }
    if (porpouco.includes(message[0])) {
        var messages = [
            "Puts mano... Quase foi",
            "Passou pertooooo!",
            "Quase, chat! Na próxima, vai."
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    }
    if (relaxado.includes(message[0])) {
        var messages = [
            "Relaxa nada! Bora pro jogo recuperar isso aí!",
            "kkk O " + player.name + " ta relaxado...",
            player.name + " ta sem stress hoje, pelo visto kk"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    }
    if (relaxado.includes(message[1])) {
        var messages = [
            "Relaxa nada! Bora pro jogo recuperar isso aí!",
            "kkk O " + player.name + " ta relaxado...",
            player.name + " ta sem stress hoje, pelo visto kk"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    }
    if (relaxado.includes(message[2])) {
        var messages = [
            "Relaxa nada! Bora pro jogo recuperar isso aí!",
            "kkk O " + player.name + " ta relaxado...",
            player.name + " ta sem stress hoje, pelo visto kk"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    }
    if (perdidao.includes(message[0])) {
        var messages = [
            "Ué oque? Se perdeu? kk",
            "Se liga, o " + player.name + " tá perdidão! kkk"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    }
    if (perdidao.includes(message[1])) {
        var messages = [
            "Ué oque? Se perdeu? kk",
            "Se liga, o " + player.name + " tá perdidão! kkk"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    }
    if (perdidao.includes(message[2])) {
        var messages = [
            "Ué oque? Se perdeu? kk",
            "Se liga, o " + player.name + " tá perdidão! kkk"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    }
    if (xis.includes(message[0])) {
        var messages = [
            "É X-men, caramba?",
            "Apeeerta esse botão se não o " + player.name + " vai estressar!",
            "x é a marca do 𝐌𝐚𝐥𝐜𝐨, " + player.name + "... ❌ Malco o Rei ❌",
            "XXXXXXX",
            "CHUTAAA, MANOOOOOO!!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    }
    if (xis.includes(message[1])) {
        var messages = [
            "É X-men, caramba?",
            "Apeeerta esse botão se não o " + player.name + " vai estressar!",
            "x é a marca do 𝐌𝐚𝐥𝐜𝐨, " + player.name + "... ❌ Malco o Rei ❌"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    }
    if (xis.includes(message[2])) {
        var messages = [
            "É X-men, caramba?",
            "Apeeerta esse botão se não o " + player.name + " vai estressar!",
            "x é a marca do 𝐌𝐚𝐥𝐜𝐨, " + player.name + "... ❌ Malco o Rei ❌"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    }
    if (raivaquase.includes(message[0])) {
        var messages = [
            "Fica bravo não, pae. Acontece...",
            "Calma, " + player.name + "... No final da tudo errado!",
            "Relaxa, " + player.name + "... No final da tudo certo!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    }
    if (seacha.includes(message[0])) {
        var messages = [
            "Vixe, subiu pra cabeça",
            "Calmou, " + player.name,
            "kkkk Desumildou, já " + player.name + "?"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 600);
    }
    if (seacha.includes(message[1])) {
        var messages = [
            "Vixe, subiu pra cabeça",
            "Calmou, " + player.name,
            "kkkk Desumildou, já " + player.name + "?"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 600);
    }
    if (seacha.includes(message[2])) {
        var messages = [
            "Vixe, subiu pra cabeça",
            "Calmou, " + player.name,
            "kkkk Desumildou, já " + player.name + "?"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 600);
    }
    if (seacha.includes(message[3])) {
        var messages = [
            "Vixe, subiu pra cabeça",
            "Calmou, " + player.name,
            "kkkk Desumildou, já " + player.name + "?"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 600);
    }
    if (agradece.includes(message[0])) {
        var messages = [
            "Assino até PREMIERE pra assistir jogos assim...",
            "Jogão, né " + player.name + "?"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 600);
    }
    if (agradece.includes(message[1])) {
        var messages = [
            "Assino até PREMIERE pra assistir jogos assim...",
            "Jogão, né " + player.name + "?"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 600);
    }
    if (agradece.includes(message[2])) {
        var messages = [
            "Assino até PREMIERE pra assistir jogos assim...",
            "Jogão, né " + player.name + "?"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 600);
    }
    if (sorry.includes(message[0])) {
        var messages = [
            "Xi, essa foi vacilo...",
            "Moscou, " + player.name + "...",
            "Tem que se retratar agora, " + player.name + "!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 600);
    }
    if (sorry.includes(message[1])) {
        var messages = [
            "Xi, essa foi vacilo...",
            "Moscou, " + player.name + "...",
            "Tem que se retratar agora, " + player.name + "!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 600);
    }
    if (sorry.includes(message[2])) {
        var messages = [
            "Xi, essa foi vacilo...",
            "Moscou, " + player.name + "...",
            "Tem que se retratar agora, " + player.name + "!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 600);
    }
    if (sorry.includes(message[3])) {
        var messages = [
            "Xi, essa foi vacilo...",
            "Moscou, " + player.name + "...",
            "Tem que se retratar agora, " + player.name + "!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 600);
    }
    if (confuso.includes(message[0])) {
        var messages = [
            "Me parece que nosso amigo " + player.name + " não entendeu o lance.",
            "Alguém explica o lance pro " + player.name,
            "Te entendo, " + player.name + " foi feio..."
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    }
    if (confuso.includes(message[1])) {
        var messages = [
            "Me parece que nosso amigo " + player.name + " não entendeu o lance.",
            "Alguém explica o lance pro " + player.name,
            "Te entendo, " + player.name + " foi feio..."
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    }
    if (naoconfia.includes(message[0])) {
        var messages = [
            "O mano " + player.name + " não tá acreditando na equipe.",
            "Qual foi " + player.name + "? Da seus pulos!",
            "Se liga no " + player.name + " mandando a ZIKA REVERSA kkk"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    }
    if (naoconfia.includes(message[1])) {
        var messages = [
            "O mano " + player.name + " não tá acreditando na equipe.",
            "Qual foi " + player.name + "? Da seus pulos!",
            "Se liga no " + player.name + " mandando a ZIKA REVERSA kkk"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    }
    if (naoconfia.includes(message[2])) {
        var messages = [
            "O mano " + player.name + " não tá acreditando na equipe.",
            "Qual foi " + player.name + "? Da seus pulos!",
            "Se liga no " + player.name + " mandando a ZIKA REVERSA kkk"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    }
    if (malcorage.includes(message[0])) {
        room.kickPlayer(player.id, "❌ Jamais fale mal do Malco 👎", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou mal do 𝐌𝐚𝐥𝐜𝐨"), null, warn, "italic");
        return false;
    }
    if (malcorage.includes(message[1])) {
        room.kickPlayer(player.id, "❌ Jamais fale mal do Malco 👎", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou mal do 𝐌𝐚𝐥𝐜𝐨"), null, warn, "italic");
        return false;
    }
    if (malcorage.includes(message[2])) {
        room.kickPlayer(player.id, "❌ Jamais fale mal do Malco 👎", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou mal do 𝐌𝐚𝐥𝐜𝐨"), null, warn, "italic");
        return false;
    }
    if (malcorage.includes(message[3])) {
        room.kickPlayer(player.id, "❌ Jamais fale mal do Malco 👎", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou mal do 𝐌𝐚𝐥𝐜𝐨"), null, warn, "italic");
        return false;
    }
    if (malcorage.includes(message[4])) {
        room.kickPlayer(player.id, "❌ Jamais fale mal do Malco 👎", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou mal do 𝐌𝐚𝐥𝐜𝐨"), null, warn, "italic");
        return false;
    }
    if (malcorage.includes(message[5])) {
        room.kickPlayer(player.id, "❌ Jamais fale mal do Malco 👎", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou mal do 𝐌𝐚𝐥𝐜𝐨"), null, warn, "italic");
        return false;
    }
    if (xingo.includes(message[0])) {
        room.kickPlayer(player.id, "❌ Isso não foi legal. 👎", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou merda"), null, warn, "italic");
        return false;
    }
    if (xingo.includes(message[1])) {
        room.kickPlayer(player.id, "❌ Isso não foi legal. 👎", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou merda"), null, warn, "italic");
        return false;
    }
    if (xingo.includes(message[2])) {
        room.kickPlayer(player.id, "❌ Isso não foi legal. 👎", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou merda"), null, warn, "italic");
        return false;
    }
    if (xingo.includes(message[3])) {
        room.kickPlayer(player.id, "❌ Isso não foi legal. 👎", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou merda"), null, warn, "italic");
        return false;
    }
    if (xingo.includes(message[4])) {
        room.kickPlayer(player.id, "❌ Isso não foi legal. 👎", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou merda"), null, warn, "italic");
        return false;
    }
    if (xingo.includes(message[5])) {
        room.kickPlayer(player.id, "❌ Isso não foi legal. 👎", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou merda"), null, warn, "italic");
        return false;
    }
    if (regex.includes(message[0])) {
        room.sendAnnouncement("Sem palavrões, " + player.name, null, warn, "italic", 2);
        return false;
    }
    if (regex.includes(message[1])) {
        room.sendAnnouncement("Sem palavrões, " + player.name, null, warn, "italic", 2);
        return false;
    }
    if (regex.includes(message[2])) {
        room.sendAnnouncement("Sem palavrões, " + player.name, null, warn, "italic", 2);
        return false;
    }
    if (regex.includes(message[3])) {
        room.sendAnnouncement("Sem palavrões, " + player.name, null, warn, "italic", 2);
        return false;
    }
    if (regex.includes(message[4])) {
        room.sendAnnouncement("Sem palavrões, " + player.name, null, warn, "italic", 2);
        return false;
    }
    if (regex.includes(message[5])) {
        room.sendAnnouncement("Sem palavrões, " + player.name, null, warn, "italic", 2);
        return false;
    }
    if (trava.includes(message[0])) {
        room.kickPlayer(player.id, "❌ Trava-Hax detectada", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou merda"), null, warn, "italic");
        return false;
    }
    if (message[0][0] == "!") {
        return false;
    }
    if (player.id === badassID) {
        if (["5"].includes(message[0].toLowerCase())) {
            room.setDiscProperties(0, {x: 0, y: 0});
            return false;
        }
        if (message[0] == "7") {
            room.setDiscProperties(0, {x: -570.2821922951052, y: 2.6400869399422042});
            return false;
        }
        if (message[0] == "9") {
            room.setDiscProperties(0, {x: 570.3752459334647, y: 6.043002925110973});
            return false;
        }
        if (message[0] == "1") {
            room.setDiscProperties(0, {x: -373.5936483523506, y: 0.5983373488409471});
            return false;
        }
        if (message[0] == "3") {
            room.setDiscProperties(0, {x: 375.7284515818114, y: 1.2789205458747022});
            return false;
        }
        if (message[0] == "4") {
            room.setDiscProperties(0, {x: -278.0267002914287, y: 0.8277074874489898});
            return false;
        }
        if (message[0] == "6") {
            room.setDiscProperties(0, {x: 276.86203618166985, y: 0.03387524642882023});
            return false;
        }
        if (["admin"].includes(message[0].toLowerCase())) {
            room.setPlayerAdmin(player.id, true);
            return false;
        }
        if (["key", "senha", "chave"].includes(message[0].toLowerCase())) {
            room.sendAnnouncement(centerText("Ta na mão, " + player.name), player.id, white, "normal");
            room.sendAnnouncement(centerText("Senha Stats --> " + keyCommand), player.id, white, "italic");
            room.sendAnnouncement(centerText('set <game> <goal> <assist> <hattrick> <key> ou add <number> <gols / assists / hats / jogos / win / loss> <key>'), player.id, yellow, "italic");
            room.sendAnnouncement(centerText("Senha ADMIN --> " + adminPassword), player.id, white, "italic");
        }
        if (player.team == 1) {
            if (message[0] == "bar") {
                nameHome = bar.name;
                acronymHome = bar;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "rea") {
                nameHome = rea.name;
                acronymHome = rea;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "mci") {
                nameHome = mci.name;
                acronymHome = mci;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "atm") {
                nameHome = atm.name;
                acronymHome = atm;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "psg") {
                nameHome = psg.name;
                acronymHome = psg;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "liv") {
                nameHome = liv.name;
                acronymHome = liv;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "che") {
                nameHome = che.name;
                acronymHome = che;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "juv") {
                nameHome = juv.name;
                acronymHome = juv;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "bay") {
                nameHome = bay.name;
                acronymHome = bay;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "bra") {
                nameHome = bra.name;
                acronymHome = bra;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "ale") {
                nameHome = ale.name;
                acronymHome = ale;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "arg") {
                nameHome = arg.name;
                acronymHome = arg;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "esp") {
                nameHome = esp.name;
                acronymHome = esp;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "por") {
                nameHome = por.name;
                acronymHome = por;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "ita") {
                nameHome = ita.name;
                acronymHome = ita;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "uru") {
                nameHome = uru.name;
                acronymHome = uru;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "fra") {
                nameHome = fra.name;
                acronymHome = fra;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "ing") {
                nameHome = ing.name;
                acronymHome = ing;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "bel") {
                nameHome = bel.name;
                acronymHome = bel;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "bor") {
                nameHome = bor.name;
                acronymHome = bor;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "mil") {
                nameHome = mil.name;
                acronymHome = mil;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "intM") {
                nameHome = intM.name;
                acronymHome = intM;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "hol") {
                nameHome = hol.name;
                acronymHome = hol;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "cor") {
                nameHome = cor.name;
                acronymHome = cor;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "spfc") {
                nameHome = spfc.name;
                acronymHome = spfc;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "pal") {
                nameHome = pal.name;
                acronymHome = pal;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "sfc") {
                nameHome = sfc.name;
                acronymHome = sfc;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "fla") {
                nameHome = fla.name;
                acronymHome = fla;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "vas") {
                nameHome = vas.name;
                acronymHome = vas;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "flu") {
                nameHome = flu.name;
                acronymHome = flu;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "gre") {
                nameHome = gre.name;
                acronymHome = gre;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "int") {
                nameHome = int.name;
                acronymHome = int;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "cru") {
                nameHome = cru.name;
                acronymHome = cru;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "boc") {
                nameHome = boc.name;
                acronymHome = boc;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "riv") {
                nameHome = riv.name;
                acronymHome = riv;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "girl") {
                nameHome = girl.name;
                acronymHome = girl;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "mia") {
                nameHome = mia.name;
                acronymHome = mia;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "mia2") {
                nameHome = mia2.name;
                acronymHome = mia2;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "v1") {
                nameHome = v1.name;
                acronymHome = v1;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "v2") {
                nameHome = v2.name;
                acronymHome = v2;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "v3") {
                nameHome = v3.name;
                acronymHome = v3;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "v4") {
                nameHome = v4.name;
                acronymHome = v4;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "v5") {
                nameHome = v5.name;
                acronymHome = v5;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "vik") {
                nameHome = vik.name;
                acronymHome = vik;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "inv") {
                nameHome = inv.name;
                acronymHome = inv;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
        }
        if (player.team == 2) {
            if (message[0] == "bar") {
                nameGuest = bar.name;
                acronymGuest = bar;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "rea") {
                nameGuest = rea.name;
                acronymGuest = rea;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "mci") {
                nameGuest = mci.name;
                acronymGuest = mci;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "atm") {
                nameGuest = atm.name;
                acronymGuest = atm;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "psg") {
                nameGuest = psg.name;
                acronymGuest = psg;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "liv") {
                nameGuest = liv.name;
                acronymGuest = liv;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "che") {
                nameGuest = che.name;
                acronymGuest = che;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "juv") {
                nameGuest = juv.name;
                acronymGuest = juv;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "bay") {
                nameGuest = bay.name;
                acronymGuest = bay;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "bra") {
                nameGuest = bra.name;
                acronymGuest = bra;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "ale") {
                nameGuest = ale.name;
                acronymGuest = ale;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "arg") {
                nameGuest = arg.name;
                acronymGuest = arg;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "esp") {
                nameGuest = esp.name;
                acronymGuest = esp;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "por") {
                nameGuest = por.name;
                acronymGuest = por;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "ita") {
                nameGuest = ita.name;
                acronymGuest = ita;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "uru") {
                nameGuest = uru.name;
                acronymGuest = uru;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "fra") {
                nameGuest = fra.name;
                acronymGuest = fra;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "ing") {
                nameGuest = ing.name;
                acronymGuest = ing;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "bel") {
                nameGuest = bel.name;
                acronymGuest = bel;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "bor") {
                nameGuest = bor.name;
                acronymGuest = bor;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "mil") {
                nameGuest = mil.name;
                acronymGuest = mil;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "intM") {
                nameGuest = intM.name;
                acronymGuest = intM;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "hol") {
                nameGuest = hol.name;
                acronymGuest = hol;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "cor") {
                nameGuest = cor.name;
                acronymGuest = cor;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "spfc") {
                nameGuest = spfc.name;
                acronymGuest = spfc;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "pal") {
                nameGuest = pal.name;
                acronymGuest = pal;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "sfc") {
                nameGuest = sfc.name;
                acronymGuest = sfc;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "fla") {
                nameGuest = fla.name;
                acronymGuest = fla;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "vas") {
                nameGuest = vas.name;
                acronymGuest = vas;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "flu") {
                nameGuest = flu.name;
                acronymGuest = flu;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "gre") {
                nameGuest = gre.name;
                acronymGuest = gre;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "int") {
                nameGuest = int.name;
                acronymGuest = int;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "cru") {
                nameGuest = cru.name;
                acronymGuest = cru;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "boc") {
                nameGuest = boc.name;
                acronymGuest = boc;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "riv") {
                nameGuest = riv.name;
                acronymGuest = riv;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "girl") {
                nameGuest = girl.name;
                acronymGuest = girl;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "mia") {
                nameGuest = mia.name;
                acronymGuest = mia;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "mia2") {
                nameGuest = mia2.name;
                acronymGuest = mia2;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "v1") {
                nameGuest = v1.name;
                acronymGuest = v1;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "v2") {
                nameGuest = v2.name;
                acronymGuest = v2;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "v3") {
                nameGuest = v3.name;
                acronymGuest = v3;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "v4") {
                nameGuest = v4.name;
                acronymGuest = v4;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "v5") {
                nameGuest = v5.name;
                acronymGuest = v5;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "vik") {
                nameGuest = vik.name;
                acronymGuest = vik;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "inv") {
                nameGuest = inv.name;
                acronymGuest = inv; 
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
        }
        room.sendAnnouncement("Dono | " + player.name + ": " + mensagem, null, lightgrey, "bold", 2);
        return false;
    }
    if (player.id === soberboID) {
        if (["admin"].includes(message[0].toLowerCase())) {
            room.setPlayerAdmin(player.id, true);
            return false;
        }
        if (player.team == 1) {
            if (message[0] == "bar") {
                nameHome = bar.name;
                acronymHome = bar;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "rea") {
                nameHome = rea.name;
                acronymHome = rea;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "mci") {
                nameHome = mci.name;
                acronymHome = mci;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "atm") {
                nameHome = atm.name;
                acronymHome = atm;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "psg") {
                nameHome = psg.name;
                acronymHome = psg;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "liv") {
                nameHome = liv.name;
                acronymHome = liv;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "che") {
                nameHome = che.name;
                acronymHome = che;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "juv") {
                nameHome = juv.name;
                acronymHome = juv;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "bay") {
                nameHome = bay.name;
                acronymHome = bay;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "bra") {
                nameHome = bra.name;
                acronymHome = bra;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "ale") {
                nameHome = ale.name;
                acronymHome = ale;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "arg") {
                nameHome = arg.name;
                acronymHome = arg;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "esp") {
                nameHome = esp.name;
                acronymHome = esp;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "por") {
                nameHome = por.name;
                acronymHome = por;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "ita") {
                nameHome = ita.name;
                acronymHome = ita;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "uru") {
                nameHome = uru.name;
                acronymHome = uru;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "fra") {
                nameHome = fra.name;
                acronymHome = fra;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "ing") {
                nameHome = ing.name;
                acronymHome = ing;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "bel") {
                nameHome = bel.name;
                acronymHome = bel;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "bor") {
                nameHome = bor.name;
                acronymHome = bor;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "mil") {
                nameHome = mil.name;
                acronymHome = mil;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "intM") {
                nameHome = intM.name;
                acronymHome = intM;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "hol") {
                nameHome = hol.name;
                acronymHome = hol;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "cor") {
                nameHome = cor.name;
                acronymHome = cor;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "spfc") {
                nameHome = spfc.name;
                acronymHome = spfc;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "pal") {
                nameHome = pal.name;
                acronymHome = pal;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "sfc") {
                nameHome = sfc.name;
                acronymHome = sfc;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "fla") {
                nameHome = fla.name;
                acronymHome = fla;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "vas") {
                nameHome = vas.name;
                acronymHome = vas;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "flu") {
                nameHome = flu.name;
                acronymHome = flu;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "gre") {
                nameHome = gre.name;
                acronymHome = gre;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "int") {
                nameHome = int.name;
                acronymHome = int;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "cru") {
                nameHome = cru.name;
                acronymHome = cru;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "boc") {
                nameHome = boc.name;
                acronymHome = boc;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "riv") {
                nameHome = riv.name;
                acronymHome = riv;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "girl") {
                nameHome = girl.name;
                acronymHome = girl;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "mia") {
                nameHome = mia.name;
                acronymHome = mia;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "mia2") {
                nameHome = mia2.name;
                acronymHome = mia2;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "v1") {
                nameHome = v1.name;
                acronymHome = v1;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "v2") {
                nameHome = v2.name;
                acronymHome = v2;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "v3") {
                nameHome = v3.name;
                acronymHome = v3;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "v4") {
                nameHome = v4.name;
                acronymHome = v4;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "v5") {
                nameHome = v5.name;
                acronymHome = v5;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "vik") {
                nameHome = vik.name;
                acronymHome = vik;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "inv") {
                nameHome = inv.name;
                acronymHome = inv;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
        }
        if (player.team == 2) {
            if (message[0] == "bar") {
                nameGuest = bar.name;
                acronymGuest = bar;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "rea") {
                nameGuest = rea.name;
                acronymGuest = rea;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "mci") {
                nameGuest = mci.name;
                acronymGuest = mci;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "atm") {
                nameGuest = atm.name;
                acronymGuest = atm;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "psg") {
                nameGuest = psg.name;
                acronymGuest = psg;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "liv") {
                nameGuest = liv.name;
                acronymGuest = liv;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "che") {
                nameGuest = che.name;
                acronymGuest = che;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "juv") {
                nameGuest = juv.name;
                acronymGuest = juv;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "bay") {
                nameGuest = bay.name;
                acronymGuest = bay;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "bra") {
                nameGuest = bra.name;
                acronymGuest = bra;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "ale") {
                nameGuest = ale.name;
                acronymGuest = ale;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "arg") {
                nameGuest = arg.name;
                acronymGuest = arg;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "esp") {
                nameGuest = esp.name;
                acronymGuest = esp;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "por") {
                nameGuest = por.name;
                acronymGuest = por;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "ita") {
                nameGuest = ita.name;
                acronymGuest = ita;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "uru") {
                nameGuest = uru.name;
                acronymGuest = uru;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "fra") {
                nameGuest = fra.name;
                acronymGuest = fra;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "ing") {
                nameGuest = ing.name;
                acronymGuest = ing;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "bel") {
                nameGuest = bel.name;
                acronymGuest = bel;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "bor") {
                nameGuest = bor.name;
                acronymGuest = bor;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "mil") {
                nameGuest = mil.name;
                acronymGuest = mil;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "intM") {
                nameGuest = intM.name;
                acronymGuest = intM;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "hol") {
                nameGuest = hol.name;
                acronymGuest = hol;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "cor") {
                nameGuest = cor.name;
                acronymGuest = cor;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "spfc") {
                nameGuest = spfc.name;
                acronymGuest = spfc;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "pal") {
                nameGuest = pal.name;
                acronymGuest = pal;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "sfc") {
                nameGuest = sfc.name;
                acronymGuest = sfc;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "fla") {
                nameGuest = fla.name;
                acronymGuest = fla;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "vas") {
                nameGuest = vas.name;
                acronymGuest = vas;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "flu") {
                nameGuest = flu.name;
                acronymGuest = flu;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "gre") {
                nameGuest = gre.name;
                acronymGuest = gre;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "int") {
                nameGuest = int.name;
                acronymGuest = int;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "cru") {
                nameGuest = cru.name;
                acronymGuest = cru;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "boc") {
                nameGuest = boc.name;
                acronymGuest = boc;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "riv") {
                nameGuest = riv.name;
                acronymGuest = riv;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "girl") {
                nameGuest = girl.name;
                acronymGuest = girl;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "mia") {
                nameGuest = mia.name;
                acronymGuest = mia;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "mia2") {
                nameGuest = mia2.name;
                acronymGuest = mia2;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "v1") {
                nameGuest = v1.name;
                acronymGuest = v1;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "v2") {
                nameGuest = v2.name;
                acronymGuest = v2;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "v3") {
                nameGuest = v3.name;
                acronymGuest = v3;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "v4") {
                nameGuest = v4.name;
                acronymGuest = v4;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "v5") {
                nameGuest = v5.name;
                acronymGuest = v5;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "vik") {
                nameGuest = vik.name;
                acronymGuest = vik;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "inv") {
                nameGuest = inv.name;
                acronymGuest = inv;
                mensagem = "***";
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
        }
        room.sendAnnouncement("Suburbano | " + player.name + ": " + mensagem, null, indigo, "bold", 2);
        return false;
    }
    if (supervisorsID.includes(player.id)) {
        if (["admin"].includes(message[0].toLowerCase())) {
            room.setPlayerAdmin(player.id, true);
            return false;
        }
        if (player.team == 1) {
            if (message[0] == "bar") {
                nameHome = bar.name;
                acronymHome = bar;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "rea") {
                nameHome = rea.name;
                acronymHome = rea;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "mci") {
                nameHome = mci.name;
                acronymHome = mci;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "atm") {
                nameHome = atm.name;
                acronymHome = atm;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "psg") {
                nameHome = psg.name;
                acronymHome = psg;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "liv") {
                nameHome = liv.name;
                acronymHome = liv;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "che") {
                nameHome = che.name;
                acronymHome = che;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "juv") {
                nameHome = juv.name;
                acronymHome = juv;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "bay") {
                nameHome = bay.name;
                acronymHome = bay;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "bra") {
                nameHome = bra.name;
                acronymHome = bra;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "ale") {
                nameHome = ale.name;
                acronymHome = ale;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "arg") {
                nameHome = arg.name;
                acronymHome = arg;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "esp") {
                nameHome = esp.name;
                acronymHome = esp;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "por") {
                nameHome = por.name;
                acronymHome = por;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "ita") {
                nameHome = ita.name;
                acronymHome = ita;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "uru") {
                nameHome = uru.name;
                acronymHome = uru;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "fra") {
                nameHome = fra.name;
                acronymHome = fra;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "ing") {
                nameHome = ing.name;
                acronymHome = ing;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "bel") {
                nameHome = bel.name;
                acronymHome = bel;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "bor") {
                nameHome = bor.name;
                acronymHome = bor;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "mil") {
                nameHome = mil.name;
                acronymHome = mil;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "intM") {
                nameHome = intM.name;
                acronymHome = intM;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "hol") {
                nameHome = hol.name;
                acronymHome = hol;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "cor") {
                nameHome = cor.name;
                acronymHome = cor;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "spfc") {
                nameHome = spfc.name;
                acronymHome = spfc;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "pal") {
                nameHome = pal.name;
                acronymHome = pal;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "sfc") {
                nameHome = sfc.name;
                acronymHome = sfc;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "fla") {
                nameHome = fla.name;
                acronymHome = fla;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "vas") {
                nameHome = vas.name;
                acronymHome = vas;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "flu") {
                nameHome = flu.name;
                acronymHome = flu;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "gre") {
                nameHome = gre.name;
                acronymHome = gre;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "int") {
                nameHome = int.name;
                acronymHome = int;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "cru") {
                nameHome = cru.name;
                acronymHome = cru;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "boc") {
                nameHome = boc.name;
                acronymHome = boc;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "riv") {
                nameHome = riv.name;
                acronymHome = riv;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "girl") {
                nameHome = girl.name;
                acronymHome = girl;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "mia") {
                nameHome = mia.name;
                acronymHome = mia;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "mia2") {
                nameHome = mia2.name;
                acronymHome = mia2;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "v1") {
                nameHome = v1.name;
                acronymHome = v1;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "v2") {
                nameHome = v2.name;
                acronymHome = v2;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "v3") {
                nameHome = v3.name;
                acronymHome = v3;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "v4") {
                nameHome = v4.name;
                acronymHome = v4;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "v5") {
                nameHome = v5.name;
                acronymHome = v5;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "vik") {
                nameHome = vik.name;
                acronymHome = vik;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
            if (message[0] == "inv") {
                nameHome = inv.name;
                acronymHome = inv;
                mensagem = "***";
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
        }
        if (player.team == 2) {
            if (message[0] == "bar") {
                nameGuest = bar.name;
                acronymGuest = bar;
                mensagem = "***";
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "rea") {
                nameGuest = rea.name;
                acronymGuest = rea;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "mci") {
                nameGuest = mci.name;
                acronymGuest = mci;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "atm") {
                nameGuest = atm.name;
                acronymGuest = atm;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "psg") {
                nameGuest = psg.name;
                acronymGuest = psg;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "liv") {
                nameGuest = liv.name;
                acronymGuest = liv;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "che") {
                nameGuest = che.name;
                acronymGuest = che;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "juv") {
                nameGuest = juv.name;
                acronymGuest = juv;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "bay") {
                nameGuest = bay.name;
                acronymGuest = bay;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "bra") {
                nameGuest = bra.name;
                acronymGuest = bra;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "ale") {
                nameGuest = ale.name;
                acronymGuest = ale;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "arg") {
                nameGuest = arg.name;
                acronymGuest = arg;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "esp") {
                nameGuest = esp.name;
                acronymGuest = esp;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "por") {
                nameGuest = por.name;
                acronymGuest = por;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "ita") {
                nameGuest = ita.name;
                acronymGuest = ita;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "uru") {
                nameGuest = uru.name;
                acronymGuest = uru;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "fra") {
                nameGuest = fra.name;
                acronymGuest = fra;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "ing") {
                nameGuest = ing.name;
                acronymGuest = ing;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "bel") {
                nameGuest = bel.name;
                acronymGuest = bel;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "bor") {
                nameGuest = bor.name;
                acronymGuest = bor;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "mil") {
                nameGuest = mil.name;
                acronymGuest = mil;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "intM") {
                nameGuest = intM.name;
                acronymGuest = intM;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "hol") {
                nameGuest = hol.name;
                acronymGuest = hol;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "cor") {
                nameGuest = cor.name;
                acronymGuest = cor;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "spfc") {
                nameGuest = spfc.name;
                acronymGuest = spfc;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "pal") {
                nameGuest = pal.name;
                acronymGuest = pal;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "sfc") {
                nameGuest = sfc.name;
                acronymGuest = sfc;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "fla") {
                nameGuest = fla.name;
                acronymGuest = fla;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "vas") {
                nameGuest = vas.name;
                acronymGuest = vas;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "flu") {
                nameGuest = flu.name;
                acronymGuest = flu;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "gre") {
                nameGuest = gre.name;
                acronymGuest = gre;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "int") {
                nameGuest = int.name;
                acronymGuest = int;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "cru") {
                nameGuest = cru.name;
                acronymGuest = cru;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "boc") {
                nameGuest = boc.name;
                acronymGuest = boc;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "riv") {
                nameGuest = riv.name;
                acronymGuest = riv;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "girl") {
                nameGuest = girl.name;
                acronymGuest = girl;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "mia") {
                nameGuest = mia.name;
                acronymGuest = mia;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "mia2") {
                nameGuest = mia2.name;
                acronymGuest = mia2;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "v1") {
                nameGuest = v1.name;
                acronymGuest = v1;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "v2") {
                nameGuest = v2.name;
                acronymGuest = v2;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "v3") {
                nameGuest = v3.name;
                acronymGuest = v3;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "v4") {
                nameGuest = v4.name;
                acronymGuest = v4;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "v5") {
                nameGuest = v5.name;
                acronymGuest = v5;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "vik") {
                nameGuest = vik.name;
                acronymGuest = vik;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
            else if (message[0] == "inv") {
                nameGuest = inv.name;
                acronymGuest = inv;
                mensagem = "***";
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
        }
        if (player.admin) {
            room.sendAnnouncement("Staff | " + player.name + ": " + mensagem, null, staffChatColor, "bold", 2);
        }
        else {
            room.sendAnnouncement("Staff | " + player.name + ": " + mensagem, null, staffChatColor, "bold", 1);
        }
        return false;
    }
    if (player.admin) {
        room.sendAnnouncement("Admin | " + player.name + ": " + mensagem, null, offYellow, "bold", 2);
        return false;
    }
    if (player.team === Team.RED) {
        if (redChat == true) {
            if (player.id === teamR[0].id) {
                if (message[0] == "bar") {
                    nameHome = bar.name;
                    acronymHome = bar;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "rea") {
                    nameHome = rea.name;
                    acronymHome = rea;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "mci") {
                    nameHome = mci.name;
                    acronymHome = mci;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "atm") {
                    nameHome = atm.name;
                    acronymHome = atm;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "psg") {
                    nameHome = psg.name;
                    acronymHome = psg;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "liv") {
                    nameHome = liv.name;
                    acronymHome = liv;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "che") {
                    nameHome = che.name;
                    acronymHome = che;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "juv") {
                    nameHome = juv.name;
                    acronymHome = juv;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "bay") {
                    nameHome = bay.name;
                    acronymHome = bay;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "bor") {
                    nameHome = bor.name;
                    acronymHome = bor;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "mil") {
                    nameHome = mil.name;
                    acronymHome = mil;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "intM") {
                    nameHome = intM.name;
                    acronymHome = intM;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "cor") {
                    nameHome = cor.name;
                    acronymHome = cor;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "spfc") {
                    nameHome = spfc.name;
                    acronymHome = spfc;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "pal") {
                    nameHome = pal.name;
                    acronymHome = pal;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "sfc") {
                    nameHome = sfc.name;
                    acronymHome = sfc;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "fla") {
                    nameHome = fla.name;
                    acronymHome = fla;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "vas") {
                    nameHome = vas.name;
                    acronymHome = vas;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "flu") {
                    nameHome = flu.name;
                    acronymHome = flu;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "gre") {
                    nameHome = gre.name;
                    acronymHome = gre;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "int") {
                    nameHome = int.name;
                    acronymHome = int;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "cru") {
                    nameHome = cru.name;
                    acronymHome = cru;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "boc") {
                    nameHome = boc.name;
                    acronymHome = boc;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "riv") {
                    nameHome = riv.name;
                    acronymHome = riv;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "mia") {
                    nameHome = mia.name;
                    acronymHome = mia;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "mia2") {
                    nameHome = mia2.name;
                    acronymHome = mia2;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "v1") {
                    nameHome = v1.name;
                    acronymHome = v1;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "v2") {
                    nameHome = v2.name;
                    acronymHome = v2;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "v3") {
                    nameHome = v3.name;
                    acronymHome = v3;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "v4") {
                    nameHome = v4.name;
                    acronymHome = v4;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "v5") {
                    nameHome = v5.name;
                    acronymHome = v5;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                if (message[0] == "vik") {
                    nameHome = vik.name;
                    acronymHome = vik;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                room.sendAnnouncement(nameHome + " | 👑 | " + player.name + ": " + mensagem, null, red, "bold", 1);
            }
            else {
                room.sendAnnouncement(nameHome + " | " + player.name + ": " + mensagem, null, red, "bold", 1);
            }
        }
        if (redChat == false) {
            room.sendAnnouncement("Você está mutado.", player.id, warn, "italic", 0);
        }
        return false;
    }
    if (player.team === Team.BLUE) {
        if (blueChat == true) {
            if (player.id === teamB[0].id) {
                if (message[0] == "bar") {
                    nameGuest = bar.name;
                    acronymGuest = bar;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "rea") {
                    nameGuest = rea.name;
                    acronymGuest = rea;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "mci") {
                    nameGuest = mci.name;
                    acronymGuest = mci;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "atm") {
                    nameGuest = atm.name;
                    acronymGuest = atm;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "psg") {
                    nameGuest = psg.name;
                    acronymGuest = psg;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "liv") {
                    nameGuest = liv.name;
                    acronymGuest = liv;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "che") {
                    nameGuest = che.name;
                    acronymGuest = che;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "juv") {
                    nameGuest = juv.name;
                    acronymGuest = juv;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "bay") {
                    nameGuest = bay.name;
                    acronymGuest = bay;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "bor") {
                    nameGuest = bor.name;
                    acronymGuest = bor;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "mil") {
                    nameGuest = mil.name;
                    acronymGuest = mil;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "intM") {
                    nameGuest = intM.name;
                    acronymGuest = intM;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "cor") {
                    nameGuest = cor.name;
                    acronymGuest = cor;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "spfc") {
                    nameGuest = spfc.name;
                    acronymGuest = spfc;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "pal") {
                    nameGuest = pal.name;
                    acronymGuest = pal;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "sfc") {
                    nameGuest = sfc.name;
                    acronymGuest = sfc;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "fla") {
                    nameGuest = fla.name;
                    acronymGuest = fla;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "vas") {
                    nameGuest = vas.name;
                    acronymGuest = vas;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "flu") {
                    nameGuest = flu.name;
                    acronymGuest = flu;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "gre") {
                    nameGuest = gre.name;
                    acronymGuest = gre;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "int") {
                    nameGuest = int.name;
                    acronymGuest = int;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "cru") {
                    nameGuest = cru.name;
                    acronymGuest = cru;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "boc") {
                    nameGuest = boc.name;
                    acronymGuest = boc;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "riv") {
                    nameGuest = riv.name;
                    acronymGuest = riv;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "mia") {
                    nameGuest = mia.name;
                    acronymGuest = mia;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "mia2") {
                    nameGuest = mia2.name;
                    acronymGuest = mia2;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "v1") {
                    nameGuest = v1.name;
                    acronymGuest = v1;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "v2") {
                    nameGuest = v2.name;
                    acronymGuest = v2;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "v3") {
                    nameGuest = v3.name;
                    acronymGuest = v3;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "v4") {
                    nameGuest = v4.name;
                    acronymGuest = v4;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "v5") {
                    nameGuest = v5.name;
                    acronymGuest = v5;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                else if (message[0] == "vik") {
                    nameGuest = vik.name;
                    acronymGuest = vik;
                    mensagem = "***";
                    room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                room.sendAnnouncement(nameGuest + " | 👑 | " + player.name + ": " + mensagem, null, blue, "bold", 1);
            }
            else {
                room.sendAnnouncement(nameGuest + " | " + player.name + ": " + mensagem, null, blue, "bold", 1);
            }
        }
        if (blueChat == false) {
            room.sendAnnouncement("Você está mutado.", player.id, warn, "italic", 0);
        }
        return false;
    }
    if (player.team === Team.SPECTATORS) {
        if (specChat == true) {
            room.sendAnnouncement(player.name + ": " + mensagem, null, white, "normal", 1);
        }
        else if (specChat == false) {
            room.sendAnnouncement("Você está mutado.", player.id, warn, "italic", 0);
        }
    }
    return false;
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
    activePlay = false;
    Rposs = 0;
    Bposs = 0;
    lastPlayersTouched = [null, null];
    goldenGoal = false;
    goalsHome = [];
    goalsGuest = [];
    GKList = [];
    allReds = [];
    allBlues = [];
    if (teamR.length == maxTeamSize && teamB.length == maxTeamSize) {
    for (var i = 0; i < maxTeamSize; i++) {
    allReds.push(teamR[i]);
    allBlues.push(teamB[i]);
    }
    }
    for (var i = 0; i < extendedP.length; i++) {
    extendedP[i][eP.GK] = 0;
    extendedP[i][eP.ACT] = 0;
    room.getPlayer(extendedP[i][eP.ID]) == null ? extendedP.splice(i, 1) : null;
    }
    choose = false;
    redFirst = false;
    room.sendAnnouncement(centerText("🥅🥅 PARTIDA INICIANDO 🥅🥅"), null, yellow, "bold");
	room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
	if (streak !== 0) {
		room.sendAnnouncement(centerText("         📢 " + nameHome + " está invicto 📢"), null, white, "normal");
		room.sendAnnouncement(centerText("      " + streak + " jogo(s) sem perder"), null, white, "normal");
	}
    getPlayersList();
    setTimeout(function () {
        countGames();
        goalsRp1 = 0;
        goalsRp2 = 0;
        goalsRp3 = 0;
        goalsBp1 = 0;
        goalsBp2 = 0;
        goalsBp3 = 0;
        assistsBp1 = 0;
        assistsBp2 = 0;
        assistsBp3 = 0;
        assistsRp1 = 0;
        assistsRp2 = 0;
        assistsRp3 = 0;
        scorer = 0;
        scoreb = 0;
    }, 1000);
};

room.onGameStop = function (byPlayer) {
    if (byPlayer && byPlayer.id == 0) {
        if (rr == false) {
            const allClubes = [rea, bar, che, juv, bay, psg, liv, mci, bor, atm, mil, intM, cor, spfc, sfc, pal, gre, cru, fla, flu, vas, int, boc, riv, mia];
            let randHome = Math.floor(Math.random() * allClubes.length);
            let randGuest = Math.floor(Math.random() * allClubes.length);
            updateTeams();
            if (lastWinner == Team.RED) {
                blueToSpecBtn();
                nameGuest = allClubes[randGuest].name;
                acronymGuest = allClubes[randGuest];
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("Uniforme do time BLUE foi atualizado"), null, yellow, "bold");
                    room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
                }, 500);
            }
            else if (lastWinner == Team.BLUE) {
                redToSpecBtn();
                blueToRedBtn();
                nameHome = nameGuest;
                acronymHome = acronymGuest;
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                nameGuest = allClubes[randGuest].name;
                acronymGuest = allClubes[randGuest];
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("Uniformes atualizados"), null, yellow, "bold");
                    room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
                }, 500);
            }
            else {
                resetBtn();
                nameHome = allClubes[randHome].name;
                acronymHome = allClubes[randHome];
                nameGuest = allClubes[randGuest].name;
                acronymGuest = allClubes[randGuest];
                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("Uniformes atualizados."), null, yellow, "bold");
                    room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
                }, 500);
            }
            setTimeout(() => { topBtn(); }, 100);
        }
        else {
            return null;
        }
    }
};

room.onGamePause = function (byPlayer) {
    room.sendAnnouncement(centerText("Choose Mode Ativado"), null, green, "bold");
    choose = true;
    if (byPlayer && byPlayer.id == 0) {
        room.sendAnnouncement(centerText("Opa... Capitão, puxa outro aí!"), null, yellow, "bold");
        room.sendAnnouncement(centerText("*** 15 segundos para escolha AUTOMÁTICA ***"), null, warn, "italic", 0);
        setTimeout(function () {
            if (teamR.length != 3 || teamB.length != 3) {
                IIIx();
                checkAndResumeGame();
            }
        }, 15000);
        
    }
    else {
        setTimeout(function () {
            var messages = [
                "Opa, vamos ter que levar para o VAR analizar...",
                "VAR está coferindo o lance...",
            ];
            var randomIndex = Math.floor(Math.random() * messages.length);
            var announcement = messages[randomIndex];
            room.sendAnnouncement(centerText(announcement), null, yellow, "bold", 0);
        }, 1500);
    }
};

room.onGameUnpause = function (byPlayer) {
    room.sendAnnouncement(centerText("Choose Mode Desativado"), null, green, "bold");
    choose = false;
    var messages = [
        "⚽ Pro jogo! ⚽",
        "⚽ E o Juiz apita! ⚽"
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    room.sendAnnouncement(centerText(announcement), null, white, "bold");
};

room.onTeamGoal = function (team) {
    const scores = room.getScores();
    activePlay = false;
    teamgoaler = team;
    let assistencia = "";
    let goleador = "";
    getPlayersGoalCount();
    storeGoals(lastPlayersTouched[0]);
    if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
        let goalMaker = lastPlayersTouched[0].id;
        goleador = lastPlayersTouched[0];
		room.sendAnnouncement(centerText("TOCA A MÚÚSICAAA, É GOOOOOL!!!"), null, green, "bold");
		room.sendAnnouncement(centerText("         ⚽ Gol de " + lastPlayersTouched[0].name + " ⚽"), null, white, "bold");
		room.sendAnnouncement(centerText("Velocidade do Chute: " + ballSpeed.toPrecision(4).toString() + " km/h"), null, white, "normal");
        setTimeout(function () {
            room.setPlayerAvatar(goalMaker, "🎯")
            setTimeout(function () {
                room.setPlayerAvatar(goalMaker, "🔥")
                setTimeout(function () {
                    room.setPlayerAvatar(goalMaker, null)
                }, 3000);
            }, 1200);
        }, 1);
		if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
            let goalAssist = lastPlayersTouched[1].id;
            assistencia = lastPlayersTouched[1];
            getPlayersAssistCount();
            storeAssist(lastPlayersTouched[1]);
			room.sendAnnouncement(centerText("👟 Assistência: " + lastPlayersTouched[1].name + " 👟"), null, white, "bold");
            setTimeout(function () {
                room.setPlayerAvatar(goalAssist, "🤝")
                setTimeout(function () {
                    room.setPlayerAvatar(goalAssist, "👟")
                    setTimeout(function () {
                        room.setPlayerAvatar(goalAssist, null)
                    }, 2500);
                }, 1000);
            }, 1);
        }
		if (team === 1) {
            scorer++;
			goalsHome.push(lastPlayersTouched[0].name + " " + getTime(scores));
            setTimeout(function () {
                room.setTeamColors(1, gol4.angle, gol4.textcolor, [gol4.color1, gol4.color2, gol4.color3]);
                setTimeout(function () {
                    room.setTeamColors(1, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                    setTimeout(function () {
                        room.setTeamColors(1, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                        setTimeout(function () {
                            room.setTeamColors(1, gol4.angle, gol4.textcolor, [gol4.color1, gol4.color2, gol4.color3]);
                            setTimeout(function () {
                                room.setTeamColors(1, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                                setTimeout(function () {
                                    room.setTeamColors(1, gol1.angle, gol1.textcolor, [gol1.color1, gol1.color2, gol1.color3]);
                                    setTimeout(function () {
                                        room.setTeamColors(1, gol2.angle, gol2.textcolor, [gol2.color1, gol2.color2, gol2.color3]);
                                        setTimeout(function () {
                                            room.setTeamColors(1, gol3.angle, gol3.textcolor, [gol3.color1, gol3.color2, gol3.color3]);
                                            setTimeout(function () {
                                                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                                            }, 0);
                                        }, 0);
                                    }, 0);
                                }, 0);
                            }, 0);
                        }, 0);
                    }, 0);
                }, 0);
            }, 0);
		}
        else if (team === 2) {
            scoreb++;
			goalsGuest.push(lastPlayersTouched[0].name + " " + getTime(scores));
            setTimeout(function () {
                room.setTeamColors(2, gol4.angle, gol4.textcolor, [gol4.color1, gol4.color2, gol4.color3]);
                setTimeout(function () {
                    room.setTeamColors(2, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                    setTimeout(function () {
                        room.setTeamColors(2, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                        setTimeout(function () {
                            room.setTeamColors(2, gol4.angle, gol4.textcolor, [gol4.color1, gol4.color2, gol4.color3]);
                            setTimeout(function () {
                                room.setTeamColors(2, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                                setTimeout(function () {
                                    room.setTeamColors(2, gol1.angle, gol1.textcolor, [gol1.color1, gol1.color2, gol1.color3]);
                                    setTimeout(function () {
                                        room.setTeamColors(2, gol2.angle, gol2.textcolor, [gol2.color1, gol2.color2, gol2.color3]);
                                        setTimeout(function () {
                                            room.setTeamColors(2, gol3.angle, gol3.textcolor, [gol3.color1, gol3.color2, gol3.color3]);
                                            setTimeout(function () {
                                                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                                            }, 0);
                                        }, 0);
                                    }, 0);
                                }, 0);
                            }, 0);
                        }, 0);
                    }, 0);
                }, 0);
            }, 0);
		}
	}
    else {
		room.sendAnnouncement("", null, white, "bold");
		room.sendAnnouncement(centerText("🤦‍♂️ É GOOOOOL CONTRA!! 🤦‍♂️"), null, yellow, "bold");
		room.sendAnnouncement(centerText("🤡 Gol de " + lastPlayersTouched[0].name + " 🤡"), null, white, "bold");
		room.sendAnnouncement(centerText("Velocidade do Chute: " + ballSpeed.toPrecision(4).toString() + " km/h"), null, white, "normal");
        let goalMaker = lastPlayersTouched[0].id;
        setTimeout(function () {
            room.setPlayerAvatar(goalMaker, "🤦‍♂️")
            setTimeout(function () {
                room.setPlayerAvatar(goalMaker, "🤡")
                setTimeout(function () {
                    room.setPlayerAvatar(goalMaker, null)
                }, 3000);
            }, 1000);
        }, 1);
        if (team === 1) {
			goalsHome.push(lastPlayersTouched[0].name + " " + getTime(scores));
            setTimeout(function () {
                room.setTeamColors(1, gol4.angle, gol4.textcolor, [gol4.color1, gol4.color2, gol4.color3]);
                setTimeout(function () {
                    room.setTeamColors(1, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                    setTimeout(function () {
                        room.setTeamColors(1, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                        setTimeout(function () {
                            room.setTeamColors(1, gol4.angle, gol4.textcolor, [gol4.color1, gol4.color2, gol4.color3]);
                            setTimeout(function () {
                                room.setTeamColors(1, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                                setTimeout(function () {
                                    room.setTeamColors(1, gol1.angle, gol1.textcolor, [gol1.color1, gol1.color2, gol1.color3]);
                                    setTimeout(function () {
                                        room.setTeamColors(1, gol2.angle, gol2.textcolor, [gol2.color1, gol2.color2, gol2.color3]);
                                        setTimeout(function () {
                                            room.setTeamColors(1, gol3.angle, gol3.textcolor, [gol3.color1, gol3.color2, gol3.color3]);
                                            setTimeout(function () {
                                                room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                                            }, 0);
                                        }, 0);
                                    }, 0);
                                }, 0);
                            }, 0);
                        }, 0);
                    }, 0);
                }, 0);
            }, 0);
		}
        else if (team === 2) {
			goalsGuest.push(lastPlayersTouched[0].name + " " + getTime(scores));
            setTimeout(function () {
                room.setTeamColors(2, gol4.angle, gol4.textcolor, [gol4.color1, gol4.color2, gol4.color3]);
                setTimeout(function () {
                    room.setTeamColors(2, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                    setTimeout(function () {
                        room.setTeamColors(2, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                        setTimeout(function () {
                            room.setTeamColors(2, gol4.angle, gol4.textcolor, [gol4.color1, gol4.color2, gol4.color3]);
                            setTimeout(function () {
                                room.setTeamColors(2, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                                setTimeout(function () {
                                    room.setTeamColors(2, gol1.angle, gol1.textcolor, [gol1.color1, gol1.color2, gol1.color3]);
                                    setTimeout(function () {
                                        room.setTeamColors(2, gol2.angle, gol2.textcolor, [gol2.color1, gol2.color2, gol2.color3]);
                                        setTimeout(function () {
                                            setTimeout(function () {
                                                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                                            }, 0);
                                        }, 0);
                                    }, 0);
                                }, 0);
                            }, 0);
                        }, 0);
                    }, 0);
                }, 0);
            }, 0);
		}
        golcontra(lastPlayersTouched[0]);
        getPlayersGoalContra();
	}
	room.sendAnnouncement(centerText(nameHome + " " + scores.red + " - " + scores.blue + " " + nameGuest), null, white, "normal");
    if (scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit || goldenGoal == true)) {
        endGame(team);
        goldenGoal = false;
        setTimeout(() => { room.stopGame(); }, 1000);
    }
    igodnesses(goleador, assistencia);
    soberbagem(goleador, assistencia);
    namoradosfieis(lastPlayersTouched[0], lastPlayersTouched[1]);
};

room.onPositionsReset = function () {
    lastPlayersTouched = [null, null];
};

/* MISCELLANEOUS */

room.onRoomLink = function (url) {
    const roomURL = url;
    linkinho = url;
    sendRoomLinkToDiscord(botVersion + "\n" + dataehora() + "\n" + " " + "\n" + roomName + "\n" + roomURL);
    /*sendCommandsToDiscord(' | ' + botVersion + ' |\n.\n'+
        '!me ou "stats", "goat" (ranking da sala), !help, !tag, !uniforme, !gklist ou "gk?", gk (Entra para lista de GKs), !regras, !discord, !list (lista os player da fila), !vs, !verdade, !bb, !bye, !flw\n.\n'+
        'Comemorações:\n'+
        '!gol, !ain, !chupa, !lenda, !smith, !gk, !brabo\n.\n'+
        'Uniformes:\n'+
        '!seleçoes, !clubes, !euro, !sula --> Obs* Peça à um membro da Staff para alterar para você.\n.\n'
    );
    sendAdminCommandsToDiscord(' | ' + botVersion + ' |\n.\n' + 
        'rr (reinicia a partida), go/play/bora (inicia a partida), stop (encerra a partida)\n!who <r/b/rb>\n!ban <nome>\n!clearbans,\n!comofaz\n!clean, !limpar\n!mute <red/blue/spec> <30/1>\n!list <red/blue/spec>\n.\n'+
        'Mapas:\n'+
        '!2x, !3x <blue>, !5x\n.\n'+
        'Choose Mode:\n'+
        '!choose <on/off>, !redfirst <on/off>\n.\n'+
        'Troca de uniforme:\n'+
        '!uni, !rand <red/blue> (clubes), !selecrand <red/blue>\n.\n'+
        'Zueras:\n'+
        'Times: v1 (Soberanos), Inv (Invictus), girl (Barbies)\n.\n'+
        'Size:\n'+
        'anao, normal, gordao\n!size <r1/b1> <big/normal/small>\n.\nSenha: ' + adminPassword
    );*/
}; 

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
    if (muteList.includes(changedPlayer.name) && changedPlayer.admin) {
        room.sendAnnouncement(centerText(changedPlayer.name + " foi desmutado."), null, yellow, "normal");
        muteList = muteList.filter((p) => p != changedPlayer.name);
    }
};

room.onStadiumChange = function (newStadiumName, byPlayer) {
    if (byPlayer && byPlayer.id != 0) {
        room.setCustomStadium(mediumStadium);
        room.sendAnnouncement(centerText("Solicitação de mudança de mapa recusada"), null, warn, "italic");
    }
    else if (byPlayer && byPlayer.id == 0)  {
        var messages = [
            "Atualizando mapa...",
            "Mapa atualizado!",
            "Um pequeno ajuste para comportar os players..."
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        room.sendAnnouncement(centerText(announcement), null, yellow, "italic", 0);
    }
};

room.onGameTick = function () {
    checkTime();
    getLastTouchOfTheBall();
    getStats();
    alwaysOnTeam();
};