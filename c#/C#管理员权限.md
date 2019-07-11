# C#管理员权限

## 如何查看程序权限

```cs
/// <summary>
/// 确定当前主体是否属于具有指定 Administrator 的 Windows 用户组
/// </summary>
/// <returns>如果当前主体是指定的 Administrator 用户组的成员，则为 true；否则为 false。</returns>
public static bool IsAdministrator()
{
    try
    {
        WindowsIdentity identity = WindowsIdentity.GetCurrent();
        WindowsPrincipal principal = new WindowsPrincipal(identity);
        bool result = principal.IsInRole(WindowsBuiltInRole.Administrator);
        return result;
    }
    catch
    {
        return false;
    }
}
```

## 要求管理员权限
https://www.cnblogs.com/Interkey/p/RunAsAdmin.html