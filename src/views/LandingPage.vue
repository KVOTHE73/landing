<!--
======================================================================
🔷 VISTA PRINCIPAL DE LANDING PAGE (CON I18N APLICADO)
   💡 Esta versión ya utiliza $t(...) en todos los textos visibles,
      según el archivo messages.ts proporcionado.
======================================================================
-->
<template>
  <!-- 🧭 NAVBAR HEADER -->
  <div
    id="header"
    class="app-header navbar navbar-expand-lg p-0 my-fixed-header"
  >
    <div class="container-xxl px-3 px-lg-5 d-flex align-items-center flex-1">
      <button
        type="button"
        class="navbar-mobile-toggler px-0 me-3"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
      >
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a href="/" class="navbar-brand px-0 ms-0 justify-content-start">
        <span class="navbar-logo d-md-block d-none"></span>
        <b class="me-3px">{{ t("brand") }}</b> {{ t("brandSurname") }}
      </a>
      <div
        class="collapse navbar-collapse ms-auto d-md-flex align-items-center"
        id="navbarContent"
      >
        <div class="navbar-nav ms-auto fw-500 d-md-flex justify-content-end">
          <div class="nav-item me-md-3 me-lg-2">
            <a href="#home" class="nav-link text-body">{{ t("menu.home") }}</a>
          </div>
          <div class="nav-item me-md-3 me-lg-2">
            <a href="#about" class="nav-link text-body">{{
              t("menu.about")
            }}</a>
          </div>
          <div class="nav-item me-md-3 me-lg-2">
            <a href="#features" class="nav-link text-body">{{
              t("menu.features")
            }}</a>
          </div>
          <div class="nav-item me-md-3 me-lg-2">
            <a href="#pricing" class="nav-link text-body">{{
              t("menu.pricing")
            }}</a>
          </div>
          <div class="nav-item me-md-3 me-lg-2">
            <a href="#testimonials" class="nav-link text-body">{{
              t("menu.testimonials")
            }}</a>
          </div>
          <div class="nav-item me-md-3 me-lg-2">
            <a href="#blog" class="nav-link text-body">{{ t("menu.blog") }}</a>
          </div>
          <div class="nav-item me-md-3 me-lg-2">
            <a href="#contact" class="nav-link text-body">{{
              t("menu.contact")
            }}</a>
          </div>
        </div>

        <div class="text-end mb-1 me-1">
          <a
            href="https://nacho-rodriguez.com/"
            target="_blank"
            class="btn btn-theme fw-bold rounded-pill px-3 py-2 text-nowrap"
            >{{ t("menu.cta") }}<i class="fa fa-arrow-right ms-2 opacity-5"></i
          ></a>
        </div>
      </div>
      <!-- 🌐 Selector de idioma -->
      <div class="flags-container">
        <div class="lang-theme-switch text-start ms-3 mb-2 mt-2">
          <button
            @click="setLang('es')"
            :aria-label="t('lang.es')"
            :aria-pressed="isLangEs"
            :title="t('lang.es')"
            :class="{ active: isLangEs }"
          >
            <img :src="flagEs" alt="Español" class="flag" />
          </button>
          <button
            @click="setLang('en')"
            :aria-label="t('lang.en')"
            :aria-pressed="isLangEn"
            :title="t('lang.en')"
            :class="{ active: isLangEn }"
          >
            <img :src="flagEn" alt="English" class="flag" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- END navber header -->

  <!-- 🏠 SECCIÓN PRINCIPAL HOME -->
  <div
    id="home"
    class="py-5 position-relative bg-black bg-size-cover mt-5"
    data-bs-theme="dark"
  >
    <!-- BEGIN container -->
    <div class="container-xxl p-3 p-lg-5">
      <!-- BEGIN div-hero-content -->
      <div class="div-hero-content z-3 position-relative">
        <!-- BEGIN row -->
        <div
          class="row text-body justify-content-center justify-content-lg-start text-center text-lg-start"
        >
          <!-- BEGIN col-8 -->
          <div class="col-lg-6">
            <!-- BEGIN hero-title-desc -->
            <h1 class="display-6 fw-light mb-2 mt-4 text-white">
              {{ t("home.title") }}
              <span class="fw-bold border-bottom">{{ t("brand") }}</span>
              {{ t("brandSurname") }}
            </h1>
            <div class="fs-18px text-body text-opacity-75 mb-4">
              {{ t("home.description") }}
              <span class="d-xl-inline d-none"><br /></span>
              {{ t("home.description2") }}
              <span class="d-xl-inline d-none"><br /></span>
              {{ t("home.description3") }}
            </div>
            <!-- END hero-title-desc -->

            <div class="text-body text-opacity-35 h5 mb-4">
              <i
                class="fab fa-js fa-2x fa-fw"
                title="JavaScript / TypeScript"
              ></i>
              <i
                class="fab fa-vuejs fa-2x fa-fw"
                title="Vue.js v.3 Composition API"
              ></i>
              <i class="fab fa-css fa-2x fa-fw" title="CSS"></i>
              <i class="fab fa-sass fa-2x fa-fw" title="SASS"></i>
              <i class="fab fa-bootstrap fa-2x fa-fw" title="Bootstrap"></i>
              <i class="fab fa-git fa-2x fa-fw" title="Git / Github"></i>
              <i class="fab fa-node-js fa-2x fa-fw" title="Node.js"></i>
              <i class="fab fa-npm fa-2x fa-fw" title="npm"></i>
            </div>

            <div class="mb-2">
              <RouterLink to="/" class="btn btn-lg btn-theme px-3"
                >{{ t("home.cta") }}
                <i class="fa fa-arrow-right ms-2 opacity-5"></i
              ></RouterLink>
            </div>

            <hr class="my-4" />

            <!-- BEGIN row -->
            <div
              class="row text-body mt-4 mb-4 justify-content-center justify-content-lg-start text-center text-lg-start"
            >
              <!-- BEGIN col-4 -->
              <div class="col-6 mb-3 mb-lg-0">
                <div
                  class="d-flex align-items-center justify-content-center justify-content-lg-start"
                >
                  <div class="h1 text-body text-opacity-25 me-3">
                    <Icon icon="bi:download" />
                  </div>
                  <div>
                    <div class="fw-500 mb-0 h3">1.8k+</div>
                    <div class="fw-500 text-body text-opacity-75">
                      {{ t("home.downloads") }}
                    </div>
                  </div>
                </div>
              </div>
              <!-- END col-4 -->
              <!-- BEGIN col-4 -->
              <div class="col-6">
                <div
                  class="d-flex align-items-center justify-content-center justify-content-lg-start"
                >
                  <div class="h1 text-body text-opacity-25 me-3">
                    <Icon icon="bi:bootstrap" />
                  </div>
                  <div>
                    <div class="fw-500 mb-0 h3">5.3.3</div>
                    <div class="fw-500 text-body text-opacity-75">
                      {{ t("home.version") }}
                    </div>
                  </div>
                </div>
              </div>
              <!-- END col-4 -->
            </div>
            <!-- END row -->
          </div>
          <!-- END col-8 -->
        </div>
        <!-- END row -->
      </div>
      <!-- END div-hero-content -->
    </div>
    <!-- END container -->

    <div
      class="position-absolute top-0 bottom-0 end-0 w-50 p-5 overflow-hidden d-none d-lg-flex align-items-center z-2"
    >
      <img
        class="w-100 d-block position-relative"
        alt="Dasboard"
        src="/assets/img/landing/dashboardPreviewDefault.png"
      />
    </div>
    <div
      class="position-absolute bg-size-cover bg-position-center bg-no-repeat top-0 start-0 w-100 h-100"
      style="background-image: url(/assets/img/coming-soon/coming-soon.jpg)"
    ></div>
    <div
      class="position-absolute top-0 start-0 d-none2 w-100 h-100 bg-gray-900 bg-opacity-80"
    ></div>
  </div>
  <!-- END #home -->

  <!-- BEGIN #about -->
  <div id="about" class="py-5 bg-component">
    <div class="container-xxl p-3 p-lg-5 text-center">
      <h1 class="mb-3">{{ t("about.title") }}</h1>
      <p class="fs-16px text-body text-opacity-50 mb-5">
        {{ t("about.description") }}
        <span class="d-none d-md-inline"><br /></span
        >{{ t("about.description2") }}
      </p>
      <div class="row text-start g-3 gx-lg-5 gy-lg-4">
        <div class="col-xl-3 col-lg-4 col-sm-6 d-flex">
          <div
            class="w-50px h-50px rounded-3 bg-primary bg-opacity-15 text-primary fs-32px d-flex align-items-center justify-content-center"
          >
            <Icon icon="solar:monitor-smartphone-bold-duotone" />
          </div>
          <div class="flex-1 ps-3">
            <h4>{{ t("about.features[0].title") }}</h4>
            <p class="mb-0">
              {{ t("about.features[0].text") }}
            </p>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-sm-6 d-flex">
          <div
            class="w-50px h-50px rounded-3 bg-indigo bg-opacity-15 text-indigo fs-32px d-flex align-items-center justify-content-center"
          >
            <Icon icon="solar:settings-bold-duotone" />
          </div>
          <div class="flex-1 ps-3">
            <h4>{{ t("about.features[1].title") }}</h4>
            <p class="mb-0">
              {{ t("about.features[1].text") }}
            </p>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-sm-6 d-flex">
          <div
            class="w-50px h-50px rounded-3 bg-warning bg-opacity-15 text-warning fs-32px d-flex align-items-center justify-content-center"
          >
            <Icon icon="solar:bolt-bold-duotone" />
          </div>
          <div class="flex-1 ps-3">
            <h4>{{ t("about.features[2].title") }}</h4>
            <p class="mb-0">
              {{ t("about.features[2].text") }}
            </p>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-sm-6 d-flex">
          <div
            class="w-50px h-50px rounded-3 bg-info bg-opacity-15 text-info fs-32px d-flex align-items-center justify-content-center"
          >
            <Icon icon="solar:lock-keyhole-bold-duotone" />
          </div>
          <div class="flex-1 ps-3">
            <h4>{{ t("about.features[3].title") }}</h4>
            <p class="mb-0">
              {{ t("about.features[3].text") }}
            </p>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-sm-6 d-flex">
          <div
            class="w-50px h-50px rounded-3 bg-green bg-opacity-15 text-green fs-32px d-flex align-items-center justify-content-center"
          >
            <Icon icon="solar:dialog-2-bold-duotone" />
          </div>
          <div class="flex-1 ps-3">
            <h4>{{ t("about.features[4].title") }}</h4>
            <p class="mb-0">
              {{ t("about.features[4].text") }}
            </p>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-sm-6 d-flex">
          <div
            class="w-50px h-50px rounded-3 bg-red bg-opacity-15 text-red fs-32px d-flex align-items-center justify-content-center"
          >
            <Icon icon="solar:help-bold-duotone" />
          </div>
          <div class="flex-1 ps-3">
            <h4>{{ t("about.features[5].title") }}</h4>
            <p class="mb-0">
              {{ t("about.features[5].text") }}
            </p>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-sm-6 d-flex">
          <div
            class="w-50px h-50px rounded-3 bg-pink bg-opacity-15 text-pink fs-32px d-flex align-items-center justify-content-center"
          >
            <Icon icon="solar:tuning-bold-duotone" />
          </div>
          <div class="flex-1 ps-3">
            <h4>{{ t("about.features[6].title") }}</h4>
            <p class="mb-0">
              {{ t("about.features[6].text") }}
            </p>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-sm-6 d-flex">
          <div
            class="w-50px h-50px rounded-3 bg-gray-500 bg-opacity-15 text-gray-500 fs-32px d-flex align-items-center justify-content-center"
          >
            <Icon icon="solar:widget-5-bold-duotone" />
          </div>
          <div class="flex-1 ps-3">
            <h4>{{ t("about.features[7].title") }}</h4>
            <p class="mb-0">
              {{ t("about.features[7].text") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END #about -->

  <!-- BEGIN #features -->
  <div id="features" class="py-5 position-relative" data-bs-theme="dark">
    <div class="container-xxl p-3 p-lg-5 z-2 position-relative">
      <div class="text-center mb-5">
        <h1 class="mb-3 text-white">{{ t("features.title") }}</h1>
        <p class="fs-16px text-body text-opacity-50 mb-5">
          {{ t("features.subtitle") }}
          <span class="d-none d-md-inline"><br /></span>
          {{ t("features.subtitle2") }}
          <span class="d-none d-md-inline"><br /></span>
          {{ t("features.subtitle3") }}
        </p>
      </div>
      <div class="row g-3 g-lg-5">
        <div class="col-xl-3 col-lg-4 col-sm-6">
          <a
            href="/assets/img/landing/dashboard_light-default.jpg"
            data-lity
            class="shadow d-block"
            ><img
              src="/assets/img/landing/dashboard_light-thumb.jpg"
              class="mw-100"
              alt="Dashboard preview"
          /></a>
          <div class="text-center my-3 text-body fw-bold">
            {{ t("features.dashboard1") }}
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-sm-6">
          <a
            href="/assets/img/landing/dashboard_dark-default.jpg"
            data-lity
            class="shadow d-block"
            ><img
              src="/assets/img/landing/dashboard_dark-thumb.jpg"
              alt=""
              class="mw-100"
          /></a>
          <div class="text-center my-3 text-body fw-bold">
            {{ t("features.dashboard2") }}
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-sm-6">
          <a
            href="/assets/img/landing/ecommerce_light-default.jpg"
            data-lity
            class="shadow d-block"
            ><img
              src="/assets/img/landing/ecommerce_light-thumb.jpg"
              alt=""
              class="mw-100"
          /></a>
          <div class="text-center my-3 text-body fw-bold">
            {{ t("features.ecommerce1") }}
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-sm-6">
          <a
            href="/assets/img/landing/ecommerce_dark-default.jpg"
            data-lity
            class="shadow d-block"
            ><img
              src="/assets/img/landing/ecommerce_dark-thumb.jpg"
              alt=""
              class="mw-100"
          /></a>
          <div class="text-center my-3 text-body fw-bold">
            {{ t("features.ecommerce2") }}
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-sm-6">
          <a
            href="/assets/img/landing/messenger_dark-default.jpg"
            data-lity
            class="shadow d-block"
            ><img
              src="/assets/img/landing/messenger_dark-thumb.jpg"
              alt=""
              class="mw-100"
          /></a>
          <div class="text-center my-3 text-body fw-bold">
            {{ t("features.messenger1") }}
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-sm-6">
          <a
            href="/assets/img/landing/messenger_light-default.jpg"
            data-lity
            class="shadow d-block"
            ><img
              src="/assets/img/landing/messenger_light-thumb.jpg"
              alt=""
              class="mw-100"
          /></a>
          <div class="text-center my-3 text-body fw-bold">
            {{ t("features.messenger2") }}
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-sm-6">
          <a
            href="/assets/img/landing/todo_dark-default.jpg"
            data-lity
            class="shadow d-block"
            ><img
              src="/assets/img/landing/todo_dark-thumb.jpg"
              alt=""
              class="mw-100"
          /></a>
          <div class="text-center my-3 text-body fw-bold">
            {{ t("features.todo2") }}
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-sm-6">
          <a
            href="/assets/img/landing/todo_light-default.jpg"
            data-lity
            class="shadow d-block"
            ><img
              src="/assets/img/landing/todo_light-thumb.jpg"
              alt=""
              class="mw-100"
          /></a>
          <div class="text-center my-3 text-body fw-bold">
            {{ t("features.todo1") }}
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-sm-6">
          <a
            href="/assets/img/landing/markdown_light-default.jpg"
            data-lity
            class="shadow d-block"
            ><img
              src="/assets/img/landing/markdown_light-thumb.jpg"
              alt=""
              class="mw-100"
          /></a>
          <div class="text-center my-3 text-body fw-bold">
            {{ t("features.markdown2") }}
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-sm-6">
          <a
            href="/assets/img/landing/markdown_dark-default.jpg"
            data-lity
            class="shadow d-block"
            ><img
              src="/assets/img/landing/markdown_dark-thumb.jpg"
              alt=""
              class="mw-100"
          /></a>
          <div class="text-center my-3 text-body fw-bold">
            {{ t("features.markdown1") }}
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-sm-6">
          <a
            href="/assets/img/landing/login_light-default.jpg"
            data-lity
            class="shadow d-block"
            ><img
              src="/assets/img/landing/login_light-thumb.jpg"
              alt=""
              class="mw-100"
          /></a>
          <div class="text-center my-3 text-body fw-bold">
            {{ t("features.login1") }}
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-sm-6">
          <a
            href="/assets/img/landing/login_dark-default.jpg"
            data-lity
            class="shadow d-block"
            ><img
              src="/assets/img/landing/login_dark-thumb.jpg"
              alt=""
              class="mw-100"
          /></a>
          <div class="text-center my-3 text-body fw-bold">
            {{ t("features.login2") }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="position-absolute bg-size-cover bg-position-center bg-no-repeat top-0 start-0 w-100 h-100"
      style="background-image: url(/assets/img/gallery/gallery-1.jpg)"
    ></div>
    <div
      class="position-absolute bg-gray-900 bg-opacity-80 top-0 start-0 w-100 h-100"
    ></div>
  </div>
  <!-- END #features -->

  <!-- BEGIN #pricing -->
  <div id="pricing" class="py-5 bg-component">
    <div class="container-xxl p-3 p-lg-5">
      <h1 class="mb-3 text-center">{{ t("pricing.title") }}</h1>
      <p class="fs-16px text-body text-opacity-50 text-center mb-0">
        {{ t("pricing.subtitle") }}
        <span class="d-none d-md-inline"><br /></span
        >{{ t("pricing.subtitle2") }}
        <span class="d-none d-md-inline"><br /></span
        >{{ t("pricing.subtitle3") }}
      </p>

      <div class="row g-3 py-3 gx-lg-5 py-lg-5" data-bs-theme="dark">
        <div
          class="col-xl-3 col-md-4 col-sm-6 py-xl-5"
          v-for="(plan, index) in plans"
          :key="index"
        >
          <div
            class="card h-100 shadow border-0 transition-all"
            :class="{
              'bg-primary text-white scale-up-lg': isActive(index),
              'bg-gray-900 text-dark hover-scale': !isActive(index),
            }"
            style="cursor: pointer; transition: all 0.3s ease"
            @mouseenter="hoveredPlanIndex = index"
            @mouseleave="hoveredPlanIndex = null"
            @click="selectedPlanIndex = index"
          >
            <div
              class="card-body fs-14px p-30px d-flex flex-column"
              :class="plan.featured ? 'fs-15px p-30px h-100' : 'fs-14px p-30px'"
            >
              <!-- 🔹 Header del plan -->
              <div class="d-flex align-items-center">
                <div class="flex-1">
                  <div
                    class="h5 font-monospace"
                    :class="
                      plan.featured ? 'text-white text-opacity-75' : 'text-body'
                    "
                  >
                    {{ plan.title }}
                  </div>
                  <div class="display-6 fw-bold mb-0 text-white">
                    {{ plan.price }}
                    <small
                      class="h6"
                      :class="
                        plan.featured
                          ? 'text-white text-opacity-75'
                          : 'text-body'
                      "
                      >/month*</small
                    >
                  </div>
                </div>
                <div>
                  <Icon
                    :icon="plan.icon"
                    :class="[
                      'display-4',
                      plan.featured
                        ? 'text-black text-opacity-50'
                        : 'text-gray-400',
                      'rounded-3',
                    ]"
                  />
                </div>
              </div>
              <hr class="my-4" :class="plan.featured ? 'border-black' : ''" />
              <div
                class="mb-5 flex-1"
                :class="
                  plan.featured ? 'text-white text-opacity-75' : 'text-body'
                "
              >
                <div
                  v-for="(feature, i) in plan.features"
                  :key="i"
                  class="d-flex align-items-center mb-1"
                >
                  <i
                    :class="[
                      'fa-lg me-2',
                      feature.available
                        ? 'fa fa-check ' +
                          (plan.featured
                            ? 'text-white text-opacity-50'
                            : 'text-gray-400')
                        : 'fa fa-times ' +
                          (plan.featured
                            ? 'text-white text-opacity-25'
                            : 'text-body text-opacity-25'),
                    ]"
                  ></i>
                  <div class="flex-1 ps-3">
                    <span class="font-monospace small"
                      >{{ feature.label }}:</span
                    >
                    <b class="text-white small">{{ feature.value }}</b>
                  </div>
                </div>
              </div>
              <div class="mx-n2">
                <a
                  href="#"
                  class="btn btn-lg w-100 font-monospace"
                  :class="[
                    isActive(index)
                      ? 'btn-green'
                      : plan.featured
                      ? 'btn-outline-white'
                      : 'btn-default',
                  ]"
                >
                  {{ t("pricing.cta") }} <i class="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END #pricing -->

  <!-- BEGIN #testimonials -->
  <div id="testimonials" class="py-5">
    <div class="container-xxl p-3 p-lg-5">
      <div class="text-center mb-5">
        <h1 class="mb-3 text-center">{{ t("testimonials.title") }}</h1>
        <p class="fs-16px text-body text-opacity-50 text-center mb-0">
          {{ t("testimonials.description1") }}
          <span class="d-none d-md-inline"><br /></span>
          {{ t("testimonials.description2") }}
          <span class="d-none d-md-inline"><br /></span>
          {{ t("testimonials.description3") }}
        </p>
      </div>
      <div class="row g-3 g-lg-4 mb-4">
        <div class="col-xl-4 col-md-6">
          <div class="card p-4 border-0 h-100 rounded-5">
            <div class="d-flex align-items-center mb-3">
              <img
                src="/assets/img/user/user-1.jpg"
                class="rounded-circle me-3 w-50px"
                alt="Client 1"
              />
              <div>
                <h5 class="mb-0">{{ t("testimonials.comments[0].name") }}</h5>
                <small class="text-muted">{{
                  t("testimonials.comments[0].position")
                }}</small>
              </div>
            </div>
            <div class="mb-4 d-flex">
              <i class="fa fa-quote-left fa-2x text-body text-opacity-15"></i>
              <div class="p-3 fs-5">
                <div class="text-warning d-flex mb-2">
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                </div>
                {{ t("testimonials.comments[0].text") }}
              </div>
              <div class="d-flex align-items-end">
                <i
                  class="fa fa-quote-right fa-2x text-body text-opacity-15"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6">
          <div class="card p-4 border-0 h-100 rounded-5">
            <div class="d-flex align-items-center mb-3">
              <img
                src="/assets/img/user/user-3.jpg"
                class="rounded-circle me-3 w-50px"
                alt="Client 1"
              />
              <div>
                <h5 class="mb-0">{{ t("testimonials.comments[1].name") }}</h5>
                <small class="text-muted">{{
                  t("testimonials.comments[1].position")
                }}</small>
              </div>
            </div>
            <div class="mb-4 d-flex">
              <i class="fa fa-quote-left fa-2x text-body text-opacity-15"></i>
              <div class="p-3 fs-5">
                <div class="text-warning d-flex mb-2">
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                </div>
                {{ t("testimonials.comments[1].text") }}
              </div>
              <div class="d-flex align-items-end">
                <i
                  class="fa fa-quote-right fa-2x text-body text-opacity-15"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6">
          <div class="card p-4 border-0 h-100 rounded-5">
            <div class="d-flex align-items-center mb-3">
              <img
                src="/assets/img/user/user-13.jpg"
                class="rounded-circle me-3 w-50px"
                alt="Client 1"
              />
              <div>
                <h5 class="mb-0">{{ t("testimonials.comments[2].name") }}</h5>
                <small class="text-muted">{{
                  t("testimonials.comments[2].position")
                }}</small>
              </div>
            </div>
            <div class="mb-4 d-flex">
              <i class="fa fa-quote-left fa-2x text-body text-opacity-15"></i>
              <div class="p-3 fs-5">
                <div class="text-warning d-flex mb-2">
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                </div>
                {{ t("testimonials.comments[2].text") }}
              </div>
              <div class="d-flex align-items-end">
                <i
                  class="fa fa-quote-right fa-2x text-body text-opacity-15"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-2 d-none d-xl-block"></div>
        <div class="col-xl-4 col-md-6">
          <div class="card p-4 border-0 h-100 rounded-5">
            <div class="d-flex align-items-center mb-3">
              <img
                src="/assets/img/user/user-8.jpg"
                class="rounded-circle me-3 w-50px"
                alt="Client 1"
              />
              <div>
                <h5 class="mb-0">{{ t("testimonials.comments[3].name") }}</h5>
                <small class="text-muted">{{
                  t("testimonials.comments[3].position")
                }}</small>
              </div>
            </div>
            <div class="mb-4 d-flex">
              <i class="fa fa-quote-left fa-2x text-body text-opacity-15"></i>
              <div class="p-3 fs-5">
                <div class="text-warning d-flex mb-2">
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                </div>
                {{ t("testimonials.comments[3].text") }}
              </div>
              <div class="d-flex align-items-end">
                <i
                  class="fa fa-quote-right fa-2x text-body text-opacity-15"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6">
          <div class="card p-4 border-0 h-100 rounded-5">
            <div class="d-flex align-items-center mb-3">
              <img
                src="/assets/img/user/user-5.jpg"
                class="rounded-circle me-3 w-50px"
                alt="Client 1"
              />
              <div>
                <h5 class="mb-0">{{ t("testimonials.comments[4].name") }}</h5>
                <small class="text-muted">{{
                  t("testimonials.comments[4].position")
                }}</small>
              </div>
            </div>
            <div class="mb-4 d-flex">
              <i class="fa fa-quote-left fa-2x text-body text-opacity-15"></i>
              <div class="p-3 fs-5">
                <div class="text-warning d-flex mb-2">
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                  <Icon icon="ic:baseline-star" class="fs-18px" />
                </div>
                {{ t("testimonials.comments[4].text") }}
              </div>
              <div class="d-flex align-items-end">
                <i
                  class="fa fa-quote-right fa-2x text-body text-opacity-15"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END #testimonials -->

  <!-- BEGIN #blog -->
  <div id="blog" class="py-5 bg-component">
    <div class="container-xxl p-3 p-lg-5">
      <div class="text-center mb-5">
        <h1 class="mb-3 text-center">{{ t("blog.title") }}</h1>
        <p class="fs-16px text-body text-opacity-50 text-center mb-0">
          {{ t("blog.description1") }}
          <span class="d-none d-md-inline"><br /></span>
          {{ t("blog.description2") }}
          <span class="d-none d-md-inline"><br /></span>
          {{ t("blog.description3") }}
        </p>
      </div>
      <div class="row g-3 g-xl-4 mb-5">
        <div
          class="col-xl-3 col-lg-4 col-sm-6"
          v-for="(post, index) in posts"
          :key="index"
        >
          <div
            class="d-flex flex-column h-100 rounded-4 overflow-hidden shadow-lg mb-5 mb-lg-0"
          >
            <div>
              <img
                :src="`/assets/img/landing/blog-${index + 1}.jpg`"
                :alt="post.title"
                class="object-fit-cover h-200px w-100 d-block"
              />
            </div>
            <div class="flex-1 p-3 pb-0">
              <div class="mb-2">
                <span
                  class="bg-theme bg-opacity-15 text-theme px-2 py-1 rounded small fw-bold"
                >
                  {{ post.badge }}
                </span>
              </div>
              <h5>{{ post.title }}</h5>
              <p>{{ post.text }}</p>
            </div>
            <div class="p-3 pt-0 text-body text-opacity-50">
              {{ post.date }}
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <a href="#" class="text-decoration-none text-body text-opacity-50 h6">
          {{ t("blog.more") }} <i class="fa fa-arrow-right ms-3"></i>
        </a>
      </div>
    </div>
  </div>
  <!-- END #blog -->

  <!-- BEGIN #contact -->
  <div id="contact" class="py-5">
    <div class="container-xl p-3 p-lg-5">
      <div class="text-center mb-5">
        <h1 class="mb-3 text-center">{{ t("contact.title") }}</h1>
        <p class="fs-16px text-body text-opacity-50 text-center mb-0">
          {{ t("contact.intro1") }} <br />
          {{ t("contact.intro2") }} <br />
          {{ t("contact.intro3") }}
        </p>
      </div>

      <div class="row gx-3 gx-lg-5">
        <div class="col-lg-6">
          <h4>{{ t("contact.sectionTitle") }}</h4>
          <p>{{ t("contact.sectionText") }}</p>
          <p>
            <span class="fw-bolder">{{ t("contact.company.name") }}</span
            ><br />
            {{ t("contact.company.addressLine1") }}<br />
            {{ t("contact.company.addressLine2") }}<br /><br />

            <template v-for="(hour, i) in companyHours" :key="i">
              {{ hour }}<br />
            </template>
            <br />

            {{ t("contact.company.phone") }}:
            <a href="#" class="text-theme">{{
              t("contact.company.phoneNumber")
            }}</a
            ><br />
            {{ t("contact.company.intlPhone") }}:
            <a href="#" class="text-theme">{{
              t("contact.company.intlPhoneNumber")
            }}</a
            ><br />
            {{ t("contact.company.email") }}:
            <a href="#" class="text-theme"
              >{{ t("contact.company.emailUser") }}@{{
                t("contact.company.emailDomain")
              }}</a
            >
          </p>
        </div>

        <div class="col-lg-6">
          <form action="" method="GET" name="form_contact_us">
            <div class="row gy-3 mb-3">
              <div class="col-6">
                <label class="form-label">
                  {{ t("contact.form.name") }} <span class="text-theme">*</span>
                </label>
                <input
                  type="text"
                  class="form-control form-control-lg fs-15px"
                />
              </div>
              <div class="col-6">
                <label class="form-label">
                  {{ t("contact.form.lastname") }}
                  <span class="text-theme">*</span>
                </label>
                <input
                  type="text"
                  class="form-control form-control-lg fs-15px"
                />
              </div>
              <div class="col-6">
                <label class="form-label">
                  {{ t("contact.company.emailUser") }}@{{
                    t("contact.company.emailDomain")
                  }}
                  <span class="text-theme">*</span>
                </label>
                <input
                  type="text"
                  class="form-control form-control-lg fs-15px"
                />
              </div>
              <div class="col-6">
                <label class="form-label">
                  {{ t("contact.form.phone") }}
                  <span class="text-theme">*</span>
                </label>
                <input
                  type="text"
                  class="form-control form-control-lg fs-15px"
                />
              </div>
              <div class="col-12">
                <label class="form-label">
                  {{ t("contact.form.message") }}
                  <span class="text-theme">*</span>
                </label>
                <textarea
                  class="form-control form-control-lg fs-15px"
                  rows="8"
                ></textarea>
              </div>
              <div class="col-12">
                <button
                  type="submit"
                  class="btn btn-theme btn-lg btn-block px-4 fs-15px"
                >
                  {{ t("contact.form.send") }}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- END #contact -->

  <!-- BEGIN #footer -->
  <div
    id="footer"
    class="py-5 bg-gray-800 text-body text-opacity-75"
    data-bs-theme="dark"
  >
    <div class="container-xxl px-3 px-lg-5">
      <div class="row gx-lg-5 gx-3 gy-lg-4 gy-3">
        <!-- 🟦 Columna 1: Marca y descripción -->
        <div class="col-lg-3 col-md-6">
          <div class="mb-3 fw-800 fs-24px text-white">
            {{ t("brand") }} {{ t("brandSurname") }}
          </div>
          <p class="mb-4">
            {{ footer.description }}
          </p>
          <h5>{{ footer.follow }}</h5>
          <div class="d-flex">
            <a href="#" class="me-2 text-body text-opacity-50"
              ><i class="fab fa-lg fa-facebook fa-fw"></i
            ></a>
            <a href="#" class="me-2 text-body text-opacity-50"
              ><i class="fab fa-lg fa-instagram fa-fw"></i
            ></a>
            <a href="#" class="me-2 text-body text-opacity-50"
              ><i class="fab fa-lg fa-twitter fa-fw"></i
            ></a>
            <a href="#" class="me-2 text-body text-opacity-50"
              ><i class="fab fa-lg fa-youtube fa-fw"></i
            ></a>
            <a href="#" class="me-2 text-body text-opacity-50"
              ><i class="fab fa-lg fa-linkedin fa-fw"></i
            ></a>
          </div>
        </div>

        <!-- 🟨 Columna 2: Enlaces rápidos y servicios -->
        <div class="col-lg-3 col-md-6">
          <h5>{{ footer.column2.title }}</h5>
          <ul class="list-unstyled">
            <li
              v-for="(link, i) in footer.column2.links"
              :key="'quick-' + i"
              class="mb-3px"
            >
              <a
                href="#"
                class="text-decoration-none text-body text-opacity-75"
                >{{ link }}</a
              >
            </li>
          </ul>
          <hr class="text-body text-opacity-50" />
          <h5>{{ footer.column2.servicesTitle }}</h5>
          <ul class="list-unstyled">
            <li
              v-for="(service, i) in footer.column2.services"
              :key="'service-' + i"
              class="mb-3px"
            >
              <a
                href="#"
                class="text-decoration-none text-body text-opacity-75"
                >{{ service }}</a
              >
            </li>
          </ul>
        </div>
        <!-- 🟩 Columna 3: Recursos y legal -->
        <div class="col-lg-3 col-md-6">
          <h5>{{ footer.column3.title }}</h5>
          <ul class="list-unstyled">
            <li
              v-for="(res, i) in footer.column3.links"
              :key="'res-' + i"
              class="mb-3px"
            >
              <a
                href="#"
                class="text-decoration-none text-body text-opacity-75"
                >{{ res }}</a
              >
            </li>
          </ul>
          <hr class="text-body text-opacity-50" />
          <h5>{{ footer.column3.legalTitle }}</h5>
          <ul class="list-unstyled">
            <li
              v-for="(legal, i) in footer.column3.legal"
              :key="'legal-' + i"
              class="mb-3px"
            >
              <a
                href="#"
                class="text-decoration-none text-body text-opacity-75"
                >{{ legal }}</a
              >
            </li>
          </ul>
        </div>

        <!-- 🟥 Columna 4: Centro de ayuda -->
        <div class="col-lg-3 col-md-6">
          <h5>{{ footer.column4.title }}</h5>
          <ul class="list-unstyled">
            <li
              v-for="(item, i) in footer.column4.help"
              :key="'help-' + i"
              class="mb-3px"
            >
              <a
                href="#"
                class="text-decoration-none text-body text-opacity-75"
                >{{ item }}</a
              >
            </li>
          </ul>
        </div>
      </div>

      <hr class="text-body text-opacity-50" />

      <!-- Fila de copyright -->
      <div class="row">
        <div class="col-sm-6 mb-3 mb-lg-0">
          <div class="footer-copyright-text">
            <a
              href="https://nacho-rodriguez.com/"
              class="text-decoration-none dropdown-toggle text-body text-opacity-50"
            >
              &copy; 2025 Nacho Rodríguez</a
            >
          </div>
        </div>
        <div class="col-sm-6 text-sm-end">
          <div class="dropdown me-4 d-inline">
            <a
              href="#"
              class="text-decoration-none dropdown-toggle text-body text-opacity-50"
              data-bs-toggle="dropdown"
              >Spain (Español)</a
            >
            <ul class="dropdown-menu">
              <li>
                <a href="#" class="dropdown-item">United States (English)</a>
              </li>
              <li><a href="#" class="dropdown-item">China (简体中文)</a></li>
              <li><a href="#" class="dropdown-item">Brazil (Português)</a></li>
              <li><a href="#" class="dropdown-item">Germany (Deutsch)</a></li>
              <li><a href="#" class="dropdown-item">France (Français)</a></li>
              <li><a href="#" class="dropdown-item">Japan (日本語)</a></li>
              <li><a href="#" class="dropdown-item">Korea (한국어)</a></li>
              <li>
                <a href="#" class="dropdown-item">Latin America (Español)</a>
              </li>
              <li><a href="#" class="dropdown-item">Spain (Español)</a></li>
            </ul>
          </div>
          <a href="#" class="text-decoration-none text-body text-opacity-50"
            >Sitemap</a
          >
        </div>
      </div>
    </div>
  </div>
  <!-- END #footer -->
</template>

<script setup lang="ts">
// ⛳ Imports
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";
import "lity";
import "lity/dist/lity.min.css";
import { useI18n } from "vue-i18n";
import flagEs from "../assets/flags/es.png";
import flagEn from "../assets/flags/en.png";
const { t, messages, locale } = useI18n();

// 🧮 Computeds
const isLangEs = computed(() => locale.value === "es");
const isLangEn = computed(() => locale.value === "en");

const plans = computed(() => {
  return (messages.value as any)[locale.value]?.pricing?.plansFixed || [];
});

const posts = computed(() => {
  return (messages.value as any)[locale.value]?.blog?.posts || [];
});

const companyHours = computed(() => {
  return (messages.value as any)[locale.value]?.contact?.company?.hours || [];
});

const footer = computed(() => {
  return (messages.value as any)[locale.value]?.footer || {};
});

// Selección fija por click
const selectedPlanIndex = ref<number>(
  plans.value.findIndex((p: any) => p.featured)
);
// Card actualmente bajo el cursor
const hoveredPlanIndex = ref<number | null>(null);

// 🔧 Handlers
function setLang(l: string) {
  locale.value = l;
  localStorage.setItem("lang", l);
}

const isActive = (index: number) =>
  hoveredPlanIndex.value !== null
    ? hoveredPlanIndex.value === index
    : selectedPlanIndex.value === index;
</script>

<style scoped>
/* cabecera fija */
.my-fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030; /* Mayor que otros elementos */
}

/* 
===============================================================================
🌍 ESTILO BANDERAS
===============================================================================
*/
.lang-theme-switch button {
  background: none;
  border: none;
  padding: 0;
  margin: 0 0.25rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.flag {
  width: 24px;
  height: 16px;
  border-radius: 2px;
  object-fit: cover;
  transition: filter 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  background-color: transparent;
}

.transition-all {
  transition: all 0.3s ease;
}

.scale-up-lg {
  transform: scale(1.07);
  z-index: 2;
  position: relative;
  transition: transform 0.3s ease-in-out;
}

.hover-scale:hover {
  transform: scale(1.07);
  z-index: 1;
}

.btn-green {
  background-color: #28a745 !important; /* Verde Bootstrap */
  color: #fff !important;
  border-color: #28a745 !important;
}

.btn-green:hover {
  background-color: #218838 !important;
  border-color: #1e7e34 !important;
}
</style>
