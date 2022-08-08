// split & use;--------------
const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki.bosonto kale tomai bolte pari ni.kala kala  sada sada'
const sentences = lyrics.split('.');
const parts = lyrics.split(' ');
const characters = lyrics.split('');

// console.log(lyrics);
// console.log(sentences);
// console.log(parts);
// console.log(characters);


// slice & substring use:-------------------------------
const partial = lyrics.slice(5, 8);
// console.log(partial);

const partial2 = lyrics.substring(5, 8);
// console.log(partial2);


const lines = [
    'Tumi bondhu kala Pakhi ami jeno ki',
    'Bosonto kale tomai bolte pari ni',
    'Kala kala  sada sada'
  ];
  const newSong = lines.join('; ')
  console.log(newSong);
  
  