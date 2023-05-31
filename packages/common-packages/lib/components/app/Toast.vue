<template>
    <transition-group name="t-fade" tag="div" class="toast-area">
      <div :class="['toast', toast.type]"
           v-for="toast in toastArray" :key="toast.id"
           @mouseover="stop(toast.timer)" @mouseleave="play(toast)">
        <i class="toast-icon">
          <font-awesome-icon :icon="['fas', toast.icon]" />
        </i>
        <div class="toast-cont">
          <strong class="title">{{ toast.title ? toast.title : toast.type }}</strong>
          <div v-html="toast.msg" />
        </div>
        <button type="button" class="btn-close"
                @click="close(toast.id)">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </button>
      </div>
    </transition-group>
</template>

<script setup lang="ts">
const { $bus } = useNuxtApp()
const toastArray = ref<object>([])

onMounted(()=>{
    $bus.on('toast', addToast)
})

function addToast (toast: {
    type: string,
    title: string,
    msg: string
}): void {
    let toastObj = {
        id: Date.now(),
        type: toast.type,
        icon: getIcon(toast.type),
        title: toast.title,
        msg: toast.msg,
        timeout: 5000
    }
    play(toastObj)
    toastArray.value.unshift(toastObj)
}

function getIcon (type) {
    let res = 'info'
    switch (type) {
        case 'success': res = 'check'
            break
        case 'fail': res = 'ban'
            break
        case 'warning': res = 'exclamation'
    }
    return res
}

function play (toast) {
    toast.timer = setTimeout(()=>{
        close(toast.id)
    }, toast.timeout)
}
function stop (timer) {
    clearTimeout(timer)
}
function close (id) {
    toastArray.value.forEach(function(toast,idx){
        if(toast.id === id) {
            toastArray.value.splice(idx,1)
        }
    })
}
</script>

<style lang="scss">
/* transition */
.t-fade-enter-active, .t-fade-leave-active {
  transform: translateX(0);
  opacity: 1;
  transition: 0.5s;
}
.t-fade-enter, .t-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
  transition: 0.5s;
}

.toast-area { position:fixed; top:80px; right:20px; z-index:20; display:flex; flex-direction:column; align-items:flex-end;
  .toast { position:relative; display:flex; min-width:280px; max-width:90vw; margin-bottom:.5rem; color:var(--background-page); font-size:.9rem; box-shadow:var(--card-shadow);
    .toast-icon { flex:60px 0 0; display:flex; justify-content:center; align-items:center; font-size:1.5rem;}
    .toast-cont { padding:1rem;
      .title { display:block; margin-bottom:.8rem; font-weight:bold; text-transform:uppercase;}
    }
    .btn-close { position:absolute; top:0; right:0; width:2rem; height:2rem; border:0; color:var(--background-page); font-size:1rem; cursor:pointer;}

    &.info { background-color:var(--blue);
      .toast-icon,
      .btn-close { background-color:var(--blue-90);}
    }
    &.success { background-color:var(--green);
      .toast-icon,
      .btn-close { background-color:var(--green-90);}
    }
    &.fail { background-color:var(--red);
      .toast-icon,
      .btn-close { background-color:var(--red-90);}
    }
    &.warning { background-color:var(--orange);
      .toast-icon,
      .btn-close { background-color:var(--orange-90);}
    }
  }
}
</style>
