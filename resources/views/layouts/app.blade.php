<x-layouts.base>

    <div class="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div class="layout-container">
            <x-navbars.navs.auth></x-navbars.navs.auth>
            <!-- Layout container -->
            <div class="layout-page">
            <!-- Content wrapper -->
             <div class="content-wrapper">
                <x-navbars.sidebar></x-navbars.sidebar>
                 <div class="container-xxl flex-grow-1 container-p-y">
                 {{ $slot }}
                 </div>

            </div>
            <x-footers.auth></x-footers.auth>
        </div>
        </div>
    </div>

</x-layouts.base>
