<template>
  <div class="lnb">
    <div class="nav-info">
      대메뉴 이름
    </div>
    <ul class="nav-list">
      <li class="nav-type">
        <span>COLLECTION TYPES</span>
      </li>
      <li class="active">
        <a>
          <i><font-awesome-icon :icon="['fas', 'hippo']" /></i>
          <span>menu</span>
        </a>
      </li>
      <li>
        <a>
          <i><font-awesome-icon :icon="['fas', 'database']" /></i>
          <span>menu</span>
        </a>
      </li>
      <li>
        <a>
          <i><font-awesome-icon :icon="['fas', 'hammer']" /></i>
          <span>menu</span>
        </a>
      </li>
      <li>
        <a>
          <span>menu</span>
        </a>
      </li>
      <li>
        <a>
          <span>menu</span>
        </a>
      </li>

      <li class="nav-type">
        <span>SINGLE TYPES</span>
      </li>
      <li>
        <a>
          <span>menu</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.lnb { width:240px; background-color:var(--background-subdued); border-right:1px solid var(--border-normal);
  .nav-info { height:60px; border-bottom:1px solid var(--border-normal); line-height:60px; text-align:center;}
  .nav-list { flex:auto; overflow:auto; padding:.6rem 0 .6rem 1rem;
    li { margin-bottom:.4rem;
      & > a { display:flex; justify-content:center; width:100%; padding-left:.8rem; line-height:2em; cursor:pointer;
        i { display:flex; justify-content:center; align-items:center; width:1.4rem; margin-right:.4rem; text-align:center;}
        span { flex:auto;}
      }

      &.active { position:relative; font-weight:bold;
        &:after { content:''; position:absolute; top:0; right:0; bottom:0; width:4px; background-color:var(--primary-125)}
      }
      &.nav-type { margin-top:1rem; margin-bottom:0; padding:1rem 0; color:var(--purple-150); font-size:.8rem;
        &:nth-child(1) { margin-top:0;}
      }
    }
  }
}
</style>
