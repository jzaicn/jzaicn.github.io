# WinForm全局异常捕获

要捕获全部异常，WinForm要写3个异常捕获位置：

```cs
static class Program
{
    /// <summary>
    /// 应用程序的主入口点。
    /// </summary>
    [STAThread]
    static void Main()
    {
        try
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            // 01
            Application.ThreadException += new System.Threading.ThreadExceptionEventHandler(Application_ThreadException);
            // 02
            AppDomain.CurrentDomain.UnhandledException += new UnhandledExceptionEventHandler(CurrentDomain_UnhandledException);
            Application.Run(new Form1());
        }
        catch (Exception ex)
        {
            // 03
            HgLogger.HgLog.Error($"Main异常{ex.ToString()}");
        }
    }
    
    // 01全局线程异常
    static void Application_ThreadException(object sender, System.Threading.ThreadExceptionEventArgs ex)
    {
        HgLogger.HgLog.Error("全局线程异常：" + ex.Exception.ToString());
    }

    // 02全局未捕获异常
    static void CurrentDomain_UnhandledException(object sender, UnhandledExceptionEventArgs ex)
    {
        HgLogger.HgLog.Error("全局未捕获异常：" + ex.ExceptionObject.ToString());
    }
}
```