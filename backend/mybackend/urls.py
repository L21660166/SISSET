from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
from django.shortcuts import redirect

def redirect_to_login(request):
    return redirect('login')  # Redirige a la ruta 'login'

urlpatterns = [
    path('', redirect_to_login),  # 🔹 raíz redirige al login
    path('admin/', admin.site.urls),
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(next_page='login'), name='logout'),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),  
]


