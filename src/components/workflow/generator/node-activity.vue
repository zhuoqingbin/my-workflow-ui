<template>
  <div :id="nodeId" class="node-box" :class="['node-'+nodeType]" v-on:mouseover="onMouseOver" v-on:mouseout="onMouseOut">
    <div class="line-end-arrow" v-if="nodeType !='creator'"></div>
    <template v-if="nodeType !='end'">
      <div class="title">
        <span class="node-title-name">{{ nodeTitle }}</span>
        <span class="node-title-operate" style="flex-grow: 1;" v-show="editable">
          <IconSvg name="bianji" color="#cbcfd3"></IconSvg>
        </span>
        <span class="node-title-priority" style="flex-grow: 1;" v-if="nodeType=='mate'"></span>
      </div>
      <div class="content">
        <div class="content-text">{{ nodeActioner }}</div>
        <IconSvg name="xiangyou" color="#A0B5C8"></IconSvg>
      </div>
    </template>
    <template v-else>
      <span> {{ nodeTitle }} </span>
    </template>
  </div>
</template>

<script setup>
  import { computed, onMounted, reactive, ref } from 'vue';
  import nodeProps from '../props/node.js'
  import IconSvg from './icon.vue';
  const props = defineProps(nodeProps)
  const nodeData = computed(()=> props.nodeData)
  const nodeType = computed(()=> nodeData.value.type)
  const nodeId = computed(()=> nodeData.value.nodeId)
  const nodeTitle = computed(()=> nodeData.value.name)
  const nodeActioner = computed(()=>{
    let lables = []
    if(nodeData.value.properties && nodeData.value.properties.actionerRules && nodeData.value.properties.actionerRules.members){
      lables = nodeData.value.properties.actionerRules.members.map(item => {
        return item.name
      })
    }
    return lables.join('、')
  })
  
  const isEdit = computed(()=> props.edit)
  
  const editable = ref(false)
  const onMouseOver = (e)=>{
    editable.value = isEdit.value && nodeType !='creator' ? true: false
  }
  const onMouseOut = (e)=>{
    editable.value = false
  }
  
</script>

<style>
</style>