var express = require('express');
var bodyParser = require('body-parser');
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'debug';
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const Category = new FileSync('./public/Category.json')
const UrlData = new FileSync('./public/UrlData.json')
const User = new FileSync('./public/User.json')
const Category_db = low(Category)
const UrlData_db = low(UrlData)
const User_db = low(User)
var app = express();
app.use(express.json());
var cookieParser = require('cookie-parser');
app.use(cookieParser("secret"));
app.all("*", function (req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With');
   res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
   next();
});
/**
 * @author liyinchi
 * */
app.post('/add_category', function (req, res) {
   try {
      Category_db.get('category').push({ "category_id": req.body.category_id, "category_name": req.body.category_name, "category_create_time": req.body.category_create_time, "category_is_delete": req.body.category_is_delete })
         .write();
      res.send({ code: 200, "msg": "添加成功" });
      logger.info({ code: 200, "msg": "添加成功" })
   } catch (err) {
      res.send({ code: 204, "msg": err });
      logger.error({ code: 204, "msg": err })
   }
})
/**
 * @author liyinchi
 * */
app.get('/select_category', function (req, res) {
   try {
      var obj = Category_db.get('category')
      res.send({ code: 200, "msg": obj });
      logger.info({ code: 200, "msg": obj })
   } catch (err) {
      res.send({ code: 204, "msg": err });
      logger.error({ code: 204, "msg": err })
   }
})
/**
 * @author liyinchi
 * */
app.post('/search_category_data_condition', function (req, res) {
   var obj;
   try {
      obj = Category_db.get('category')
         .find({ "category_name": req.body.category_name })
      logger.info({ code: 200, "msg": [obj] })
      res.send({ code: 200, "msg": [obj] });

   } catch (err) {
      res.send({ code: 204, "msg": err });
      logger.error({ code: 204, "msg": err })
   }
})
/**
 * @author liyinchi
 * */
app.put('/update_category', function (req, res) {
   try {
      Category_db.get('category')
         .find({ "category_id": req.body.category_id }).assign({ "category_id": req.body.category_id, "category_name": req.body.category_name, "category_create_time": req.body.category_create_time, "category_is_delete": req.body.category_is_delete })
         .write()
      res.send({ code: 200, "msg": "更改成功" });
      logger.info({ code: 200, "msg": "更改成功" })
   } catch (err) {
      res.send({ code: 204, "msg": err });
      logger.error({ code: 204, "msg": err })
   }
})
/**
 * @author liyinchi
 * */
app.delete('/delete_category', function (req, res) {
   try {
      Category_db.get('category')
         .find({ "category_id": req.body.category_id }).assign({ "category_id": req.body.category_id, "category_is_delete": true })
         .write()
      res.send({ code: 200, "msg": "删除成功" });
      logger.info({ code: 200, "msg": "删除成功" })
   } catch (err) {
      res.send({ code: 204, "msg": err });
      logger.error({ code: 204, "msg": err })
   }
})
/**
 * @author liyinchi
 * */
app.post('/add_url_data', function (req, res) {
   try {
      UrlData_db.get('url_data').push({ "nav_url_id": req.body.nav_url_id, "nav_url_name": req.body.nav_url_name, "nav_url": req.body.nav_url, "nav_url_category": req.body.nav_url_category, "nav_url_remark": req.body.nav_url_remark, "nav_url_create_time": req.body.nav_url_create_time, "nav_url_is_delete": false })
         .write();
      res.send({ code: 200, "msg": "添加成功" });
      logger.info({ code: 200, "msg": "添加成功" })
   } catch (err) {
      res.send({ code: 204, "msg": err });
      logger.error({ code: 204, "msg": err })
   }
})
/**
 * @author liyinchi
 * */
app.get('/select_url_data', function (req, res) {
   try {
      var obj = UrlData_db.get('url_data')
      res.send({ code: 200, "msg": obj });
      logger.info({ code: 200, "msg": obj })
   } catch (err) {
      res.send({ code: 204, "msg": err });
      logger.error({ code: 204, "msg": err })
   }
})

/**
 * @author liyinchi
 * */
app.post('/search_url_data_condition', function (req, res) {
   var obj;
   try {
      obj = UrlData_db.get('url_data')
         .find({ "nav_url_name": req.body.nav_url_name })
      logger.info({ code: 200, "msg": [obj] })
      res.send({ code: 200, "msg": [obj] });

   } catch (err) {
      res.send({ code: 204, "msg": err });
      logger.error({ code: 204, "msg": err })
   }
})
/**
 * @author liyinchi
 * */
app.put('/update_url_data', function (req, res) {
   try {
      UrlData_db.get('url_data')
         .find({ "nav_url_id": req.body.nav_url_id }).assign({ "nav_url_id": req.body.nav_url_id, "nav_url": req.body.nav_url, "nav_url_name": req.body.nav_url_name, "nav_url_category": req.body.nav_url_category, "nav_url_remark": req.body.nav_url_remark, "nav_url_create_time": req.body.nav_url_create_time, "nav_url_is_delete": false })
         .write()
      res.send({ code: 200, "msg": "更改成功" });
      logger.info({ code: 200, "msg": "更改成功" })
   } catch (err) {
      res.send({ code: 204, "msg": err });
      logger.error({ code: 204, "msg": err })
   }
})
/**
 * @author liyinchi
 * */
app.delete('/delete_url_data', function (req, res) {
   try {
      UrlData_db.get('url_data')
         .find({ "nav_url_id": req.body.nav_url_id }).assign({ "nav_url_id": req.body.nav_url_id, "nav_url_is_delete": true })
         .write()
      res.send({ code: 200, "msg": "删除成功" });
      logger.info({ code: 204, "msg": "删除成功" })
   } catch (err) {
      res.send({ code: 204, "msg": err });
      logger.error({ code: 204, "msg": err })
   }
})

/**
 * @author liyinchi
 * */
app.post('/add_user', function (req, res) {
   try {
      User_db.get('user').push({ "user_id": req.body.user_id, "user_name": req.body.user_name, "password": req.body.password, "function_permission": req.body.function_permission, "user_create_time": req.body.user_create_time, "user_is_delete": req.body.user_is_delete })
         .write();
      res.send({ code: 200, "msg": "添加成功" });
      logger.info({ code: 200, "msg": "添加成功" })
   } catch (err) {
      res.send({ code: 204, "msg": err });
      logger.error({ code: 204, "msg": err })
   }

})
/**
 * @author liyinchi
 * */
app.get('/select_user', function (req, res) {
   try {
      var obj = User_db.get('user')
      res.send({ code: 200, "msg": obj });
      logger.info({ code: 200, "msg": obj })
   } catch (err) {
      res.send({ code: 204, "msg": err });
      logger.error({ code: 204, "msg": err })
   }

})

/**
 * @author liyinchi
 * */
app.post('/search_user_condition', function (req, res) {
   var obj;
   try {
      obj = User_db.get('user')
         .find({ "user_name": req.body.user_name })
      logger.info({ code: 200, "msg": [obj] })
      res.send({ code: 200, "msg": [obj] });

   } catch (err) {
      res.send({ code: 204, "msg": err });
      logger.error({ code: 204, "msg": err })
   }
})

/**
 * @author liyinchi
 * */
app.put('/update_user', function (req, res) {
   try {
      User_db.get('user')
         .find({ "user_id": req.body.user_id }).assign({ "user_id": req.body.user_id, "user_name": req.body.user_name, "password": req.body.password, "function_permission": req.body.function_permission, "user_create_time": req.body.user_create_time, "user_is_delete": req.body.user_is_delete })
         .write()
      res.send({ code: 200, "msg": "更改成功" });
      logger.info({ code: 200, "msg": "更改成功" })
   } catch (err) {
      res.send({ code: 204, "msg": err });
      logger.error({ code: 204, "msg": err })
   }
})
/**
 * @author liyinchi
 * */
app.delete('/delete_user', function (req, res) {
   try {
      User_db.get('user')
         .find({ "user_id": req.body.user_id }).assign({ "user_is_delete": true })
         .write()
      res.send({ code: 200, "msg": "删除成功" });
      logger.info({ code: 200, "msg": "删除成功" })
   } catch (err) {
      res.send({ code: 204, "msg": err });
      logger.error({ code: 204, "msg": err })
   }
})


/**
 * @author liyinchi
 * */
app.post('/login', function (req, res) {
   var obj;
   try {
      obj = User_db.get('user')
         .find({ "user_name": req.body.user_name })
      logger.info({ code: 200, "msg": [obj] })
      if (req.body.password === JSON.stringify(obj.get('password')).split('"')[1]) {
         res.send({ code: 200, "msg": "登录成功", "permission": obj.get('function_permission') });
      } else {
         res.send({ code: 201, "msg": "密码错误" });
      }

   } catch (err) {
      res.send({ code: 204, "msg": err });
      logger.error({ code: 204, "msg": err })
   }
})
/**
 * @author liyinchi
 * */
var server = app.listen(8006, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("应用实例，访问地址为 http://%s:%s", host, port)
})