
    <main class="main-content  mt-0">
        <div class="page-header align-items-start min-vh-100"
            style="background-image: url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80');">
            <span class="mask bg-gradient-dark opacity-6"></span>
            <div class="container my-auto">
                <div class="row">
                    <div class="col-lg-4 col-md-8 col-12 mx-auto">
                        <div class="card z-index-0 fadeIn3 fadeInBottom">
                            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                                    <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">Change your password</h4>
                                </div>
                            </div>
                            <div class="card-body">
                                <form wire:submit.prevent="update" class="text-start">
                                    @if (Session::has('email'))
                                    <div class="alert alert-danger text-light" role="alert">
                                     {{ Session::get('email') }}
                                    </div>
                                    @endif
                                    @error('email')
                                    <p class='text-danger'>{{ $message }} </p>
                                    @enderror
                                    <div class="input-group input-group-outline my-3">
                                        <input wire:model.lazy="email" type="email" class="form-control"  required placeholder="Email">
                                    </div>
                                    @error('password')
                                    <p class='text-danger'>{{ $message }} </p>
                                    @enderror
                                    <div class="input-group input-group-outline my-3">
                                        <input wire:model.lazy="password" type="password" class="form-control" required placeholder="New Password">
                                    </div>
                                    @error('password_confirmation')
                                    <p class='text-danger'>{{ $message }} </p>
                                    @enderror
                                    <div class="input-group input-group-outline my-3">
                                        <input wire:model.lazy="passwordConfirmation" type="password" class="form-control" required placeholder="Confirm Password">
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" class="btn bg-gradient-primary w-100 my-4 mb-2">Change
                                            password</button>
                                    </div>
                                    <p class="mt-4 text-sm text-center">
                                        Don't have an account?
                                        <a href="{{ route('register') }}"
                                            class="text-primary text-gradient font-weight-bold">Sign up</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
