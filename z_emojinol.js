function emojinol(text, mode=1) {
  dictionary = {
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

  if (mode == 1) {
    for (const [element_index, element] of Object.entries(dictionary)) {
      text = text.replaceAll(element_index, element);
    }
  } else {
    for (const [element_index, element] of Object.entries(dictionary)) {
      text = text.replaceAll(element, element_index);
    }
  }

  return text;
}