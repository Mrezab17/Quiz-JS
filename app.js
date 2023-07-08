const goToBanner = () => {
  window.location.href = "#banner";
  //console.log("Hey");
};
const goToCoinList = () => {
  window.location.href = "#coinlist";
  //console.log("Hey");
};
const goToConvert = () => {
  window.location.href = "#convertbox";
  //console.log("Hey");
};
const goToFooter = () => {
  window.location.href = "#footer";
  //console.log("Hey");
};
const loading = () => {
  window.location.href = "#";
  load_list(5);
  load_convertbox();
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
    console.log(coins[i]);
    tags += `<tr>
                <td>${coins[i].enName}</td>
                <td>${coins[i].peName}</td>
                <td>${coins[i].price}</td>
                <td>${coins[i].changes}%</td>
                <td>
                    <a class="btn btn_buy" >buy / sell</a>
                </td>
                
            </tr>`;
  }
  tags += "</table>";
  tags += `<a class="table_link" onclick="load_list(15)">جدول کامل</a>`;
  coinlist.innerHTML = tags;
};
