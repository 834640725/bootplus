define({ "api": [
  {
    "type": "POST",
    "url": "bootplus.user.login",
    "title": "01.用户登录",
    "permission": [
      {
        "name": "不需要token"
      }
    ],
    "description": "<p>接口名：<code>bootplus.user.login</code><p/> 用户登录，用传入的accessToken完成用户登录，并返回当前用户信息<p/> <strong>ADM test accessToken:</strong> 61466acb7a15d4ca2dbaacfa45fc7eb2c9af92c0f3b72aaa8d885b3b26e8c45757abd97fab3b2d996fce5c66050c0bd3dd432c6b4c603c18244798c36af22acf <strong>SYS test accessToken:</strong> 2da802d5495019986a2378eb3dd6cd95af6f1d3d94d3d9f1524c414ce50e246c57abd97fab3b2d996fce5c66050c0bd3dd432c6b4c603c18244798c36af22acf</p>",
    "group": "1.基础数据",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>授权accessToken</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "{ \"oper\":\"127.0.0.1\", \"appid\":\"1001\", \"random\":\"1234\",\n\"service\": \"bootplus.user.login\", \"accessToken\": \"61466acb7a15d4ca2dbaacfa45fc7eb2c9af92c0f3b72aaa8d885b3b26e8c45757abd97fab3b2d996fce5c66050c0bd3dd432c6b4c603c18244798c36af22acf\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object(TokenObject)",
            "optional": false,
            "field": "obj",
            "description": "<p>用户token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "obj.userId",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "obj.userType",
            "description": "<p>用户类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "obj.appid",
            "description": "<p>用户所属机构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "响应示例",
          "content": "{ \"code\":\"0\", \"succ\":true,\n\"obj\":{\"appid\":\"1001\", \"userId\":\"1\", \"userType\":\"ADM\"}\n}",
          "type": "json"
        }
      ]
    },
    "version": "2.0.0",
    "sampleRequest": [
      {
        "url": "http://bootplus.diandianys.com/app"
      }
    ],
    "filename": "./src/main/java/io/github/controller/api/ApiAppConfigService.java",
    "groupTitle": "1.基础数据",
    "name": "PostBootplusUserLogin"
  },
  {
    "type": "POST",
    "url": "bootplus.user.login.log.list",
    "title": "02.系统用户登录日志列表",
    "permission": [
      {
        "name": "ADM 或者 SYS"
      }
    ],
    "description": "<p>接口名：<code>bootplus.user.login.log.list</code><p/> 分页获取系统用户登录日志列表</p>",
    "group": "1.基础数据",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "adminId",
            "description": "<p>管理员ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "loginIp",
            "description": "<p>登录IP（支持模糊查询）</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "pageNum",
            "defaultValue": "1",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "pageSize",
            "defaultValue": "100",
            "description": "<p>每页条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "{ \"oper\":\"127.0.0.1\", \"appid\":\"1001\", \"random\":\"1234\",\n\"service\": \"bootplus.user.login.log.list\",\n\"adminId\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List(SysUserLoginLogEntity)",
            "optional": false,
            "field": "list",
            "description": "<p>系统用户登录日志列表</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "list.logId",
            "description": "<p>登录日志ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "list.loginTime",
            "description": "<p>登录时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.loginIp",
            "description": "<p>登录IP</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "list.userId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.operatingSystem",
            "description": "<p>操作系统</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.browser",
            "description": "<p>浏览器</p>"
          },
          {
            "group": "Success 200",
            "type": "Page",
            "optional": false,
            "field": "page",
            "description": "<p>分页信息</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "page.pageNum",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "page.pages",
            "description": "<p>总页数</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "page.total",
            "description": "<p>总记录数</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "page.pageSize",
            "description": "<p>每页记录数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "响应示例",
          "content": "{ \"code\":\"0\", \"succ\":true,\n\"list\": [\n{\n\"logId\": 402,\n\"loginTime\": 1528708116,\n\"loginIp\": \"61.142.209.194\",\n\"userId\": 1,\n\"operatingSystem\": \"WINDOWS_81\",\n\"browser\": \"CHROME\"\n}\n],\n\"page\": {\n\"pageNum\": 1,\n\"pages\": 18,\n\"total\": 18,\n\"pageSize\": 1\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "2.0.0",
    "sampleRequest": [
      {
        "url": "http://bootplus.diandianys.com/app"
      }
    ],
    "filename": "./src/main/java/io/github/controller/api/ApiUserLoginLogService.java",
    "groupTitle": "1.基础数据",
    "name": "PostBootplusUserLoginLogList"
  }
] });
