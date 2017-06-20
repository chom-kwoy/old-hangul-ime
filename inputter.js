function reverse(map) {
    return Object.keys(map).reduce(function(acc, k) {
        acc[map[k]] = k;
        return acc;
    },{});
}
var cons_key = {
    65: '\u3141', // ㅁ
    67: '\u314A', // ㅊ
    68: '\u3147', // ㅇ
    69: '\u3137', // ㄷ
    70: '\u3139', // ㄹ
    71: '\u314E', // ㅎ
    81: '\u3142', // ㅂ
    82: '\u3131', // ㄱ
    83: '\u3134', // ㄴ
    84: '\u3145', // ㅅ
    86: '\u314D', // ㅍ
    87: '\u3148', // ㅈ
    88: '\u314C', // ㅌ
    90: '\u314B', // ㅋ
};
var cons_shift_key = {
    65: '\u3141', // ㅁ
    67: '\u314A', // ㅊ
    68: '\u3181', // yetieung
    69: '\u3138', // ㄷㄷ
    70: '\u1119', // ㄹㄹ
    71: '\u3186', // yeorinhieuh
    81: '\u3143', // ㅂㅂ
    82: '\u3132', // ㄱㄱ
    83: '\u3165', // ㄴㄴ
    84: '\u3146', // ㅅㅅ
    86: '\u314D', // ㅍ
    87: '\u3149', // ㅈㅈ
    88: '\u314C', // ㅌ
    90: '\u314B'  // ㅋ
};
var cho = {
    '\u3141': '\u1106', // ㅁ
    '\u314A': '\u110E', // ㅊ
    '\u3147': '\u110B', // ㅇ
    '\u3137': '\u1103', // ㄷ
    '\u3139': '\u1105', // ㄹ
    '\u314E': '\u1112', // ㅎ
    '\u3142': '\u1107', // ㅂ
    '\u3131': '\u1100', // ㄱ
    '\u3134': '\u1102', // ㄴ
    '\u3145': '\u1109', // ㅅ
    '\u314D': '\u1111', // ㅍ
    '\u3148': '\u110C', // ㅈ
    '\u314C': '\u1110', // ㅌ
    '\u314B': '\u110F', // ㅋ
    '\u3180': '\u1147', // ㅇㅇ
    '\u3138': '\u1104', // ㄷㄷ
    '\u1119': '\u1119', // ㄹㄹ
    '\u3185': '\u1158', // ㅎㅎ
    '\u3143': '\u1108', // ㅂㅂ
    '\u3132': '\u1101', // ㄱㄱ
    '\u3165': '\u1114', // ㄴㄴ
    '\u3146': '\u110A', // ㅅㅅ
    '\u3149': '\u110D', // ㅈㅈ
    '\u3181': '\u114C', // yetieung
    '\u3173': '\u1120', // ㅂㄷ
    '\u317A': '\u112D', // ㅅㄱ
    '\u317B': '\u112E', // ㅅㄴ
    '\u317C': '\u112F', // ㅅㄷ
    '\u317D': '\u1132', // ㅅㅂ
    '\u317E': '\u1136', // ㅅㅈ
    '\u3171': '\u111D', // ㅁㅇ
    '\u3178': '\u112B', // ㅂㅇ
    '\u3179': '\u112C', // ㅃㅇ
    '\u3184': '\u1157', // ㅍㅇ
    '\u317F': '\u1140', // pansios
    '\u3186': '\u1159', // yeorinhieuh
    'ㅄ': '\u1121'
};
cho_to_cons = reverse(cho);
var jong = {
    'ㄱ': '\u11A8', // ㄱ
    'ㄲ': '\u11A9', // ㄲ
    'ㄴ': '\u11AB', // ㄴ
    'ㄷ': '\u11AE', // ㄷ
    'ㄹ': '\u11AF', // ㄹ
    'ㅁ': '\u11B7', // ㅁ
    'ㅂ': '\u11B8', // ㅂ
    'ㅅ': '\u11BA', // ㅅ
    'ㅆ': '\u11BB', // ㅆ
    'ㅇ': '\u11BC', // ㅇ
    'ㅈ': '\u11BD', // ㅈ
    'ㅊ': '\u11BE', // ㅊ
    'ㅋ': '\u11BF', // ㅋ
    'ㅌ': '\u11C0', // ㅌ
    'ㅍ': '\u11C1', // ㅍ
    'ㅎ': '\u11C2', // ㅎ
    'ㄳ': '\u11AA',
    'ㄵ': '\u11AC',
    'ㄶ': '\u11AD',
    'ㄺ': '\u11B0',
    'ㄻ': '\u11B1',
    'ㄼ': '\u11B2',
    'ㄽ': '\u11B3',
    'ㄾ': '\u11B4',
    'ㄿ': '\u11B5',
    'ㅀ': '\u11B6',
    'ㅄ': '\u11B9',
    '\u3165': '\u11FF',  // ㄴㄴ
    '\u3181': '\u11F0', // yetieung
    '\u316D': '\u11D9', // ㄹ-yeorinhieuh
    '\u317A': '\u11E7', // ㅅㄱ
    '\u317C': '\u11E8', // ㅅㄷ
    '\u317D': '\u11EA', // ㅅㅂ
    '\u3171': '\u11E2', // ㅁㅇ
    '\u3178': '\u11E6', // ㅂㅇ
    '\u3184': '\u11F4', // ㅍㅇ
    '\u317F': '\u11EB', // pansios
    '\u3186': '\u11F9' // yeorinhieuh
};
jong_to_cons = reverse(jong);
var comb_cons = {
    'ㄱㅅ': 'ㄳ',
    'ㄴㅈ': 'ㄵ',
    'ㄴㅎ': 'ㄶ',
    'ㄹㄱ': 'ㄺ',
    'ㄹㅁ': 'ㄻ',
    'ㄹㅂ': 'ㄼ',
    'ㄹㅅ': 'ㄽ',
    'ㄹㅌ': 'ㄾ',
    'ㄹㅍ': 'ㄿ',
    'ㄹㅎ': 'ㅀ',
    'ㅂㅅ': 'ㅄ',
    'ㄹ\u3186': '\u316D', // ㄹ-yeorinhieuh
    'ㅂㄷ': '\u3173',
    'ㅅㄱ': '\u317A',
    'ㅅㄴ': '\u317B', // ㅅㄴ
    'ㅅㄷ': '\u317C', // ㅅㄷ
    'ㅅㅂ': '\u317D', // ㅅㅂ
    'ㅅㅈ': '\u317E', // ㅅㅈ
    'ㅁㅇ': '\u3171',
    'ㅂㅇ': '\u3178',
    'ㅃㅇ': '\u3179',
    'ㅍㅇ': '\u3184',
    'ㅅㅇ': '\u317F' // pansios
};
rev_comb_cons = reverse(comb_cons);
var vowel_key = {
    66: '\u3160', // ㅠ
    72: '\u3157', // ㅗ
    73: '\u3151', // ㅑ
    74: '\u3153', // ㅓ
    75: '\u314F', // ㅏ
    76: '\u3163', // ㅣ
    77: '\u3161', // ㅡ
    78: '\u315C', // ㅜ
    79: '\u3150', // ㅐ
    80: '\u3154', // ㅔ
    85: '\u3155', // ㅕ
    89: '\u315B'  // ㅛ
};
var vowel_shift_key = {
    66: '\u3160', // ㅠ
    72: '\u3157', // ㅗ
    73: '\u3151', // ㅑ
    74: '\u3153', // ㅓ
    75: '\u318D', // araea
    76: '\u3163', // ㅣ
    77: '\u3161', // ㅡ
    78: '\u315C', // ㅜ
    79: '\u3152', // ㅒ
    80: '\u3156', // ㅖ
    85: '\u3155', // ㅕ
    89: '\u315B'  // ㅛ
};
var jung = {
    '\u3160': '\u1172', // ㅠ
    '\u3157': '\u1169', // ㅗ
    '\u3151': '\u1163', // ㅑ
    '\u3153': '\u1165', // ㅓ
    '\u314F': '\u1161', // ㅏ
    '\u3163': '\u1175', // ㅣ
    '\u3161': '\u1173', // ㅡ
    '\u315C': '\u116E', // ㅜ
    '\u3150': '\u1162', // ㅐ
    '\u3154': '\u1166', // ㅔ
    '\u3155': '\u1167', // ㅕ
    '\u315B': '\u116D', // ㅛ
    '\u3152': '\u1164', // ㅒ
    '\u3156': '\u1168', // ㅖ
    '\u318D': '\u119E', // araea
    '\u3158': '\u116A', // ㅘ
    '\u3159': '\u116B', // ㅙ
    '\u315A': '\u116C', // ㅚ
    '\u315D': '\u116F', // ㅝ
    '\u315E': '\u1170', // ㅞ
    '\u315F': '\u1171', // ㅟ
    '\u3162': '\u1174', // ㅢ
    '\u318E': '\u11A1', // araea-ㅣ
    '\u3187': '\u1184', // ㅛㅑ
    '\u3188': '\u1185', // ㅛㅒ
    '\u3189': '\u1188', // ㅛㅣ
    '\u318A': '\u1191', // ㅠㅕ
    '\u318B': '\u1192', // ㅠㅖ
    '\u318C': '\u1194' // ㅠㅣ
};
jung_to_vowel = reverse(jung);
var comb_vowel = {
    'ㅗㅏ': 'ㅘ',
    'ㅗㅐ': 'ㅙ',
    'ㅗㅣ': 'ㅚ',
    'ㅜㅓ': 'ㅝ',
    'ㅜㅔ': 'ㅞ',
    'ㅜㅣ': 'ㅟ',
    'ㅡㅣ': 'ㅢ',
    'ㆍㅣ': '\u318E',
    'ㅛㅑ': '\u3187',
    'ㅛㅒ': '\u3188',
    'ㅛㅣ': '\u3189',
    'ㅠㅕ': '\u318A',
    'ㅠㅖ': '\u318B',
    'ㅠㅣ': '\u318C'
};
var rev_comb_vowel = reverse(comb_vowel);
function isCons(c) {
    if(c == undefined) return false;
    c = c.charCodeAt(0);
    return 0x3131 <= c && c <= 0x314E || 0x3165 <= c && c <= 0x3186;
}
function isVowel(c) {
    if(c == undefined) return false;
    c = c.charCodeAt(0);
    return 0x314F <= c && c <= 0x3163 || 0x3187 <= c && c <= 0x318E;
}
function isCho(c) {
    if(c == undefined) return false;
    c = c.charCodeAt(0);
    return 0x1100 <= c && c <= 0x115F;
}
function isJung(c) {
    if(c == undefined) return false;
    c = c.charCodeAt(0);
    return 0x1160 <= c && c <= 0x11A7;
}
function isJong(c) {
    if(c == undefined) return false;
    c = c.charCodeAt(0);
    return 0x11A8 <= c && c <= 0x11FF;
}
function isTonemark(c) {
    if(c == undefined) return false;
    c = c.charCodeAt(0);
    return c == 0x302E || c == 0x302F;
}
function isHangul(c) {
    return isCons(c) || isCho(c) || isJung(c) || isJong(c) || isTonemark(c);
}
var shift = false;
var ctrl = false;
var other = false;
$(document).ready(function() {
    var ta = $('.input');
    var span = $('span');
    $('input[type=radio]').on('change', function() {
        if($(this).val() == 'hor') ta.css('writing-mode', 'horizontal-tb');
        else if($(this).val() == 'ver') ta.css('writing-mode', 'vertical-rl');
    });
    function getCurComp() { // get currently compositing character(s)
        var end = ta.getSelection().end;
        var cur = ta.val().slice(0, end);
        if(cur.length == 0) return "";
        for(var t = cur.length - 1;; t--) {
            if(t == 0 || isCho(cur[t]) || isCons(cur[t]) || !isHangul(cur[t])) {
                ta.setSelection(t, end);
                return cur.slice(t);
            }
        }
    }
    ta.on('keydown', function (event) {
        var k = event.which;
        if(k == 16) shift = true;
        if(k == 17) ctrl = true;

        console.log(k);
        
        if(ctrl || [16, 17, 18, 25, 37, 39, 116].indexOf(k) != -1) {
            return; // invoke default behavior for these inputs
        }

        var cur = ""
        if(ta.getSelection().length > 0)
            cur = getCurComp();
        var last = cur.slice(-1);

        var i = "";
        var comb;
        var compositing = false;

        // 자음을 쳤다면
        if(k in cons_key) {
            compositing = true;

            if (!shift) i = cons_key[k];
            else i = cons_shift_key[k];

            // 겹자음 처리
            if(isJong(last)) comb = jong_to_cons[last] + i;
            if(isCho(last)) comb = cho_to_cons[last] + i;
            if(isCons(last)) comb = last + i;
            if(comb in comb_cons) {
                cur = cur.slice(0, -1);
                last = cur.slice(-1);
                i = comb_cons[comb];
            }

            // 중성 다음에 쳤다면 종성으로 바꾸기
            if (isJung(last) && i in jong) i = jong[i];
        }
        // 모음을 쳤다면
        else if(k in vowel_key) {
            compositing = true;

            if(!shift) i = vowel_key[k];
            else i = vowel_shift_key[k];

            if(isJung(last)) comb = jung_to_vowel[last] + i;
            if(isVowel(last)) comb = last + i;

            if(comb in comb_vowel) { // 합성 모음
                cur = cur.slice(0, -1);
                last = cur.slice(-1);
                i = comb_vowel[comb];
            }

            // 종성을 다시 초성으로 바꾸기
            if(isJong(last) && last in jong_to_cons) {
                cur = cur.slice(0, -1);
                var cons = jong_to_cons[last];
                if(!(cons in cho) && cons in rev_comb_cons) { // 겹자음일 경우
                    comb = rev_comb_cons[cons];
                    cur += jong[comb.charAt(0)];
                    cons = comb.charAt(1);
                }
                cur += cho[cons];
            } else if(isCons(last)) { // 자음을 초성으로 바꾸기
                cur = cur.slice(0, -1);
                if(!(last in cho) && last in rev_comb_cons) { // 겹자음일 경우
                    comb = rev_comb_cons[last];
                    cur += comb.charAt(0);
                    last = comb.charAt(1);
                }
                if(last in cho) cur += cho[last];
                else cur += last;
            }

            if(isJong(last) || isCons(last) || isCho(last)) {
                i = jung[i];
            }
        }
        // 백스페이스
        else if(k == 8) {
            compositing = true;

            last = cur.slice(-1);
            cur = cur.slice(0, -1);
            if(jong_to_cons[last] in rev_comb_cons) {
                cur += jong[rev_comb_cons[jong_to_cons[last]].charAt(0)];
            } else if (jung_to_vowel[last] in rev_comb_vowel) {
                cur += jung[rev_comb_vowel[jung_to_vowel[last]].charAt(0)];
            } else if (last in rev_comb_cons) {
                cur += rev_comb_cons[last].charAt(0);
            } else if (last in rev_comb_vowel) {
                cur += rev_comb_vowel[last].charAt(0);
            }
            last = cur.slice(-1);
            if(isCho(last)) {
                cur = cur.slice(0, -1);
                cur += cho_to_cons[last];
            }
        }
        else if(k == 32) i = ' '; // space
        else if(k == 49) {
            compositing = true;
            i = '\u302E'; // tone 1
        } else if(k == 50) {
            compositing = true;
            i = '\u302F'; // tone 2
        } else if(k == 13) { // enter
            i = '\n';
        } else {
            ta.setSelection(ta.getSelection().end);
            other = true;
            return;
        }

        cur += i;
        ta.replaceSelectedText(cur);

        if(compositing) {
            cur = getCurComp();
            span.text(cur);
        }
        
        event.preventDefault();
        
    }).on('keyup', function (event) {
        if(event.which == 16) shift = false;
        if(event.which == 17) ctrl = false;
    }).on('keypress', function(event) {
        var k = event.which;
        if(ctrl || other || k == 0) {
            other = false;
            return;
        }
        event.preventDefault();
    });

    // CONVERTING
    var output = $('.convert-output');
    var input = $('.convert-input');
    input.on('input change keyup', function(event) {
    	text = input.val();
    	for (var i = 0; i < text.length; i++) {
    		if (text[i] in puaconvtable) {
    			text = [text.slice(0, i), puaconvtable[text[i]], text.slice(i + 1)].join('');
    		}
    	}
    	output.val(text);
    });
});