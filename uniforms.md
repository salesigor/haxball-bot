Times Europeus:
const rea = { "name": 'Real Madrid', "type": Uniform, "emoji": '⚪🟡⚪', "angle": 0, "textcolor": 0x0246CF, "color1": 0xFFFAFA, "color2": 0xFFFAFA, "color3": 0xFFFAFA};
const bar = {"name": 'Barcelona', "type": Uniform, "emoji": '🔵🔴🔵', "angle": 360, "textcolor": 0xFFD700, "color1": 0x00008B, "color2": 0x8B0000, "color3": 0x00008B};
const che = {"name": 'Chelsea', "type": Uniform, "emoji": '🔵⚪🔵', "angle": 90, "textcolor": 0xFFFFFF, "color1": 0x0000CD, "color2": 0x0000CD, "color3": 0x0000CD};
const juv = {"name": 'Juventus', "type": Uniform, "emoji": '⚫⚪⚫', "angle": 180, "textcolor": 0x000000, "color1": 0x5E5E5E, "color2": 0xD9D9D9, "color3": 0x5E5E5E};
const bay = {"name": 'Bayern de Munique', "type": Uniform, "emoji": '🔴🔵🔴', "angle": 30, "textcolor": 0xFFFFFF, "color1": 0xFF0000, "color2": 0xF20000, "color3": 0xFF0000};
const psg = {"name": 'Paris Saint-Germain', "type": Uniform, "emoji": '🔵🔴🔵', "angle": 180, "textcolor": 0xFFFFFF, "color1": 0x000080, "color2": 0xB22222, "color3": 0x000080};
const liv = {"name": 'Liverpool', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0xFFFFFF, "color2": 0xFFFFFF, "color3": 0xFFFFFF};
const manC = {"name": 'Manchester City', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0xFFFFFF, "color2": 0xFFFFFF, "color3": 0xFFFFFF};
const manU = {"name": 'Manchester United', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0xFFFFFF, "color2": 0xFFFFFF, "color3": 0xFFFFFF};
const ars = {"name": 'Arsenal', "type": Uniform, "emoji": '', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0xFFFFFF, "color2": 0xFFFFFF, "color3": 0xFFFFFF};

Seleções:
const ale = {'name': 'Alemanha', "type": Uniform, "emoji": '⚫🔴🟡', "angle": 90, "textcolor": 0x000000, "color1": 0xFFFFFF, "color2": 0xFFFFFF, "color3": 0xFFFFFF};
const arg = {'name': 'Argentina', "type": Uniform, "emoji": '🔵⚪🔵', "angle": 90, "textcolor": 0x1F374B, "color1": 0x75AADB, "color2": 0xFFFFFF, "color3": 0x75AADB};
const bra = {'name': 'Brasil', "type": Uniform, "emoji": '🟢🟡🔵', "angle": 360, "textcolor": 0x0C822F, "color1": 0xFFDA1F, "color2": 0xFFDA1F, "color3": 0xFFDA1F};
const esp = {'name': 'Espanha', "type": Uniform, "emoji": '🔴🟡🔴', "angle": 90, "textcolor": 0xFFFF00, "color1": 0xFF0000, "color2": 0xFF0000, "color3": 0xFF0000};
const por = {'name': 'Portugal', "type": Uniform, "emoji": '🟢🔴🔴', "angle": 0, "textcolor": 0x289E1F, "color1": 0xFF0000, "color2": 0xFF0000, "color3": 0xFF0000};
const ita = {'name': 'Itália', "type": Uniform, "emoji": '🟢⚪🔴', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x3646A9, "color2": 0x3646A9, "color3": 0x3646A9};
const uru = {'name': 'Uruguai', "type": Uniform, "emoji": '⚪🔵⚪', "angle": 0, "textcolor": 0x212124, "color1": 0x66A5D4, "color2": 0x66A5D4, "color3": 0x66A5D4};
const fra = {'name': 'França', "type": Uniform, "emoji": '🔵⚪🔴', "angle": 90, "textcolor": 0xF5F9F6, "color1": 0x265ECF, "color2": 0x384355, "color3": 0x384355};
const ing = {'name': 'Inglaterra', "type": Uniform, "emoji": '⚪🔴⚪', "angle": 0, "textcolor": 0x0549A0, "color1": 0xDEDFE4, "color2": 0xDEDFE4, "color3": 0xDEDFE4};
const bel = {'name': 'Bélgica', "type": Uniform, "emoji": '⚫🔴🟡', "angle": 0, "textcolor": 0xCA9144, "color1": 0xC4212A, "color2": 0xC4212A, "color3": 0xC4212A};

variáveis:
const seleçoes = [ale, arg, bra, esp, por, ita, uru, fra, ing, bel];
const euro = [rea, bar, che, juv, bay, psg, liv, manC, manU, ars];

site que é usado para montar os uniformes:
haxcolors.com

Exemplo:

Oque site disponilibiliza:

/colors red 360 27965A DBB71B DBB71B DBB71B

isso aqui é a cor do time do Real Madrid

Como deve transpor:

"name": 'Real Madrid', "type": Uniform, "emoji": '⚪🟡⚪', "angle": 0, "textcolor": 0x0246CF, "color1": 0xFFFAFA, "color2": 0xFFFAFA, "color3": 0xFFFAFA
