<aside id="layout-menu" class="layout-menu-horizontal menu-horizontal menu bg-menu-theme flex-grow-0">
    <div class="container-xxl d-flex h-100">
      <ul class="menu-inner">
        <!-- Dashboards -->
        <li class="menu-item">
            <a href="{{route('dashboard')}}" class="menu-link">
              <i class="menu-icon tf-icons mdi mdi-home-outline"></i>
              <div data-i18n="Inicio">Inicio</div>
            </a>
          </li>

        <li class="menu-item">
          <a href="javascript:void(0)" class="menu-link menu-toggle">
            <i class="menu-icon tf-icons mdi mdi-shield-outline"></i>
            <div data-i18n="Seguridad">Seguridad</div>
          </a>
          <ul class="menu-sub">
            <li class="menu-item">
              <a href="app-ecommerce-dashboard.html" class="menu-link">
                <i class="menu-icon tf-icons mdi mdi-cart-outline"></i>
                <div data-i18n="eCommerce">eCommerce</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="dashboards-crm.html" class="menu-link">
                <i class="menu-icon tf-icons mdi mdi-chart-donut"></i>
                <div data-i18n="CRM">CRM</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="index.html" class="menu-link">
                <i class="menu-icon tf-icons mdi mdi-chart-timeline-variant"></i>
                <div data-i18n="Analytics">Analytics</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="app-logistics-dashboard.html" class="menu-link">
                <i class="menu-icon tf-icons mdi mdi-truck-outline"></i>
                <div data-i18n="Logistics">Logistics</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="app-academy-dashboard.html" class="menu-link">
                <i class="menu-icon tf-icons mdi mdi-notebook-outline"></i>
                <div data-i18n="Academy">Academy</div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
