# Infraestructura del servidor la cátedra

Información de la infraestructura del servidor de la asignatura Proyecto de Software 2022.

## Infraestructura
![infraestructura](images/infraestructura.png)

## Versiones a utilizar
* Lenguaje: <strong>Python 3.10.4</strong>.
* Servidor Web: <strong>Ngnix</strong>.
* Servidor de Base de Datos: <strong></strong>.

## Código en el server para cada grupo

<label for="number">
  \#<input type="number" min=0 step=1 value=0 class="md-input" id="number" pattern="[0-9]+">
  
</label>

[Admin - Grupo #00](https://admin-grupo00.proyecto2022.linti.unlp.edu.ar/){ .md-button .md-button--primary #admin-link }
[Portal - Grupo #00](https://grupo00.proyecto2022.linti.unlp.edu.ar/){ .md-button .md-button--primary #portal-link }

## Logs

!!! Info
    Pronto se publicarán los enlaces para poder visualizar los logs.
    <!-- Enlaces a logs de la aplicación -->


## Detalles de la infraestructura

* En sus máquinas de desarrollo:
    - Par de claves SSH.
    - Repositorio Git Clonado.
    - Dependencias instaladas con Poetry.
    - Uso de ambiente de development (<strong>FLASK_ENV=development</strong>).

* En Gitlab:
    - Repositorio Central de Git.
    - El deploy de la aplicación se realizará automáticamente con cada push a master.
    - Para que se pueda realizar correctamente tenga en cuenta las definiciones
      de la cátedra respecto a los requisitos que debe cumplir el proyecto.
