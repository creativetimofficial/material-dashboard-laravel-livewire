

<div class="position-relative">
    <div class="authentication-wrapper authentication-basic container-p-y">
      <div class="authentication-inner py-4">
        <!-- Register Card -->
        <div class="card p-2">
          <!-- Logo -->
          <div class="app-brand justify-content-center mt-5">
            <a href="index.html" class="app-brand-link gap-2">
              <span class="app-brand-logo demo">
                <span style="color: var(--bs-primary)">
                  <svg width="268" height="150" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M30.0944 2.22569C29.0511 0.444187 26.7508 -0.172113 24.9566 0.849138C23.1623 1.87039 22.5536 4.14247 23.5969 5.92397L30.5368 17.7743C31.5801 19.5558 33.8804 20.1721 35.6746 19.1509C37.4689 18.1296 38.0776 15.8575 37.0343 14.076L30.0944 2.22569Z"
                      fill="currentColor" />
                    <path
                      d="M30.171 2.22569C29.1277 0.444187 26.8274 -0.172113 25.0332 0.849138C23.2389 1.87039 22.6302 4.14247 23.6735 5.92397L30.6134 17.7743C31.6567 19.5558 33.957 20.1721 35.7512 19.1509C37.5455 18.1296 38.1542 15.8575 37.1109 14.076L30.171 2.22569Z"
                      fill="url(#paint0_linear_2989_100980)"
                      fill-opacity="0.4" />
                    <path
                      d="M22.9676 2.22569C24.0109 0.444187 26.3112 -0.172113 28.1054 0.849138C29.8996 1.87039 30.5084 4.14247 29.4651 5.92397L22.5251 17.7743C21.4818 19.5558 19.1816 20.1721 17.3873 19.1509C15.5931 18.1296 14.9843 15.8575 16.0276 14.076L22.9676 2.22569Z"
                      fill="currentColor" />
                    <path
                      d="M14.9558 2.22569C13.9125 0.444187 11.6122 -0.172113 9.818 0.849138C8.02377 1.87039 7.41502 4.14247 8.45833 5.92397L15.3983 17.7743C16.4416 19.5558 18.7418 20.1721 20.5361 19.1509C22.3303 18.1296 22.9391 15.8575 21.8958 14.076L14.9558 2.22569Z"
                      fill="currentColor" />
                    <path
                      d="M14.9558 2.22569C13.9125 0.444187 11.6122 -0.172113 9.818 0.849138C8.02377 1.87039 7.41502 4.14247 8.45833 5.92397L15.3983 17.7743C16.4416 19.5558 18.7418 20.1721 20.5361 19.1509C22.3303 18.1296 22.9391 15.8575 21.8958 14.076L14.9558 2.22569Z"
                      fill="url(#paint1_linear_2989_100980)"
                      fill-opacity="0.4" />
                    <path
                      d="M7.82901 2.22569C8.87231 0.444187 11.1726 -0.172113 12.9668 0.849138C14.7611 1.87039 15.3698 4.14247 14.3265 5.92397L7.38656 17.7743C6.34325 19.5558 4.04298 20.1721 2.24875 19.1509C0.454514 18.1296 -0.154233 15.8575 0.88907 14.076L7.82901 2.22569Z"
                      fill="currentColor" />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2989_100980"
                        x1="5.36642"
                        y1="0.849138"
                        x2="10.532"
                        y2="24.104"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-opacity="1" />
                        <stop offset="1" stop-opacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_2989_100980"
                        x1="5.19475"
                        y1="0.849139"
                        x2="10.3357"
                        y2="24.1155"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-opacity="1" />
                        <stop offset="1" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </span>
              <span class="app-brand-text demo text-heading fw-bold">Materialize</span>
            </a>
          </div>
          <!-- /Logo -->
          <div class="card-body mt-2">
            <h4 class="mb-2">Adventure starts here 🚀</h4>
            <p class="mb-4">Make your app management easy and fun!</p>

            <form class="mb-3" wire:submit.prevent ="store">
              <div class="form-floating form-floating-outline mb-3
              @if(strlen($name?? '') > 0) is-filled @endif">
                <input
                  type="text"
                  class="form-control  @error('name') is-invalid @enderror"
                  id="username"
                  wire:model="name"
                  placeholder="Ingresa tu nombre completo"
                  autofocus />
                  @error('name')
                  <p class='text-danger inputerror'>{{ $message }} </p>
                  @enderror
                <label for="username">Nombre completo</label>
              </div>
              <div class="form-floating form-floating-outline mb-3
              @if(strlen($email?? '') > 0) is-filled @endif">
                <input
                type="email"
                class="form-control  @error('email') is-invalid @enderror"
                id="email"
                wire:model="email"
                placeholder="Enter your email" />
                 @error('email')
                  <p class='text-danger inputerror'>{{ $message }} </p>
                  @enderror
                <label for="email">Email</label>
              </div>
              <div class="form-floating form-floating-outline mb-3
              @if(strlen($password?? '') > 0) is-filled @endif">
                <input
                type="password"
                class="form-control  @error('password') is-invalid @enderror"
                id="password"
                wire:model="password"
                placeholder="***********************" />
                 @error('password')
                  <p class='text-danger inputerror'>{{ $message }} </p>
                  @enderror
                <label for="password">Contraseña</label>
              </div>
              <div class="form-floating form-floating-outline mb-3
              @if(strlen($password?? '') > 0) is-filled @endif">
                <input
                type="password"
                class="form-control  @error('password_confirmation') is-invalid @enderror"
                id="password_confirmation"
                wire:model="password_confirmation"
                placeholder="***********************" />
                 @error('password_confirmation')
                  <p class='text-danger inputerror'>{{ $message }} </p>
                  @enderror
                <label for="password_confirmation">Confirmación de Contraseña</label>
              </div>


              <button type="submit" class="btn btn-primary d-grid w-100" type="submit">Sign up</button>
            </form>

            <p class="text-center">
              <span>Already have an account?</span>
              <a href="auth-login-basic.html">
                <span>Sign in instead</span>
              </a>
            </p>

            <div class="divider my-4">
              <div class="divider-text">or</div>
            </div>

            <div class="d-flex justify-content-center gap-2">
              <a href="javascript:;" class="btn btn-icon btn-lg rounded-pill btn-text-facebook">
                <i class="tf-icons mdi mdi-24px mdi-facebook"></i>
              </a>

              <a href="javascript:;" class="btn btn-icon btn-lg rounded-pill btn-text-twitter">
                <i class="tf-icons mdi mdi-24px mdi-twitter"></i>
              </a>

              <a href="javascript:;" class="btn btn-icon btn-lg rounded-pill btn-text-github">
                <i class="tf-icons mdi mdi-24px mdi-github"></i>
              </a>

              <a href="javascript:;" class="btn btn-icon btn-lg rounded-pill btn-text-google-plus">
                <i class="tf-icons mdi mdi-24px mdi-google"></i>
              </a>
            </div>
          </div>
        </div>
        <!-- Register Card -->
        <img
          alt="mask"
          src="../../assets/img/illustrations/auth-basic-register-mask-light.png"
          class="authentication-image d-none d-lg-block"
          data-app-light-img="illustrations/auth-basic-register-mask-light.png"
          data-app-dark-img="illustrations/auth-basic-register-mask-dark.png" />
      </div>
    </div>
  </div>
