//第一步：创建网络请求对象（http）去服务端要数据，接受服务端数据
var xhr = new XMLHttpRequest();

// 第二步：与服务器端简历连接（get/post）,请求方式以及连接哪个服务器，用连接哪个接口
xhr.open('post', 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/login');
//设置请求头，告诉服务器我们传递过去的数据是以表单的形式传递过去的
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

//第三步：向服务器发送请求，传递参数
var par = "username=" + userName + "&pwd=" + pwd;
xhr.send(par);

//第四步：接受服务器返回的数据
xhr.onreadystatechange = function () {
    //xhr.readyState ==4 代表数据请求完成
    //xhr.status ==200 代表数据成功返回
    if (xhr.readyState == 4 && xhr.status == 200) {
        // var responseData = xhr.responseText;
        //responseText里面包含了服务器端返回的数据
        var responseData = JSON.parse(xhr.responseText);
        var str = responseData.data;
        if (str == "登录成功") {
            location.href = "DropletService.html";
        } else {
            alert(str);
        }
    }
}