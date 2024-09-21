import { renderListItem } from "../models/ListChosen.js";
import { fetchData } from "../utils/callData.js";

let data = [];

const main = async () => {
  data = await fetchData();
  renderListItem(data);
};
main();
