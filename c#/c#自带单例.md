# c#自带单例

看代码
```cs
private static readonly Lazy<ConfigHelper> Lazy = new Lazy<ConfigHelper>(() => new ConfigHelper());
```
