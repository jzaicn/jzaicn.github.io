# Linux搭建

## 常用命令

### free 查看内存占用

```sh
root@iZwz90n77vus1ejogvvob4Z:~# free
total        used        free      shared  buff/cache   available
Mem:        1009024       56300      763356        2668      189368      811068
Swap:        969964           0      969964
```

### df 查看硬盘占用情况

```sh
root@iZwz90n77vus1ejogvvob4Z:~# df -hl
Filesystem      Size  Used Avail Use% Mounted on
udev            472M     0  472M   0% /dev
tmpfs            99M  2.7M   96M   3% /run
/dev/vda1        40G  3.0G   35G   8% /
tmpfs           493M     0  493M   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
tmpfs           493M     0  493M   0% /sys/fs/cgroup
tmpfs            99M     0   99M   0% /run/user/0
```

## 安装完基础环境搭建

### Putty不断线

在配置服务器，安装服务器过程中，时常由于操作等待时间漫长而短线，痛心疾首。

[putty自动断开问题解决](https://jingyan.baidu.com/article/219f4bf7efe6f6de442d3837.html)

### 修改网卡设置（部分网络譬如静态ip网络）

[解析CIDR](https://blog.csdn.net/shudaqi2010/article/details/78182618)

### 开启telnet（方便远程操控，尤其是复制等操作）

[ubuntu16.10开启telnet办法](https://blog.csdn.net/a1964543590/article/details/69485836)

### 设置国内源

[Ubuntu 18.04 LTS修改 国内源（以中科大源为例）](https://www.cnblogs.com/zifeiy/p/8819291.html)

[Ubuntu18 将系统默认源更改为阿里源](https://blog.csdn.net/u014793936/article/details/81591169)

### 设置虚拟机开机启动对应虚拟系统（譬如使用了虚拟机linux作为服务器）

[设置Windows开机自动启动VirtualBox虚拟机系统](https://wenku.baidu.com/view/50fedba43968011ca2009163.html)

### 设置程序开机启动

[frp怎样开机启动和后台运行?(ubuntu16、18和以往的启动方式不同)](https://blog.csdn.net/weixin_34319111/article/details/92790074)

vi /etc/systemd/system/frps.service 新建此文件，并写入以下内容

```sh
[Unit]
Description=frps daemon

[Service]
Type=simple
ExecStart=/usr/bin/frps -c /etc/frps/frps.ini

[Install]
WantedBy=multi-user.target
```

启动并设为开机自启。
$ systemctl start frps
$ systemctl enable frps

## 搭建Ngrok（没成功╮(￣▽￣")╭ ）

[Ngrok服务器一键安装脚本【支持用户管理】（穿透DDNS）](https://github.com/clangcn/ngrok-one-key-install)

## 搭建frp服务器（成啦 ｡◕‿◕｡ ）

官网说Frp还在开发中，不建议应用到实际生产环境（认同，会有port超时链接不释放问题，不过ngrok没搭建起来，将就着用吧）

[Frp 官方中文文档](https://github.com/fatedier/frp/blob/master/README_zh.md)

[Frp github下载地址](https://github.com/fatedier/frp/releases)

操作过程总结3步走：

1. github上下载对应的服务器和客户端压缩包（哪边用linux、ubuntu、centos、windows分辨好）
2. 对比着把ini配置文件设置好
3. 将frps（结尾s for server）及frps.ini部署到服务器；将frpc（c for client）及frpc.ini发布给要部署公开端口的内网服务器。两边都运行。
4. ok了

已经在 ```ddns.getgeekfun.cn``` 创建了frp ddns服务器，配置如下：

frps.ini

```ini
[common]
bind_addr = 0.0.0.0
bind_port = 7000
bind_udp_port = 7001
kcp_bind_port = 7002
vhost_http_port = 80
vhost_https_port = 443
dashboard_addr = 0.0.0.0
dashboard_port = 7500
allow_ports = 15000-50000
```

frpc.ini

```ini
[common]
server_addr = ddns.getgeekfun.cn
server_port = 7000
# your proxy name will be changed to {user}.{proxy}
user = jzaicn

[udp-port]
type = udp
local_ip = 127.0.0.1
local_port = 60000
remote_port = 15007

[tcp-port]
type = tcp
local_ip = 127.0.0.1
local_port = 60000
remote_port = 15007

[web-http]
type = http
local_ip = 127.0.0.1
local_port = 80
subdomain = web01

[web-https]
type = https
local_ip = 127.0.0.1
local_port = 443
use_encryption = false
use_compression = true
subdomain = web02
```

## openvpn 

[openvpn.net 客户端下载](https://openvpn.net/community-downloads/)



- https://blog.csdn.net/wm5920/article/details/78771796


- https://blog.csdn.net/m0_37499059/article/details/79587771
- https://blog.csdn.net/u013144287/article/details/78589643

自动docker

## 搭建docker

[Ubuntu18.04安装Docker](https://blog.csdn.net/u010889616/article/details/80170767)
