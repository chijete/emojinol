class Emojinol {
  constructor() {

    this.dictionary = {
      'a': '😀',
      'b': '😁',
      'c': '😂',
      'd': '🤣',
      'e': '😃',
      'f': '😄',
      'g': '😅',
      'h': '😆',
      'i': '😉',
      'j': '😊',
      'k': '🙄',
      'l': '😋',
      'm': '😎',
      'n': '😍',
      'ñ': '😘',
      'o': '🥰',
      'p': '😗',
      'q': '😙',
      'r': '😚',
      's': '🙂',
      't': '🤗',
      'u': '🤩',
      'v': '🤔',
      'w': '🤨',
      'x': '😐',
      'y': '😑',
      'z': '😶',
  
      'A': '😏',
      'B': '😣',
      'C': '😥',
      'D': '😮',
      'E': '🤐',
      'F': '😯',
      'G': '😪',
      'H': '😫',
      'I': '🥱',
      'J': '😴',
      'K': '😌',
      'L': '😛',
      'M': '😜',
      'N': '😝',
      'Ñ': '🤤',
      'O': '😒',
      'P': '😓',
      'Q': '😔',
      'R': '😕',
      'S': '🙃',
      'T': '🤑',
      'U': '😲',
      'V': '🙁',
      'W': '😖',
      'X': '😞',
      'Y': '😟',
      'Z': '😤',
  
      'á': '😢',
      'é': '😭',
      'í': '😦',
      'ó': '😨',
      'ú': '😩',
      'Á': '🤯',
      'É': '😬',
      'Í': '😰',
      'Ó': '😱',
      'Ú': '🥵',
  
      'ä': '🥶',
      'ë': '😳',
      'ï': '🤪',
      'ö': '😵',
      'ü': '🥴',
      'Ä': '😠',
      'Ë': '😡',
      'Ï': '🤬',
      'Ö': '😷',
      'Ü': '🤒',
  
      ',': '💪',
      '.': '🦶',
      ';': '🤘',
      ':': '✌',
      '¿': '👆',
      '?': '👇',
      '¡': '👉',
      '!': '👈',
      '(': '👍',
      ')': '👎',
      '[': '🤜',
      ']': '🤛',
      '"': '👌',
      '-': '✊',
      '_': '💅',
      '/': '👊',
      '*': '🤝',
      '+': '🙏',
      '=': '🙌',
      '#': '🖐',
      '$': '🤙',
      '%': '🤏',
      '&': '🤟',
      '|': '🦵',
      '°': '👂',
      '¬': '👃',
      "'": '☝',
      '{': '👐',
      '}': '🤲',
  
      '0': '🐱',
      '1': '😺',
      '2': '😸',
      '3': '😹',
      '4': '😻',
      '5': '😼',
      '6': '😽',
      '7': '🙀',
      '8': '😿',
      '9': '😾',
    };

    return true;
  }

  translate(text, mode=1) {
    if (mode == 1) {
      for (const [element_index, element] of Object.entries(this.dictionary)) {
        text = text.replaceAll(element_index, element);
      }
    } else {
      for (const [element_index, element] of Object.entries(this.dictionary)) {
        text = text.replaceAll(element, element_index);
      }
    }
  
    return text;
  }

  isEmojinol(text) {

    var is_emojinol = true;

    var emojinol_symbols = [];
    for (const [element_index, element] of Object.entries(this.dictionary)) {
      emojinol_symbols.push(element);
    }
    emojinol_symbols.push(' ');

    var splited_text = [...text];
    console.log(splited_text);
    for (const word of splited_text) {
      if (!emojinol_symbols.includes(word)) {
        is_emojinol = false;
      }
    }

    return is_emojinol;
    
  }
}

function emojinol(text, mode=1) {
  var localClass = new Emojinol();
  text = localClass.translate(text, mode);
  return text;
}