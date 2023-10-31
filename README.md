# [Larawire]

*Frontend version*: Materialize Dashboard v3.0.0. More info at https://demos.pixinvent.com/materialize-html-admin-template/html/vertical-menu-template/dashboards-crm.html

Acelere su desarrollo web con el Panel de administración de Bootstrap 5 creado para Laravel Framework 9.x y versiones posteriores.

Si desea obtener más funciones, conviértase en PRO con [Larawire PRO]

## Tabla de contenido
* [Pre-requisitos](#pre-requisitos)
* [Instalación](#instalación)
* [Acceso](#login)
* [Registro](#register)
* [Olvido de contraseña](#forgot-password)
* [Reinicio de contraseña](#reset-password)
* [Perfil de usuario](#user-profile)

## Pre-requisitos

Si aún no tiene un entorno local Apache con PHP y MySQL, utilice uno de los siguientes enlaces:

 - Windows: https://updivision.com/blog/post/beginner-s-guide-to-setting-up-your-local-development-environment-on-windows
 - Linux & Mac: https://updivision.com/blog/post/guide-what-is-lamp-and-how-to-install-it-on-ubuntu-and-macos

Además, necesitarás instalar Composer.: https://getcomposer.org/doc/00-intro.md  
Y Laravel: https://laravel.com/docs/10.x

## Instalación
1. Descomprime el archivo descargado
2. Copie y pegue la carpeta **larawire** en su carpeta **proyectos**. Cambie el nombre de la carpeta al nombre de su proyecto.
3. En tu terminal ejecuta `composer install`
4. Copie `.env.example` a `.env` y actualice las configuraciones (principalmente la configuración de la base de datos)
5. En tu terminal ejecuta `php artisan key:generate`
6. Ejecute `php artisan migrate --seed` para crear las tablas de la base de datos y sembrar las tablas de roles y usuarios.
7. Ejecute `php artisan storage:link` para crear el enlace simbólico de almacenamiento (si está utilizando **Vagrant** con **Homestead** para el desarrollo, recuerde ingresar mediante ssh a su máquina virtual y ejecutar el comando desde allí).


## Uso
Registre un usuario o inicie sesión con el usuario predeterminado **admin@material.com** y la contraseña **secret** de su base de datos y comience a realizar pruebas (asegúrese de ejecutar las migraciones y los sembradores para que estas credenciales estén disponibles).

Además del panel de control, las páginas de autenticación, las páginas de facturación y de tabla, también hay una página de edición de perfil. Todos los archivos necesarios se instalan de fábrica y todas las rutas necesarias se agregan a `routes/web.php`. Tenga en cuenta que todas las funciones se pueden ver una vez que inicie sesión con las credenciales proporcionadas o registrando su propio usuario.

### Login
Si no ha iniciado sesión, solo podrá acceder a esta página o a la página de registro. La URL predeterminada lo lleva a la página de inicio de sesión donde utiliza las credenciales predeterminadas **admin@material.com** con la contraseña **secret**. Sólo es posible iniciar sesión con credenciales ya existentes. Para que esto funcione deberías haber ejecutado las migraciones.

The `App/Http/Livewire/Auth/Login.php` handles the logging in of an existing user.

```
       public function store()
                {
                    $attributes = $this->validate();
            
                    if (! auth()->attempt($attributes)) {
                        throw ValidationException::withMessages([
                            'email' => 'Your provided credentials could not be verified.'
                        ]);
                    }
            
                    session()->regenerate();
            
                    return redirect('/dashboard');
            
                }
```

### Register
Puedes registrarte como usuario rellenando el nombre, correo electrónico y contraseña de tu cuenta. Puede hacerlo accediendo a la página de registro desde el botón "**Registrarse**" en la barra de navegación superior o haciendo clic en el botón "**Registrarse**" en la parte inferior del formulario de inicio de sesión. Otro simple La forma es agregar **/sign-up** en la URL.

The `App/Http/Livewire/Auth/Register.php` Maneja el registro de un nuevo usuario.

```
   public function store(){

                  $attributes = $this->validate();
          
                  $user = User::create($attributes);
          
                  auth()->login($user);
                  
                  return redirect('/dashboard');
              } 
```

### Forgot Password
Si un usuario olvida la contraseña de la cuenta, es posible restablecerla. Para esto, el usuario debe hacer clic en "**aquí**" debajo del formulario de inicio de sesión.

`App/Http/Livewire/Auth/ForgotPassword.php` se encarga de enviar un correo electrónico al usuario donde podrá restablecer la contraseña posteriormente.

```
       public function show(){
          
                  $this->validate();
          
                  $user = User::where('email', $this->email)->first();
          
                      if($user){
          
                          $this->notify(new ResetPassword($user->id));
          
                          return back()->with('status', "Email sent.");
          
                      } else {
                          return back()->with('email', "Invalid email");
                      }
              }
```

### Reset Password
El usuario que olvidó la contraseña recibe un correo electrónico en la dirección de correo electrónico de la cuenta. El usuario puede acceder a la página de restablecimiento de contraseña haciendo clic en el botón que se encuentra en el correo electrónico. El enlace para restablecer la contraseña está disponible durante 12 horas. El usuario deberá agregar el correo electrónico, la contraseña y confirmar la contraseña para que se actualice su contraseña.

`App/Http/Livewire/Auth/ResetPassword.php` ayuda al usuario a restablecer la contraseña.

```
     public function update(){
        
                $this->validate(); 
                  
                $existingUser = User::where('email', $this->email)->first();
        
                if($existingUser && $existingUser->id == $this->urlID) { 
                    $existingUser->update([
                        'password' => $this->password
                    ]);
                    redirect('sign-in')->with('status', 'Password changed.');
                } else {
                    return back()->with('email', "Invalid email");
                }
            
            }
```

### Perfil del usuario
Un usuario que haya iniciado sesión puede acceder al perfil haciendo clic en "**Perfil de usuario**" en la barra lateral o agregando **/user-profile** en la URL. El usuario puede agregar información como número de teléfono, ubicación, descripción o cambiar el nombre y el correo electrónico.

`App/Http/Livewire/ExampleLaravel/UserProfile.php` maneja la información del perfil del usuario.

```
    public function update()
                {
                    $this->validate();
                    $this->user->save();
                    return back()->withStatus('Profile successfully updated.');
                
                 }

```

### Dashboard
Puede acceder al panel utilizando el enlace "**Dashboard**" en la barra lateral izquierda o agregando **/dashboard** en la URL después de iniciar sesión.

## Browser Support
En la actualidad, nuestro objetivo oficial es admitir las dos últimas versiones de los siguientes navegadores:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">

### Social Media

### DEVTECHVNZLA

Twitter: <https://twitter.com/devtechvnzla>

Facebook: <https://www.facebook.com/devtechvnzla>

Dribbble: <https://dribbble.com/devtechvnzla>

Instagram: <https://www.instagram.com/devtechvnzla>

## Creditos de autor

- [DEVTECHVNZLA](https://devtechvnzla.com/)
