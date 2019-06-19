export const flattenMessages = (nestedMessages: Object, prefix: string = '') =>
  Object.keys(nestedMessages).reduce((messages, key) => {
    let value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }
    return messages;
  }, {});