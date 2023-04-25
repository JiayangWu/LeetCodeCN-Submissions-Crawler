/**
 * @author lgw
 * @email lianchang16@qq.com
 */

// 需要到下面 url 逐页面的获取题目 titleList, 复制到控制台即可操作
// https://leetcode.cn/problemset/all/?page=19
(function () {
  let urlName = window.location.href;
  // let numPage = urlName.substring(urlName.length - 2);
  let numPage = "",
    idx = urlName.length - 1;
  while (
    urlName[idx].charCodeAt() >= "0".charCodeAt() &&
    urlName[idx].charCodeAt() <= "9".charCodeAt()
  ) {
    numPage = urlName[idx] + numPage;
    idx--;
  }
  let fileName = numPage + ".txt";

  let els = document.getElementsByClassName(
    "h-5 hover:text-primary-s dark:hover:text-dark-primary-s"
  );
  console.log(els.length);

  let saveDatas = [];
  for (let i = 0; i < els.length; i++) {
    let text = els[i].innerText;
    let lastDot = text.lastIndexOf(".");
    let pre = text.substring(0, lastDot),
      aft = text.substring(lastDot + 1);
    let saveData = pre + "\t" + aft + "\n";
    // console.log(pre, aft, saveData);
    saveDatas.push(saveData);
  }
  let strSavaData = saveDatas.join("");
  function exportRaw(data, name) {
    var urlObject = window.URL || window.webkitURL || window;
    var export_blob = new Blob([data]);
    var save_link = document.createElementNS(
      "http://www.w3.org/1999/xhtml",
      "a"
    );
    save_link.href = urlObject.createObjectURL(export_blob);
    save_link.download = name;
    save_link.click();
  }
  exportRaw(strSavaData, fileName);
})();
