export function left(
  stringValue: string,
  numberOfLines: number,
): string {
  return stringValue.slice(0, numberOfLines);
}

export function right(
  stringValue: string,
  numberOfLines: number,
): string {
  return stringValue.slice(-numberOfLines);
}

export function camelize(
  stringValue: string,
): string {
  let resultingArray: string[] = [''];

  const splitWithDash = stringValue.split('-');
  if(splitWithDash.length > 1) {
    resultingArray = splitWithDash;
  }
  const splitWithUnderscore = stringValue.split('_');
  if(splitWithUnderscore.length > 1) {
    resultingArray = splitWithUnderscore;
  }

  if (resultingArray.length > 1) {
    return resultingArray.map((word, index) => {
      if(index>0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    }).join('');
  }
  return stringValue;
}

export function capitalize(
  stringValue: string,
): string {
  return stringValue.charAt(0).toUpperCase() + stringValue.slice(1).toLowerCase();
}

export function removeWhiteSpace(
  stringValue: string,
): string {
  return stringValue.replace(/[\s\xa0]+/g, ' ').replace(/^\s+|\s+$/g, '').trim();
}

export function escapeHtml(
  stringValue: string,
): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const reversedEscapeChars: any = {
    '<': 'lt',
    '>': 'gt',
    '"': 'quot',
    "'": 'apos',
    '&': 'amp',
  };
  return stringValue.replace(/[&<>"']/g, function(m){ return '&' + reversedEscapeChars[m] + ';'; });
}

export function isEmpty(
  stringValue: string,
): boolean {
  return stringValue === '';
}

export function slugify(
  stringValue: string,
): string {
  return stringValue
  .replace(/\s|_|\(|\)/g, "-")
  .normalize("NFD").replace(/\p{Diacritic}/gu, "")
  .toLowerCase();
}
