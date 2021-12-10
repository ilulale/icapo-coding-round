let dabTheTab = (score_arr, query_arr) => {
  let finalAns = [];
  finalAns = query_arr.map((query) => {
    let tmp_arr = score_arr.slice(0, query);
    tmp_arr.sort();
    return tmp_arr[tmp_arr.length - 1];
  });
  return finalAns;
};

console.log(dabTheTab([5, 3, 4, 1, 6], [2, 5, 1, 3]));
