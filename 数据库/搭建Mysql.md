# 搭建Mysql

- [搭建Mysql](#%E6%90%AD%E5%BB%BAmysql)
  - [linux docker mysql（小规模试玩）](#linux-docker-mysql%E5%B0%8F%E8%A7%84%E6%A8%A1%E8%AF%95%E7%8E%A9)
    - [1.](#1)
    - [n.无法远程连接服务器](#n%E6%97%A0%E6%B3%95%E8%BF%9C%E7%A8%8B%E8%BF%9E%E6%8E%A5%E6%9C%8D%E5%8A%A1%E5%99%A8)
    - [n. 数据库大小写敏感设置](#n-%E6%95%B0%E6%8D%AE%E5%BA%93%E5%A4%A7%E5%B0%8F%E5%86%99%E6%95%8F%E6%84%9F%E8%AE%BE%E7%BD%AE)

## linux docker mysql（小规模试玩）

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

![大小写敏感查询](.\搭建Mysql\low_case_table.png "大小写敏感查询")

修改方法： 
1. 找到mysql的安装位置 
2. 找到主目录下的my.ini配置文件 
3. 在[mysqld]节点下添加lower-case-table-names=0 
4. 重启mysql服务 