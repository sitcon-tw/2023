<template>
    <nav>
        <div class="navbar-item"><a href="#intro-container" class="btn red">關於我們</a></div>
        <div class="navbar-item"><a href="#promote-container" class="btn blue">稿件招募</a></div>
        <div class="logo">
            <a href="#index-container"><img src="/2023/imgs/2023/sitcon-gdsc-logo.svg" /></a>
        </div>
        <div class="navbar-item"><a href="#admittance-container" class="btn green">入場方式</a></div>
        <div class="navbar-item"><a href="#footer-container" class="btn yellow">聯絡我們</a></div>
    </nav>
</template>

<style scoped>
nav {
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  margin-left: 16px;
  z-index: 1;
}

.navbar-item {
  margin: 0 2.5% 0 2.5%;
  cursor: pointer;
}

.logo {
  margin: 0 2.5% 0 2.5%;
  cursor: pointer;
}

.navbar-item .btn.red {
    --base-color: var(--red);
}

.navbar-item .btn.blue {
    --base-color: var(--blue);
}

.navbar-item .btn.green {
    --base-color: var(--green);
}

.navbar-item .btn.yellow {
    --base-color: var(--yellow);
}

.navbar-item .btn {
    color: var(--base-color);
    transition: 0.5s;
    letter-spacing: 4px;
    cursor: pointer;
}

.navbar-item .btn:hover {
    background-color: var(--base-color);
    box-shadow: 0 0 5px var(--base-color),
    0 0 25px var(--base-color),
    0 0 50px var(--base-color),
    0 0 60px var(--base-color);
    color: var(--text-color);
}
</style>
