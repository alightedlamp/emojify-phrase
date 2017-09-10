const letterMap = {
    A: ["sssxsss",
        "sxxxxxs",
        "xxxsxxx",
        "xxsssxx",
        "xxxxxxx",
        "xxsssxx",
        "xxsssxx"],
    B: ["xxxxxxs",
        "xxssxxx",
        "xxxxxxx",
        "xxxxxxs",
        "xxsssxx",
        "xxxxxxx",
        "xxxxxxs"],
    C: ["xxxxxxx",
        "xxxxxxx",
        "xxsssss",
        "xxsssss",
        "xxsssss",
        "xxxxxxx",
        "xxxxxxx"],
    D:
        ["xxxxxxs",
        "xxxxxxx",
        "xxsssxx",
        "xxsssxx",
        "xxsssxx",
        "xxxxxxx",
        "xxxxxxs"],
    E:
        ["xxxxxxx",
        "xxxxxxx",
        "xxsssss",
        "xxxxxss",
        "xxsssss",
        "xxxxxxx",
        "xxxxxxx"],
    F:
        ["xxxxxxx",
        "xxxxxxx",
        "xxsssss",
        "xxxxxss",
        "xxxxxss",
        "xxsssss",
        "xxsssss"],
    G:
        ["xxxxxxx",
        "xxxxxxx",
        "xxsssss",
        "xxsssss",
        "xxsssxx",
        "xxxxxxx",
        "xxxxxxx"],
    H:
        ["xxsssxx",
        "xxsssxx",
        "xxsssxx",
        "xxxxxxx",
        "xxxxxxx",
        "xxsssxx",
        "xxsssxx"],
    I:
        ["xxxxxxx",
        "xxxxxxx",
        "ssxxxss",
        "ssxxxss",
        "ssxxxss",
        "xxxxxxx",
        "xxxxxxx"],
    J:
        ["xxxxxxx",
        "xxxxxxx",
        "sssssxx",
        "sssssxx",
        "xxsssxx",
        "xxxxxxx",
        "xxxxxxx"],
    K:
        ["xxsssxx",
        "xxssxxs",
        "xxsxxss",
        "xxxxsss",
        "xxsxxss",
        "xxssxxs",
        "xxsssxx"],
    L:
        ["xxsssss",
        "xxsssss",
        "xxsssss",
        "xxsssss",
        "xxsssss",
        "xxxxxxx",
        "xxxxxxx"]
};

function emojifyPhrase(str, emoji) {
    // Constrain output to Slack's message limit
    const maxLength = 1000;

    emoji = `:${emoji}:`;
    const spacer = ' '.repeat(6);

    const replaceChars = (layer) => {
        layer = layer.replace(/[s]/g, spacer);
        layer = layer.replace(/[x]/g, emoji);
        return layer;
    }

    const emojified = [...str].map(char => {
        return letterMap[char.toUpperCase()].map(layer => replaceChars(layer));
    }, []);
    return emojified.length < maxLength ? emojified : `Sorry, message is ${emojified.length} characters, but must be within ${maxLength} characters!`;
}

console.log(emojifyPhrase('kell', 'princess'));