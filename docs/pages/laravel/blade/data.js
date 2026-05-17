export const data = [
    {
        title: "layout",
        highlight: `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>@yield('title', config('app.name', 'App'))</title>
    <link rel="stylesheet" href="{{ asset('assets/styles/style.css') }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @stack('styles')
</head>
<body>

{{-- ── TOP NAVIGATION ─────────────────────────────── --}}
<nav class="bottom-nav">
    <a class="bottom-nav-item active">Nav 1</a>
    <a class="bottom-nav-item">Nav 2</a>
    <div class="bottom-nav-items">
        <label class="bottom-nav-item" for="bottom-nav-items-check-1">Nav Items</label>
        <input type="checkbox" class="bottom-nav-items-check" id="bottom-nav-items-check-1">
        <div class="bottom-nav-items-elements-modal">
            <div class="bottom-nav-items-elements-content">
                <label class="bottom-nav-items-elements-close" for="bottom-nav-items-check-1">&Cross;</label>
                <a class="bottom-nav-item active">Nav 3</a>
                <a class="bottom-nav-item">Nav 4</a>
                <a class="bottom-nav-item">Nav 5</a>
            </div>
        </div>
    </div>
</nav>

{{-- ── SIDEBAR ─────────────────────────────────────── --}}
<aside class="sidebar">
    <div class="sidebar-header">
        <div class="sidebar-header-logo">
            <img class="sidebar-header-logo-img"
                 alt="{{ config('app.name', 'App') }}"
                 src="{{ asset('assets/svg/logo.svg') }}">
        </div>
        <div class="sidebar-header-title">{{ config('app.name', 'App') }}</div>
    </div>

    <div class="sidebar-menu">
        @yield('sidebar-menu')
    </div>

    <div class="sidebar-button-hide sidebar-menu-item" onclick="sidebarMinify()">
        <svg class="sidebar-menu-item-svg" xmlns="http://www.w3.org/2000/svg" width="35.52" height="35.52"
             viewBox="0 0 20 20" shape-rendering="geometricPrecision" image-rendering="optimizeQuality"
             fill-rule="evenodd">
            <path d="M10 0h9s1 1 1 2v17l-1 1h-9l-1-1V2c0-1 1-2 1-2zm8 14v2 1h-1l-2-1v-1l2-1c0-1 0-1 1-1v1z"/>
            <rect width="7.211" height="20.232" rx="2" ry="4"/>
        </svg>
        <span>Hide</span>
    </div>
</aside>

{{-- ── MAIN CONTAINER ──────────────────────────────── --}}
<main class="container">
    <header class="container-header">
        <div class="container-header-button-switch-theme" onclick="switchTheme()">Dark Mode</div>

        <div class="container-header-nav">
            @yield('header-nav')
        </div>

        <div class="container-header-button-show-sidebar" onclick="showMenu()">
            <svg id="get-menu" viewBox="0 0 100 100">
                <path class="line line1"
                      d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352
                         94.532987,66.711331 94.543142,77.980673 90.966081,81.670246
                         85.259173,81.668997 79.552261,81.667751 75.000211,74.999942
                         75.000211,74.999942 L 25.000021,25.000058"/>
                <path class="line line2" d="M 20,50 H 80"/>
                <path class="line line3"
                      d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648
                         94.532987,33.288669 94.543142,22.019327 90.966081,18.329754
                         85.259173,18.331003 79.552261,18.332249 75.000211,25.000058
                         75.000211,25.000058 L 25.000021,74.999942"/>
            </svg>
        </div>
    </header>

    <section class="container-content">
        @yield('content')
    </section>

    <footer>
        @yield('footer')
    </footer>
</main>

<script>
    function sidebarMinify() {
        document.querySelector('.sidebar').classList.toggle('collapse');
        document.querySelector('.container').classList.toggle('expanded');
    }
    function switchTheme() {
        document.body.classList.toggle('dark-mode');
    }
    function showMenu() {
        document.querySelector('.sidebar').classList.toggle('show');
        document.getElementById('get-menu').classList.toggle('opened');
    }
</script>
@stack('scripts')
</body>
</html>
`,
        example: false
    },
    {
        title: "accordion",
        highlight: `
        @props([
    'id'       => 'accordion-' . uniqid(),
    'question' => 'Question title',
    'subtitle' => '',
])

{{--
    Usage:
    <x-accordion id="item1" question="What is Lorem Ipsum?" subtitle="Short summary here">
        <p>Full answer goes here...</p>
    </x-accordion>
--}}

<div class="accordion-item">
    <input type="checkbox" id="{{ $id }}" class="accordion-item-check"/>

    <label for="{{ $id }}" class="accordion-item-label">
        <div class="flex-aic-jcb">
            <p>{{ $question }}</p>
            <span>▼</span>
        </div>
        @if($subtitle)
            <div class="accordion-item-label-subtitle">{{ $subtitle }}</div>
        @endif
    </label>

    <div class="accordion-content">
        {{ $slot }}
    </div>
</div>
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
        title: "badge",
        highlight: `
        @props([
    'variant'  => 'primary',   // {{-- primary | warning | success | danger --}}
    'size'     => 'normal',    // {{-- normal | small --}}
    'closable' => false,
    'text'     => 'Message',
])

{{--
    Usage:
    <x-badge variant="success" :closable="true">Done</x-badge>
    <x-badge variant="danger" size="small">Error</x-badge>
--}}

@if($size === 'small')
    <div class="badge badge-small bg-{{ $variant }}">
        <p>{{ $slot->isEmpty() ? $text : $slot }}</p>
    </div>
@else
    <div class="badge badge-close badge-{{ $variant }}">
        <p>{{ $slot->isEmpty() ? $text : $slot }}</p>
        @if($closable)
            <div class="badge-button-close">
                <svg xmlns="http://www.w3.org/2000/svg" width="35.52" height="35.52"
                     viewBox="0 0 27 27" shape-rendering="geometricPrecision"
                     image-rendering="optimizeQuality" fill-rule="evenodd">
                    <path d="M8 1l5 6 6-6c2-1 5-1 6 0 2 2 2 5 0 7l-5 5 5 6c2 2 2 5 0 6-1 2-4
                             2-6 0l-6-5-5 5c-2 2-5 2-7 0-1-1-1-4 0-6l6-6-6-5C0 6 0 3 1 1c2-1
                             5-1 7 0z"/>
                </svg>
            </div>
        @endif
    </div>
@endif
`,
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
        title: "bottom-sheet",
        highlight: `
        @props([
    'triggerId' => 'bottom-sheet-' . uniqid(),
    'title'     => '',
])

{{--
    Usage:
    <x-bottom-sheet trigger-id="my-sheet" title="Options">
        <p>Sheet content here</p>
    </x-bottom-sheet>
--}}

<div class="button bg-primary" onclick="toggleBottomSheet('{{ $triggerId }}')">
    {{ $trigger ?? 'Open' }}
</div>

<div class="bottom-sheet" id="{{ $triggerId }}">
    <div class="bottom-sheet-header" onclick="toggleBottomSheet('{{ $triggerId }}')">
        🖱
    </div>
    <div class="bottom-sheet-content">
        @if($title)
            <h1>{{ $title }}</h1>
        @endif
        {{ $slot }}
    </div>
</div>

@once
    @push('scripts')
    <script>
        function toggleBottomSheet(id) {
            const sheet = document.getElementById(id);
            if (sheet) sheet.classList.toggle('show');
        }
    </script>
    @endpush
@endonce
`,
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
        title: "breadcrumb",
        highlight: `
        @props([
    'items' => [],   // {{-- e.g. [['label'=>'Home','url'=>'/'],['label'=>'About','url'=>null]] --}}
])

{{--
    Usage:
    <x-breadcrumb :items="[
        ['label' => 'Home',     'url' => '/'],
        ['label' => 'Products', 'url' => '/products'],
        ['label' => 'Detail',   'url' => null],
    ]"/>
--}}

<div class="breadcrumb">
    @foreach($items as $index => $item)
        @if($index > 0)
            <span>></span>
        @endif

        @if(!empty($item['url']))
            <a href="{{ $item['url'] }}" class="breadcrumb-item">{{ $item['label'] }}</a>
        @else
            <a class="breadcrumb-item active">{{ $item['label'] }}</a>
        @endif
    @endforeach
</div>
`,
        html: `
                <div class="breadcrumb">
                    <a class="breadcrumb-item active">menu a</a>
                    <span>></span>
                    <a class="breadcrumb-item">menu b</a>
                </div>`,
        example: true
    },
    {
        title: "button",
        highlight: `
        @props([
    'variant' => 'primary',   // {{-- primary | warning | success | danger --}}
    'style'   => 'solid',     // {{-- solid | outline | ghost | rounded-outline --}}
    'type'    => 'button',
    'href'    => null,
])

{{--
    Usage:
    <x-button variant="primary">Save</x-button>
    <x-button variant="danger" style="outline">Delete</x-button>
    <x-button variant="success" href="/go">Link Button</x-button>
--}}

@php
    $classes = match($style) {
        'outline'         => "button badge-{$variant} text-{$variant}",
        'ghost'           => "button bg-{$variant}",
        'rounded-outline' => "button badge-{$variant} rounded text-{$variant}",
        default           => "button btn-{$variant}",
    };
@endphp

@if($href)
    <a href="{{ $href }}" {{ $attributes->merge(['class' => $classes]) }}>
        {{ $slot }}
    </a>
@else
    <button type="{{ $type }}" {{ $attributes->merge(['class' => $classes]) }}>
        {{ $slot }}
    </button>
@endif
`,
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
        title: "card",
        highlight: `
        @props([
    'title'    => '',
    'subtitle' => '',
    'meta'     => '',
    'time'     => '',
    'bordered' => false,
])

{{--
    Usage:
    <x-card title="Ilham Rahmat Akbar" subtitle="Fullstack Dev" meta="Jakarta" time="5 min ago">
        <x-slot name="actions">
            <a class="text-primary">Hire</a>
            <a class="text-success">Contact</a>
        </x-slot>
    </x-card>
--}}

<div class="card-wrapper {{ $bordered ? 'replace-shadow-with-border' : '' }}">
    <div>
        @if($title)
            <div class="card-wrapper-title">{{ $title }}</div>
        @endif
        @if($subtitle)
            <p>{{ $subtitle }}</p>
        @endif
        @if($meta)
            <small>{{ $meta }}</small>
        @endif
        {{ $slot }}
    </div>

    @isset($actions)
        <div class="card-wrapper-actions">
            {{ $actions }}
        </div>
    @endisset

    @if($time)
        <p class="card-wrapper-date-time">{{ $time }}</p>
    @endif
</div>
`,
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
        title: "chart-bar",
        highlight: `
        @props([
    'id'    => 'chart-bar-' . uniqid(),
    'name'  => 'Bar Chart',
    'stats' => [],   // {{-- [['label' => 'Jan', 'value' => 450], ...] --}}
])

{{--
    Usage:
    <x-chart-bar name="Revenue Bulanan" :stats="[
        ['label' => 'Jan', 'value' => 450],
        ['label' => 'Feb', 'value' => 590],
        ['label' => 'Mar', 'value' => 800],
    ]"/>

    NOTE: Chart.js dimuat otomatis via CDN — tidak perlu npm.
--}}

@once
@push('styles')
<style>
.blade-chart-card {
    background: var(--bg-color, #fff);
    border-radius: 12px;
    box-shadow: var(--box-shadow, 0 1px 3px rgba(0,0,0,.08));
    border: 1px solid var(--border-color, #dee2e6);
    padding: 24px;
    width: 100%;
    max-width: 500px;
    box-sizing: border-box;
}
.blade-chart-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
}
.blade-chart-icon {
    display: grid;
    place-items: center;
    width: 36px; height: 36px;
    border-radius: 8px;
    background: var(--transprimary-color, rgba(79,70,229,.08));
    flex-shrink: 0;
}
.blade-chart-icon svg { fill: var(--primary-color, #4f46e5); }
.blade-chart-title {
    font-size: 1.05rem;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--text-color, #212529);
}
.blade-chart-canvas-wrap { height: 288px; width: 100%; }
.blade-chart-empty {
    display: flex; align-items: center; justify-content: center;
    height: 288px;
    font-size: .875rem;
    color: var(--link-color, #6b7280);
    font-style: italic;
}
</style>
@endpush
@endonce

<div class="blade-chart-card">
    <div class="blade-chart-header">
        <span class="blade-chart-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M7 2a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5H7zm6 6a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0V8zm-5 2a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1zm8 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1z"/>
            </svg>
        </span>
        <h3 class="blade-chart-title">{{ $name }}</h3>
    </div>

    @if(count($stats))
        <div class="blade-chart-canvas-wrap">
            <canvas id="{{ $id }}"></canvas>
        </div>
    @else
        <div class="blade-chart-empty">Memuat data...</div>
    @endif
</div>

@if(count($stats))
@push('scripts')
<script>
(function () {
    var canvasId = '{{ $id }}';
    var labels   = {!! json_encode(array_column($stats, 'label')) !!};
    var values   = {!! json_encode(array_column($stats, 'value')) !!};
    var name     = {{ json_encode($name) }};

    function init() {
        var ctx = document.getElementById(canvasId);
        if (!ctx || ctx._bladeChart) return;
        var primary = getComputedStyle(document.documentElement)
            .getPropertyValue('--primary-color').trim() || '#4f46e5';
        ctx._bladeChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: name,
                    data: values,
                    backgroundColor: primary,
                    hoverBackgroundColor: primary,
                    borderRadius: 8,
                    borderSkipped: false,
                    barThickness: 32,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
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
        });
    }

    /* Lazy-load Chart.js CDN — hanya satu kali meski banyak chart di halaman */
    if (typeof Chart !== 'undefined') {
        init();
    } else if (window.__chartjsLoading) {
        (window.__chartjsQueue = window.__chartjsQueue || []).push(init);
    } else {
        window.__chartjsLoading = true;
        (window.__chartjsQueue = window.__chartjsQueue || []).push(init);
        var s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js';
        s.onload = function () {
            (window.__chartjsQueue || []).forEach(function (fn) { fn(); });
            window.__chartjsQueue = [];
        };
        document.head.appendChild(s);
    }
})();
</script>
@endpush
@endif
`,
        example: false
    },

    {
        title: "chart-doughnut",
        highlight: `
        @props([
    'id'    => 'chart-doughnut-' . uniqid(),
    'name'  => 'Doughnut Chart',
    'stats' => [],   // {{-- [['label'=>'Sales','value'=>500,'color'=>'#6366f1'], ...] --}}
])

{{--
    Usage:
    <x-chart-doughnut name="Transaksi" :stats="[
        ['label' => 'Penjualan', 'value' => 500, 'color' => '#6366f1'],
        ['label' => 'Retur',     'value' => 20,  'color' => '#f59e0b'],
        ['label' => 'Pending',   'value' => 45],
    ]"/>

    NOTE: 'color' bersifat opsional — jika tidak diisi, warna otomatis.
--}}

@once
@push('styles')
<style>
.blade-chart-doughnut-wrap {
    position: relative;
    height: 224px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.blade-chart-doughnut-center {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    pointer-events: none;
}
.blade-chart-doughnut-total {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--text-color, #212529);
}
.blade-chart-doughnut-label {
    font-size: .625rem;
    text-transform: uppercase;
    letter-spacing: .1em;
    color: var(--link-color, #6b7280);
    margin-top: 2px;
}
</style>
@endpush
@endonce

@php
    $total = array_sum(array_column($stats, 'value'));
@endphp

<div class="blade-chart-card" style="max-width:420px;">
    <div class="blade-chart-header">
        <span class="blade-chart-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15" style="fill:var(--primary-color,#4f46e5)">
                <path d="M0 7.5A7.5 7.5 0 0 1 7 .016v4.019A3.5 3.5 0 0 0 7.5 11a3.48 3.48 0 0 0 2.096-.697l2.842 2.842A7.47 7.47 0 0 1 7.5 15 7.5 7.5 0 0 1 0 7.5zm13.145 4.938A7.47 7.47 0 0 0 15 7.5c0-1.034-.209-2.018-.587-2.914l-3.658 1.626A3.49 3.49 0 0 1 11 7.5a3.48 3.48 0 0 1-.697 2.096l2.842 2.842zM8 4.035V.016a7.5 7.5 0 0 1 5.963 3.675L10.254 5.34A3.5 3.5 0 0 0 8 4.035z"/>
            </svg>
        </span>
        <h3 class="blade-chart-title">{{ $name }}</h3>
    </div>

    @if(count($stats))
        <div class="blade-chart-doughnut-wrap">
            <canvas id="{{ $id }}"></canvas>
            <div class="blade-chart-doughnut-center">
                <span class="blade-chart-doughnut-total">{{ $total }}</span>
                <span class="blade-chart-doughnut-label">Total</span>
            </div>
        </div>
    @else
        <div class="blade-chart-empty">Data kosong</div>
    @endif
</div>

@if(count($stats))
@push('scripts')
<script>
(function () {
    var canvasId = '{{ $id }}';
    var DEFAULTS = ['#6366f1','#f59e0b','#10b981','#f43f5e','#3b82f6','#8b5cf6','#14b8a6','#fb923c'];
    var raw = {!! json_encode($stats) !!};
    var labels = raw.map(function(i){ return i.label; });
    var values = raw.map(function(i){ return i.value; });
    var colors = raw.map(function(i, idx){ return i.color || DEFAULTS[idx % DEFAULTS.length]; });

    function init() {
        var ctx = document.getElementById(canvasId);
        if (!ctx || ctx._bladeChart) return;
        ctx._bladeChart = new Chart(ctx, {
            type: 'doughnut',
            data: { labels: labels, datasets: [{ data: values, backgroundColor: colors, borderWidth: 0, hoverOffset: 6 }] },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '72%',
                plugins: {
                    legend: {
                        position: 'right',
                        labels: { usePointStyle: true, pointStyle: 'circle', boxWidth: 8, padding: 16, font: { size: 12 } },
                    },
                    tooltip: { backgroundColor: '#1f2937', padding: 12, cornerRadius: 8 },
                },
            }
        });
    }

    if (typeof Chart !== 'undefined') { init(); }
    else if (window.__chartjsLoading) { (window.__chartjsQueue = window.__chartjsQueue || []).push(init); }
    else {
        window.__chartjsLoading = true;
        (window.__chartjsQueue = window.__chartjsQueue || []).push(init);
        var s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js';
        s.onload = function(){ (window.__chartjsQueue||[]).forEach(function(fn){fn();}); window.__chartjsQueue=[]; };
        document.head.appendChild(s);
    }
})();
</script>
@endpush
@endif
`,
        example: false
    },

    {
        title: "chart-line",
        highlight: `
        @props([
    'id'     => 'chart-line-' . uniqid(),
    'name'   => 'Line Chart',
    'stats'  => [],   // {{-- single: [['label'=>'Jan','value'=>120], ...] --}}
    'multi'  => [],   // {{-- multi:  [['label'=>'Revenue','color'=>'#6366f1','data'=>[['label'=>'Jan','value'=>400],...]], ...] --}}
    'smooth' => true,
])

{{--
    Usage — single line:
    <x-chart-line name="Pengunjung" :stats="[
        ['label' => 'Jan', 'value' => 120],
        ['label' => 'Feb', 'value' => 380],
    ]"/>

    Usage — multi line:
    <x-chart-line name="Revenue vs Expense" :multi="[
        ['label' => 'Revenue', 'color' => '#6366f1', 'data' => [['label'=>'Jan','value'=>400],['label'=>'Feb','value'=>600]]],
        ['label' => 'Expense', 'color' => '#f43f5e', 'data' => [['label'=>'Jan','value'=>200],['label'=>'Feb','value'=>350]]],
    ]"/>
--}}

@php $isMulti = count($multi) > 0; @endphp

<div class="blade-chart-card">
    <div class="blade-chart-header">
        <span class="blade-chart-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                 stroke="var(--primary-color,#4f46e5)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
        </span>
        <h3 class="blade-chart-title">{{ $name }}</h3>
    </div>

    @if($isMulti || count($stats))
        <div class="blade-chart-canvas-wrap">
            <canvas id="{{ $id }}"></canvas>
        </div>
    @else
        <div class="blade-chart-empty">Memuat data...</div>
    @endif
</div>

@if($isMulti || count($stats))
@push('scripts')
<script>
(function () {
    var canvasId = '{{ $id }}';
    var isMulti  = {{ $isMulti ? 'true' : 'false' }};
    var smooth   = {{ $smooth ? 'true' : 'false' }};
    var statsRaw = {!! json_encode($stats) !!};
    var multiRaw = {!! json_encode($multi) !!};
    var name     = {{ json_encode($name) }};
    var COLORS   = ['#6366f1','#f43f5e','#10b981','#f59e0b','#3b82f6','#8b5cf6','#14b8a6','#fb923c'];

    function makeDataset(label, data, color, tension) {
        return {
            label: label, data: data.map(function(i){ return i.value; }),
            borderColor: color, backgroundColor: color + '22',
            borderWidth: 2.5, pointRadius: 4, pointHoverRadius: 6,
            pointBackgroundColor: color, tension: tension, fill: true,
        };
    }

    function init() {
        var ctx = document.getElementById(canvasId);
        if (!ctx || ctx._bladeChart) return;
        var tension = smooth ? 0.4 : 0;
        var chartData;
        if (isMulti) {
            chartData = {
                labels: multiRaw[0].data.map(function(i){ return i.label; }),
                datasets: multiRaw.map(function(s, idx){
                    return makeDataset(s.label, s.data, s.color || COLORS[idx % COLORS.length], tension);
                })
            };
        } else {
            chartData = {
                labels: statsRaw.map(function(i){ return i.label; }),
                datasets: [ makeDataset(name, statsRaw, COLORS[0], tension) ]
            };
        }
        ctx._bladeChart = new Chart(ctx, {
            type: 'line', data: chartData,
            options: {
                responsive: true, maintainAspectRatio: false,
                interaction: { mode: 'index', intersect: false },
                plugins: {
                    legend: {
                        display: true, position: 'top', align: 'end',
                        labels: { usePointStyle: true, pointStyle: 'circle', boxWidth: 8, padding: 16, font: { size: 12 } },
                    },
                    tooltip: { backgroundColor: '#1f2937', padding: 12, cornerRadius: 8 },
                },
                scales: {
                    y: { beginAtZero: true, grid: { color: 'rgba(156,163,175,0.15)' }, ticks: { color: '#9ca3af', font: { size: 11 } } },
                    x: { grid: { display: false }, ticks: { color: '#6b7280', font: { size: 12, weight: '500' } } },
                },
                animation: { duration: 1200, easing: 'easeInOutQuart' },
            }
        });
    }

    if (typeof Chart !== 'undefined') { init(); }
    else if (window.__chartjsLoading) { (window.__chartjsQueue = window.__chartjsQueue || []).push(init); }
    else {
        window.__chartjsLoading = true;
        (window.__chartjsQueue = window.__chartjsQueue || []).push(init);
        var s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js';
        s.onload = function(){ (window.__chartjsQueue||[]).forEach(function(fn){fn();}); window.__chartjsQueue=[]; };
        document.head.appendChild(s);
    }
})();
</script>
@endpush
@endif
`,
        example: false
    },

    {
        title: "chart-pie",
        highlight: `
        @props([
    'id'    => 'chart-pie-' . uniqid(),
    'name'  => 'Pie Chart',
    'stats' => [],   // {{-- [['label'=>'Elektronik','value'=>500,'color'=>'#6366f1'], ...] --}}
])

{{--
    Usage:
    <x-chart-pie name="Distribusi Kategori" :stats="[
        ['label' => 'Elektronik', 'value' => 500, 'color' => '#6366f1'],
        ['label' => 'Fashion',    'value' => 320, 'color' => '#f59e0b'],
        ['label' => 'Makanan',    'value' => 180],
    ]"/>
--}}

<div class="blade-chart-card" style="max-width:420px;">
    <div class="blade-chart-header">
        <span class="blade-chart-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" style="fill:var(--primary-color,#4f46e5)">
                <path d="M15 0v17.3l15.947 4.784C31.568 20.543 32 18.688 32 16.571 32 7.419 23.453 0 15 0h0zm-2 3c-6.971.728-13 7.026-13 14.5C0 25.508 6.492 32 14.5 32c5.897 0 10.963-3.526 13.229-8.582L13 19V3h0z" fill-rule="evenodd"/>
            </svg>
        </span>
        <h3 class="blade-chart-title">{{ $name }}</h3>
    </div>

    @if(count($stats))
        <div style="height:256px;width:100%;display:flex;align-items:center;justify-content:center;">
            <canvas id="{{ $id }}"></canvas>
        </div>
    @else
        <div class="blade-chart-empty">Belum ada data</div>
    @endif
</div>

@if(count($stats))
@push('scripts')
<script>
(function () {
    var canvasId = '{{ $id }}';
    var DEFAULTS = ['#6366f1','#f59e0b','#10b981','#f43f5e','#3b82f6','#8b5cf6','#14b8a6','#fb923c'];
    var raw    = {!! json_encode($stats) !!};
    var labels = raw.map(function(i){ return i.label; });
    var values = raw.map(function(i){ return i.value; });
    var colors = raw.map(function(i, idx){ return i.color || DEFAULTS[idx % DEFAULTS.length]; });

    function init() {
        var ctx = document.getElementById(canvasId);
        if (!ctx || ctx._bladeChart) return;
        ctx._bladeChart = new Chart(ctx, {
            type: 'pie',
            data: { labels: labels, datasets: [{ data: values, backgroundColor: colors, borderWidth: 0, hoverOffset: 0 }] },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { usePointStyle: true, pointStyle: 'circle', padding: 20, font: { size: 12 } },
                    },
                    tooltip: {
                        backgroundColor: '#1f2937', padding: 12, cornerRadius: 8,
                        callbacks: {
                            label: function(ctx){ return '  ' + (ctx.label ? ctx.label + ': ' : '') + ctx.parsed + ' unit'; }
                        },
                    },
                },
                animation: { duration: 1200, easing: 'easeInOutQuart' },
            }
        });
    }

    if (typeof Chart !== 'undefined') { init(); }
    else if (window.__chartjsLoading) { (window.__chartjsQueue = window.__chartjsQueue || []).push(init); }
    else {
        window.__chartjsLoading = true;
        (window.__chartjsQueue = window.__chartjsQueue || []).push(init);
        var s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js';
        s.onload = function(){ (window.__chartjsQueue||[]).forEach(function(fn){fn();}); window.__chartjsQueue=[]; };
        document.head.appendChild(s);
    }
})();
</script>
@endpush
@endif`,
        example: false
    },

    {
        title: "data",
        highlight: `
        @props([
    'key'   => '',
    'value' => '',
    'rows'  => [],   // {{-- [['key'=>'Name','value'=>'Ilham'],[...]] --}}
])

{{--
    Usage — single row:
    <x-data key="Name" value="Ilham Rahmat Akbar"/>

    Usage — multiple rows:
    <x-data :rows="[
        ['key' => 'Name',     'value' => 'Ilham Rahmat Akbar'],
        ['key' => 'Position', 'value' => 'Fullstack Dev'],
    ]"/>
--}}

@if(count($rows))
    @foreach($rows as $row)
        <div class="data">
            <div class="data-key">{{ $row['key'] }}</div>
            <div class="data-value">{{ $row['value'] }}</div>
        </div>
    @endforeach
@else
    <div class="data">
        <div class="data-key">{{ $key }}</div>
        <div class="data-value">{{ $value ?: $slot }}</div>
    </div>
@endif
`,
        example: false
    },

    {
        title: "export",
        highlight: `
        @props([
    'id'       => 'export-' . uniqid(),
    'pdfUrl'   => '',  //  {{-- route URL untuk export PDF --}}
    'excelUrl' => '',  //  {{-- route URL untuk export Excel --}}
    'branches' => [],  //  {{-- [['id'=>1,'name'=>'Cabang A'], ...] (opsional) --}}
])

{{--
    Usage:
    <x-export
        pdf-url="{{ route('finance.accounts.export.pdf') }}"
        excel-url="{{ route('finance.accounts.export.excel') }}"
    />

    With branch filter:
    <x-export
        pdf-url="{{ route('finance.accounts.export.pdf') }}"
        excel-url="{{ route('finance.accounts.export.excel') }}"
        :branches="$branches"
    />
--}}

@once
@push('styles')
<style>
.export-trigger {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    border: 1px solid var(--border-color, #dee2e6);
    border-radius: 4px;
    padding: 6px 16px;
    background: transparent;
    font-size: .875rem;
    color: var(--text-color, #212529);
    transition: border-color .15s, color .15s;
}
.export-trigger:hover { border-color: var(--primary-color, #4f46e5); color: var(--primary-color, #4f46e5); }
.export-trigger svg { fill: currentColor; width: 16px; height: 16px; }

.export-modal-overlay {
    display: none;
    position: fixed; inset: 0;
    background: rgba(33,37,41,.6);
    z-index: 200;
    align-items: center;
    justify-content: center;
}
.export-modal-overlay.show { display: flex; }

.export-modal-box {
    background: var(--bg-color, #fff);
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0,0,0,.18);
    padding: 28px;
    width: 90vw;
    max-width: 560px;
    max-height: 90vh;
    overflow-y: auto;
    box-sizing: border-box;
}

.export-modal-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid var(--border-color, #dee2e6);
}
.export-modal-head h3 { font-size: 1.1rem; font-weight: 600; color: var(--text-color,#212529); margin: 0 0 4px; }
.export-modal-head p  { font-size: .8rem; color: var(--link-color, #6b7280); margin: 0; }
.export-modal-close {
    cursor: pointer;
    width: 24px; height: 24px;
    border-radius: 50%;
    border: 2px solid var(--danger-color, #dc2626);
    color: var(--danger-color, #dc2626);
    display: flex; align-items: center; justify-content: center;
    font-size: .75rem; flex-shrink: 0;
    background: transparent;
    transition: background .15s, color .15s;
}
.export-modal-close:hover { background: var(--danger-color,#dc2626); color: #fff; }

.export-presets { padding: 12px 0; }
.export-presets p { font-weight: 600; margin: 0 0 8px; font-size: .875rem; }
.export-preset-list { display: flex; flex-wrap: wrap; gap: 6px; }
.export-preset-btn {
    padding: 4px 12px;
    border-radius: 999px;
    border: 1px solid var(--border-color,#dee2e6);
    font-size: .8rem;
    cursor: pointer;
    background: transparent;
    color: var(--link-color,#6b7280);
    transition: border-color .15s, color .15s, background .15s;
}
.export-preset-btn:hover { border-color: var(--primary-color,#4f46e5); color: var(--primary-color,#4f46e5); background: var(--transprimary-color,rgba(79,70,229,.08)); }

.export-form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid var(--border-color,#dee2e6);
    margin-bottom: 16px;
}
.export-form-group label { display: block; font-size: .8rem; font-weight: 600; margin-bottom: 4px; }
.export-form-group input,
.export-form-group select {
    width: 100%;
    border: 1px solid var(--border-color,#dee2e6);
    border-radius: 6px;
    padding: 6px 10px;
    font-size: .8rem;
    box-sizing: border-box;
    background: var(--bg-color,#fff);
    color: var(--text-color,#212529);
    cursor: pointer;
    outline: none;
    transition: border-color .15s;
}
.export-form-group input:focus,
.export-form-group select:focus { border-color: var(--primary-color,#4f46e5); }

.export-actions {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}
.export-btn-pdf {
    padding: 7px 18px; border-radius: 6px; cursor: pointer;
    border: 1px solid var(--border-color,#dee2e6);
    font-size: .8rem; font-weight: 600;
    background: transparent; color: var(--text-color,#212529);
    transition: border-color .15s, color .15s;
}
.export-btn-pdf:hover { border-color: var(--primary-color,#4f46e5); color: var(--primary-color,#4f46e5); }
.export-btn-excel {
    padding: 7px 18px; border-radius: 6px; cursor: pointer;
    border: 1px solid var(--border-color,#dee2e6);
    font-size: .8rem; font-weight: 600;
    background: transparent; color: var(--success-color,#16a34a);
    border-color: var(--success-color,#16a34a);
    transition: background .15s, color .15s;
}
.export-btn-excel:hover { background: var(--success-color,#16a34a); color: #fff; }
.export-note { font-size: .75rem; color: var(--link-color,#6b7280); margin-left: auto; }
</style>
@endpush
@endonce

{{-- ── Trigger Button ── --}}
<div class="export-trigger" onclick="document.getElementById('{{ $id }}').classList.add('show')">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459.636 459.636">
        <path d="M424.621 50.643H136.299c-19.307 0-35.015 15.707-35.015 35.014v52.272h41.669c12.94-31.165 53.868-39.785 78.182-15.461l73.448 73.448c18.737 18.736 18.741 49.064.001 67.802l-73.447 73.447c-24.303 24.307-65.232 15.735-78.184-15.458h-41.669v52.272c0 19.307 15.707 35.014 35.015 35.014h288.322c19.307 0 35.015-15.707 35.015-35.014V85.657c0-19.307-15.707-35.014-35.015-35.014zM171.254 303.266c0 14.182 17.221 21.362 27.281 11.3l73.449-73.449c6.241-6.241 6.242-16.359 0-22.6l-73.449-73.449c-10.038-10.043-27.281-2.903-27.281 11.3v13.522H15.981C7.155 169.891 0 177.046 0 185.872v87.891c0 8.826 7.155 15.981 15.981 15.981l155.273.001v13.521z"/>
    </svg>
    <span>Export</span>
</div>

{{-- ── Modal Overlay ── --}}
<div class="export-modal-overlay" id="{{ $id }}" onclick="if(event.target===this)this.classList.remove('show')">
    <div class="export-modal-box">

        {{-- Header --}}
        <div class="export-modal-head">
            <div>
                <h3>Export Laporan</h3>
                <p>Pilih filter lalu export dalam format yang diinginkan</p>
            </div>
            <button class="export-modal-close" onclick="document.getElementById('{{ $id }}').classList.remove('show')" type="button">✕</button>
        </div>

        {{-- Preset Periode --}}
        <div class="export-presets">
            <p>Preset Periode</p>
            <div class="export-preset-list" id="{{ $id }}-presets">
                <button class="export-preset-btn" data-preset="today"      type="button">Hari Ini</button>
                <button class="export-preset-btn" data-preset="this_week"  type="button">Minggu Ini</button>
                <button class="export-preset-btn" data-preset="this_month" type="button">Bulan Ini</button>
                <button class="export-preset-btn" data-preset="last_month" type="button">Bulan Lalu</button>
                <button class="export-preset-btn" data-preset="this_year"  type="button">Tahun Ini</button>
            </div>
        </div>

        {{-- Form Filter --}}
        <div class="export-form-grid">
            <div class="export-form-group">
                <label>Tanggal Mulai</label>
                <input type="date" id="{{ $id }}-start"/>
            </div>
            <div class="export-form-group">
                <label>Tanggal Akhir</label>
                <input type="date" id="{{ $id }}-end"/>
            </div>
            @if(count($branches))
            <div class="export-form-group">
                <label>Cabang</label>
                <select id="{{ $id }}-branch">
                    <option value="">Semua Cabang</option>
                    @foreach($branches as $branch)
                        <option value="{{ $branch['id'] }}">{{ $branch['name'] }}</option>
                    @endforeach
                </select>
            </div>
            @endif
            <div class="export-form-group">
                <label>Tampilkan per</label>
                <select id="{{ $id }}-groupby">
                    <option value="daily">Harian</option>
                    <option value="monthly">Bulanan</option>
                </select>
            </div>
        </div>

        {{-- Export Buttons --}}
        <div class="export-actions">
            <button class="export-btn-pdf"   type="button" onclick="doExport('{{ $id }}','pdf',   '{{ $pdfUrl }}')">Export PDF</button>
            <button class="export-btn-excel" type="button" onclick="doExport('{{ $id }}','excel', '{{ $excelUrl }}')">Export Excel</button>
            <span class="export-note">File akan ter-download otomatis</span>
        </div>

    </div>
</div>

@once
@push('scripts')
<script>
function doExport(id, type, baseUrl) {
    var start   = document.getElementById(id + '-start')?.value   || '';
    var end     = document.getElementById(id + '-end')?.value     || '';
    var branch  = document.getElementById(id + '-branch')?.value  || '';
    var groupby = document.getElementById(id + '-groupby')?.value || 'daily';
    var params  = new URLSearchParams();
    if (start)   params.set('start_date', start);
    if (end)     params.set('end_date',   end);
    if (branch)  params.set('branch_id',  branch);
    if (groupby) params.set('group_by',   groupby);
    window.open(baseUrl + (params.toString() ? '?' + params.toString() : ''), '_blank');
}

function exportSetPreset(id, preset) {
    var now   = new Date();
    var today = now.toISOString().split('T')[0];
    var map   = {
        today:      { start: today, end: today },
        this_week:  { start: (function(){ var d=new Date(now); d.setDate(d.getDate()-(d.getDay()||7)+1); return d.toISOString().split('T')[0]; })(), end: today },
        this_month: { start: now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0')+'-01', end: today },
        last_month: { start: (function(){ var d=new Date(now.getFullYear(),now.getMonth()-1,1); return d.toISOString().split('T')[0]; })(), end: (function(){ var d=new Date(now.getFullYear(),now.getMonth(),0); return d.toISOString().split('T')[0]; })() },
        this_year:  { start: now.getFullYear()+'-01-01', end: today },
    };
    if (!map[preset]) return;
    var s = document.getElementById(id+'-start'); if (s) s.value = map[preset].start;
    var e = document.getElementById(id+'-end');   if (e) e.value = map[preset].end;
}

document.querySelectorAll('[id$="-presets"] .export-preset-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var modalId = this.closest('.export-modal-overlay').id;
        exportSetPreset(modalId, this.dataset.preset);
    });
});

/* Init default date (bulan ini) */
document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.export-modal-overlay').forEach(function(modal){
        exportSetPreset(modal.id, 'this_month');
    });
});
</script>
@endpush
@endonce
`,
        example: false
    },

    {
        title: "filter",
        highlight: `
        @props([
    'id'      => 'filter-' . uniqid(),
    'title'   => 'Sort By',
    'name'    => 'sort',    //  {{-- query param name --}}
    'value'   => '',        //  {{-- current selected value --}}
    'filters' => [],        //  {{-- [['label'=>'A-Z','value'=>'name:asc']] or ['Ascending','Descending'] --}}
])

{{--
    Usage:
    <x-filter
        title="Sort By"
        name="sort"
        :value="request('sort', 'created_at:desc')"
        :filters="[
            ['label' => 'Newest',   'value' => 'created_at:desc'],
            ['label' => 'Oldest',   'value' => 'created_at:asc'],
            ['label' => 'Name A-Z', 'value' => 'name:asc'],
            ['label' => 'Name Z-A', 'value' => 'name:desc'],
        ]"
    />
--}}

@once
@push('styles')
<style>
.blade-filter-trigger {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    border: 1px solid var(--border-color, #dee2e6);
    border-radius: 4px;
    padding: 6px 16px;
    background: transparent;
    font-size: .875rem;
    font-weight: 500;
    color: var(--text-color, #212529);
    transition: border-color .15s, color .15s;
    white-space: nowrap;
}
.blade-filter-trigger:hover { border-color: var(--primary-color, #4f46e5); color: var(--primary-color, #4f46e5); }
.blade-filter-trigger svg { fill: currentColor; width: 14px; height: 14px; flex-shrink: 0; }

.blade-filter-overlay {
    display: none; position: fixed; inset: 0;
    background: rgba(33,37,41,.5);
    z-index: 200; align-items: center; justify-content: center;
}
.blade-filter-overlay.show { display: flex; }

.blade-filter-box {
    background: var(--bg-color, #fff);
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0,0,0,.18);
    padding: 24px;
    width: 90vw; max-width: 360px;
    max-height: 80vh; overflow-y: auto;
    box-sizing: border-box;
}
.blade-filter-head {
    display: flex; align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
}
.blade-filter-head h3 { font-size: 1rem; font-weight: 600; margin: 0; }
.blade-filter-close {
    cursor: pointer; width: 24px; height: 24px;
    border-radius: 50%;
    border: 2px solid var(--danger-color,#dc2626);
    color: var(--danger-color,#dc2626);
    display: flex; align-items: center; justify-content: center;
    font-size: .75rem; background: transparent;
    transition: background .15s, color .15s;
}
.blade-filter-close:hover { background: var(--danger-color,#dc2626); color: #fff; }

.blade-filter-item {
    display: block;
    padding: 9px 14px;
    border-radius: 6px;
    border: 2px solid transparent;
    cursor: pointer;
    font-size: .875rem;
    font-weight: 500;
    color: var(--link-color, #6b7280);
    background: var(--sidebar-color, #f5f6ff);
    margin-bottom: 6px;
    transition: border-color .15s, color .15s;
    text-decoration: none;
}
.blade-filter-item:hover,
.blade-filter-item.active {
    border-color: var(--primary-color, #4f46e5);
    color: var(--primary-color, #4f46e5);
}
</style>
@endpush
@endonce

@php
    $currentLabel = $title;
    foreach ($filters as $f) {
        $fVal = is_array($f) ? $f['value'] : $f;
        $fLbl = is_array($f) ? $f['label'] : $f;
        if ($fVal === $value) { $currentLabel = $fLbl; break; }
    }
@endphp

{{-- Trigger --}}
<div class="blade-filter-trigger" onclick="document.getElementById('{{ $id }}').classList.add('show')">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v1.172a3 3 0 0 1-.879 2.121l-5.828 5.828a1 1 0 0 0-.293.707v2.343a3 3 0 0 1-.879 2.121l-2.202 2.202C10.842 22.572 9 21.809 9 20.286v-5.457a1 1 0 0 0-.293-.707L2.879 8.293A3 3 0 0 1 2 6.172V5z"/>
    </svg>
    <span>{{ $currentLabel }}</span>
</div>

{{-- Modal --}}
<div class="blade-filter-overlay" id="{{ $id }}" onclick="if(event.target===this)this.classList.remove('show')">
    <div class="blade-filter-box">
        <div class="blade-filter-head">
            <h3>{{ $title }}</h3>
            <button class="blade-filter-close" type="button" onclick="document.getElementById('{{ $id }}').classList.remove('show')">✕</button>
        </div>

        @foreach($filters as $filter)
            @php
                $fVal = is_array($filter) ? $filter['value'] : $filter;
                $fLbl = is_array($filter) ? $filter['label'] : $filter;
                $isActive = $fVal === $value;
            @endphp
            <a href="#"
               class="blade-filter-item {{ $isActive ? 'active' : '' }}"
               onclick="bladeFilterSelect('{{ $id }}', '{{ $name }}', {{ json_encode($fVal) }}); return false;">
                {{ $fLbl }}
            </a>
        @endforeach
    </div>
</div>

@once
@push('scripts')
<script>
function bladeFilterSelect(modalId, paramName, value) {
    document.getElementById(modalId).classList.remove('show');
    var url = new URL(window.location.href);
    url.searchParams.set(paramName, value);
    url.searchParams.set('page', '1');
    window.location.href = url.toString();
}
</script>
@endpush
@endonce
`,
        example: false
    },

    {
        title: "form-example",
        highlight: `
        @props([
    'action' => '',
    'method' => 'POST',
    'title'  => '',
])

{{--
    Usage:
    <x-form action="/login" method="POST" title="Login">
        ... fields ...
        <x-slot name="footer">
            <x-button variant="primary" type="submit">Submit</x-button>
        </x-slot>
    </x-form>
--}}

<div class="display-grid">
    <form class="card-wrapper replace-shadow-with-border"
          action="{{ $action }}"
          method="{{ strtoupper($method) === 'GET' ? 'GET' : 'POST' }}">

        @if(strtoupper($method) !== 'GET' && strtoupper($method) !== 'POST')
            @method($method)
        @endif

        @csrf

        @if($title)
            <h3 class="text-center">{{ $title }}</h3>
        @endif

        {{ $slot }}

        @isset($footer)
            {{ $footer }}
        @endisset
    </form>
</div>
`,
        example: false
    },

    {
        title: "form-field",
        highlight: `
        @props([
    'name'        => '',
    'label'       => '',
    'type'        => 'text',    // {{-- text|password|email|date|file|select|textarea|radio|checkbox --}}
    'placeholder' => '',
    'error'       => '',
    'style'       => 'default', // {{-- default | google | fieldset --}}
    'options'     => [],        // {{-- for type=select|radio|checkbox: [['value'=>'a','label'=>'A']] --}}
    'value'       => '',
    'checked'     => false,
    'rows'        => 5,
    'accept'      => '',
])

{{--
    Usage:
    <x-form-field name="email" label="Email" type="email" style="google"/>
    <x-form-field name="role"  label="Role"  type="select" :options="[
        ['value'=>'admin','label'=>'Admin'],
        ['value'=>'user', 'label'=>'User'],
    ]"/>
    <x-form-field name="agree" label="I agree to the terms" type="checkbox"/>
--}}

<div class="max-width-500 display-grid">
    @if($style === 'fieldset')
        <fieldset class="ps-center">
            <legend>{{ $label }}</legend>
            <input type="{{ $type }}" name="{{ $name }}" id="{{ $name }}"
                   value="{{ old($name, $value) }}" placeholder="{{ $placeholder }}"/>
            <p class="text-error-msg">{{ $error }}</p>
        </fieldset>

    @elseif($style === 'google')
        <div class="form-like-google">
            <input class="form-like-google-input"
                   name="{{ $name }}" type="{{ $type }}"
                   id="{{ $name }}" placeholder=" "
                   value="{{ old($name, $value) }}"/>
            <label class="form-like-google-label" for="{{ $name }}">{{ $label }}</label>
        </div>
        <p class="text-error-msg">{{ $error }}</p>

    @elseif($type === 'select')
        <label for="{{ $name }}">{{ $label }}</label>
        <select name="{{ $name }}" id="{{ $name }}">
            <option value="" disabled>-- Pilih --</option>
            @foreach($options as $opt)
                <option value="{{ $opt['value'] }}"
                    {{ old($name, $value) == $opt['value'] ? 'selected' : '' }}>
                    {{ $opt['label'] }}
                </option>
            @endforeach
        </select>
        <p class="text-error-msg">{{ $error }}</p>

    @elseif($type === 'textarea')
        <label for="{{ $name }}">{{ $label }}</label>
        <textarea name="{{ $name }}" id="{{ $name }}" rows="{{ $rows }}"
                  placeholder="{{ $placeholder }}">{{ old($name, $value) }}</textarea>
        <p class="text-error-msg">{{ $error }}</p>

    @elseif($type === 'radio')
        <span style="font-weight:600;font-size:.875rem;text-transform:capitalize;">{{ $label }}</span>
        <div style="display:flex;flex-wrap:wrap;gap:16px;margin-top:4px;">
            @foreach($options as $opt)
                <label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:.875rem;">
                    <input type="radio" name="{{ $name }}" value="{{ $opt['value'] }}"
                           {{ old($name, $value) == $opt['value'] ? 'checked' : '' }}>
                    {{ $opt['label'] }}
                </label>
            @endforeach
        </div>
        <p class="text-error-msg">{{ $error }}</p>

    @elseif($type === 'checkbox' && count($options))
        <span style="font-weight:600;font-size:.875rem;text-transform:capitalize;">{{ $label }}</span>
        <div style="display:flex;flex-wrap:wrap;gap:16px;margin-top:4px;">
            @foreach($options as $opt)
                <label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:.875rem;">
                    @php
                        $oldVal = old($name, []);
                        $isChecked = is_array($oldVal) ? in_array($opt['value'], $oldVal) : ($opt['value'] == $value);
                    @endphp
                    <input type="checkbox" name="{{ $name }}[]" value="{{ $opt['value'] }}"
                           {{ $isChecked ? 'checked' : '' }}>
                    {{ $opt['label'] }}
                </label>
            @endforeach
        </div>
        <p class="text-error-msg">{{ $error }}</p>

    @elseif($type === 'checkbox')
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:.875rem;text-transform:capitalize;">
            <input type="checkbox" name="{{ $name }}" value="1"
                   {{ old($name, $checked) ? 'checked' : '' }}>
            {{ $label }}
        </label>
        <p class="text-error-msg">{{ $error }}</p>

    @elseif($type === 'file')
        <label for="{{ $name }}">{{ $label }}</label>
        <input type="file" name="{{ $name }}" id="{{ $name }}"
               accept="{{ $accept }}"/>
        <p class="text-error-msg">{{ $error }}</p>

    @else
        <label for="{{ $name }}">{{ $label }}</label>
        <input type="{{ $type }}" name="{{ $name }}" id="{{ $name }}"
               value="{{ old($name, $value) }}" placeholder="{{ $placeholder }}"/>
        <p class="text-error-msg">{{ $error }}</p>
    @endif
</div>
`,
        example: false
    },

    {
        title: "form-image-cropper",
        highlight: `
        @props([
    'name'  => 'image',
    'label' => 'Image',
    'error' => '',
])

{{--
    Usage:
    <x-form-image-cropper name="avatar" label="Foto Profil" :error="$errors->first('avatar')"/>

    Di controller:
    if ($request->hasFile('avatar')) {
        $croppedBase64 = $request->input('avatar');  // data:image/jpeg;base64,...
        // decode dan simpan:
        $data = base64_decode(preg_replace('#^data:image/\\w+;base64,#i', '', $croppedBase64));
        Storage::put('avatars/' . uniqid() . '.jpg', $data);
    }
--}}

@php $uid = 'imgcrop-' . uniqid(); @endphp

@once
@push('styles')
<style>
.imgcrop-wrapper { display: grid; gap: 6px; width: 100%; max-width: 500px; }
.imgcrop-label   { font-weight: 600; font-size: .875rem; text-transform: capitalize; color: var(--text-color,#212529); }
.imgcrop-error   { color: var(--danger-color,#dc2626); font-size: .75rem; font-style: italic; }

.imgcrop-dropzone {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 4px; border: 2px dashed var(--border-color,#dee2e6); border-radius: 6px;
    padding: 32px 16px; cursor: pointer; transition: border-color .15s;
}
.imgcrop-dropzone:hover { border-color: var(--primary-color,#4f46e5); }
.imgcrop-dropzone-icon { font-size: 1.5rem; }
.imgcrop-dropzone-text { font-size: .875rem; font-weight: 600; color: var(--text-color,#212529); }
.imgcrop-dropzone-hint { font-size: .75rem; color: var(--link-color,#6b7280); font-style: italic; }

.imgcrop-preview-row { display: flex; align-items: center; gap: 12px; }
.imgcrop-preview-img { max-width: 120px; max-height: 120px; object-fit: cover; border-radius: 6px; border: 1px solid var(--border-color,#dee2e6); }
.imgcrop-reset-btn { font-size: .8rem; color: var(--danger-color,#dc2626); text-decoration: underline; cursor: pointer; background: none; border: none; padding: 0; }

.imgcrop-aspect-row { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 6px; }
.imgcrop-aspect-btn {
    padding: 2px 10px; border-radius: 4px; border: 1px solid var(--border-color,#dee2e6);
    font-size: .75rem; cursor: pointer; background: transparent;
    color: var(--text-color,#212529); transition: background .15s, color .15s, border-color .15s;
}
.imgcrop-aspect-btn.active,
.imgcrop-aspect-btn:hover { background: var(--primary-color,#4f46e5); color: #fff; border-color: var(--primary-color,#4f46e5); }

.imgcrop-canvas-area {
    position: relative; overflow: hidden; border-radius: 6px;
    background: #000; user-select: none; line-height: 0;
}
.imgcrop-source { display: block; max-height: 300px; width: 100%; object-fit: contain; opacity: .5; }

.imgcrop-overlay {
    position: absolute;
    border: 2px solid #fff;
    box-shadow: 0 0 0 9999px rgba(0,0,0,.45);
    cursor: move; box-sizing: border-box;
}
.imgcrop-grid {
    position: absolute; background: rgba(255,255,255,.3); pointer-events: none;
}
.imgcrop-handle {
    position: absolute; width: 10px; height: 10px;
    background: #fff; border: 2px solid rgba(0,0,0,.35);
    border-radius: 2px; box-sizing: border-box;
}
.imgcrop-handle[data-h="nw"]{ top:-5px;  left:-5px;              cursor:nw-resize }
.imgcrop-handle[data-h="n"] { top:-5px;  left:calc(50% - 5px);   cursor:n-resize  }
.imgcrop-handle[data-h="ne"]{ top:-5px;  right:-5px;              cursor:ne-resize }
.imgcrop-handle[data-h="e"] { top:calc(50% - 5px); right:-5px;   cursor:e-resize  }
.imgcrop-handle[data-h="se"]{ bottom:-5px; right:-5px;            cursor:se-resize }
.imgcrop-handle[data-h="s"] { bottom:-5px; left:calc(50% - 5px); cursor:s-resize  }
.imgcrop-handle[data-h="sw"]{ bottom:-5px; left:-5px;             cursor:sw-resize }
.imgcrop-handle[data-h="w"] { top:calc(50% - 5px); left:-5px;    cursor:w-resize  }

.imgcrop-action-row { display: flex; gap: 8px; margin-top: 6px; }
.imgcrop-confirm-btn {
    flex: 1; padding: 8px; border: none; border-radius: 6px;
    background: var(--primary-color,#4f46e5); color: #fff;
    cursor: pointer; font-size: .875rem; font-weight: 600;
    transition: opacity .15s;
}
.imgcrop-confirm-btn:hover { opacity: .85; }
.imgcrop-cancel-btn {
    flex: 1; padding: 8px; border: 1px solid var(--border-color,#dee2e6);
    border-radius: 6px; background: transparent;
    color: var(--text-color,#212529); cursor: pointer; font-size: .875rem;
    transition: background .15s;
}
.imgcrop-cancel-btn:hover { background: var(--sidebar-color,#f5f6ff); }
</style>
@endpush
@endonce

<div class="imgcrop-wrapper" id="{{ $uid }}-wrapper">
    <span class="imgcrop-label">{{ $label }}</span>

    {{-- Hidden inputs: file untuk POST biasa, base64 untuk hasil crop --}}
    <input type="hidden" name="{{ $name }}" id="{{ $uid }}-hidden">

    {{-- Dropzone --}}
    <label class="imgcrop-dropzone" id="{{ $uid }}-dropzone">
        <span class="imgcrop-dropzone-icon">⬆</span>
        <span class="imgcrop-dropzone-text">Klik untuk pilih foto</span>
        <span class="imgcrop-dropzone-hint">JPG, PNG, WEBP</span>
        <input type="file" accept="image/*" style="display:none" id="{{ $uid }}-file">
    </label>

    {{-- Crop UI --}}
    <div style="display:none" id="{{ $uid }}-cropui">
        <div class="imgcrop-aspect-row" id="{{ $uid }}-aspects">
            <button class="imgcrop-aspect-btn active" data-ratio=""       type="button">⊞ Free</button>
            <button class="imgcrop-aspect-btn"        data-ratio="1"      type="button">□ Square</button>
            <button class="imgcrop-aspect-btn"        data-ratio="1.7778" type="button">▬ 16:9</button>
            <button class="imgcrop-aspect-btn"        data-ratio="0.5625" type="button">▮ 9:16</button>
            <button class="imgcrop-aspect-btn"        data-ratio="1.3333" type="button">⬜ 4:3</button>
        </div>
        <div class="imgcrop-canvas-area">
            <img id="{{ $uid }}-srcimg" class="imgcrop-source" draggable="false">
            <div class="imgcrop-overlay" id="{{ $uid }}-overlay">
                <div class="imgcrop-handle" data-h="nw"></div>
                <div class="imgcrop-handle" data-h="n"></div>
                <div class="imgcrop-handle" data-h="ne"></div>
                <div class="imgcrop-handle" data-h="e"></div>
                <div class="imgcrop-handle" data-h="se"></div>
                <div class="imgcrop-handle" data-h="s"></div>
                <div class="imgcrop-handle" data-h="sw"></div>
                <div class="imgcrop-handle" data-h="w"></div>
                <div class="imgcrop-grid" style="top:33.33%;left:0;width:100%;height:1px"></div>
                <div class="imgcrop-grid" style="top:66.66%;left:0;width:100%;height:1px"></div>
                <div class="imgcrop-grid" style="left:33.33%;top:0;height:100%;width:1px"></div>
                <div class="imgcrop-grid" style="left:66.66%;top:0;height:100%;width:1px"></div>
            </div>
        </div>
        <div class="imgcrop-action-row">
            <button class="imgcrop-confirm-btn" type="button" id="{{ $uid }}-confirm">✓ Konfirmasi</button>
            <button class="imgcrop-cancel-btn"  type="button" id="{{ $uid }}-cancel">✕ Batal</button>
        </div>
    </div>

    {{-- Preview setelah crop --}}
    <div style="display:none" id="{{ $uid }}-preview">
        <div class="imgcrop-preview-row">
            <img class="imgcrop-preview-img" id="{{ $uid }}-previewimg" src="" alt="preview">
            <button class="imgcrop-reset-btn" type="button" id="{{ $uid }}-reset">↺ Ganti foto</button>
        </div>
    </div>

    @if($error)
        <p class="imgcrop-error">{{ $error }}</p>
    @endif
</div>

@push('scripts')
<script>
(function(){
    var uid       = '{{ $uid }}';
    var fileInput = document.getElementById(uid+'-file');
    var dropzone  = document.getElementById(uid+'-dropzone');
    var cropui    = document.getElementById(uid+'-cropui');
    var preview   = document.getElementById(uid+'-preview');
    var srcImg    = document.getElementById(uid+'-srcimg');
    var overlay   = document.getElementById(uid+'-overlay');
    var hidden    = document.getElementById(uid+'-hidden');
    var prevImg   = document.getElementById(uid+'-previewimg');
    var aspects   = document.getElementById(uid+'-aspects');

    var crop    = { x:0, y:0, w:0, h:0 };
    var ratio   = null;

    function show(el){ el.style.display=''; }
    function hide(el){ el.style.display='none'; }

    function applyOverlay(){
        overlay.style.left   = crop.x+'px';
        overlay.style.top    = crop.y+'px';
        overlay.style.width  = crop.w+'px';
        overlay.style.height = crop.h+'px';
    }

    function initCrop(r){
        var iw = srcImg.clientWidth, ih = srcImg.clientHeight;
        if (!r) { crop={x:iw*.1,y:ih*.1,w:iw*.8,h:ih*.8}; }
        else {
            var cw=iw*.8, ch=cw/r;
            if(ch>ih*.8){ch=ih*.8;cw=ch*r;}
            crop={x:(iw-cw)/2,y:(ih-ch)/2,w:cw,h:ch};
        }
        applyOverlay();
    }

    aspects.querySelectorAll('.imgcrop-aspect-btn').forEach(function(btn){
        btn.addEventListener('click', function(){
            aspects.querySelectorAll('.imgcrop-aspect-btn').forEach(function(b){b.classList.remove('active');});
            this.classList.add('active');
            ratio = this.dataset.ratio ? parseFloat(this.dataset.ratio) : null;
            initCrop(ratio);
        });
    });

    fileInput.addEventListener('change', function(){
        var file = this.files[0]; if(!file) return;
        var reader = new FileReader();
        reader.onload = function(e){
            srcImg.onload = function(){ initCrop(ratio); };
            srcImg.src = e.target.result;
            hide(dropzone); hide(preview);
            show(cropui);
        };
        reader.readAsDataURL(file);
    });

    /* Drag to move */
    var dragState = null;
    overlay.addEventListener('mousedown', function(e){
        if(e.target!==overlay && !e.target.classList.contains('imgcrop-grid')) return;
        e.preventDefault();
        dragState={mx:e.clientX,my:e.clientY,cx:crop.x,cy:crop.y};
        window.addEventListener('mousemove',onDrag);
        window.addEventListener('mouseup',stopDrag);
    });
    function onDrag(e){
        if(!dragState) return;
        var dx=e.clientX-dragState.mx, dy=e.clientY-dragState.my;
        crop.x=Math.min(Math.max(dragState.cx+dx,0),srcImg.clientWidth-crop.w);
        crop.y=Math.min(Math.max(dragState.cy+dy,0),srcImg.clientHeight-crop.h);
        applyOverlay();
    }
    function stopDrag(){ dragState=null; window.removeEventListener('mousemove',onDrag); window.removeEventListener('mouseup',stopDrag); }

    /* Resize handles */
    var resizeState = null;
    overlay.querySelectorAll('.imgcrop-handle').forEach(function(h){
        h.addEventListener('mousedown', function(e){
            e.preventDefault(); e.stopPropagation();
            resizeState={h:this.dataset.h,mx:e.clientX,my:e.clientY,c:{...crop}};
            window.addEventListener('mousemove',onResize);
            window.addEventListener('mouseup',stopResize);
        });
    });
    function onResize(e){
        if(!resizeState) return;
        var rs=resizeState,dx=e.clientX-rs.mx,dy=e.clientY-rs.my,MIN=30;
        var x=rs.c.x,y=rs.c.y,w=rs.c.w,h=rs.c.h;
        if(rs.h.includes('e')) w=Math.max(MIN,rs.c.w+dx);
        if(rs.h.includes('s')) h=Math.max(MIN,rs.c.h+dy);
        if(rs.h.includes('w')){ w=Math.max(MIN,rs.c.w-dx); x=rs.c.x+rs.c.w-w; }
        if(rs.h.includes('n')){ h=Math.max(MIN,rs.c.h-dy); y=rs.c.y+rs.c.h-h; }
        if(ratio){
            if(rs.h.includes('e')||rs.h.includes('w')) h=w/ratio;
            else w=h*ratio;
        }
        var iw=srcImg.clientWidth,ih=srcImg.clientHeight;
        x=Math.max(0,Math.min(x,iw-MIN));
        y=Math.max(0,Math.min(y,ih-MIN));
        w=Math.min(w,iw-x);
        h=Math.min(h,ih-y);
        crop={x:x,y:y,w:w,h:h};
        applyOverlay();
    }
    function stopResize(){ resizeState=null; window.removeEventListener('mousemove',onResize); window.removeEventListener('mouseup',stopResize); }

    /* Confirm crop → canvas → base64 → hidden input */
    document.getElementById(uid+'-confirm').addEventListener('click', function(){
        var scaleX=srcImg.naturalWidth/srcImg.clientWidth;
        var scaleY=srcImg.naturalHeight/srcImg.clientHeight;
        var canvas=document.createElement('canvas');
        canvas.width=crop.w*scaleX; canvas.height=crop.h*scaleY;
        canvas.getContext('2d').drawImage(srcImg,crop.x*scaleX,crop.y*scaleY,crop.w*scaleX,crop.h*scaleY,0,0,canvas.width,canvas.height);
        var b64=canvas.toDataURL('image/jpeg',0.9);
        hidden.value=b64;
        prevImg.src=b64;
        hide(cropui); hide(dropzone);
        show(preview);
    });

    /* Cancel crop */
    document.getElementById(uid+'-cancel').addEventListener('click', function(){
        hide(cropui); show(dropzone);
        srcImg.src=''; hidden.value=''; fileInput.value='';
    });

    /* Reset to upload new */
    document.getElementById(uid+'-reset').addEventListener('click', function(){
        hide(preview); show(dropzone);
        srcImg.src=''; hidden.value=''; fileInput.value='';
    });
})();
</script>
@endpush
`,
        example: false
    },

    {
        title: "image",
        highlight: `
        @props([
    'src'     => '',
    'alt'     => '',
    'rounded' => false,
    'class'   => '',
])

{{--
    Usage:
    <x-image src="/images/photo.jpg" alt="Profile photo" :rounded="true"/>
--}}

<div class="picture-default {{ $rounded ? 'rounded' : '' }} {{ $class }}">
    <img src="{{ $src }}" alt="{{ $alt }}">
</div>
`,
        html: `<div class="picture-default rounded">
                    <img src="" alt="">
                </div>`,
        example: true
    },

    {
        title: "loading",
        highlight: `
        @props([
    'type'   => 'spinner',  // {{-- spinner | bar | pulse --}}
    'width'  => '',
    'height' => '',
])

{{--
    Usage:
    <x-loading type="spinner"/>
    <x-loading type="bar"/>
    <x-loading type="pulse" width="111px" height="111px"/>
--}}

@if($type === 'spinner')
    <div class="loading-spinner"></div>

@elseif($type === 'bar')
    <div class="loading-bar max-width-500">
        <div class="loading-bar-progress with-animation-progress"></div>
    </div>

@elseif($type === 'pulse')
    <div class="loading-pulse"
         @if($width || $height)
             style="{{ $width ? "width:{$width};" : '' }}{{ $height ? "height:{$height};" : '' }} border-radius: 12px"
         @endif
    ></div>
@endif
`,
        html: `
                <div class="loading-spinner"></div>
                <br />
                <div class="loading-bar max-width-500">
                    <div class="loading-bar-progress with-animation-progress"></div>
                </div>
                <br />
                <div class="loading-pulse" style="width: 111px; height: 111px; border-radius: 12px"></div>`,
        example: true
    },

    {
        title: "modal",
        highlight: `
        @props([
    'id'    => 'modal-' . uniqid(),
    'title' => 'Modal Title',
])

{{--
    Usage:
    <x-modal id="confirm-delete" title="Confirm Delete">
        <x-slot name="content">
            <p>Are you sure you want to delete this?</p>
        </x-slot>
        <x-slot name="footer">
            <x-button variant="danger">Yes, Delete</x-button>
            <x-button variant="primary" style="outline">Cancel</x-button>
        </x-slot>
    </x-modal>

    Trigger from anywhere:
    <div class="button btn-primary" onclick="toggleModal('confirm-delete')">Open</div>
--}}

<div class="modal hide" id="{{ $id }}">
    <div class="modal-box">
        <div class="modal-header">
            <p>{{ $title }}</p>
            <div class="badge-button-close" onclick="toggleModal('{{ $id }}')">
                <svg xmlns="http://www.w3.org/2000/svg" width="35.52" height="35.52"
                     viewBox="0 0 27 27" shape-rendering="geometricPrecision"
                     image-rendering="optimizeQuality" fill-rule="evenodd">
                    <path d="M8 1l5 6 6-6c2-1 5-1 6 0 2 2 2 5 0 7l-5 5 5 6c2 2 2 5 0 6-1 2-4
                             2-6 0l-6-5-5 5c-2 2-5 2-7 0-1-1-1-4 0-6l6-6-6-5C0 6 0 3 1 1c2-1
                             5-1 7 0z"/>
                </svg>
            </div>
        </div>

        <div class="modal-content">
            {{ $content ?? $slot }}
        </div>

        @isset($footer)
            <div class="modal-footer">
                {{ $footer }}
            </div>
        @endisset
    </div>
</div>

@once
    @push('scripts')
    <script>
        function toggleModal(id) {
            const modal = document.getElementById(id);
            if (modal) modal.classList.toggle('hide');
        }
    </script>
    @endpush
@endonce
`,
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
        title: "no-data",
        highlight: `
        @props([
    'message' => 'No Data',
])

{{--
    Usage:
    <x-no-data/>
    <x-no-data message="Belum ada produk"/>
--}}

@once
@push('styles')
<style>
.blade-no-data {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
}
.blade-no-data svg {
    max-width: 50vw;
    max-height: 325px;
}
.blade-no-data-text {
    text-align: center;
    margin-top: 1rem;
    font-weight: bold;
    font-size: 1.1rem;
    color: var(--text-color, #212529);
}
</style>
@endpush
@endonce

<div class="blade-no-data">
    <svg xmlns="http://www.w3.org/2000/svg" width="647.63626" height="632.17383" viewBox="0 0 647.63626 632.17383"
         xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
        <path d="M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z"
              transform="translate(-276.18187 -133.91309)" fill="var(--sidebar-color,#f5f6ff)"/>
        <path d="M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z"
              transform="translate(-276.18187 -133.91309)" fill="var(--primary-color,#4f46e5)"/>
        <path d="M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z"
              transform="translate(-276.18187 -133.91309)" fill="var(--primary-color,#4f46e5)"/>
        <circle cx="190.15351" cy="24.95465" r="20" fill="var(--primary-color,#4f46e5)"/>
        <circle cx="190.15351" cy="24.95465" r="12.66462" fill="var(--bg-color,#fff)"/>
        <path d="M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z"
              transform="translate(-276.18187 -133.91309)" fill="var(--sidebar-color,#f5f6ff)"/>
        <path d="M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z"
              transform="translate(-276.18187 -133.91309)" fill="var(--primary-color,#4f46e5)"/>
        <path d="M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z"
              transform="translate(-276.18187 -133.91309)" fill="var(--primary-color,#4f46e5)"/>
        <circle cx="433.63626" cy="105.17383" r="20" fill="var(--primary-color,#4f46e5)"/>
        <circle cx="433.63626" cy="105.17383" r="12.18187" fill="var(--bg-color,#fff)"/>
    </svg>
    <p class="blade-no-data-text">{{ $message }}</p>
</div>
`,
        example: false
    },

    {
        title: "pagination",
        highlight: `
        @props([
    'paginator'    => null,    // {{-- Laravel LengthAwarePaginator instance --}}
    'perPageKey'   => 'per_page',
    'perPageOpts'  => [5, 10, 15],
    'currentPage'  => 1,
    'lastPage'     => 1,
])

{{--
    Usage (with Eloquent paginator):
    <x-pagination :paginator="$users"/>

    Usage (manual):
    <x-pagination :current-page="3" :last-page="10" :per-page-opts="[10, 25, 50]"/>
--}}

@php
    $current  = $paginator ? $paginator->currentPage() : $currentPage;
    $last     = $paginator ? $paginator->lastPage()    : $lastPage;
    $prev     = max(1, $current - 1);
    $next     = min($last, $current + 1);
    $window   = range(max(1, $current - 1), min($last, $current + 1));
@endphp

<div class="flex-aic-jcb gap-x">
    <div class="pagination">
        <div class="pagination-elements">

            {{-- Prev --}}
            @if($paginator)
                <a href="{{ $paginator->previousPageUrl() ?? '#' }}"
                   class="pagination-item {{ $current <= 1 ? 'disabled' : '' }}">&lt;</a>
            @else
                <div class="pagination-item {{ $current <= 1 ? 'disabled' : '' }}">&lt;</div>
            @endif

            {{-- Page numbers --}}
            @foreach($window as $page)
                @if($paginator)
                    <a href="{{ $paginator->url($page) }}"
                       class="pagination-item {{ $page === $current ? 'active' : '' }}">
                        {{ $page }}
                    </a>
                @else
                    <div class="pagination-item {{ $page === $current ? 'active' : '' }}">
                        {{ $page }}
                    </div>
                @endif
            @endforeach

            {{-- Next --}}
            @if($paginator)
                <a href="{{ $paginator->nextPageUrl() ?? '#' }}"
                   class="pagination-item {{ $current >= $last ? 'disabled' : '' }}">&gt;</a>
            @else
                <div class="pagination-item {{ $current >= $last ? 'disabled' : '' }}">&gt;</div>
            @endif

        </div>
    </div>

    <div class="pagination-per-page">
        <span>Per Page : </span>
        <select onchange="window.location.href = updateQueryParam('{{ $perPageKey }}', this.value)">
            @foreach($perPageOpts as $opt)
                <option {{ ($paginator ? $paginator->perPage() : 10) == $opt ? 'selected' : '' }}>
                    {{ $opt }}
                </option>
            @endforeach
        </select>
    </div>
</div>

@once
    @push('scripts')
    <script>
        function updateQueryParam(key, value) {
            const url = new URL(window.location.href);
            url.searchParams.set(key, value);
            url.searchParams.set('page', 1);
            return url.toString();
        }
    </script>
    @endpush
@endonce
`,
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
        title: "section-title",
        highlight: `
        @props([
    'text' => 'Title',
])

{{--
    Usage:
    <x-section-title text="Dashboard"/>
    <x-section-title text="Daftar Produk"/>
--}}

@once
@push('styles')
<style>
.blade-section-title {
    text-transform: capitalize;
    font-size: var(--x, 1.5rem);
    font-family: 'Medium', sans-serif;
    margin-bottom: var(--m, 1rem);
    color: var(--text-color, #212529);
}
.blade-section-title::first-letter {
    background-color: var(--primary-color, #4f46e5);
    color: #fff;
    padding: 2px var(--xxs, .475rem);
    border-radius: var(--radius-s, .275rem);
}
</style>
@endpush
@endonce

<h1 class="blade-section-title">{{ $text }}</h1>
`,
        example: false
    },

    {
        title: "stepper",
        highlight: `
        @props([
    'steps'   => [],  //  {{-- [['label'=>'Resume'],['label'=>'Email'],['label'=>'Salary']] --}}
    'current' => 1,   //  {{-- 1-based active step index --}}
])

{{--
    Usage:
    <x-stepper :steps="[
        ['label' => 'Resume'],
        ['label' => 'Email'],
        ['label' => 'Salary'],
    ]" :current="2"/>
--}}

<div class="display-grid">
    <div class="stepper">
        @foreach($steps as $index => $step)
            @php $stepNumber = $index + 1; @endphp

            <div class="stepper-item">
                <div class="stepper-key {{ $stepNumber <= $current ? 'active' : '' }}">
                    {{ $stepNumber }}
                </div>
                <div class="stepper-value">{{ $step['label'] }}</div>
            </div>

            @if(!$loop->last)
                <div class="stepper-divider"></div>
            @endif
        @endforeach
    </div>
</div>
`,
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
        title: "table",
        highlight: `
        @props([
    'headers' => [],   // {{-- ['No', 'Title', 'Actions'] --}}
])

{{--
    Usage:
    <x-table :headers="['No', 'Name', 'Email', 'Actions']">
        <tr>
            <td>1.</td>
            <td class="fit">John Doe</td>
            <td>john@example.com</td>
            <td class="action">
                <a href="/users/1" class="text-primary">View</a>
                <a href="/users/1/edit" class="text-success">Edit</a>
                <form method="POST" action="/users/1">
                    @csrf @method('DELETE')
                    <button class="button-clear-style text-warning">Delete</button>
                </form>
            </td>
        </tr>
    </x-table>
--}}

<div class="display-grid">
    <div class="table-content">
        <table>
            <thead>
                <tr>
                    @foreach($headers as $header)
                        <th>{{ $header }}</th>
                    @endforeach
                </tr>
            </thead>
            <tbody>
                {{ $slot }}
            </tbody>
        </table>
    </div>
</div>
`,
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
        title: "timeline",
        highlight: `
        @props([
    'items'   => [],  //  {{-- [['title'=>'...','desc'=>'...','time'=>'...','done'=>true]] --}}
])

{{--
    Usage:
    <x-timeline :items="[
        ['title' => 'Project Started',  'desc' => 'Kicked off',    'time' => '2 hours ago', 'done' => true],
        ['title' => 'Components Added', 'desc' => 'All done',      'time' => '1 hour ago',  'done' => true],
        ['title' => 'Deploy to Prod',   'desc' => 'Ready to ship', 'time' => 'Upcoming',    'done' => false],
    ]"/>
--}}

<div class="timeline">
    @foreach($items as $index => $item)
        @php $step = $index + 1; @endphp

        <div>
            <span class="timeline-key {{ !empty($item['done']) ? 'active' : '' }}">
                {{ $step }}
            </span>
            @if(!$loop->last)
                <div class="timeline-divider {{ !empty($item['done']) ? 'active' : '' }}"></div>
            @endif
        </div>

        <div class="timeline-content max-width-400">
            <div class="timeline-content-title">{{ $item['title'] }}</div>
            <div class="timeline-content-desc">{{ $item['desc'] ?? '' }}</div>
            <div class="timeline-content-time">{{ $item['time'] ?? '' }}</div>
        </div>
    @endforeach
</div>
`,
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
        title: "toast",
        highlight: `
        @props([
    'id'      => 'toast-' . uniqid(),
    'variant' => 'primary', //  {{-- primary | warning | success | danger --}}
    'message' => 'Message',
    'auto'    => false,     //  {{-- auto-show on page load --}}
    'delay'   => 3000,      //  {{-- ms before auto-hide --}}
])

{{--
    Usage:
    <x-toast id="save-toast" variant="success" message="Saved successfully!" :auto="true"/>

    Trigger manually:
    <div class="button btn-primary" onclick="showToast('save-toast')">Show Toast</div>

    Flash message pattern:
    @if(session('success'))
        <x-toast id="flash-toast" variant="success" message="{{ session('success') }}" :auto="true"/>
    @endif
--}}

<div class="toast display-none" id="{{ $id }}">
    <div class="bg-{{ $variant }}">
        <p>{{ $message }}</p>
        <div class="toast-button-close" onclick="hideToast('{{ $id }}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="35.52" height="35.52"
                 viewBox="0 0 27 27" shape-rendering="geometricPrecision"
                 image-rendering="optimizeQuality" fill-rule="evenodd">
                <path d="M8 1l5 6 6-6c2-1 5-1 6 0 2 2 2 5 0 7l-5 5 5 6c2 2 2 5 0 6-1 2-4
                         2-6 0l-6-5-5 5c-2 2-5 2-7 0-1-1-1-4 0-6l6-6-6-5C0 6 0 3 1 1c2-1
                         5-1 7 0z"/>
            </svg>
        </div>
    </div>
</div>

@once
    @push('scripts')
    <script>
        function showToast(id, delay) {
            const toast = document.getElementById(id);
            if (!toast) return;
            toast.classList.remove('display-none');
            if (delay) setTimeout(() => hideToast(id), delay);
        }
        function hideToast(id) {
            const toast = document.getElementById(id);
            if (toast) toast.classList.add('display-none');
        }
    </script>
    @endpush
@endonce

@if($auto)
    @push('scripts')
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            showToast('{{ $id }}', {{ $delay }});
        });
    </script>
    @endpush
@endif
`,
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
        title: "toggle",
        highlight: `
        @props([
    'name'    => '',
    'label'   => '',
    'checked' => false,
    'value'   => '1',
])

{{--
    Usage:
    <x-toggle name="notifications" label="Enable notifications" :checked="true"/>
    <x-toggle name="dark_mode" label="Dark mode"/>
--}}

<div class="flex-aic-jcs gap-m">
    <label class="toggle">
        <input type="checkbox"
               class="toggle-check"
               name="{{ $name }}"
               value="{{ $value }}"
               {{ $checked ? 'checked' : '' }}>
        <span class="toggle-slider"></span>
    </label>
    @if($label)
        <span class="toggle-status">{{ $label }}</span>
    @endif
</div>
`,
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
        title: "tooltip",
        highlight: `
        @props([
    'text' => '',
])

{{--
    Usage:
    <x-tooltip text="This is a tooltip">
        Hover over me
    </x-tooltip>
--}}

<span class="cursor-pointer" data-tooltip="{{ $text }}">
    {{ $slot }}
</span>
`,
        html: `
                <div class="flex-ais-jcs gap-m">
                    <p class="cursor-pointer" data-tooltip="Java">Java</p>
                    <p class="cursor-pointer" data-tooltip="Elixir">Elixir</p>
                </div>`,
        example: true
    },
];