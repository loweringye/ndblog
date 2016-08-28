##nodejs+express+ejs+bootstrap+php+json
#nodejs中间层现实
初次接触nodejs，是一种非常神奇的东西，未来必火起来。个人觉得最大优势npm命令。 <br />
闲话少说，直入主题。这是一个博客项目，php最为服务端，提供数据给node；nodejs+express作为中间层，负责渲染前端模板。 <br />
项目ndblog里面有两个文件夹，php是服务端，app是nodejs项目。 <br />
服务端是php通过读取json文件数据，对应返回数据；一个list数据，另外一是detail数据；最后return json格式数据。 <br />
前端nodejs+express组合起来，加上bootstrap框架，快速前端网页布局；都做了html5手机响应处理；models里面api.js作为服务端请求和响应接口；其中node版本v4.4.4。 <br />
如要下载即可，cd到项目目录，在执行node ./bin/wwww同时保持http://localhost/api.php正常访问。 <br />
小而美的 <br />

