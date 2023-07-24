<template>
  <div class="branch-wrap">
    <div class="branch-wrap-box">
      <div class="branch-box">
        <div class="add-branch" @click="addNewCondition()">添加条件</div>
        <div class="col-box" v-for="(item,index) in nodeData.conditionNodes" :key="index">
          <div class="top-left-cover-line" v-if="index == 0"></div>
          <div class="bottom-left-cover-line" v-if="index == 0"></div>
          <div class="top-right-cover-line" v-if="index == nodeData.conditionNodes.length - 1"></div>
          <div class="bottom-right-cover-line" v-if="index == nodeData.conditionNodes.length - 1"></div>
          <Node :nodeData="item" :editable="edit"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, inject } from 'vue';
  import nodeProps from '../props/node.js'
  import Node from './node.vue'  
	
	
  const props = defineProps(nodeProps)
  const nodeData = computed(()=> props.nodeData)
	const nodeId = computed(()=> nodeData.value.nodeId)	
  const edit = computed(()=> props.edit)
	
	const addCondition = inject('addCondition')
	const addNewCondition = ()=>{
		addCondition(nodeData.value)
	}
</script>

<style>
</style>