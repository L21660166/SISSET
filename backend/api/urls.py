from django.urls import path
from .views import test_connection
from .views import login_view 

urlpatterns = [
    path('test/', test_connection),
    path('login/', login_view, name='login'),
]
