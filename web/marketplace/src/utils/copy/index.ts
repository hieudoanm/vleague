export const copy = (text: string, title?: string) => {
  navigator.clipboard.writeText(text);
  alert(`Copy ${title || text} to Clipboard`);
};

export default copy;
