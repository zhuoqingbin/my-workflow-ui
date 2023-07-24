export default {
  nodeData: {
    type: Object,
    default: () =>{
      return {
        name: '申请人',
        type: 'start',
        nodeId: 'node_start',
        childNode: {},
        properties: {
          actioner:{
            type: "", //指定成员、指定部门负责人，指定分管领导看，指定角色，指定上级角色，申请人本人
            actType: "" , // and: 会签（须所有成员同意），or:或签（一名成员同意即可），order：依次审批（按顺序依次审批）（指定成员的时候显示）
            members:[{name:'所有人',type:'department',value:''}] // type:department，role ,person
          }
        }
      }
    }
  },
  edit: {
    type: Boolean,
    default: false
  }
}