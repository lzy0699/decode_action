//Fri May 08 2026 06:40:40 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var encode_version = "jsjiami.com.v5";
if (typeof $rocket !== "undefined") {
  function getBoxJSValue(_0x11365d) {
    var _0x4bffe4 = function () {
      var _0x2acc3a = true;
      return function (_0x32aa97, _0x56b297) {
        var _0x1d1ce3 = _0x2acc3a ? function () {
          if (_0x56b297) {
            var _0x22b706 = _0x56b297.apply(_0x32aa97, arguments);
            _0x56b297 = null;
            return _0x22b706;
          }
        } : function () {};
        _0x2acc3a = false;
        return _0x1d1ce3;
      };
    }();
    var _0x2bd6c7 = _0x4bffe4(this, function () {
      var _0x2ee06 = function () {
        return "dev";
      };
      var _0x527390 = function () {
        return "window";
      };
      var _0x4c3e91 = function () {
        var _0x6b0400 = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
        return !_0x6b0400.test(_0x2ee06.toString());
      };
      var _0x3c4ed9 = function () {
        var _0x655506 = new RegExp("(\\\\[x|u](\\w){2,4})+");
        return _0x655506.test(_0x527390.toString());
      };
      var _0x390411 = function (_0x2e253c) {
        var _0x2066ec = 0 >> 1 + NaN;
        if (_0x2e253c.indexOf("i" === _0x2066ec)) {
          _0x533479(_0x2e253c);
        }
      };
      var _0x533479 = function (_0x511379) {
        var _0x50a125 = 3 >> 1 + NaN;
        if (_0x511379.indexOf("true"[3]) !== _0x50a125) {
          _0x390411(_0x511379);
        }
      };
      if (!_0x4c3e91()) {
        if (!_0x3c4ed9()) {
          _0x390411("indеxOf");
        } else {
          _0x390411("indexOf");
        }
      } else {
        _0x390411("indеxOf");
      }
    });
    _0x2bd6c7();
    try {
      if (typeof $persistentStore !== "undefined" && typeof $persistentStore.read === "function") {
        {
          const _0x3d003f = $persistentStore.read(_0x11365d);
          console.log("🔍 成功读取 BoxJS 值（$persistentStore）：" + _0x11365d + " = " + _0x3d003f);
          return _0x3d003f;
        }
      } else {
        if (typeof $prefs !== "undefined" && typeof $prefs.valueForKey === "function") {
          const _0x13c881 = $prefs.valueForKey(_0x11365d);
          console.log("🔍 成功读取 BoxJS 值（$prefs）：" + _0x11365d + " = " + _0x13c881);
          return _0x13c881;
        } else {
          console.log("⚠️ 无法检测到可用的 BoxJS 环境！");
        }
      }
    } catch (_0x436931) {
      console.log("⚠️ 读取 BoxJS 配置失败：" + _0x436931.message);
    }
    return null;
  }
  const scriptSwitch = getBoxJSValue("ddm.app_switch");
  const isScriptEnabled = scriptSwitch === "true" || scriptSwitch === true;
  console.log("BoxJS 配置读取：ddm.app_switch = " + scriptSwitch);
  if (!isScriptEnabled) {
    console.log("⛔️ BoxJS 配置禁用脚本，脚本停止运行");
    $notification.post("⚠️ 脚本异常已终止运行", "检测到脚本开关未开启", "📌 【Boxjs 配置指南】\n1️⃣ 配置地址： https://github.com/chavyleung/scripts\n2️⃣ 订阅链接： https://raw.githubusercontent.com/chxm1023/Script_X/main/ddm1023.boxjs.json\n\n📋 【使用说明】\n1️⃣ 添加订阅链接到 Boxjs\n2️⃣ 启用 [脚本开关] 并保存设置\n\n⚠️ 【注意事项】\n- 开关用于防止非法售卖脚本\n- 仅供学习体验，请勿传播或滥用\n- 建议 24 小时内删除，避免不必要问题\n\n🙏 感谢理解与支持！");
    $done();
  }
}
const finalize = function (_0x72eedd = null) {
  if (_0x72eedd) {
    obj.body = JSON.stringify(_0x72eedd);
    console.log("🥳 已操作成功🎉🎉🎉\n叮当猫の分享频道: https://t.me/ddm1023");
  }
  $done(obj);
};
if (typeof $response === "undefined") {
  delete headers["x-revenuecat-etag"];
  delete headers["X-RevenueCat-ETag"];
  obj.headers = headers;
  finalize();
} else {
  if (/(offerings|attributes|adservices_attribution)/.test($request.url)) {
    console.log("🚨 检测到已屏蔽的URL，已跳过脚本执行。");
    $done({});
  }
  const timea = {
    purchase_date: "2024-09-09T09:09:09Z",
    expires_date: "2099-09-09T09:09:09Z"
  };
  const timeb = {
    original_purchase_date: "2024-09-09T09:09:09Z",
    is_sandbox: false,
    store_transaction_id: "490001314520000",
    store: "app_store",
    ownership_type: "PURCHASED"
  };
  let name;
  let nameb;
  let ids;
  let idb;
  let data;
  let anchor = false;
  let localMatched = false;
  for (const src of [listua, bundle]) {
    for (const i in src) {
      const test = src === listua ? ua : bundle_id;
      if (new RegExp("^" + i, "i").test(test)) {
        if (src[i].cm.includes("sja")) {
          data = timea;
          anchor = true;
        } else {
          if (src[i].cm.includes("sjb")) {
            data = {
              purchase_date: "2024-09-09T09:09:09Z"
            };
            anchor = true;
          } else {
            if (src[i].cm.includes("sjc")) {
              data = timea;
              anchor = false;
            }
          }
        }
        ids = src[i].id;
        name = src[i].name || "";
        idb = src[i].idb;
        nameb = src[i].nameb;
        localMatched = true;
        break;
      }
    }
    if (localMatched) {
      break;
    }
  }
  const updateEntitlements = function (_0x42cce6 = "", _0x277cbd = "", _0x46c666 = false) {
    const _0x86351b = name || _0x42cce6;
    const _0x4d60c8 = ids || _0x277cbd;
    const _0x5e311a = data || timea;
    const _0x25bde3 = Object.assign({}, _0x5e311a, timeb);
    if (!anchor) {
      ddm.subscriber.non_subscriptions = Object.assign(ddm.subscriber.non_subscriptions || {}, {
        [_0x4d60c8]: [Object.assign({}, {
          id: "888888888"
        }, _0x25bde3)]
      });
      ddm.subscriber.other_purchases = Object.assign(ddm.subscriber.other_purchases || {}, {
        [_0x4d60c8]: _0x5e311a
      });
    }
    if (!_0x46c666 && _0x86351b) {
      ddm.subscriber.entitlements = Object.assign(ddm.subscriber.entitlements || {}, {
        [_0x86351b]: Object.assign({}, _0x5e311a, {
          product_identifier: _0x4d60c8
        })
      });
    }
    ddm.subscriber.subscriptions = Object.assign(ddm.subscriber.subscriptions || {}, {
      [_0x4d60c8]: _0x25bde3
    });
    if (idb && nameb && !_0x46c666) {
      ddm.subscriber.entitlements = Object.assign(ddm.subscriber.entitlements, {
        [nameb]: Object.assign({}, _0x5e311a, {
          product_identifier: idb
        })
      });
      ddm.subscriber.subscriptions = Object.assign(ddm.subscriber.subscriptions, {
        [idb]: _0x25bde3
      });
    }
  };
  const fetchProductEntitlements = function () {
    const _0x174046 = {
      url: "https://api.revenuecat.com/v1/product_entitlement_mapping",
      headers: headers
    };
    const _0x2750f3 = "https://api.rc-backup.com/v1/product_entitlement_mapping";
    const _0x245171 = function (_0x479884) {
      return new Promise((_0x3a5e80, _0xd68443) => {
        const _0x279a1b = {
          url: _0x479884,
          headers: headers
        };
        if (typeof $task !== "undefined") {
          {
            $task.fetch(_0x279a1b).then(_0x2c5372 => {
              {
                if (_0x2c5372.statusCode === 200) {
                  {
                    _0x3a5e80(_0x2c5372);
                  }
                } else {
                  {
                    _0xd68443("HTTP Error: " + _0x2c5372.statusCode);
                  }
                }
              }
            }).catch(_0x116383 => {
              {
                _0xd68443("请求错误: " + _0x116383);
              }
            });
          }
        } else {
          if (typeof $httpClient !== "undefined") {
            $httpClient.get(_0x279a1b, (_0x5ce08a, _0x583183, _0x338e1d) => {
              if (_0x5ce08a) {
                _0xd68443("请求错误: " + _0x5ce08a);
              } else {
                if (_0x583183.status === 200) {
                  {
                    _0x3a5e80(Object.assign(_0x583183, {
                      body: _0x338e1d
                    }));
                  }
                } else {
                  {
                    _0xd68443("HTTP Error: " + _0x583183.status);
                  }
                }
              }
            });
          } else {
            if (typeof $https !== "undefined") {
              $https.get(_0x279a1b, (_0x50efdd, _0x4d5aeb, _0x334d3c) => {
                if (_0x50efdd) {
                  _0xd68443("请求错误: " + _0x50efdd);
                } else {
                  if (_0x4d5aeb.status === 200) {
                    _0x3a5e80(Object.assign(_0x4d5aeb, {
                      body: _0x334d3c
                    }));
                  } else {
                    {
                      _0xd68443("HTTP Error: " + _0x4d5aeb.status);
                    }
                  }
                }
              });
            } else {
              if (typeof $http !== "undefined") {
                $http.get(_0x279a1b, (_0x543b4d, _0x3e09f7, _0x439c68) => {
                  {
                    if (_0x543b4d) {
                      _0xd68443("请求错误: " + _0x543b4d);
                    } else {
                      if (_0x3e09f7.status === 200) {
                        {
                          _0x3a5e80(Object.assign(_0x3e09f7, {
                            body: _0x439c68
                          }));
                        }
                      } else {
                        {
                          _0xd68443("HTTP Error: " + _0x3e09f7.status);
                        }
                      }
                    }
                  }
                });
              } else {
                {
                  _0xd68443("❌ 不支持的代理工具");
                }
              }
            }
          }
        }
      });
    };
    return _0x245171(_0x174046.url).then(_0x2c6c7c => {
      const _0x358f5d = JSON.parse(_0x2c6c7c.body);
      if (_0x358f5d && _0x358f5d.product_entitlement_mapping && Object.keys(_0x358f5d.product_entitlement_mapping).length > 0) {
        return _0x2c6c7c;
      } else {
        {
          return _0x245171(_0x2750f3);
        }
      }
    }).catch(_0x3c877b => {
      console.log("错误信息：", _0x3c877b);
      return _0x245171(_0x2750f3);
    });
  };
  const fallbackSolution = function () {
    console.log("‼️ 主逻辑执行失败，启动备用方案...");
    updateEntitlements("pro", "com.ddm1023.pro", false);
    finalize(ddm);
  };
  if (localMatched) {
    console.log("🥳 已匹配到数据！🎉🎉🎉");
    updateEntitlements();
    finalize(ddm);
  } else {
    console.log("😮‍💨 未匹配到数据！🚫🚫🚫");
    fetchProductEntitlements().then(_0x507607 => {
      const _0x5be374 = JSON.parse(_0x507607.body);
      const _0x542e83 = _0x5be374.product_entitlement_mapping || {};
      if (!_0x542e83 || Object.keys(_0x542e83).length === 0) {
        console.log("🚨 检测无数据，启动备用方案...");
        fallbackSolution();
        return;
      }
      for (const [_0x4a60ec, _0x5b014e] of Object.entries(_0x542e83)) {
        const _0x143eea = _0x5b014e.product_identifier;
        const _0x53e7f8 = _0x5b014e.entitlements || [];
        if (_0x53e7f8.length === 0) {
          updateEntitlements("", _0x143eea, true);
        } else {
          {
            for (const _0x377688 of _0x53e7f8) {
              updateEntitlements(_0x377688, _0x143eea, false);
            }
          }
        }
      }
      finalize(ddm);
    }).catch(_0x4d4d71 => {
      console.log("Error:", _0x4d4d71);
      fallbackSolution();
    });
  }
}
(function (_0xa0f45b, _0x45f6e1, _0x4205df) {
  _0x4205df = "al";
  try {
    _0x4205df += "ert";
    _0x45f6e1 = encode_version;
    if (!(typeof _0x45f6e1 !== "undefined" && _0x45f6e1 === "jsjiami.com.v5")) {
      _0xa0f45b[_0x4205df]("删除版本号，js会定期弹窗，还请支持我们的工作");
    }
  } catch (_0xcfc3ea) {
    _0xa0f45b[_0x4205df]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";