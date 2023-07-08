window.onload = () => {
  window.location.href = "#";
  load_list(5);
  load_convertbox();
};
const goToBanner = () => {
  window.location.href = "#banner";
  //console.log("Hey");
};
const goToCoinList = () => {
  window.location.href = "#coinlist";
  //console.log("Hey");
};
const goToConvert = (x) => {
  window.location.href = "#convertbox";
  var list2 = document.getElementById("coin-2");
  console.log(x);
  console.log(list2);
  console.log(list2.selectedIndex);

  list2.selectedIndex = x;
  console.log(list2.selectedIndex);

  //console.log("Hey");
};
const goToFooter = () => {
  window.location.href = "#footer";
  //console.log("Hey");
};
const load_list = (x) => {
  var coinlist = document.getElementById("coinlist");
  if (x > 5) {
    coinlist.style.height = "1200px";
  }
  const headers = Object.keys(coins[0]);
  let tags = "<table>";
  tags += `<tr>
                <td>Name</td>
                <td>نام</td>
                <td>قیمت</td>
                <td>تغییرات</td>                
            </tr>`;

  for (let i = 0; i < x; i++) {
    tags += `<tr>
                <td>${coins[i].enName}</td>
                <td>${coins[i].peName}</td>
                <td>${coins[i].price}</td>
                <td>${coins[i].changes}%</td>
                <td>
                    <a class="btn btn_buy" onclick="goToConvert(${i})" >buy / sell</a>
                </td>
                
            </tr>`;
  }
  tags += "</table>";
  tags += `<a class="table_link" onclick="load_list(15)">جدول کامل</a>`;
  coinlist.innerHTML = tags;
};

const load_convertbox = () => {
  var convertbox = document.getElementById("convertbox");
  var tags = `<div class="convert-main" >`;
  //First Dropdown
  tags += `<div class="row-1">`;
  tags += `<div class="col-4">`;
  tags += `<select id="coin-1" onchange="updateConvert()">`;
  for (let i = 0; i < coins.length; i++) {
    tags += `<option value="${coins[i].enName}">
                ${coins[i].peName}
            </option>`;
  }
  tags += `</select>`;
  tags += `</div>`;
  tags += `<label class="col-2">چی داری؟ </label>`;

  tags += `<input id="coininput" type="number" class="col-3" onkeyup="updateConvert()"/>`;
  tags += `<label class="col-2">چقدر داری؟ </label>`;
  tags += `</div>`;
  //Second Dropdown
  tags += `<div class="row-1">`;
  tags += `<div class="col-4">`;
  tags += `<select id="coin-2" onchange="updateConvert()">`;
  for (let i = 0; i < coins.length; i++) {
    //console.log(coins[i]);
    tags += `<option value="${coins[i].enName}">
                ${coins[i].peName}
            </option>`;
  }
  tags += `</select>`;
  tags += `</div>`;
  tags += `<label class="col-2">چی میخوای؟</label>`;
  tags += `<label id="result" class="col-3"></label>`;
  tags += `<label class="col-2"> : انقدر میشه </label>`;
  tags += `</div>`;

  tags += `<div class="row-1">`;
  tags += `<div class="col-2">`;

  tags += "</div>";
  tags += `<div class="col-2">`;
  tags += "</div>";
  tags += "</div>";
  tags += "</div>";

  convertbox.innerHTML = tags;
};
const updateConvert = () => {
  var coin1_select = document.getElementById("coin-1");
  var selected1 = coin1_select.options[coin1_select.selectedIndex].value;
  var price1 = priceOf(selected1);

  var coin2_select = document.getElementById("coin-2");
  var selected2 = coin2_select.options[coin2_select.selectedIndex].value;
  var price2 = priceOf(selected2);

  var coininput = document.getElementById("coininput");
  var input = coininput.value;

  var result = document.getElementById("result");
  result.innerHTML = ((price1 * 1.0) / price2) * 1.0 * input;
};

const priceOf = (name) => {
  for (let i = 0; i < coins.length; i++) {
    if (coins[i].enName === name) return parseFloat(coins[i].price);
  }
};
