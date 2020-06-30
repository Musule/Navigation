# Navigation-Debug

[![npm](https://img.shields.io/npm/v/vue-lowdb.svg)](https://www.npmjs.com/package/vue-lowdb) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> 导航网址

## 功能

* 新增分类
* 删除分类
* 编辑分类
* 查询分类
* 新增网址
* 删除网址
* 编辑网址
* 查询网址
* 导出xls

### 【管理员】
![img](./static/image/demo.png)

### 【访客】
![img](./static/image/demo2.png)


## 安装

1.下载Nodejs

>http://nodejs.cn/download/

2.安装Nodejs

（1）检查版本
```bash
node -v
```
（2）设置淘宝镜像（提升安装速度）
```bash
npm config set registry http://registry.npm.taobao.org/
```

>如果你已安装Nodejs环境，可跳过1和2步骤

3.安装与使用

（1）服务端

① 进入目录
```bash
cd /Navigation/server
```
② 执行安装
```bash
npm install
```

③启动后端
```bash
node server
```

![img](static/image/back-end-server.png)

（2）客户端

①进入目录
```bash
cd /Navigation
```
②执行安装
```bash
npm install
```
③启动后端
```bash
npm run dev
```
![img](static/image/front-end-server.png)

（3）浏览器地址访问
>http://localhost:8088

（4）查看你本地IP地址，把localhost替换成你的ip地址（http://IP:8088），发给其他测试小伙伴，他们就能在自己电脑上访问；另外一种办法是将根目录下/dist/static/index.html放入tomcat供外网其他人员使用



# 操作手册

## 登录管理员

账号：admin
密码：123456

![img](static/image/login.jpg)

>更改初始密码，可以通过根目录下文件/server/public/User.json

>访客无需登录，仅有查看权限

## 新增网页

![img](static/image/add_url.jpg)


## 新增分类

![img](static/image/add_category.jpg)


## 筛选分类

![img](static/image/add_category2.jpg)

## 新增账号

![img](static/image/add_username.jpg)

## 导出数据

![img](static/image/add_output.jpg)


