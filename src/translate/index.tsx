type TParam = string;

function t(word: TParam) {
  const words: { [key: string]: string } = {};

  const translatedWord = words?.word;

  if (translatedWord) {
    return translatedWord;
  }
  return "T" + word;
}

export default t;
