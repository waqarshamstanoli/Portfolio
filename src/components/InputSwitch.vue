<template>
    <div>
  <input type="checkbox" id="switch"   @click="toggleSwitch" /><label for="switch">Toggle</label>
</div>
</template>


<script>
export default {
    emits: ["input"],
    data(){
        return {

        }
    },
    methods: {
    toggleSwitch() {
      this.isActive = !this.isActive;
      this.$emit('switch-changed', this.isActive);
    }
  }
};
</script>

<style>
input[type=checkbox]{
	height: 0;
	width: 0;
	visibility: hidden;
}

label {
	cursor: pointer;
	text-indent: -9999px;
	width: 40px;
	height: 14px;
	background: grey;
	display: block;
	border-radius: 100px;
	position: relative;
}

label:after {
	content: '';
	position: absolute;
	top: 1px;
	left: 1px;
	width: 12px;
	height: 12px;
	background: #fff;
	border-radius: 90px;
	transition: 0.3s;
}

input:checked + label {
	background: grey;
}

input:checked + label:after {
	left: calc(100% - 1px);
	transform: translateX(-100%);
}

/* label:active:after {
	// width: 10px;
} */


</style>