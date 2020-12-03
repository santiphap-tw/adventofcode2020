export const ReadFileToText = async (path) => {
  let content = "";
  await fetch(path)
    .then((r) => r.text())
    .then((text) => {
      content = text;
    });
  return content;
};

export const ReadFileToArray = async (path) => {
  let content = "";
  await fetch(path)
    .then((r) => r.text())
    .then((text) => {
      content = text.split("\n");
    });
  return content;
};

export const ReadFilesToText = async (files) => {
  return await Promise.all(
    files.map(async (file) => await ReadFileToText(file))
  );
};

export const ReadFilesToArray = async (files) => {
  return await Promise.all(
    files.map(async (file) => await ReadFileToArray(file))
  );
};
