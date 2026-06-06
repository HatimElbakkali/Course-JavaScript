
// 2- AND 3- and 4
let myRequest = new XMLHttpRequest()
myRequest.open("GET", "https://dummyjson.com/posts", true);
myRequest.send()
myRequest.onreadystatechange = function(){
    if(this.status === 200 && this.readyState === 4){
        let mainData = JSON.parse(this.responseText); // Object

        for (let i = 0; i < mainData.posts.length ; i++){
            let div = document.createElement("div")
            let h = document.createElement("h1")
            let p = document.createElement("p")
            let p1 = document.createElement("p")
            let p2 = document.createElement("p")
            h.textContent = mainData[i].title;
            p.textContent = mainData[i].id;
            p1.textContent = "Author: " + mainData[i].title;
            p2.textContent = "Category: " + mainData[i].body;
            div.append(h, p, p1, p2)
            document.body.append(div)
            // mainData[i]["category"] = "All"
        }
        console.log(mainData)
    }
}
