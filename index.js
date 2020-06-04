var btn=document.getElementById("i_btn");
btn.onclick=function() {
    var userName = encodeURIComponent(document.getElementById("i_account").value);
    var pwd = encodeURIComponent(document.getElementById("i_pwd").value);
    // 创建网络请求对象
    var xhr = new XMLHttpRequest();

    xhr.open('post', 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/login');

    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    var par = "username=" + userName + "&pwd=" + pwd;
    xhr.send(par);
    xhr.onreadystatechange = function () {
        //xhr.readyState == 4数据请求完成
        //xhr.status == 200数据成功返回
        if (xhr.readyState == 4 && xhr.status == 200) {
            //responseText里面包含了服务端返回的数据

            var responseData = JSON.parse(xhr.responseText);
            var str = responseData.data;
            if (str == "登录成功") {
                location.href = "1.html";
            } else {
                alert(str);
            }
        }
    }
}