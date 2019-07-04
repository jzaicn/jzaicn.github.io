# C#中类似Promise写法

通过```Task.ContinueWith```实现类似于Promise的链式执行，中间有错直接抛出。

```c#
static void Main(string[] args)
{
    Task task = new Task(() =>
    {
        Console.WriteLine("前驱动任务执行中...");
    });
    Task faultedTask = task.ContinueWith(antecedentTask =>
    {
        Console.WriteLine("延续动任务执行中...");
    }, TaskContinuationOptions.OnlyOnFaulted);
    task.Start();
    try
    {
        faultedTask.Wait();
    }
    catch (AggregateException ex)
    {
        Console.WriteLine($"Error: {ex.GetType().Name}");
        foreach (Exception item in ex.InnerExceptions)
        {
            Console.WriteLine($"{item.GetType().Name}, {item.Message}");
        }
    }
    Console.WriteLine($"前驱任务状态{task.Status}");
    Console.WriteLine($"延续任务状态{faultedTask.Status}");
}
```

升级后使用```async/await```也可实现同步式写法，同样可捕获异常，参看对应章节。