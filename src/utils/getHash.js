const getHash = () => {
  let path = '';
  for (let i = 1; i < location.hash.slice(1).toLocaleLowerCase().split("/").length - 1; i++) {
    if (i >= 2) {
      path += '/' + location.hash.slice(1).toLocaleLowerCase().split("/")[i];
    } else {
      path += location.hash.slice(1).toLocaleLowerCase().split("/")[i];
    };
  };
  return path || "/";
};

export default getHash;