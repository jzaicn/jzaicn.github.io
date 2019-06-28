# Asp.Net学习

## 传递数据到页面

[ASP.NET MVC传递Model到视图的多种方式总结](https://blog.csdn.net/weixin_34203832/article/details/85965505)

- ViewData
- ViewBag
- PartialView
- TempData
- ViewModel
- Tuple

## 设置页面404错误跳转

### 1. Web.config 配置

![webconfig位置](./Asp.Net学习/webconfig位置.png "webconfig位置")

```xml
<system.web>
    ...
    <customErrors mode="On" defaultRedirect="/">
        <error statusCode="404" redirect="/"/>
    </customErrors>
    ...
</system.web>
```

### 2. Global.asax 配置

![Global位置](./Asp.Net学习/Global位置.png "Global位置")

![Global位置](./Asp.Net学习/Global位置2.png "Global位置")

### 3. IIS配置

![IIS配置位置](./Asp.Net学习/IIS配置位置.png "IIS配置位置")
