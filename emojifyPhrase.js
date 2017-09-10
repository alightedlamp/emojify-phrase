const letterMap = require('./letterMap');

function emojifyPhrase(str, emoji) {
    // Constrain output to Slack's message limit
    // To do: figure out what that limit actually is
    const maxLength = 1000;

    const spacer = ' '.repeat(6);

    const replaceChars = (layer) => layer.replace(/[s]/g, spacer).replace(/[x]/g, `:${emoji}:`);
    let emojified = [...str]
        .map(char => letterMap[char.toUpperCase()]
            .map(layer => replaceChars(layer), []));

    for (let i = 1; i < emojified.length; i++) {
        for (let j = 0; j < emojified[i].length; j++) {
            emojified[0][j] = emojified[0][j] + spacer + emojified[i][j];
        }
    }
    return emojified.length < maxLength
        ? emojified[0].join('\n')
        : `Sorry, message is ${emojified.length} characters, but must be within ${maxLength} characters!`;
}

console.log(emojifyPhrase('idgaf', 'middle_finger'));