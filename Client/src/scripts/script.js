const p = document.getElementsByClassName("table");
const info = {
  loading: true,
  data: [],
  error: "",
};

const fetchData = () => {
  fetch("http://localhost:3000/api/data")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //   console.log(data);
      info.data = data;
      info.loading = false;
      info.error = "";
    });
};
fetchData();

const setData = () => {
  for (let i = 0; i < 10; i++) {
    const tr = document.createElement("tr");

    tr.innerHTML = `<tr>
      <td><h4>${i + 1}</h4></td>
      <td><h4>${info.data[i].name}</h4></td>
      <td><h4>₹ ${info.data[i].last}</h4></td>
      <td><h4> <span style="display : inline-block">₹ ${
        info.data[i].buy
      } / </span><span style="display : inline-block"> ₹ ${
      info.data[i].buy
    }</span></h4></td>
      <td><h4>${info.data[i].volume}</h4></td>
      <td><h4>${info.data[i].base_unit}</h4></td>
      </tr>`;
    insertData.appendChild(tr);
  }
}

const insertData = document.getElementById("insertData");
setTimeout(()=> setData() , 2000);


const root = document.getElementById("root");

function themeChange() {
  root.classList.toggle("theme-dark");
  root.classList.toggle("theme-light");
}

let i=0;
const count = document.getElementById('count')
setInterval(()=>{
  count.innerHTML = `${i}`;
  if(i==58){
    fetchData();
  }
  if(i===60){
    insertData.innerHTML = "";
    setData();
    i=0;
  }
  i++;
},1000)


