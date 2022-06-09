let n = 1;
getPage.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('get',`/page${n + 1}`)
    request.onreadystatechange = () =>{
        if(request.readyState === 4 && request.status === 200){
            const array = JSON.parse(request.response);
            array.forEach(item =>{
                const li = document.createElement("li");
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n +=1
        }
    };
    request.send();
};
getJSON.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('get','/5.json')
    request.onreadystatechange = () =>{
        if(request.readyState === 4 && request.status === 200){
            const object = JSON.parse(request.response);
            myName.textContent = object.name
        }
    }
    request.send()
}
getXML.onclick= ()=>{
    const request = new XMLHttpRequest();
    request.open('get','/4.xml')
    request.onreadystatechange = () =>{
        if(request.readyState === 4 && request.status === 200){
            const dom = request.responseXML;
            const text = dom .getElementsByTagName('warning')[0].textContent
            console.log(text.trim());
        }
    }
    request.send()
}
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/3.html");
  request.onload = () => {
    //创建div
    const div = document.createElement("div");
    //填写div
    div.innerHTML = request.response;
    //放到body
    document.body.appendChild(div);
  };
  request.onerror = () => {};
  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/2.js");
  request.onload = () => {
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };
  request.onerror = () => {};
  request.send();
};

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/style.css"); //readyState 1
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      //下载完成 不知道是成功2xx 还是失败4xx 5xx
      if (request.status >= 200 && request.status < 300) {
        //创建style标签
        const style = document.createElement("style");
        //填写style内容
        style.innerHTML = request.response;
        //查到header
        document.head.appendChild(style);
      }else{
          alert('加载css失败')
      }
    }
  };
  request.onerror = () => {
    console.log("defeat");
  };
  request.send();
};
