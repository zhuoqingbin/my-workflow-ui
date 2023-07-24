<template>
  <div class="approvalFlow">
    <div class="approvalFlow-content" style="transform: scale(1);  transform-origin: 541px 382.5px 0px; ">
      <template v-for="(item, index) in items" :key="index">
        <Node :nodeData="item" :editable="editable"/>
      </template>
      <div class="node-container">
        <Node :nodeData="endData" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import Node from './generator/node.vue'  
  import { ref, computed, watch, onMounted, provide } from 'vue'
  import { iteratorData, addNewNode, delNode,  checkData } from './process.js'
  import { wfData, wfData1 } from './default.js'
  const props = defineProps({
    data: {
      type: Object,
    },
    editable: {
      type: Boolean,
      default: false
    }
  })
  const endData = {
    "name": "流程结束",
    "prevId": "nodeId_notifier_1",
    "nodeId": "nodeId_end",
    "type": "end"
  }
  const editable = computed(()=> props.editable)
  const data = ref({})
  if(props.data && props.data.node){
    data.value = props.data
  }else{
    data.value = JSON.parse(JSON.stringify(wfData))
  }
  watch([()=>props.data],(values) =>{
    data.value = values[0]
  })
  
  const items = ref([])
  const initialNode = () =>{
    iteratorData(items.value,data.value.node)
  }
  onMounted(()=>{
    initialNode()
  })
	
	const onAddNode = (node) =>{
		console.log(node,data.value.node,items.value)
		addNewNode(node, data.value.node, items.value)
	}
	const addCondition = (nodeData) =>{
		var lastNode = nodeData.conditionNodes[nodeData.conditionNodes.length - 1]
		var name = '条件' + (nodeData.conditionNodes.length+1)
		var node = {
		  name: name,
		  type: 'condition',
		  prevId: lastNode.prevId,
		  nodeId: '' + new Date().getTime()
		}
		nodeData.conditionNodes.push(node)
	}
	provide('onAddNode', onAddNode)
	provide('addCondition', addCondition)
</script>

<style lang="scss" scoped>
  @import url(style.scss);
</style>
