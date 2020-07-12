# Navigation

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
* 新建管理员账号、菜单权限
* 编辑管理员账号、菜单权限
* 导出xls

### 【管理员】
![img](./static/image/demo.png)

### 【访客】
![img](./static/image/demo2.png)


## 开发环境

|名称|版本|
|-|-|
|nodejs|8.11.4|
|vue|2.X|

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

① 打开终端窗口，进入目录/Navigation/server下

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

（2）前端

第一种：你可以直接打开目录下/dist/index.html直接使用，或者将dist放入tomcat的webapp中实现web服务器让其他小伙伴也能通过ip地址访问

第二种：你可以启动开发模式，步骤如下所示。

①再次打开新的终端窗口，进入目录/Navigation下，执行命令行如下命令：

```bash
cd /Navigation
```

②安装

* 安装cnpm
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

* 安装node-sass
```bash
cnpm install node-sass --save
```
* 安装
```bash
npm install
```
③启动前端
```bash
npm run dev
```
![img](static/image/front-end-server.png)

（3）浏览器地址访问
>http://localhost:8088

（4）建议，使用另外一种办法是将根目录下/dist整个文件夹放入tomcat中供外网其他人员使用

# 操作手册

## 登录管理员

账号：admin
密码：123456

![img](static/image/login.jpg)

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


# 修复记录

* 2020-07-12 修复node-sass版本4.11.0因版本过低导致的报错