from django.shortcuts import render
from django.http import JsonResponse
from .models import Usuario
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.
from django.http import JsonResponse

def test_connection(request):
    return JsonResponse({"message": "Conexión Django–Next.js exitosa ✅"})


@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        nombre_u = data.get('nombre_u')
        contrasena = data.get('contrasena')

        try:
            usuario = Usuario.objects.get(nombre_u=nombre_u, contrasena=contrasena)
            if usuario.activo:
                return JsonResponse({
                    "status": "ok",
                    "message": "Login exitoso ✅",
                    "usuario": {
                        "nombre": usuario.nombre_u,
                        "rol": usuario.id_rol.nombre if usuario.id_rol else None,
                        "area": usuario.id_area.nombre_a if usuario.id_area else None
                    }
                })
            else:
                return JsonResponse({"status": "error", "message": "Usuario inactivo ❌"})
        except Usuario.DoesNotExist:
            return JsonResponse({"status": "error", "message": "Credenciales incorrectas ❌"})
