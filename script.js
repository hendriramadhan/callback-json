function getData(url, callBack) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200) {
      return callBack(JSON.parse(xhr.responseText));
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

const data = getData(
  "https://jsonplaceholder.typicode.com/users",
  function (data) {
    //menghitung jumlah data
    jmlData = data.length;

    //variabel untuk menampung tabel yang akan digenerasikan
    buatTabel = "";

    //perulangan untuk menayangkan data dalam tabel
    for (a = 0; a < jmlData; a++) {
      //mencetak baris baru
      buatTabel += `<tr>
        <td>${a + 1}</td>
        <td>${data[a].name}</td>
        <td>${data[a].username}</td>
        <td>${data[a].email}</td>
        <td>
          ${data[a].address.street},
          ${data[a].address.suite},
          ${data[a].address.city}
         </td>
        <td>${data[a].company.name}</td>
      </tr>`;
    }

    document.getElementsByTagName("table")[0].innerHTML += buatTabel;
  }
);

// "<tr>" +
// //membuat penomoran
// "<td>" +
// (a + 1) +
// "</td>" +
// "<td>" +
// data[a]["name"] +
// "</td>" +
// "<td>" +
// data[a]["username"] +
// "</td>" +
// "<td>" +
// data[a]["email"] +
// "</td>" +
// "<td>" +
// data[a]["address"]["street"] +
// ", " +
// data[a]["address"]["suite"] +
// ", " +
// data[a]["address"]["city"] +
// "</td>" +
// "<td>" +
// data[a]["company"]["name"] +
// "</td>" +
// "<tr/>";
