# AsyncAwait 异步编程

## 最佳实践

```c#
/// <summary>
/// 异步执行精灵任务，同一个精灵多次调用此函数将会排队执行。
/// 运行过程中有任何中断流程的异常将会抛出，请最外层工作管理处理这些异常。
/// </summary>
/// <exception cref="Exception"></exception>
/// <param name="taskParam">运行过程中有任何中断流程的异常将会抛出，请最外层工作管理处理这些异常。</param>
/// <returns></returns>
public async Task<bool> SpriteWorkAsync(TaskParam taskParam)
{
    try
    {
        await semaphoreOne.WaitAsync();

        // 等待一个sprite 空闲
        do { await Task.Delay(100); } while (SpriteInformation.State != SpriteState.Free.ToString());   //要求等到Free

        // 设置任务参数
        m_Exception = null;
        TaskParam(taskParam);
        do { TryThrow(); await Task.Delay(100); } while (SpriteInformation.State != SpriteState.Free.ToString());   //要求等到Free

        // 启动任务
        TaskStart();
        do { TryThrow(); await Task.Delay(100); } while (SpriteInformation.State != SpriteState.Busy.ToString());   //要求等到Busy

        // 等待工作完成
        do { TryThrow(); await Task.Delay(100); } while (SpriteInformation.State != SpriteState.Free.ToString());   //要求等到Free

        // 获得运行结果
        bool Succ = TaskInformation.IsDone && !TaskInformation.IsCancel && !TaskInformation.IsError;
        bool Fail = TaskInformation.IsDone && TaskInformation.IsError;
        bool Cancel = TaskInformation.IsDone && TaskInformation.IsCancel;

        // 根据执行结果返回
        if (Fail)
        {
            throw new Exception($"运行过程中发生了异常{TaskInformation}");
        }
        return Succ;
    }
    finally
    {
        semaphoreOne.Release();
    }
}
```

## 解释

上述代码通过 await、async ，配合异步查询状态将异步变成同步，并且检测等待的过程中通过doWhile抛出异步捕获到到异常消息，像同步一样可以中断这个流程。到达编写简易直接的目的。



### 通过信号量来做多线程易步锁
[Async Waiting inside C# Locks](https://blog.cdemi.io/async-waiting-inside-c-sharp-locks/)
代替Lock(){}


[C# Task中的Func, Action, Async与Await的使用](https://www.cnblogs.com/ZengYunChun/p/5937666.html?tdsourcetag=s_pcqq_aiomsg)