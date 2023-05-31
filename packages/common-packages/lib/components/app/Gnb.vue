<template>
  <div :class="['gnb', {'open': appOption.openGnb}]">
    <div class="logo">
      <span>AVant</span>
    </div>
    <div class="nav">
      <ul class="nav-top">
        <li class="active">
          <NuxtLink to="/test/list">
            <i><font-awesome-icon :icon="['fas', 'cubes']" /></i>
            <em>Content Manager</em>
          </NuxtLink>
        </li>
        <li>
          <a>
            <i><font-awesome-icon :icon="['fas', 'user-group']" /></i>
            <em>user</em>
          </a>
        </li>
        <li>
          <a>
            <i><font-awesome-icon :icon="['far', 'folder']" /></i>
            <em>Media Library</em>
          </a>
        </li>
        <li>
          <a>
            <i><font-awesome-icon :icon="['fas', 'gears']" /></i>
            <em>Setting</em>
          </a>
        </li>

        <!-- 임시 -->
        <CommonBtn @click="appOption.setTheme('light')">Light</CommonBtn>
        <CommonBtn @click="appOption.setTheme('dark')">Dark</CommonBtn>
        <label for="locale-select">{{ $t('language') }}: </label>
        <select id="locale-select" v-model="$i18n.locale">
          <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{
              locale
            }}
          </option>
        </select>
      </ul>
      <ul class="nav-bot">
        <li>
          <a>
            <i><font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" /></i>
            <em>logout</em>
          </a>
        </li>
        <li>
          <a>
            <i><font-awesome-icon :icon="['far', 'face-smile']" /></i>
            <em>Profile</em>
          </a>
        </li>
      </ul>
    </div>
    <button type="button" class="btn-toggle" @click="toggleGnb">
      <font-awesome-icon :icon="['fas', appOption.openGnb?'caret-left':'caret-right']" />
    </button>
  </div>
</template>

<script setup lang="ts">
const appOption = useAppOptionStore()

function toggleGnb () {
    appOption.openGnb = !appOption.openGnb
}
</script>

<style scoped lang="scss">
.gnb { position:relative; width:60px; background-color:var(--background-page); overflow:visible;
  .logo { height:60px; background-color:var(--primary); color:var(--background-page); line-height:60px; text-align:center;}
  .nav { flex:auto; display:flex; flex-direction:column; justify-content:space-between;
    li { position:relative; height:60px;
      & > a { position:relative; display:flex; justify-content:center; align-items:center; width:100%; height:100%; border:0; color:var(--foreground-normal); cursor:pointer; text-decoration:none;}
      em { display:none;}

      &.active {
        &:before { content:''; position:absolute; top:.7rem; bottom:.7rem; left:.7rem; right:.7rem; border-radius:4px; background-color:var(--blue-10); z-index:0;}
        & > a { color:var(--purple-125);}
      }
    }
  }
  .btn-toggle { position:absolute; left:calc(100% - .5rem); bottom:16px; width:1rem; height:2rem; padding:0; border:1px solid var(--border-normal); border-radius:3px; background-color:var(--background-normal); color:var(--module-icon); font-size:1rem; cursor:pointer;
    &:hover { color:var(--module-icon-alt);}
  }

  /* expanded */
  &.open { width:210px;
    .nav {
      li {
        & > a { justify-content:flex-start;}
        i { flex:60px 0 0; text-align:center;}
        em { display:block;}
      }
    }
  }
}
</style>
