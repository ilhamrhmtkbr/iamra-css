export const data = [
    {
        title: 'css',
        highlight: `
        @import "tailwindcss";

@font-face {
  font-family: Light;
  src: url("/assets/fonts/Poppins-Light.ttf");
}

@font-face {
  font-family: Regular;
  src: url("/assets/fonts/Poppins-Regular.ttf");
}

@font-face {
  font-family: Medium;
  src: url("/assets/fonts/Poppins-Medium.ttf");
}

@font-face {
  font-family: Bold;
  src: url("/assets/fonts/Poppins-Bold.ttf");
}

@keyframes skeleton-loading {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@theme {
  --font-bold: 'Bold', ui-sans-serif;
  --font-medium: 'Medium', ui-sans-serif;
  --font-regular: 'Regular', ui-sans-serif;
  --font-light: 'Light', ui-sans-serif;
  --animate-skeleton: skeleton-loading 2s infinite;
  --shadow-box: var(--box-shadow);
}

@variant dark (&:where(.dark, .dark *));

:root {
  --bg-color: #ffffff;
  --transbg-color: rgba(255, 255, 255, 0.8);
  --sidebar-color: #F5F6FF; /* subtle indigo wash, nyambung sama primary */
  --sidebar-hover-color: #ECEEFF; /* indigo-tinted hover */
  --text-color: #212529;
  --transtext-color: rgba(33, 37, 41, 0.8);
  --link-color: #494b59;
  --translink-color: rgba(73, 75, 89, 0.15);
  --border-color: #dee2e6;
  --scrollthumb-color: #adb5bd;
  --primary-color: #4f46e5;
  --transprimary-color: rgba(79, 70, 229, 0.08);
  --second-primary-color: #7c3aed;
  --transsecond-primary-color: rgba(124, 58, 237, 0.08);
  --third-primary-color: #2563eb;
  --transthird-primary-color: rgba(37, 99, 235, 0.08);
  --danger-color: #dc2626;
  --transdanger-color: rgba(220, 38, 38, 0.08);
  --success-color: #16a34a;
  --transsuccess-color: rgba(22, 163, 74, 0.08);
  --warning-color: #d97706; /* amber-600, lebih clean dari orange */
  --transwarning-color: rgba(217, 119, 6, 0.08);
  --border: 1px solid var(--border-color);
  --box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.08);
  --xxxx: 2.25rem;
  --xxx: 2rem;
  --xx: 1.75rem;
  --x: 1.5rem;
  --l: 1.25rem;
  --m: 1rem;
  --s: .875rem;
  --xs: .675rem;
  --xxs: .475rem;
  --radius-x: .775rem;
  --radius-l: .575rem;
  --radius-m: .375rem;
  --radius-s: .275rem;
  --width-sidebar-expanded: 253px;
  --width-sidebar-collapse: 75px;
  --height-container-header: 63px;
  --ideal-distance-to-header: calc(var(--height-container-header) + var(--m) * 2);
}

.dark {
  --bg-color: #0F172A;
  --transbg-color: #0F172Acc;
  --sidebar-color: #1E293B;
  --sidebar-hover-color: #334155;
  --text-color: #F1F5F9;
  --transtext-color: #F1F5F980;
  --link-color: #a8aabf;
  --translink-color: rgba(168, 170, 191, 0.15);
  --border-color: #334155;
  --scrollthumb-color: #475569;
  --primary-color: #818CF8;
  --transprimary-color: #818CF826;
  --second-primary-color: #A78BFA;
  --transsecond-primary-color: #A78BFA26;
  --third-primary-color: #60A5FA;
  --transthird-primary-color: #60A5FA26;
  --danger-color: #F87171;
  --transdanger-color: #F8717126;
  --success-color: #34D399;
  --transsuccess-color: #34D39926;
  --warning-color: #FBBF24;
  --transwarning-color: #FBBF2426;
  --border: 1px solid var(--border-color);
  --box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3);
}

@theme inline {
  /* ── Text / Background / Surface ── */
  --color-bg:              var(--bg-color);
  --color-transbg:         var(--transbg-color);
  --color-sidebar:         var(--sidebar-color);
  --color-sidebar-hover:   var(--sidebar-hover-color);
  --color-text:            var(--text-color);
  --color-transtext:       var(--transtext-color);
  --color-link:            var(--link-color);
  --color-translink:       var(--translink-color);
  --color-border:          var(--border-color);
  --color-scrollthumb:     var(--scrollthumb-color);

  /* ── Brand colors ── */
  --color-primary:         var(--primary-color);
  --color-transprimary:    var(--transprimary-color);
  --color-secondary:       var(--second-primary-color);
  --color-transsecondary:  var(--transsecond-primary-color);
  --color-tertiary:        var(--third-primary-color);
  --color-transtertiary:   var(--transthird-primary-color);

  /* ── Semantic colors ── */
  --color-danger:          var(--danger-color);
  --color-transdanger:     var(--transdanger-color);
  --color-success:         var(--success-color);
  --color-transsuccess:    var(--transsuccess-color);
  --color-warning:         var(--warning-color);
  --color-transwarning:    var(--transwarning-color);

  --color-surface:  var(--bg-color);
  --color-line:     var(--border-color);
}

::-webkit-scrollbar {
  width: 11px;
}

::-webkit-scrollbar-track {
  background: var(--border-color);
  border-radius: 25px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--scrollthumb-color);
  border-radius: 25px;
}

hr {
  width: 100%;
  border: none;
  border-top: var(--border);
}

html {
  scroll-behavior: smooth;
  font-size: 15px;
}

body {
  font-size: var(--m);
  font-family: Regular, ui-sans-serif;
  color: var(--text-color);
  background-color: var(--bg-color);
  box-sizing: border-box;
}

.border-style-default {
  border: var(--border);
}

.padding-top-ideal-distance-to-header {
  padding-top: var(--ideal-distance-to-header) !important;
}

.margin-top-ideal-distance-to-header {
  margin-top: var(--ideal-distance-to-header) !important;
}`,
        example: false
    },
    {
        title: 'format-text-js',
        highlight: `
        /**
 * formatText.js
 * Utilitas untuk merapikan teks dari format snake_case atau kebab-case
 * Contoh: "total_penjualan_harian" -> "Total Penjualan Harian"
 */

export const removeUnderscoreAndCapitalize = (str) => {
    if (!str || typeof str !== 'string') return ''

    return str
        // Ganti underscore (_) atau hyphen (-) dengan spasi
        .replace(/[_-]/g, ' ')
        // Pecah jadi array kata
        .split(' ')
        // Map tiap kata: ambil huruf pertama (UPPER) + sisa hurufnya (lower)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        // Gabungin lagi pakai spasi
        .join(' ')
}

/**
 * Versi alternatif kalau cuma mau huruf depan doang yang gede
 * Contoh: "status_pembayaran" -> "Status pembayaran"
 */
export const capitalizeFirstOnly = (str) => {
    if (!str) return ''
    const cleanStr = str.replace(/[_-]/g, ' ')
    return cleanStr.charAt(0).toUpperCase() + cleanStr.slice(1).toLowerCase()
}`,
        example: false
    },
    {
        title: 'layout',
        highlight: `
        <script setup>
import {computed, ref} from "vue";

import BottomNav from "./Components/BottomNav.vue";
import ContentHeader from "./Components/ContentHeader.vue";
import Sidebar from "./Components/Sidebar.vue";
import ContentFooter from "./Components/ContentFooter.vue";
import ContentSection from "./Components/ContentSection.vue";

const isSidebarCollapsed = ref(false)
const showSidebar = ref(true)

const containerPadLeft = computed(() => {
  if (showSidebar.value) {
    if (isSidebarCollapsed.value) {
      return 'p-[var(--m)_var(--m)_var(--m)_calc(var(--width-sidebar-collapse)+var(--m)*2)]'
    } else {
      return 'pl-[calc(var(--width-sidebar-expanded)+var(--m)*2)] max-[800px]:pl-[var(--m)]'
    }
  } else {
    return 'pl-[var(--m)]'
  }
})
</script>

<template>
  <BottomNav/>
  <Sidebar :isSidebarCollapsed="isSidebarCollapsed" @toggle="isSidebarCollapsed = !isSidebarCollapsed" :showSidebar="showSidebar"/>
  <main :class="[\`transition-all duration-300 w-full max-w-[1920px] box-border
                min-h-[100dvh] mx-auto pr-[var(--m)] pt-[var(--m)] pb-[var(--m)]\`, containerPadLeft]">
    <ContentHeader @toggle-show="showSidebar = !showSidebar"/>
    <ContentSection>
      <slot />
    </ContentSection>
    <ContentFooter />
  </main>
</template>`,
        example: false
    },
    {
        title: 'bottom-nav',
        highlight: `
        <script setup>
import { usePage, Link } from "@inertiajs/vue3";

const page = usePage()
const isActive = (path) => {
  if (page.url === '/' && path === '/') {
    return true
  } else {
    if (path === '/') {
      return false
    } else {
      return page.url?.includes(path)
    }
  }
}

// ✅ Data nav
const navItems = [
  { type: 'link', to: '/', text: 'Components' },
  { type: 'link', to: '/auth/login', text: 'Login' },
  {
    type: 'dropdown', text: 'Admin',
    links: [
      { to: '/admin/dashboard', text: 'Dashboard' },
      { to: '/admin/profile', text: 'Profile' },
      { to: '/admin/product', text: 'Product' },
    ]
  },
]

const linkClass = 'p-[var(--xxs)_var(--m)] rounded-[var(--radius-s)] box-border hover:bg-primary hover:text-white'
const activeLinkClass = 'bg-primary text-white'
</script>

<template>
  <nav class="hidden items-center justify-between flex-wrap h-max gap-[var(--m)]
            fixed left-0 right-0 bottom-0 m-[var(--m)] p-[var(--xs)]
            bg-surface shadow-[var(--box-shadow)]
            border border-line
            rounded-[var(--radius-m)] z-[77] max-[800px]:flex">

    <template v-for="item in navItems" :key="item.text">

      <!-- ✅ Type: link -->
      <Link
          v-if="item.type === 'link'"
          :href="item.to"
          :class="[linkClass, isActive(item.to) ? activeLinkClass : 'bg-transprimary']">
        {{ item.text }}
      </Link>

      <!-- ✅ Type: dropdown -->
      <div v-else-if="item.type === 'dropdown'">
        <label :for="[\`navigation-items-check-\${item.text}\`]"
               :class="[linkClass, item.links.some(l => isActive(l.to)) ? activeLinkClass : 'bg-transprimary']">
          {{ item.text }}
        </label>
        <input type="checkbox" class="hidden peer" :id="[\`navigation-items-check-\${item.text}\`]">
        <div class="fixed inset-0 bg-transtext hidden z-[99] peer-checked:flex">
          <div class="grid m-auto bg-surface shadow-[var(--box-shadow)]
                    border border-line rounded-[var(--radius-m)]
                    min-w-[77dvw] max-w-[77dvw] min-h-[77dvh] max-h-[77dvh]
                    grid-cols-1 auto-rows-max gap-[var(--m)] place-items-center box-border
                    p-[var(--m)] overflow-auto">
            <label class="bg-danger text-end
                          min-w-[22px] max-w-[22px] min-h-[22px] max-h-[22px]
                          flex align-center justify-center font-['Medium',_sans-serif]
                          text-white rounded-full justify-self-end"
                   :for="[\`navigation-items-check-\${item.text}\`]">&Cross;</label>
            <Link
                v-for="child in item.links"
                :key="child.to"
                :href="child.to"
                :class="[linkClass, 'w-full', isActive(child.to) ? activeLinkClass : 'bg-transprimary']">
              {{ child.text }}
            </Link>
          </div>
        </div>
      </div>

    </template>

  </nav>
</template>`,
        example: false
    },
    {
        title: 'footer',
        highlight: `
        <script setup>

</script>

<template>
  <footer>

  </footer>
</template>

<style scoped>

</style>`,
        example: false
    },
    {
        title: 'header',
        highlight: `
        <script setup>
import {ref} from "vue";
import { usePage, Link } from "@inertiajs/vue3";

const showSidebar = ref(false)

const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark")
}

const emit = defineEmits(['toggle-show'])
const showMenu = () => {
  showSidebar.value = !showSidebar.value
  emit('toggle-show')
}

const page = usePage()
const isActive = (path) => {
  if (page.url === '/' && path === '/') {
    return true
  } else {
    if (path === '/') {
      return false
    } else {
      return page.url?.includes(path)
    }
  }
}

// ✅ Data nav di sini
const navItems = [
  { type: 'link', to: '/', text: 'Components' },
  { type: 'link', to: '/auth/login', text: 'Login' },
  {
    type: 'dropdown', text: 'Admin',
    links: [
      { to: '/admin/dashboard', text: 'Dashboard' },
      { to: '/admin/profile', text: 'Profile' },
      { to: '/admin/product', text: 'Product' },
    ]
  },
]

const spanClass = \`relative before:content-[''] before:absolute before:w-0 before:h-[3px]
  before:bottom-0 before:left-1/2 before:-translate-x-1/2
  before:rounded-[4px] before:bg-primary
  before:transition-[width,left] before:duration-300 before:ease-in-out
  group-hover:before:w-full\`
</script>

<template>
  <header class="sticky top-[var(--m)] box-border
                  min-h-[var(--height-container-header)] max-h-[var(--height-container-header)]
                  bg-sidebar backdrop-blur-sm flex items-center justify-between
                  px-[var(--m)] rounded-[var(--radius-m)]">

    <div class="cursor-pointer text-link hover:underline" @click="toggleDarkMode()">Dark Mode</div>

    <!-- Nav Desktop -->
    <div class="flex items-center gap-[var(--m)] h-[var(--height-container-header)] max-[800px]:hidden">

      <template v-for="item in navItems" :key="item.text">

        <!-- ✅ Type: link -->
        <Link v-if="item.type === 'link'"
           :href="item.to"
           :class="['relative cursor-pointer flex items-center h-[var(--height-container-header)] group']">
          <span :class="[spanClass, isActive(item.to) ? 'before:w-full' : '']">{{ item.text }}</span>
        </Link>

        <!-- ✅ Type: dropdown -->
        <div v-else-if="item.type === 'dropdown'" class="relative group/menu">
          <div class="relative cursor-pointer flex items-center h-[var(--height-container-header)]">
            {{ item.text }}
          </div>
          <div class="hidden absolute bg-surface
                      shadow-[var(--box-shadow)] rounded-[var(--radius-m)]
                      border border-line
                      top-[var(--height-container-header)] right-0
                      box-border p-[var(--m)] group-hover/menu:block">
            <Link v-for="child in item.links" :key="child.to"
               :href="child.to"
               :class="['relative cursor-pointer flex items-center group/item h-max p-[var(--xxs)_0]']">
              <span :class="[spanClass.replace('group-hover:before:w-full', 'group-hover/item:before:w-full'), isActive(child.to) ? 'before:w-full' : '']">
                {{ child.text }}
              </span>
            </Link>
          </div>
        </div>

      </template>
    </div>

    <!-- Hamburger -->
    <div class='bg-transparent border-0 cursor-pointer p-0 hidden max-[800px]:block' @click="showMenu()">
      <svg id='get-menu' viewBox="0 0 100 100" class="min-w-[31px] min-h-[31px] max-w-[31px] max-h-[31px]">
        <path
            :class="['fill-none stroke-text stroke-[8] transition-[stroke-dasharray,stroke-dashoffset] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] [stroke-dasharray:60_207]', !showSidebar ? '[stroke-dasharray:90_207] [stroke-dashoffset:-134]': '']"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"/>
        <path
            :class="['fill-none stroke-text stroke-[8] transition-[stroke-dasharray,stroke-dashoffset] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] [stroke-dasharray:60_60]', !showSidebar ? '[stroke-dasharray:1_60] [stroke-dashoffset:-60]': '']"
            d="M 20,50 H 80"/>
        <path
            :class="['fill-none stroke-text stroke-[8] transition-[stroke-dasharray,stroke-dashoffset] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] [stroke-dasharray:60_207]', !showSidebar ? '[stroke-dasharray:90_207] [stroke-dashoffset:-134]': '']"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"/>
      </svg>
    </div>

  </header>
</template>`,
        example: false
    },
    {
        title: 'section',
        highlight: `
        <script setup>

</script>

<template>
  <section class="box-border py-[var(--m)] h-max grid auto-rows-max gap-[var(--xx)]">
    <slot/>
  </section>
</template>

<style scoped>

</style>`,
        example: false
    },
    {
        title: 'sidebar',
        highlight: `
        <script setup>
import {computed} from "vue";
import { usePage, Link } from "@inertiajs/vue3";

const props = defineProps({
  isSidebarCollapsed: Boolean,
  showSidebar: Boolean,
  navItems: Array
})

const emit = defineEmits(['toggle'])

const toggleSidebar = () => {
  emit('toggle')
}

// ✅ Data sidebar, tinggal di sesuaikan aja di parent/App Layout
// const navItems = [
//   { type: 'link', to: '/profile', svg: 'profile', text: 'Profile' },
//   { type: 'link', to: '/dashboard', svg: 'dashboard', text: 'Dashboard' },
//   {
//     type: 'sublinks', svg: 'courses', text: 'Courses',
//     links: [
//       { to: '/courses/progress', svg: 'progress', text: 'Progress' },
//       { to: '/courses/sections', svg: 'sections', text: 'Sections' },
//     ]
//   },
//   {
//     type: 'sublinks', svg: 'dimen', text: 'Elements',
//     links: [
//       { to: '/elements/item3', text: 'Item 3' },
//       { to: '/elements/item4', text: 'Item 4' },
//     ]
//   },
// ]

const sidebarWidth = computed(() =>
    props.isSidebarCollapsed ? 'w-[var(--width-sidebar-collapse)]' : 'w-[var(--width-sidebar-expanded)] max-[800px]:w-[95dvw]'
)

const showSidebarClass = computed(() =>
    props.showSidebar ? 'max-[800px]:left-[0]' : 'max-[800px]:left-[-275px]'
)

const page = usePage()

const sidebarLinkActive = (to) => {
  return page.url.includes(to) ? 'text-secondary font-medium bg-transbg' : ''
}

const sidebarLinkActiveSvg = (to) => {
  return page.url.includes(to) ? 'fill-secondary' : ''
}

const isSublinksActive = (links) => {
  return links.some(link => page.url.includes(link.to))
}

const sidebarTooltip = computed(() =>
    \`after:content-[attr(data-title)]
    after:invisible after:opacity-0
    after:bg-surface after:text-text
    after:rounded-[var(--radius-l)]
    after:px-[var(--x)] after:py-[var(--xxx)]
    after:fixed after:z-[999]
    after:whitespace-nowrap
    after:text-[var(--xx)]
    after:left-1/2 after:top-[20dvh]
    after:-translate-x-1/2
    after:transition-[opacity,visibility] after:duration-300
    after:shadow-[var(--box-shadow)]
    after:border-[var(--border)]
    after:font-[Medium,ui-sans-serif]
    \${props.isSidebarCollapsed ? 'hover:after:visible hover:after:opacity-100' : ''}\`
)

const linkClass = \`flex items-center gap-[var(--m)] h-max
  rounded-[var(--radius-m)] cursor-pointer box-border border border-transparent group
  hover:font-medium hover:bg-transbg\`

const sublinkClass = \`flex items-center gap-[var(--m)] h-max
  rounded-[var(--radius-m)] cursor-pointer box-border border border-transparent group
  hover:font-medium hover:bg-transbg\`
</script>

<template>
  <aside :class="[\`bg-sidebar fixed m-[var(--m)] p-[var(--m)] rounded-[var(--radius-m)]
                box-border h-[97dvh] grid grid-cols-1 grid-rows-[max-content_1fr_max-content]
                transition-all duration-300 z-[99]\`, sidebarWidth, showSidebarClass]">

    <!-- Header -->
    <div class="flex items-center gap-[var(--m)] border-b border-line pb-[var(--m)]">
      <div class="p-[var(--xxs)] bg-white rounded-full">
        <img class="max-w-[20px] max-h-[20px] min-w-[20px] min-h-[20px] object-contain" alt="logo" src="/images/logo.svg">
      </div>
      <div :class="['font-bold text-[var(--l)]', props.isSidebarCollapsed ? 'hidden' : '']">Iamra</div>
    </div>

    <!-- Nav Items -->
    <div class="h-[95%] overflow-y-auto overflow-x-hidden pr-[var(--xxs)]
                my-[var(--m)] box-border [&::-webkit-scrollbar]:w-[7px_!important]
                grid grid-cols-1 gap-[var(--xxs)] auto-rows-max">

      <template v-for="item in props.navItems" :key="item.text">

        <!-- ✅ Type: link -->
        <Link
            v-if="item.type === 'link'"
            :href="item.to"
            :class="[linkClass, sidebarLinkActive(item.to), sidebarTooltip, props.isSidebarCollapsed ? 'p-[var(--xxs)_0] justify-center hover:bg-transparent': 'px-[var(--m)] py-[var(--xs)]']"
            :data-title="item.text"
        >
          <svg :class="['max-w-[var(--l)] max-h-[var(--l)] fill-scrollthumb group-hover:fill-secondary', sidebarLinkActiveSvg(item.to)]">
            <use :href="\`/sprite.svg#\${item.svg}\`"></use>
          </svg>
          <span :class="['group-hover:text-secondary', props.isSidebarCollapsed ? 'hidden' : '']">{{ item.text }}</span>
        </Link>

        <!-- ✅ Type: sublinks -->
        <details
            v-else-if="item.type === 'sublinks'"
            class="rounded-[var(--radius-m)] open:bg-sidebar-hover"
            :open="isSublinksActive(item.links)"
        >
          <summary
              :class="[linkClass, sidebarLinkActive(item.to), sidebarTooltip, props.isSidebarCollapsed ? 'p-[var(--xxs)_0] justify-center hover:bg-transparent': 'px-[var(--m)] py-[var(--xs)]']"
              :data-title="item.text"
          >
            <svg :class="['max-w-[var(--l)] max-h-[var(--l)] fill-scrollthumb group-hover:fill-secondary', sidebarLinkActiveSvg(item.to)]">
              <use :href="\`/sprite.svg#\${item.svg}\`"></use>
            </svg>
            <span :class="['group-hover:text-secondary', props.isSidebarCollapsed ? 'hidden' : '']">{{ item.text }}</span>
          </summary>

          <div>
            <Link
                v-for="child in item.links"
                :key="child.to"
                :href="child.to"
                :class="[sublinkClass, sidebarLinkActive(child.to), sidebarTooltip, props.isSidebarCollapsed ? 'p-[var(--xxs)_0] justify-center hover:bg-transparent' : 'px-[var(--m)] py-[var(--xs)] pl-[calc(var(--l)*2+var(--s))]']"
                :data-title="child.text"
            >
              <svg :class="['max-w-[var(--l)] max-h-[var(--l)] fill-scrollthumb group-hover:fill-secondary', sidebarLinkActiveSvg(item.to)]">
                <use :href="\`/sprite.svg#\${child.svg}\`"></use>
              </svg>
              <span :class="['group-hover:text-secondary', props.isSidebarCollapsed ? 'hidden' : '']">{{ child.text }}</span>
            </Link>
          </div>
        </details>

      </template>
    </div>

    <!-- Toggle Button -->
    <div :class="[linkClass, 'px-[var(--m)] py-[var(--xs)]']" @click="toggleSidebar()">
      <svg class="max-w-[var(--l)] max-h-[var(--l)] fill-scrollthumb group-hover:fill-secondary" xmlns="http://www.w3.org/2000/svg" width="35.52" height="35.52"
           viewBox="0 0 20 20" shape-rendering="geometricPrecision" image-rendering="optimizeQuality"
           fill-rule="evenodd">
        <path d="M10 0h9s1 1 1 2v17l-1 1h-9l-1-1V2c0-1 1-2 1-2zm8 14v2 1h-1l-2-1v-1l2-1c0-1 0-1 1-1v1z"/>
        <rect width="7.211" height="20.232" rx="2" ry="4"/>
      </svg>
      <span :class="['group-hover:text-secondary', props.isSidebarCollapsed ? 'hidden' : '']">Hide</span>
    </div>

  </aside>
</template>

<style>

</style>`,
        example: false
    },
    {
        title: 'accordion',
        highlight: `
        <script setup>
defineProps({
  items: {
    type: Array,
    default: () => [
      {
        id: 1,
        title: "What is Lorem Ipsum?",
        subtitle: "Lorem Ipsum is simply dummy text.",
        content: "Lorem Ipsum has been the industry's standard..."
      },
      {
        id: 2,
        title: "Why do we use it?",
        subtitle: "It is a long established fact.",
        content: "It has roots in a piece of classical Latin literature..."
      }
    ]
  }
})
</script>

<!--
Usage:
<Accordion :items="[
  {
    id: 1,
    title: 'Title',
    subtitle: 'Subtitle',
    content: 'Content'
  }
]" />
-->

<template>
  <div class="space-y-4">
    <div
        v-for="item in items"
        :key="item.id"
        class="block p-[var(--m)] border-style-default rounded-[var(--radius-s)] max-w-[85dvw]"
    >
      <input
          type="checkbox"
          :id="'accordion-' + item.id"
          class="peer hidden"
      />

      <label
          :for="'accordion-' + item.id"
          class="grid cursor-pointer relative transition-all duration-300 text-[var(--m)]
               pb-0 border-b border-transparent
               peer-checked:pb-[var(--m)]
               peer-checked:border-line
               peer-checked:mb-[var(--m)]"
      >
        <div class="flex items-center justify-between">
          <p>{{ item.title }}</p>
          <span class="transition-transform duration-300 peer-checked:rotate-180">
            ▼
          </span>
        </div>

        <div class="text-[var(--s)] font-light">
          {{ item.subtitle }}
        </div>
      </label>

      <div
          class="max-h-0 overflow-hidden box-border pr-[var(--xxs)]
               transition-[max-height] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
               peer-checked:max-h-[300px]
               peer-checked:overflow-y-auto"
      >
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>
`,
        html: `
                <div class="accordion-item">
                    <input type="checkbox" id="accordion-item1" class="accordion-item-check"/>
                    <label for="accordion-item1" class="accordion-item-label">
                        <div class="flex-aic-jcb">
                            <p>What is Lorem Ipsum?</p>
                            <span>▼</span>
                        </div>
                        <div class="accordion-item-label-subtitle">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </div>
                    </label>
                    <div class="accordion-content">
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived
                            not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <br />
                <div class="accordion-item">
                    <input type="checkbox" id="accordion-item2" class="accordion-item-check"/>
                    <label for="accordion-item2" class="accordion-item-label">
                        <div class="flex-aic-jcb">
                            <p>What is Lorem Ipsum?</p>
                            <span>▼</span>
                        </div>
                        <div class="accordion-item-label-subtitle">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </div>
                    </label>
                    <div class="accordion-content">
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived
                            not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>`,
        example: true
    },
    {
        title: 'badge',
        highlight: `
        <script setup>
defineProps({
  text: {
    type: String,
    default: 'Message'
  },
  variant: {
    type: String,
    default: 'primary'
  },
  closable: {
    type: Boolean,
    default: true
  },
})

</script>

<!--
Usage:
<Badge text="Message" type="primary" :closable="true"/>
-->

<template>
  <div class="flex items-center justify-start gap-[var(--m)] flex-wrap">
    <div
        class="break-all font-medium rounded-full box-border w-max max-w-[75dvw] h-max flex items-center gap-[var(--s)]"
        :class="[
        closable ? 'pl-[25px] pr-[var(--x)] py-[var(--xs)] justify-between' : 'px-[var(--m)] py-[5px] text-[length:var(--s)] text-white',
        !closable && variant === 'primary' ? 'bg-primary' : variant === 'primary' ? 'bg-transprimary text-primary' : '',
        !closable && variant === 'warning' ? 'bg-warning' : variant === 'warning' ? 'bg-transwarning text-warning' : '',
        !closable && variant === 'success' ? 'bg-success' : variant === 'success' ? 'bg-transsuccess text-success' : '',
        !closable && variant === 'danger' ?  'bg-danger' : variant === 'danger' ?'bg-transdanger text-danger' : ''
      ]"
    >
      <p>{{ text }}</p>

      <div
          v-if="closable"
          class="min-w-[23px] min-h-[23px] max-w-[23px] max-h-[23px]
               flex items-center justify-center
               border-2 rounded-full cursor-pointer
               bg-surface
               border-danger
               text-danger
               hover:bg-danger hover:text-white"
      >
        <svg
            class="max-w-[9px] max-h-[9px] fill-current"
            viewBox="0 0 27 27"
        >
          <path
              d="M8 1l5 6 6-6c2-1 5-1 6 0 2 2 2 5 0 7l-5 5 5 6c2 2 2 5 0 6-1 2-4 2-6 0l-6-5-5 5c-2 2-5 2-7 0-1-1-1-4 0-6l6-6-6-5C0 6 0 3 1 1c2-1 5-1 7 0z"/>
        </svg>
      </div>
    </div>
  </div>
</template>`,
        html: `
                <div class="flex-ais-jcs gap-m">
                    <div class="badge badge-close badge-primary">
                        <p>Message</p>
                        <div class="badge-button-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35.52" height="35.52" viewBox="0 0 27 27" shape-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd">
                                <path d="M8 1l5 6 6-6c2-1 5-1 6 0 2 2 2 5 0 7l-5 5 5 6c2 2 2 5 0 6-1 2-4 2-6 0l-6-5-5 5c-2 2-5 2-7 0-1-1-1-4 0-6l6-6-6-5C0 6 0 3 1 1c2-1 5-1 7 0z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="badge badge-close badge-warning">
                        <p>Message</p>
                        <div class="badge-button-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35.52" height="35.52" viewBox="0 0 27 27" shape-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd">
                                <path d="M8 1l5 6 6-6c2-1 5-1 6 0 2 2 2 5 0 7l-5 5 5 6c2 2 2 5 0 6-1 2-4 2-6 0l-6-5-5 5c-2 2-5 2-7 0-1-1-1-4 0-6l6-6-6-5C0 6 0 3 1 1c2-1 5-1 7 0z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="badge badge-close badge-success">
                        <p>Message</p>
                        <div class="badge-button-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35.52" height="35.52" viewBox="0 0 27 27" shape-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd">
                                <path d="M8 1l5 6 6-6c2-1 5-1 6 0 2 2 2 5 0 7l-5 5 5 6c2 2 2 5 0 6-1 2-4 2-6 0l-6-5-5 5c-2 2-5 2-7 0-1-1-1-4 0-6l6-6-6-5C0 6 0 3 1 1c2-1 5-1 7 0z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="badge badge-close badge-danger">
                        <p>Message</p>
                        <div class="badge-button-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35.52" height="35.52" viewBox="0 0 27 27" shape-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd">
                                <path d="M8 1l5 6 6-6c2-1 5-1 6 0 2 2 2 5 0 7l-5 5 5 6c2 2 2 5 0 6-1 2-4 2-6 0l-6-5-5 5c-2 2-5 2-7 0-1-1-1-4 0-6l6-6-6-5C0 6 0 3 1 1c2-1 5-1 7 0z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                
                <br />

                <div class="flex-ais-jcs gap-m">
                    <div class="badge badge-small bg-primary">
                        <p>Message</p>
                    </div>
                    <div class="badge badge-small bg-warning">
                        <p>Message</p>
                    </div>
                    <div class="badge badge-small bg-success">
                        <p>Message</p>
                    </div>
                    <div class="badge badge-small bg-danger">
                        <p>Message</p>
                    </div>
                </div>`,
        example: true
    },
    {
        title: 'bottom-sheet',
        highlight: `
        <script setup>
import { ref } from 'vue'

const active = ref(false)
const toggle = () => active.value = !active.value
</script>

<!--
Usage:
<BottomSheet>
  <template #trigger>
    <div class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
      Open
    </div>
  </template>

  <template #header>
    🖱
  </template>

  <template #default>
    <h1>Custom Content</h1>
    <p>Isi bebas</p>
  </template>
</BottomSheet>
-->

<template>
  <!-- trigger -->
  <div @click="toggle">
    <slot name="trigger">
      <div
          class="inline-block cursor-pointer px-[var(--x)] py-[var(--xxs)] font-medium
               bg-[var(--primary-color)] text-white rounded"
      >
        Trigger
      </div>
    </slot>
  </div>

  <!-- sheet -->
  <div
      class="fixed z-[999] left-1/2 -translate-x-1/2
           bg-surface
           h-[85dvh] w-[90dvw]
           border-t border-l border-r
           rounded-t-[var(--radius-m)]
           border-border
           overflow-hidden box-border
           transition-all duration-300 ease-in"
      :class="active ? 'bottom-0' : '-bottom-[86dvh]'"
  >
    <!-- header -->
    <div
        class="min-h-[8dvh] flex items-center justify-center cursor-pointer
             transition-all duration-300
             text-[length:var(--l)]
             hover:bg-[var(--transprimary-color)]
             hover:text-primary
             hover:scale-[1.07]"
        @click="toggle"
    >
      <slot name="header">
        🖱
      </slot>
    </div>

    <!-- content -->
    <div
        class="grid auto-rows-max max-h-[77dvh]
             overflow-x-hidden overflow-y-auto
             box-border
             py-[var(--m)] mx-[var(--m)]
             border-border
             border-t"
    >
      <slot />
    </div>
  </div>
</template>`,
        html: `
                <div class="button bg-primary" onclick="showBottomSheet()">
                    Trigger
                </div>
                <div class="bottom-sheet">
                    <div class="bottom-sheet-header" onclick="showBottomSheet()">
                        🖱
                    </div>
                    <div class="bottom-sheet-content">
                        <h1>Example</h1>

                    </div>
                </div>`,
        example: true
    },
    {
        title: 'breadcrumb',
        highlight: `
        <script setup>
import { usePage, Link } from '@inertiajs/vue3'

const page = usePage()

const items = [
  { id: 1, label: 'home', to: '/' },
  { id: 2, label: 'product', to: '/product' }
]
</script>

<!--
Usage:
- otomatis active dari Inertia usePage().url (tanpa function manual)
-->

<template>
  <div
      class="flex flex-wrap items-center
           gap-y-[var(--s)] gap-x-[var(--xxs)]
           p-[var(--xs)]
           text-[length:var(--s)]
           rounded-[var(--radius-s)]
           border border-line
           w-max max-w-[85dvw]
           text-link"
  >
    <template v-for="(item, i) in items" :key="item.id">
      <Link
          :href="item.to"
          class="px-[var(--xs)] py-[2px]
               rounded-[var(--radius-s)]
               text-link
               capitalize cursor-pointer
               hover:text-primary
               hover:bg-transprimary"
          :class="page.url === item.to
          ? 'text-primary bg-transprimary'
          : ''"
      >
        {{ item.label }}
      </Link>

      <span v-if="i < items.length - 1">></span>
    </template>
  </div>
</template>`,
        html: `
                <div class="breadcrumb">
                    <a class="breadcrumb-item active">menu a</a>
                    <span>></span>
                    <a class="breadcrumb-item">menu b</a>
                </div>`,
        example: true
    },
    {
        title: 'button',
        highlight: `
        <script setup>
defineProps({
  text: {
    type: String,
    default: 'Submit'
  },
  variant: {
    type: String,
    default: 'primary' // primary | warning | success | danger
  },
  type: {
    type: String,
    default: 'solid' // solid | outline | badge
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})
</script>

<!--
Usage:
<Button text="Click" />
<Button text="Delete" variant="danger" />
<Button text="Outline" variant="primary" type="outline" />
<Button text="Badge" variant="success" type="badge" />
<Button text="Loading" :loading="true" />
<Button text="Disabled" :disabled="true" />
-->

<template>
  <button
      :disabled="disabled || loading"
      class="cursor-pointer border-none outline-none flex items-center justify-center gap-2
           px-[var(--m)] py-[calc(var(--m)/2)]
           min-w-[77px] w-max rounded-[var(--radius-s)]
           text-[length:var(--s)] font-medium
           transition-all duration-200 dark:text-white
           disabled:opacity-50 disabled:cursor-not-allowed"
      :class="[
      // SOLID
      type === 'solid' && variant === 'primary' ? 'bg-primary text-bg hover:ring-4 hover:ring-transprimary' : '',
      type === 'solid' && variant === 'warning' ? 'bg-warning text-bg hover:ring-4 hover:ring-transwarning' : '',
      type === 'solid' && variant === 'success' ? 'bg-success text-bg hover:ring-4 hover:ring-transsuccess' : '',
      type === 'solid' && variant === 'danger' ? 'bg-danger text-bg hover:ring-4 hover:ring-transdanger' : '',

      // OUTLINE
      type === 'outline' && variant === 'primary' ? 'border text-primary border border-solid border-line hover:border-primary hover:ring-4 hover:ring-transprimary' : '',
      type === 'outline' && variant === 'warning' ? 'border text-warning border border-solid border-line hover:border-warning hover:ring-4 hover:ring-transwarning' : '',
      type === 'outline' && variant === 'success' ? 'border text-success border border-solid border-line hover:border-success hover:ring-4 hover:ring-transsuccess' : '',
      type === 'outline' && variant === 'danger' ? 'border text-danger border border-solid border-line hover:border-danger hover:ring-4 hover:ring-transdanger' : '',

      // BADGE
      type === 'badge' && variant === 'primary' ? 'bg-transprimary text-primary rounded-full hover:bg-primary hover:text-bg' : '',
      type === 'badge' && variant === 'warning' ? 'bg-transwarning text-warning rounded-full hover:bg-warning hover:text-bg' : '',
      type === 'badge' && variant === 'success' ? 'bg-transsuccess text-success rounded-full hover:bg-success hover:text-bg' : '',
      type === 'badge' && variant === 'danger' ? 'bg-transdanger text-danger rounded-full hover:bg-danger hover:text-bg' : ''
    ]"
  >
    <!-- loading spinner -->
    <svg
        v-if="loading"
        class="animate-spin h-4 w-4"
        viewBox="0 0 24 24"
    >
      <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
          fill="none"
      />
      <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>

    <span v-if="!loading">
      {{ text }}
    </span>
  </button>
</template>`,
        html: `
                <div class="flex-ais-jcs gap-m mt-m">
                    <div class="button btn-primary">Example</div>
                    <a class="button badge-primary text-primary">Example</a>
                    <button class="button bg-primary">Example</button>
                    <button class="button badge-primary rounded text-primary">Example</button>
                </div>
                <br />
                <div class="flex-ais-jcs gap-m mt-m">
                    <div class="button btn-warning">Example</div>
                    <a class="button badge-warning text-warning">Example</a>
                    <button class="button bg-warning">Example</button>
                    <button class="button badge-warning rounded text-warning">Example</button>
                </div>
                <br />
                <div class="flex-ais-jcs gap-m mt-m">
                    <div class="button btn-success">Example</div>
                    <a class="button badge-success text-success">Example</a>
                    <button class="button bg-success">Example</button>
                    <button class="button badge-success rounded text-success">Example</button>
                </div>
                <br />
                <div class="flex-ais-jcs gap-m mt-m">
                    <div class="button btn-danger">Example</div>
                    <a class="button badge-danger text-danger">Example</a>
                    <button class="button bg-danger">Example</button>
                    <button class="button badge-danger rounded text-danger">Example</button>
                </div>`,
        example: true
    },
    {
        title: 'card',
        highlight: `
        <script setup>
defineProps({
  replaceShadowWithBorder: {
    type: Boolean,
    default: false,
  },
})
</script>
<!--
CardWrapper — reusable card component

Props:
  replaceShadowWithBorder (Boolean) — ganti box-shadow jadi border outline

Slots:
  default   — konten utama card (bebas, fleksibel)
  actions   — tombol / link di bagian bawah (opsional)
  datetime  — timestamp / label waktu (opsional)

Contoh pakai:

<div class="grid grid-cols-[repeat(auto-fit,_minmax(325px,_1fr))] gap-[var(--x)_var(--l)] box-border max-[800px]:grid-cols-1">
 <CardWrapper replace-shadow-with-border>
     <div>
       <div class="text-[length:var(--x)] font-medium">Ilham Rahmat Akbar</div>
       <p>Fullstack Dev</p>
       <small class="text-[length:var(--s)] font-light text-link">Jakarta</small>
     </div>
     <template #actions>
       <a class="text-primary hover:font-medium hover:text-underline">Hire</a>
       <a class="text-success hover:font-medium hover:text-underline">Contact</a>
     </template>
     <template #datetime>
       <p class="text-link text-[length:var(--s)] font-light">5 min ago</p>
     </template>
   </CardWrapper>
</div>
-->

<template>
  <div
      class="box-border grid auto-rows-max gap-[var(--m)] p-[var(--l)] rounded-[var(--radius-m)] shadow-box"
      :class="replaceShadowWithBorder ? '' :'shadow-none [border:var(--border)]'"
  >

    <!-- Slot default: isi utama card -->
    <slot/>

    <!-- Slot actions: tombol / link aksi -->
    <div
        v-if="$slots.actions"
        class="flex items-center justify-end flex-wrap gap-[var(--m)] w-full text-[var(--s)] mt-[var(--xx)] [&>*]:cursor-pointer [&>*:hover]:underline"
    >
      <slot name="actions"/>
    </div>

    <!-- Slot datetime: timestamp / label waktu -->
    <p
        v-if="$slots.datetime"
        class="text-[var(--xs)] italic font-thin text-link"
    >
      <slot name="datetime"/>
    </p>

  </div>
</template>`,
        html: `
                <div class="card-layout max-width-800">
                    <div class="card-wrapper">
                        <div>
                            <div class="card-wrapper-title">Ilham Rahmat Akbar</div>
                            <p>Fullstack Dev</p>
                            <small>Jakarta</small>
                        </div>
                        <div class="card-wrapper-actions">
                            <a class="text-primary">Hire</a>
                            <a class="text-success">Contact</a>
                        </div>
                        <p class="card-wrapper-date-time">5 min ago</p>
                    </div>
                    <div class="card-wrapper replace-shadow-with-border">
                        <div>
                            <div class="card-wrapper-title">Ilham Rahmat Akbar</div>
                            <p>Fullstack Dev</p>
                            <small>Jakarta</small>
                        </div>
                        <div class="card-wrapper-actions">
                            <a class="text-primary">Hire</a>
                            <a class="text-success">Contact</a>
                        </div>
                        <p class="card-wrapper-date-time">5 min ago</p>
                    </div>
                </div>`,
        example: true
    },
    {
        title: 'chart-bar',
        highlight: `
      <script setup>
/**
 * ChartBar.vue — Bar chart menggunakan Chart.js + vue-chartjs
 *
 * Install (jika belum):
 *   npm install chart.js vue-chartjs
 *
 * Props:
 *   name  — judul chart (String)
 *   stats — Array of { label: string, value: number }
 *
 * Contoh pakai:
 *   <script setup>
 *   import ChartBar from '@/components/charts/ChartBar.vue'
 *
 *   const data = [
 *     { label: 'Jan', value: 450 },
 *     { label: 'Feb', value: 590 },
 *     { label: 'Mar', value: 800 },
 *     { label: 'Apr', value: 320 },
 *   ]
 *   <\\/script>
 *
 *   <template>
 *     <ChartBar name="Revenue Bulanan" :stats="data" />
 *   </template>
 */

import { computed } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title, Tooltip, Legend,
  BarElement, CategoryScale, LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps({
  name:  { type: String, default: 'Chart' },
  stats: { type: Array,  default: () => [] },
})

const chartData = computed(() => ({
  labels: props.stats.map(i => i.label),
  datasets: [
    {
      label:                props.name,
      data:                 props.stats.map(i => i.value),
      backgroundColor:      '#4f46e5',
      hoverBackgroundColor: '#4f46e5',
      borderRadius:         8,
      borderSkipped:        false,
      barThickness:         32,
    },
  ],
}))

const chartOptions = {
  responsive:          true,
  maintainAspectRatio: false,
  plugins: {
    legend:  { display: false },
    tooltip: { padding: 12, backgroundColor: '#1f2937', cornerRadius: 8 },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid:  { color: 'rgba(156,163,175,0.15)' },
      ticks: { color: '#9ca3af', font: { size: 11 } },
    },
    x: {
      grid:  { display: false },
      ticks: { color: '#6b7280', font: { size: 12, weight: '500' } },
    },
  },
  animation: { duration: 1200, easing: 'easeInOutQuart' },
}
</script>

<template>
  <div class="p-6 bg-surface rounded-xl shadow-md border-style-default w-full max-w-lg max-md:max-w-[88dvw]">

    <!-- Header -->
    <div class="flex items-center gap-3 mb-6">
      <span class="grid place-items-center w-9 h-9 rounded-lg bg-transprimary">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="fill-primary">
          <path fill-rule="evenodd" d="M7 2a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5H7zm6 6a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0V8zm-5 2a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1zm8 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1z" />
        </svg>
      </span>
      <h3 class="text-[length:var(--l,1rem)] font-bold truncate">{{ name }}</h3>
    </div>

    <!-- Chart -->
    <div class="h-72 w-full">
      <Bar v-if="stats.length" :data="chartData" :options="chartOptions" />
      <div v-else class="flex h-full items-center justify-center text-sm text-link italic">
        Memuat data...
      </div>
    </div>

  </div>
</template>`,
        example: false
    },
    {
        title: 'chart-doughnut',
        highlight: `
      <script setup>
/**
 * ChartDoughnut.vue — Doughnut chart menggunakan Chart.js + vue-chartjs
 *
 * Install (jika belum):
 *   npm install chart.js vue-chartjs
 *
 * Props:
 *   name  — judul chart (String)
 *   stats — Array of { label: string, value: number, color?: string }
 *           color bersifat opsional — jika tidak diisi, warna di-generate otomatis
 *
 * Contoh pakai:
 *   <script setup>
 *   import ChartDoughnut from '@/components/charts/ChartDoughnut.vue'
 *
 *   const data = [
 *     { label: 'Penjualan', value: 500, color: '#6366f1' },
 *     { label: 'Retur',     value: 20,  color: '#f59e0b' },
 *     { label: 'Pending',   value: 45,  color: '#10b981' },
 *   ]
 *   <\\/script>
 *
 *   <template>
 *     <ChartDoughnut name="Transaksi" :stats="data" />
 *   </template>
 */

import { computed } from 'vue'
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps({
  name:  { type: String, default: 'Chart' },
  stats: { type: Array,  default: () => [] },
})

// Palet warna default yang lebih konsisten dibanding random
const DEFAULT_COLORS = [
  '#6366f1', '#f59e0b', '#10b981', '#f43f5e',
  '#3b82f6', '#8b5cf6', '#14b8a6', '#fb923c',
]
function resolveColor(item, idx) {
  return item.color ?? DEFAULT_COLORS[idx % DEFAULT_COLORS.length]
}

const total = computed(() =>
  props.stats.reduce((acc, i) => acc + i.value, 0)
)

const chartData = computed(() => ({
  labels: props.stats.map(i => i.label),
  datasets: [
    {
      data:            props.stats.map(i => i.value),
      backgroundColor: props.stats.map((i, idx) => resolveColor(i, idx)),
      borderWidth:     0,
      hoverOffset:     6,
    },
  ],
}))

const chartOptions = {
  responsive:          true,
  maintainAspectRatio: false,
  cutout:              '72%',
  plugins: {
    legend: {
      position: 'right',
      labels: {
        usePointStyle: true,
        pointStyle:    'circle',
        boxWidth:      8,
        padding:       16,
        font:          { size: 12 },
      },
    },
    tooltip: {
      backgroundColor: '#1f2937',
      padding:         12,
      cornerRadius:    8,
      callbacks: {
        label: (ctx) => \`  \${ctx.label}: \${ctx.raw}\`,
      },
    },
  },
}
</script>

<template>
  <div class="p-6 bg-surface rounded-xl shadow-md border-style-default w-full max-w-md max-md:max-w-[88dvw]">

    <!-- Header -->
    <div class="flex items-center gap-3 mb-6">
      <span class="grid place-items-center w-9 h-9 rounded-lg bg-transprimary">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15" class="fill-primary">
          <path d="M0 7.5A7.5 7.5 0 0 1 7 .016v4.019A3.5 3.5 0 0 0 7.5 11a3.48 3.48 0 0 0 2.096-.697l2.842 2.842A7.47 7.47 0 0 1 7.5 15 7.5 7.5 0 0 1 0 7.5zm13.145 4.938A7.47 7.47 0 0 0 15 7.5c0-1.034-.209-2.018-.587-2.914l-3.658 1.626A3.49 3.49 0 0 1 11 7.5a3.48 3.48 0 0 1-.697 2.096l2.842 2.842zM8 4.035V.016a7.5 7.5 0 0 1 5.963 3.675L10.254 5.34A3.5 3.5 0 0 0 8 4.035z" />
        </svg>
      </span>
      <h3 class="text-[length:var(--l,1rem)] font-bold truncate">{{ name }}</h3>
    </div>

    <!-- Chart -->
    <div class="relative h-56 w-full flex items-center justify-center">
      <template v-if="stats.length">
        <Doughnut :data="chartData" :options="chartOptions" />
        <!-- Total di tengah -->
        <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span class="text-2xl font-bold">{{ total }}</span>
          <span class="text-[10px] uppercase tracking-widest text-link mt-0.5">Total</span>
        </div>
      </template>
      <p v-else class="text-sm text-link italic">Data kosong</p>
    </div>

  </div>
</template>`,
        example: false
    }, {
        title: 'chart-line',
        highlight: `
      <script setup>
/**
 * ChartLine.vue — Line chart menggunakan Chart.js + vue-chartjs
 *
 * Install (jika belum):
 *   npm install chart.js vue-chartjs
 *
 * Props:
 *   name    — judul chart (String)
 *   stats   — Array of { label: string, value: number }
 *             ATAU Array of Array (multi-line):
 *             [ { label: 'Dataset A', color?: string, data: [{ label, value }] } ]
 *   smooth  — Boolean, pakai kurva smooth (default: true)
 *
 * ── Single line (paling umum) ────────────────────────────────────────────
 *   <script setup>
 *   import ChartLine from '@/components/charts/ChartLine.vue'
 *
 *   const data = [
 *     { label: 'Jan', value: 120 },
 *     { label: 'Feb', value: 380 },
 *     { label: 'Mar', value: 210 },
 *     { label: 'Apr', value: 540 },
 *   ]
 *   <\\/script>
 *
 *   <template>
 *     <ChartLine name="Pengunjung Bulanan" :stats="data" />
 *   </template>
 *
 * ── Multi line ───────────────────────────────────────────────────────────
 *   const multiData = [
 *     {
 *       label: 'Revenue',
 *       color: '#6366f1',
 *       data: [{ label: 'Jan', value: 400 }, { label: 'Feb', value: 600 }],
 *     },
 *     {
 *       label: 'Expense',
 *       color: '#f43f5e',
 *       data: [{ label: 'Jan', value: 200 }, { label: 'Feb', value: 350 }],
 *     },
 *   ]
 *
 *   <ChartLine name="Revenue vs Expense" :stats="multiData" />
 */

import { computed } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title, Tooltip, Legend,
  LineElement, PointElement,
  CategoryScale, LinearScale, Filler,
} from 'chart.js'

ChartJS.register(
  Title, Tooltip, Legend,
  LineElement, PointElement,
  CategoryScale, LinearScale, Filler,
)

const props = defineProps({
  name:   { type: String,  default: 'Chart' },
  stats:  { type: Array,   default: () => [] },
  smooth: { type: Boolean, default: true },
})

// Deteksi apakah multi-line (array of { label, data: [...] })
const isMulti = computed(() =>
  props.stats.length > 0 && Array.isArray(props.stats[0]?.data)
)

const COLORS = [
  '#6366f1', '#f43f5e', '#10b981', '#f59e0b',
  '#3b82f6', '#8b5cf6', '#14b8a6', '#fb923c',
]

function makeDataset(label, data, color, tension) {
  return {
    label,
    data:            data.map(i => i.value),
    borderColor:     color,
    backgroundColor: color + '22',   // 13% opacity fill
    borderWidth:     2.5,
    pointRadius:     4,
    pointHoverRadius: 6,
    pointBackgroundColor: color,
    tension,
    fill: true,
  }
}

const chartData = computed(() => {
  const tension = props.smooth ? 0.4 : 0

  if (isMulti.value) {
    return {
      labels: props.stats[0].data.map(i => i.label),
      datasets: props.stats.map((s, idx) =>
        makeDataset(s.label, s.data, s.color ?? COLORS[idx % COLORS.length], tension)
      ),
    }
  }

  return {
    labels: props.stats.map(i => i.label),
    datasets: [
      makeDataset(props.name, props.stats, COLORS[0], tension),
    ],
  }
})

const chartOptions = {
  responsive:          true,
  maintainAspectRatio: false,
  interaction: { mode: 'index', intersect: false },
  plugins: {
    legend: {
      display:  true,
      position: 'top',
      align:    'end',
      labels: {
        usePointStyle: true,
        pointStyle:    'circle',
        boxWidth:      8,
        padding:       16,
        font:          { size: 12 },
      },
    },
    tooltip: {
      backgroundColor: '#1f2937',
      padding:         12,
      cornerRadius:    8,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid:  { color: 'rgba(156,163,175,0.15)' },
      ticks: { color: '#9ca3af', font: { size: 11 } },
    },
    x: {
      grid:  { display: false },
      ticks: { color: '#6b7280', font: { size: 12, weight: '500' } },
    },
  },
  animation: { duration: 1200, easing: 'easeInOutQuart' },
}
</script>

<template>
  <div class="p-6 bg-surface rounded-xl shadow-md border-style-default w-full max-w-lg max-md:max-w-[88dvw]">

    <!-- Header -->
    <div class="flex items-center gap-3 mb-6">
      <span class="grid place-items-center w-9 h-9 rounded-lg bg-transprimary">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-primary">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      </span>
      <h3 class="text-[length:var(--l,1rem)] font-bold truncate">{{ name }}</h3>
    </div>

    <!-- Chart -->
    <div class="h-72 w-full">
      <Line v-if="stats.length" :data="chartData" :options="chartOptions" />
      <div v-else class="flex h-full items-center justify-center text-sm text-link italic">
        Memuat data...
      </div>
    </div>

  </div>
</template>`,
        example: false
    },
    {
        title: 'chart-pie',
        highlight: `
      <script setup>
/**
 * ChartPie.vue — Pie chart menggunakan Chart.js + vue-chartjs
 *
 * Install (jika belum):
 *   npm install chart.js vue-chartjs
 *
 * Props:
 *   name  — judul chart (String)
 *   stats — Array of { label: string, value: number, color?: string }
 *           color bersifat opsional — jika tidak diisi, pakai warna default
 *
 * Contoh pakai:
 *   <script setup>
 *   import ChartPie from '@/components/charts/ChartPie.vue'
 *
 *   const data = [
 *     { label: 'Elektronik', value: 500, color: '#6366f1' },
 *     { label: 'Fashion',    value: 320, color: '#f59e0b' },
 *     { label: 'Makanan',    value: 180, color: '#10b981' },
 *     { label: 'Lainnya',    value: 90  },   // ← tanpa color, otomatis
 *   ]
 *   <\\/script>
 *
 *   <template>
 *     <ChartPie name="Distribusi Kategori" :stats="data" />
 *   </template>
 */

import { computed } from 'vue'
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps({
  name:  { type: String, default: 'Chart' },
  stats: { type: Array,  default: () => [] },
})

const DEFAULT_COLORS = [
  '#6366f1', '#f59e0b', '#10b981', '#f43f5e',
  '#3b82f6', '#8b5cf6', '#14b8a6', '#fb923c',
]
function resolveColor(item, idx) {
  return item.color ?? DEFAULT_COLORS[idx % DEFAULT_COLORS.length]
}

const chartData = computed(() => ({
  labels: props.stats.map(i => i.label),
  datasets: [
    {
      label:           props.name,
      data:            props.stats.map(i => i.value),
      backgroundColor: props.stats.map((i, idx) => resolveColor(i, idx)),
      borderWidth:     0,
      hoverOffset:     0,
    },
  ],
}))

const chartOptions = {
  responsive:          true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true,
        pointStyle:    'circle',
        padding:       20,
        font:          { size: 12 },
      },
    },
    tooltip: {
      backgroundColor: '#1f2937',
      padding:         12,
      cornerRadius:    8,
      callbacks: {
        label: (ctx) => {
          const label = ctx.label ? \`  \${ctx.label}: \` : ''
          return \`\${label}\${ctx.parsed} unit\`
        },
      },
    },
  },
  animation: { duration: 1200, easing: 'easeInOutQuart' },
}
</script>

<template>
  <div class="p-6 bg-surface rounded-xl shadow-md border-style-default w-full max-w-md max-md:max-w-[88dvw]">

    <!-- Header -->
    <div class="flex items-center gap-3 mb-6">
      <span class="grid place-items-center w-9 h-9 rounded-lg bg-transprimary">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" class="fill-primary">
          <path d="M15 0v17.3l15.947 4.784C31.568 20.543 32 18.688 32 16.571 32 7.419 23.453 0 15 0h0zm-2 3c-6.971.728-13 7.026-13 14.5C0 25.508 6.492 32 14.5 32c5.897 0 10.963-3.526 13.229-8.582L13 19V3h0z" fill-rule="evenodd" />
        </svg>
      </span>
      <h3 class="text-[length:var(--l,1rem)] font-bold truncate">{{ name }}</h3>
    </div>

    <!-- Chart -->
    <div class="h-64 w-full flex items-center justify-center">
      <Pie v-if="stats.length" :data="chartData" :options="chartOptions" />
      <p v-else class="text-sm text-link italic">Belum ada data</p>
    </div>

  </div>
</template>`,
        example: false
    },
    {
        title: 'data',
        highlight: `
        <script setup>
defineProps({
  items: {
    type: Array,
    default: () => [
      { label: 'Name', value: 'Ilham' }
    ]
  }
})
</script>

<!--
Cara Pakai
<template>
    <Data :items="userData" />
</template>

const userData = ref([
  { label: 'name', value: 'Ilham Rahmat Akbar' },
  { label: 'position', value: 'Fullstack Developer' },
  { label: 'experience', value: '5 Years' }
])
-->
<template>
  <div class="flex flex-col gap-[var(--xs)]">
    <div
        v-for="(item, index) in items"
        :key="index"
        class="border border-line rounded-[var(--radius-m)] px-[var(--m)] py-[var(--xs)] bg-transparent"
    >
      <!-- Key/Label -->
      <dt class="font-light capitalize text-[var(--s)] text-link">
        {{ item.label }}
      </dt>

      <!-- Value -->
      <dd class="font-medium">
        {{ item.value }}
      </dd>
    </div>
  </div>
</template>`,
        example: false
    },
    {
        title: 'export',
        highlight: `
        <template>
  <!-- Tombol Trigger -->
  <div
      @click="showModal = true"
      class="cursor-pointer group outline-none flex items-center justify-center gap-x-4 py-[calc(var(--m)/2)] px-[var(--m)] h-max min-w-[77px] w-max rounded-[var(--radius-s)] text-[length:var(--s)] border border-solid border-line hover:outline-4 hover:outline-solid hover:outline-transprimary hover:border-[1px] hover:border-solid hover:border-primary hover:text-primary"
  >
    <svg class="max-w-[var(--l)] max-h-[var(--l)] fill-text group-hover:fill-primary"
         xmlns="http://www.w3.org/2000/svg" height="800" width="800" viewBox="0 0 459.636 459.636">
      <path d="M424.621 50.643H136.299c-19.307 0-35.015 15.707-35.015 35.014v52.272h41.669c12.94-31.165 53.868-39.785 78.182-15.461l73.448 73.448c18.737 18.736 18.741 49.064.001 67.802l-73.447 73.447c-24.303 24.307-65.232 15.735-78.184-15.458h-41.669v52.272c0 19.307 15.707 35.014 35.015 35.014h288.322c19.307 0 35.015-15.707 35.015-35.014V85.657c0-19.307-15.707-35.014-35.015-35.014zM171.254 303.266c0 14.182 17.221 21.362 27.281 11.3l73.449-73.449c6.241-6.241 6.242-16.359 0-22.6l-73.449-73.449c-10.038-10.043-27.281-2.903-27.281 11.3v13.522H15.981C7.155 169.891 0 177.046 0 185.872v87.891c0 8.826 7.155 15.981 15.981 15.981l155.273.001v13.521z" />
    </svg>
    <span class="capitalize font-['Medium',_ui-sans-serif] text-[length:var(--s)]">Export</span>
  </div>

  <!-- Modal Komponen -->
  <Modal title="Export" :isOpen="showModal" @close="showModal = false">
    <template #footer>
      <p>Filter</p>
    </template>

    <!-- Header -->
    <div class="border-b border-line pb-[var(--m)] flex items-center justify-between">
      <div>
        <h3 class="font-medium text-[length:var(--l)]">Export Laporan Penjualan</h3>
        <p class="text-[length:var(--s)] text-link">Pilih filter lalu export dalam format yang diinginkan</p>
      </div>
      <div class="ml-4 w-10 h-10 bg-transprimary rounded-lg flex items-center justify-center">
        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
    </div>

    <!-- Preset Periode -->
    <div class="px-6 pt-4">
      <p class="font-medium mb-2 tracking-wide">Preset Periode</p>
      <div class="flex flex-wrap gap-2">
        <button
            v-for="preset in PRESET_LIST"
            :key="preset.key"
            @click="setPreset(preset.key)"
            type="button"
            class="px-3 py-1.5 text-[length:var(--s)] font-medium rounded-full cursor-pointer border border-line text-link hover:border-primary hover:text-primary hover:bg-transprimary transition-all duration-150"
        >
          {{ preset.label }}
        </button>
      </div>
    </div>

    <!-- Filter Form -->
    <div class="px-6 py-4 grid grid-cols-2 gap-4 md:grid-cols-4">
      <div>
        <label class="block text-[var(--s)] font-medium mb-1">Tanggal Mulai</label>
        <input
            type="date"
            v-model="form.start_date"
            :max="form.end_date"
            class="w-full text-[var(--s)] border border-line rounded-[var(--radius-m)] px-3 py-2 cursor-pointer focus:bg-transprimary focus:text-primary focus:ring-2 focus:ring-transprimary focus:border-primary outline-none transition-all duration-150"
        />
      </div>
      <div>
        <label class="block text-[var(--s)] font-medium mb-1">Tanggal Akhir</label>
        <input
            type="date"
            v-model="form.end_date"
            :min="form.start_date"
            :max="getTodayDate()"
            class="w-full text-[var(--s)] border border-line rounded-[var(--radius-m)] px-3 py-2 cursor-pointer focus:bg-transprimary focus:text-primary focus:ring-2 focus:ring-transprimary focus:border-primary outline-none transition-all duration-150"
        />
      </div>
      <div>
        <label class="block text-[var(--s)] font-medium mb-1">Cabang</label>
        <select
            v-model="form.branch_id"
            class="w-full text-[var(--s)] border border-line rounded-[var(--radius-m)] px-3 py-2 cursor-pointer focus:bg-transprimary focus:text-primary focus:ring-2 focus:ring-transprimary focus:border-primary outline-none transition-all duration-150"
        >
          <option value="">Semua Cabang</option>
          <option v-for="branch in branches" :key="branch.id" :value="branch.id">
            {{ branch.name }}
          </option>
        </select>
      </div>
      <div>
        <label class="block text-[var(--s)] font-medium mb-1">Tampilkan per</label>
        <select
            v-model="form.group_by"
            class="w-full text-[var(--s)] border border-line rounded-[var(--radius-m)] px-3 py-2 cursor-pointer focus:bg-transprimary focus:text-primary focus:ring-2 focus:ring-transprimary focus:border-primary outline-none transition-all duration-150"
        >
          <option value="daily">Harian</option>
          <option value="monthly">Bulanan</option>
        </select>
      </div>
    </div>

    <div class="border-t border-gray-100 mx-6"></div>

    <!-- Export Buttons -->
    <div class="px-6 py-4 flex flex-col sm:flex-row gap-3">
      <Button @click="handleExport('pdf')" :disabled="isExporting.pdf" text="Export PDF" type="outline"/>
      <Button @click="handleExport('excel')" :disabled="isExporting.excel" text="Export Excel" variant="success" type="outline"/>

      <div class="flex items-center gap-2 ml-auto text-xs text-link">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>File akan ter-download otomatis</span>
      </div>
    </div>
  </Modal>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import Modal from './Modal.vue'
import Button from "./Button.vue";

// --- Props ---
const props = defineProps({
  exportPdfUrl: {
    type: String,
    required: true
  },
  exportExcelUrl: {
    type: String,
    required: true
  },
  branches: {
    type: Array,
    default: () => []
  }
})

// --- Helper Functions ---
function getFirstDayOfMonth() {
  const now = new Date()
  return \`\${now.getFullYear()}-\${String(now.getMonth() + 1).padStart(2, '0')}-01\`
}

function getTodayDate() {
  return new Date().toISOString().split('T')[0]
}

function getMondayOfWeek() {
  const now = new Date()
  const day = now.getDay() || 7
  const diff = now.getDate() - day + 1
  const monday = new Date(now.setDate(diff))
  return monday.toISOString().split('T')[0]
}

function getFirstDayOfLastMonth() {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth() - 1, 1).toISOString().split('T')[0]
}

function getLastDayOfLastMonth() {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), 0).toISOString().split('T')[0]
}

// --- Constants ---
const PRESET_LIST = [
  { key: 'today',      label: 'Hari Ini'   },
  { key: 'this_week',  label: 'Minggu Ini' },
  { key: 'this_month', label: 'Bulan Ini'  },
  { key: 'last_month', label: 'Bulan Lalu' },
  { key: 'this_year',  label: 'Tahun Ini'  },
]

const showModal = ref(false)

const form = reactive({
  start_date: getFirstDayOfMonth(),
  end_date: getTodayDate(),
  branch_id: '',
  group_by: 'daily',
})

const isExporting = reactive({
  pdf: false,
  excel: false
})

// --- Computed & Methods ---
function buildQuery() {
  const params = new URLSearchParams()
  if (form.start_date) params.append('start_date', form.start_date)
  if (form.end_date)   params.append('end_date',   form.end_date)
  if (form.branch_id)  params.append('branch_id',  form.branch_id)
  if (form.group_by)   params.append('group_by',   form.group_by)
  return params.toString()
}

const fullPdfUrl = computed(() => \`\${props.exportPdfUrl}?\${buildQuery()}\`)
const fullExcelUrl = computed(() => \`\${props.exportExcelUrl}?\${buildQuery()}\`)

async function handleExport(type) {
  if (form.start_date > form.end_date) {
    alert('Tanggal mulai tidak boleh lebih besar dari tanggal akhir.')
    return
  }

  isExporting[type] = true
  try {
    window.open(type === 'pdf' ? fullPdfUrl.value : fullExcelUrl.value, '_blank')
  } finally {
    setTimeout(() => {
      isExporting[type] = false
    }, 2000)
  }
}

function setPreset(preset) {
  const today = getTodayDate()
  const now   = new Date()

  const presets = {
    today:      { start_date: today,                    end_date: today },
    this_week:  { start_date: getMondayOfWeek(),        end_date: today },
    this_month: { start_date: getFirstDayOfMonth(),     end_date: today },
    last_month: { start_date: getFirstDayOfLastMonth(), end_date: getLastDayOfLastMonth() },
    this_year:  { start_date: \`\${now.getFullYear()}-01-01\`, end_date: today },
  }

  if (presets[preset]) {
    Object.assign(form, presets[preset])
  }
}
</script>`,
        example: false
    },
    {
        title: 'filter',
        highlight: `
        <template>
  <!-- Tombol Trigger -->
  <div
      @click="showModal = true"
      class="cursor-pointer group outline-none flex items-center justify-center gap-x-4 py-[calc(var(--m)/2)] px-[var(--m)] h-max min-w-[77px] w-max rounded-[var(--radius-s)] text-[length:var(--s)] border border-solid border-line hover:outline-4 hover:outline-solid hover:outline-transprimary hover:border hover:border-solid hover:border-primary hover:text-primary"
  >
    <svg
        class="max-w-[var(--l)] max-h-[var(--l)] fill-text group-hover:fill-primary"
        xmlns="http://www.w3.org/2000/svg"
        width="800"
        height="800"
        viewBox="0 0 24 24"
    >
      <path
          fill-rule="evenodd"
          d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v1.172a3 3 0 0 1-.879 2.121l-5.828 5.828a1 1 0 0 0-.293.707v2.343a3 3 0 0 1-.879 2.121l-2.202 2.202C10.842 22.572 9 21.809 9 20.286v-5.457a1 1 0 0 0-.293-.707L2.879 8.293A3 3 0 0 1 2 6.172V5z"
      />
    </svg>
    <span class="capitalize font-medium text-[length:var(--s)]">
      {{ value ? formatText(value) : title }}
    </span>
  </div>

  <!-- Modal Component -->
  <Modal
      :isOpen="showModal"
      :title="title"
      @close="showModal = false"
  >
    <!-- Grid layout untuk item filter -->
    <div class="grid grid-cols-1 gap-2 w-full">
      <div
          v-for="(item, key) in filters"
          :key="key"
          @click="selectItem(item)"
          :class="[
          'cursor-pointer font-[\\'Medium\\',_ui-sans-serif] bg-translink py-[calc(var(--m)/2)] px-[var(--m)] h-max min-w-[77px] rounded-[var(--radius-s)] text-[length:var(--s)] border-2 border-solid transition-colors',
          getValue(item) === value
            ? 'border-primary text-primary'
            : 'border-transparent text-link hover:border-primary hover:text-primary'
        ]"
      >
        {{ getLabel(item) }}
      </div>
    </div>

    <template #footer>
      <p>Filter</p>
    </template>
  </Modal>
</template>

<!--Cara Pakai : <Filter title="Sort By" :filters="['Ascending', 'Descending']" value="asc"/>-->

<script setup>
import {ref} from 'vue'
import Modal from './Modal.vue'
import {removeUnderscoreAndCapitalize} from "../utils/formatText.js";

const props = defineProps({
  title: {
    type: String,
    default: 'Sort By'
  },
  filters: {
    type: Array,
    default: () => []
  },
  value: {
    type: [String, Number],
    default: ''
  }
})

const emit = defineEmits(['update:value', 'change'])

const showModal = ref(false)

// Helpers
const getValue = (item) => (typeof item === 'object' ? item.value : item)
const getLabel = (item) => (typeof item === 'object' ? item.label : item)
const formatText = (val) => removeUnderscoreAndCapitalize(val)

function selectItem(item) {
  const val = getValue(item)
  // Emit ke parent
  emit('update:value', val)
  emit('change', val)

  // Tutup modal
  showModal.value = false
}
</script>`,
        example: false
    },
    {
        title: 'form-example',
        highlight: `
        <script setup>
/**
 * Contoh pemakaian 3 form component + validasi VeeValidate + Yup
 *
 * Install:
 *   npm install vee-validate yup
 */

import { useForm } from 'vee-validate'
import * as yup from 'yup'

import FormFieldset from './FormFieldset.vue'
import FormFloat    from './FormFloat.vue'
import FormField    from './FormField.vue'
import Button from "./Button.vue";
import CardWrapper from "./CardWrapper.vue";
import FormImageCropper from "./FormImageCropper.vue";

// ── Schema validasi (persis kayak React + Yup) ────────────
const schema = yup.object({
  username: yup.string().required('Username wajib diisi').min(3, 'Minimal 3 karakter'),
  password: yup.string().required('Password wajib diisi').min(8, 'Minimal 8 karakter'),
  email:    yup.string().required('Email wajib diisi').email('Format email tidak valid'),
  image: yup.mixed().required('Foto wajib diupload'),
  role:     yup.string().required('Role wajib dipilih'),
  gender:   yup.string().required('Gender wajib dipilih'),
  hobbies:  yup.array().min(1, 'Pilih minimal 1 hobi'),
  agree:    yup.boolean().oneOf([true], 'Harus setuju dulu'),
  resume:   yup.mixed().required('Resume wajib diupload'),
  dob:      yup.string().required('Tanggal lahir wajib diisi'),
  bio:      yup.string().required('Bio wajib diisi').max(300, 'Maksimal 300 karakter'),
})

// ── useForm dari VeeValidate (mirip useForm React Hook Form) ──
const { defineField, handleSubmit, errors } = useForm({ validationSchema: schema })

// defineField = register field ke VeeValidate
const [username] = defineField('username')
const [password] = defineField('password')
const [email]    = defineField('email')
const [role]     = defineField('role')
const [gender]   = defineField('gender')
const [hobbies]  = defineField('hobbies', { initialValue: [] })
const [agree]    = defineField('agree', { initialValue: false })
const [resume]   = defineField('resume')
const [dob]      = defineField('dob')
const [bio]      = defineField('bio')

const onSubmit = handleSubmit((values) => {
  console.log('Submit:', values)
})

// ── Options ───────────────────────────────────────────────
const roleOptions = [
  { label: 'Frontend Dev', value: 'frontend' },
  { label: 'Backend Dev',  value: 'backend' },
  { label: 'Fullstack Dev', value: 'fullstack' },
]

const genderOptions = [
  { label: 'Laki-laki', value: 'male' },
  { label: 'Perempuan', value: 'female' },
]

const hobbyOptions = [
  { label: 'Coding',   value: 'coding' },
  { label: 'Gaming',   value: 'gaming' },
  { label: 'Reading',  value: 'reading' },
  { label: 'Traveling', value: 'traveling' },
]
</script>

<template>
  <div class="grid gap-[var(--x)] p-[var(--l)]">

    <!-- ── 1. Fieldset Legend style ───────────────────── -->
    <CardWrapper>
      <h3 class="font-medium text-[length:var(--l)]">Login — Fieldset Style</h3>

      <FormFieldset v-model="username" label="Username" :error="errors.username" />
      <FormFieldset v-model="password" label="Password" type="password" :error="errors.password" />

      <Button text="Submit" @click="onSubmit"/>
    </CardWrapper>

    <!-- ── 2. Float like Google style ────────────────── -->
    <CardWrapper>
      <h3 class="font-medium text-[length:var(--l)]">Login — Float Label Style</h3>

      <FormFloat v-model="email" id="email" label="Email" :error="errors.email" />
      <FormFloat v-model="password" id="password" label="Password" type="password" :error="errors.password" />

      <Button text="Submit" @click="onSubmit"/>
    </CardWrapper>

    <!-- ── 3. Regular full-featured form ─────────────── -->
    <CardWrapper>
      <h3 class="font-medium text-[length:var(--l)]">Register — Regular Style</h3>

      <FormField v-model="username" id="reg-username" label="Username"       :error="errors.username" />
      <FormField v-model="email"    id="reg-email"    label="Email"    type="email"    :error="errors.email" />
      <FormField v-model="password" id="reg-password" label="Password" type="password" :error="errors.password" />
      <FormField v-model="dob"      id="dob"          label="Date of Birth" type="date" :error="errors.dob" />
      <FormImageCropper v-model="image" label="Foto Profil" :error="errors.image" />
      <FormField
        v-model="role"
        id="role"
        label="Role"
        type="select"
        :options="roleOptions"
        :error="errors.role"
      />

      <FormField
        v-model="gender"
        id="gender"
        label="Gender"
        type="radio"
        :options="genderOptions"
        :error="errors.gender"
      />

      <FormField
        v-model="hobbies"
        id="hobbies"
        label="Hobbies"
        type="checkbox"
        :options="hobbyOptions"
        :error="errors.hobbies"
      />

      <FormField
        v-model="agree"
        id="agree"
        label="Saya setuju dengan syarat & ketentuan"
        type="checkbox"
        :error="errors.agree"
      />

      <FormField
        v-model="resume"
        id="resume"
        label="Resume"
        type="file"
        accept=".pdf,.doc,.docx"
        :error="errors.resume"
      />

      <FormField
        v-model="bio"
        id="bio"
        label="Bio"
        type="textarea"
        placeholder="Ceritakan tentang dirimu..."
        :rows="4"
        :error="errors.bio"
      />

      <Button text="Submit" @click="onSubmit"/>
    </CardWrapper>
  </div>
</template>`,
        html: `
            <div class="display-grid">
                <form class="card-wrapper replace-shadow-with-border">
                    <h3 class="text-center">Login</h3>
                    <fieldset class="ps-center">
                        <legend>Username</legend>
                        <input type="text"/>
                        <p class="text-error-msg">Error</p>
                    </fieldset>
                    <fieldset class="ps-center">
                        <legend>Password</legend>
                        <input type="password"/>
                        <p class="text-error-msg">Error</p>
                    </fieldset>
                    <button type="submit" class="button bg-primary ps-center">Submit</button>
                </form>

                <br/>
                <form class="card-wrapper replace-shadow-with-border">
                    <h3 class="text-center">Register</h3>
                    <div class="max-width-500 display-grid">
                        <label for="username">username</label>
                        <input name="username" type="text" placeholder="input" id="username"/>
                        <p class="text-error-msg">Error</p>
                    </div>
                    <div class="max-width-500 display-grid">
                        <label for="option">option</label>
                        <select name="option" id="option">
                            <option value="a">a</option>
                            <option value="b">b</option>
                            <option value="c">c</option>
                        </select>
                        <p class="text-error-msg">Error</p>
                    </div>
                    <div class="max-width-500 display-grid">
                        <label for="desc">desc</label>
                        <textarea name="desc" id="desc"></textarea>
                        <p class="text-error-msg">Error</p>
                    </div>
                    <div class="max-width-500 display-grid">
                        <label for="files">resume</label>
                        <input name="files" type="file" id="files"/>
                        <p class="text-error-msg">Error</p>
                    </div>
                    <div class="max-width-500 display-grid">
                        <label for="dob">date of birth</label>
                        <input name="dob" type="date" id="dob"/>
                        <p class="text-error-msg">Error</p>
                    </div>
                    <button type="submit" class="button bg-primary ps-center">Submit</button>
                </form>
                <br/>
                <form class="card-wrapper replace-shadow-with-border">
                    <h3 class="text-center">Login like google</h3>
                    <div class="max-width-500 display-grid">
                        <div class="form-like-google">
                            <input class="form-like-google-input" name="email" type="email" placeholder=" "
                                   id="email"/>
                            <label class="form-like-google-label" for="email">Email</label>
                        </div>
                        <p class="text-error-msg">Error</p>
                    </div>
                    <div class="max-width-500 display-grid">
                        <div class="form-like-google">
                            <input class="form-like-google-input" name="password" type="password" placeholder=" "
                                   id="password"/>
                            <label class="form-like-google-label" for="password">Password</label>
                        </div>
                        <p class="text-error-msg">Error</p>
                    </div>
                    <button type="submit" class="button bg-primary ps-center">Submit</button>
                </form>
            </div>`,
        example: true
    },
    {
        title: 'form-fieldset',
        highlight: `
        <script setup>
/**
 * FormFieldset — input dengan style fieldset + legend
 * Hanya untuk: text | number | password | email
 *
 * Props:
 *   modelValue  — v-model value
 *   label       — teks legend
 *   type        — text | number | password | email (default: text)
 *   error       — pesan error
 *   disabled    — disabled state
 *   placeholder — placeholder input
 *
 * Contoh pakai:
 *
 *   <FormFieldset v-model="form.username" label="Username" :error="errors.username" />
 *   <FormFieldset v-model="form.password" label="Password" type="password" :error="errors.password" />
 */

defineProps({
  modelValue:  { type: [String, Number], default: '' },
  label:       { type: String, required: true },
  type:        { type: String, default: 'text' },
  error:       { type: String, default: '' },
  disabled:    { type: Boolean, default: false },
  placeholder: { type: String, default: '' },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="grid gap-[var(--xxs)]">

    <fieldset
      class="outline-none border-2 border-solid rounded-[var(--radius-m)] box-border w-full max-w-[325px] h-max pt-0 px-[var(--xxs)] pb-[6px] transition-colors duration-200"
      :class="error ? 'border-danger' : 'border-text'"
    >
      <legend class="ml-[var(--xxs)] px-[var(--xxs)] text-[length:var(--s)] font-medium text-text">
        {{ label }}
      </legend>

      <input
        :type="type"
        :value="modelValue"
        :disabled="disabled"
        :placeholder="placeholder"
        class="border-none outline-none pt-[1px] w-full text-[length:var(--m)] font-[inherit] bg-surface text-text placeholder:text-link placeholder:italic"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </fieldset>

    <p v-if="error" class="text-danger text-[length:var(--xs)] italic">
      {{ error }}
    </p>

  </div>
</template>`,
        example: false
    },
    {
        title: 'form-regular',
        highlight: `
        <script setup>
/**
 * FormField — regular form field, full-featured
 *
 * Props:
 *   modelValue  — v-model value
 *   label       — label teks
 *   id          — id input (wajib)
 *   name        — name attribute
 *   type        — text | number | email | password | date | file | select | radio | checkbox | textarea
 *   error       — pesan error
 *   disabled    — disabled state
 *   placeholder — placeholder
 *   options     — Array<{ label: string, value: string }> → untuk select | radio | checkbox group
 *   rows        — jumlah baris textarea (default: 5)
 *   accept      — file accept attribute (contoh: 'image/*', '.pdf')
 *
 * NOTE: Pseudo-element styles (file upload button, autofill, date picker indicator)
 * taruh di global.css — lihat komentar di bawah.
 *
 * Contoh pakai:
 *
 *   <FormField v-model="form.name"    id="name"    label="Full Name" />
 *   <FormField v-model="form.role"    id="role"    label="Role"    type="select"   :options="roleOptions" />
 *   <FormField v-model="form.gender"  id="gender"  label="Gender"  type="radio"    :options="genderOptions" />
 *   <FormField v-model="form.hobbies" id="hobbies" label="Hobbies" type="checkbox" :options="hobbyOptions" />
 *   <FormField v-model="form.agree"   id="agree"   label="Setuju"  type="checkbox" />
 *   <FormField v-model="form.resume"  id="resume"  label="Resume"  type="file" accept=".pdf" />
 *   <FormField v-model="form.bio"     id="bio"     label="Bio"     type="textarea" :rows="4" />
 *   <FormField v-model="form.dob"     id="dob"     label="DOB"     type="date" />
 *
 * ─────────────────────────────────────────────────────────────────
 * Tambahkan ini ke global.css (tidak bisa pakai Tailwind):
 *
 * input::-webkit-file-upload-button {
 *   cursor: pointer;
 *   border: 1px solid var(--primary-color);
 *   color: var(--primary-color);
 *   background-color: var(--bg-color);
 *   padding: 7px var(--xs);
 *   min-width: 63px;
 *   border-radius: var(--radius-s);
 *   transition: .2s;
 *   font-family: Medium, ui-sans-serif;
 *   font-size: var(--s);
 * }
 * input::-webkit-file-upload-button:hover {
 *   color: var(--bg-color);
 *   background-color: var(--primary-color);
 * }
 * input:-webkit-autofill,
 * input:-webkit-autofill:hover,
 * input:-webkit-autofill:focus { background-color: var(--bg-color) !important; }
 *
 * input[type='date']::-webkit-calendar-picker-indicator { cursor: pointer; }
 * .dark-mode input[type='date']::-webkit-calendar-picker-indicator { filter: invert(1); }
 * ─────────────────────────────────────────────────────────────────
 */

const props = defineProps({
  modelValue:  { default: '' },
  label:       { type: String, required: true },
  id:          { type: String, required: true },
  name:        { type: String, default: '' },
  type:        { type: String, default: 'text' },
  error:       { type: String, default: '' },
  disabled:    { type: Boolean, default: false },
  placeholder: { type: String, default: '' },
  options:     { type: Array, default: () => [] }, // [{ label, value }]
  rows:        { type: Number, default: 5 },
  accept:      { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue'])

// Base input classes — reused across semua tipe
const baseInput = 'text-[length:var(--m)] font-[inherit] w-full cursor-pointer bg-surface text-text border border-line p-[var(--s)] outline-none box-border h-max rounded-[var(--radius-s)] transition-colors duration-200 placeholder:text-link placeholder:italic disabled:bg-surface disabled:text-text'

const isCheckboxGroup = () => props.type === 'checkbox' && props.options.length > 0

function handleCheckboxGroup(value, event) {
  const current = Array.isArray(props.modelValue) ? [...props.modelValue] : []
  if (event.target.checked) {
    emit('update:modelValue', [...current, value])
  } else {
    emit('update:modelValue', current.filter(v => v !== value))
  }
}
</script>

<template>
  <div class="grid gap-[var(--xxs)] w-full max-w-[500px]">

    <!-- Label (semua tipe kecuali radio & checkbox group yang punya label sendiri) -->
    <label
      v-if="type !== 'radio' && !isCheckboxGroup()"
      :for="id"
      class="capitalize font-medium text-[length:var(--s)] text-text"
    >
      {{ label }}
    </label>

    <!-- ── Text / Number / Email / Password ───────────── -->
    <input
      v-if="['text', 'number', 'email', 'password'].includes(type)"
      :id="id"
      :name="name || id"
      :type="type"
      :value="modelValue"
      :disabled="disabled"
      :placeholder="placeholder"
      :class="[baseInput, error ? 'border-danger!' : '']"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <!-- ── Date ───────────────────────────────────────── -->
    <input
      v-else-if="type === 'date'"
      :id="id"
      :name="name || id"
      type="date"
      :value="modelValue"
      :disabled="disabled"
      :class="[baseInput, 'cursor-auto max-[800px]:max-w-[57dvw]', error ? 'border-danger!' : '']"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <!-- ── File ───────────────────────────────────────── -->
    <input
      v-else-if="type === 'file'"
      :id="id"
      :name="name || id"
      type="file"
      :accept="accept"
      :disabled="disabled"
      :class="[baseInput, error ? 'border-danger!' : '']"
      @change="$emit('update:modelValue', $event.target.files[0] ?? null)"
    />

    <!-- ── Select ─────────────────────────────────────── -->
    <select
      v-else-if="type === 'select'"
      :id="id"
      :name="name || id"
      :disabled="disabled"
      :value="modelValue"
      :class="[baseInput, error ? 'border-danger!' : '']"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option value="" disabled>-- Pilih --</option>
      <option v-for="opt in options" :key="opt.value" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>

    <!-- ── Textarea ───────────────────────────────────── -->
    <textarea
      v-else-if="type === 'textarea'"
      :id="id"
      :name="name || id"
      :disabled="disabled"
      :placeholder="placeholder"
      :rows="rows"
      :value="modelValue"
      :class="[baseInput, 'resize-none', error ? 'border-danger!' : '']"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <!-- ── Radio group ────────────────────────────────── -->
    <div v-else-if="type === 'radio'" class="grid gap-[var(--xxs)]">
      <span class="capitalize font-medium text-[length:var(--s)] text-text">{{ label }}</span>
      <div class="flex flex-wrap gap-[var(--m)]">
        <label
          v-for="opt in options"
          :key="opt.value"
          class="flex items-center gap-[var(--xxs)] cursor-pointer text-[length:var(--s)] text-text"
        >
          <input
            type="radio"
            :name="name || id"
            :value="opt.value"
            :checked="modelValue === opt.value"
            :disabled="disabled"
            class="w-4 h-4 cursor-pointer accent-primary shrink-0"
            @change="$emit('update:modelValue', opt.value)"
          />
          {{ opt.label }}
        </label>
      </div>
    </div>

    <!-- ── Checkbox tunggal (boolean) ────────────────── -->
    <label
      v-else-if="type === 'checkbox' && !isCheckboxGroup()"
      :for="id"
      class="flex items-center gap-[var(--xxs)] cursor-pointer text-[length:var(--s)] text-text capitalize"
    >
      <input
        :id="id"
        type="checkbox"
        :name="name || id"
        :checked="modelValue"
        :disabled="disabled"
        class="w-4 h-4 cursor-pointer accent-primary shrink-0"
        @change="$emit('update:modelValue', $event.target.checked)"
      />
      {{ label }}
    </label>

    <!-- ── Checkbox group ─────────────────────────────── -->
    <div v-else-if="isCheckboxGroup()" class="grid gap-[var(--xxs)]">
      <span class="capitalize font-medium text-[length:var(--s)] text-text">{{ label }}</span>
      <div class="flex flex-wrap gap-[var(--m)]">
        <label
          v-for="opt in options"
          :key="opt.value"
          class="flex items-center gap-[var(--xxs)] cursor-pointer text-[length:var(--s)] text-text"
        >
          <input
            type="checkbox"
            :name="name || id"
            :value="opt.value"
            :checked="Array.isArray(modelValue) && modelValue.includes(opt.value)"
            :disabled="disabled"
            class="w-4 h-4 cursor-pointer accent-primary shrink-0"
            @change="handleCheckboxGroup(opt.value, $event)"
          />
          {{ opt.label }}
        </label>
      </div>
    </div>

    <!-- ── Error ──────────────────────────────────────── -->
    <p v-if="error" class="text-danger text-[length:var(--xs)] italic">
      {{ error }}
    </p>

  </div>
</template>`,
        example: false
    },
    {
        title: 'form-float',
        highlight: `
        <script setup>
/**
 * FormFloat — input dengan floating label style (like Google)
 * Hanya untuk: text | number | password | email
 *
 * Props:
 *   modelValue — v-model value
 *   label      — teks floating label
 *   id         — id input (wajib)
 *   type       — text | number | password | email (default: text)
 *   error      — pesan error
 *   disabled   — disabled state
 *
 * Trik Tailwind: pakai \`peer\` di input, lalu \`peer-focus:\` dan
 * \`peer-[:not(:placeholder-shown)]:\` di label — pengganti CSS sibling selector (+)
 *
 * Contoh pakai:
 *
 *   <FormFloat v-model="form.email" id="email" label="Email" :error="errors.email" />
 *   <FormFloat v-model="form.password" id="password" label="Password" type="password" />
 */

defineProps({
  modelValue: { type: [String, Number], default: '' },
  label:      { type: String, required: true },
  id:         { type: String, required: true },
  type:       { type: String, default: 'text' },
  error:      { type: String, default: '' },
  disabled:   { type: Boolean, default: false },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="grid gap-[var(--xxs)]">

    <div class="relative">
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :disabled="disabled"
        placeholder=" "
        class="peer w-full text-[length:var(--m)] font-[inherit] bg-surface text-text border-2 border-line p-[var(--s)] outline-none box-border rounded-[var(--radius-s)] transition-colors duration-200 focus:border-primary disabled:bg-surface disabled:text-text"
        :class="error ? 'border-danger!' : ''"
        @input="$emit('update:modelValue', $event.target.value)"
      />

      <!--
        Label pakai peer-* untuk animasi floating.
        peer-focus            → saat input difokus
        peer-[:not(:placeholder-shown)] → saat input sudah ada value
      -->
      <label
        :for="id"
        class="absolute left-[var(--m)] top-1/2 -translate-y-1/2 text-[length:var(--m)] text-link pointer-events-none transition-all duration-200
               peer-focus:top-0 peer-focus:text-[length:var(--s)] peer-focus:bg-surface peer-focus:text-primary peer-focus:px-1 peer-focus:-translate-y-1/2
               peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[length:var(--s)] peer-[:not(:placeholder-shown)]:bg-surface peer-[:not(:placeholder-shown)]:text-link peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:-translate-y-1/2"
      >
        {{ label }}
      </label>
    </div>

    <p v-if="error" class="text-danger text-[length:var(--xs)] italic">
      {{ error }}
    </p>

  </div>
</template>`,
        example: false
    },
    {
        title: 'form-image-cropper',
        highlight: `
        <script setup>
/**
 * FormImageCropper — image upload + crop field
 *
 * Props:
 *   modelValue  — v-model (File | null)
 *   label       — label teks
 *   error       — pesan error dari vee-validate / yup
 *
 * Contoh pakai (sama persis kayak FormField):
 *
 *   // di script setup
 *   const [image] = defineField('image')
 *
 *   // di template
 *   <FormImageCropper v-model="image" label="Foto Profil" :error="errors.image" />
 */

import { ref, computed, onBeforeUnmount } from 'vue'

const props = defineProps({
  modelValue: { default: null },
  label:      { type: String, default: 'Image' },
  error:      { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue'])

// ── Aspect ratio presets ────────────────────────────────────────────────────
const ASPECT_PRESETS = [
  { label: 'Free',      value: null,   icon: '⊞' },
  { label: 'Square',    value: 1,      icon: '□' },
  { label: 'Landscape', value: 16 / 9, icon: '▬' },
  { label: 'Portrait',  value: 9 / 16, icon: '▮' },
  { label: '4:3',       value: 4 / 3,  icon: '⬜' },
  { label: '3:4',       value: 3 / 4,  icon: '▯' },
]

const HANDLES = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w']

// ── State ───────────────────────────────────────────────────────────────────
const imgSrc         = ref(null)
const preview        = ref(null)
const imgRef         = ref(null)
const selectedPreset = ref(ASPECT_PRESETS[0])
const crop           = ref({ x: 0, y: 0, width: 0, height: 0 })

// ── Computed overlay style ──────────────────────────────────────────────────
const overlayStyle = computed(() => ({
  left:   crop.value.x      + 'px',
  top:    crop.value.y      + 'px',
  width:  crop.value.width  + 'px',
  height: crop.value.height + 'px',
}))

// ── File input ──────────────────────────────────────────────────────────────
function onFileChange(e) {
  const file = e.target.files?.[0]
  if (!file) return
  preview.value = null
  const reader = new FileReader()
  reader.onload = () => { imgSrc.value = reader.result }
  reader.readAsDataURL(file)
}

// ── Image load → set initial crop ──────────────────────────────────────────
function onImageLoad() {
  applyCrop(selectedPreset.value.value)
}

function applyCrop(aspect) {
  const img = imgRef.value
  if (!img) return
  const w = img.clientWidth
  const h = img.clientHeight

  if (!aspect) {
    crop.value = { x: w * 0.1, y: h * 0.1, width: w * 0.8, height: h * 0.8 }
    return
  }
  let cw = w * 0.8
  let ch = cw / aspect
  if (ch > h * 0.8) { ch = h * 0.8; cw = ch * aspect }
  crop.value = { x: (w - cw) / 2, y: (h - ch) / 2, width: cw, height: ch }
}

function handlePresetChange(preset) {
  selectedPreset.value = preset
  applyCrop(preset.value)
}

// ── Drag to move ────────────────────────────────────────────────────────────
let dragStart = null

function startDrag(e) {
  dragStart = { mx: e.clientX, my: e.clientY, cx: crop.value.x, cy: crop.value.y }
  window.addEventListener('mousemove', onDragMove)
  window.addEventListener('mouseup',   stopDrag)
}
function startDragTouch(e) {
  const t = e.touches[0]
  dragStart = { mx: t.clientX, my: t.clientY, cx: crop.value.x, cy: crop.value.y }
  window.addEventListener('touchmove', onDragMoveTouch, { passive: false })
  window.addEventListener('touchend',  stopDrag)
}
function onDragMove(e) {
  if (!dragStart || !imgRef.value) return
  const img = imgRef.value
  const dx = e.clientX - dragStart.mx
  const dy = e.clientY - dragStart.my
  crop.value = {
    ...crop.value,
    x: Math.min(Math.max(dragStart.cx + dx, 0), img.clientWidth  - crop.value.width),
    y: Math.min(Math.max(dragStart.cy + dy, 0), img.clientHeight - crop.value.height),
  }
}
function onDragMoveTouch(e) { e.preventDefault(); onDragMove(e.touches[0]) }
function stopDrag() {
  dragStart = null
  window.removeEventListener('mousemove', onDragMove)
  window.removeEventListener('mouseup',   stopDrag)
  window.removeEventListener('touchmove', onDragMoveTouch)
  window.removeEventListener('touchend',  stopDrag)
}

// ── Resize handles ──────────────────────────────────────────────────────────
let resizeState = null

function startResize(handle, e) {
  resizeState = { handle, mx: e.clientX, my: e.clientY, crop: { ...crop.value } }
  window.addEventListener('mousemove', onResizeMove)
  window.addEventListener('mouseup',   stopResize)
}
function startResizeTouch(handle, e) {
  const t = e.touches[0]
  resizeState = { handle, mx: t.clientX, my: t.clientY, crop: { ...crop.value } }
  window.addEventListener('touchmove', onResizeMoveTouch, { passive: false })
  window.addEventListener('touchend',  stopResize)
}
function onResizeMove(e) {
  if (!resizeState || !imgRef.value) return
  const img = imgRef.value
  const { handle, mx, my, crop: sc } = resizeState
  const dx = e.clientX - mx
  const dy = e.clientY - my
  const MIN = 30
  let { x, y, width, height } = sc
  const aspect = selectedPreset.value.value

  if (handle.includes('e'))  width  = Math.max(MIN, sc.width  + dx)
  if (handle.includes('s'))  height = Math.max(MIN, sc.height + dy)
  if (handle.includes('w')) { width  = Math.max(MIN, sc.width  - dx); x = sc.x + sc.width  - width  }
  if (handle.includes('n')) { height = Math.max(MIN, sc.height - dy); y = sc.y + sc.height - height }

  if (aspect) {
    if (handle.includes('e') || handle.includes('w')) height = width  / aspect
    else                                               width  = height * aspect
  }

  x      = Math.max(0, Math.min(x,      img.clientWidth  - MIN))
  y      = Math.max(0, Math.min(y,      img.clientHeight - MIN))
  width  = Math.min(width,  img.clientWidth  - x)
  height = Math.min(height, img.clientHeight - y)

  crop.value = { x, y, width, height }
}
function onResizeMoveTouch(e) { e.preventDefault(); onResizeMove(e.touches[0]) }
function stopResize() {
  resizeState = null
  window.removeEventListener('mousemove', onResizeMove)
  window.removeEventListener('mouseup',   stopResize)
  window.removeEventListener('touchmove', onResizeMoveTouch)
  window.removeEventListener('touchend',  stopResize)
}

// ── Confirm → canvas → File → emit v-model ─────────────────────────────────
async function handleConfirm() {
  const img = imgRef.value
  if (!img || !crop.value.width) return

  const scaleX = img.naturalWidth  / img.clientWidth
  const scaleY = img.naturalHeight / img.clientHeight

  const canvas = document.createElement('canvas')
  canvas.width  = crop.value.width  * scaleX
  canvas.height = crop.value.height * scaleY

  const ctx = canvas.getContext('2d')
  ctx.drawImage(
      img,
      crop.value.x * scaleX, crop.value.y * scaleY,
      crop.value.width * scaleX, crop.value.height * scaleY,
      0, 0, canvas.width, canvas.height,
  )

  const blob = await new Promise((resolve, reject) =>
      canvas.toBlob(b => b ? resolve(b) : reject('Canvas empty'), 'image/jpeg', 0.9)
  )

  const file    = new File([blob], 'image.jpg', { type: 'image/jpeg' })
  preview.value = URL.createObjectURL(blob)
  imgSrc.value  = null

  emit('update:modelValue', file)   // ← sama seperti FormField
}

function handleReset() {
  if (preview.value) URL.revokeObjectURL(preview.value)
  preview.value        = null
  imgSrc.value         = null
  selectedPreset.value = ASPECT_PRESETS[0]
  emit('update:modelValue', null)   // ← sama seperti FormField
}

onBeforeUnmount(() => {
  if (preview.value) URL.revokeObjectURL(preview.value)
})
</script>

<template>
  <div class="grid gap-[var(--xxs)] w-full max-w-[500px]">

    <!-- Label -->
    <label class="capitalize font-medium text-[length:var(--s)] text-text">
      {{ label }}
    </label>

    <!-- ── Preview setelah crop ── -->
    <div v-if="preview" class="flex items-center gap-3">
      <img
          :src="preview"
          alt="preview"
          class="max-w-[120px] max-h-[120px] object-cover rounded-[var(--radius-s)] border border-line"
      />
      <button
          type="button"
          class="text-[length:var(--s)] text-danger underline cursor-pointer bg-transparent border-none p-0"
          @click="handleReset"
      >
        ↺ Ganti foto
      </button>
    </div>

    <!-- ── Input file ── -->
    <label
        v-else-if="!imgSrc"
        class="flex flex-col items-center justify-center gap-1 border-2 border-dashed rounded-[var(--radius-s)] p-8 cursor-pointer transition-colors duration-200"
        :class="error
        ? 'border-danger'
        : 'border-line hover:border-primary hover:bg-surface'"
    >
      <span class="text-2xl">⬆</span>
      <span class="text-[length:var(--s)] font-medium text-text">Klik untuk pilih foto</span>
      <span class="text-[length:var(--xs)] text-link italic">JPG, PNG, WEBP</span>
      <input type="file" accept="image/*" class="hidden" @change="onFileChange" />
    </label>

    <!-- ── Crop UI ── -->
    <div v-else class="grid gap-2">

      <!-- Aspect ratio selector -->
      <div class="flex flex-wrap gap-1">
        <button
            v-for="preset in ASPECT_PRESETS"
            :key="preset.label"
            type="button"
            class="flex items-center gap-1 px-2 py-1 text-[length:var(--xs)] rounded border cursor-pointer transition-colors duration-150"
            :class="selectedPreset.label === preset.label
            ? 'bg-primary text-white border-primary'
            : 'border-line text-text hover:bg-surface'"
            @click="handlePresetChange(preset)"
        >
          <span>{{ preset.icon }}</span>
          <span>{{ preset.label }}</span>
        </button>
      </div>

      <!-- Canvas crop area -->
      <div
          class="relative overflow-hidden rounded-[var(--radius-s)] bg-black select-none leading-[0]"
      >
        <img
            ref="imgRef"
            :src="imgSrc"
            class="block max-h-[300px] w-full object-contain opacity-50"
            draggable="false"
            @load="onImageLoad"
        />

        <!-- Overlay -->
        <div
            class="crop-overlay"
            :style="overlayStyle"
            @mousedown.prevent="startDrag"
            @touchstart.prevent="startDragTouch"
        >
          <!-- Resize handles -->
          <span
              v-for="handle in HANDLES"
              :key="handle"
              class="crop-handle"
              :class="\`crop-handle--\${handle}\`"
              @mousedown.prevent.stop="startResize(handle, $event)"
              @touchstart.prevent.stop="startResizeTouch(handle, $event)"
          />
          <!-- Rule-of-thirds grid -->
          <span class="crop-grid" style="top:33.33%;left:0;width:100%;height:1px" />
          <span class="crop-grid" style="top:66.66%;left:0;width:100%;height:1px" />
          <span class="crop-grid" style="left:33.33%;top:0;height:100%;width:1px" />
          <span class="crop-grid" style="left:66.66%;top:0;height:100%;width:1px" />
        </div>
      </div>

      <!-- Actions -->
      <div class="flex gap-2">
        <button
            type="button"
            class="flex-1 py-2 text-[length:var(--s)] font-medium rounded-[var(--radius-s)] bg-primary text-white cursor-pointer transition-opacity duration-150 hover:opacity-85 active:scale-[.97]"
            @click="handleConfirm"
        >
          ✓ Konfirmasi
        </button>
        <button
            type="button"
            class="flex-1 py-2 text-[length:var(--s)] font-medium rounded-[var(--radius-s)] border border-line text-text bg-transparent cursor-pointer hover:bg-surface active:scale-[.97]"
            @click="handleReset"
        >
          ✕ Batal
        </button>
      </div>
    </div>

    <!-- Error — sama persis strukturnya kayak FormField -->
    <p v-if="error" class="text-danger text-[length:var(--xs)] italic">
      {{ error }}
    </p>

  </div>
</template>

<style scoped>
.crop-overlay {
  position: absolute;
  border: 2px solid #fff;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.45);
  cursor: move;
  box-sizing: border-box;
}
.crop-grid {
  position: absolute;
  background: rgba(255, 255, 255, 0.3);
  pointer-events: none;
}
.crop-handle {
  position: absolute;
  width: 10px; height: 10px;
  background: #fff;
  border: 2px solid rgba(0,0,0,0.35);
  border-radius: 2px;
  box-sizing: border-box;
}
.crop-handle--nw { top:-5px;  left:-5px;              cursor: nw-resize }
.crop-handle--n  { top:-5px;  left:calc(50% - 5px);   cursor: n-resize  }
.crop-handle--ne { top:-5px;  right:-5px;              cursor: ne-resize }
.crop-handle--e  { top:calc(50% - 5px); right:-5px;   cursor: e-resize  }
.crop-handle--se { bottom:-5px; right:-5px;            cursor: se-resize }
.crop-handle--s  { bottom:-5px; left:calc(50% - 5px); cursor: s-resize  }
.crop-handle--sw { bottom:-5px; left:-5px;             cursor: sw-resize }
.crop-handle--w  { top:calc(50% - 5px); left:-5px;    cursor: w-resize  }
</style>`,
        example: false
    },
    {
        title: 'loading-bar',
        highlight: `
        <script setup>
/**
 * LoadingBar — progress bar
 *
 * Props:
 *   progress  — nilai progress 0–100 (controlled). Kalau null → pakai animated
 *   animated  — auto-fill animasi 11s (untuk loading page dll)
 *
 * Tambahkan ke global.css + @theme:
 *
 *   @keyframes fillProgress {
 *     from { width: 0; }
 *     to   { width: 100%; }
 *   }
 *
 *   Di dalam @theme:
 *   --animate-fill-progress: fillProgress 11s ease-out forwards;
 *
 * Contoh pakai:
 *
 *   <!-- Controlled (dari state/prop) -->
 *   <LoadingBar :progress="uploadPercent" />
 *
 *   <!-- Auto animasi -->
 *   <LoadingBar animated />
 */

const props = defineProps({
  progress: { type: Number, default: null }, // 0–100
  animated: { type: Boolean, default: false },
})
</script>

<template>
  <div class="h-[var(--s)] bg-white/20 rounded-full overflow-hidden relative shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
    <div
      class="h-full bg-primary rounded-full"
      :class="animated && progress === null ? 'animate-fill-progress' : ''"
      :style="progress !== null ? { width: \`\${progress}%\`, transition: 'width 0.3s ease' } : {}"
    />
  </div>
</template>`,
        html: `<div class="loading-bar max-width-500">
                    <div class="loading-bar-progress with-animation-progress"></div>
                </div>`,
        example: true
    },
    {
        title: 'loading-pulse',
        highlight: `
        <script setup>
/**
 * LoadingPulse — skeleton shimmer, buat placeholder konten saat loading
 *
 * Tambahkan ke global.css + @theme:
 *
 *   @keyframes skeleton-loading {
 *     0%   { background-position: 200% 0; }
 *     100% { background-position: -200% 0; }
 *   }
 *
 *   Di dalam @theme:
 *   --animate-skeleton: skeleton-loading 2s infinite;
 *
 * Props:
 *   width   — lebar (default: '100%')
 *   height  — tinggi (default: 'var(--m)')
 *   rounded — border radius Tailwind class (default: 'rounded-[var(--radius-m)]')
 *
 * Contoh pakai:
 *
 *   <!-- Text placeholder -->
 *   <LoadingPulse height="var(--m)" />
 *   <LoadingPulse height="var(--m)" width="60%" />
 *
 *   <!-- Avatar placeholder -->
 *   <LoadingPulse width="48px" height="48px" rounded="rounded-full" />
 *
 *   <!-- Card skeleton -->
 *   <div class="card-wrapper grid gap-[var(--m)]">
 *     <LoadingPulse width="48px" height="48px" rounded="rounded-full" />
 *     <LoadingPulse height="var(--m)" />
 *     <LoadingPulse height="var(--m)" width="70%" />
 *     <LoadingPulse height="var(--m)" width="50%" />
 *   </div>
 */

defineProps({
  width:   { type: String, default: '100%' },
  height:  { type: String, default: 'var(--m)' },
  rounded: { type: String, default: 'rounded-[var(--radius-m)]' },
})
</script>

<template>
  <div
      class="animate-skeleton bg-[length:200%_100%] shrink-0"
      :class="rounded"
      :style="{
      width,
      height,
      backgroundImage: 'linear-gradient(90deg, var(--border-color), var(--transbg-color) 50%, var(--border-color) 75%)',
    }"
  />
</template>`,
        html: `<div class="loading-pulse" style="width: 111px; height: 111px; border-radius: 12px"></div>`,
        example: true
    },
    {
        title: 'loading-spinner',
        highlight: `
        <script setup>
/**
 * LoadingSpinner — spinner circle, pakai animate-spin bawaan Tailwind
 *
 * Props:
 *   size  — ukuran spinner (default: 'var(--x)')
 *   color — warna border-top (default: 'border-t-primary')
 *
 * Contoh pakai:
 *
 *   <LoadingSpinner />
 *   <LoadingSpinner size="var(--xx)" />
 */

defineProps({
  size:  { type: String, default: 'var(--x)' },
})
</script>

<template>
  <div
    class="border-4 border-transparent border-t-primary rounded-full bg-transparent animate-spin shrink-0"
    :style="{ width: size, height: size }"
  />
</template>`,
        html: `<div class="loading-spinner"></div>`,
        example: true
    },
    {
        title: 'modal',
        highlight: `
        <script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Title'
  }
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

/** Cara Pakai
 * <template>
 *   <div class="button btn-primary" @click="showModal = true">Show</div>
 *
 *   <!-- Panggil komponen Modal -->
 *   <Modal :isOpen="showModal" title="Konfirmasi" @close="showModal = false">
 *
 *     <!-- Content (Otomatis masuk ke slot default) -->
 *     <p>Ini adalah bagian konten modal.</p>
 *
 *     <!-- Footer (Opsional, masuk ke slot bernama 'footer') -->
 *     <template #footer>
 *       <p>Ini bagian footer</p>
 *     </template>
 *
 *   </Modal>
 * </template>
 *
 * <script setup>
 * import { ref } from 'vue'
 * import Modal from './components/Modal.vue'
 *
 * const showModal = ref(false)
 *
*/
</script>

<template>
  <div
      v-if="isOpen"
      class="fixed inset-0 flex bg-transtext dark:bg-transbg z-[99]"
  >
    <!-- Modal Box -->
    <div class="dark:border dark:border-solid dark:border-primary m-auto w-[90dvw] md:w-[75dvw] max-h-[90dvh] bg-surface box-border rounded-[var(--radius-m)] p-[var(--xxx)] grid grid-rows-[max-content_1fr_max-content] gap-[var(--m)]">

      <!-- Modal Header -->
      <div class="flex justify-between items-center pb-[var(--l)] mb-[var(--m)] text-[var(--l)] font-bold">
        <p>{{ title }}</p>

        <!-- Tombol Close -->
        <div class="min-w-[23px] min-h-[23px] max-w-[23px] max-h-[23px]
               flex items-center justify-center
               border-2 rounded-full cursor-pointer
               bg-surface
               border-danger
               text-danger
               hover:bg-danger hover:text-white cursor-pointer" @click="closeModal">
          <svg class="max-w-[9px] max-h-[9px] fill-current" xmlns="http://www.w3.org/2000/svg" width="35.52" height="35.52" viewBox="0 0 27 27" shape-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd">
            <path d="M8 1l5 6 6-6c2-1 5-1 6 0 2 2 2 5 0 7l-5 5 5 6c2 2 2 5 0 6-1 2-4 2-6 0l-6-5-5 5c-2 2-5 2-7 0-1-1-1-4 0-6l6-6-6-5C0 6 0 3 1 1c2-1 5-1 7 0z"/>
          </svg>
        </div>
      </div>

      <!-- Modal Content -->
      <div class="grid auto-rows-max gap-[var(--x)] items-start justify-items-center overflow-auto relative p-[var(--x)] box-border">
        <slot></slot>
      </div>

      <!-- Modal Footer -->
      <div class="pt-[var(--l)] mt-[var(--m)] text-center text-[var(--s)] text-link">
        <slot name="footer"></slot>
      </div>

    </div>
  </div>
</template>`,
        html: `
                <div class="button btn-primary" onclick="showModal()">Show</div>
                <div class="modal hide">
                    <div class="modal-box">
                        <div class="modal-header">
                            <p>Title</p>
                            <div class="badge-button-close" onclick="showModal()">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35.52" height="35.52" viewBox="0 0 27 27" shape-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd">
                                    <path d="M8 1l5 6 6-6c2-1 5-1 6 0 2 2 2 5 0 7l-5 5 5 6c2 2 2 5 0 6-1 2-4 2-6 0l-6-5-5 5c-2 2-5 2-7 0-1-1-1-4 0-6l6-6-6-5C0 6 0 3 1 1c2-1 5-1 7 0z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="modal-content">content</div>
                        <div class="modal-footer">footer</div>
                    </div>
                </div>`,
        example: true
    },
    {
        title: 'no-data',
        highlight: `
        <template>
  <svg class="max-w-[50dvw] max-h-325px" xmlns="http://www.w3.org/2000/svg" width="647.63626" height="632.17383" viewBox="0 0 647.63626 632.17383"
       xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
    <path d="M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z" transform="translate(-276.18187 -133.91309)" fill="var(--sidebar-color)"/>
    <path d="M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z" transform="translate(-276.18187 -133.91309)" fill="var(--primary-color)"/>
    <path d="M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z" transform="translate(-276.18187 -133.91309)" fill="var(--primary-color)"/>
    <circle cx="190.15351" cy="24.95465" r="20" fill="var(--primary-color)"/>
    <circle cx="190.15351" cy="24.95465" r="12.66462" fill="var(--bg-color)"/>
    <path d="M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z" transform="translate(-276.18187 -133.91309)" fill="var(--sidebar-color)"/>
    <path d="M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z" transform="translate(-276.18187 -133.91309)" fill="var(--primary-color)"/>
    <path d="M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z" transform="translate(-276.18187 -133.91309)" fill="var(--primary-color)"/>
    <circle cx="433.63626" cy="105.17383" r="20" fill="var(--primary-color)"/>
    <circle cx="433.63626" cy="105.17383" r="12.18187" fill="var(--bg-color)"/>
  </svg>
  <p class="text-center mt-[var(--xx)] font-bold text-[length:var(--l)]">No Data</p>
</template>`,
        example: false
    },
    {
        title: 'pagination',
        highlight: `
        <script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: { type: Number, required: true },
  totalPages: { type: Number, required: true },
  perPage: { type: Number, default: 10 },
  perPageOptions: { type: Array, default: () => [5, 10, 15, 25, 50] }
})

const emit = defineEmits(['update:currentPage', 'update:perPage'])

// Handle klik Next/Prev/Angka
const changePage = (page) => {
  if (page >= 1 && page <= props.totalPages && page !== props.currentPage) {
    emit('update:currentPage', page)
  }
}

// Handle ganti jumlah data per halaman
const changePerPage = (event) => {
  emit('update:perPage', Number(event.target.value))
}

// Bikin array halaman [1, 2, 3, ...]
const pages = computed(() => {
  return Array.from({ length: props.totalPages }, (_, i) => i + 1)
})

/** Cara Pakai & Mapping API
 * <template>
 *   <Pagination
 *     :currentPage="paginationMeta.current"
 *     :totalPages="paginationMeta.last"
 *     :perPage="paginationMeta.perPage"
 *     @update:currentPage="fetchData"
 *     @update:perPage="updatePerPage"
 *   />
 * </template>
 *
 * <script setup>
 * import { ref } from 'vue'
 * import Pagination from './components/Pagination.vue'
 *
 * const paginationMeta = ref({ current: 1, last: 1, perPage: 10 })
 *
 * // Contoh Adapter: Backend berubah-ubah? Yang diubah cuma fungsi ini!
 * const fetchData = async (page = 1) => {
 *   const response = await api.get(\`/users?page=\${page}\`)
 *
 *   // KALAU LARAVEL:
 *   paginationMeta.value = {
 *     current: response.data.meta.current_page,
 *     last: response.data.meta.last_page,
 *     perPage: response.data.meta.per_page
 *   }
 *
 *   // KALAU GOLANG/EXPRESS (Misal):
 *   // paginationMeta.value = {
 *   //   current: response.data.page,
 *   //   last: response.data.total_pages,
 *   //   perPage: response.data.limit
 *   // }
 * }
 *
*/
</script>

<template>
  <div class="flex flex-wrap items-center justify-between gap-[var(--x)] mt-[var(--x)]">

    <!-- Wrapper Pagination Box -->
    <div class="grid font-medium shadow-box border-style-default py-[var(--s)] px-[var(--xxxx)] rounded-full">

      <!-- Elements (Scrollable) -->
      <div class="flex gap-[var(--m)] items-center max-w-full overflow-auto pb-[2px] custom-scrollbar">

        <!-- Prev Button -->
        <div
            class="min-w-[var(--xx)] min-h-[var(--xx)] max-w-[var(--xx)] max-h-[var(--xx)] border border-style-default flex items-center justify-center text-[var(--s)] rounded-[var(--radius-s)] cursor-pointer hover:bg-primary hover:text-white transition-colors"
            :class="currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''"
            @click="changePage(currentPage - 1)"
        >
          &lt;
        </div>

        <!-- Page Numbers -->
        <div
            v-for="page in pages"
            :key="page"
            class="min-w-[var(--xx)] min-h-[var(--xx)] max-w-[var(--xx)] max-h-[var(--xx)] border border-style-default flex items-center justify-center text-[var(--s)] rounded-[var(--radius-s)] cursor-pointer hover:bg-primary hover:text-white transition-colors"
            :class="{ 'bg-primary text-white': page === currentPage }"
            @click="changePage(page)"
        >
          {{ page }}
        </div>

        <!-- Next Button -->
        <div
            class="min-w-[var(--xx)] min-h-[var(--xx)] max-w-[var(--xx)] max-h-[var(--xx)] border border-style-default flex items-center justify-center text-[var(--s)] rounded-[var(--radius-s)] cursor-pointer hover:bg-primary hover:text-white transition-colors"
            :class="currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''"
            @click="changePage(currentPage + 1)"
        >
          &gt;
        </div>

      </div>
    </div>

    <!-- Per Page Selector -->
    <div class="flex gap-[var(--m)] w-max flex-nowrap whitespace-nowrap items-center text-[var(--s)]">
      <span>Per Page : </span>
      <select
          :value="perPage"
          @change="changePerPage"
          class="py-[3px] px-[var(--m)] rounded-[var(--radius-s)] border border-style-default bg-transparent outline-none cursor-pointer"
      >
        <option v-for="option in perPageOptions" :key="option" :value="option" class="text-black">
          {{ option }}
        </option>
      </select>
    </div>

  </div>
</template>

<style scoped>
/* Scrollbar khusus untuk pagination elements sesuai CSS kamu */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: var(--border); /* Biar ada warnanya pas di-scroll */
  border-radius: 4px;
}
</style>`,
        html: `
                <div class="flex-aic-jcb gap-x">
                    <div class="pagination">
                        <div class="pagination-elements">
                            <div class="pagination-item"><</div>
                            <div class="pagination-item active">1</div>
                            <div class="pagination-item">2</div>
                            <div class="pagination-item">3</div>
                            <div class="pagination-item">></div>
                        </div>
                    </div>
                    <div class="pagination-per-page">
                        <span>Per Page : </span>
                        <select>
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                        </select>
                    </div>
                </div>`,
        example: true
    },
    {
        title: 'section-title',
        highlight: `
      <script setup>
defineProps({
  text: {
    type: String,
    default: 'hello world'
  }
})
</script>

<template>
  <h1 class="capitalize text-[length:var(--x)] font-['Medium',_sans-serif]
           first-letter:bg-[var(--primary-color)]
           first-letter:text-white
           first-letter:p-[2px_var(--xxs)]
           first-letter:rounded-[var(--radius-s)]
           mb-[var(--m)]">
    {{ text }}
  </h1>
</template>`,
        example: false
    },
    {
        title: 'stepper',
        highlight: `
        <script setup>
defineProps({
  steps: {
    type: Array,
    required: true,
    // Format: [{ label: 'Resume' }, { label: 'Email' }]
  },
  currentStep: {
    type: Number,
    default: 1
  }
})

const emit = defineEmits(['update:currentStep'])

/** Cara Pakai
 * <Stepper
 *    :steps="[{label: 'Resume'}, {label: 'Email'}, {label: 'Salary'}]"
 *    v-model:currentStep="activeStep"
 * />
 */
</script>

<template>
  <div class="stepper flex items-center justify-start gap-x-[var(--m)] overflow-x-auto pb-[var(--xxs)] custom-scrollbar">
    <template v-for="(step, index) in steps" :key="index">

      <!-- Stepper Item -->
      <div class="flex items-center gap-x-[var(--xxs)]">
        <div
            @click="emit('update:currentStep', index + 1)"
            class="flex items-center justify-center min-w-[var(--xxxx)] min-h-[var(--xxxx)] max-w-[var(--xxxx)] max-h-[var(--xxxx)] rounded-full text-[length:var(--s)] font-medium cursor-pointer transition-colors"
            :class="[
            (currentStep === index + 1)
              ? 'bg-primary text-bg'
              : 'bg-link text-bg hover:bg-primary'
          ]"
        >
          {{ index + 1 }}
        </div>

        <div class="whitespace-nowrap font-medium">
          {{ step.label }}
        </div>
      </div>

      <!-- Divider (Muncul cuma di sela-sela item) -->
      <div
          v-if="index < steps.length - 1"
          class="h-[1px] min-w-[111px] bg-primary"
      ></div>

    </template>
  </div>
</template>

<style scoped>
/* Scrollbar sesuai CSS lu */
.custom-scrollbar::-webkit-scrollbar {
  height: 7px;
}
/* Opsional: kasih warna thumb biar keliatan pas scroll */
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: var(--scrollthumb-color);
  border-radius: 10px;
}
</style>`,
        html: `
                <div class="display-grid">
                    <div class="stepper">
                        <div class="stepper-item">
                            <div class="stepper-key active">1</div>
                            <div class="stepper-value">Resume</div>
                        </div>
                        <div class="stepper-divider"></div>
                        <div class="stepper-item">
                            <div class="stepper-key">2</div>
                            <div class="stepper-value">Email</div>
                        </div>
                        <div class="stepper-divider"></div>
                        <div class="stepper-item">
                            <div class="stepper-key">3</div>
                            <div class="stepper-value">Salary</div>
                        </div>
                    </div>
                </div>`,
        example: true
    },
    {
        title: 'table',
        highlight: `
        <script setup>
defineProps({
  headers: {
    type: Array,
    required: true,
    // Format: ['No', 'Title', 'Actions']
  },
  items: {
    type: Array,
    required: true
    // Format data disesuaikan dengan kebutuhan
  }
})

/** Cara Pakai
 * <Table
 *   :headers="['No', 'Title', 'Actions']"
 *   :items="dataList"
 * >
 *   <!-- Gunakan scoped slots untuk custom kolom -->
 *   <template #row="{ item, index }">
 *      <td class="text-center">{{ index + 1 }}.</td>
 *      <td class="fit whitespace-normal break-words min-w-[175px]">{{ item.title }}</td>
 *      <td class="flex items-center justify-around gap-[var(--s)]">
 *         <a class="text-primary hover:underline cursor-pointer font-medium uppercase text-[var(--s)]">Save</a>
 *         <div class="text-success hover:underline cursor-pointer font-medium uppercase text-[var(--s)]">Edit</div>
 *         <button class="text-warning hover:underline font-medium uppercase text-[var(--s)]">Delete</button>
 *      </td>
 *   </template>
 * </Table>
 */
</script>

<template>
  <div class="table-content max-w-full overflow-auto text-[var(--s)] custom-scrollbar">
    <table class="w-full whitespace-nowrap border-separate border-spacing-0">
      <thead>
      <tr>
        <th
            v-for="(header, i) in headers"
            :key="i"
            class="bg-sidebar border-y border-line min-h-[63px] h-[63px] px-[var(--xs)] vertical-middle font-bold
                   first:border-l first:rounded-l-[var(--radius-m)] text-center
                   last:border-r last:rounded-r-[var(--radius-m)]"
        >
          {{ header }}
        </th>
      </tr>
      </thead>

      <tbody>
      <tr
          v-for="(item, index) in items"
          :key="index"
          class="even:bg-sidebar hover:bg-sidebar-hover transition-colors"
      >
        <!-- Slot ini biar isi TD-nya fleksibel tapi layout TR-nya tetep dari komponen -->
        <slot name="row" :item="item" :index="index"></slot>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
/* Scrollbar sesuai CSS lu */
.custom-scrollbar::-webkit-scrollbar {
  width: 9px;
  height: 9px;
}

/* Selector khusus untuk TD hover yang warnanya beda sendiri */
td:hover {
  background-color: var(--transsecond-primary-color);
}

/* Karena td action lu pake selector :hover { underline } */
td.action :hover {
  text-decoration: underline;
}
</style>`,
        html: `
                <div class="display-grid">
                    <div class="table-content">
                        <table>
                            <thead>
                            <tr>
                                <th>No</th>
                                <th>Title</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1.</td>
                                <td class="fit">Example</td>
                                <td class="action">
                                    <a class="text-primary">save</a>
                                    <div class="text-success">edit</div>
                                    <form>
                                        <button class="button-clear-style text-warning">delete</button>
                                    </form>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>`,
        example: true
    },
    {
        title: 'timeline',
        highlight: `
        <script setup>
defineProps({
  items: {
    type: Array,
    required: true
    /**
     * Format: [
     *  { title: 'Project Started', desc: '...', time: '2 hours ago', active: true },
     *  ...
     * ]
     */
  }
})

/** Cara Pakai
 * <Timeline :items="historyData" />
 */
</script>

<template>
  <div class="grid grid-cols-[max-content_1fr] gap-x-[var(--s)] gap-x-[var(--m)] grid-rows-[max-content]">
    <template v-for="(item, index) in items" :key="index">

      <!-- Kolom Kiri: Dot & Line -->
      <div class="flex flex-col">
        <!-- Dot (Key) -->
        <span
            class="flex items-center justify-center min-w-[var(--xxxx)] min-h-[var(--xxxx)] max-w-[var(--xxxx)] max-h-[var(--xxxx)] rounded-[var(--xxxx)] font-medium cursor-pointer transition-colors"
            :class="item.active
            ? 'bg-primary text-white'
            : 'bg-link text-scrollthumb hover:bg-primary hover:text-white'"
        >
          {{ index + 1 }}
        </span>

        <!-- Divider Line -->
        <!-- Logic: Jangan tampilin divider di item terakhir -->
        <div
            v-if="index < items.length - 1"
            class="min-h-[63px] w-[2px] ml-[calc(var(--xxxx)/2)] translate-x-[-50%] transition-colors"
            :class="item.active ? 'bg-primary' : 'bg-link'"
        ></div>
      </div>

      <!-- Kolom Kanan: Content -->
      <div class="overflow-auto h-max max-h-[300px] max-w-[400px] mt-[4px]">
        <div class="font-medium text-[var(--l)] text-text">
          {{ item.title }}
        </div>
        <div class="text-text/80 text-[var(--m)]">
          {{ item.desc }}
        </div>
        <div class="font-light text-[var(--xs)] text-link">
          {{ item.time }}
        </div>
      </div>

    </template>
  </div>
</template>

<style scoped>
/* Biar scrollbar konten gak ngerusak layout kalau kepanjangan */
.overflow-auto::-webkit-scrollbar {
  width: 4px;
}
.overflow-auto::-webkit-scrollbar-thumb {
  background: var(--scrollthumb-color);
  border-radius: 10px;
}
</style>`,
        html: `
                <div class="timeline">
                    <div>
                        <span class="timeline-key active">1</span>
                        <div class="timeline-divider active"></div> 
                    </div>
                    <div class="timeline-content max-width-400">
                        <div class="timeline-content-title">Project Started</div>
                        <div class="timeline-content-desc">The amazing UI showcase project began</div>
                        <div class="timeline-content-time">2 hours ago</div>
                    </div>
                    <div>
                        <span class="timeline-key">2</span>
                        <div class="timeline-divider"></div> 
                    </div>
                    <div class="timeline-content max-width-400">
                        <div class="timeline-content-title">Components Added</div>
                        <div class="timeline-content-desc">All major UI components have been implemented</div>
                        <div class="timeline-content-time">1 hours ago</div>
                    </div>
                    <div>
                        <span class="timeline-key">3</span>
                    </div>
                    <div class="timeline-content max-width-400">
                        <div class="timeline-content-title">Deploy to Production</div>
                        <div class="timeline-content-desc">Ready for launch</div>
                        <div class="timeline-content-time">Upcoming</div>
                    </div>
                </div>`,
        example: true
    },
    {
        title: 'toast',
        highlight: `
        <script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    default: 'Default Message'
  },
  type: {
    type: String,
    default: 'primary' // bisa success, danger, warning
  }
})

const emit = defineEmits(['close'])

/** Cara Pakai
 * <Toast
 *   :show="isToastVisible"
 *   message="Data Berhasil Disimpan!"
 *   type="success"
 *   @close="isToastVisible = false"
 * />
 */
</script>

<template>
  <Transition name="fade-slide">
    <div
        v-if="show"
        class="fixed right-[var(--m)] bottom-[100px] z-[99] w-max text-white"
    >
      <div
          :class="[
          'break-all py-[var(--s)] px-[var(--l)] border border-line rounded-[var(--radius-m)] flex items-center gap-[var(--m)] max-w-[75dvw] h-max box-border',
          \`bg-\${type}\`
        ]"
      >
        <p class="flex-1">{{ message }}</p>

        <!-- Close Button -->
        <div
            @click="emit('close')"
            class="toast-button-close min-w-[23px] min-h-[23px] max-w-[23px] max-h-[23px] flex items-center justify-center border-2 border-transparent rounded-full bg-surface text-danger cursor-pointer hover:bg-danger hover:border-white hover:text-white transition-all group"
        >
          <svg class="w-2 h-2 fill-danger group-hover:fill-bg transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27">
            <path d="M8 1l5 6 6-6c2-1 5-1 6 0 2 2 2 5 0 7l-5 5 5 6c2 2 2 5 0 6-1 2-4 2-6 0l-6-5-5 5c-2 2-5 2-7 0-1-1-1-4 0-6l6-6-6-5C0 6 0 3 1 1c2-1 5-1 7 0z"/>
          </svg>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Animasi biar smooth pas muncul */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

/* Selector khusus buat handle fill SVG pas hover kalau gak mau pake group-hover */
.toast-button-close:hover svg {
  fill: var(--bg-color);
}
</style>`,
        html: `
                <div class="button btn-primary" onclick="showToast()">Click</div>
                <div class='toast display-none'>
                    <div class='bg-primary'>
                        <p>Message</p>
                        <div class='toast-button-close' onclick="showToast()">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35.52" height="35.52" viewBox="0 0 27 27" shape-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd">
                                <path d="M8 1l5 6 6-6c2-1 5-1 6 0 2 2 2 5 0 7l-5 5 5 6c2 2 2 5 0 6-1 2-4 2-6 0l-6-5-5 5c-2 2-5 2-7 0-1-1-1-4 0-6l6-6-6-5C0 6 0 3 1 1c2-1 5-1 7 0z"/>
                            </svg>
                        </div>
                    </div>
                </div>`,
        example: true
    },
    {
        title: 'toggle',
        highlight: `
        <script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const toggle = (event) => {
  emit('update:modelValue', event.target.checked)
}
</script>

<template>
  <div class="flex items-center justify-start gap-[var(--m)]">
    <label
        class="relative inline-block w-[63px] h-[33px] rounded-[33px] cursor-pointer transition-all duration-300 border border-line hover:scale-[1.02] hover:border-primary
             shadow-[inset_3px_3px_6px_0_rgb(204,219,232),inset_-3px_-3px_6px_1px_rgba(255,255,255,0.5)]
             dark:shadow-[inset_3px_3px_6px_0_rgba(0,0,0,0.5),inset_-3px_-3px_6px_1px_rgba(255,255,255,0.1)]"
    >
      <input
          type="checkbox"
          class="hidden peer"
          :checked="modelValue"
          @change="toggle"
      >

      <!-- Slider -->
      <span
          class="flex items-center justify-center bg-sidebar transition-all duration-300 ease-in-out rounded-[33px] w-[25px] h-[25px] absolute left-[3px] top-1/2 -translate-y-1/2 border border-line shadow-[0_4px_8px_-2px_rgba(9,30,66,0.25),0_0_0_1px_rgba(9,30,66,0.08)]
               peer-checked:left-[34px]"
      >
      </span>
    </label>

    <!-- Status Label -->
    <span v-if="label" class="text-[16px] font-medium min-w-[60px] text-text">
      {{ label }}
    </span>
  </div>
</template>`,
        html: `
                <div class="flex-aic-jcs gap-m">
                    <label class="toggle">
                        <input type="checkbox" class="toggle-check">
                        <span class="toggle-slider"></span>
                    </label>
                    <span class="toggle-status">sample</span>
                </div>`,
        example: true
    },
    {
        title: 'tooltip',
        highlight: `
        <script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})

/** Cara Pakai
 * <Tooltip text="Java">
 *    <p class="cursor-pointer">Java</p>
 * </Tooltip>
 */
</script>

<template>
  <div
      class="relative inline-block group"
      :data-tooltip="text"
  >
    <!-- Element aslinya (Java, Elixir, dll) -->
    <slot />

    <!-- Tooltip Element -->
    <div class="
      invisible group-hover:visible
      absolute z-[111] left-0
      bottom-[-2.5rem] md:bottom-[-2.2rem]
      bg-text text-bg
      py-[7px] px-[11px]
      rounded-[5px] text-[var(--xs)] font-medium
      whitespace-nowrap transition-all duration-200
    ">
      {{ text }}
    </div>
  </div>
</template>`,
        html: `
                <div class="flex-ais-jcs gap-m">
                    <p class="cursor-pointer" data-tooltip="Java">Java</p>
                    <p class="cursor-pointer" data-tooltip="Elixir">Elixir</p>
                </div>`,
        example: true
    }
]