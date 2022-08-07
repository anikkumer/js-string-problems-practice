// includes use:---------------

const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki.bosonto kale tomai bolte pari ni. sada sada kala kala'

const searchString = 'Pakhi';
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes('Pakhi');
// const doesExist = lyrics.includes(searchString);

const lyricsLowerCase = lyrics.toLowerCase()
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
console.log(doesExist);

//***------------------------------------------------
//  */ shortcut way--use one line:
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExist);
console.log(doesExistOneLine);
// ****---------------------------------------------


// indexOf use:---------------

console.log(lyrics.indexOf('kailla'));
console.log(lyrics.indexOf('Tumi'));

if(lyrics.indexOf('sada') !== -1){
    console.log('exists inside the string')
}
else {
    console.log('cannot find it');
}

// startsWith:---
console.log(lyrics.startsWith('Tumi'));

// endsWith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';

console.log(fileName.endsWith('.pdf'));

