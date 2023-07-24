export const wfData = {
  "title": "流程审批",
  "node": {
    "name": "申请人",
    "type": "creator",
    "nodeId": "nodeId_creator",
    "properties": {
      "actionerRules": {
        "type": "", //free:指定成员、free_range:指定范围内成员，dept指定部门、 dept_charger指定部门负责人，dept_leader:指定分管领导看，role:指定角色，role_upper指定上级角色，creator:申请人本人
        "actType": "", // and: 会签（须所有成员同意），or:或签（一名成员同意即可），order：依次审批（按顺序依次审批）（指定成员的时候显示）
        "members": [{
          "name": "所有人",
          "type": "department",
          "value": ""
        }] // type:department，role ,person
      }
    },
    "childNode": {
      "name": "审批人",
      "prevId": "nodeId_creator",
      "nodeId": "nodeId_approver_1",
      "type": "approver",
      "properties": {
        "actionerRules": {
          "type": "free",
          "actType": "and",
          "members": []
        }
      },
      "childNode": {
        "name": "抄送人",
        "prevId": "nodeId_approver_1",
        "nodeId": "nodeId_notifier_1",
        "type": "notifier",
        "properties": {
          "actionerRules": {
            "type": "free",
            "actType": "and",
            "members": []
          }
        },
        "childNode": {
          "name": "流程结束",
          "prevId": "nodeId_notifier_1",
          "nodeId": "nodeId_end",
          "type": "end",
          "properties": {
            "actionerRules": {
              "type": "",
              "actType": "",
              "members": []
            }
          }
        }
      }
    }
  }
}

export const wfData1 = {
  "title": "流程审批",
  "node": {
    "name": "发起人",
    "type": "creator",
    "nodeId": "sid-startevent",
    "childNode": {
      "type": "route",
      "prevId": "sid-startevent",
      "nodeId": "1689932325537",
      "conditionNodes": [{
          "name": "条件1",
          "type": "condition",
          "prevId": "1689932325537",
          "nodeId": "1689932325547",
          "properties": {
            "conditions": [
              [{
                "pos": 1,
                "type": "dingtalk_actioner_range_condition",
                "paramKey": "1",
                "paramLabel": "d",
                "key": "lt",
                "label": "小于",
                "upperBound": "1"
              }]
            ]
          }
        },
        {
          "name": "条件2",
          "type": "condition",
          "prevId": "1689932325547",
          "nodeId": "1689932325557",
          "properties": {
            "conditions": [
              [{
                "pos": 1,
                "type": "dingtalk_actioner_range_condition",
                "paramKey": "2",
                "paramLabel": "2",
                "key": "le",
                "label": "小于等于",
                "upperBoundEqual": "2"
              }]
            ]
          }
        },
        {
          "name": "条件3",
          "type": "condition",
          "prevId": "1689932325547",
          "nodeId": "1689933843711",
          "properties": {
            "conditions": [
              [{
                "pos": 1,
                "type": "dingtalk_actioner_range_condition",
                "paramKey": "3",
                "paramLabel": "3",
                "key": "le",
                "label": "小于等于",
                "upperBoundEqual": "3"
              }]
            ]
          }
        }
      ],
      "childNode": {
        "name": "审批人",
        "prevId": "1689932325537",
        "nodeId": "1689928537853",
        "type": "approver",
        "childNode": {
          "name": "抄送人",
          "prevId": "1689928537853",
          "nodeId": "1689928540648",
          "type": "notifier",
          "childNode": {
            "prevId": "1689928540648"
          },
          "properties": {
            "actionerRules": [{
              "type": "target_management",
              "level": 1,
              "isEmpty": false,
              "autoUp": true,
              "actType": "or"
            }]
          }
        },
        "properties": {
          "actionerRules": [{
            "type": "target_management",
            "level": 1,
            "isEmpty": false,
            "autoUp": true,
            "actType": "or"
          }]
        }
      }
    }
  }

}