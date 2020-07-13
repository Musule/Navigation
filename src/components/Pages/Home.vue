<template>
  <div id="Home">
    <br />
    <br />
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>网址管理</el-breadcrumb-item>
    </el-breadcrumb>
    <br />
    <el-dialog title="新建网址" :visible.sync="add_isDisplay" width="40%" :before-close="handleClose">
      <div>
        <el-form
          size="medium"
          :model="nav_url_form"
          :rules="nav_url_rules"
          ref="nav_url_form"
          label-width="400px"
          class="demo-ruleForm"
        >
          <el-form-item label="ID" :label-width="formLabelWidth" prop="nav_url_id">
            <el-input
              clearable
              maxlength="200"
              style="width:200px"
              id="nav_url_id"
              v-model="nav_url_form.nav_url_id"
              placeholder="请输入ID"
            ></el-input>
          </el-form-item>
          <el-form-item label="名称" :label-width="formLabelWidth" prop="nav_url_name">
            <el-input
              clearable
              maxlength="200"
              style="width:200px"
              id="nav_url_name"
              v-model="nav_url_form.nav_url_name"
              placeholder="请输入名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="地址" :label-width="formLabelWidth" prop="nav_url">
            <el-input
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 4}"
              maxlength="2000"
              style="width:400px"
              id="nav_url"
              v-model="nav_url_form.nav_url"
              placeholder="请输入地址"
            ></el-input>
          </el-form-item>
          <el-form-item label="分类" :label-width="formLabelWidth" prop="nav_url_category">
            <el-select v-model="nav_url_form.nav_url_category" placeholder="请选择分类">
              <el-option
                v-for="item in category_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备注" :label-width="formLabelWidth" prop="nav_url_remark">
            <el-input
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 4}"
              maxlength="500"
              style="width:400px"
              id="nav_url_remark"
              v-model="nav_url_form.nav_url_remark"
              placeholder="请输入备注"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submit_add_form('nav_url_form')">提交</el-button>
        <el-tooltip class="item" effect="dark" content="确定要取消？" placement="top">
          <el-button @click="submit_add_form_cancel">取 消</el-button>
        </el-tooltip>
      </span>
    </el-dialog>
    <el-dialog title="编辑网址" :visible.sync="edit_isDisplay" width="40%" :before-close="handleClose">
      <div>
        <el-form
          size="medium"
          :model="nav_url_eidt_form"
          :rules="nav_url_rules"
          ref="nav_url_eidt_form"
          label-width="400px"
          class="demo-ruleForm"
        >
          <el-form-item label="ID" :label-width="formLabelWidth" prop="nav_url_id">
            <el-input
              clearable
              maxlength="200"
              style="width:200px"
              id="nav_url_id"
              v-model="nav_url_eidt_form.nav_url_id"
              placeholder="请输入ID"
            ></el-input>
          </el-form-item>
          <el-form-item label="名称" :label-width="formLabelWidth" prop="nav_url_name">
            <el-input
              clearable
              maxlength="200"
              style="width:200px"
              id="nav_url_name"
              v-model="nav_url_eidt_form.nav_url_name"
              placeholder="请输入名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="地址" :label-width="formLabelWidth" prop="nav_url">
            <el-input
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 4}"
              maxlength="2000"
              style="width:400px"
              id="nav_url"
              v-model="nav_url_eidt_form.nav_url"
              placeholder="请输入地址"
            ></el-input>
          </el-form-item>
          <el-form-item label="分类" :label-width="formLabelWidth" prop="nav_url_category">
            <el-select v-model="nav_url_eidt_form.nav_url_category" placeholder="请选择分类">
              <el-option
                v-for="item in category_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备注" :label-width="formLabelWidth">
            <el-input
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 4}"
              maxlength="500"
              style="width:400px"
              id="nav_url_remark"
              v-model="nav_url_eidt_form.nav_url_remark"
              placeholder="请输入备注"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submit_edit_form('nav_url_eidt_form')">提交</el-button>
        <el-tooltip class="item" effect="dark" content="确定要取消？" placement="top">
          <el-button @click="submit_add_form_cancel">取 消</el-button>
        </el-tooltip>
      </span>
    </el-dialog>
    <el-drawer
      size="45%"
      id="view"
      title="查看网址"
      :visible.sync="view_isDisplay"
      :direction="direction"
    >
      <div>
        <el-form
          size="medium"
          :model="nav_url_eidt_form"
          :rules="nav_url_rules"
          ref="nav_url_eidt_form"
          label-width="400px"
          class="demo-ruleForm"
          close-on-press-escape
        >
          <el-form-item label="名称" :label-width="formLabelWidth" prop="nav_url_name">
            <el-input
              clearable
              maxlength="200"
              style="width:200px"
              id="nav_url_name"
              v-model="nav_url_eidt_form.nav_url_name"
              placeholder="名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="地址" :label-width="formLabelWidth" prop="nav_url">
            <el-input
              type="textarea"
              :autosize="{ minRows: 5, maxRows: 5}"
              maxlength="2000"
              style="width:400px"
              id="nav_url"
              v-model="nav_url_eidt_form.nav_url"
              placeholder="地址"
            ></el-input>
          </el-form-item>
          <el-form-item label="分类" :label-width="formLabelWidth" prop="nav_url_category">
            <el-select disabled v-model="nav_url_eidt_form.nav_url_category" placeholder="请选择分类">
              <el-option
                v-for="item in category_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备注" :label-width="formLabelWidth">
            <el-input
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 4}"
              maxlength="500"
              style="width:400px"
              id="nav_url_remark"
              v-model="nav_url_eidt_form.nav_url_remark"
              placeholder="备注"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
    <div
      id="default_content"
      v-show="isDisplay"
      style="margin-top:10px;margin-left:30px;margin-bottom:30px"
    >
      <el-input
        v-show="is_show_url_search"
        suffix-icon="el-icon-search"
        clearable
        maxlength="100"
        style="width:400px;margin-right:5px;margin-left:5px"
        v-model="db_Select_input_name"
        placeholder="请输入名称"
      ></el-input>

      <el-button
        v-show="is_show_url_search"
        @click="search()"
        id="Select_button"
        type="primary"
        style="margin-right:5px;margin-left:5px"
      >搜索</el-button>

      <p></p>
      <el-button
        v-show="is_show_url_add"
        @click="add_button()"
        type="primary"
        style="margin-right:5px;margin-left:5px"
      >新增网址</el-button>
      <el-button
        v-show="is_show_output_url"
        @click="exportExcel"
        id="exportExcel"
        type="warning"
        style="margin-right:5px;margin-left:5px"
      >导出网址</el-button>
      <p></p>

      <el-table
        ref="multipleTable"
        id="out-table"
        :row-class-name="tableRowClassName"
        border
        size="medium"
        highlight-current-row
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        :data="tableData.slice((currentPage-1)*PageSize,currentPage*PageSize)"
        style="width: 100%"
        :default-sort="{prop: 'nav_url_id', order: 'descending'}"
      >
        <el-table-column type="index" label="序号" header-align="center" width="70" align="center"></el-table-column>
        <el-table-column
          prop="nav_url_category"
          sortable
          :filters="category_options"
          :filter-method="filterHandler"
          label="分类"
          width="140"
          align="center"
        ></el-table-column>
        <el-table-column prop="nav_url_name" sortable label="名称" width="250" align="center"></el-table-column>

        <el-table-column sortable prop="nav_url" label="地址" align="center" width="470">
          <template slot-scope="scope">
            <el-link
              type="primary"
              :href="scope.row.nav_url"
              target="_blank"
              class="buttonText"
            >{{scope.row.nav_url}}</el-link>
          </template>
        </el-table-column>
        <el-table-column prop="nav_url_remark" sortable label="备注" width="220" align="center"></el-table-column>
        <el-table-column label="操作" align="center" width="200">
          <template slot-scope="scope">
            <el-tooltip content="编辑" placement="top">
              <el-button
                v-show="is_show_url_edit"
                type="warning"
                @click="handleEdit(scope.$index, scope.row)"
                icon="el-icon-edit"
                circle
              ></el-button>
            </el-tooltip>
            <el-tooltip content="查看" placement="top">
              <el-button
                type="primary"
                @click="handleView(scope.$index, scope.row)"
                icon="el-icon-view"
                circle
              ></el-button>
            </el-tooltip>
            <el-tooltip content="删除" placement="top">
              <el-button
                v-show="is_show_url_delete"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                icon="el-icon-delete"
                circle
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="PageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FileSaver from "file-saver";
import XLSX from "xlsx";
import Category_json from "../../../server/public/Category.json";
import UrlData_json from "../../../server/public/UrlData.json";
import Category from "./Category";
export default {
  inject: ["reload"],
  provide() {
    return {
      reload: this.reload
    };
  },
  name: "Home",
  data() {
    return {
      nav_url_form: {
        nav_url_id: "",
        nav_url_name: "",
        nav_url: "",
        nav_url_category: "",
        nav_url_remark: "",
        nav_url_is_delete: false
      },
      nav_url_eidt_form: {
        nav_url_id: "",
        nav_url_name: "",
        nav_url: "",
        nav_url_category: "",
        nav_url_remark: "",
        nav_url_is_delete: false
      },
      loading: true,
      db_Select_input_name: "",
      tableData: [],
      tableData_result: [],
      currentPage: 1,
      totalCount: 0,
      pageSizes: [5, 10, 20, 30, 40, 50, 100],
      PageSize: 100,
      isDisplay: true,
      add_isDisplay: false,
      edit_isDisplay: false,
      formLabelWidth: "100px",
      isRouterAlive: true,
      nav_url_rules: {
        nav_url_id: [
          { required: true, message: "请输入ID", trigger: "blur" },
          {
            min: 1,
            max: 50,
            message: "长度在 1 到 50 个字符",
            trigger: "blur"
          }
        ],
        nav_url_name: [
          { required: true, message: "请输入标题", trigger: "blur" },
          {
            min: 2,
            max: 500,
            message: "长度在 2 到 500 个字符",
            trigger: "blur"
          }
        ],
        nav_url: [
          { required: true, message: "请输入网址", trigger: "blur" },
          {
            min: 2,
            max: 2000,
            message: "长度在 2 到 2000 个字符",
            trigger: "blur"
          }
        ],
        nav_url_category: [
          { required: true, message: "请选择当前分类", trigger: "blur" }
        ]
      },
      category_options: [],
      view_isDisplay: false,
      drawer: false,
      direction: "ltr"
    };
  },
  methods: {
    Select_all_url_data() {
      this.tableData = [];
      this.$http
        .get(this.GLOBAL.server_url + this.GLOBAL.select_url_data)
        .then(function(res) {
          for (let index = 0; index < res.body.msg.length; index++) {
            const element = res.body.msg[index];
            if (element["nav_url_is_delete"] === false) {
              this.tableData.push(element);
            }
          }
          this.totalCount = this.tableData.length;
          if (res.status === 200) {
            this.loading = false;
          }
          console.log("网址总数：" + this.totalCount);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    Select_all_category_data() {
      this.$http
        .get(this.GLOBAL.server_url + this.GLOBAL.select_category)
        .then(function(res) {
          for (let index = 0; index < res.body.msg.length; index++) {
            const element = res.body.msg[index];
            if (element["category_is_delete"] === false) {
              this.category_options.push({
                value: element["category_name"],
                text: element["category_name"]
              });
            }
          }
          this.totalCount = res.body.msg.length;
          if (res.status === 200) {
            this.loading = false;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    search() {
      if (this.db_Select_input_name === "") {
        this.Select_all_url_data();
      } else {
        this.$http
          .post(
            this.GLOBAL.server_url + this.GLOBAL.search_url_data_condition,
            {
              nav_url_name: this.db_Select_input_name
            }
          )
          .then(function(res) {
            console.log("res---" + JSON.stringify(res));
            this.tableData = res.body.msg;
            this.totalCount = Object.keys(res.body.msg).length;
            console.log(this.totalCount);
            this.$notify({
              title: "搜索",
              message: "完成",
              type: "success"
            });
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    handleSizeChange(val) {
      this.PageSize = val;
      this.currentPage = 1;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    add_button() {
      this.isDisplay = true;
      this.add_isDisplay = true;
      this.edit_isDisplay = false;
    },

    handleView(index, row) {
      this.view_isDisplay = true;
      this.nav_url_form = Object.assign({}, row);
      this.nav_url_eidt_form.nav_url_id = this.nav_url_form["nav_url_id"];
      this.nav_url_eidt_form.nav_url_name = this.nav_url_form["nav_url_name"];
      this.nav_url_eidt_form.nav_url = this.nav_url_form["nav_url"];
      this.nav_url_eidt_form.nav_url_category = this.nav_url_form[
        "nav_url_category"
      ];
      this.nav_url_eidt_form.nav_url_remark = this.nav_url_form[
        "nav_url_remark"
      ];
      this.nav_url_eidt_form.nav_url_create_time = this.nav_url_form[
        "nav_url_create_time"
      ];
    },

    handleEdit(index, row) {
      console.log(index, row.nav_url_id);
      this.edit_isDisplay = true;
      this.nav_url_form = Object.assign({}, row);
      this.nav_url_eidt_form.nav_url_id = this.nav_url_form["nav_url_id"];
      this.nav_url_eidt_form.nav_url_name = this.nav_url_form["nav_url_name"];
      this.nav_url_eidt_form.nav_url = this.nav_url_form["nav_url"];
      this.nav_url_eidt_form.nav_url_category = this.nav_url_form[
        "nav_url_category"
      ];
      this.nav_url_eidt_form.nav_url_remark = this.nav_url_form[
        "nav_url_remark"
      ];
      this.nav_url_eidt_form.nav_url_create_time = this.nav_url_form[
        "nav_url_create_time"
      ];
      console.log("id", this.nav_url_eidt_form.nav_url_id);
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http
            .delete(this.GLOBAL.server_url + this.GLOBAL.delete_url_data, {
              body: {
                nav_url_id: row.nav_url_id
              }
            })
            .then(function(res) {
              console.log(res);

              if (res.status === 200) {
                this.refresh_page();
              }
            })
            .catch(function(error) {
              console.log(error);
            });

          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    refresh_page() {
      this.reload();
    },
    tableRowClassName({ row, rowIndex }) {
      console.log(row);
      if (row.category_is_delete === true) {
        return "failure-row";
      } else if (row.category_is_delete === false) {
        return "pass-row";
      }
      return "";
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    submit_add_form_cancel() {
      this.$confirm("确认关闭？数据将不被保存")
        .then(_ => {
          this.add_isDisplay = false;
          this.edit_isDisplay = false;
          this.refresh_page;
          done();
        })
        .catch(_ => {});
    },

    submit_add_form(nav_url_form) {
      this.$refs[nav_url_form].validate(valid => {
        if (valid) {
          this.$confirm("此操作将新增一条记录, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          })
            .then(() => {
              this.nav_url_form.nav_url_create_time = this.getTime();
              this.$http
                .post(this.GLOBAL.server_url + this.GLOBAL.add_url_data, {
                  nav_url_id: this.nav_url_form.nav_url_id,
                  nav_url_name: this.nav_url_form.nav_url_name,
                  nav_url: this.nav_url_form.nav_url,
                  nav_url_category: this.nav_url_form.nav_url_category,
                  nav_url_remark: this.nav_url_form.nav_url_remark,
                  nav_url_create_time: this.nav_url_form.nav_url_create_time,
                  nav_url_is_delete: false
                })
                .then(function(res) {
                  console.log(res);
                  if (
                    JSON.stringify(res.body).indexOf("Duplicate") != -1 ||
                    JSON.stringify(res.body).indexOf("PRIMARY") != -1
                  ) {
                    this.$notify({
                      title: "失败",
                      message: "文件编号重复",
                      type: "error"
                    });
                  } else {
                    this.$notify({
                      title: "新增",
                      message: "成功",
                      type: "success"
                    });
                  }
                })
                .catch(function(error) {
                  console.log(error);
                });
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "已取消新增"
              });
            });
        } else {
          alert("请填写完整再提交");
          console.log("error submit!!");
          return false;
        }
      });
    },
    submit_edit_form(nav_url_eidt_form) {
      this.$refs[nav_url_eidt_form].validate(valid => {
        if (valid) {
          this.$confirm("此操作将更新记录, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          })
            .then(() => {
              this.$http
                .put(this.GLOBAL.server_url + this.GLOBAL.update_url_data, {
                  nav_url_id: this.nav_url_eidt_form.nav_url_id,
                  nav_url_name: this.nav_url_eidt_form.nav_url_name,
                  nav_url: this.nav_url_eidt_form.nav_url,
                  nav_url_category: this.nav_url_eidt_form.nav_url_category,
                  nav_url_remark: this.nav_url_eidt_form.nav_url_remark,
                  nav_url_create_time: this.nav_url_eidt_form
                    .nav_url_create_time,
                  nav_url_is_delete: false
                })
                .then(function(res) {
                  console.log(res);
                  this.$notify({
                    title: "保存",
                    message: "成功",
                    type: "success"
                  });
                })
                .catch(function(error) {
                  console.log(error);
                  this.$notify({
                    title: "失败",
                    message: "错误内容：" + error,
                    type: "error"
                  });
                });
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "已取消"
              });
            });
        } else {
          alert("请填写完整再提交");
          console.log("error submit!!");
          return false;
        }
      });
    },
    exportExcel() {
      var wb = XLSX.utils.table_to_book(document.querySelector("#out-table"));
      var wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "array"
      });
      try {
        FileSaver.saveAs(
          new Blob([wbout], { type: "application/octet-stream" }),
          "网址导航.xlsx"
        );

        this.$notify({
          title: "导出",
          message: "请选择保存位置",
          type: "success"
        });
      } catch (e) {
        if (typeof console !== "undefined") console.log(e, wbout);
      }
      return wbout;
    },
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
 
    getTime() {
      var D = new Date();
      return `${D.getFullYear()}-${D.getMonth()}-${D.getDate()}-${D.getHours()}-${D.getMinutes()}-${D.getSeconds()}`;
    }
  },
  watch: {
  
  },
  computed: {
    is_show_url_add() {
      return this.$store.getters.url_add;
    },
    is_show_url_edit() {
      return this.$store.getters.url_edit;
    },
    is_show_url_search() {
      return this.$store.getters.url_search;
    },
    is_show_url_delete() {
      return this.$store.getters.url_delete;
    },
    is_show_output_url() {
      return this.$store.getters.output_url;
    }
  },
  components: {
    Category
  },
  created() {
    this.Select_all_url_data();
    this.Select_all_category_data();
    if (localStorage.getItem("pagination") === null) {
      this.currentPage = 1;
      console.log("created()且localStorage pagination为空:" + this.currentPage);
    } else {
      this.currentPage = parseInt(localStorage.getItem("pagination"));
      console.log("created():" + this.currentPage);
    }
  },
  beforeCreate() {},
  beforeMount() {},
  mounted() {},
  updated() {
    if (this.isDisplay === true) {
    }
  },
  beforeUpdate() {
    localStorage.setItem("pagination", this.currentPage);
    console.log("beforeUpdate():" + this.currentPage);
  },
  beforeDestroy() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  background-color: #5999e2;
  border-color: #7a7a7a;
  color: #f1eeee;
  font-size: 40px;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  background-color: #5999e2;
  border-color: #7a7a7a;
  color: #f1eeee;
  text-align: center;
  line-height: 60px;
}
/* .el-aside {
  background-color: #f1eeee;
  border-color: #7a7a7a;
  color: #333;
} */

.el-main {
  background-color: #ffffff;
  border-color: #7a7a7a;
  color: #333;
  text-align: left;
  line-height: 10px;
  height: 760px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
