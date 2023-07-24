<template>
  <div class="add-node-btn-box">
		<div class="add-node-menu-wrap add-node-menu-left" v-if="show" >
			<div class="add-node-menu">
				<div class="menu-item menu-approver" @click="addApprover()">
					<IconSvg class="menu-item-icon" name="shenpi" color="#FCAD22"></IconSvg>
					<div>审批人</div>
				</div>
				<div class="menu-item menu-notifier" @click="addNotifier()">
					<div class="menu-item-icon">
						<IconSvg name="chaosongwode_fill" color="#3CB4B2" size="30"></IconSvg>
					</div>
					<div>抄送人</div>
				</div>
				<div class="menu-item menu-branch" @click="addBranch()">
					<IconSvg class="menu-item-icon" name="fenzhi" color="#88939F"></IconSvg>				
					<div>条件分支</div>
				</div>
			</div>
		</div>
    <div class="add-node-btn" >
      <div class="btn"  @click="onClickAddBtn">
        <IconSvg name="tianjia" :color="btnHover?'#8192a1':'#A0B5C8'" size="30"  v-on:mouseover="onBtnMouseOver" v-on:mouseout="onBtnMouseOut" ></IconSvg>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, inject, computed, watch, onUnmounted } from 'vue';
  import IconSvg from './icon.vue';
	import nodeProps from '../props/node.js'
	
	
	const emit = defineEmits(['onAddNode'])
	const props = defineProps(nodeProps)
	const nodeData = computed(()=> props.nodeData)
	const nodeId = computed(()=> nodeData.value.nodeId)	
	const show = ref(false)
	
  const btnHover = ref(false)
  const onBtnMouseOver = () =>{
    btnHover.value = true
  }
  const onBtnMouseOut = () =>{ 
    btnHover.value = false
  }
	
	document.addEventListener('click', (event) =>{
		show.value = false
	})
	onUnmounted(()=>{
		document.removeEventListener('click', (event) =>{
			show.value = false
		})
	})
	const showEvent = ()=>{
		show.value = false
	}
	const onClickAddBtn = (e)=>{
		e.stopPropagation();
		show.value = true
	}
	
	const onAddNode = inject('onAddNode')
	
	const addApprover = () =>{
		const node = {
		  name: '审批人',
		  prevId: nodeId.value,
		  nodeId: '' + new Date().getTime(),
		  type: 'approver'
		}
		onAddNode(node)
		//emit('onAddNode', node)
	}
	const addNotifier = () =>{
		const node = {
		  name: '抄送人',
		  prevId: nodeId.value,
		  nodeId: '' + new Date().getTime(),
		  type: 'notifier'
		}
		onAddNode(node)
		//emit('onAddNode', node)
	}
	const addBranch = () =>{
		const nid = new Date().getTime()
		const node = {
		  type: 'route',
		  prevId: nodeId.value,
		  nodeId: '' + nid,
		  conditionNodes: [{
		      name: '条件1',
		      type: 'condition',
		      prevId: '' + nid,
		      nodeId: '' + (nid + 10)
		    },
		    {
		      name: '条件2',
		      type: 'condition',
		      prevId: '' + (nid + 10),
		      nodeId: '' + (nid + 20)
		    }
		  ]
		}
		onAddNode(node)
		//emit('onAddNode', node)
	}
</script>

<style>
</style>