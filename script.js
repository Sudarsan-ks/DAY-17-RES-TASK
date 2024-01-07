var ele = fetch("https://restcountries.com/v3.1/all");
ele.then((data)=>data.json()).then((res)=>foo(res));

var container = document.createElement("div");
container.className="container";

var row = document.createElement("div");
row.className = "row";

function foo(res){
    for(var i=0; i<res.length; i++){
        var col = document.createElement("div");
        col.className="col-md-4";
        col.innerHTML+=`<div class="card" style="width: 18rem;">
        <img src="${res[i].flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
          <p><b>NAME:</b> ${res[i].name.common}</p>
          <p><b>CAPITAL:</b> ${res[i].capital}</p>
        </div>
      </div>`
          document.body.append(container);
          container.append(row);
          row.append(col);
    }
}
