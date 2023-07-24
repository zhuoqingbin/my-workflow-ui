<template>
  <div class="node-container" >
    <template v-if="nodeType == 'route'">
      <NodeBranch :nodeData="nodeData" :edit="isEdit"/>
			<NodeAddBtn v-if="nodeType != 'end'" :nodeData="nodeData"/>
    </template>
    <template v-else>
      <NodeActivity :nodeData="nodeData" :edit="isEdit"/>
      <NodeAddBtn v-if="nodeType != 'end'" :nodeData="nodeData" />
    </template>
  </div>
</template>

<script setup>
  import { computed, onMounted, reactive, ref } from 'vue';
  import nodeProps from '../props/node.js'
  import NodeActivity from './node-activity.vue'
  import NodeAddBtn from './node-add-btn.vue'
  import NodeBranch from './node-branch.vue'
  
  const props = defineProps(nodeProps)
  const nodeData = computed(()=> props.nodeData)
  const nodeType = computed(()=> nodeData.value.type)
  const isEdit = computed(()=> props.edit)
	
</script>

<style lang="scss">
</style>