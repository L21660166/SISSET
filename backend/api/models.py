from django.db import models

class Area(models.Model):
    id_area = models.AutoField(primary_key=True)
    nombre_a = models.CharField(max_length=100)
    tipo = models.CharField(max_length=50)
    ubicacion = models.CharField(max_length=100)
    estado = models.CharField(max_length=50)
    responsable = models.CharField(max_length=100)

    class Meta:
        db_table = 'Area'

class Rol(models.Model):
    id_rol = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)

    class Meta:
        db_table = 'Rol'

class Usuario(models.Model):
    id_usuario = models.AutoField(primary_key=True)
    nombre_u = models.CharField(max_length=100)
    contrasena = models.CharField(max_length=255)
    telefono = models.CharField(max_length=20, null=True)
    fecha_registro = models.DateField(null=True)
    activo = models.BooleanField(default=True)
    id_rol = models.ForeignKey(Rol, on_delete=models.SET_NULL, null=True, db_column='id_rol')
    id_area = models.ForeignKey(Area, on_delete=models.CASCADE, null=True, db_column='id_area')

    class Meta:
        db_table = 'Usuario'

    def __str__(self):
        return self.nombre_u
