export const thuDo = (link, type) => {
  switch (type) {
    case "topclothes":
      document.querySelector(".body").style.background = `url(${link})`;
      break;
    case "botclothes":
      document.querySelector(".bikinibottom").style.background = `url(${link})`;
      break;
    case "shoes":
      document.querySelector(".feet").style.background = `url(${link})`;
      break;
    case "necklace":
      document.querySelector(".necklace").style.background = `url(${link})`;
      break;
    case "handbags":
      document.querySelector(".bikinitop").style.background = `url(${link})`;
      break;
    case "hairstyle":
      document.querySelector(".hairstyle").style.background = `url(${link})`;
      break;
    case "background":
      document.querySelector(".background").style.background = `url(${link})`;
      break;
    default:
  }
};
