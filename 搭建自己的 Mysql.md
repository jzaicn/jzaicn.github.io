# 搭建自己的 Mysql

## docker mysql（小规模试玩）

使用```docker```搭建```mysql```数据库的优点在于灵活，可以随意搭建多个相互不干扰的数据库。尤其在试用一些开源镜像的时候最合适。

另外作为开发一些小Demo也是极好的，因为在上面的数据随便删，删完了整个数据库恢复，或者整个重建非常方便。

对于不同版本的程序应该对应相应的数据库，而且结构又要完整一致可以通过docker来实现。

当要发布成长期版本，无论是个人的或者团队的、测试的或者线上的都应该部署到具体稳定的服务器。

### 1.

### n.无法远程连接服务器

出现access denied的原因有如下可能：

1. mysql的服务器停止
2. 用户的端口号或者IP导致  
3. mysql的配置文件错误----my.ini等文件
4. root用户的密码错误

```sh
ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: YES)；
```

```sh
mysql -uroot -p

mysql> select host,user,plugin,authentication_string from mysql.user;
mysql> alter user 'root'@'%' identified with mysql_native_password by 'mysqlpassword';
mysql> flush privileges;
```

### n. 数据库大小写敏感设置

```sql
-- 0 文件系统大小写敏感，数据库大小写敏感（linux要设置这个）
-- 1 数据库大小写不敏感
-- 2 文件系统大小写不敏感，数据库大小写敏感（win下要设置这个）
show variables like '%lower_case_table_names%'; 
```

![大小写敏感查询](.\img-搭建自己的Mysql\low_case_table.png "大小写敏感查询")

修改方法： 
1. 找到mysql的安装位置 
2. 找到主目录下的my.ini配置文件 
3. 在[mysqld]节点下添加lower-case-table-names=0 
4. 重启mysql服务 