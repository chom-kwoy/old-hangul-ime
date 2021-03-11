function reverse(map) {
    return Object.keys(map).reduce(function(acc, k) {
        acc[map[k]] = k;
        return acc;
    },{});
}
var cons_key = {
    'a': '\u3141', // ㅁ
    'c': '\u314A', // ㅊ
    'd': '\u3147', // ㅇ
    'e': '\u3137', // ㄷ
    'f': '\u3139', // ㄹ
    'g': '\u314E', // ㅎ
    'q': '\u3142', // ㅂ
    'r': '\u3131', // ㄱ
    's': '\u3134', // ㄴ
    't': '\u3145', // ㅅ
    'v': '\u314D', // ㅍ
    'w': '\u3148', // ㅈ
    'x': '\u314C', // ㅌ
    'z': '\u314B', // ㅋ
};
var cons_shift_key = {
    'A': 'ퟠ', // ㅁㅁ
    'C': '\u314A', // ㅊ
    'D': '\u3181', // yetieung
    'E': '\u3138', // ㄷㄷ
    'F': '\u1119', // ㄹㄹ
    'G': '\u3186', // yeorinhieuh
    'Q': '\u3143', // ㅂㅂ
    'R': '\u3132', // ㄱㄱ
    'S': '\u3165', // ㄴㄴ
    'T': '\u3146', // ㅅㅅ
    'V': '\u314D', // ㅍ
    'W': '\u3149', // ㅈㅈ
    'X': 'ꥹ', // ㅌㅌ
    'Z': '\u314B'  // ㅋ
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
    'ㅄ': '\u1121',
    'ᄓ': 'ᄓ',
    'ㅦ': 'ᄕ',
    'ᄖ': 'ᄖ',
    'ᄗ': 'ᄗ',
    'ᄘ': 'ᄘ',
    'ᄛ': 'ᄛ',
    'ᄜ': 'ᄜ',
    'ㅲ': 'ᄞ',
    'ᄟ': 'ᄟ',
    'ㅴ': 'ᄢ',
    'ㅵ': 'ᄣ',
    'ᄤ': 'ᄤ',
    'ᄥ': 'ᄥ',
    'ᄦ': 'ᄦ',
    'ㅶ': 'ᄧ',
    'ᄨ': 'ᄨ',
    'ㅷ': 'ᄩ',
    'ᄪ': 'ᄪ',
    'ᄰ': 'ᄰ',
    'ᄱ': 'ᄱ',
    'ᄳ': 'ᄳ',
    'ᄴ': 'ᄴ',
    'ᄵ': 'ᄵ',
    'ᄷ': 'ᄷ',
    'ᄸ': 'ᄸ',
    'ᄹ': 'ᄹ',
    'ᄺ': 'ᄺ',
    'ᄻ': 'ᄻ',
    'ᅁ': 'ᅁ',
    'ᅂ': 'ᅂ',
    'ᅃ': 'ᅃ',
    'ᅄ': 'ᅄ',
    'ᅅ': 'ᅅ',
    'ᅆ': 'ᅆ',
    'ㆀ': 'ᅇ',
    'ᅈ': 'ᅈ',
    'ᅉ': 'ᅉ',
    'ᅊ': 'ᅊ',
    'ᅋ': 'ᅋ',
    'ᅒ': 'ᅒ',
    'ᅓ': 'ᅓ',
    'ᅖ': 'ᅖ',
    'ᅚ': 'ᅚ',
    'ㅧ': 'ᅛ',
    'ᅞ': 'ᅞ',
    'ꥠ': 'ꥠ',
    'ꥡ': 'ꥡ',
    'ꥢ': 'ꥢ',
    'ꥣ': 'ꥣ',
    'ㄺ': 'ꥤ',
    'ꥥ': 'ꥥ',
    'ㅪ': 'ꥦ',
    'ꥧ': 'ꥧ',
    'ㄻ': 'ꥨ',
    'ㄼ': 'ꥩ',
    'ꥪ': 'ꥪ',
    'ꥫ': 'ꥫ',
    'ㄽ': 'ꥬ',
    'ꥭ': 'ꥭ',
    'ꥮ': 'ꥮ',
    'ꥯ': 'ꥯ',
    'ꥰ': 'ꥰ',
    'ㅯ': 'ꥱ',
    'ꥲ': 'ꥲ',
    'ꥳ': 'ꥳ',
    'ꥴ': 'ꥴ',
    'ꥵ': 'ꥵ',
    'ꥶ': 'ꥶ',
    'ꥷ': 'ꥷ',
    'ꥸ': 'ꥸ',
    'ꥺ': 'ꥺ',
    'ꥻ': 'ꥻ',
    'ꥼ': 'ꥼ',
    'ꥹ': 'ꥹ',
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
    '\u3186': '\u11F9', // yeorinhieuh
    'ᇃ': 'ᇃ',
    'ᇄ': 'ᇄ',
    'ᄓ': 'ᇅ',
    'ㅦ': 'ᇆ',
    'ㅧ': 'ᇇ',
    'ㅨ': 'ᇈ',
    'ᇉ': 'ᇉ',
    'ᄗ': 'ᇊ',
    'ᅞ': 'ᇋ',
    'ㅩ': 'ᇌ',
    'ᇍ': 'ᇍ',
    'ㅪ': 'ᇎ',
    'ᇏ': 'ᇏ',
    'ᄙ': 'ᇐ',
    'ᇑ': 'ᇑ',
    'ㅫ': 'ᇓ',
    'ᇔ': 'ᇔ',
    'ꥫ': 'ᇕ',
    'ᇖ': 'ᇖ',
    'ㅬ': 'ᇗ',
    'ꥮ': 'ᇘ',
    'ꥯ': 'ᇚ',
    'ᇛ': 'ᇛ',
    'ㅮ': 'ᇜ',
    'ㅯ': 'ᇝ',
    'ᇞ': 'ᇞ',
    'ㅰ': 'ᇟ',
    'ㅺ': 'ᇧ',
    'ㅼ': 'ᇨ',
    'ᄰ': 'ᇩ',
    'ㅽ': 'ᇪ',
    'ㆂ': 'ᇱ',
    'ㆃ': 'ᇲ',
    'ᅖ': 'ᇳ',
    'ㄸ': 'ퟍ',
    'ᄛ': 'ퟝ',
    'ퟠ': 'ퟠ',
    '\u3173': 'ퟣ',
    'ㅃ': 'ퟦ',
    'ㅵ': 'ퟧ',
    'ㅶ': 'ퟨ',
    'ퟫ': 'ퟫ',
    'ㅉ': 'ퟹ',
    'ᄹ': 'ퟱ',
    'ᄻ': 'ퟲ',
    'ᄷ': 'ퟰ',
    '\u317E': 'ퟯ',
    'ᄱ': 'ퟪ',
    'ᄨ': 'ퟩ',
    'ꥥ': 'ퟕ',
    'ꥣ': 'ퟒ',
    'ꥢ': 'ퟐ',
    'ꥡ': 'ퟏ',
    'ꥴ': 'ᇥ',
    'ᄪ': 'ᇤ',
    'ᄘ': 'ᇍ',
    'ᇠ': 'ᇠ',
    'ᇡ': 'ᇡ',
    'ᇣ': 'ᇣ',
    'ᇭ': 'ᇭ',
    'ᇮ': 'ᇮ',
    'ᇯ': 'ᇯ',
    'ᇵ': 'ᇵ',
    'ᇶ': 'ᇶ',
    'ᇷ': 'ᇷ',
    'ᇸ': 'ᇸ',
    'ᇺ': 'ᇺ',
    'ᇻ': 'ᇻ',
    'ᇼ': 'ᇼ',
    'ᇽ': 'ᇽ',
    'ᇬ': 'ᇬ',
    'ᇾ': 'ᇾ',
    'ퟋ': 'ퟋ',
    'ퟌ': 'ퟌ',
    'ퟎ': 'ퟎ',
    'ퟑ': 'ퟑ',
    'ퟓ': 'ퟓ',
    'ퟔ': 'ퟔ',
    'ퟖ': 'ퟖ',
    'ퟗ': 'ퟗ',
    'ퟘ': 'ퟘ',
    'ퟙ': 'ퟙ',
    'ퟚ': 'ퟚ',
    'ퟛ': 'ퟛ',
    'ퟜ': 'ퟜ',
    'ퟞ': 'ퟞ',
    'ퟟ': 'ퟟ',
    'ퟡ': 'ퟡ',
    'ퟢ': 'ퟢ',
    'ퟤ': 'ퟤ',
    'ퟥ': 'ퟥ',
    'ퟬ': 'ퟬ',
    'ퟭ': 'ퟭ',
    'ퟮ': 'ퟮ',
    'ퟳ': 'ퟳ',
    'ퟴ': 'ퟴ',
    'ퟵ': 'ퟵ',
    'ퟶ': 'ퟶ',
    'ퟷ': 'ퟷ',
    'ퟸ': 'ퟸ',
    'ퟺ': 'ퟺ',
    'ퟻ': 'ퟻ',
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
    'ㅅㅇ': '\u317F', // pansios
    'ㄴㄱ': 'ᄓ',
    'ㄴㄷ': 'ㅦ',
    'ㄴㅂ': 'ᄖ',
    'ㄷㄱ': 'ᄗ',
    'ㄹㄴ': 'ᄘ',
    'ㄹㅇ': 'ᄛ',
    'ㅁㅂ': 'ᄜ',
    'ㅂㄱ': 'ㅲ',
    'ㅂㄴ': 'ᄟ',
    'ㅄㄱ': 'ㅴ',
    'ㅄㄷ': 'ㅵ',
    'ㅄㅂ': 'ᄤ',
    'ㅄㅅ': 'ᄥ',
    'ㅄㅈ': 'ᄦ',
    'ㅂㅈ': 'ㅶ',
    'ㅂㅊ': 'ᄨ',
    'ㅂㅌ': 'ㅷ',
    'ㅂㅍ': 'ᄪ',
    'ㅅㄹ': 'ᄰ',
    'ㅅㅁ': 'ᄱ',
    'ㅽㄱ': 'ᄳ',
    'ㅽㅇ': 'ퟫ',
    'ㅆㅅ': 'ᄴ',
    'ㅿㅇ': 'ᄵ',
    'ㅅㅊ': 'ᄷ',
    'ㅅㅋ': 'ᄸ',
    'ㅅㅌ': 'ᄹ',
    'ㅅㅍ': 'ᄺ',
    'ㅅㅎ': 'ᄻ',
    'ㅇㄱ': 'ᅁ',
    'ㅇㄷ': 'ᅂ',
    'ㅇㅁ': 'ᅃ',
    'ㅇㅂ': 'ᅄ',
    'ㅇㅅ': 'ᅅ',
    'ᅅㅇ': 'ᅆ',
    'ㅇㅇ': 'ㆀ',
    'ㅇㅈ': 'ᅈ',
    'ㅇㅊ': 'ᅉ',
    'ㅇㅌ': 'ᅊ',
    'ㅇㅍ': 'ᅋ',
    'ㆁㅅ': 'ㆂ',
    'ㆂㅇ': 'ㆃ',
    'ㅊㅋ': 'ᅒ',
    'ㅊㅎ': 'ᅓ',
    'ㅍㅂ': 'ᅖ',
    'ㄱㄷ': 'ᅚ',
    'ㄴㅅ': 'ㅧ',
    'ㄷㄹ': 'ᅞ',
    'ㅧㅇ': 'ㅨ',
    'ㄺㅅ': 'ㅩ',
    'ㄹㄷ': 'ㅪ',
    'ㄼㅅ': 'ㅫ',
    'ㄽㅇ': 'ㅬ',
    'ㅁㅂ': 'ㅮ',
    'ㅁㅅ': 'ㅯ',
    'ㅯㅇ': 'ㅰ',
    'ㄷㅁ': 'ꥠ',
    'ㄷㅅ': 'ꥢ',
    'ㄷㅈ': 'ꥣ',
    'ㄺㄱ': 'ꥥ',
    'ㅪㄷ': 'ꥧ',
    'ㄼㅂ': 'ꥪ',
    'ㄼㅇ': 'ꥫ',
    'ㄹㅈ': 'ꥭ',
    'ㄹㅋ': 'ꥮ',
    'ㅁㄱ': 'ꥯ',
    'ㅁㄷ': 'ꥰ',
    'ㅄㅌ': 'ꥲ',
    'ㅂㅋ': 'ꥳ',
    'ㅂㅎ': 'ꥴ',
    'ㅆㅂ': 'ꥵ',
    'ㅇㄹ': 'ꥶ',
    'ㅇㅎ': 'ꥷ',
    'ㅉㅎ': 'ꥸ',
    'ㅍㅎ': 'ꥺ',
    'ㅎㅅ': 'ꥻ',
    'ㆆㆆ': 'ꥼ',
    'ㄱㄹ': 'ᇃ',
    'ㄳㄱ': 'ᇄ',
    'ㄴㅌ': 'ᇉ',
    'ㅪㅎ': 'ᇏ',
    'ㄻㄱ': 'ᇑ',
    'ㄼㅎ': 'ᇔ',
    'ㄽㅅ': 'ᇖ',
    'ㅁㄹ': 'ᇛ',
    'ㅯㅅ': 'ᇞ',
    'ㅁㅊ': 'ᇠ',
    'ㅁㅎ': 'ᇡ',
    'ㅂㄹ': 'ᇣ',
    'ㆁㄱ': 'ᇬ',
    'ᇬㄱ': 'ᇭ',
    'ㆁㆁ': 'ᇮ',
    'ㆁㅋ': 'ᇯ',
    'ㅎㄴ': 'ᇵ',
    'ㅎㄹ': 'ᇶ',
    'ㅎㅁ': 'ᇷ',
    'ㅎㅂ': 'ᇸ',
    'ㄱㄴ': 'ᇺ',
    'ㄱㅂ': 'ᇻ',
    'ㄱㅊ': 'ᇼ',
    'ㄱㅋ': 'ᇽ',
    'ㄱㅎ': 'ᇾ',
    'ㄴㄹ': 'ퟋ',
    'ㄴㅊ': 'ퟌ',
    'ㄸㅂ': 'ퟎ',
    'ꥢㄱ': 'ퟑ',
    'ㄷㅊ': 'ퟓ',
    'ㄷㅌ': 'ퟔ',
    'ㄺㅎ': 'ퟖ',
    'ᄙㅋ': 'ퟗ',
    'ㄻㅎ': 'ퟘ',
    'ㄼㄷ': 'ퟙ',
    'ㄼㅍ': 'ퟚ',
    'ㄹㆁ': 'ퟛ',
    'ㅭㅎ': 'ퟜ',
    'ㅁㄴ': 'ퟞ',
    'ퟞㄴ': 'ퟟ',
    'ㅮㅅ': 'ퟡ',
    'ㅁㅈ': 'ퟢ',
    'ᇣㅍ': 'ퟤ',
    'ㅂㅁ': 'ퟥ',
    'ㅆㄱ': 'ퟬ',
    'ㅆㄷ': 'ퟭ',
    'ㅆㅇ': 'ퟮ',
    'ㅿㅂ': 'ퟳ',
    'ퟳㅇ': 'ퟴ',
    'ㆁㅁ': 'ퟵ',
    'ㆁㅎ': 'ퟶ',
    'ㅈㅂ': 'ퟷ',
    'ퟷㅂ': 'ퟸ',
    'ㅍㅅ': 'ퟺ',
    'ㅍㅌ': 'ퟻ',
    'ㄷㅂ': 'ꥡ',
};
rev_comb_cons = reverse(comb_cons);
var vowel_key = {
    'b': '\u3160', // ㅠ
    'h': '\u3157', // ㅗ
    'i': '\u3151', // ㅑ
    'j': '\u3153', // ㅓ
    'k': '\u314F', // ㅏ
    'l': '\u3163', // ㅣ
    'm': '\u3161', // ㅡ
    'n': '\u315C', // ㅜ
    'o': '\u3150', // ㅐ
    'p': '\u3154', // ㅔ
    'u': '\u3155', // ㅕ
    'y': '\u315B'  // ㅛ
};
var vowel_shift_key = {
    'B': '\u3160', // ㅠ
    'H': '\u3157', // ㅗ
    'I': '\u3151', // ㅑ
    'J': '\u3153', // ㅓ
    'K': '\u318D', // araea
    'L': '\u3163', // ㅣ
    'M': '\u3161', // ㅡ
    'N': '\u315C', // ㅜ
    'O': '\u3152', // ㅒ
    'P': '\u3156', // ㅖ
    'U': '\u3155', // ㅕ
    'Y': '\u315B'  // ㅛ
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
    '\u318C': '\u1194', // ㅠㅣ
    '\u11A2': '\u11A2', // araea araea
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
    'ㅠㅣ': '\u318C',
    '\u318D\u318D': '\u11A2',
};
var rev_comb_vowel = reverse(comb_vowel);
function isCons(ch) {
    if(ch === undefined) return false;
    c = ch.charCodeAt(0);
    return 0x3131 <= c && c <= 0x314E || 0x3165 <= c && c <= 0x3186;
}
function isVowel(c) {
    if(c === undefined) return false;
    c = c.charCodeAt(0);
    return 0x314F <= c && c <= 0x3163 || 0x3187 <= c && c <= 0x318E;
}
function isCho(c) {
    if(c === undefined) return false;
    c = c.charCodeAt(0);
    return 0x1100 <= c && c <= 0x115F || 0xA960 <= c && c <= 0xA97C;
}
function isJung(c) {
    if(c === undefined) return false;
    c = c.charCodeAt(0);
    return 0x1160 <= c && c <= 0x11A7 || 0xD7B0 <= c && c <= 0xD7C6;
}
function isJong(c) {
    if(c === undefined) return false;
    c = c.charCodeAt(0);
    return 0x11A8 <= c && c <= 0x11FF || 0xD7CB <= c && c <= 0xD7FB;
}
function isTonemark(c) {
    if(c === undefined) return false;
    c = c.charCodeAt(0);
    return c === 0x302E || c === 0x302F;
}
function isHangul(c) {
    return isCons(c) || isCho(c) || isJung(c) || isJong(c) || isTonemark(c);
}
var other = false;
$(document).ready(function() {
    var ta = $('.input');
    var span = $('span');
    $('input[type=radio]').on('change', function() {
        if($(this).val() === 'hor') ta.css('writing-mode', 'horizontal-tb');
        else if($(this).val() === 'ver') ta.css('writing-mode', 'vertical-rl');
    });
    function getCurComp() { // get currently compositing character(s)
        var end = ta.getSelection().end;
        var cur = ta.val().slice(0, end);
        if(cur.length === 0) return "";
        for(var t = cur.length - 1;; t--) {
            if(t === 0 || isCho(cur[t]) || isCons(cur[t]) || !isHangul(cur[t])) {
                ta.setSelection(t, end);
                return cur.slice(t);
            }
        }
    }
    ta.on('keydown', function (event) {
        var k = event.key;
		var shift = event.shiftKey;
		var ctrl = event.ctrlKey;

        if(ctrl || ["Shift", "Ctrl"].indexOf(k) !== -1) {
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
        if(k in cons_key || k in cons_shift_key) {
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
        else if(k in vowel_key || k in vowel_shift_key) {
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
        else if(k === "Backspace") {
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
        else if(k === " ") { // space
            if (cur !== "") {
                ta.replaceSelectedText(cur);
                ta.setSelection(ta.getSelection().end);
                event.preventDefault();
                return;
            } else {
                i = ' ';
            }
        } else if(k === "1") {
            compositing = true;
            i = '\u302E'; // tone 1
        } else if(k === "2") {
            compositing = true;
            i = '\u302F'; // tone 2
        } else if(k === "Enter") { // enter
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

    }).on('keypress', function(event) {
        if(event.ctrlKey || other) {
            other = false;
            return;
        }
        event.preventDefault();
    });

    // CONVERTING
    function convert(event) {
        var output = $('.convert-output');
        var highlights = $('.highlights');
        text = input.val().normalize();
        newtext = '';
        marktext = '';
        for (var i = 0; i < text.length; i++) {
            if (text[i] in puaconvtable) {
                marktext += '<mark>' + text[i] + '</mark>';
                var newchar = puaconvtable[text[i]];
                if ($('#mediawiki').prop('checked') && (
                    newchar.charCodeAt(0) >= 0x1100 &&
                    newchar.charCodeAt(0) <= 0x1112 &&
                    newchar.charCodeAt(1) >= 0x1161 &&
                    newchar.charCodeAt(1) <= 0x1175
                )) {
                    newchar = newchar[0] + '<!---->' + newchar.substring(1);
                }
                newtext += newchar;
            } else {
                marktext += text[i];
                newtext += text[i];
            }
        }
        highlights.html(marktext + '<br><br><br>');
        output.val(newtext);
    }
    var input = $('.convert-input');
    var backdrop = $('.backdrop');
    $('#mediawiki').change(convert);
    input.on('input change keyup ready', convert);
    input.on('scroll', function(event) {
    	var scrollTop = input.scrollTop();
		backdrop.scrollTop(scrollTop);
    });
});
